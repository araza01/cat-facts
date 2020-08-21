
const xhr = new XMLHttpRequest();
let xhrURL = "https://cat-fact.herokuapp.com/facts/random?amount=5";
xhr.open("GET", xhrURL, true);
xhr.onload = function() {
    let data = JSON.parse(this.responseText);
    if(this.status == 200 && this.readyState == 4) {
        catFact(data);
    }
};
xhr.send();

function catFact(arr) {
    let fact = "";
    for(let i = 0; i < 5; i++) {
        fact += "<ul>" + "<li>" + arr[i].text + "<br>" + "</li>" + "</ul>";
    }
    document.getElementById("cat-fact").innerHTML = fact;
}


$(document).ready(function() {
    $(document).ajaxStart(function() {
        $(".loader").show();
    });
    $(document).ajaxComplete(function() {
        $(".loader").hide();
    });
    $(".btn").click(function() {
        $("#cat-fact").load("https://cat-fact.herokuapp.com/facts/random?amount=5");
    });
});
