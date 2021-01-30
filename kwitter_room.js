var firebaseConfig = {
      apiKey: "AIzaSyBydE1z4Goi4NuLgFKpT_1wfw2-PskJGs4",
      authDomain: "kwitter-bacae.firebaseapp.com",
      databaseURL: "https://kwitter-bacae-default-rtdb.firebaseio.com",
      projectId: "kwitter-bacae",
      storageBucket: "kwitter-bacae.appspot.com",
      messagingSenderId: "462710440200",
      appId: "1:462710440200:web:f5b0c8f105e2bc095aacbd",
      measurementId: "G-3NSM14NJ6T"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("UsernameKey");
document.getElementById("username").innerHTML="Welcome "+username+" !";

function addroom(){
      roomname=document.getElementById("roomname").value;
      localStorage.setItem("roomnamekey",roomname);
      firebase.database().ref("/").child(roomname).update({
            purpose:"addingroomname"
      })
      window.location="kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;ReferenceError
      //Start code
      console.log("roomname-|"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='gotoroom(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function gotoroom(currentroom){
      console.log("We are in room "+currentroom);
      localStorage.setItem("roomnamekey", currentroom);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("usernamekey");
      localStorage.removeItem("roomnamekey");
      window.location="index.html";
}