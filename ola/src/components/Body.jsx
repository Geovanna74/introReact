import { useState } from 'react'
import './Body.css'
function Body() {
  const[cont,setCont] = useState(0)
  const[inputValor,setIpuntValor] = useState('')
  const[inputN1,setIpuntN1] = useState('')
  const[inputN2,setIpuntN2] = useState('')

  function aumentar(){
     setCont(cont + 1)
  }
  function diminuir(){
    if(cont > 0){
      setCont(cont - 1)
    }
  }
  function alterar(){
    setCont(Number(inputValor))
  }
  function soma(){
    const soma = Number(inputN1) + Number(inputN2)
    setCont((soma))
  }
  function subT(){
    const subT = Number(inputN1) - Number(inputN2)
    setCont((subT))
  }
  function multiplicacao(){
    const multiplicacao = Number(inputN1) * Number(inputN2)
    setCont((multiplicacao))
  }
  return (
    <div className='Body'>
        <h2 className='titulo2'>Dinos são legais</h2>
        <div className='cont'>
        <button onClick={diminuir} >-</button>
        <p> {cont}</p>
        <button onClick={aumentar}>+</button>
        </div>

        <div className="form">
          <input type="number" 
           value={inputValor}
           onChange={(e) => setIpuntValor(e.target.value)}
          />
          <button onClick={alterar}>Alterar</button>
        </div>


       <div className='Calculadora'>
       <input type="text"
       value={inputN1} 
       onChange={(e) => setIpuntN1(e.target.value)}
       />
        <button onClick={soma}>+</button>
        <button onClick={subT}>-</button>
        <button onClick={multiplicacao}>*</button>
        <input type="text"
        value={inputN2} 
        onChange={(e) => setIpuntN2(e.target.value)}
        />
       </div>
    </div>
  )
}

export default Body