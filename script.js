import { getDatabase, get, set, update, remove, child, ref } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js';

const db = getDatabase();
var name, email, message;

var namebox = document.getElementById("namebox");
var emailbox = document.getElementById("emailbox");
var messagebox = document.getElementById("text1");


function insertData(event) {
    event.preventDefault();
    readFormData();

    set(ref(db, "Data/" + name), {
        Name: this.name,
        Email: this.email,
        Message: this.message
    }).then(() => {
        alert("Data stored successfully")
    }).catch((error) => {
        alert("Unsuccessfull", error)
    });
    // clearFormData();
}


function readFormData() {
    name = namebox.value;
    email = emailbox.value;
    message = messagebox.value;
    console.log(name, email, message);
}

document.querySelectorAll('.btn').onclick = insertData;