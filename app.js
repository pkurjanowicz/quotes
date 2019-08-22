const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', evt => {
    evt.preventDefault();
    const authorSearch = loginForm.querySelector('input[type="text"]').value;
    const quote = document.getElementById('random-quote');
    const author = document.getElementById('author');
    fetch(`https://api.quotable.io/quotes?author=${authorSearch}`)
        .then(response => response.json())
        .then(data => {
            quote.innerHTML = data.results[0].content;
            author.innerHTML = data.results[0].author;
        })
        .catch(error => { quote.innerHTML = "Can't fine a quote :("; } );
        loginForm.querySelector('input[type="text"]').value = '';
});