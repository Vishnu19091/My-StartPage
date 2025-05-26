function UpdateDate() {
	let time = new Date();
	let formatedTime = time.toLocaleTimeString();
  
	document.getElementById("time").textContent = formatedTime;
  }
  setInterval(UpdateDate, 100);

const searchBox = document.getElementById("search");

searchBox.addEventListener("keydown", (e) => {
	if (e.code === "Enter") {
		const { value } = searchBox;
		if (value.trim().length > 0) {
			const query = encodeURIComponent(value.trim());
			location.href = `https://www.google.com/search?q=${query}`;
		} else {
			searchBox.value = "";
		}
	}
});

window.onload = () => {
	document.getElementsByTagName("body")[0].removeAttribute("class");
};

document.addEventListener("keydown", (event) => {
	// Only run if NOT already typing in an input or textarea
	const activeElement = document.activeElement;
	const isTyping = activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA";
	const searchInput = document.getElementById("search");

	if (!isTyping && event.key === "s" && !event.ctrlKey && !event.altKey && !event.metaKey) {
		event.preventDefault(); // only prevent if not already typing
		if (searchInput) {
			searchInput.focus();
			searchInput.select(); // optional: select existing text
		}
	} else if (event.key === "Escape") {
		searchInput.blur();
	}
});

document.addEventListener("keydown", function (event) {
	const isTyping = ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName);

	if (!isTyping && event.key === "g") {
		window.open("https://github.com/", "_self");
	} else if (!isTyping && event.key === "t") {
		window.open("https://login.tailscale.com/admin/machines", "_self");
	} else if (!isTyping && event.key === "c") {
		window.open("https://chatgpt.com/", "_self");
	} else if (!isTyping && event.key === "m") {
		window.open("https://mail.google.com/mail/u/0/#inbox", "_self");
	} else if (!isTyping && event.key === "y") {
		window.open("https://youtube.com/", "_self");
	} else if (!isTyping && event.key === "w") {
		window.open("https://web.whatsapp.com/", "_self");
	}
});
