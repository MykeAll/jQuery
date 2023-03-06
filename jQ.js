function func1() 
{
    // $(element name).action()
    // document.getElementsByTagName(element name)
    // $("div").css('background-color', 'orange');
    $(".para").css('font-style', 'italic');
    // $("#div1,#div5").css('background-color','green');
    $("#div1,#div5").css('color','white');
    $("#div1,li").css('background-color','purple');

    // $("div > p").fadeToggle();
    // $("div p").fadeToggle();
    // $("p:first").fadeToggle();
    // $("p:first").fadeToggle();
    // $("li:odd").fadeToggle();
    $("li:even").fadeToggle();
}
function func2() 
{
    // $(element name).action()
    // document.getElementsByTagName(element name)
    $("#div3").css('background-color', 'orange');
    $("#p1").css('font-style', 'italic');
}
