import Image from 'next/image';

interface XFigureProps {
	alt?: string;
	caption?: string;
	src: string;
}

export function XFigure({ alt, caption, src }: XFigureProps): JSX.Element {
	return (
		<figure>
			<Image
				alt={alt ?? caption}
				className="rounded-3xl object-cover select-none hover:shadow-xl w-full h-auto"
				draggable={false}
				height={600}
				src={src}
				width={800}
			/>
			<figcaption>{alt ?? caption}</figcaption>
		</figure>
	);
}
