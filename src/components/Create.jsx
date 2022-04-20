export default function Create() {
	function handleChange(event) {
		console.log("handleChange", event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log("submit");
	}

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						Nome
						<input
							type="text"
							name="name"
							required
							minLength="4"
							maxLength="60"
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label>
						Código
						<input
							type="text"
							name="code"
							required
							minLength="3"
							maxLength="3"
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<label>
						Preço
						<input
							type="number"
							name="price"
							required
							minLength="1"
							maxLength="9999"
							onChange={handleChange}
						/>
					</label>
				</div>
				<div>
					<button type="submit">Guardar</button>
				</div>
			</form>
		</main>
	);
}
