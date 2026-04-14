let correctCount = 0;

function checkAnswer(num) {
    let userAnswer;
    let correctAnswer;
    let feedback;

    if (num === 1) {
        userAnswer = document.getElementById("q1Input")?.value.trim();
        correctAnswer = "20,000";
        feedback = document.getElementById("feedback1");

        if (feedback && userAnswer === correctAnswer) {
            feedback.innerHTML = "✅ Correct! Tuition fee is ₱20,000 per semester.";
            correctCount++;
        } else if (feedback) {
            feedback.innerHTML = "❌ Wrong. Try again.";
        }
    }

    if (num === 2) {
        userAnswer = document.getElementById("q2Input")?.value.trim().toLowerCase();
        correctAnswer = "7:30 am";
        feedback = document.getElementById("feedback2");

        if (feedback && userAnswer === correctAnswer) {
            feedback.innerHTML = "✅ Correct! Class starts at 7:30 AM.";
            correctCount++;
        } else if (feedback) {
            feedback.innerHTML = "❌ Wrong. Try again.";
        }
    }

    if (num === 3) {
        userAnswer = document.getElementById("q3Input")?.value.trim().toLowerCase();
        correctAnswer = "ur lady of sacred heart college of guimba inc";
        feedback = document.getElementById("feedback3");

        if (feedback && userAnswer === correctAnswer) {
            feedback.innerHTML = "✅ Correct! OLSHCO stand for Our Lady of Sacred Heart College of Guimba INC.";
            correctCount++;
        } else if (feedback) {
            feedback.innerHTML = "❌ Wrong. Try again.";
        }
    }

    let progress = document.getElementById("progress");
    if (progress) {
        progress.innerHTML =
            "You answered " + correctCount + " out of 3 correctly.";
    }
}

let timeLeft = 30;

if (document.getElementById("timer")) {
    let timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").innerHTML = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    let score = 0;

    if (document.querySelector('input[name="q1"]:checked')?.value === "4") score++;
    if (document.querySelector('input[name="q2"]:checked')?.value === "Blue") score++;
    if (document.querySelector('input[name="q3"]:checked')?.value === "Manila") score++;
    if (document.querySelector('input[name="q4"]:checked')?.value === "7") score++;
    if (document.querySelector('input[name="q5"]:checked')?.value === "Earth") score++;

    let result = document.getElementById("result");
    if (result) {
        result.innerHTML =
            "You got " + score + " correct answers out of 5.";
    }
}
