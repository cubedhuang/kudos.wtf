import type { PropsWithChildren } from "react";

export default function DiscordBox({ children }: PropsWithChildren) {
	return (
		<span className="bg-[#5865f2] bg-opacity-70 hover:bg-opacity-100 text-white px-0.5 py-[1px] rounded cursor-pointer transition">
			{children}
		</span>
	);
}
