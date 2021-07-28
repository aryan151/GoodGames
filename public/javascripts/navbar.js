window.addEventListener('DOMContentLoaded', event => {
    const logoutLink = document.querySelector('#logout')

    logoutLink.addEventListener('click', async event => {
        event.preventDefault();

        await fetch('/logout', {
            method: 'post',
        })

        return window.location.href = '/'
    })
})
