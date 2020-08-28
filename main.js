"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    div.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var div = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', findForUser)

div.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


function findForUser() {
    var userInput = document.getElementById('userSearch')
    var userCoffee = [];
    coffees.forEach(function (coffee, i) {
        if (userInput.value === coffees[i].name) {
            userCoffee.push(coffees[i].name);
            div.innerHTML = renderCoffee(coffees[i])
        } else {

        }
    });
}

// var bigSelect = document.querySelector('.options')
// bigSelect.addEventListener('change', (event) => {
//     if(`${event.target.value}` === '5') {
//         map.setZoom(5)
//     }
//     if(`${event.target.value}` === '15') {
//         map.setZoom(15)
//     }
//     if(`${event.target.value}` === '20') {
//         map.setZoom(20)
//     }
// });

