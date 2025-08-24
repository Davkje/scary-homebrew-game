import "./Character.scss";


export const Character = () => {
	return (
		<>
			<div className="wrapper">
				<h1>Gabbe</h1>
				<h2>"Lagkaptenen"</h2>
			</div>
			<div className="wrapper">
				<h3>Förmågor</h3>
				<div className="abilitys">
					<label>
						Snacka
						<div className="ability">+2</div>
					</label>
					<label>
						Göra
						<div className="ability">+1</div>
					</label>
					<label>
						Klura
						<div className="ability">+2</div>
					</label>
					<label>
						Klura
						<div className="ability">+2</div>
					</label>
					<label>
						Tänka
						<div className="ability">+2</div>
					</label>
				</div>
			</div>
			<div className="wrapper">
				<h3>Stress</h3>
				<div className="stress">
					<button className="stress-button">
						<span className="stress-point"></span>
						<span className="stress-point"></span>
						<span className="stress-point"></span>
						<span className="stress-point"></span>
					</button>
				</div>
			</div>
			<div className="wrapper">
				<h3>Sårad</h3>
				<div className="wounds">
					<input type="text" placeholder="Armen, ögat osv" />
				</div>
			</div>
			<div className="wrapper">
				<h3>Saker</h3>
				<p className="char-text">Bandyklubba, en flaska Jäger & pannlampa.</p>
			</div>
			<div className="wrapper">
				<h3>Förmåga</h3>
				<p className="char-text">+1 i Tåla om du försöker skydda någon</p>
			</div>
			<div className="wrapper">
				<h3>Bonus</h3>
				<p className="char-text">
					En gång per spel kan du ignorera en skada genom att göra något fysiskt.
				</p>
			</div>
		</>
	);
};
