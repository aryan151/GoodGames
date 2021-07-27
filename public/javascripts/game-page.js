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

        const response = await fetch(`/api/games/${gameId}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })

        const review = await response.json();

        const reviewCard = `
            <div class="card center">
                <h4>User: ${review.userId} </h4>
                <p>${review.content}</p>
                <p>Rating:  ${review.rating}</p>
            </div>
        `

        reviewDiv.appendChild(reviewCard);

    })
})
