"use client";

import { useEffect, useRef, useState } from "react";
import { ChatGPT, Freedium, GitHub, GMail, LeetCode, Reddit, TailScale, WhatsApp, YouTube } from "./svgs";
import { WAppLinksProp } from "./WAppLinks";
import ShortCuts from "./ShortCuts";
import Links from "./Links";
import { useKey } from "../useKey";

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

function Comp() {
	// <----- Time ----->
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const inputEl = useRef<HTMLInputElement>(null);

	// <----- Focus Input field ----->
	useKey("s", "", function () {
		if (document.activeElement !== inputEl.current) {
			inputEl.current?.focus();
		}
	});

	// <----- Blur the focused input field ----->
	useKey("Escape", "", function () {
		// Blur the input only if it's currently focused
		if (document.activeElement === inputEl.current) {
			inputEl.current?.blur();
			console.log("Escape pressed -> input blurred");
		}
	});

	// Hooks cannot be called inside callback ;)
	useKey("g", "https://github.com");
	useKey("m", "https://mail.google.com/mail/u/0/#inbox");
	useKey("t", "https://login.tailscale.com/admin/machines");
	useKey("c", "https://chatgpt.com");
	useKey("w", "https://web.whatsapp.com");
	useKey("l", "https://leetcode.com/problemset");
	useKey("f", "https://freedium.cfd");
	useKey("y", "https://youtube.com");
	useKey("r", "https://reddit.com");

	const [query, setQuery] = useState<string>("");

	// Toggle Key Bindings State
	const [isOpen, setIsOpen] = useState<boolean>(false);

	// Toggle links icon
	const [showIcons, setShowIcons] = useState<boolean>(false);

	// <----- Query the data ----->
	useKey("Enter", "", function () {
		if (document.activeElement === inputEl.current) {
			if (query.trim().length > 0) {
				const data = encodeURIComponent(query.trim());
				location.href = `https://www.google.com/search?q=${data}`;
			}
		}
	});

	// Toggle key bindings state
	useKey("k", "", function () {
		setIsOpen(!isOpen);
	});

	// Toggle links icon
	useKey(",", "", () => {
		setShowIcons(!showIcons);
	});

	return (
		<>
			<div className="flex justify-center items-center min-h-[90vh] w-screen text-[#bababa] relative">
				{/* Time in top-right */}
				<p id="time" className="absolute -top-10 right-6 text-[#b1edff] opacity-50 text-2xl font-semibold hover:opacity-100 transition">
					{currentTime.toLocaleTimeString()}
					<br />
					<span>{currentTime.toLocaleDateString()}</span>
				</p>

				<div className="grid grid-rows-auto gap-6 w-full max-w-4xl px-4">
					{/* <-- SEARCH BAR --> */}
					<input
						ref={inputEl}
						id="search"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						type="text"
						placeholder="Search"
						className="h-[3rem] w-full text-lg md:text-xl text-center text-[#bababa] 
                 bg-[#0d1117]/80 border border-[#2f2f2f] rounded-full 
                 focus:outline-none focus:border-[#54e2ff80] 
                 placeholder:text-[#4a999d] focus:placeholder-opacity-0 
                 transition font-semibold shadow-md"
					/>

					{/* <-- WEB APPS LINKS --> */}
					{showIcons && <Links />}

					{/* <-- KEY BINDINGS --> */}
					{!isOpen && <p className="absolute left-4 bottom-4 text-cyan-600 font-extrabold text-md">Press K to toggle Key Bindings</p>}
					{isOpen && <ShortCuts />}
				</div>
			</div>
		</>
	);
}

export default Comp;
