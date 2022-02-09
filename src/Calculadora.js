import React, {useState} from "react";
import "./calculadora.css"


function Calculadora() {

    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [currenOperation, setCurrenOperation] = useState("");
    const [result, setResult] = useState(0);

    function clickNumber (valor){
        if ( currenOperation === ""){
            setNumber1( number1 + valor);
        }else{
            setNumber2( number2 + valor);
        }

        if (valor === "." && number1.includes(".")) setNumber1( number1 );
        if (valor === "." && number2.includes(".")) setNumber2( number2 );

    }

    function clickNegat (valor){
        if ( currenOperation === ""){
            setNumber1( - + number1 );
        }else{
            setNumber2( - + number2 );
        }
    }

    function clickOperation (valor) {
        setCurrenOperation(valor);
    }

    function clickSubtract () {
        if (currenOperation === "") {
            setNumber1(number1.toString().slice(0,-1));
        }else{
            setNumber2(number2.toString().slice(0,-1));
        }
    }

    function clickReset () {
        setNumber1("");
        setNumber2("");  
        setCurrenOperation("");
        setResult("");
    }

    function getResult () {
        switch (currenOperation) {
            case "+": 
                setResult(Number(number1) + Number(number2));
                break;
            case "-": 
                setResult(Number(number1) - Number(number2));
                break;
            case "*": 
                setResult(Number(number1) * Number(number2));
                break;
            case "/": 
                setResult(Number(number1) / Number(number2));
                break;
            case "%": 
                setResult(Number(number1) * Number(number2) / 100);
                break;
        }
    }

    return (
        <div className="container">
            <div className="calculator">
                <div className="display">
                    <div className="number_initial" >{number1 + currenOperation + number2}</div>
                    <div className="number_final">{ result > 0 ? result.toFixed(5) : "" }</div>
                </div>
                    <button onClick={clickReset}>C</button>
                    <button onClick={clickSubtract}>&larr;</button>
                    <button onClick={ () => {clickOperation("%")} }>%</button>
                    <button onClick={ () => {clickOperation("/")} }>/</button>
                    <button onClick={ () => {clickNumber(7)} }>7</button>
                    <button onClick={ () => {clickNumber(8)} }>8</button>
                    <button onClick={ () => {clickNumber(9)} }>9</button>
                    <button onClick={ () => {clickOperation("*")} }>x</button>
                    <button onClick={ () => {clickNumber(4)} }>4</button>
                    <button onClick={ () => {clickNumber(5)} }>5</button>
                    <button onClick={ () => {clickNumber(6)} }>6</button>
                    <button onClick={ () => {clickOperation("-")} }>-</button>
                    <button onClick={ () => {clickNumber(1)} }>1</button>
                    <button onClick={ () => {clickNumber(2)} }>2</button>
                    <button onClick={ () => {clickNumber(3)} }>3</button>
                    <button onClick={ () => {clickOperation("+")} }>+</button>
                    <button onClick={clickNegat}>+/-</button>
                    <button onClick={ () => {clickNumber(0)} }>0</button>
                    <button onClick={ () => {clickNumber(".")} }>.</button>
                    <button onClick={getResult}>=</button>
            </div>
        </div>
    );
  }
  
  export default Calculadora;