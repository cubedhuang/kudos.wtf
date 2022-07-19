import Image from "next/future/image";

type ImageProps = Parameters<typeof Image>[0];

interface ImgProps extends ImageProps {
	src: string;
}

export default function ImageLink({ ...props }: ImgProps) {
	return (
		<a
			href={props.src}
			target="_blank"
			rel="noopener noreferrer"
			className="contents"
		>
			<Image {...props} />
		</a>
	);
}
