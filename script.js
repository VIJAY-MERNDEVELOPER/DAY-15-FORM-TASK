// selecting fields from the form

let submit = document.querySelector(".btn");
let firstName = document.querySelector("#first-name");
let LastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let gender = document.querySelector("input[name='Gender']:checked");
let address = document.querySelector("#comments");
let city = document.querySelector("#inputCity");
let state = document.querySelector("#inputState");
let country = document.querySelector("#inputCountry");
let pincode = document.querySelector("#pincode");
let choiceOfFood = document.querySelectorAll("[name='cof']:checked");
let table = document.getElementById("tableset");
let tableBody = document.getElementById("table-body");
let tablerow = document.querySelectorAll("tr");

// calling submit button with addeventlistener when clicking button
submit.addEventListener("click", function getDetails(e) {
  let foodItems = [];
  e.preventDefault();

  for (let index = 0; index < choiceOfFood.length; index++) {
    const element = choiceOfFood[index].value;
    foodItems.push(element);
  }
  foodItems = foodItems.join(",");

  tableBody.innerHTML += ` <tr>
  
<td>${firstName.value}</td>
<td>${LastName.value}</td>
<td>${email.value}</td>
<td>${address.value}</td>
<td>${pincode.value}</td>
<td>${gender.value}</td>
<td>${foodItems}</td>
<td>${state.value}</td>
<td>${country.value}</td>
</tr>`;

  firstName.value = " ";
  LastName.value = " ";
  email.value = " ";
  address.value = " ";
  pincode.value = " ";
  choiceOfFood;
  state.value = "Choose...";
  city.value = " ";
  country.value = " ";
});
