user_name = localStorage.getItem("Username");
console.log(user_name)
document.getElementById("username").innerHTML = "Welcome " + user_name + "!";


//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDq4EM7rOqabdhJNFKZSqYYUSm35TmERTU",
      authDomain: "kwitter-48e5b.firebaseapp.com",
      databaseURL: "https://kwitter-48e5b-default-rtdb.firebaseio.com",
      projectId: "kwitter-48e5b",
      storageBucket: "kwitter-48e5b.appspot.com",
      messagingSenderId: "320832018588",
      appId: "1:320832018588:web:ffe6c687577ffe07dfb559"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names)
      //Start code
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectoRoom_Name(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectoRoom_Name(name1){
      localStorage.setItem("room_name", name1)
      window.location = "kwitter_page.html"
}

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name", room_name); window.location = "kwitter_page.html";
} 

function logout(){
      window.location = "index.html"
      localStorage.removeItem("Username")
      localStorage.removeItem("room_name")
}
