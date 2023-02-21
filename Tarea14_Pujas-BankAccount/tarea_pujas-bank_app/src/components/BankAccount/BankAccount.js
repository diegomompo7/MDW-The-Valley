import './BankAccount.css'
import React from 'react'

const BankAccount = () => {
    const [account, setAccount] = React.useState({
        name: "Diego",
        savings: 0,
        founds: 0,
    })

    const takeMoney = () => {
        const newAccount = {
            ...account,
            savings: (account.savings < 50) ? account.savings : account.savings - 50

        }

        if(account.savings < 50){
            alert("Amigo...aún no has ahorrado 50€...")
        }
        setAccount(newAccount)
    }

    const addMoney = () => {
        const newAccount = {
            ...account,
            savings: account.savings += 100
        }
        setAccount(newAccount)
    }

    const addMoneyToFound = () => {
        const newAccount = {
            ...account,
            savings: (account.savings < 1000) ? account.savings : account.savings - 1000 , 
            founds: (account.savings < 1000) ? account.founds : account.founds + 1000
        }
        if(account.savings < 1000){
            alert("Primero tienes que ahorrar 1000€")
        }
        setAccount(newAccount)
    }

    return (
        <>
            <p>El titular de la cuenta es: {account.name}</p>
            <p>El saldo de la cuenta de ahorros es: {account.savings}</p>
            <p>El total de fondos  de inversión es: {account.founds}</p>
            <button onClick={takeMoney}>Retirar 50€</button>
            <button onClick={addMoney}>Ingresar 100€</button>
            <button onClick={addMoneyToFound}>Meter en fondos 1000€</button>
        </>
    )
}

export default BankAccount