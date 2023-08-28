const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const nameInput = document.getElementById("nameInput");
const passwordInput = document.getElementById("password");
const logIn = document.getElementById("logIn");
const showPassword = document.getElementById("showPassword");

const depositInput = document.getElementById("deposit-field");
const withdrawInput = document.getElementById("withdraw-field");

const depositMoneyText = document.getElementById("deposit-text");
const withdrawMoneyText = document.getElementById("withdraw-text");
const balanceMoneyText = document.getElementById("Balance-total-text");

const withdrawBtn = document.getElementById("btn-withdraw");
const depositBtn = document.getElementById("btn-diposit");

let totalMoney = parseInt(balanceMoneyText.innerText);
let totalDeposit = 0;
let totalWithdraw = 0;

// console.log(totalMoney);

page2.classList.add("hidden");
page1.classList.remove("hidden");

// login function
const loginFunction = (e) => {
  e.preventDefault();

  console.log("Btn clicked");

  let name = nameInput.value;
  let password = passwordInput.value;

  if (name === "billal" && password === "123456") {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
  } else {
    alert("invalid user ");
  }

  nameInput.value = "";
  passwordInput.value = "";
};

logIn.addEventListener("click", loginFunction);

// function for show password
showPassword.addEventListener("click", () => {
  let btnChecked = showPassword.checked;

  btnChecked
    ? (passwordInput.type = "text")
    : (passwordInput.type = "password");
});

// function to add money
depositBtn.addEventListener("click", () => {
  //   console.log("deposit click ");

  let depositMoney = parseInt(depositInput.value);
  totalDeposit += depositMoney;

  depositMoneyText.innerText = totalDeposit;

  totalMoney += depositMoney;

  balanceMoneyText.innerText = totalMoney;

  depositInput.value = "";
});

// function to withdraw money
withdrawBtn.addEventListener("click", () => {
  //   console.log("withdraw button");

  let withdrawMoney = parseInt(withdrawInput.value);

  totalWithdraw += withdrawMoney;

  withdrawMoneyText.innerText = totalWithdraw;

  totalMoney -= withdrawMoney;
  balanceMoneyText.innerText = totalMoney;
  withdrawInput.value = "";
});
