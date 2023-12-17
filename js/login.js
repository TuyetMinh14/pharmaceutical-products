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

const checkbox = document.querySelector('.dongy')
const btnRegister = document.querySelector("#dongydangky");

// iterate localStorage
const logIn = {
  username: "user",
  password: "123"
};
let json2 = JSON.stringify(logIn);
localStorage.setItem('user', json2);




btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  const phoneRegex = /^(0|84)([0-9]{9,10})$/;
  const isValidPhone = phoneRegex.test(inputPhoneRegister.value);
  const users = JSON.parse(localStorage.getItem(inputUsernameRegister.value)) || [];
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === "" ||
    !isValidPhone ||
    checkbox.checked === false
  )
   {
    alert("Thông tin không hợp lệ");
    return;
  }

  if(inputUsernameRegister.value == users.username)
  {
    alert("Tên người dùng đã được đăng ký");  
    return;
  } 
  
  for (let i = 0; i < localStorage.length; i++) {

    // set iteration key name
    const key = localStorage.key(i);
  
    // use key name to retrieve the corresponding value
    const value = localStorage.getItem(key);
  
    // console.log the iteration key and value
    if(inputPhoneRegister.value == JSON.parse(value).phone)
    {
      alert('Số điện thoại đã được đăng ký')
      return;
    }
  
  }

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
    const logIn = {
      usernames: inputUsernameRegister.value,
    };
    let json1 = JSON.stringify(logIn);
    localStorage.setItem('dangnhap', json1);
});


const inputUsername = document.querySelector(".tkdangnhap");
const inputPassword = document.querySelector(".mkdangnhap");


const btnLogin = document.querySelector("#dongydangnhap");
console.log(btnLogin)
// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") 
  {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value)) || [];
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value 
    ) {
      alert("Đăng Nhập Thành Công");
      const logIn = {
        usernames: inputUsername.value,
      };
      let json1 = JSON.stringify(logIn);
      localStorage.setItem('dangnhap', json1);
      window.location.href = "index-login.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
  
  const logIn = {
    usernames: inputUsername.value,
  };
  let json1 = JSON.stringify(logIn);
  localStorage.setItem('dangnhap', json1);
}
);


// var dangxuatbutton = document.querySelector('.dangxuat');

// dangxuatbutton.addEventListener("click", function () {
//   window.localStorage.removeItem('dangnhap')
//  });
// function handleBeforeUnload() {
//   localStorage.removeItem('dangnhap');
// }

// window.addEventListener('beforeunload', handleBeforeUnload);



// document.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     if (document.querySelector(".login")) {
//       // Thực hiện sự kiện đăng nhập
//       event.preventDefault(); // Ngăn chặn hành động mặc định của phím Enter (chẳng hạn nhấn Enter để submit form)
//       btnLogin.click(); // Gọi sự kiện click của nút đăng nhập
//     }
//   }
// });

