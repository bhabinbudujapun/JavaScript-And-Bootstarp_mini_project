function checkNumber() {
    var userNumber = document.getElementById("user-input").value;
    var attempt = document.getElementById("attempt").value;
    var results = document.getElementById("results");
    var msg = document.getElementById("msg");
    answer = document.getElementById("answer").value;

    //Magic number 
    console.log(answer);

    // Generating Random Number/Answer
    if(!answer){
        answer = generateRandomAnswer();
        document.getElementById("answer").value = answer;
    }
    
    //Checking for attempts
    if(!attempt){
        attempt = 0;
    }

    // Validate User Input
    if (!validateInput(userNumber)) {
        msg.innerHTML = "<p class='text-danger'>Number should be 4-digit long </p>";
        return;
    } 
    else {
        msg.innerHTML = "";
        attempt++;
        document.getElementById("attempt").value = attempt;
    }

    // **Main logic** checking the answer and user entered number
    
    var correctDigit = 0;
    var html = '<tr><td>' + userNumber + '</td><td>';
    for(let i = 0; i < userNumber.length; i++){
            if(userNumber[i] == answer[i]){
                html = html + '<i class="fa-solid fa-check text-success"></i> ';
                correctDigit++;
            }
            else{
                html = html + '<i class="fa-solid fa-xmark text-danger"></i> ';                
            }
        }   
        html = html + '</td></tr>';

        results.innerHTML += html;
        if(correctDigit == userNumber.length){
            msg.innerHTML = "<p class='text-success'>Congratulation !! You Won. . .</p>";
            document.getElementById("btn-guess").style = "display:none";
            document.getElementById("btn-refresh").style = "display:block";
        }
        else if(attempt >= 10){
            msg.innerHTML = "<p class='text-danger'>Sorry !! Please Try Again To Win. . .</p>";
            document.getElementById("btn-refresh").style = "display:block";
            document.getElementById("btn-guess").style = "display:none";
        }
        else{
            msg.innerHTML = "<p class='text-danger'>Incorrect Guess, Try Again</p>";
        }
    }

// Function that generate random number/answer(from 1000 to 9999)
function generateRandomAnswer(){
    var answer = Math.floor(Math.random() * (9999 -  + 1000) ) + 1000;
    return answer+'';
}

// function that validate user input 
function validateInput(str){
    if(str.length == 4)
        return true;
    else    
        return false;
}