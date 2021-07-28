window.addEventListener("DOMContentLoaded", (event) => {
    const addForms = document.querySelectorAll('.get-shelves');
    const body = document.querySelector('body');

    addForms.forEach(addForm => {
        addForm.addEventListener('submit', async event => {
            event.preventDefault();
            const parent = addForm.parentElement;
            const formData = new FormData(addForm);
            const gameId = formData.get('gameId');

            let res = await fetch('/api/shelves', {
                method: 'POST',
            })

            res = await res.json()
            const shelves = res.userShelves;

            const shelfTemplates = [];

            shelves.forEach(shelf => {
                shelfTemplates.push(`
                    <form class="add-to-shelf" action="/shelves/${shelf.id}/games/${gameId}" method="post">
                        <button type="submit"> ${shelf.name} </button>
                    </form>
                `)
            })

            const tempDiv = document.createElement('div');

            tempDiv.innerHTML = shelfTemplates.join('');

            tempDiv.style.position = 'absolute'
            tempDiv.style.top = '0px'
            tempDiv.style.left = '250px'
            tempDiv.style.backgroundColor = 'grey';
            parent.style.position = 'relative'

            parent.appendChild(tempDiv);

            // const addButtons = document.querySelectorAll('.add-to-shelf');

            // addButtons.forEach(button => {
            //     button.addEventListener('submit', event => {
            //         event.preventDefault()




            //     })
            // })



            // TODO:
                // fetch request for list of user shelves
                // show user list of their shelves
                // when they click on a shelf
                    //fetch request to add the game to that shelf
        })
    })
})
