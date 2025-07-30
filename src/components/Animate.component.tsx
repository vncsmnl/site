import { animate } from 'motion';
import { isCrawlerUserAgent } from 'is-web-crawler';
import { useEffect, useRef } from 'react';
import { useMedia } from 'react-use';

import { usePersistantState } from '~/lib';

import type { ComponentPropsWithRef, ElementType } from 'react';
import type { AnimationOptions, DOMKeyframesDefinition } from 'motion';

type AnimateProps<T extends ElementType> = {
	animation: DOMKeyframesDefinition;
	as?: T;
	enabled?: boolean;
	transition?: AnimationOptions;
} & Omit<ComponentPropsWithRef<T>, 'animation' | 'as' | 'transition'>;

const defaultTransition: AnimationOptions = {
	delay: 0,
	duration: 0.5,
	ease: 'easeInOut',
	repeat: 0,
};

export function Animate<T extends ElementType>({
	animation,
	as: Component = 'div' as T,
	children,
	enabled = true,
	transition,
	...rest
}: AnimateProps<T>): JSX.Element {
	const { animations } = usePersistantState().get();
	const prefersReducedMotion = useMedia('(prefers-reduced-motion)', true);

	const ref = useRef<any>(null);

	useEffect(() => {
		if (ref.current && enabled && animations && !(prefersReducedMotion || isCrawlerUserAgent()))
			animate(ref.current, animation, {
				...defaultTransition,
				...transition,
			});
	}, [animation, animations, enabled, prefersReducedMotion, transition]);

	// @ts-ignore - Complex generic ref typing issue with Motion
	const ComponentWithRef = Component as any;

	return (
		<ComponentWithRef ref={ref} {...rest}>
			{children}
		</ComponentWithRef>
	);
}
