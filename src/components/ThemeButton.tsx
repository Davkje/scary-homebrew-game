import { useEffect, useState } from "react";

const THEME_KEY = "theme";

export function ThemeToggleButton() {
	const [dark, setDark] = useState(false);

	// Körs en gång vid mount
	useEffect(() => {
		const savedTheme = localStorage.getItem(THEME_KEY);

		if (savedTheme === "dark") {
			setDark(true);
			document.body.classList.add("dark");
		} else if (savedTheme === "light") {
			setDark(false);
			document.body.classList.remove("dark");
		} else {
			// Följ systeminställning om inget sparat
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			setDark(prefersDark);
			if (prefersDark) {
				document.body.classList.add("dark");
			}
		}
	}, []);

	// Toggle-funktion
	const toggleTheme = () => {
		if (dark) {
			document.body.classList.remove("dark");
			localStorage.setItem(THEME_KEY, "light");
			setDark(false);
		} else {
			document.body.classList.add("dark");
			localStorage.setItem(THEME_KEY, "dark");
			setDark(true);
		}
	};

	return (
		<button className="theme-btn navLink" onClick={toggleTheme}>
			{dark ? (
				<span className="material-symbols-outlined">brightness_5</span>
			) : (
				<span className="material-symbols-outlined">dark_mode</span>
			)}
		</button>
	);
}
