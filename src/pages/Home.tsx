import { NavLink } from "react-router";

export const Home = () => {
	return (
		<section className="home-section">
			<h1>Välkommen!</h1>
			<p>
				Här kan du skapa en karaktär till Davids enkla skräck-rollspel på ett par sekunder!
			</p>
			<NavLink to={"/create"} className="btn">
				Skapa en karaktär
			</NavLink>
		</section>
	);
};
