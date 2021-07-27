let demoButton = document.querySelector('#demo-container > button')

demoButton.addEventListener('click', async event =>{
    console.log('clicked demo')

   let res = await fetch('/demo',{
        method: 'post',
    })


    if (res.redirected){
        window.location.href = res.url
    }
})
