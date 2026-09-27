import { useState } from "react";
import type { Typ } from "../classes/pet.class";
import Button from "./button";
import Propriedade from "./propriedade";

type Props = {
	pet: Typ;
	name: string;
};

export function Hub({ pet, name }: Props) {
	const [idade, setIdade] = useState(pet.getIdade());
	const [nivelDeFome, setNivelDeFome] = useState(pet.getFome());
	const [nivelFelicidade, setNivelFelicidade] = useState(pet.getFelicidade());
	const [cansaco, setCansaco] = useState(pet.getCansaco());

	const [ganhou, setGanhou] = useState<string>("continue");

	function actualize() {
		setIdade(pet.getIdade());
		setNivelDeFome(pet.getFome());
		setNivelFelicidade(pet.getFelicidade());
		setCansaco(pet.getCansaco());
	}

	return ganhou === "continue" ? (
		<div className="flex-col gap-25 ">
			<p className="text-(--c4) text-5xl pb-5 font-black">Nome: {name}</p>

			<div className="flex w-full gap-2 mt-2 mb-20">
				<Propriedade w={1 / 6} text={`Cansaço: ${cansaco}`} />
				<Propriedade w={1 / 6} text={`Felicidade: ${nivelFelicidade}`} />
				<Propriedade w={1 / 6} text={`Fome: ${nivelDeFome}`} />
				<Propriedade w={1 / 6} text={`Idade: ${idade}`} />
			</div>

			<div className="flex gap-3">
				<Button
					color="--c1"
					onPress={() => {
						setGanhou(pet.alimentar());
						actualize();
					}}
					text="Alimentar"
					w="1/4"
				/>
				<Button
					color="--c1"
					onPress={() => {
						setGanhou(pet.brincar());
						actualize();
					}}
					text="Brincar"
					w="1/4"
				/>
				<Button
					color="--c1"
					onPress={() => {
						setGanhou(pet.descancar());
						actualize();
					}}
					text="Descançar"
					w="1/4"
				/>
				<Button
					color="--c1"
					onPress={() => {
						setGanhou(pet.passarTempo());
						actualize();
					}}
					text="Próximo Ano"
					w="1/4"
				/>
			</div>
		</div>
	) : ganhou === "perdeu" ? (
		<div className="grid gap-2 max-w-70">
			<h1 className="text-(--c4) font-bold text-4xl">Você Perdeu!</h1>
			<h2 className="text-(--c5) font-bold text-xl mb-3">{name} Morreu...</h2>
            <Button onPress={() => {window.location.reload()}} color="" text="Voltar" w="100px" />
		</div>
	) : (
		<div className="grid gap-7 max-w-70">
			<h1 className="text-(--c4) font-bold text-4xl">Você Ganhou!</h1>
			<h2 className="text-(--c5) font-bold text-xl mb-3">Porém {name} morreu de velhice aos 50 anos...</h2>
            <Button onPress={() => {window.location.reload()}} color="" text="Voltar" w="100px" />
		</div>
	);
}
