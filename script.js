/*
===========================================================
YOUR TUX
script.js
Part 1
===========================================================
*/

// =========================================================
// DOM Elements
// =========================================================

const landing = document.getElementById("landing");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const restartBtn = document.getElementById("restart-btn");
const learnMoreBtn = document.getElementById("learn-more-btn");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

const distroName = document.getElementById("distro-name");
const deName = document.getElementById("de-name");
const reason = document.getElementById("reason");

// =========================================================
// Quiz State
// =========================================================

let currentQuestion = 0;

// Stores selected option IDs
let answers = new Array(questions.length).fill(null);

// Stores distro scores
let scores = {};

// =========================================================
// Initialize Score Object
// =========================================================

function initializeScores() {

    scores = {};

    for (const distro in distros) {
        scores[distro] = 0;
    }

}

// =========================================================
// Start Quiz
// =========================================================

startBtn.addEventListener("click", () => {

    landing.classList.add("hidden");
    quiz.classList.remove("hidden");

    currentQuestion = 0;

    initializeScores();

    showQuestion();

});

// =========================================================
// Display Current Question
// =========================================================

function showQuestion() {

    const q = questions[currentQuestion];

    questionElement.textContent = q.question;

    optionsElement.innerHTML = "";

    q.options.forEach(option => {

        const div = document.createElement("div");

        div.className = "option";

        div.textContent = option.text;

        div.dataset.id = option.id;

        // Restore previous selection
        if (answers[currentQuestion] === option.id) {

            div.classList.add("selected");

        }

        div.addEventListener("click", () => {

            selectOption(div, option.id);

        });

        optionsElement.appendChild(div);

    });

    updateProgress();

    updateButtons();

}

// =========================================================
// Select Option
// =========================================================

function selectOption(element, id) {

    document.querySelectorAll(".option").forEach(option => {

        option.classList.remove("selected");

    });

    element.classList.add("selected");

    answers[currentQuestion] = id;

}

// =========================================================
// Update Progress Bar
// =========================================================

function updateProgress() {

    const percent =
        ((currentQuestion + 1) / questions.length) * 100;

    progressFill.style.width = percent + "%";

    progressText.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

}

// =========================================================
// Update Buttons
// =========================================================

function updateButtons() {

    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === questions.length - 1) {

        nextBtn.textContent = "Finish";

    } else {

        nextBtn.textContent = "Next";

    }

}


// -------------------------------------------------------------------------------



/*
===========================================================
YOUR TUX
script.js
Part 2
===========================================================
*/

// =========================================================
// Previous Button
// =========================================================

prevBtn.addEventListener("click", () => {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

});

// =========================================================
// Next Button
// =========================================================

nextBtn.addEventListener("click", () => {

    if (answers[currentQuestion] === null) {

        alert("Please select an option before continuing.");

        return;

    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        calculateResults();

    }

});

// =========================================================
// Calculate Distribution Scores
// =========================================================

function calculateResults() {

    initializeScores();

    answers.forEach(answerID => {

        const scoreMap = scoring[answerID];

        if (!scoreMap) return;

        for (const distro in scoreMap) {

            scores[distro] += scoreMap[distro];

        }

    });

    displayResult();

}

// =========================================================
// Find Best Distribution
// =========================================================

function getBestDistribution() {

    let winner = null;
    let highest = -1;

    for (const distro in scores) {

        if (scores[distro] > highest) {

            highest = scores[distro];
            winner = distro;

        }

    }

    return winner;

}

// =========================================================
// Desktop Environment Recommendation
// =========================================================

function getDesktopRecommendation() {

    let desktopScores = {};

    answers.forEach(answerID => {

        const recommendation =
            desktopRecommendations[answerID];

        if (!recommendation) return;

        if (!desktopScores[recommendation]) {

            desktopScores[recommendation] = 0;

        }

        desktopScores[recommendation]++;

    });

    let bestDesktop = "GNOME";
    let bestScore = -1;

    for (const desktop in desktopScores) {

        if (desktopScores[desktop] > bestScore) {

            bestDesktop = desktop;
            bestScore = desktopScores[desktop];

        }

    }

    return bestDesktop;

}

// =========================================================
// Show Result Screen
// =========================================================

function displayResult() {

    quiz.classList.add("hidden");

    result.classList.remove("hidden");

    result.classList.add("show");

    const winner = getBestDistribution();

    const desktop = getDesktopRecommendation();

    const info = distros[winner];

    distroName.textContent = info.name;

    deName.textContent = desktop;

    reason.innerHTML = `
        <strong>${info.name}</strong> is recommended because your
        answers indicate that it best matches your experience,
        preferred workflow, and system expectations.

        <br><br>

        <strong>Release Model:</strong> ${info.release}

        <br>

        <strong>Package Manager:</strong> ${info.packageManager}

        <br>

        <strong>Difficulty:</strong> ${info.difficulty}

        <br><br>

        <strong>Best For:</strong>

        ${info.bestFor.join(", ")}

        <br><br>

        <strong>Pros:</strong>

        ${info.pros.join(", ")}

        <br><br>

        <strong>Cons:</strong>

        ${info.cons.join(", ")}

        <br><br>

        ${info.description}
    `;

    // Save website for Learn More button
    learnMoreBtn.dataset.website = info.website;

}





// ----------------------------------------------------------------------------------





/*
===========================================================
YOUR TUX
script.js
Part 3
===========================================================
*/

// =========================================================
// Learn More Button
// =========================================================

learnMoreBtn.addEventListener("click", () => {

    const website = learnMoreBtn.dataset.website;

    if (website) {

        window.open(website, "_blank");

    }

});

// =========================================================
// Restart Quiz
// =========================================================

restartBtn.addEventListener("click", restartQuiz);

function restartQuiz() {

    answers = new Array(questions.length).fill(null);

    currentQuestion = 0;

    initializeScores();

    result.classList.add("hidden");

    quiz.classList.remove("hidden");

    showQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// =========================================================
// Utility
// =========================================================

function resetSelections() {

    document.querySelectorAll(".option").forEach(option => {

        option.classList.remove("selected");

    });

}

// =========================================================
// Hide Empty Images
// =========================================================

const distroLogo = document.getElementById("distro-logo");
const deLogo = document.getElementById("de-logo");

if (distroLogo) {

    distroLogo.style.display = "none";

}

if (deLogo) {

    deLogo.style.display = "none";

}

// =========================================================
// Prevent Enter Key From Accidentally
// Submitting / Advancing
// =========================================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        event.preventDefault();

    }

});

// =========================================================
// Optional Keyboard Navigation
// =========================================================

document.addEventListener("keydown", (event) => {

    if (quiz.classList.contains("hidden")) return;

    if (event.key === "ArrowLeft") {

        if (!prevBtn.disabled) {

            prevBtn.click();

        }

    }

    if (event.key === "ArrowRight") {

        nextBtn.click();

    }

});

// =========================================================
// Fade Animation Helper
// =========================================================

function animateQuestion() {

    questionElement.classList.remove("fade-in");

    void questionElement.offsetWidth;

    questionElement.classList.add("fade-in");

}

// =========================================================
// Override showQuestion()
// to include animation
// =========================================================

const originalShowQuestion = showQuestion;

showQuestion = function () {

    originalShowQuestion();

    animateQuestion();

};

// =========================================================
// Console Banner
// =========================================================

console.log(`
========================================
           YOUR TUX
========================================

Find Your Perfect Linux Distribution

Made with ❤️ using HTML, CSS & JavaScript

========================================
`);

// =========================================================
// End of File
// =========================================================
