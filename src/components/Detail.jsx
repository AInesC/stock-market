import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function Detail() {
	const params = useParams();

	const [stock, setStock] = useState();

	useEffect(() => {
		fetch("https://justivo.com/stockws.php?get&code=" + params.code)
			.then((response) => response.json())
			.then((dataRecieved) => setStock(dataRecieved));
	}, [params]);

	function toggleFavorite() {
		setStock((prevState) => ({
			...prevState,
			isFavorite: !prevState.isFavorite,
		}));
	}

	/* o nome da função tem de estar em maiúscula para o react
	o interpretar como um functional component e podemos aplicar
	no jsx do app */
	function Display() {
		if (stock) {
			if (stock.code) {
				return (
					<section>
						<h2>{stock.name}</h2>
						<h3>{stock.code}</h3>
						<div>Preço: {stock.price}€</div>
						<div>
							<button onClick={toggleFavorite}>
								{stock.isFavorite === true ? "Remover " : "Marcar "} Favorito
							</button>
						</div>
						<div>
							<NavLink to="/">Voltar</NavLink>
						</div>
					</section>
				);
			} else {
				return <p>Stock inexistente</p>;
			}
		} else {
			return <p>Aguarde um momento</p>;
		}
	}

	return <Display />;
}
