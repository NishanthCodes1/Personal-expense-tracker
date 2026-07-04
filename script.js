</style>

</head>

<body>

<div class="container">

<h1>Expense Tracker</h1>

<div class="summary">

<div class="card income">
Income
<h3 id="income">₹0</h3>
</div>

<div class="card expense">
Expense
<h3 id="expense">₹0</h3>
</div>

<div class="card balance">
Balance
<h3 id="balance">₹0</h3>
</div>

</div>

<select id="type">
<option value="Income">Income</option>
<option value="Expense">Expense</option>
</select>

<input type="text" id="title" placeholder="Title">

<input type="number" id="amount" placeholder="Amount">

<button onclick="addTransaction()">Add Transaction</button>

<ul id="list"></ul>

</div>

<script>

let transactions=JSON.parse(localStorage.getItem("transactions"))||[];

showData();

function addTransaction(){

let type=document.getElementById("type").value;
let title=document.getElementById("title").value;
let amount=Number(document.getElementById("amount").value);

if(title==""||amount<=0){
alert("Enter valid details");
return;
}

transactions.push({
type,
title,
amount
});

localStorage.setItem("transactions",JSON.stringify(transactions));

document.getElementById("title").value="";
document.getElementById("amount").value="";

showData();

}

function showData(){

let list=document.getElementById("list");

list.innerHTML="";

let income=0;
let expense=0;

transactions.forEach((item,index)=>{

if(item.type=="Income"){
income+=item.amount;
}else{
expense+=item.amount;
}

list.innerHTML+=`
<li>
${item.title} (${item.type}) ₹${item.amount}
<button class="delete" onclick="deleteItem(${index})">Delete</button>
</li>
`;

});

document.getElementById("income").innerHTML="₹"+income;
document.getElementById("expense").innerHTML="₹"+expense;
document.getElementById("balance").innerHTML="₹"+(income-expense);

}

function deleteItem(index){

transactions.splice(index,1);

localStorage.setItem("transactions",JSON.stringify(transactions));

showData();

}

</script>
