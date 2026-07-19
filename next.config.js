const WindiCSS = require('windicss-webpack-plugin');
const { withAxiom } = require('next-axiom');

/**
 * @type {import('next').NextConfig}
 */
const config = {
	trailingSlash: true,
	output: 'export',
	poweredByHeader: false,
	compress: true,
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	experimental: {
		optimizePackageImports: ['@iconify/react', 'clsx', 'date-fns'],
	},
	images: {
		unoptimized: true,
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
