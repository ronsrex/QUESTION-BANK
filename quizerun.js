function checkAnswers() {
    let score = 0;
  
    // Get all the questions
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
  
    // Check answers
    if (q1 && q1.value === "correct") score++;
    if (q2 && q2.value === "correct") score++;
    if (q3 && q3.value === "correct") score++;
    if (q4 && q4.value === "correct") score++;
    if (q5 && q5.value === "correct") score++;
  
    // Show result
    const resultDiv = document.getElementById('result');
    if (score === 5) {
      resultDiv.innerHTML =`Congratulations.&#128077 You're all answer a CORRECT!YOU HAVE WIN A REWARD TO CHECK THE REWARD CLICK THE BUTTON BELOW &#128077`;
      resultDiv.style.color = "DARKBLUE";
    } else {
      resultDiv.innerHTML = `You got ${score} out of 5 right &#128078. Try again!`;
      resultDiv.style.color = "red";
    }
  }
  