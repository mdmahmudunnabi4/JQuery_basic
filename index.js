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

