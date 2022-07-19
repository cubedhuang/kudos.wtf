import type { PropsWithChildren } from "react";

interface HeadingProps {
	id: string;
}

export default function Heading({
	id,
	children
}: PropsWithChildren<HeadingProps>) {
	return (
		<h2 id={id} className="heading text-6xl mt-12">
			{children}
		</h2>
	);
}
