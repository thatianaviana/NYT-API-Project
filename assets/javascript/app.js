// $(document).ready(function(){});
//  Question for Omar - can you explain why for some of our excercises $(document).ready(function(){} were at the top
// but for all these API activities, they are everywhere in the page? 


// $("#buttons-view").on("click", "button",function() {

    var apiKey = "UDp81ZvSBZ7G1huAhXF0aVboCxXxVxt6"; 

    var searchTerm = "";
    var numRecords = 0;
    var startYear = 0;
    var endYear = 0;

    var articleCounter = 0;

    //API URL 
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=" + apiKey;


    function runQuery(queryURL) {

    $.ajax({ url: queryURL, method: "GET"})
        .done(function(data) {
        
        var results = response.data; 
           

        //clears content area
        $('#contentArea').empty();

            for (var i = 0; i < queryURL; i++) {
                console.log(response.docs[i].section_name);
            
            //send information to HTML

            var c = $('<div>');
            c.addClass('area');
            c.attr('id', queryURL[i]);
            
            //Appends to Content Area
            $('#contentArea').append(c);

            }});

        }

    $('#searchBtn').on('click', function() {

        searchTerm = $('#search').val().trim();
        newURL = queryURL + "&q=" + searchTerm; 
        numRecords = $('#numRecords').val();
        startYear = $('#startYear').val().trim();
        endYear = $('#endYear').val().trim();

    });




      



