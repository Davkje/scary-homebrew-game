import { useState } from "react";
import { RPG_CLASSES } from "../data/classes";
import type { Character } from "../types/character";
import { useNavigate } from "react-router";
import type { AbilityName } from "../types/abilities";

export const CharacterForm = () => {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [className, setClassName] = useState("");
	const [bonusTwo, setBonusTwo] = useState("");
	const [bonusOne, setBonusOne] = useState("");
	const [flaw, setFlaw] = useState("");

	const allAbilities: AbilityName[] = ["Göra", "Känna", "Snacka", "Klura", "Tåla"];

	const getOptions = (exclude: string[]) => {
		return allAbilities.filter((ability) => !exclude.includes(ability));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const selectedClass = RPG_CLASSES.find((cls) => cls.name === className);

		if (!selectedClass) {
			alert("Du måste välja en giltig klass!");
			return;
		}

		const abilities = allAbilities.map((abilityName) => {
			let value = 0;
			if (abilityName === bonusTwo) value = 2;
			else if (abilityName === bonusOne) value = 1;
			else if (abilityName === flaw) value = -1;
			return { name: abilityName, value };
		});

		const newCharacter: Character = {
			name,
			className: selectedClass.name,
			gear: selectedClass.gear,
			special: selectedClass.special,
      specialAbility: selectedClass.specialAbility,
			bonus: selectedClass.bonus,
			inspo: selectedClass.inspo,
      quote: selectedClass.quote,
			abilities,
			stress: 0,
			wounds: "",
			bonusTwo,
			bonusOne,
			flaw,
		};

		localStorage.setItem("ttrpg_character", JSON.stringify(newCharacter));
		navigate("/character");
	};

	return (
		<>
			<h1>Ny karaktär</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Vad heter du?
					<input
						name="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</label>

				<label>
					Vad är du för typ?
					<select
						name="type"
						value={className}
						onChange={(e) => setClassName(e.target.value)}
						required
					>
						<option value="">-</option>
						{RPG_CLASSES.map((cls) => (
							<option key={cls.name} value={cls.name}>
								{cls.name}
							</option>
						))}
					</select>
				</label>

				<label>
					Vad är du väldigt bra på? (+2)
					<select
						value={bonusTwo}
						onChange={(e) => setBonusTwo(e.target.value)}
						required
					>
						<option value="">-</option>
						{getOptions([bonusOne, flaw]).map((ability) => (
							<option key={ability} value={ability}>
								{ability}
							</option>
						))}
					</select>
				</label>

				<label>
					Vad är du ganska bra på? (+1)
					<select
						value={bonusOne}
						onChange={(e) => setBonusOne(e.target.value)}
						required
					>
						<option value="">-</option>
						{getOptions([bonusTwo, flaw]).map((ability) => (
							<option key={ability} value={ability}>
								{ability}
							</option>
						))}
					</select>
				</label>

				<label>
					Vad är du dålig på? (-1)
					<select
						value={flaw}
						onChange={(e) => setFlaw(e.target.value)}
						required
					>
						<option value="">-</option>
						{getOptions([bonusTwo, bonusOne]).map((ability) => (
							<option key={ability} value={ability}>
								{ability}
							</option>
						))}
					</select>
				</label>

				<button type="submit">Skapa!</button>
			</form>
		</>
	);
};
