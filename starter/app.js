
// BUDGET CONTROLLER
var budgetController = (function() {

    // Some code

})();

// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        descriptionType: '.add__description',
        valueType: '.add__value',
        inputBtn: ".add__btn"
    }

 /* 
 This (below) is an "empty" object. It is assigned to the variable UIController (UIController.getinput()). Part of a bigger concept called the module pattern. 
 Returns the object assigned to UIController. This is a closure as well. 

 */
    return {                           
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.descriptionType).value,
                value: document.querySelector(DOMstrings.valueType).value
            }

        },

        getDOMstrings: function() {
            return DOMstrings;
        }
            
    }

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {

        // 1. Get the field input data
        var input = UIController.getinput();
        console.log(input);

        // 2. Add the item to the budget controller 

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget to the UI

        

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if (event.keycode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });    

})(budgetController, UIController);
