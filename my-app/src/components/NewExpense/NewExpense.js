import React from 'react';

import Expenseform from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) =>{

   const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);

   };


    return <div className = "new-expense">
        <Expenseform onSaveExpenseData ={saveExpenseDataHandler}/> 
    </div>
}


export default NewExpense;