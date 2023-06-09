import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'vncsmnl ─ developer';
	const description = "Hey 👋 I'm Vinícius Manoel, a developer";

	return {
		title,
		description,
		canonical: `https://vini.thedev.id/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'vncsmnl',
			url: `https://vini.thedev.id/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://vini.thedev.id/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@vncsmnl',
			site: '@vncsmnl',
		},
		...props,
	};
}
