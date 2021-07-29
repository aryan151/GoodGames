window.addEventListener('DOMContentLoaded', event => {
    const logoutLink = document.querySelector('#logout')
    const demolink = document.querySelector('#demo')

    if (logoutLink) {
        logoutLink.addEventListener('click', async event => {
            event.preventDefault();

            await fetch('/logout', {
                method: 'post',
            })

            return window.location.href = '/'
        })
    }

    if (demolink) {
        demolink.addEventListener('click', async event => {
            event.preventDefault();

            await fetch('/demo', {
                method: 'post',
            })

            return window.location.href = '/'
        })
    }
})
