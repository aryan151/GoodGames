window.addEventListener("DOMContentLoaded", (event) => {
    const addForms = document.querySelectorAll('.get-shelves');
    const body = document.querySelector('body');

    body.addEventListener('click', event => {
        const alreadyDisplayed = document.querySelector('.shelves');
        if (document.body.contains(alreadyDisplayed)) {
            alreadyDisplayed.remove()
        }
    })

    addForms.forEach(addForm => {
        addForm.addEventListener('submit', async event => {
            const alreadyDisplayed = document.querySelector('.shelves');
            if (document.body.contains(alreadyDisplayed)) {
                alreadyDisplayed.remove()
            }
            event.preventDefault();
            event.stopPropagation();
            const parent = addForm.parentElement;
            const formData = new FormData(addForm);
            const gameId = formData.get('gameId');

            let res = await fetch('/api/shelves', {
                method: 'POST',
            })

            res = await res.json()
            const shelves = res.userShelves;

            const shelfTemplates = ['<p class="title">My Shelves</p>'];

            shelves.forEach(shelf => {
                shelfTemplates.push(`
                    <form class="add-to-shelf" action="/shelves/${shelf.id}/games/${gameId}" method="post">
                        <button class="shelf" type="submit"> ${shelf.name} </button>
                    </form>
                `)
            })

            const tempDiv = document.createElement('div');

            tempDiv.innerHTML = shelfTemplates.join('');
            tempDiv.classList.add('shelves')
            parent.style.position = 'relative'

            parent.appendChild(tempDiv);
        })
    })
})
