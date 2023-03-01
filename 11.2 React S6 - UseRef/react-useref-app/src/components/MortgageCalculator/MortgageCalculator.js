import React from "react";
import './MortgageCalculator.scss';

const MortgageCalculator = () => {

    // ESTADOS
    const [monthlyPayment, setMonthlyPayment] = React.useState(0);

    //REFERENCIAS A LOS INPUTS

    const houseValueRef = React.useRef()
    const savingsRef = React.useRef()
    const numYearRef = React.useRef()
    const annualInterestRef = React.useRef()

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
        const monthPayment = moneyToAsk / divider;
        return monthPayment;
    }

    return (
        <div className="mortgage-calculator">
            {/*VALOR DE LA CASA*/}
            <fieldset className="mortgage-calculator__fieldset">
                <label>
                    Introduce el valor de la casa:
                    <input ref={houseValueRef} placeholder="300000" type="number" name="houseValue" id="houseValue"></input>
                </label>
            </fieldset>
            {/*AHORROS APORTADOS*/}
            <fieldset className="mortgage-calculator__fieldset">
                <label>
                    Ahorros aportados: 
                    <input ref={savingsRef} placeholder="30000" type="number" name="savings" id="savings"></input>
                </label>
            </fieldset>
            {/*PLAZO EN AÑOS*/}
            <fieldset className="mortgage-calculator__fieldset">
                <label>
                    Introduce el plazo en años: 
                    <input ref={numYearRef} placeholder="30" type="number" name="numYear" id="numYear"></input>
                </label>
            </fieldset>
            {/*INTERÉS DE LA HIPOTECA (TIPO FIJO)*/}
            <fieldset className="mortgage-calculator__fieldset">
                <label>
                    Introduce el interés de la hipoteca (tipo fijo):
                    <input ref={annualInterestRef} placeholder="2" type="number" name="annualInterest" id="annualInterest"></input>
                </label>
            </fieldset>

            <button onClick={getValuesAndCalculateMonthlyPayment}>Calcular couta mensual</button>

            <p>Tu cuota mensual será de: <strong>{monthlyPayment}€</strong></p>
        </div>
    );
}

export default MortgageCalculator