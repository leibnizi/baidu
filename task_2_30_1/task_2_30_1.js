function notification1() {
    document.getElementById("demo1").innerHTML='必填，长度为4-16个字符'
}

function mo1() {
    var user1 = document.querySelector('#msg1')
    if (user1.value == '') {
        document.getElementById("demo1").innerHTML='名称不能为空'
        document.getElementById("demo1").style.color ='red'
        document.getElementById("msg1").style.borderColor ='red'
    }
    else if (user1.value.length > 3 && user1.value.length < 17) {
        document.getElementById("demo1").innerHTML='名称可用'
        document.getElementById("demo1").style.color ='green'
        document.getElementById("msg1").style.borderColor ='green'
    }
}

function notification2() {
    document.getElementById("demo2").innerHTML='必填，长度为4-16个字符'
}

function mo2() {
    var user2 = document.querySelector('#msg2')
    if (user2.value == '') {
        document.getElementById("demo2").innerHTML='密码不能为空'
        document.getElementById("demo2").style.color ='red'
        document.getElementById("msg2").style.borderColor ='red'
    }
    else if (user2.value.length > 3 && user2.value.length < 17) {
        document.getElementById("demo2").innerHTML='密码可用'
        document.getElementById("demo2").style.color ='green'
        document.getElementById("msg2").style.borderColor ='green'
    }
}

function notification3() {
    document.getElementById("demo3").innerHTML='请确认密码！'
}

function mo3() {
    var user3 = document.querySelector('#msg3')
    var user2 = document.querySelector('#msg2')
    if (user3.value == user2.value) {
        document.getElementById("demo3").innerHTML='密码一致'
        document.getElementById("demo3").style.color ='green'
        document.getElementById("msg3").style.borderColor ='green'
    }
    else {
        document.getElementById("demo3").innerHTML='密码不一致'
        document.getElementById("demo3").style.color ='red'
        document.getElementById("msg3").style.borderColor ='red'
    }
}

function notification4() {
    document.getElementById("demo4").innerHTML='请输入邮箱账号'
}

function mo4() {
    var user4 = document.querySelector('#msg4')
    var x = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
    if (x.test(user4.value)) {
        document.getElementById("demo4").innerHTML='邮箱可用！'
        document.getElementById("demo4").style.color ='green'
        document.getElementById("msg4").style.borderColor ='green'
    }
    else {
        document.getElementById("demo4").innerHTML='邮箱格式不正确！'
        document.getElementById("demo4").style.color ='red'
        document.getElementById("msg4").style.borderColor ='red'
    }

}

function notification5() {
    document.getElementById("demo5").innerHTML='请输入手机号码'
}

function mo5() {
    var x = /0?(13|14|15|18)[0-9]{9}/
    var user5 = document.querySelector('#msg5')
    if (x.test(user5.value)) {
        document.getElementById("demo5").innerHTML='手机号码可用！'
        document.getElementById("demo5").style.color ='green'
        document.getElementById("msg5").style.borderColor ='green'
    }
    else {
        document.getElementById("demo5").innerHTML='手机号码不可用！'
        document.getElementById("demo5").style.color ='red'
        document.getElementById("msg5").style.borderColor ='red'
    }
}

function commit() {
    var user1 = document.querySelector('#msg1')
    var user2 = document.querySelector('#msg2')
    var user3 = document.querySelector('#msg3')
    var user2 = document.querySelector('#msg2')
    var user4 = document.querySelector('#msg4')
    var x = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
    var y = /0?(13|14|15|18)[0-9]{9}/
    var user5 = document.querySelector('#msg5')
    if (user1.value.length < 3 || user1.value.length > 17) {
        alert('名称错误')
    }
    else if (user2.value.length < 3 || user2.value.length > 17) {
        alert('密码错误')
    }
    else if (user3.value !== user2.value) {
        alert('密码不一致')
    }
    else if (!x.test(user4.value)) {
        alert('邮箱格式错误')
    }
    else if (!y.test(user5.value)) {
        alert('手机号码错误')
    }
    else {
        alert('符合要求！')
    }
}
