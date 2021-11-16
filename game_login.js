function login(){
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
 localStorage.setItem("Player 1",player1);
 localStorage.setItem("Player 2",player2);
 window.location ="game_page.html";
}
