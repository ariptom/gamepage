player1_name=localStorage.getItem("p1");
player2_name=localStorage.getItem("p2");

player1_score=0;
player2_score=0;

question_turn="player1";
answer_turn="player2";

document.getElementById("p1_n").innerHTML=player1_name+" : ";
document.getElementById("p2_n").innerHTML=player2_name+" : ";

document.getElementById("p1_s").innerHTML=player1_score;
document.getElementById("p2_s").innerHTML=player2_score;

document.getElementById("p_q").innerHTML="question turn - "+player1_name;
document.getElementById("p_a").innerHTML="answer turn - "+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    charAt1=word.charAt(1);
    l2=Math.floor(word.length/2);
    charAt2=word.charAt(l2);
    charAt3=word.charAt(word.length-1);
    w1=word.replace(charAt1,"_");
    w2=w1.replace(charAt2,"_");
    w3=w2.replace(charAt3,"_");
    console.log(w3);
    question_line="<h4 id='word_display'> Q. "+w3+"</h4>";
    input_line="<br>Answer: <input id='input_check_box' type='text'>";
    button_line="<br><br><button onclick='check()'class='btn btn-info'>check</button>";
    row=question_line+input_line+button_line;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    if(answer==word){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("p1_s").innerHTML=player1_score;    
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("p2_s").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("p_q").innerHTML="Question turn - " + player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("p_q").innerHTML="Question turn - " + player1_name;
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("p_a").innerHTML="Answer turn - " + player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("p_a").innerHTML="Answer turn - " + player1_name;
    }
    document.getElementById("output").innerHTML="";
}