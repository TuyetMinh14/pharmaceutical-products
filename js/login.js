var signupButton = document.querySelector(".sigin"); //the a dang ky
const signupButton2 = document.querySelector(".dangnhap");
const loginButton = document.querySelector(".log");
const loginButton2 = document.querySelector(".login .dangky");
console.log(loginButton2);

const popupSignup = document.querySelector(".signup");
const popuplogin = document.querySelector(".login");

// validation form register and register user local storage
const inputUsernameRegister = document.querySelector(".tk");
const inputPasswordRegister = document.querySelector(".mk");
const inputPhoneRegister = document.querySelector(".phone");

const checkbox = document.querySelector('.dongy')
const btnRegister = document.querySelector("#dongydangky");
const inputUsername = document.querySelector(".tkdangnhap");
const inputPassword = document.querySelector(".mkdangnhap");

// iterate localStorage
const logIn = {
  username: "user",
  password: "123",
  phone: '123'
};
let json2 = JSON.stringify(logIn);
localStorage.setItem('user', json2);

if(!window.location.href.includes('login'))
{
signupButton.addEventListener("click", function () {
  popupSignup.style.display = "block";
  popuplogin.style.display = "none";
});

signupButton2.addEventListener("click", function () {
  popuplogin.style.display = "block";
  popupSignup.style.display = "none";
});

loginButton2.addEventListener("click", function () {
  popupSignup.style.display = "block";
  popuplogin.style.display = "none";
});

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
    
    try {
      const parsedValue = JSON.parse(value);
      if (inputPhoneRegister.value === parsedValue.phone) {
        alert('Số điện thoại đã được đăng ký');
        return;
      }
    } catch (error) {
      // Handle the error, e.g., log it or show a different alert
      console.error('Error parsing JSON:', error);
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
    localStorage.setItem(inputPhoneRegister.value,'')
    if (window.location.pathname.includes("index.html")) {
      window.location.href = "index-login.html";
    } else if (window.location.pathname.includes("detail.html")) {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id');
      window.location.href = `detail-login.html?id=${productId}`;
      localStorage.setItem('href',`detail.html?id=${productId}`);
    } else {
      window.location.href = "category-login.html";
    }
    const logIn = {
      usernames: inputUsernameRegister.value,
      phone : inputPhoneRegister.value
    };
    let json1 = JSON.stringify(logIn);
    localStorage.setItem('dangnhap', json1);
    
    
});

const btnLogin = document.querySelector("#dongydangnhap");
console.log(btnLogin)
// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("Vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value)) || {};
    
    if (user.username === inputUsername.value && user.password === inputPassword.value) {
      alert("Đăng Nhập Thành Công");

      // Lưu thông tin đăng nhập vào Local Storage
      const logIn = {
        usernames: inputUsername.value,
        phone: user.phone
      };
      let json1 = JSON.stringify(logIn);
      localStorage.setItem('dangnhap', json1);

      

      // Kiểm tra trang hiện tại và chuyển hướng tương ứng
      if (window.location.pathname.includes("index.html")) {
        window.location.href = "index-login.html";
      } else if (window.location.pathname.includes("detail.html")) {
        // Lấy id từ URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        window.location.href = `detail-login.html?id=${productId}`;
        localStorage.setItem('href',`detail.html?id=${productId}`);
      } else {
        // Trường hợp khác, có thể thêm các trang khác nếu cần
        window.location.href = "category-login.html";
      }
    } else {
      alert("Đăng Nhập Thất Bại");
      return;
    }
  }
  


});

}




loginButton.addEventListener("click", function () {
  if(window.location.href.includes("login")){
    if(window.location.href.includes("payment")){
      indow.location.href = "./index.html"
    }
    else{
                        let a = window.location.href;
                        console.log(a)
                        a = a.replace("-login", "");
                        window.location.href = a
                      }
  }
  else{
  popuplogin.style.display = "block";
  popupSignup.style.display = "none";
  }
});



function closePopup() {
  popupSignup.style.display = "none";
  popuplogin.style.display = "none";
}

function addstockNolog(){
  popuplogin.style.display = "block";
};

// đăng ký
// // validation form register and register user local storage
// const inputUsernameRegister = document.querySelector(".tk");
// const inputPasswordRegister = document.querySelector(".mk");
// const inputPhoneRegister = document.querySelector(".phone");

