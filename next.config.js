const WindiCSS = require('windicss-webpack-plugin');
const { withAxiom } = require('next-axiom');

const ContentSecurityPolicy = `
  child-src *.google.com streamable.com;
  connect-src *;
  default-src 'self';
  font-src 'self';
  img-src * blob: data:;
  media-src 'none';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.splitbee.io;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  worker-src 'self' 'unsafe-inline' blob:;
`;

/**
 * @type {import('next').NextConfig}
 */
const config = {
	trailingSlash: true,
	poweredByHeader: false,
	compress: true,
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	experimental: {
		optimizePackageImports: ['@iconify/react', 'clsx', 'date-fns'],
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		remotePatterns: [
			// Discord assets
			{
				protocol: 'https',
				hostname: 'cdn.discordapp.com',
				pathname: '/**',
			},
			// GitHub assets
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				pathname: '/**',
			},
			// Spotify Album Art
			{
				protocol: 'https',
				hostname: 'i.scdn.co',
				pathname: '/**',
			},
			// Streamable thumbnails
			{
				protocol: 'https',
				hostname: 'cdn-cf-east.streamable.com',
				pathname: '/**',
			},
			// Unsplash
			{
				protocol: 'https',
				hostname: 'source.unsplash.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '/**',
			},
		],
	},
	// Inspired by: https://github.com/leerob/leerob.io/blob/main/next.config.js#L44-L81
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
					{
						key: 'Content-Security-Policy',
						value: ContentSecurityPolicy.replace(/\n/g, ''),
					},
					// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
					// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload',
					},
					// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
					// Opt-out of Google FLoC: https://amifloced.org/
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
					},
					// Additional security headers for better performance
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
				],
			},
		];
	},
	reactStrictMode: true,
	productionBrowserSourceMaps: false,
	webpack: (config, { dev, isServer }) => {
		// Replace React with Preact only in client production build
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
			});
		}

		// Optimize bundle splitting
		if (!dev && !isServer) {
			config.optimization.splitChunks = {
				...config.optimization.splitChunks,
				cacheGroups: {
					...config.optimization.splitChunks.cacheGroups,
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
						priority: 10,
					},
					common: {
						minChunks: 2,
						chunks: 'all',
						name: 'common',
						priority: 5,
						enforce: true,
					},
				},
			};
		}

		// Performance optimizations
		config.resolve.fallback = {
			...config.resolve.fallback,
			fs: false,
			path: false,
			os: false,
		};

		config.plugins.push(new WindiCSS());

		config.module.rules.push({
			test: /\.(glsl|vs|fs|frag|vert)$/,
			use: ['ts-shader-loader'],
		});

		return config;
	},
};

module.exports = withAxiom(config);
