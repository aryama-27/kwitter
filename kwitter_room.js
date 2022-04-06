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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Names - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome "+ user_name +"!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
         window.location = "index.html";
}