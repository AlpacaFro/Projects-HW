import { utils } from "./utils.js";
let table = document.getElementById("table");
document.addEventListener("DOMContentLoaded", () => {
  utils.RenderData();

  let gFrom = document.querySelector("form");

  console.log(gFrom.length);
  console.log(gFrom);

  let submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", () => {
    utils.addEmployee(gFrom, table);
  });

  let catchRow = [];
  function selectRow() {
    table.addEventListener("click", (event) => {
      let row = event.target.closest("TR");
      if (row.classList.contains("selected")) {
        row.classList.remove("selected");
        catchRow.pop(row);
      } else {
        if (!row.querySelector("th")) row.classList.add("selected");
        catchRow.push(row);
      }
      console.log(catchRow);
      console.log(catchRow[0].innerText);
    });
  }
  selectRow();

  function deleteSelected() {
    let deleteBtn = document.getElementById("delete");
    deleteBtn.addEventListener("click", () => {
      let catchSelected = document.querySelectorAll(".selected");
      if (catchRow.length == 0) {
        alert("Please select an employee first.");
      } else {
        catchSelected.forEach((row) => {
          row.remove();
          catchRow = [];
        });
      }
    });
  }

  deleteSelected();

  const editBtn = document.getElementById("edit");
  function editEmployee() {
    editBtn.addEventListener("click", () => {
      console.log("fanme Input:", document.getElementById("fName").value);
      console.log("lname Input:", document.getElementById("lname").value);
      let selectRow = catchRow[0];
      let children = selectRow.getElementsByTagName("td");
      children[0].innerHTML = document.getElementById("fName").value;
      console.log(children[0]);

      children[1].innerText = document.getElementById("lName").value;
      children[2].innerText = document.getElementById("age").value;
      children[3].innerText = document.getElementById("date").value;
      children[4].innerText = document.getElementById("department").value;
      children[5].innerText = document.getElementById("salary").value;
    });
  }

  editEmployee();
});
