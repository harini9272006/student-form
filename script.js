const studentForm = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody");

studentForm.addEventListener("submit",function(event){
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value; 
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const gender = document.querySelector('input[name="gender"]:checked').value;

    const newRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = firstName;
    newRow.appendChild(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = lastName;
    newRow.appendChild(lastNameCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = email;
    newRow.appendChild(emailCell);

    const addressCell = document.createElement("td");
    addressCell.textContent = address;
    newRow.appendChild(addressCell);

    const pincodeCell = document.createElement("td");
    pincodeCell.textContent = pincode;
    newRow.appendChild(pincodeCell);

    const genderCell = document.createElement("td");
    genderCell.textContent = gender;
    newRow.appendChild(genderCell);

    const stateCell = document.createElement("td");
    stateCell.textContent = state;
    newRow.appendChild(stateCell);

    const countryCell = document.createElement("td");
    countryCell.textContent = country;
    newRow.appendChild(countryCell);

    tableBody.appendChild(newRow);

    studentForm.reset();

});
