"use strict";

let baseURL = "https://task.samid.uz/v1/user";

const registration = (e) => {
  e.preventDefault();

  const userName = $("#fulName").value.trim();
  const userEmail = $("#email").value.trim();
  const userPassword = $("#password").value.trim();

  const params = {
    username: userName,
    email: userEmail,
    password: userPassword,
  };

  if (
    userName.length === 0 ||
    userEmail.length === 0 ||
    userPassword.length === 0
  ) {
    alert("MALUMOT TOLIQ EMAS ");
  } else {
    fetch(`${baseURL}/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((e) => e.json())
      .then((e) => {
        if (e.code === 1) {
          alert(e.message);
          setTimeout(() => {
            window.location.replace("./login.html");
          }, 1000);
        } else {
          console.log(e);
          alert("OLDIN RO'YXATDAN O'TGAN");
        }
      });
  }
};

$("#registration").addEventListener("submit", (e) => {
  registration(e);
});

let userName = document.querySelector("#email"),
  passWord = document.querySelector("#password"),
  koz = document.querySelector(".koz"),
  fulName = document.querySelector("#fulName");

fulName.addEventListener("blur", (event) => {
  if (event.target.value.trim().length === 0) {
    event.target.style.border = "2px solid red";
    event.target.setAttribute("placeholder", "Plasse fill input ..... ");
  } else {
    event.target.style.border = "2px solid green";
    event.target.setAttribute("placeholder", "Eter username ");
  }
});

userName.addEventListener("blur", (event) => {
  if (event.target.value.trim().length === 0) {
    event.target.style.border = "2px solid red";
    event.target.setAttribute("placeholder", "Plasse fill input ..... ");
  } else {
    event.target.style.border = "2px solid green";
    event.target.setAttribute("placeholder", "Eter username ");
  }
});

passWord.addEventListener("blur", (event) => {
  if (event.target.value.trim().length === 0) {
    event.target.style.border = "2px solid red";
    event.target.setAttribute("placeholder", "Plasse fill input ..... ");
  } else {
    event.target.style.border = "2px solid green";
    event.target.setAttribute("placeholder", "Eter username ");
  }
});

passWord.addEventListener("keyup", (event) => {
  if (event.target.value.trim().length === 0) {
    koz.setAttribute("class", "koz d-none");
  } else {
    koz.setAttribute("class", "koz d-black");
  }
});

koz.addEventListener("click", () => {
  if (passWord.getAttribute("type") === "password") {
    passWord.setAttribute("type", "text");
    koz.innerHTML = `<i class="bi bi-eye-slash"></i>`;
  } else {
    passWord.setAttribute("type", "password");
    koz.innerHTML = `<i class="bi bi-eye"></i>`;
  }
});
