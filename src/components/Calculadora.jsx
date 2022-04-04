import React from "react"
import './Calculadora.css'
import { useState } from 'react'

export default function Calculadora() {
    const [resultado, setResultado] = useState('');

    const handleClick = (e) => {
       setResultado(resultado.concat(e.target.name));
    }

    const apagar = () => {
        setResultado(0);
    }

    const operacao = () => {
        setResultado()
    }

    const calcular = () => {
        setResultado({resultado});
    }

    return(
        <div className="Container">
            <div className="res">
                <form>
                <h1>{resultado}</h1>
                </form>
                
            </div>
            <div>
            <button onClick={apagar} className="botaoCinza">AC</button>
            <button name="+/-" onClick={operacao} className="botaoCinza">+/-</button>
            <button name="%"onClick={operacao} className="botaoCinza">%</button>
            <button name="/" onClick={operacao} className="botaoVerde">/</button>
            </div>
            <div>
            <button name="7" onClick={handleClick} className="botaoEsc">7</button>
            <button name="8" onClick={handleClick} className="botaoEsc">8</button>
            <button name="9" onClick={handleClick} className="botaoEsc">9</button>
            <button name="X" onClick={operacao} className="botaoVerde">X</button>
            </div>
            <div>
            <button name="4" onClick={handleClick} className="botaoEsc">4</button>
            <button name="5" onClick={handleClick} className="botaoEsc">5</button>
            <button name="6" onClick={handleClick} className="botaoEsc">6</button>
            <button name="-" onClick={operacao} className="botaoVerde">-</button>
            </div>
            <div>
            <button name="1" onClick={handleClick} className="botaoEsc">1</button>
            <button name="2" onClick={handleClick} className="botaoEsc">2</button>
            <button name="3" onClick={handleClick} className="botaoEsc">3</button>
            <button name="+" onClick={operacao} className="botaoVerde">+</button>
            </div>
            <div>
            <button name="0" onClick={handleClick} className="botaoZero">0</button>
            <button name="," onClick={handleClick} className="botaoEsc">,</button>
            <button name="=" onClick={calcular} className="botaoCinza">=</button>
            </div>
          
        </div>
    )
    
}