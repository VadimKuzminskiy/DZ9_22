
// const blocks = document.querySelectorAll('.block');

// blocks.forEach(function(block){
//     const buttonPlus = block.querySelector('.plus');
//     const buttonMinus = block.querySelector('.minus');
//     const countElement = block.querySelector('.count');

//     let count = 0;

//     buttonPlus.addEventListener('click',  function(event) {
//         const target = event.target;
//         const block = target.closest('.block');
//         const countElement = block.querySelector('.count');

//         count++;
//         countElement.textContent = count;
//     });

//     buttonMinus.addEventListener('click', function() {
//         count--;
//         countElement.textContent = count;
//     });
// });


const search = document.querySelector('#container');
search.addEventListener('click', searchClick);

function searchClick(event) {
    if
    (event.target.className.includes('plus')) {
        event.target.nextElementSibling.innerHTML++;
    }

    if
    (event.target.className.includes('minus')) {
        event.target.previousElementSibling.innerHTML--;
    }
}