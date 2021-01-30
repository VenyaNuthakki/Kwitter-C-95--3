function login(){
    username=document.getElementById("username").value;
    localStorage.setItem("UsernameKey", username);
    window.location="kwitter_room.html";
}