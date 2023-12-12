
let maxBudget = 20000;

function submitForm(event) {
    console.log('submitForm');
  
    event.preventDefault();

   
    let firstName = document.querySelector('#firstName').value;
    console.log(firstName);
   
    let lastName = document.querySelector('#lastName').value;
    let idInput = document.querySelector('#id-input').value;
    let title = document.querySelector('#title').value;
    let salary = document.querySelector('#salary').value;
    
    let employeeTable = document.querySelector('#employeeData');
  
    employeeTable.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idInput}</td>
            <td>${title}</td>
            <td>${salary}</td>
            <td><button onclick="deleteStuff(event)">Delete</button></td>
        </tr>
    `;
}




function deleteStuff(event){
    event.target.parentElement.parentElement.remove();
};

