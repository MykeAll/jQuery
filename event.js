/*
function func1() {
    document.getElementById("img1").style.width="500px";
}
*/

/*
$("button").click(func1);
function func1() {
    $("#img1").css('width','500px');
}
*/

/*
$("button").click(function() {
    $("#img1").css('width','500px');
});
*/

/*
$("document").ready(function() {
$("button").dblclick(function() {
    $("#img1").css('width','500px');
});

});
*/

/*
$("document").ready(function() {

$("#img1").mouseenter(function() {
    $("#img1").css('width','400px');
});

$("#img1").mouseleave(function() {
    $("#img1").css('width','230px');
});

});
*/

$("document").ready(function() {

$("#img1").hover(func1,func2) 
function func1() {
    $("#img1").css('width','400px');
}

function func2() {
    $("#img1").css('width','200px');
}


});