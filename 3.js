const prepaid=document.getElementById("prepaid");
const postpaid=document.getElementById("postpaid");
const dth=document.getElementById("dth");
const wifi=document.getElementById("wifi");
const note=document.querySelector(".container-in input[placeholder='Enter mobile number']");

prepaid.addEventListener("click",(e)=>{
    e.preventDefault();
    note.setAttribute("placeholder","Prepaid")
});
postpaid.addEventListener("click",(e)=>{
    e.preventDefault();
    note.setAttribute("placeholder","Postpaid")
});
dth.addEventListener("click",(e)=>{
    e.preventDefault();
    note.setAttribute("placeholder","DTH")
});
wifi.addEventListener("click",(e)=>{
    e.preventDefault();
    note.setAttribute("placeholder","Wi-Fi")
});