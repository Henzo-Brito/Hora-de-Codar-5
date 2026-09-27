export class BichinhoVirtual {
	private nivelDeFome: number = 50;
	private nivelFelicidade: number = 50;
	private cansaco: number = 0;
	private nome: string = "";
	private idade: number = 0;

	constructor(
		private message: string,
		private img: string,
		private time: number,
	) {}

	private verify(): string{
		if (
			this.nivelDeFome >= 100 ||
			this.nivelFelicidade <= 0 ||
			this.cansaco >= 100
		) {
			return "perdeu";
		}else if(this.idade === 50){
			return "ganhou";
		}

		return "continue";
	}

	public alimentar(): string {
		this.cansaco = Math.min(100, this.cansaco + 3);
		this.nivelDeFome = Math.max(0, this.nivelDeFome - 10);
		return this.verify()
	}

	public brincar(): string {
		this.nivelFelicidade = Math.min(100, this.nivelFelicidade + 10);
		this.cansaco = Math.min(100, this.cansaco + 10);

		return this.verify()
	}

	public descancar(): string {
		this.cansaco = Math.max(0, this.cansaco - 10);
		this.nivelDeFome = Math.min(100, this.nivelDeFome + 10);

		return this.verify()
	}

	public passarTempo(): string {
		this.nivelDeFome = Math.min(100, this.nivelDeFome + 3);
		this.nivelFelicidade = Math.max(0, this.nivelFelicidade - 3);
		this.cansaco = Math.min(100, this.cansaco + 10);
		this.idade = Math.min(50, this.idade + 1);

		return this.verify()
	}

	public setName(name: string): void {
		this.nome = name;
	}

	public setMessage(mes: string): void {
		this.message = mes;
	}

	public getIdade(): number {
		return this.idade;
	}

	public getName(): string {
		return this.nome;
	}

	public getCansaco(): number {
		return this.cansaco;
	}

	public getFome(): number {
		return this.nivelDeFome;
	}

	public getFelicidade(): number {
		return this.nivelFelicidade;
	}

	public getMessage(): string {
		return this.message;
	}

	public getImg(): string {
		return this.img;
	}

	public getTime(): number {
		return this.time;
	}
}

import pet1 from "../assets/image/pet1.png";
import pet2 from "../assets/image/pet2.png";
import pet3 from "../assets/image/pet3.png";

export const pato = new BichinhoVirtual("qua qua qua qua qua", pet1, 70);
export const guaxinim = new BichinhoVirtual(
	"Pode escolher qualquer um, eu não ligo..",
	pet2,
	45,
);
export const camarao = new BichinhoVirtual(
	"Me escolhe! me escolhe! me escolheee!!",
	pet3,
	30,
);

export type Typ = typeof camarao;
