// Your Code Here

// get user name 
let userName = window.prompt ("GIMME ME YOUR NAME NOW")
    console.log (userName)

//user score 
let userScore = 0


// prompt user with question 
for (let i = 0; i < questions.length; i++)
{
    let question = questions[i] 
    let userAnswer = window.prompt (question.text)
    console.log (userAnswer)
    if (userAnswer.toUpperCase() === question.correctAnswer) {
        console.log ("Correct")
 //log (Question ${i+1} is correct)
 //adding 10 points to score 
        userScore += 10 
    }
    else {
        console.log ("Congratulations you played yourself ")
//log (Question ${i+1} is incorrect)

    }
    console.log ("userScore", userScore)
//console log shows only in console in developer tools 
}

// track user score 
window.alert ("Good job loser:" + userScore)
//window alert shows up on website