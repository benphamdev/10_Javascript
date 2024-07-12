// HTML DOM : document Object model

/**
 * 3 thanh phan:
 * 1. element : ID, class, tag name, Css selector, html collection
 * 2. arrtribute
 * 3. text
 */

// javascript : browser | server : (Node js)

// browser : html -> dom -> dom api(application programming interface)(web api)

// ID, return 1id
// var headingNode = document.getElementById('heading');

// class, return collection
// var headingNode = document.getElementsByClassName('heading1');

// tag name, return collection
// var headingNode = document.getElementsByTagName('h1');

// Css selector, return 1 doi tuong or return collection
// var headingNode = document.querySelector('.box .heading2:nth-child(2)');
// var headingNode = document.querySelectorAll('.box .heading2');

// html collection
// var headingNode = document.forms;

// console.log(document.anchors)

// document anchors deprecated
// The anchors property is deprecated. Do NOT use it.

// The anchors property only returns those <a> elements with a name attribute.

// The name attribute of the <a> element is not supported in HTML5.

// console.log(headingNode);
