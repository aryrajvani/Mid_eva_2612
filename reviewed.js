window.addEventListener('DOMContentLoaded',()=>{
fetch('http://localhost:3000/questions').then(res=>res.json())
.then(data=>{

const grid =
document.getElementById('reviewedQuestionsGrid');
grid.innerHTML='';
data.filter(q=>q.reviewStatus).forEach(question=>
    {
    const card =
    document.createElement('div');
    card.classList.add('card');
    card.classList.add('violet-border');
    card.innerHTML='<p>${question.title}</p>';
    grid.appendChild(card);

});
});

});