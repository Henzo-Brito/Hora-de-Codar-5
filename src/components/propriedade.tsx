
type Props = {
    text:string
    w: number
}

export default function Propriedade({text, w}: Props){
    return(<p className={`bg-(--c3) w-${w} p-2 font-bold text-xl rounded-xl`}>
        {text}
    </p>)
}