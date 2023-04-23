//Makes a call to the dog house API to request treats, then appends each treat onto the treats list
const getTreats = () => {
    //Makes request to API and executes anonymous function on success
    $.getJSON("https://cit-doghouse-api.uc.r.appspot.com/api/v1/treats", function(treats) {
        //retrieves the treats list from DOM
        let treatsList = $('#treatsList');
        //Only append to the list if the list is empty
        if (treatsList.children().length == 0) {
            //For each treat, call anonymous function to append it to the list
            treats.forEach(function(treat) {
                //Create a list item object, assign it the text of the treat name, and append it to the treat list
                $('<li>').text(treat).appendTo(treatsList);
              });
        }
    });
}