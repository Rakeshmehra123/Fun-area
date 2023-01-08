var readlineSync = require('readline-sync')
var userName = readlineSync.question("What's your Name? ");
console.log("__________________");
console.log("Welcome " + userName);
console.log("__________________");
var userFirstAnswer = readlineSync.question("Do you know Rakesh? ");
if (userFirstAnswer === "yes") {
  var userSecondAnswer = readlineSync.question("okay! so do you want to play game?, press p for start it or any other key to exit\n");
  console.log("__________________");
  if (userSecondAnswer === "p") {
    score = 0;
    //play function
    function play(question, answer) {
      var userThirdAnswer = readlineSync.question(question);
      if (userThirdAnswer == answer) {
        console.log("correct answer");
        score++;
      }
      else {
        console.log("wrong answer");
        score--;
      }
      console.log("current score is : " + score);
      console.log("_____________________________")
    }
    //Array of object
    var questions = [
      {
        question: "who is the father of indian constitution?\n a.Pandit JawharLal Nehru\n b.DR. Bheema Rao Ambedakar\n c. Mahatma gandhi\n ",
        answer: "b",
      },
      {
        question: "when the indian constituttion was issues?\n a.24-nov-1949 \n b.15-aug-1947 \n c.24-jan-1950\n ",
        answer: "c",
      },
      {
        question: "From which country, indian constitution derive the concept of fundamental rights? \n a.USA \n b.UK \n c.Rassia\n ",
        answer: "a",
      },
      {
        question: "who gives the idea of having constitution to the indian national congress? \n a. Mr M N Roy \n b. Pt Jawahar lal nehru \n c. Mr bheema rao ambedakar\n ",
        answer: "a",
      },
      {
        question: "when the august offer came to india? \n a. 1942 \n b.1947 \n c.1940\n ",
        answer: "c",
      },
      {
        question: "how many seats were in the constituent assembly? \n a.208 \n b.389 \n c.292\n ",
        answer: "b",
      },
      {
        question: "indian,bharat shall be a union of states, said in which article? \n a. Article-14 \n b. Article-2a \n c. Article-1\n ",
        answer: "c",
      },
      {
        question: "Fundamental rights comes under which articles? \n a. A-12 to A-39 \n b. A-1 to A-4 \n c. A-11 to A-16\n ",
        answer: "a",
      },
    ]

    //loop
    for (var i = 0; i < questions.length; i++) {
      currentQuestion = questions[i];
      play(currentQuestion.question, currentQuestion.answer);
    }
    //js object
    var highScore = {
      name: "Rakesh",
      score: 7,
    }
    if (score > highScore.score) {
      highScore.name = userName;
      highScore.score = score;
      console.log(userName + " is beaten the high score of " + highScore.score);
      console.log("_____________________________")
      console.log(userName + " if you beaten the high score then send me the screenshort of high score i'll update your name into the database ");
    }
  }
  else {
    console.log("Thank you " + userName + " for look into it ");

  }
}
else {
  console.log("Sorry " + userName + " for playing this game firts you should know me ");
}

