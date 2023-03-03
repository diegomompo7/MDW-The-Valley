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

    const changeInputValue = (ammount, ref) => {
        const currentValue = parseFloat(ref.current.value)
        const newValue = currentValue + ammount
        ref.current.value = newValue
    }

    const changeInterest = (ammount) => {
        const currentValue = parseFloat(annualInterestRef.current.value);
        let newValue = currentValue + ammount;
        newValue = (Math.round(newValue * 100) / 100).toFixed(2);
        annualInterestRef.current.value = newValue;
      }

    return (
        <div className="mortgage-calculator">
            {/*VALOR DE LA CASA*/}
            <fieldset className="mortgage-calculator__fieldset">
                <p>Introduce el valor de la casa:</p>
                    <button onClick={() => {changeInputValue(-5000, houseValueRef)}}>-</button>
                    <input ref={houseValueRef} placeholder="300000" defaultValue="300000" type="number" name="houseValue" id="houseValue"></input>
                    <button onClick={() => {changeInputValue(5000, houseValueRef)}}>+</button>
            </fieldset>
            {/*AHORROS APORTADOS*/}
            <fieldset className="mortgage-calculator__fieldset">
                <p>Ahorros aportados: </p>
                <button onClick={() => {changeInputValue(-1000, savingsRef)}}>-</button>
                <input ref={savingsRef} placeholder="30000"   defaultValue="30000" type="number" name="savings" id="savings"></input>
                <button onClick={() => {changeInputValue(1000, savingsRef)}}>+</button>
            </fieldset>
            {/*PLAZO EN AÑOS*/}
            <fieldset className="mortgage-calculator__fieldset">
                <p>Introduce el plazo en años: </p>
                <button onClick={() => {changeInputValue(-1, numYearRef)}}>-</button>
                <input ref={numYearRef} placeholder="30"  defaultValue="30" type="number" name="numYear" id="numYear"></input>
                <button onClick={() => {changeInputValue(1, numYearRef)}} >+</button>
            </fieldset>
            {/*INTERÉS DE LA HIPOTECA (TIPO FIJO)*/}
            <fieldset className="mortgage-calculator__fieldset">
                <p>Introduce el interés de la hipoteca (tipo fijo):</p>
                <button onClick={() => {changeInterest(-0.01)}}>-</button>
                <input ref={annualInterestRef} placeholder="2"  defaultValue="2.50" type="number" name="annualInterest" id="annualInterest"></input>
                <button onClick={() => {{changeInterest(0.01)}}}>+</button>
            </fieldset>

            <button onClick={getValuesAndCalculateMonthlyPayment}>Calcular couta mensual</button>

            <p>Tu cuota mensual será de: <strong>{monthlyPayment}€</strong></p>
        </div>
    );
}

export default MortgageCalculator