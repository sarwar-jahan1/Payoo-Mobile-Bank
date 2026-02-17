document.getElementById('login-btn').addEventListener('click', function(){
    // console.log('Login button clicked')
    // 1. get mobile number input
    const numberInput=document.getElementById('input-number');
    const contractNumber=numberInput.value;
    console.log(contractNumber);

    // Get pin input
    const inputPin=document.getElementById('input-pin');
    const pin=inputPin.value;
    console.log(pin);
    // Match pin and mobile number
    if(contractNumber=='01234567890' && pin=='1234'){
        // 3.1 true ==== alert 
        alert('Login Success');
        window.location.assign("/home.html")
    }else{
        // 3.2 false ==== alert
        alert('Login Failed');
        return;
    }
})