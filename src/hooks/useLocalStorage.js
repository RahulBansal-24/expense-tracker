import { useEffect, useState } from "react";

function UseLocalStorage(key,initialExpense){
    const[value,setValue] = useState(() =>{
        //getting expenses from local storage
        const saved = localStorage.getItem(key);
        return saved?JSON.parse(saved):initialExpense;
    });

    //adding expenses to local storage
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value])

    return [value,setValue];
}

export default UseLocalStorage;