const readLineSync = require("readline-sync");
var score = 0;

var userName = readLineSync.question("Enter Your Username : ")
console.log("Hey " + userName + " Lets See how well do you know about India ?")
console.log("write answer to each question presented to you")

var que1 = {
    que: "Who is master blaster of indian cricket team ? ",
    ans: "Sachin"
}
var que2 = {
    que: "Who is father of nation ? ",
    ans: "gandhiji"
}
var que3 = {
    que: "which is the largset state in india ? ",
    ans: "Rajasthan"
}
var que4 = {
    que: "which is the smallest state in india ? ",
    ans: "goa"
}


function play(que, ans) {

    var answer = readLineSync.question(que)
    if (answer.toLowerCase() === ans.toLowerCase()) {
        console.log("Right")
        score = score + 1;
    } else {
        console.log("Wrong")
        score = score - 1;
    }

}

var questions = [que1, que2, que3, que4];

questions.forEach((q) => {
    play(q.que, q.ans)
})

console.log("Final Score is " + score);