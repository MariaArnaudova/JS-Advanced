function focused() {
    // let divElements = document.querySelectorAll('div div');
    // console.log(divElements);

    Array.from(document.querySelectorAll('input'))
        .forEach(i => {
            i.addEventListener('focus', onFocus);
            i.addEventListener('blur', onBlur);
        });
    
        function onFocus(ev){
             ev.target.parentElement.className ='focused';
        }

        function onBlur(ev){
             ev.target.parentElement.className = '';
        }

}