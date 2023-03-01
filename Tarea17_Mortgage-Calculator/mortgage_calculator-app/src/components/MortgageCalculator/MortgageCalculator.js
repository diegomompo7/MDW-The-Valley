import React from "react";
import './MortgageCalculator.scss';

const MortgageCalculator = () => {

    // ESTADOS
    const [monthlyPayment, setMonthlyPayment] = React.useState(0);
    const [down, setDown] = React.useState(0);
    const [up, setUp] = React.useState(0);
    const [ref, setRef] = React.useState("")

    //REFERENCIAS A LOS INPUTS

    const houseValueRef = React.useRef()
    const savingsRef = React.useRef()
    const numYearRef = React.useRef()
    const annualInterestRef = React.useRef()

    React.useEffect(() => {
        if(ref.current != undefined){
            console.log(ref.current.defaultValue)
            ref.current.defaultValue -= down
            console.log(ref.current.defaultValue)
        }
        

    }, [down])

    // GET VALUES AND CALCULATE 

    const getValuesAndCalculateMonthlyPayment = () => {
        const houseValue = houseValueRef.current.value
        const savings = savingsRef.current.value
        const numYear = numYearRef.current.value 
        const annualInterest = annualInterestRef.current.value

        const payment = calculateMonthPayment(houseValue, savings, annualInterest, numYear);

        setMonthlyPayment(payment)


    }

    const calculateMonthPayment = (houseValue, savings, annualInterest, numYears) => {
        const numMonths = numYears * 12;
        const annualInterestDecimal = annualInterest / 100;
        const monthlyInterest = annualInterestDecimal / 12;
        const moneyToAsk = houseValue - savings;
        const divider = (1 - Math.pow(1 + monthlyInterest, -numMonths)) / monthlyInterest;
        const monthPayment = (moneyToAsk / divider).toFixed(2);
        return monthPayment;
    }

    return (
        <div className="mortgage-calculator">
            {/*VALOR DE LA CASA*/}
            <fieldset className="mortgage-calculator__fieldset">
                <p>Introduce el valor de la casa:</p>
                    <button onClick={() => {setDown(5000); setRef(houseValueRef)}}>-</button><input ref={houseValueRef} placeholder="300000" defaultValue="300000" type="number" name="houseValue" id="houseValue"></input><button onClick={() => setUp(5000)}>+</button>
            </fieldset>
            {/*AHORROS APORTADOS*/}
            <fieldset className="mortgage-calculator__fieldset">
                <p>Ahorros aportados: </p>
                <button onClick={() => {setDown(1000); setRef(savingsRef)}}>-</button><input ref={savingsRef} placeholder="30000"   defaultValue="30000" type="number" name="savings" id="savings"></input><button onClick={() => setUp(1000)}>+</button>
            </fieldset>
            {/*PLAZO EN AÑOS*/}
            <fieldset className="mortgage-calculator__fieldset">
                <p>Introduce el plazo en años: </p>
                <button onClick={() => {setDown(1); setRef(numYearRef)}}>-</button><input ref={numYearRef} placeholder="30"  defaultValue="30" type="number" name="numYear" id="numYear"></input><button onClick={() => setUp(1)} >+</button>
            </fieldset>
            {/*INTERÉS DE LA HIPOTECA (TIPO FIJO)*/}
            <fieldset className="mortgage-calculator__fieldset">
                <p>Introduce el interés de la hipoteca (tipo fijo):</p>
                <button onClick={() => {setDown(0.01); setRef(annualInterestRef)}}>-</button><input ref={annualInterestRef} placeholder="2"  defaultValue="2.50" type="number" name="annualInterest" id="annualInterest"></input><button onClick={() => setUp(0.01)}>+</button>
            </fieldset>

            <button onClick={getValuesAndCalculateMonthlyPayment}>Calcular couta mensual</button>

            <p>Tu cuota mensual será de: <strong>{monthlyPayment}€</strong></p>
        </div>
    );
}

export default MortgageCalculator