import { create as createConfetti } from 'canvas-confetti';
import { useEffect, useRef } from 'react';

import { EventType } from '~/types';

export interface EventProps {
	event: EventType;
}

export function Event({ event }: EventProps): JSX.Element {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const confetti = createConfetti(canvasRef.current, {
		resize: true,
	});

	useEffect(() => {
		switch (event) {
			case EventType.BIRTHDAY: {
				setTimeout(() => {
					Promise.all([
						// Left Edge
						confetti({
							particleCount: 100,
							startVelocity: 100,
							angle: 60,
							spread: 70,
							origin: { x: 0, y: 1 },
						}),
						// Right Edge
						confetti({
							particleCount: 100,
							startVelocity: 100,
							angle: 120,
							spread: 70,
							origin: { x: 1, y: 1 },
						}),
					]);
				}, 1000);
				break;
			}
			case EventType.CHRISTMAS: {
				// Continuous snowfall effect
				const snowfall = () => {
					confetti({
						particleCount: 3,
						startVelocity: 0,
						ticks: 200,
						gravity: 0.3,
						drift: Math.random() * 0.5 - 0.25,
						angle: 90,
						spread: 10,
						origin: {
							x: Math.random(),
							y: -0.1
						},
						colors: ['#ffffff', '#f0f8ff', '#e6f3ff'],
						shapes: ['circle'],
						scalar: 0.8,
					});
				};

				// Initial burst
				setTimeout(() => {
					confetti({
						particleCount: 50,
						startVelocity: 0,
						ticks: 300,
						gravity: 0.2,
						angle: 90,
						spread: 100,
						origin: { x: 0.5, y: -0.1 },
						colors: ['#ffffff', '#f0f8ff', '#e6f3ff'],
						shapes: ['circle'],
						scalar: 1,
					});
				}, 500);

				// Continuous snowfall
				const interval = setInterval(snowfall, 300);

				// Clean up after 30 seconds
				const timeout = setTimeout(() => {
					clearInterval(interval);
				}, 30000);

				return () => {
					clearInterval(interval);
					clearTimeout(timeout);
				};
			}
		}
	}, [confetti, event]);

	return <canvas className="fixed inset-0 z-20" ref={canvasRef} />;
}
