// $(document).ready(function(){});
//  Question for Omar - can you explain why for some of our excercises $(document).ready(function(){} were at the top
// but for all these API activities, they are everywhere in the page? 
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + keyAPI + "&q=";
var keyAPI = "63ba1dba-02a5-4884-9453-68ae543878b6";
var articleCounter = 0;
var startYear = 0;
var endYear = 0;


function startQuery(){
    $.ajax({
        url: queryURL,
        method: "GET",

    }).then(function (response) {
        console.log(response);

    });
}
startQuery();    //getting error in console 401 unauthorized


