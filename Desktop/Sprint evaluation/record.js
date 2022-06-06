// fill in javascript code here

document.querySelector("form").addEventListener("submit",myfunction);

function myfunction(){
    event.preventDefault();
    var empname = document.querySelector("#name").value;

    var empid = document.querySelector("#employeeID").value;

    var depart = document.querySelector("#department").value;

    var experience = document.querySelector("#exp").value;

    var email = document.querySelector("#email").value;

    var mob = document.querySelector("#mbl").value;

    console.log(empname, empid, depart, experience, email, mob);

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText= names;

    var td2 = document.createElement("td");
    td2.innerText= employeeIDs;

    var td3 = document.createElement("td");
    td3.innerText= departments;

    var td4 = document.createElement("td");
    td4.innerText= experience;

    var td5 = document.createElement("td");
    td5.innerText= emails;

    var td6 = document.createElement("td");
    td6.innerText= mblsr;

    var td7 = document.createElement("td");

    if(experience > 5){
        td7.innerText= "Senior"
    }
    else if(experience > 2 && experience < 5){
        td7.innerText= "Junior"

    }
    else if(experience <= 1){
        td7.innerText="Fresher"
    }

    var td8 = document.createElement("td")
    td8.innerText= "Delete";
    td8.style.backgroundColor = "red";
    td8.style.cursor = "pointer";
    document.querySelector("td").addEventListener("click", deleteRow);

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8)

    document.querySelector("tbody").append(tr);

    function deleteRow(){
        event.target.parentNode.remove();

        event.target.parentNode.innerHTML= "";
        
    }

    
    



    
    
}