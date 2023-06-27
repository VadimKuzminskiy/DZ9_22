
const blocks = document.querySelectorAll('.block');

blocks.forEach(function(block){
    const buttonPlus = block.querySelector('.plus');
    const buttonMinus = block.querySelector('.minus');
    const countElement = block.querySelector('.count');

    let count = 0;

    buttonPlus.addEventListener('click', function() {
        count++;
        countElement.textContent = count;
    });

    buttonMinus.addEventListener('click', function() {
        count--;
        countElement.textContent = count;
    });
});