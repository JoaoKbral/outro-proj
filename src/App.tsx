import { useState } from "react"
import Celula from "./Celula"

function App() {
  const [tabuleiro, setTabuleiro] = useState([ '', '',  '', '', '', '', '', '', ''])
  const [jogador, setJogador] = useState('O')
  
  const proximoTurno = () =>{
    if(jogador ==='O'){
      setJogador('X')
    } else {
      setJogador('O')
    }
  }

  return (
    <div className='jogo'>
      <div className='tabuleiro'>
        {tabuleiro.map((celula, i) =>(
          <Celula valor={celula} jogador={jogador} key={i} onMarcacao={proximoTurno}/>
        ))}
      </div>
      <div>
        <button >Reset</button>
      </div>
    </div>
  )
}

export default App
