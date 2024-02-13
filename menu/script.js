let listElement = document.querySelectorAll('.list_button--click');

listElement.forEach(listElement =>{
    listElement.addEventListener('click', ()=>{
        //aqui va lo q hace con el click
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`
    })
});
