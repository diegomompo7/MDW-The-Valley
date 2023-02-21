import './BankAccount.css'
import React from 'react';

const BankAccount = () => {
    const [account, setAccount] = React.useState({
        name: "Diego",
        savings: 5000,
        founds: 1000,
    });

    const takeMoney = () => {
        const newAccount = {...account};
        newAccount.savings -= 50
        setAccount(newAccount)

    }
    const addMoney = () => {
        const newAccount = {
            ...account, 
            savings: account.savings + 100,
        }
        setAccount(newAccount)
    }
    const addMoneToFounds = () => {
        const newAccount = {
            ...account, 
            savings: account.savings - 1000,
            founds: account.founds + 1000
        }
        setAccount(newAccount)
        
    }


    return ( 
        <>
        <p>El titular de la cuenta es: {account.name}</p>
        <p>El saldo de la cuenta de ahorros es: {account.savings}€</p>
        <p>El fondo de inversión es: {account.founds}€</p>

        <button onClick={takeMoney}>Retirar 50€</button>
        <button onClick={addMoney}>Ingresar 100€</button>
        <button onClick={addMoneToFounds}>Meter en fondos 1000€</button>
        </>
    );
}

export default BankAccount