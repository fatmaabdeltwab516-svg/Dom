
let Balance=0;
let istransaction = true;
let deposit = 0;
let withdraw = 0;
let total = 0;
let index = 0 ;
const showbalance=()=>{
     let input = document.querySelector('#Balance');
     let input2 = document.querySelector('#deposit');
    let input3 = document.querySelector('#withdraw');
    if(Balance === 0){
      Balance =+input.value;
      }
      let deposit = +input2.value
      let withdraw = +input3.value
      let total =Balance+ deposit-withdraw;
      let tbody = document.querySelector('tbody');
      index++;
     tbody.innerHTML += `
   <tr>
     <td>${index}</td>
     <td>${Balance}</td>
     <td>${deposit}</td>
     <td>${withdraw}</td>
     <td>${total}</td>
   </tr>`;
     Balance=total;
      input.value="";
      input2.value="";
      input3.value="";
}
