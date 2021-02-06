//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("roomnamekey");
    document.getElementById("roomname").innerHTML="roomname-"+room_name;

    function send(){
          message=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:username,msg:message,like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("UsernameKey");
      localStorage.removeItem("roomnamekey");
      window.location="index.html";
}