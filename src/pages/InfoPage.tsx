import { RPG_CLASSES } from "../data/classes";

const allClasses = RPG_CLASSES;

export const InfoPage = () => {
	return (
		<>
			<h1>INFO</h1>
			<p>Här finns en kort introduktion till spelets regler och en lista över alla typer!</p>
			<h2>Regler</h2>
			<div className="text-container">
				<h3>Spelets gång</h3>
				<p>
					När du vill göra något så beskriver du vad du vill försöka och beroende på vad
					det är ber spelledaren dig rulla en tärning och lägga på en passande förmåga. Om
					du tex vill gömma dig från något farligt så skulle det kunna falla under att
					"Göra" om du vill göra ett hopp ner i en buske eller kanske "Tåla" om du ska
					hålla andan under vattnet. Därefter rullar du en tärning och lägger på antalet
					du har i den förmågan.
				</p>

				<p>
					Är totalen 6 eller mer klarar du det med bravur! Är totalen 4-5 så klarar du det
					men med nån typ av bakslag. Är totalen mellan 1-3 så mislyckas du och får möta
					konsekvenserna!
				</p>
			</div>
			<div className="text-container">
				<h3>Förmågor</h3>
				<p>Det finns 5 förmågor som symboliserar olika aktiviteter.</p>
				<ul>
					<li>
						<strong>Göra</strong> - Lyfta, springa, laga & slåss
					</li>
					<li>
						<strong>Känna</strong> - Läsa av omgivningen, människor & mystika ting
					</li>
					<li>
						<strong>Snacka</strong> - Övertala, hota, flörta & övertala
					</li>
					<li>
						<strong>Klura</strong> - Minnas, tänka & lösa gåtor
					</li>
					<li>
						<strong>Tåla</strong> - Hålla ut, bita ihop & mod
					</li>
				</ul>
			</div>

			<div className="text-container">
				<h3>Specialare</h3>
				<p>
					Varje typ har en specialare, något som gör dem extra bra! Om du möter
					kriterierna så får du lägga på +1 på ditt tärningsslag, utöver din bonus från
					förmågan. Exempelvis, Nils som är Emo har en Specialare som gör att han får +1 i
					Känna när det regnar eller spelas sorglig musik. Han har också 2 i Känna för att
					han valde det som sin bästa förmåga. Därför lägger han på +3 på sin tärning om
					han använder sin Känna förmåga medans han känner efter mysiska väsen i
					spöregnet.
				</p>
			</div>
			<div className="text-container">
				<h3>Stress</h3>
				<p>
					Stress får man vid läskiga och farliga situationer. +3 Stress ger dig -1 på alla
					dina slag. 4 stress resulterar i ett panikmoment!
				</p>
			</div>
			<div className="text-container">
				<h3>Skada</h3>
				<p>
					I dethär spelet räknar vi inte några poäng kopplat till skada men det betyder
					inte att man kan göra sig illa eller värre - dö! Under Skada kan man skriva ner
					sina sår hur noga man vill för att bättre minnas om och hur du gjrt illa dig.
					Det är upp till oss som berättare i historien att välja när det passar att kliva
					över till den andra sidan.
				</p>
			</div>
			<div className="text-container">
				<h3>Bonus</h3>
				<p>
					Varje klass har en bonus som man kan använda endast en gång per spel! Den kan
					vara väldigt vag men kraftfull så tveka inte att använda den vid ett viktigt
					tillfälle och framförallt, se till att göra det till en viktig scen i din
					karaktärs äventyr!
				</p>
			</div>
			<h2>Typer</h2>
			{allClasses.map((rpgclass) => (
				<div key={rpgclass.name} className="class-info">
					<h3>{rpgclass.name}</h3>
					<p className="quote">"{rpgclass.quote}"</p>
					<p>
						<strong>Inspo: </strong>
						{rpgclass.inspo}
					</p>
					<p>
						<strong>Specialare: </strong>
						{rpgclass.special}
					</p>
					<p>
						<strong>Saker: </strong>
						{rpgclass.gear}
					</p>
					<p>
						<strong>Bonus: </strong>
						{rpgclass.bonus}
					</p>
				</div>
			))}
		</>
	);
};
