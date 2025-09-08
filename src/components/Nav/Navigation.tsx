import { ThemeToggleButton } from "../ThemeButton";
import "./Navigation.scss";

import { NavLink } from "react-router";

export const Navigation = () => {
	return (
		<nav>
			<NavLink to={"/"}>
				<span className="material-symbols-outlined navLink">home</span>
			</NavLink>
			<ul>
				<li>
					<NavLink to={"/character"} className={"navLink"}>
						Karaktär
					</NavLink>
				</li>
				<li>
					<NavLink to={"/create"} className={"navLink"}>
						Skapa
					</NavLink>
				</li>
				<li>
					<NavLink to={"/info"} className={"navLink"}>
						Info
					</NavLink>
				</li>
        <li>
					<ThemeToggleButton></ThemeToggleButton>
				</li>
			</ul>
		</nav>
	);
};
