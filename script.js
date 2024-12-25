console.log("Implementation of data hi in the sandbox theory");

// Add a javascript feature to your button
const button = document.querySelector('button'); //this finds the button on the page and the const means constant and that button will be constant meaning will be the same all the time

button.addEventListener('click', () => {
    alert('You clicked the button!'); //displays a pop up when the button is clicked
});

//Add an image click feature
const image = document.querySelector('img'); //finds the image on the website
image.addEventListener('click', () => {
    console.log('You clicked the owl'); //logs a message in the console
});

//Add a dynamic text Change
const paragraph = document.querySelector('p'); //finds the paragraph element
button.addEventListener('click', () => { //this listens for when the button is clicked
    paragraph.textContent = 'You have touched the button, and this text has changed!'; //this is going to change the paragraph of the website when changed
});

//Add a Textarea Word Counter
const textarea = document.querySelector('textarea'); //This finds the text area in the website
textarea.addEventListener('input', () => { //the input hear means that the script will listen to inputs in the text box
    const charCount = textarea.value.length; //Gets the number of characters typed
    console.log('Characters typed: ${charCount}'); // another way to do this is console.log('Characters typed: ' + charCount); but this would not be efficient as it prints multiple line in the console but using ${charCount}' made it more efficient and count is recorded in one line in the console
});

//Add a Background Color Toggle
const toggleButton = document.querySelector('#toggle-bg'); //finds the new button; # means to find elements by its id, in this case #toggle-bg is looking for an HTML element with id="toggle-bg"
toggleButton.addEventListener('click', () => { //this listens for click event on the button
    document.body.classList.toggle('dark-mode'); //document refers to the entire webpage(HTML document)
    //body refers to the <body> element in ur HTML document
    //document.body means u are specifically targetting the <body> tag of ur webpage
    //Refers to the list of classes (CSS class names) currently applied to the element (<body> in this case).
    // ClassList gives you an easy way to view, add, or remove classes for an element.
    //In this case, document.body.classList refers to the list of classes applied to the <body> tag.
    //togle() is a method from classList that adds or removes a class depending on if its there or not
    //dark-mode This is the name of the CSS class you want to toggle.

})

