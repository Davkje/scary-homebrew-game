import type { AbilityName } from "../types/abilities";

export type RPGClassName =
	| "Lagkaptenen"
	| "Snyggingen"
	| "Tuffingen"
	| "Duktiga"
	| "Nörden"
	| "Rika"
	| "Musikern"
	| "Emo";

export type RPGClass = {
	name: RPGClassName;
	gear: string;
	quote: string;
	special: string;
	specialAbility: AbilityName;
	bonus: string;
	inspo: string;
};

export const RPG_CLASSES: RPGClass[] = [
	{
		name: "Lagkaptenen",
		quote: "Tare lugnt, jag fixar biffen!",
		inspo: "Populär, har körkort och är van att få som hen vill. Charmig, lite självisk, men lojal och ofta den som får folk att följa med på idiotiska idéer. Har inte stött på så mycket motgångar i livet och är redo för fest!",
		gear: "Bandyklubba, en flaska Jäger & pannlampa",
		special: "+1 i Tåla om du försöker skydda någon.",
		specialAbility: "Tåla",
		bonus: "En gång per spel kan du ignorera en skada genom att göra något fysiskt.",
	},
	{
		name: "Snyggingen",
		quote: "Det är inte alltid lätt att va snyggast!",
		inspo: "Självsäker, social och alltid snygg på bild. Bakom fasaden döljer sig dock en osäkerhet. Hen är med för att ha kul – men håller ögonen öppna.",
		gear: "Fickspegel, polaroidkamera, plattång",
		special: "+1 i Snacka när du flörtar eller manipulerar.",
		specialAbility: "Snacka",
		bonus: "En gång per spel kan du övertala någon att göra något farligt i ditt ställe genom att flörta eller visa dig genuin och sårbar.",
	},
	{
		name: "Tuffingen",
		quote: "Vadå, jag har inte gjort nåt!",
		inspo: "Skolkar, röker och har alltid ett kaxigt svar. Tar inget på allvar förrän det är för sent. Har det tufft hemma och innerst inne vill hen bara vara omtyckt.",
		gear: "Zippo-tändare, kniv, sprayburk",
		special: "+1 i Göra om du röker eller tuggar tuggummi.",
		specialAbility: "Göra",
		bonus: "En gång per spel kan du hota någon så att de backar.",
	},
	{
		name: "Duktiga",
		quote: "Hade inte vi läxa tills idag?",
		inspo: "Plugghästen, planeraren och den enda som har med sig stövlar. Skeptisk till det övernaturliga och väldigt rationell. Kan bli överväldigad och är osäker på sin relation till de andra.",
		gear: "Plåster, nyckelknippa med visselpipa, ståltråd till blomkransar",
		special: '+1 i Klura när du börjar meningen med "Faktum är att..."',
		specialAbility: "Klura",
		bonus: "En gång per spel kan du motbevisa något övernaturligt och minska stress för alla.",
	},
	{
		name: "Nörden",
		quote: "Det finns nog en logisk förklaring till det här!",
		inspo: "Vet allt om datorer, UFO:n och konspirationsteorier. Lite utanför. Glad men fundersam varför hen blev bjuden och vill bevisa sig för gruppen.",
		gear: "Ficklampa, walkie-talkie, serietidning",
		special: "+1 i Klura när du rabblar fakta först.",
		specialAbility: "Klura",
		bonus: "En gång per spel kan du säga “Om inte? ... Såklart!” och be spelledaren om någon viktig information som du listar ut!",
	},
	{
		name: "Rika",
		quote: "Vet du inte vem min pappa är?",
		inspo: "Kommer från pengar och tar sällan ansvar. Har alltid det senaste och har aldrig campat. Osäker på om dina vänner tycker om dig eller dina pengar.",
		gear: "Pappas 'gamla' telefon, märkesjacka, champange",
		special: "+1 i Snacka när du nämner en kändis du träffat eller plats du rest till.",
		specialAbility: "Snacka",
		bonus: "En gång per spel kan du överraska med att göra något osjälviskt och rädda någon från att bli skadad.",
	},
	{
		name: "Musikern",
		quote: "Det här är en låt jag skrivit själv, faktiskt!",
		inspo: "Kreativ själ, spelar i band och vill bli nästa Kurt Cobain. Känslig, drömsk och ofta i sin egen värld. Kan känna saker väldigt starkt!",
		gear: "Ett intrument (välj), kassettbandspelare, rullcigaretter",
		special: "+1 i Känna medans 'bra' musik spelas.",
		specialAbility: "Känna",
		bonus: "En gång per spel kan du framkalla en minnesbild hos någon med musik.",
	},
	{
		name: "Emo",
		quote: "Allt är meningslöst, men okey",
		inspo: "Skriver poesi, lyssnar på The Cure och gillar svart. Mystisk och har ett djup. Intresserad av det övernaturliga. Lite utanför gruppen men 'bryr sig inte'.",
		gear: "Dagbok med en torkad död blomma i, hörlurar (tysta men alltid på), svart smink",
		special: "+1 i Känna när det regnar eller spelas sorglig musik.",
		specialAbility: "Känna",
		bonus: "En gång per spel kan du känna något djupt – få en hint, närvaro eller eko från det förflutna.",
	},
];
