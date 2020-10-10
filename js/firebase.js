// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD4fySVtYnc8uM6J0OdonK9EUQmQOHpiOw",
    authDomain: "maxi-arce-hosting.firebaseapp.com",
    databaseURL: "https://maxi-arce-hosting.firebaseio.com",
    projectId: "maxi-arce-hosting",
    storageBucket: "maxi-arce-hosting.appspot.com",
    messagingSenderId: "400564269111",
    appId: "1:400564269111:web:049963c637d8930d9ccfb2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Refences to firebaseDB
let db = firebase.database().ref("submits");

//Submit Listener
document.querySelector(".contact-form").addEventListener("submit",submitFormular);

function submitFormular(e){
    //avoid pressing when is empty
    e.preventDefault();

    //get input values
    let name= document.querySelector(".name").value;
    let email= document.querySelector(".email").value;
    let message= document.querySelector(".message").value;
    console.log(name,email,message);

    saveFormInfo(name,email,message);

    //alert
    let alert = document.getElementById('alert');
    alert.style.animationName = 'showAlert';
    //reset formular
    document.querySelector(".contact-form").reset();


}
//Send formular to db
function saveFormInfo (name, email, message){
    let newContact = db.push();
    newContact.set({
        Name: name,
        Email: email,
        Message: message,
    });
}