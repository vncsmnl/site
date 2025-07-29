import splitbee from '@splitbee/web';
import { useEffect } from 'react';

import type { GetStaticProps, GetStaticPaths } from 'next';

import type { Referrals } from '~/types';

interface Props {
	redirectUrl: string;
	referralName: string;
	code?: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { default: rawReferrals } = await import('~/data/referrals.json');
	const referrals = rawReferrals as Referrals;

	const paths = [];

	// Adicionar paths para os nomes principais
	referrals.forEach((referral) => {
		paths.push({
			params: { name: referral.name.toLowerCase() },
		});

		// Adicionar paths para aliases se existirem
		if (referral.aliases) {
			referral.aliases.forEach((alias) => {
				paths.push({
					params: { name: alias.toLowerCase() },
				});
			});
		}
	});

	return {
		paths,
		fallback: false, // false significa que outras rotas retornarão 404
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { default: rawReferrals } = await import('~/data/referrals.json');
	const referrals = rawReferrals as Referrals;

	if (!params?.name) {
		return {
			redirect: {
				destination: '/referrals',
				permanent: false,
			},
		};
	}

	const paramName = Array.isArray(params.name)
		? params.name[0].toLowerCase()
		: params.name.toLowerCase();

	const result = referrals.find((referral) => {
		const referralName = referral.name.toLowerCase();

		if (referralName === paramName) return referral;

		if (referral.aliases)
			return referral.aliases.find((alias) => alias.toLowerCase() === paramName);

		return undefined;
	});

	if (!result) {
		return {
			redirect: {
				destination: '/referrals',
				permanent: false,
			},
		};
	}

	return {
		props: {
			redirectUrl: result.url,
			referralName: result.name,
			code: result.code || null,
		},
	};
};

export default function ReferralRedirectPage({ redirectUrl, referralName, code }: Props): null {
	useEffect(() => {
		// Track analytics
		splitbee.track(referralName.toLowerCase(), {
			code,
			type: 'referral',
			url: redirectUrl,
		});

		// Redirect to the target URL
		window.location.href = redirectUrl;
	}, [redirectUrl, referralName, code]);

	return null;
}
