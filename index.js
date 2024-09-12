const btnToggle = document.querySelector ('.btnToggle')

btnToggle.addEventListener('click' , () => {

    const card = document.querySelectorAll ('.card');

    card.forEach((card) => {
        if (card.classList.contains('dark')) {
    
            
            card.classList.remove('dark')
            card.classList.add('light')
            btnToggle.innerHTML = "Go Dark"
    
        }  else {
            
            card.classList.add('dark')
            card.classList.remove('light')
            btnToggle.innerHTML = "Go light"
    
        }
    
    });
    })
    
    
    