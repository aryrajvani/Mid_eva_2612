
document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const questionData = {
        title: document.getElementById('question').value,
        optionA: document.getElementById('optionA').value,
        optionB: document.getElementById('optionB').value,
        optionC: document.getElementById('optionC').value,
        optionD: document.getElementById('optionD').value,
        correctOption: document.getElementById('correctOption').value,
        reviewStatus: false
    };

    fetch('http://localhost:3000/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(questionData)
    }).then(() => {
        alert('Question Created');
        loadQuestions();
    });
});

function loadQuestions() {
    fetch('http://localhost:3000/questions')
    .then(res => res.json())
    .then(data => {
        const grid = document.getElementById('questionsGrid');
        grid.innerHTML = '';
        data.forEach(question => {
            const card = document.createElement('div');
            card.classList.add('card');
            if (!question.reviewStatus) card.classList.add('blue-border');

            card.innerHTML = `
                <p>${question.title}</p>
                <button onclick="reviewQuestion(${question.id})">Review</button>
                <button onclick="deleteQuestion(${question.id})">Delete</button>
            `;
            grid.appendChild(card);
        });
    });
}

function reviewQuestion(id) {
    fetch('http://localhost:3000/questions/${id}',
         {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reviewStatus: true })
    }).then(() => loadQuestions());

}

function deleteQuestion(id) {
    fetch('http://localhost:3000/questions/${id}', { method: 'DELETE' })
    .then(() => loadQuestions());
}

loadQuestions();