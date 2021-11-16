player1=localStorage.getItem("Player 1");
player2=localStorage.getItem("Player 2");
p1score=0 ;
p2score=0 ;
document.getElementById("player1name").innerHTML=player1   + ":";
document.getElementById("player2name").innerHTML=player2   + ":";   
document.getElementById("player1score").innerHTML=p1score;
document.getElementById("player2score").innerHTML=p2score;
document.getElementById("playerquestion").innerHTML="question turn-" + player1;
document.getElementById("playeranswer").innerHTML="answer turn-" + player2;
function send(){
    getword=document.getElementById("word").value ;
    word = getword.toLowerCase();
    

    charat1=word.charAt(1);
    length=Math.floor(word.length/2);
    charat2 = word.charAt(length);
    length1=word.length - 1;
    charat3 = word.charAt(length1);
    word1 = word.replace(charat1,"_");
    word2 = word1.replace(charat2,"_");
    word3 = word2.replace(charat3,"_");


    qrow = "<h4 id='worddisplay'> q." + word3 +"</h4>";
    ib= "<br>answer:<input type ='text' id='icb'>";
    cb="<br> <button class='btn btn-info' onclick='check()'> check </button>";
    row = qrow + ib + cb;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value ="";
}
var questionturn ="player1";
var answerturn ="player2";
function check(){
   getanswer = document.getElementById("icb").value;
   answer=getanswer.toLowerCase();
   if (answer==word){
       if(answerturn=="player1"){
        p1score = p1score + 1;
        document.getElementById("player1score").innerHTML=p1score;
       }
       else {
           p2score = p2score + 1;
           document.getElementById("player2score").innerHTML=p2score
       }
   }
   if(questionturn=="player1"){
       questionturn = "player2";
       document.getElementById("playerquestion").innerHTML="question turn -"+player2;
   }
   else{
       questionturn ="player1";
       document.getElementById("playerquestion").innerHTML="question turn -"+player1;
   }
   if(answerturn=="player1"){
    answerturn = "player2";
    document.getElementById("playeranswer").innerHTML="answer turn -"+player2;
}
else{
    answerturn ="player1";
    document.getElementById("playeranswer").innerHTML="answer turn -"+player1;
}
document.getElementById("output").innerHTML="";
}
