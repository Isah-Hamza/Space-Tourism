console.log('start of crew');

const indicators = document.querySelectorAll('[data-indicators]');
const main = document.querySelector('[data-main]');


const listItems = Array.from(indicators);
const crews = Array.from(main.children);

console.log(listItems);
console.log(crews)

listItems.forEach(obj => {
    [...obj.children].forEach((item, index) => {
        item.addEventListener('click', () =>{
            crews.forEach(crews => crews.classList.add('hide'));
            crews[index].classList.remove('hide');
            console.log('clicked')
        } )
    })
})


console.log('end of crew')