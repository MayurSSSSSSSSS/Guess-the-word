function login(){
    player_1=document.getElementById("player1_name").value;
    player_2=document.getElementById("player2_name").value;

    localStorage.setItem("player1_name",player_1);
    localStorage.setItem("player2_name",player_2);

    window.location="game_page.html";
}