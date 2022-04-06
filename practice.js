var firebaseConfig = {
    apiKey: "AIzaSyCb1BLDeaCEjQOZGGMRYlHjxSKisz1MjD4",
    authDomain: "kwitter-3b5bd.firebaseapp.com",
    databaseURL: "https://kwitter-3b5bd-default-rtdb.firebaseio.com",
    projectId: "kwitter-3b5bd",
    storageBucket: "kwitter-3b5bd.appspot.com",
    messagingSenderId: "223564716879",
    appId: "1:223564716879:web:bebd4932a34f716f79033a"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
 {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}