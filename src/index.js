import $ from 'jquery'

$(
function()
{
    console.log("testaadadf")
    $('li:odd').css('background-color','black')
    $('li:even').css('background-color','pink')
})