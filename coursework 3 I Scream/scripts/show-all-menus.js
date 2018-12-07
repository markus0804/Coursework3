/*
Javascript code is loaded "globally" in the pages. For "security" reasons,
it is a good practice to encapsulate the code inside an  anonymous function that is executed when the file is loaded. In new JS versions, this is solved using modules.
Anyway, don't worry about that, you will learn that stuff in other courses.
*/
(function () {
    var helpers = HELPERS();

    var i, j;
    //loop to go through all the categories
    for (i = 0; i < categories.length; i++) {
        //For each category, we create a <h2> with the category name
        //and it is added to the body
        var h2 = document.createElement("h2");
        h2.innerHTML = categories[i];
        document.getElementById("ice-creams").appendChild(h2);

        //loop to go through all the desserts that belong to category[i] (i.e, the current category)
        var currentDessert = iceCreams[categories[i]];
        for (j = 0; j < currentDessert.length; j++) {
            //for each menu, a html div with the name, description and price is created and it is added to the body.
            var menuItem = helpers.getHTMLMenuFromTitleDescriptionPrice(currentDessert[j].name, currentDessert[j].description, currentDessert[j].price);
            document.getElementById("ice-creams").appendChild(menuItem);
        }
    }
})();