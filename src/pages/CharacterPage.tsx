import "../style/Character.scss";
import { useEffect, useState, useRef } from "react";
import { loadCharacterFromLocalStorage } from "../services/characterService";
import type { Character } from "../types/character";
import { useNavigate } from "react-router";

export const CharacterPage = () => {
	//STATES
	const [character, setCharacter] = useState<Character | null>(null);
	const [struck, setStruck] = useState(false);
	const [detailsOpen, setDetailsOpen] = useState(false);
	const [blinkReminder, setBlinkReminder] = useState(false);
	const [blinkSpecial, setBlinkSpecial] = useState(false);

	const navigate = useNavigate();

	const detailsRef = useRef<HTMLDivElement>(null);
	const gearInputRef = useRef<HTMLTextAreaElement>(null);
	const woundsInputRef = useRef<HTMLTextAreaElement>(null);

	// RESIZE FUNK FOR TEXTAREA
	const autoResize = (el: HTMLTextAreaElement | null) => {
		if (!el) return;
		el.style.height = "auto"; // nollställ först

		const style = window.getComputedStyle(el);
		const lineHeight = parseInt(style.lineHeight, 10);

		// alltid minst 1 rad hög, annars scrollHeight
		const newHeight = Math.max(el.scrollHeight, lineHeight);

		el.style.height = newHeight + "px";
	};

	// DELETE CHARACTER FUNCTION
	const handleDeleteCharacter = () => {
		const confirmed = window.confirm("Är du säker på att du vill radera din karaktär?");
		if (confirmed) {
			localStorage.removeItem("ttrpg_character");
			navigate("/create");
		}
	};

	// LOAD CHARACTER FROM LOCAL STORAGE
	useEffect(() => {
		const loaded = loadCharacterFromLocalStorage();
		setCharacter(loaded);
	}, []);

	useEffect(() => {
		if (character) {
			autoResize(gearInputRef.current);
      autoResize(woundsInputRef.current);
		}
	}, [character]);

	if (!character) {
		return <p>Ingen karaktär hittades! Skapa en ny.</p>;
	}

	return (
		<>
			<div className="mid-wrapper">
				<h1>{character.name}</h1>
				<div className="class-header" onClick={() => setDetailsOpen(!detailsOpen)}>
					<h2>{character.className}</h2>
					<span
						className={`material-symbols-outlined arrow ${detailsOpen ? "open" : ""}`}
					>
						expand_more
					</span>
				</div>

				<div
					ref={detailsRef}
					className="details-wrapper"
					style={{
						maxHeight: detailsOpen
							? `${(detailsRef.current?.scrollHeight || 0) + 70}px`
							: "0px",
					}}
				>
					<div className="details">
						<p className="quote">"{character.quote}"</p>
						<h3>Inspiration</h3>
						<p className="inspo">{character.inspo}</p>
					</div>
				</div>
			</div>

			<div className="mid-wrapper">
				<h3>Förmågor</h3>
				<div className="abilitys">
					{character.abilities.map((a) => (
						<div
							className="ability-container"
							key={a.name}
							onClick={() => {
								if (a.name === character.specialAbility) {
									setBlinkSpecial(true);
									setTimeout(() => setBlinkSpecial(false), 400);
								}
							}}
						>
							{a.name}
							<div className="ability">
								{" "}
								<span
									className={`reminder ${
										a.name === character.specialAbility && blinkReminder
											? "blink"
											: ""
									}`}
									style={{
										display:
											a.name === character.specialAbility
												? "inline-block"
												: "none",
									}}
								></span>
								{a.value}
							</div>
						</div>
					))}
				</div>
			</div>

			<div
				className="mid-wrapper special"
				onClick={() => {
					setBlinkReminder(true);
					setTimeout(() => setBlinkReminder(false), 400);
				}}
			>
				<h3 className={`special-title ${blinkSpecial ? "blink" : ""}`}>Specialare</h3>
				<p>
					{character.special
						.split(new RegExp(`(${character.specialAbility})`, "gi"))
						.map((part, i) =>
							part.toLowerCase() === character.specialAbility.toLowerCase() ? (
								<strong key={i}>{part}</strong>
							) : (
								part
							)
						)}
				</p>
			</div>

			<div className="mid-wrapper">
				<h3>Stress</h3>
				<div className="stress">
					<button
						onClick={() => {
							const nextStress = character.stress > 0 ? character.stress - 1 : 0;
							setCharacter({ ...character, stress: nextStress });
							localStorage.setItem(
								"ttrpg_character",
								JSON.stringify({ ...character, stress: nextStress })
							);
						}}
					>
						-
					</button>
					<div className="stress-container">
						{[0, 1, 2, 3].map((i) => (
							<span
								key={i}
								className={`stress-point ${i < character.stress ? "filled" : ""}`}
							></span>
						))}
					</div>
					<button
						onClick={() => {
							const nextStress = character.stress < 4 ? character.stress + 1 : 4;
							setCharacter({ ...character, stress: nextStress });
							localStorage.setItem(
								"ttrpg_character",
								JSON.stringify({ ...character, stress: nextStress })
							);
						}}
					>
						+
					</button>
				</div>
			</div>

			<div className="left-wrapper">
				<div className="header-wrapper">
					<h3 className="clickable" onClick={() => woundsInputRef.current?.focus()}>
						Sårad
					</h3>
					<span
						className="material-symbols-outlined"
						onClick={() => woundsInputRef.current?.focus()}
					>
						edit
					</span>
				</div>
				<div className="wounds">
					<textarea
						ref={woundsInputRef}
						id="wounds-input"
						className="clickable"
						rows={1}
						placeholder="Armen, ögat osv"
						value={character.wounds}
						onChange={(e) => {
							const newValue = e.target.value;
							setCharacter({ ...character, wounds: newValue });
							localStorage.setItem(
								"ttrpg_character",
								JSON.stringify({ ...character, wounds: newValue })
							);
							autoResize(woundsInputRef.current);
						}}
					/>
				</div>
			</div>

			<div className="left-wrapper">
				<div className="header-wrapper">
					<h3 className="clickable" onClick={() => gearInputRef.current?.focus()}>
						Saker
					</h3>
					<span
						className="material-symbols-outlined"
						onClick={() => gearInputRef.current?.focus()}
					>
						edit
					</span>
				</div>
				<div className="gear">
					<textarea
						ref={gearInputRef}
						id="gear-input"
						className="clickable"
						rows={1}
						placeholder="Prylar, vapen osv"
						value={character.gear}
						onChange={(e) => {
							const newValue = e.target.value;
							setCharacter({ ...character, gear: newValue });
							localStorage.setItem(
								"ttrpg_character",
								JSON.stringify({ ...character, gear: newValue })
							);
							autoResize(gearInputRef.current);
						}}
					/>
				</div>
			</div>

			<div
				className={struck ? "left-wrapper clickable struck" : "left-wrapper clickable"}
				onClick={() => setStruck(!struck)}
			>
				<div className="header-wrapper">
					<h3>Bonus</h3>
					<span className="material-symbols-outlined">
						{struck ? "check_box" : "check_box_outline_blank"}
					</span>
				</div>
				<p>{character.bonus}</p>
			</div>

			<div className="mid-wrapper">
				<button onClick={handleDeleteCharacter} className="delete-button">
					Radera karaktär
				</button>
			</div>
		</>
	);
};

// IDEEEEER!!!

// när du klickar på specialare så ändras siffran till den nya siifran lite kort!

// Bonus måste sparas i local storage