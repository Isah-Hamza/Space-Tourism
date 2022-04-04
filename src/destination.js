var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log('start of destination');
var ul = document.querySelectorAll('[data-ul]');
var main = document.querySelector('[data-main]');
var listItems = Array.from(ul);
var destinations = Array.from(main.children);
console.log(listItems);
console.log(destinations);
listItems.forEach(function (obj) {
    __spreadArray([], obj.children, true).forEach(function (item, index) {
        item.addEventListener('click', function () {
            destinations.forEach(function (destination) { return destination.classList.add('hide'); });
            destinations[index].classList.remove('hide');
            console.log('clicked');
        });
    });
});
console.log('end of destination');
