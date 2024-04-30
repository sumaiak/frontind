


let nameList = [];
function generateNameList (){
nameList.map(name =>{

let nameList = document.createElement("li");//creates an array with li list 
listItem.textContent = name;
document.getElementById("nameList").appendChild(nameList);


});
}
function handleSubmit(event) {
    event.preventDefault(); //preventing page from loading every time you submit

    
    let newName = document.getElementById("nameInput").value;//getting input from html

    // Add the new name to the array
    if(newName.trim() !== "" && isNaN(newName)){
    names.push(newName);
    document.getElementById("errorMessage").innerHTML = ""

    generateNameList();
    }else{
      document.getElementById("errorMessage").innerHTML = "You did not type a valid name. try again"
    }
    // Clear the input field
    document.getElementById("nameInput").value = "";
}


// Function to remove the first name from the list
function removeFirst() {
    names.shift(); // Remove the first name
    generateNameList(); // Generate the updated name list
}

// Function to remove the last name from the list
function removeLast() {
    names.pop();
    generateNameList(); 
}

// Add event listener to the form
document.getElementById("nameForm").addEventListener("submit", handleSubmit);

generateNameList();