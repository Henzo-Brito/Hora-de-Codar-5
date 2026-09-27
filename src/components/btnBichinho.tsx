type Props = {
  img: string;
  onPress: () => void;
  selected: boolean;
};

export default function BtnBichinho({
  img,
  onPress,
  selected,
}: Props) {
  return (
    <button
      type="button"
      onClick={onPress}
      className={`
        cursor-pointer
        rounded-2xl
        bg-(--c1)
        p-2
        transition-all
        duration-400
        ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${
          selected
            ? "translate-y-1.5 shadow-[0_0px_0_var(--c6)]"
            : "shadow-[0_6px_0_var(--c6)] hover:translate-y-1.5 hover:shadow-[0_0px_0_var(--c6)]"
        }
      `}
    >
      <img src={img} alt="Um Pet Legal" className="h-16 w-16" />
    </button>
  );
}