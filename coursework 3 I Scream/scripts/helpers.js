/*
This file is created to provide some common functionalities among the whole site.
It is created in a way that can be used as a "global" library. To do so, it has to be
loaded in your html files right after the menu-db.file. For example:
    
        ...
        <script src="menu-db.js"></script>
        <script src="scripts/helpers.js"></script>
        and your scripts goes here...
    </body>
*/
var HELPERS = function () {

    var publicMethods = {
        getHTMLMenuFromTitleDescriptionPrice: getHTMLMenuFromNameDescriptionPrice
    }
    return publicMethods;

    //////////////////////////
    //  PUBLIC FUNCTIONS    //
    //////////////////////////

    function getHTMLMenuFromNameDescriptionPrice(title, description, price) {
        //a <div></div> is created to display the menu
        var divMenu = document.createElement("div");
        //the <div> will have the "menu-item" class. e.g: <div class="menu-item"></div>
        divMenu.className = "menu-item";

        //<h2>title</h2> is created. E.g: <h2>Backed potato</h2>
        var htmlTitle = getTitleElement(title);
        //append <h2> to <div class="menu-item">. 
        // E.g: 
        //    <div class="menu-item">
        //        <h2>bloody hell</h2>
        //    </div>
        divMenu.appendChild(htmlTitle);

        //<p><span>description</span><span>price</span></p> is created. 
        // E.g: 
        //  <p>
        //    <span>Vanilla Ice Cream, Vanilla Wafers, and Strawberry Topping</span>
        //    <span>52 NOK</span>
        //  </p>
        var paragraphWithPriceAndDescription = getParagraphWithDescriptionAndPrice(description, price);
        //append <h2> to <div class="menu-item">. 
        // E.g: 
        //    <div class="menu-item">
        //        <h2>bloody hell</h2>
        //        <p>
        //          <span>Vanilla Ice Cream, Vanilla Wafers, and Strawberry Topping</span>
        //          <span>52 NOK</span>
        //        </p>
        //    </div>
        divMenu.appendChild(paragraphWithPriceAndDescription);
        return divMenu;
    }


    //////////////////////////
    // PRIVATE FUNCTIONS    //
    //////////////////////////

    /*
    Return a <h2> with the title (name)
    */
    function getTitleElement(title) {
        //create an empty <h2>
        var titleH2 = document.createElement("h2");
        //set the <h2> value using the title input param. e.g: <h2>bloody hell</h2>
        titleH2.innerHTML = title;
        //return the element
        return titleH2;
    }

    /*
    Return a <span> with the description
    */
    function getDescriptionElement(description) {
        //create an empty <span>
        var descSpan = document.createElement("span");
        //set the <span> value using the description input param. e.g: <span>Vanilla Ice Cream, Vanilla Wafers, and Strawberry Topping</span>
        descSpan.innerHTML = description;
        descSpan.className = "desc";
        //return the element
        return descSpan;
    }

    /*
    Return a <span> with the price
    */
    function getPriceElement(price) {
        var priceSpan = document.createElement("span");
        priceSpan.innerHTML = price + " NOK";
        priceSpan.className = "price";
        return priceSpan;
    }

    function getParagraphWithDescriptionAndPrice(description, price) {
        var p = document.createElement("p");

        //<span>desc</span> is created. E.g: <span>Vanilla Ice Cream, Vanilla Wafers, and Strawberry Topping</span>
        var htmlDesc = getDescriptionElement(description);
        //append <span>description to <p>. 
        // E.g: 
        //    <p>
        //        <span>Vanilla Ice Cream, Vanilla Wafers, and Strawberry Topping</span>
        //    </p>
        p.appendChild(htmlDesc);

        //<span>price</span> is created. E.g: <span>52 NOK</span>
        var htmlPrice = getPriceElement(price);
        //append <span> to <p>
        // E.g: 
        //    <p>
        //        <span>Vanilla Ice Cream, Vanilla Wafers, and Strawberry Topping</span>
        //        <span>52 NOK</span>
        //    </p>
        p.appendChild(htmlPrice);
        return p;
    }
};



