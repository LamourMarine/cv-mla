const btnToggle = document.querySelector ('.btnToggle')

btnToggle.addEventListener('click' , () => {

    const card = document.querySelectorAll ('.card');
    const badge = document.querySelector('badge');

    card.forEach((card) => {
        if (card.classList.contains('dark')) {
    
            
            card.classList.remove('dark')
            card.classList.add('light')
            btnToggle.innerHTML = "Go dark"
    
        }  else {
            
            card.classList.add('dark')
            card.classList.remove('light')
            btnToggle.innerHTML = "Go light"
    
        }
    
    });
    })

    // if (badge.classList.contains('dark')) {
    //     badge.classList.remove('dark');
    //     badge.classList.add('light');
    //   } else {
    //     badge.classList.add('dark');
    //     badge.classList.remove('light');
    //   }
    


    
    
    
