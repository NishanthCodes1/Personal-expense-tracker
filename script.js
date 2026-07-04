let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

displayExpenses();

function addExpense(){

    let title = document.getElementById("title").value;
    let amount = Number(document.getElementById("amount").value);

    if(title=="" || amount<=0){
        alert("Enter valid data");
        return;
    }

    expenses.push({
        title:title,
        amount:amount
    });

    localStorage.setItem("expenses",JSON.stringify(expenses));

    displayExpenses();

    document.getElementById("title").value="";
    document.getElementById("amount").value="";
}

function displayExpenses(){

    let list=document.getElementById("expenseList");

    list.innerHTML="";

    let total=0;

    expenses.forEach((expense,index)=>{

        total += expense.amount;

        list.innerHTML += `
        <li>
            ${expense.title} - ₹${expense.amount}
            <button onclick="deleteExpense(${index})">Delete</button>
        </li>`;
    });

    document.getElementById("total").innerText=total;
}

function deleteExpense(index){

    expenses.splice(index,1);

    localStorage.setItem("expenses",JSON.stringify(expenses));

    displayExpenses();
}
