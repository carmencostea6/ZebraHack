let Questions = [
    {
        question: "Ce este un plan de fundraising",
        correct_answer: "Un document care stabilește strategia organizației pentru atragerea resurselor necesare",
        incorrect_answers: ["Un raport financiar al organizației", "O listă cu donatorii organizației", "Un rezumat al activităților anuale"]
    },
    {
        question: "Cum se numește procesul de identificare a donatorilor ?",
        correct_answer: "Prospectare",
        incorrect_answers: ["Finanțare directă", "Scriere de proiecte", "Planificare bugetară"]
    },
    {
        question: "Ce este un apel la acțiune (CTA) într-o campanie de fundraising?",
        correct_answer: "Un mesaj care încurajează publicul să doneze sau să sprijine cauza ",
        incorrect_answers: ["Un email de mulțumire pentru donații", "Un mesaj de încurajare internă", "Un mesaj de încurajare internă"]
    },
    {
        question: "Care este primul pas în elaborarea unui proiect?",
        correct_answer: "Identificarea nevoilor ",
        incorrect_answers: ["Realizarea bugetului", "Planificarea activităților", "Scrierea unui raport"]
    },
    {
        question: "Cum se numește procesul prin care se rezolvă dezacordurile dintr-o echipă?",
        correct_answer: "Managementul conflictelor",
        incorrect_answers: [" Planificarea activităților", "Luarea deciziilor rapide", "Discuția informală"]
    },
    {
        question: "Ce tip de leadership implică implicarea echipei în luarea deciziilor?",
        correct_answer: "Leadership participativ",
        incorrect_answers: ["Leadership pasiv", "Leadership autoritar", "Leadership tehnic"]
    },
    {
        question: "Ce reprezintă acronimul PR în comunicare?",
        correct_answer: "Public Relations",
        incorrect_answers: ["Project Research", "Professional Reports", "Public Resources"]
    }
];

const ques = document.getElementById("ques");

let currQuestion = 0;
let score = 0;

function loadQues() {
    if (Questions.length === 0) {
        ques.innerHTML = `<h5>Please Wait!! Loading Questions...</h5>`;
        return;
    }

    const opt = document.getElementById("opt");
    let currentQuestion = Questions[currQuestion].question;

    ques.innerText = currentQuestion;
    opt.innerHTML = "";

    const correctAnswer = Questions[currQuestion].correct_answer;
    const incorrectAnswers = Questions[currQuestion].incorrect_answers;
    const options = [correctAnswer, ...incorrectAnswers];
    options.sort(() => Math.random() - 0.5);

    options.forEach((option) => {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = option;
        choiceLabel.textContent = option;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    });
}

setTimeout(() => {
    if (Questions.length > 0) {
        loadQues();
    } else {
        ques.innerHTML = `<h5 style='color: red'>Unable to fetch data, Please try again!!</h5>`;
    }
}, 2000);

function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
    totalScore.innerHTML += "<h3>All Answers</h3>";
    Questions.forEach((el, index) => {
        totalScore.innerHTML += `<p>${index + 1}. ${el.correct_answer}</p>`;
    });
}
function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
}

function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove();
        ques.remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}

function checkAns() {
    const selectedAns = document.querySelector('input[name="answer"]:checked');
    if (selectedAns) {
        if (selectedAns.value === Questions[currQuestion].correct_answer) {
            score++;
        }
        nextQuestion();
    } else {
        alert("Please select an answer before proceeding!");
    }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }