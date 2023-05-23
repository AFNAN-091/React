import logo from './logo.svg';
import './App.css';

import NewExpense from './components/NewExpense/NewExpense';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

const  App = ()=> {

  const expense = [
    { id : 'e1',
      title: 'Toilet paper', 
      amount : 25.00, 
      date: new Date(2020,7,14)
    },
    { id: 'e2', 
      title: 'TV', 
      amount : 40, 
      date: new Date(2021,2,14)
    },
    { id: 'e3', 
      title: 'Car Insurance', 
      amount : 239.43, 
      date: new Date(2021,2,28)
    },
    { id: 'e4', 
      title: 'Wooden', 
      amount : 450, 
      date: new Date(2021,5,12)
    }
  ];


  const addExpenseHandler = (expense) =>{
      console.log('in app.js');
      console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expense}/>  
    </div>
  );
}

export default App;
