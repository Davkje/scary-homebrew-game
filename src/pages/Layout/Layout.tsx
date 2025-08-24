import { Outlet } from "react-router";

import "./Layout.scss";
import { Navigation } from "../../components/Nav/Navigation";

export const Layout = () => {
	return (
		<>
			<header>
        <Navigation></Navigation>
      </header>
			<main>
				<Outlet />
			</main>
		</>
	);
};
