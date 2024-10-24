const net =document.getElementById("net");
const Validity =document.getElementById("Validity");
const output=document.getElementById("Amount");
const pay=document.getElementById("payrupee");
const checkamount=document.getElementById("checkamount");

checkamount.addEventListener("click",
    function (e){
        e.preventDefault();
        if(net.value==1){
            output.innerHTML=(net.value*15*Validity.value);
        }
        else{
            output.innerHTML=(net.value*25*Validity.value);
        }
    }
)

pay.addEventListener("click",(e)=>{
    e.preventDefault();
    if(output.textContent == 0){
        alert("Anpad bhai data and days to fill kro");
    }
    else{
        alert("You Transection was successfull !!!");
    }
});
