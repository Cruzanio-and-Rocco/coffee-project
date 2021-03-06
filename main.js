"use strict"

function renderCoffee(coffee) {
    var html = '<div class="flip-card d-flex m-2 mx-3 text-align-center " style="width: 10em;">';
    html += "<div class='flip-card-inner'>"
    html += "<div class='flip-card-front'>"
    html += '<img class="coffeeDog" src="img/coffeeDog.jpg" alt="Coffee Dog Image" style="width:160px;height:160px;">';
    html += "</div>"
    html += "<div class='flip-card-back'>"
    html += '<h2 class="card-title h2class">' + coffee.name + '</h2>';
    html += '<p class="card-text">' + coffee.roast + '</p>';
    html += '<button class="btn btn-sm btn-danger rB">Remove</button>'
    html += '</div>'
    html += '</div>'
    html += '</div>'


    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (selectedRoast === 'All Roasts') {
            div.innerHTML = renderCoffees(coffees);
        }
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
            div.innerHTML = renderCoffees(filteredCoffees);
        }
    });

}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];
var div = document.querySelector('#coffees');


var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchButton = document.getElementById('searchButton');
var userInput = document.getElementById('userSearch')
var addCoffeeButton = document.getElementById('addCoffee')
var removeButton =
roastSelection.addEventListener('change', updateCoffees)
// submitButton.addEventListener('click', updateCoffees);




function findForUser() {
    var userInput = document.getElementById('userSearch')
    var userCoffee = [];
    coffees.forEach(function (coffee, i) {
        if (coffees[i].name.toLowerCase().includes(userInput.value.toLowerCase())) {
            userCoffee.push(coffees[i]);
            div.innerHTML = renderCoffees(userCoffee)
        } else {
        }
    });
}

searchButton.addEventListener('click', findForUser)


// userInput.value.toLowerCase() === coffees[i].name.toLowerCase()

function letsSearch() {
    var letSearch = []
    coffees.forEach(function (coffee, i) {
        if (coffees[i].name.toLowerCase().startsWith(userInput.value.toLowerCase())) {
            letSearch.push(coffees[i])
            div.innerHTML = renderCoffees(letSearch)
        }
    })
}

userInput.addEventListener('keyup', letsSearch)


function addCoffeeToList() {
    var userCoffeeName = document.getElementById('userCoffee')
    var userRoastType = document.getElementById('user-roast-selection')

    coffees.push({
        id: Number(coffees.length + 1),
        name: userCoffeeName.value,
        roast: userRoastType.value,
    })

    div.innerHTML = renderCoffees(coffees)

}
addCoffeeButton.addEventListener('click', addCoffeeToList)

div.innerHTML = renderCoffees(coffees);

var buttonR = document.getElementsByClassName('rB')[0];

var postRemoveBtn = [];
var coffeeDeterminer = function() {
    var nameC = buttonR.name
    coffees.forEach(function(coffee ){
        for (var i=0; i <= coffees.length - 1; i++)
        if (coffees[i].name !== nameC){
            postRemoveBtn.push(coffee);
        }
        div.innerHTML = renderCoffees(postRemoveBtn);
    });
    console.log(coffeeDeterminer(postRemoveBtn));
}
//
// function removeCoffee(){
//     var afterRemoveCoffeeList = coffees.filter()
//



buttonR.addEventListener('click', coffeeDeterminer)
