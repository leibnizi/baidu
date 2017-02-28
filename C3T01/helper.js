function valid1() {
    var user1 = document.querySelector('#msg1')
    var x = String(user1.value).length
    if (x < 17 && x > 3) {
        document.getElementById("demo1").innerHTML='congratulations'
    }
    else {
        document.getElementById("demo1").innerHTML='false'
    }
}

var user2 = document.querySelector('#msg2')
var zm = /[A-Za-z]{1}/
var sz = /\d{1}/
var fh = /((?=[\x21-\x7e]+)[^A-Za-z0-9]){1}/
function valid2() {
    if (zm.test(user2.value) && sz.test(user2.value) && fh.test(user2.value)) {
        document.getElementById("demo2").innerHTML='congratulations';
    }
    else {
        document.getElementById("demo2").innerHTML='false';
    }
}

var user3 = document.querySelector('#msg3')
var hz = /([\u4e00-\u9fa5]{2})/
function valid3() {
    if (hz.test(user3.value)) {
        document.getElementById("demo3").innerHTML='congratulations';
    }
    else {
        document.getElementById("demo3").innerHTML='false';
    }
}
