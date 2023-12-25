function nhapemial(){
    
    var email = document.querySelector("#email").value
   
    const phoneRegex = /^(0|84)([0-9]{9,10})$/;
    const isValidPhone = phoneRegex.test(email);
    const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    const isValidEmail = emailRegex.test(email) 
    console.log(isValidEmail)
    console.log(isValidPhone)
    if(isValidEmail || isValidPhone)
    {
        alert('Đăng ký thành công');
       
    }
    else
    {
        event.preventDefault();
        alert("Email/ Số điện thoại không hợp lệ")  

    }

}

