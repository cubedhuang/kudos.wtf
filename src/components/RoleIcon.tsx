import ImageLink from "./ImageLink";

export default function RoleIcon({ src }: { src: string }) {
	return (
		<ImageLink
			src={src}
			width={24}
			height={24}
			className="align-text-bottom inline-block drop-shadow-md cursor-pointer"
		/>
	);
}
