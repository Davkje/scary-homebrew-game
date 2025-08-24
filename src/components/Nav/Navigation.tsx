import "./Navigation.scss";

import { NavLink } from "react-router";

export const Navigation = () => {
	return (
		<nav>
			<h3>
				<NavLink to={"/"}>Hem</NavLink>
			</h3>
			<ul>
				<li>
					<NavLink to={"/character"}>Karaktär</NavLink>
				</li>
				<li>
					<NavLink to={"/create"}>Skapa</NavLink>
				</li>
			</ul>
		</nav>
	);
};
