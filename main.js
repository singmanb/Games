var qno=0;
var correctAnswer=0;
var answer1;

var questions =[{
  question: "What is the state tree of North Carolina?",
  answers: ["Dogwood", "Longleaf Pine", "Bald Cypress","Fraser Fir"],
  correctAnswer: "Dogwood",
  
},
 { 
  question: "North Carolina grows the most what in the nation?",
  answers: ["Tomatoes", "Sweet Potatoes", "Broccoli", "Soybeans"],
  correctAnswer: "Sweet Potatoes",
  
}, 
{
question: "What is the state bird?",
  answers: ["Bald Eagle", "Blue Jay", "Cardinal", "Wild Turkey"],
  correctAnswer: "Cardinal",
  
},
{
  question: "CSS stands for -",
  answers: ["Cascade style sheets", "Color and style sheets", "Cascading style sheets", "None"],
  correctAnswer: "Cascading style sheets",
  
},
 {
  question: "The property in CSS used to change the text color of an element is -",
  answers: ["bgcolor", "color", "background-color", "None"],
  correctAnswer: "color",
  
},
 {
  question: "The HTML attribute used to define the inline styles is -",
  answers: ["style", "styles", "class", "None"],
  correctAnswer: "style",
  
},
{
  question: "Choose the correct HTML elements for the lasting heading -",
  answers: ["<heading>", "<head>", "<h6>", "<h1>"],
  correctAnswer: "<h1>",
  
}

{
  question: "What is the correct HTML element for playing audio files? -",
  answers: ["<mp3>", "<audio>", "<sound>", "<mp3.audio>"],
  correctAnswer: "<audio>",
  
},
{

question: "How do you call a function named myFun? -",
  answers: ["call myFun()", "myFun()", "call function myFun()", "None"],
  correctAnswer: "myFun()",

},
{

  question: "In Java Script Which operator is used to assign a value to a variable? -",
    answers: ["=", "X", "-", "*"],
    correctAnswer: "=",
  
}
];  


function show_questions()
{
    
    var checkbox1=document.getElementById("chk1");
    
         checkbox1.checked=false;   
         var checkbox2=document.getElementById("chk2");
    
         checkbox2.checked=false;  
         var checkbox3=document.getElementById("chk3");
    
         checkbox3.checked=false; 
         var checkbox4=document.getElementById("chk4");
    
         checkbox4.checked=false;      
         document.getElementById("lblcorrect").innerHTML=correct; 
    if(qno==0)
    {
           for(i=0;i<1;i++)
        {
            
            document.getElementById("question").innerHTML= questions[i].question;
            document.getElementById("lbl1").innerHTML= questions[i].answers[0];
            document.getElementById("lbl2").innerHTML= questions[i].answers[1];
            document.getElementById("lbl3").innerHTML= questions[i].answers[2];
            document.getElementById("lbl4").innerHTML= questions[i].answers[3];
                    }
    }
    else
    {
          
        
        document.getElementById("question").innerHTML= questions[qno].question;
        document.getElementById("lbl1").innerHTML= questions[qno].answers[0];
        document.getElementById("lbl2").innerHTML= questions[qno].answers[1];
        document.getElementById("lbl3").innerHTML= questions[qno].answers[2];
        document.getElementById("lbl4").innerHTML= questions[qno].answers[3];
            
    
}
document.getElementById("lblqno").innerHTML=qno;
};
function answers()
{
    var corrans=questions[qno].correctAnswer;
    var userans=questions[qno].answers[answer1];
    alert(userans);
    alert(corrans);
    if(corrans==userans)
    {
         document.getElementById("lblans").innerHTML= "Correct " + corrans;
        qno+=1;
        correct+=1;
    }
    else
    {
        document.getElementById("lblans").innerHTML="In Correct, Correct Ans- " + corrans;
        qno+=1;
    }
    
            
         
};
function chk_click1()
{
    
    var checkbox=document.getElementById("chk1");
   
    if(checkbox.checked)
    {
        answer1="0";
    }

};
function chk_click2()
{
    
    var checkbox=document.getElementById("chk2");
   
    if(checkbox.checked)
    {
        answer1="1";
    }

};
function chk_click3()
{
    
    var checkbox=document.getElementById("chk3");
   
    if(checkbox.checked)
    {
        answer1="2";
    }

};
function chk_click4()
{
    
    var checkbox=document.getElementById("chk4");
   
    if(checkbox.checked)
    {
        answer1="3";
    }

};
function calculate()
{
        var total=(Number(correct)/Number(qno))*100;
    alert(total);
    if(total<=80)

    {
        attempt+=1;
        document.getElementById("lblremarks").innerHTML="You have to score 80% to Clear the Examination, please take retest";
    }
    else
    {
        document.getElementById("lblremarks").innerHTML="You have scored well in the examination!!!";
    }
    document.getElementById("lbltotal").innerHTML=total 
}