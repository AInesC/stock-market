import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function Detail() {
	const params = useParams();

	const [stock, setStock] = useState();

	useEffect(() => {
		fetch("https://justivo.com/stockws.php?get&code=" + params.code)
			.then((response) => response.json())
			.then((dataRecieved) => setStock(dataRecieved));
	}, []);

	return (
		<>
			{stock && (
				<section>
					<h2>{stock.name}</h2>
					<h3>{stock.code}</h3>
					<div>Preço: {stock.price}€</div>
					<div>
						<NavLink to="/">Voltar</NavLink>
					</div>
				</section>
			)}
		</>
	);
}
