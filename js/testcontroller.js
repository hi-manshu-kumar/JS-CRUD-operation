//taketestproject
window.addEventListener("load", bindEvents);

function bindEvents() {
   fetchLocal();
    document.getElementById("submit").addEventListener("click",submitans);
    document.getElementById("nextQ").addEventListener("click",nextQ);
    document.getElementById("prevQ").addEventListener("click",prevQ);
    document.getElementById("end").addEventListener("click",endTest);
  
  printQues();  
    timer();
}

var i=0;
var marks=0;

function fetchLocal() {
	if(window.localStorage){
		if(localStorage.myitemslist){
			itemOperations.itemList = JSON.parse(localStorage.myitemslist);
			
		}
		else{
			alert("Nothing to Load...");
		}
	}
	else{
		alert("Ur Browser Doesn't Support LocalStorage...");
	}
	
}
var imax=itemOperations.itemList.length;

function printQues() {
    
    document.getElementById("quesid").innerHTML="Q"+itemOperations.itemList[i].id;
    document.getElementById("ques").innerHTML=itemOperations.itemList[i].ques;
    document.getElementById("input1").innerHTML=itemOperations.itemList[i].option1;
    document.getElementById("input2").innerHTML=itemOperations.itemList[i].option2;
    document.getElementById("input3").innerHTML=itemOperations.itemList[i].option3;
    document.getElementById("input4").innerHTML=itemOperations.itemList[i].option4;
    
    
}

function endTest() {
    document.getElementById("total").innerHTML="Total result is "+ marks;
}

function submitans() {
    nextQ();
    var option = document.getElementsByName('q');
    var option_value;
        for(var a = 0; a < option.length; a++){
            if(option[a].checked){
                    option_value = option[a].value;
                    }
            }
    
    if(option_value == itemOperations.itemList[i].ans )
    {
        marks+=10;
    }
//    console.log(marks);
        
}


function nextQ() {
    
    if(i<=imax){
        i++;
        printQues();
        
    }
    else{
        alert("No ques to print...");
        
    }
    
}

function prevQ() {
    if(i>0){
        i--;
        printQues();
                
    }
    else{
        alert("No ques to print...");
        
    }
}

function timer() {
    var min = 9;
    var sec = 60;
    setInterval(function(){
    var a = new Date();
        document.getElementById("timer").innerHTML = min +" : " + sec ;
        sec--;
        if(sec == 00)
        {
            min--;
            sec = 60;
            if (min == 0 & sec
               ==0)
            {
                alert("time is over!!!");
                endTest();
            }
        }
        },1000);
    
    
}