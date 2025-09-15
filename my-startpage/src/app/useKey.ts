import { useEffect } from "react";

export function useKey(key: string, href?: string, action?: () => void) {
	useEffect(() => {
		function callback(e: KeyboardEvent) {
			const target = e.target as HTMLElement;

			// block typing in inputs, EXCEPT for Enter/Escape
			const isFormElement = target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;

			if (isFormElement && !["Enter", "Escape"].includes(key)) {
				return;
			}

			if (e.ctrlKey || e.metaKey || e.altKey) return;

			if (e.key.toLowerCase() === key.toLowerCase()) {
				e.preventDefault();
				e.stopPropagation();

				if (action) {
					action();
				}

				if (href) {
					window.open(href, "_self");
				}
			}
		}

		document.addEventListener("keydown", callback);
		return () => document.removeEventListener("keydown", callback);
	}, [key, href, action]);
}
