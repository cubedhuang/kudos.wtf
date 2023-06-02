import Image from "next/future/image";

export default function RoleIcon({ src }: { src: string }) {
	return (
		<a
			href={src}
			target="_blank"
			rel="noopener noreferrer"
			className="contents"
		>
			<Image
				src={src}
				alt=""
				width={24}
				height={24}
				className="inline-block drop-shadow-md cursor-pointer -translate-y-0.5"
			/>
		</a>
	);
}
