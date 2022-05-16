var Score=0;
function US(){
    Score = Score+1;
    document.getElementById("Score").innerHTML="Score = "+ Score;
}

function SS(){
    localStorage.setItem("Score",Score);
}
function NP(){
    window.location="Activith_2.html";
}