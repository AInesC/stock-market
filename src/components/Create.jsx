import { useState } from "react";

export default function Create() {
	const [formData, setFormData] = useState({
		name: "",
		code: "",
		price: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
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
							value={formData.name}
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
							value={formData.code}
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
							value={formData.price}
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
