// document.querySelector = $
$("h1").text("Hi")

$(".my-div h1").text("Goodby")

$('#p1').text("Hello")

$('#p2').html("<b>Wellcom</b>")

$('#p3').append(" <b>goodbye</b>")


$('#p4').prepend("<b>goodbye</b> ")


const myPara6 = $("<p></p>").text('This is paragraph 6')
$("#p5").after(myPara6)

const myPara7 = $("<p></p>").text('This is paragraph 7')
$("#p6").before(myPara7)

//  attribute manipulation 

// const myattr = document.querySelector("a").getAttribute("herf")

//  document.querySelector("a").setAttribute("href", "https://www.studywithanis .com")

$("a").attr("href", "https://www.studywithanis .com")


// css style manipulating

$('h2').css("color", "red")
$("h2").css("font-size", "50px")
$("h2").css("font-style", "italic")

$("h3").css({"color":"green", "font-size": "40px"})

// document.querySelector("h4").classList.add("style1")
// document.querySelector("h4").classList.remove("style1")

$("h4").addClass("style1 style2")