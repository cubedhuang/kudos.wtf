import { LinkIcon } from "@heroicons/react/solid";
import type { PropsWithChildren } from "react";

interface HeadingProps {
	id: string;
}

export default function Heading({
	id,
	children
}: PropsWithChildren<HeadingProps>) {
	return (
		<h2 id={id} className="group heading relative text-6xl mt-12">
			{children}
			<a
				href={`#${id}`}
				title="Link to this section"
				className="absolute w-8 h-8 top-4 right-full opacity-0 group-hover:opacity-100 transition"
			>
				<LinkIcon />
			</a>
		</h2>
	);
}
