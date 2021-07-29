window.addEventListener("DOMContentLoaded", (event) => {
    const addForms = document.querySelectorAll('.get-shelves');
    const body = document.querySelector('body');

    addForms.forEach(addForm => {
        addForm.addEventListener('submit', async event => {
            event.preventDefault();
            event.stopPropagation();

            const alreadyDisplayed = document.querySelector('.shelves');

            if (document.body.contains(alreadyDisplayed)) {
                alreadyDisplayed.remove()
            }

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
                        <input type="hidden" name="shelfId" value=${shelf.id}>
                        <button class="shelf" type="submit"> ${shelf.name} </button>
                    </form>
                `)
            })

            const tempDiv = document.createElement('div');

            tempDiv.innerHTML = shelfTemplates.join('');
            tempDiv.classList.add('shelves')
            parent.style.position = 'relative'

            parent.appendChild(tempDiv);


            // Listen to buttons to add to shelf
            const shelfButtons = document.querySelectorAll('.shelf');
            const shelfForms = document.querySelectorAll('.add-to-shelf');

            shelfButtons.forEach(button => {
                button.addEventListener('click', event => {
                    event.stopPropagation();
                });
            })

            shelfForms.forEach(form => {
                form.addEventListener('submit', async event => {
                    event.preventDefault();

                    const formData = new FormData(form);
                    const shelfId = formData.get('shelfId');

                    let res = await fetch(`/api/shelves/${shelfId}/games/${gameId}`, {
                        method: 'POST'
                    })

                    res = await res.json()

                    const { message } = res;

                    const notification = document.createElement('div');

                    notification.innerText = message;
                    notification.style.position = 'fixed';
                    notification.style.top = '50px';
                    notification.style.left = '0px';
                    notification.style.padding = '10px';
                    notification.style.backgroundColor = '#6d98ba';
                    notification.style.color = 'white';

                    body.appendChild(notification);

                    setTimeout(() => notification.remove(), 5000)

                })
            })

        })
    })


    body.addEventListener('click', event => {
        const alreadyDisplayed = document.querySelector('.shelves');
        if (document.body.contains(alreadyDisplayed)) {
            alreadyDisplayed.remove()
        }
    })
})
