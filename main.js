const inputs = document.querySelectorAll('input');
for (let i = 0; i < inputs.length; ++i){
    inputs[i].addEventListener('blur', function () {
        inputs[i].style.backgroundColor = 'red';
    });
    inputs[i].addEventListener('focus', function () {
        inputs[i].style.backgroundColor = 'white';
    })
}