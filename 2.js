document.getElementById('mobileForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const mobileNo = document.getElementById('mobileNo').value;
    const regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (regex.test(mobileNo)) {
        window.location.href = 'prepaid.html';
    } else {
        alert("please enter valid mobile-no");
    }
});