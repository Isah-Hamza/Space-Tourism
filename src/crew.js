var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log('start of crew');
var indicators = document.querySelectorAll('[data-indicators]');
var main = document.querySelector('[data-main]');
var listItems = Array.from(indicators);
var crews = Array.from(main.children);
console.log(listItems);
console.log(crews);
listItems.forEach(function (obj) {
    __spreadArray([], obj.children, true).forEach(function (item, index) {
        item.addEventListener('click', function () {
            crews.forEach(function (crews) { return crews.classList.add('hide'); });
            crews[index].classList.remove('hide');
            console.log('clicked');
        });
    });
});
console.log('end of crew');
