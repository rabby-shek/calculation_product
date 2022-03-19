function getValueFirstRow(){
    let RATE = document.getElementById('FirstProductrate');
    let  calculation1= document.getElementById("phones").value;
    RATE.innerText = calculation1 ;
console.log(calculation1);


}

getValueFirstRow();

function calculateFirstRow(){
    let  calculation1= document.getElementById("phones").value;
    let TOTAL = document.getElementById('FirstProducttotal');
    let Quantity = Number(document.getElementById('firstquantity').value);
    TOTAL.innerHTML =  parseInt(calculation1)*parseInt(Quantity);
    add();



}



//second row product 

function getValueSecondRow(){
    let RATE2 = document.getElementById('SecondProductrate');
    let  calculation2= document.getElementById("chips").value;
    RATE2.innerText = calculation2 ;
console.log(calculation2);


}

getValueSecondRow();

function calculateSecondRow(){
    let  calculation2= document.getElementById("chips").value;
    let TOTAL2 = document.getElementById('SecondProducttotal');
    let Quantity2 = Number(document.getElementById('secondquantity').value);
    TOTAL2.innerHTML =  parseInt(calculation2)*parseInt(Quantity2);
    add();



}


//third product 


function getValueThirdRow(){
    let RATE3 = document.getElementById('ThirdProductrate');
    let  calculation3= document.getElementById("coldrinks").value;
    RATE3.innerText = calculation3 ;
console.log(calculation3);


}

getValueThirdRow();

function calculateThirdRow(){
    let  calculation3= document.getElementById("coldrinks").value;
    let TOTAL3 = document.getElementById('ThirdProducttotal');
    let Quantity3 = Number(document.getElementById('thirdquantity').value);
    TOTAL3.innerHTML =  parseInt(calculation3)*parseInt(Quantity3);
    add();
    
   



}



function add(){
    let TOTAL = document.getElementById('FirstProducttotal').innerHTML;
    let TOTAL2 = document.getElementById('SecondProducttotal').innerHTML;
    let TOTAL3 = document.getElementById('ThirdProducttotal').innerHTML;
    var sum = 0; 
    var sum = sum + parseInt(TOTAL);
    var  sum = sum +parseInt(TOTAL3);
    var  sum = sum +parseInt(TOTAL2);
    var sum = sum; 


    
    let producttoal = document.getElementById('allresult');
    producttoal.innerHTML = sum;
   console.log(producttoal.innerHTML);
   console.log(TOTAL3);
   console.log(TOTAL);


  


}

