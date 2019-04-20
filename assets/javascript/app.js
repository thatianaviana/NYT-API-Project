// // $(document).ready(function(){});
// //  Question for Omar - can you explain why for some of our excercises $(document).ready(function(){} were at the top
// // but for all these API activities, they are everywhere in the page? 
// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=HG3uptoIezihqtSC3MgKA7Aqmb7ZyzBQ";
// // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + keyAPI + "&q=";
// var keyAPI = "63ba1dba-02a5-4884-9453-68ae543878b6";
// var articleCounter = 0;
// var startYear = 0;
// var endYear = 0;




// $("#buttons-view").on("click", "button",function() {

    var apiKey = "UDp81ZvSBZ7G1huAhXF0aVboCxXxVxt6"; 

    var searchTerm = "";
    var numRecords = 0;
    var startYear = 0;
    var endYear = 0;
    var articleCounter = 0;

    $("#searchButton").on('click', function(){
        $("#contentArea").empty();

        searchTerm = $("#search-term").val();
        numRecords = $("#numRecordsSelected").val();
        startYear = $("#start-year").val();
        endYear = $("#end-year").val();
        console.log(searchTerm);
        console.log(numRecords);
        console.log(startYear);
        console.log(endYear);
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm +  "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101&api-key=" + apiKey;

        $.ajax ({
            url : queryURL,
            method: "GET",
        }).then (function(response){
            console.log(response);

            for (var i = 0; i < numRecords; i++) {
                var newDiv = $("<div>");
                var headline = $("<h4>").text(response.response.docs[i].headline.main);
                var p = $("<p>").text(response.response.docs[i].lead_paragraph);
                var url = $("<a href='" + response.response.docs[i].web_url + "'>");
                url.append(headline);
                newDiv.append(url);
                newDiv.append(p);

                $("#contentArea").append(newDiv);

            }

        })


    })
    //do another event using the clear ID on click, empty everything
    $("#clearButton").on('click', function(){
        $("#contentArea").empty();
    })
  



    // function runQuery(queryURL) {

    // $.ajax({ url: queryURL, method: "GET"})
    //     .done(function(data) {
        
    //     var results = response.data; 
           

    //     //clears content area
    //     $('#contentArea').empty();

    //         for (var i = 0; i < queryURL; i++) {
    //             console.log(response.docs[i].section_name);
            
    //         //send information to HTML

    //         var c = $('<div>');
    //         c.addClass('area');
    //         c.attr('id', queryURL[i]);
            
    //         //Appends to Content Area
    //         $('#contentArea').append(c);

    //         }});

    //     }

    // $('#searchBtn').on('click', function() {

    //     searchTerm = $('#search').val().trim();
    //     newURL = queryURL + "&q=" + searchTerm; 
    //     numRecords = $('#numRecords').val();
    //     startYear = $('#startYear').val().trim();
    //     endYear = $('#endYear').val().trim();

    // });




      


