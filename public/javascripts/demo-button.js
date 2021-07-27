let demoButton = document.querySelector('#demo-container > button')

demoButton.addEventListener('click', async event =>{

   let res = await fetch('/demo',{
        method: 'post',
    })


    return window.location.href = res.url

})
