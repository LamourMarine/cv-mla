const btnToggle = document.querySelector ('.btnToggle')

btnToggle.addEventListener('click' , () => {

    const body = document.querySelector('.card');

    if(body.classList.contains('dark')){
        
        body.classList.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = "Go Dark"

    }  else{
        
        body.classList.add('dark')
        body.classList.remove('light')
        btnToggle.innerHTML = "Go light"

    }

})