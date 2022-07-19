import Image from "next/future/image";
import type { PropsWithChildren } from "react";

interface DiscordMessageProps {
	img: string;
	name: string;
}

export default function DiscordMessage({
	img,
	name,
	children
}: PropsWithChildren<DiscordMessageProps>) {
	return (
		<div className="mt-4 flex items-center gap-2 bg-[#36393f] text-white p-4 rounded-lg">
			<Image
				src={img}
				alt={`${name}'s avatar`}
				width={56}
				height={56}
				className="w-14 h-14 rounded-full"
			/>
			<div>
				<div className="text-white">{name}</div>
				<div className="text-gray-200">{children}</div>
			</div>
		</div>
	);
}
