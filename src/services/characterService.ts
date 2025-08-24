import type { RPGClassName, RPGClass } from "../data/classes";
import { RPG_CLASSES } from "../data/classes";
import type { AbilityName, Ability } from "../types/abilities";
import type { Character } from "../types/character";

type CharacterOptions = {
	name: string;
	className: RPGClassName;
	bonusTwo: AbilityName;
	bonusOne: AbilityName;
	flaw: AbilityName;
};

export function buildCharacter(options: CharacterOptions): Character {
	const rpgClass: RPGClass | undefined = RPG_CLASSES.find((c) => c.name === options.className);

	if (!rpgClass) {
		throw new Error(`Ogiltig klass: ${options.className}`);
	}

	// Starta en tom lista med alla abilities som finns i spelet (valfritt steg om du vill vara komplett)
	const abilityMap: Record<AbilityName, number> = {
		Göra: 0,
		Tänka: 0,
		Snacka: 0,
		Klura: 0,
		Tåla: 0,
	};

	// Lägg på klassens abilities
	for (const ability of rpgClass.abilities) {
		abilityMap[ability.name] += ability.value;
	}

	// Lägg på spelarens egna val
	abilityMap[options.bonusTwo] += 2;
	abilityMap[options.bonusOne] += 1;
	abilityMap[options.flaw] -= 1;

	// Konvertera till Ability[]
	const abilitys: Ability[] = Object.entries(abilityMap).map(([name, value]) => ({
		name: name as AbilityName,
		value,
	}));

	// Bygg och returnera karaktären
	const character: Character = {
		name: options.name,
		className: options.className,

		bonusTwo: options.bonusTwo,
		bonusOne: options.bonusOne,
		flaw: options.flaw,

		inspiration: rpgClass.inspiration,
		gear: rpgClass.gear,
		special: rpgClass.special,
		bonus: rpgClass.bonus,

		abilitys,
		stress: 0,
		wounds: [],
	};

	return character;
}

// LOCAL STORAGE FUNCTIONS

// Nyckel vi använder i localStorage
const CHARACTER_STORAGE_KEY = "ttrpg_character";

export function saveCharacterToLocalStorage(character: Character): void {
	try {
		localStorage.setItem(CHARACTER_STORAGE_KEY, JSON.stringify(character));
	} catch (error) {
		console.error("Kunde inte spara karaktär:", error);
	}
}

export function loadCharacterFromLocalStorage(): Character | null {
	try {
		const data = localStorage.getItem(CHARACTER_STORAGE_KEY);
		if (!data) return null;
		return JSON.parse(data) as Character;
	} catch (error) {
		console.error("Kunde inte ladda karaktär:", error);
		return null;
	}
}

export function deleteCharacterFromLocalStorage(): void {
	try {
		localStorage.removeItem(CHARACTER_STORAGE_KEY);
	} catch (error) {
		console.error("Kunde inte ta bort karaktär:", error);
	}
}