// const checkbox = document.querySelector('.dongy')
// const btnRegister = document.querySelector("#dongydangky");
// const inputUsername = document.querySelector(".tkdangnhap");
// const inputPassword = document.querySelector(".mkdangnhap");

// // iterate localStorage
// const logIn = {
//   username: "user",
//   password: "123",
//   phone: '123'
// };
// let json2 = JSON.stringify(logIn);
// localStorage.setItem('user', json2);
// localStorage.setItem('123',' ')




// btnRegister.addEventListener("click", (e) => {
//   e.preventDefault();
//   const phoneRegex = /^(0|84)([0-9]{9,10})$/;
//   const isValidPhone = phoneRegex.test(inputPhoneRegister.value);
//   const users = JSON.parse(localStorage.getItem(inputUsernameRegister.value)) || [];
//   if (
//     inputUsernameRegister.value === "" ||
//     inputPasswordRegister.value === "" ||
//     !isValidPhone ||
//     checkbox.checked === false
//   )
//    {
//     alert("Thông tin không hợp lệ");
//     return;
//   }

//   if(inputUsernameRegister.value == users.username)
//   {
//     alert("Tên người dùng đã được đăng ký");  
//     return;
//   } 
  
//   for (let i = 0; i < localStorage.length; i++) {

//     // set iteration key name
//     const key = localStorage.key(i);
  
//     // use key name to retrieve the corresponding value
//     const value = localStorage.getItem(key);
    
//     try {
//       const parsedValue = JSON.parse(value);
//       if (inputPhoneRegister.value === parsedValue.phone) {
//         alert('Số điện thoại đã được đăng ký');
//         return;
//       }
//     } catch (error) {
//       // Handle the error, e.g., log it or show a different alert
//       console.error('Error parsing JSON:', error);
//     }
    
  
//   }

//     // array user
//     const user = {
//       username: inputUsernameRegister.value,
//       password: inputPasswordRegister.value,
//       phone: inputPhoneRegister.value,
//     };
//     let json = JSON.stringify(user);
//     localStorage.setItem(inputUsernameRegister.value, json);
//     if (window.location.pathname.includes("index.html")) {
//       window.location.href = "index-login.html";
//     } else if (window.location.pathname.includes("detail.html")) {
//       const urlParams = new URLSearchParams(window.location.search);
//       const productId = urlParams.get('id');
//       window.location.href = `detail-login.html?id=${productId}`;
//       localStorage.setItem('href',`detail.html?id=${productId}`);
//     } else {
//       window.location.href = "category-login.html";
//     }
//     const logIn = {
//       usernames: inputUsernameRegister.value,
//       phone : inputPhoneRegister.value
//     };
//     let json1 = JSON.stringify(logIn);
//     localStorage.setItem('dangnhap', json1);
//     localStorage.setItem(inputPhoneRegister.value,'')
// });


// const inputUsername = document.querySelector(".tkdangnhap");
// const inputPassword = document.querySelector(".mkdangnhap");




// const btnLogin = document.querySelector("#dongydangnhap");
// console.log(btnLogin)
// // validation form login

// btnLogin.addEventListener("click", (e) => {
//   e.preventDefault();
  
//   if (inputUsername.value === "" || inputPassword.value === "") {
//     alert("Vui lòng không để trống");
//   } else {
//     const user = JSON.parse(localStorage.getItem(inputUsername.value)) || {};
    
//     if (user.username === inputUsername.value && user.password === inputPassword.value) {
//       alert("Đăng Nhập Thành Công");

//       // Lưu thông tin đăng nhập vào Local Storage
//       const logIn = {
//         username: inputUsername.value,
//         phone: user.phone
//       };
//       let json1 = JSON.stringify(logIn);
//       localStorage.setItem('dangnhap', json1);

      

//       // Kiểm tra trang hiện tại và chuyển hướng tương ứng
//       if (window.location.pathname.includes("index.html")) {
//         window.location.href = "index-login.html";
//       } else if (window.location.pathname.includes("detail.html")) {
//         // Lấy id từ URL
//         const urlParams = new URLSearchParams(window.location.search);
//         const productId = urlParams.get('id');
//         window.location.href = `detail-login.html?id=${productId}`;
//         localStorage.setItem('href',`detail.html?id=${productId}`);
//       } else {
//         // Trường hợp khác, có thể thêm các trang khác nếu cần
//         window.location.href = "category-login.html";
//       }
//     } else {
//       alert("Đăng Nhập Thất Bại");
//       return;
//     }
//   }
  


// });
