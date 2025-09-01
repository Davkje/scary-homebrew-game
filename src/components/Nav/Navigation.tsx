import "./Navigation.scss";

import { NavLink } from "react-router";

export const Navigation = () => {
	return (
		<nav>
			<NavLink to={"/"}>
				<span className="material-symbols-outlined">home</span>
			</NavLink>

			<ul>
				<li>
					<NavLink to={"/character"}>Karaktär</NavLink>
				</li>
				<li>
					<NavLink to={"/create"}>Skapa</NavLink>
				</li>
				<li>
					<NavLink to={"/info"}>Info</NavLink>
				</li>
			</ul>
		</nav>
	);
};
