var signupButton = document.querySelector(".sigin"); //the a dang ky
const signupButton2 = document.querySelector(".dangnhap");
const loginButton = document.querySelector(".log");
const loginButton2 = document.querySelector(".login .dangky");
console.log(loginButton2);

const popupSignup = document.querySelector(".signup");
const popuplogin = document.querySelector(".login");

signupButton.addEventListener("click", function () {
  popupSignup.style.display = "block";
  popuplogin.style.display = "none";
});

signupButton2.addEventListener("click", function () {
  popuplogin.style.display = "block";
  popupSignup.style.display = "none";
});

loginButton.addEventListener("click", function () {
  popuplogin.style.display = "block";
  popupSignup.style.display = "none";
});

loginButton2.addEventListener("click", function () {
  popupSignup.style.display = "block";
  popuplogin.style.display = "none";
});

function closePopup() {
  popupSignup.style.display = "none";
  popuplogin.style.display = "none";
}

// đăng ký
// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".tk");
const inputPasswordRegister = document.querySelector(".mk");
const inputPhoneRegister = document.querySelector(".phone");

const btnRegister = document.querySelector("#dongydangky");



btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  const phoneRegex = /^(0|84)([0-9]{9,10})$/;
  const isValidPhone = phoneRegex.test(inputPhoneRegister.value);
  
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === "" ||
    !isValidPhone 
  )
   {
    alert("Thông tin không hợp lệ");
  }
   else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
      phone: inputPhoneRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "index-login.html";

    //arraydangnhap 

    const logIn = {
      usernames: inputUsernameRegister.value,
    };
    let json1 = JSON.stringify(usernames);
    localStorage.setItem(inputUsernameRegister.value, json1);
  }
});

// đăng nhập
// validation form login
const inputUsername = document.querySelector(".login .tk");
const inputPassword = document.querySelector(".login .mk");

const btnLogin = document.querySelector("#dongydangnhap");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "index-login.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});



// tạo 1 cái josn khác trên local stortage
// json : tendangnhap sau khi dang ky xong xong roi display ten do -> dang xuat xoa json do                   


