"use client";

import { useEffect, useState } from "react";
import { ChatGPT, Freedium, GitHub, GMail, LeetCode, Reddit, TailScale, WhatsApp, YouTube } from "./svgs";
import { WAppLinksProp } from "./WAppLinks";
import { KeyBindsProps } from "./KeyBinds";
import ShortCuts from "./ShortCuts";
import Links from "./Links";

// Links
export const AL: WAppLinksProp[] = [
	{ href: "https://github.com/", svg: <GitHub className="w-12 h-12" /> },

	{ href: "https://mail.google.com/mail/u/0/#inbox", svg: <GMail className="w-10 h-10" /> },

	{ href: "https://login.tailscale.com/admin/machines", svg: <TailScale className="w-10 h-10" /> },

	{ href: "https://chatgpt.com/", svg: <ChatGPT className="w-10 h-10" /> },

	{ href: "https://web.whatsapp.com/", svg: <WhatsApp className="w-10 h-10" /> },

	{ href: "https://leetcode.com/problemset/", svg: <LeetCode className="w-10 h-10" /> },

	{ href: "https://freedium.cfd/", svg: <Freedium className="w-13 h-13" /> },

	{ href: "https://youtube.com/", svg: <YouTube className="w-12 h-12" /> },

	{ href: "https://reddit.com/", svg: <Reddit className="w-10 h-10" /> },
];

// KeyBinds || ShortCuts
export const shortcuts: KeyBindsProps[] = [
	{ keyName: "s", link: "Focus Input field" },

	{ keyName: "g", link: "GitHub" },

	{ keyName: "m", link: "Gmail" },

	{ keyName: "t", link: "TailScale" },

	{ keyName: "c", link: "ChatGPT" },

	{ keyName: "w", link: "WhatsApp" },

	{ keyName: "l", link: "LeetCode" },

	{ keyName: "f", link: "Freedium" },

	{ keyName: "y", link: "YouTube" },

	{ keyName: "r", link: "Reddit" },
];

function Comp() {
	// <----- Time ----->
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<div className="flex justify-center items-center min-h-[90vh] w-screen text-[#bababa] relative">
				{/* Time in top-right */}
				<p id="time" className="absolute -top-10 right-6 text-[#b1edff] opacity-50 text-2xl font-semibold hover:opacity-100 transition">
					{currentTime.toLocaleTimeString()}
				</p>

				<div className="grid grid-rows-auto gap-6 w-full max-w-4xl px-4">
					{/* <-- SEARCH BAR --> */}
					<input
						id="search"
						type="text"
						placeholder="Search"
						className="h-[3rem] w-full text-lg md:text-xl text-center text-[#bababa] 
                 bg-[#0d1117]/80 border border-[#2f2f2f] rounded-full 
                 focus:outline-none focus:border-[#54e2ff80] 
                 placeholder:text-[#4a999d] focus:placeholder-opacity-0 
                 transition font-semibold shadow-md"
					/>

					{/* <-- WEB APPS LINKS --> */}
					<Links />

					{/* <-- KEY BINDINGS --> */}
					<ShortCuts />
				</div>
			</div>
		</>
	);
}

export default Comp;
