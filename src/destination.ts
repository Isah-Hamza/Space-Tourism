console.log('start of destination');

const ul = document.querySelectorAll('[data-ul]');
const main = document.querySelector('[data-main]');


const listItems = Array.from(ul);
const destinations = Array.from(main.children);

console.log(listItems);
console.log(destinations)

listItems.forEach(obj => {
    [...obj.children].forEach((item, index) => {
        item.addEventListener('click', () =>{
            destinations.forEach(destination => destination.classList.add('hide'));
            destinations[index].classList.remove('hide');
            console.log('clicked')
        } )
    })
})


console.log('end of destination')