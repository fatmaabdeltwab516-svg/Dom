
let Balance=0;
let deposit = 0;
let withdraw = 0;
let total = 0;

const showbalance=()=>{
     let input = document.querySelector('#Balance');
    let amunt = +input.value;
    Balance = amunt;
     let input2 = document.querySelector('#deposit');
     let deposit = +input2.value
      let input3 = document.querySelector('#withdraw');
      let withdraw = +input3.value
      let total = Balance +(deposit - withdraw);
        let tbody = document.querySelector('tbody');
     tbody.innerHTML += `
   <tr>
     <td>1</td>
     <td>${Balance}</td>
     <td>${deposit}</td>
     <td>${withdraw}</td>
     <td>${total}</td>
   </tr>`;
    
      input.value="";
      input2.value="";
      input3.value="";
}
