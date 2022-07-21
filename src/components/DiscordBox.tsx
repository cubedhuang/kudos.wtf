import type { PropsWithChildren } from "react";

interface DiscordBoxProps {
	href?: string;
}

export default function DiscordBox({
	href,
	children
}: PropsWithChildren<DiscordBoxProps>) {
	return (
		<span className="bg-[#5865f2] bg-opacity-70 hover:bg-opacity-100 text-white px-0.5 py-[1px] rounded cursor-pointer transition">
			{href ? (
				<a href={href} target="_blank" rel="noopener noreferrer">
					{children}
				</a>
			) : (
				children
			)}
		</span>
	);
}
