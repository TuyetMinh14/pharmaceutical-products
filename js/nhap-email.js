function nhapemial(){
    var email = document.querySelector("#email")
    const phoneRegex = /^(0|84)([0-9]{9,10})$/;
    const isValidPhone = phoneRegex.test(email);
    if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) || !isValidPhone)
    {
        alert("Email/ Số điện thoại không hợp lệ")
        
    }

}