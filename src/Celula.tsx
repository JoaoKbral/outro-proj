import { useState } from "react"

type Props = {
    valor: string,
    jogador: string,
    onMarcacao: () => void
}

function Celula(props: Props) {
    
    const [valor, setValor] = useState(props.valor) //desestruturação

    const marcarCelula = () =>{
        if(valor === ''){
            setValor(props.jogador)
            props.onMarcacao()
        } 
    }

    let classe = ''
    if (valor === 'O'){
        classe = 'bolinha'
    } else if(valor === 'X'){
        classe = 'xiszinho'
    }

    return (
        <div className={`celula ${classe}`} onClick={marcarCelula}>
            <span>{valor}</span>
          </div>

    )
}

 export default Celula