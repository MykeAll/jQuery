$("document").ready(function() {
    
    //Display
    $("#btn1").click(function() {
        $("#img1").hide(2000);
    })

    $("#btn2").click(function() {
        $("#img1").show(2000);
    })

    $("#btn3").click(function() {
        $("#img1").toggle(300);
    })


    //Fade
    $("#btn4").click(function() {
        $("#img1").fadeIn(2000);
    })

    $("#btn5").click(function() {
        $("#img1").fadeOut(2000);
    })

    $("#btn6").click(function() {
        $("#img1").fadeToggle(300);
    })


    //Slide
    $("#btn7").click(function() {
        $("#img1").slideUp(2000);
    })

    $("#btn8").click(function() {
        $("#img1").slideDown(2000);
    })

    $("#btn9").click(function() {
        $("#img1").slideToggle(300);
    })

    $("#btn10").click(function() {
        $("#img1").stop();
    })

    //Animate
    $("#btn").click(function() {
        $("#img2").animate({
            left:'150px',
            opacity:'0.1',
            height:'400px',
            width:'400px'
        },2000)
    })

});