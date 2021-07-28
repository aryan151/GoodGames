window.addEventListener("DOMContentLoaded", (event) => {
    const addShelfButtons = document.querySelectorAll('.add-to-shelf');

    addShelfButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();

            // TODO:
                // fetch request for list of user shelves
                // show user list of their shelves
                // when they click on a shelf
                    //fetch request to add the game to that shelf
        })
    })
})
