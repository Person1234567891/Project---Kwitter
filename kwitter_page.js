//YOUR FIREBASE LINKS
roomname12 = localStorage.getItem("room_name");
username12 = localStorage.getItem("Username");

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


function getData() { firebase.database().ref("/"+roomname12).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



function send(){
var msg = document.getElementById("input").value;
firebase.database().ref(roomname12).push({
      name:username12,
      message:msg,
      like:0
      
});
document.getElementById("input").value = "";
}
