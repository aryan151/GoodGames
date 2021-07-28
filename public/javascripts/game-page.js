window.addEventListener('DOMContentLoaded', event => {
    const reviewForm = document.querySelector('.add-review')
    const reviewDiv = document.querySelector('.reviews')

    reviewForm.addEventListener('submit', async event => {
        event.preventDefault();

        const formData = new FormData(reviewForm);

        const gameId = formData.get('gameId');
        const content = formData.get('content');
        const rating = formData.get('rating');

        const body = { content, rating }

        let res = await fetch(`/api/games/${gameId}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })

        res = await res.json();
        const errorUL = document.getElementById('errors')
        const errorElem = document.querySelector('.error')
        if (res.errors) {
            const errors = [];
            res.errors.forEach(error => errors.push(`
                <li>${error}</li>
            `));
            errorUL.innerHTML = errors.join('')
            errorElem.classList.remove('hidden')
        } else {
            const newDiv = document.createElement('div');

            const reviewCard = `
                    <h4>User: ${res.user.username} </h4>
                    <p>${res.review.content}</p>
                    <p>Rating:  ${res.review.rating}</p>
            `
            newDiv.innerHTML = reviewCard
            newDiv.classList.add('card');
            newDiv.classList.add('center')

            reviewDiv.appendChild(newDiv);
            errorElem.classList.add('hidden')
            reviewForm.reset()
        }
    })
})
