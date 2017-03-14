var drawing = document.querySelector('#drawing')

var context = drawing.getContext("2d")
context.fillStyle = "red"
context.fillRect(10, 10, 300, 250)

context.fillStyle = "blue"
context.fillRect(10, 100, 300, 50)

var e = function(selector) {
    return document.querySelector(selector)
}

var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

var button = e('button')
bindEvent(button, 'click', function() {
    context.moveTo(100, 100)
    console.log(12)
})
