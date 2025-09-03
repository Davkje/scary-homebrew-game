import { createBrowserRouter } from "react-router";
import { CharacterPage } from "./pages/CharacterPage";
import { CreatePage } from "./pages/CreatePage";
import { Home } from "./pages/Home";
// import { Error } from "./pages/Error";
import { Layout } from "./pages/Layout/Layout";
import { InfoPage } from "./pages/InfoPage";

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Layout />,
			// errorElement: <Error />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/character",
					element: <CharacterPage />,
				},
				{
					path: "/create",
					element: <CreatePage />,
				},
				{
					path: "/info",
					element: <InfoPage />,
				},
			],
		},
	],
	{
		basename: import.meta.env.DEV ? "scary-homebrew-game/" : "scary-homebrew-game/", // TOM I DEV MODE : REPO NAME ANNARS
	}
);
