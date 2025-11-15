const answers = {
            q1: 'b', q2: 'b', q3: 'c', q4: 'b', q5: 'b',
            q6: 'b', q7: 'b', q8: 'b', q9: 'a', q10: 'd',
            q11: 'b', q12: 'b', q13: 'c', q14: 'b', q15: 'c',
            q16: 'b', q17: 'c', q18: 'a', q19: 'c', q20: 'b'
};
document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();  
    let score = 0;
    const totalQuestions = 20;
    for (let i = 1; i <= totalQuestions; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === answers[`q${i}`]) {
            score++;
        }
    }
    showResults(score, totalQuestions);
});
function showResults(score, total) {
    document.getElementById('quizForm').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');
    const percentage = (score / total) * 100;
    document.getElementById('scoreDisplay').textContent = score + ' / ' + total;
    let message = '';
    if (percentage === 100) {
        message = 'Perfect! You are a food expert!';
    } else if (percentage >= 80) {
        message = 'Excellent! You know your food well!';
    } else if (percentage >= 60) {
        message = 'Good job! Keep learning!';
    } else if (percentage >= 40) {
        message = 'Not bad! Try again to improve!';
    } else {
        message = 'Keep studying! You can do better!';
    }
    document.getElementById('messageDisplay').textContent = message;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function restartQuiz() {
    document.getElementById('quizForm').reset();
    document.getElementById('quizForm').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}