// DOMContentLoaded => waiting for loading HTML elements
// addEventListener => 'Browser listen to me' then we give a function '() => {}'
document.addEventListener("DOMContentLoaded", () => { 
    const buttons = document.querySelectorAll('.class' or '#id');

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            console.log('CLICK')
        })
    }) 
})
