function setLocal() {
  localStorage.setItem("cardNo", 2754372283459272);
  localStorage.setItem("cardPin", 4567);
  localStorage.setItem("cardBal", 30000);
}
const elForm = document.querySelector("form");
const buttonsDiv = document.querySelector("div");
let counter = 0;
setLocal();
elForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inpValue = document.getElementById("pinInput").value;
  let validationText = document.getElementById("validation");
  if (inpValue == localStorage.getItem("cardPin")) {
    validationText.innerText = "Connected";
    validationText.classList.remove("invalid");
    validationText.classList.add("valid");
    buttonsDiv.classList.remove("hidden");
    elForm.style.display = "none";
  } else {
    if (3 - counter != 0) {
      validationText.innerText = `Incorrect you got ${3 - counter} tries left.`;
      validationText.classList.add("invalid");
      counter++;
      console.log(counter);
    } else {
      location.reload();
    }
  }
});

const btnNodeList = buttonsDiv.querySelectorAll("button");
const categoriesCardsContent = document.querySelectorAll(
  "#categoriesCards > div"
);

btnNodeList.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Hide all category content
    categoriesCardsContent.forEach((div) => div.classList.add("hidden"));

    // Show the corresponding category content based on the button clicked
    categoriesCardsContent[index].classList.remove("hidden");
  });
});

let savedBalance = parseInt(localStorage.getItem("cardBal"));
const depotInputBtn = document.getElementById("depotInputBtn");
const withdrawInputBtn = document.getElementById("withdrawInputBtn");
const depositInput = document.getElementById("depositInput");
const withdrawInput = document.getElementById("withdrawInput");
const lastBtn = document.getElementById("lastTransactionsBtn");
let createSumText;
depotInputBtn.addEventListener("click", () => {
  if (depositInput.value !== "" && depositInput.value > 0) {
    if (createSumText == undefined) {
      createDeposit();
    } else {
      createSumText.innerText = "";
      let newBal = savedBalance + parseInt(depositInput.value);
      savedBalance = newBal;
      localStorage.setItem("cardBal", `${newBal}`);
      createSumText.innerText = `your current balance is ${newBal} EggPlants`;
      depositCard.appendChild(createSumText);
    }
  } else {
    alert("please insert a valid number ");
  }
});

function createDeposit() {
  let newBal = savedBalance + parseInt(depositInput.value);
  localStorage.setItem("cardBal", `${newBal}`);
  createSumText = document.createElement("h2");
  createSumText.innerText = `your current balance is ${newBal} EggPlants`;
  depositCard.appendChild(createSumText);
}

function createWidthraw() {
  let newBal = savedBalance + parseInt(withdrawInput.value);
  localStorage.setItem("cardBal", `${newBal}`);
  createSumText = document.createElement("h2");
  createSumText.innerText = `your current balance is ${newBal} EggPlants`;
  withdrawCard.appendChild(createSumText);
}

withdrawInputBtn.addEventListener("click", () => {
  if (withdrawInput.value !== "" && withdrawInput.value > 0) {
    if (createSumText == undefined) {
      createWidthraw();
    } else {
      createSumText.innerText = "";
      let newBal = savedBalance - parseInt(withdrawInput.value);
      savedBalance = newBal;
      localStorage.setItem("cardBal", `${newBal}`);
      createSumText.innerText = `your current balance is ${newBal} EggPlants`;
      withdrawCard.appendChild(createSumText);
    }
  } else {
    alert("please insert a valid number ");
  }
});

let balanceContent = document.createElement("balanceContent");

function createBalance() {
  createSumText = document.createElement("h2");
  createSumText.innerText = `your current balance is ${newBal} EggPlants`;
  balanceCard.appendChild(createSumText);
}

balanceBtn.addEventListener("click", () => {
  balanceCard.innerHTML = "";
  createSumText = document.createElement("h1");
  createSumText.innerText = `your current balance is ${localStorage.getItem(
    "cardBal"
  )} EggPlants`;
  balanceCard.appendChild(createSumText);
  createSumText.classList.add("balance");
  setTimeout(() => {
    createSumText.classList.add("show");
  }, 10);
});

function createHistory() {}
