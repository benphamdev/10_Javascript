// 1. input / select
// 2. key up / down

let inputElement = document.querySelector("input[type = 'text']");

// inputElement.oninput = function (e) {
//     console.log(e.target.value);
// }

// let inputElement = document.querySelector("input[type = 'checkbox']");

// inputElement.onchange = (e) => {
//     console.log(e.target.checked);
// }

// let inputElement = document.querySelector("select");

// inputElement.onchange = function (e) {
//     console.log(e.target.value);
// }

// inputElement.onkeyup = function (e) {
//     console.log(e.which);

//     switch (e.which) {
//         case 27:
//             console.log('exit');
//             break;
//     }
// }

// out of date
// document.onkeyup = function (e) {
//     switch (e.which) {
//         case 27:
//             console.log('exit');
//             break;
//     }
// }

document.onkeyup = (e) => {
    switch (e.code) {
        case "Escape":
            console.log('exit');
            break
    }
}

// code value for keyboard event
// https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values
// keyboard event