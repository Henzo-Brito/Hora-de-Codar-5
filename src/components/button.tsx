type Props = {
	text: string;
	color: string;
	w: string;
	onPress: () => void;
};

export default function Button({ text, color, w, onPress }: Props) {
	return (
		<button
			type="button"
			onClick={onPress}
			className={`
                cursor-pointer
                rounded-2xl
                border-(${color})
				text-(--c1)
				border-4
				w-${w}
				shadow-[0_6px_0_var(--c1)]
				font-bold
				text-xl
                p-2
                transition-all
                duration-400
                ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:translate-y-1.5
				hover:shadow-[0_0px_0_var(--c1)]
            `}
		>
			{text}
		</button>
	);
}
