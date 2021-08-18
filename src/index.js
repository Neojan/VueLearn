import $ from 'jquery'

$(
function()
{
    console.log("testaadadf")
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color','pink')
})