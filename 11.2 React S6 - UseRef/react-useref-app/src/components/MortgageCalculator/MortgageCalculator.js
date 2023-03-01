import React from "react";
import './MortgageCalculator.scss';

const MortgageCalculator = () => {
    return (
        <div className="mortgage-calculator">
            <fieldset className="mortgage-calculator__fieldset">
                <label>
                    Introduce el valor de la casa:
                    <input placeholder="30000" type="number" name="houseValue" id="houseValue"></input>
                </label>
            </fieldset>
        </div>
    );
}

export default MortgageCalculator