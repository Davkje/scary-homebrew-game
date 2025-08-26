import { createBrowserRouter } from "react-router";
import { CharacterPage } from "./pages/CharacterPage";
import { CreatePage } from "./pages/CreatePage";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { Layout } from "./pages/Layout/Layout";

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Layout />,
			errorElement: <Error />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/about",
					element: <About />,
				},
				{
					path: "/character",
					element: <CharacterPage />,
				},
				{
					path: "/create",
					element: <CreatePage />,
				},
			],
		},
	],
	{
		basename: import.meta.env.BASE_URL, // GITHUB PAGES VILL HA REPO NAMNET INNAN VARJE ROUTS NAMN
	}
);
