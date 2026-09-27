import { useEffect, useState } from "react";
import type { Typ } from "../classes/pet.class";
import { camarao, guaxinim, pato } from "../classes/pet.class";
import BtnBichinho from "../components/btnBichinho";
import Button from "../components/button";
import { Hub } from "../components/hub";

const bichinhos: Typ[] = [pato, guaxinim, camarao];

enum Page {
	UM = 1,
	DOIS = 2,
}

export default function Inicio() {
	const [pet, setPet] = useState<Typ>(bichinhos[0]);
	const [displayedMessage, setDisplayedMessage] = useState("");
	const [page, setPage] = useState<Page>(Page.UM);
	const [name, setName] = useState("");

	useEffect(() => {
		let index = 0;

		const interval = setInterval(() => {
			setDisplayedMessage(pet.getMessage().slice(0, index + 1));
			index++;

			if (index >= pet.getMessage().length) {
				clearInterval(interval);
			}
		}, pet.getTime());

		return () => clearInterval(interval);
	}, [pet, pet.getMessage]);

	function handleContinuar() {
		if (name !== "" && name !== null) {
			setPage(Page.DOIS);
			console.log(page);
		}
	}

	return (
		<div className="h-dvh flex justify-center items-center gap-15">
			<div className="w-100 h-100">
				<img
					src={pet.getImg()}
					className="w-full h-full bg-(--c1) shadow-[0_10px_0_var(--c6)] rounded-3xl"
					alt=""
				/>
				<p className="bg-(--c3) shadow-[0_6px_0_var(--c7)] text-center text-xl font-bold rounded-xl relative w-70 -top-50 -left-55 p-3 translate-y-[-50%]">
					{displayedMessage}
				</p>
			</div>

			{page === 1 ? (
				<div>
					<h1 className="text-(--c4) text-5xl font-bold">
						Bem vindo ao MyPets
					</h1>
					<h2 className="pb-4 pt-3 text-(--c5) text-xl font-bold">
						Escolha o seu pet:
					</h2>
					<div className="flex items-center gap-5">
						{bichinhos.map((e) => (
							<BtnBichinho
								selected={pet === e}
								img={e.getImg()}
								onPress={() => {
									setPet(e);
								}}
								key={e.getName()}
							/>
						))}
					</div>

					<div className="flex gap-2 mt-5">
						<input
							className="p-2 shadow-[0_6px_0_var(--c3)] border-(--c3) border-5 text-(--c3) rounded-xl w-2/3 text-xl font-bold transition-all
								duration-400
								ease-[cubic-bezier(0.34,1.56,0.64,1)] outline-0 focus:translate-y-1.5 focus:shadow-[0_0px_0_var(--c3)]"
							type="text"
							onChange={(e) => {
								setName(e.target.value);
							}}
							placeholder={"Insira o Nome do seu Bichinho"}
						/>
						<Button
							color="--c1"
							onPress={handleContinuar}
							text="Continuar"
							w="1/3"
						/>
					</div>
				</div>
			) : (
				<Hub pet={pet} name={name} />
			)}
		</div>
	);
}
