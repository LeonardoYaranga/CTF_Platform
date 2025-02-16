function checkAnswer() {
    const correctAnswer = "flag{dfee9e39474b6e292d66c7facba668e1}";
    const userAnswer = document.getElementById("answer").value.trim();
    const feedback = document.getElementById("feedback");
    const inputField = document.getElementById("answer");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "¡Respuesta correcta!";
        feedback.style.color = "#4caf50";
        inputField.classList.add("correct");
        inputField.classList.remove("incorrect");
    } else {
        feedback.textContent = "Respuesta incorrecta";
        feedback.style.color = "#f44336";
        inputField.classList.add("incorrect");
        inputField.classList.remove("correct");
    }

    feedback.style.display = "block";
    setTimeout(() => {
        feedback.style.display = "none";
    }, 5000);
}
