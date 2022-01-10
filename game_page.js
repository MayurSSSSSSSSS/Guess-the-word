player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    charAT1 = word.charAt(1);

    length = word.length;
    index_charAt2=Math.floor(length/2);
    charAT2= word.charAt(index_charAt2);

    index_charAt3 = length-1;
    charAT3 = word.charAt(index_charAt3);

    replace_charAT1 = word.replace(charAT1,"_");
    replace_charAT2 = replace_charAT1.replace(charAT2, "_");
    replace_charAT3 = replace_charAT2.replace(charAT3, "_");
    
    question_word = "<h4 id = 'word_display'> Q. " +replace_charAT3 + "</h4>";
    input = "<br> Answer : <input id='input'>";
    button = "<br> <br> <button class='btn btn-info' onclick = 'check()'> Check </button>";
    row = question_word + input + button;
    document.getElementById("output").innerHTML = row; 
    document.getElementById("word").value = ""; 
   
}
question_turn = "player_1";
answer_turn = "player_2";

function check(){
    get_answer = document.getElementById("input").value;
    answer = get_answer.toLowerCase();

    if(answer==word){
        if(answer_turn=="player_1"){
            player1_score= player1_score + 1;
            document.getElementById("player1_score").innerHTML=player1_score;
            
        }
        else{
            player2_score= player2_score + 1;
            document.getElementById("player2_score").innerHTML=player2_score; 
        }
    }
    if(question_turn=="player_1"){
        question_turn="player_2";
        document.getElementById("player_question").innerHTML="Question Turn : " +player2_name;
        
    }
    else{
        question_turn="player_1";
        document.getElementById("player_question").innerHTML="Question Turn : " +player1_name; 
    }

    if(answer_turn=="player_1"){
        answer_turn="player_2";
        document.getElementById("player_answer").innerHTML="Answer Turn : " +player2_name;
        
    }
    else{
        answer_turn="player_1";
        document.getElementById("player_answer").innerHTML="Answer Turn : " +player1_name; 
    }
    document.getElementById("output").innerHTML="";
}