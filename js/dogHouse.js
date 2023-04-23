const getTreats = () => {
    $.getJSON("https://cit-doghouse-api.uc.r.appspot.com/api/v1/treats", function(treats) {
        let treatsList = $('#treatsList');
        if (treatsList.children().length == 0) {
            treats.forEach(function(treat) {
                $('<li>').text(treat).appendTo(treatsList);
              });
        }
    });
}