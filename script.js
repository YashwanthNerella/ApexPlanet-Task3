// Quiz Score
let score = 0;

function checkAnswer(answer) {
    if (answer === 'correct') {
        score++;
        document.getElementById('score').innerText = score;
        document.getElementById('result').innerText = '✅ Correct!';
        document.getElementById('result').style.color = 'green';
    } else {
        document.getElementById('result').innerText = '❌ Wrong!';
        document.getElementById('result').style.color = 'red';
    }
}

// Joke API
function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke-text').innerText = 
            data.setup + ' ... ' + data.punchline;
        })
        .catch(error => {
            document.getElementById('joke-text').innerText = 
            'Could not load joke! Check internet connection.';
        });
}