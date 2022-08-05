function adduser() {
    var p1=document.getElementById("player1_name").value;
    var p2=document.getElementById("player2_name").value;
    localStorage.setItem("p1",p1);
    localStorage.setItem("p2",p2);
    window.location=("game_page.html");
}
