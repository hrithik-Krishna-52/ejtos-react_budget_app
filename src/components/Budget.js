import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';
import Currency from './CurrencyList';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);

        if(newBudget > 20000) {
            alert("The value cannot exceed 20000");
        } else if(newBudget < ExpenseTotal) {
            alert("You cannot reduce the budget value lower than the spending");
        }
    }

    return (
        <div className='alert alert-secondary'>
        <span>Budget: {Currency} </span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;


    
    
