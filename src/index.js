import "./scss/main.scss"
import arrow from "./assets/arrow.svg"

const call = document.getElementsByClassName("call")[0];
const number = document.getElementsByClassName("number")[0];
const popup = document.getElementsByClassName("popup")[0];
const close = document.getElementsByClassName("popup__close")[0];
const popupBtn = document.querySelector(".popupBtn");
const checkbox = document.querySelector(".check-highload");
const form = document.querySelector(".popup__input");
const phoneNumber = document.querySelector(".phoneNumber");

let num ;

call.addEventListener('click', ()=>{
    popup.style.display = "block"
})
number.addEventListener('click', ()=>{
    popup.style.display = "block"
})
close.addEventListener('click', ()=>{
    popup.style.display = "none"
})

phoneNumber.addEventListener("change", (e)=>{
    num = e.target.value;
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    }) 
    checkbox.addEventListener("change", (event) => {
    if (event.target.checked) { 
        popupBtn.disabled = false;
    } else {
        popupBtn.disabled = true;
    }
    });

popupBtn.addEventListener("click", ()=>{
    let count =0;
    let arrNum = num.split("");
    for( let i=0; i<arrNum.length; i++){
        if (arrNum[i] == "0" || arrNum[i] == "1" || arrNum[i] == "2" || arrNum[i] == "3" || arrNum[i] == "4" || arrNum[i] == "5" 
        || arrNum[i] == "6" || arrNum[i] == "7" || arrNum[i] == "8" || arrNum[i] == "9"){
            count ++;
        }
    }
    if(count == 10){
        alert("Спасибо, ваша заявка отправлена");
        popup.style.display = "none";
    } else{
        alert("Что-то введено непрваильно, количичество цифр в номере не 10");
    }
})