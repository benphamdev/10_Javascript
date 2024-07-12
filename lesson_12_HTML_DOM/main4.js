// dom event

// 1. attribute event
// 2. assign event using the Element Node

let h1Elements = document.querySelectorAll('h1');

for (let i = 0; i < h1Elements.length; i++) {
    h1Elements[i].onclick = function (e) {
        console.log(e.target);
    }
}




