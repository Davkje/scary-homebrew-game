import type { Ability, AbilityName } from "./abilities";
import type { RPGClassName } from "../data/classes";

export interface Character {
	name: string;
	className: RPGClassName;
  
  quote: string;
	inspo: string;
	gear: string;
	special: string;
  specialAbility: AbilityName;
	bonus: string;
  
	abilities: Ability[];
  
	stress: number;
	wounds: string;

	bonusTwo: string;
	bonusOne: string;
	flaw: string;
}
