var log = function() {
    console.log.apply(console, arguments)
}

var e = function(selector) {
    return document.querySelector(selector)
}

var templateTodo = function() {
    var t = `
        <label for="area">学校</label>
        <input type="text" id="area" name="area" list="areaList"  oninput="show()">

        <datalist id="areaList">
          <label for="altArea">or pick a fruit</label>
          <select id="suggestion" name="altArea">
            <option>北京</option>
            <option>上海</option>
            <option>广东</option>
            <option>江苏</option>
            <option>浙江</option>
            <option>天津</option>
            <option>福建</option>
            <option>山东</option>
          </select>
        </datalist>
    `
    return t
}
var templateTodo2 = function() {
    var t = `
          <label for="school">学校</label>
          <input type="text" id="school" name="school" list="schoolList">
          <datalist id="schoolList">
            <label for="altSchool"></label>
            <select id="areaSchool" name="altSchool">
              <option>清华大学</option>
              <option>北京大学</option>
              <option>人民大学</option>
            </select>
          </datalist>
    `
    return t
}

var templateTodo3 = function() {
    var t = `
          <label for="school3">学校</label>
          <input type="text" id="school3" name="school3" list="schoolList3">
          <datalist id="schoolList3">
            <label for="altSchool3"></label>
            <select id="areaSchool3" name="altSchool3">
              <option>上海交通大学</option>
              <option>复旦大学</option>
              <option>同济大学</option>
            </select>
          </datalist>
    `
    return t
}

var templateTodo4 = function() {
    var t = `
          <label for="school4">学校</label>
          <input type="text" id="school4" name="school4" list="schoolList4">
          <datalist id="schoolList4">
            <label for="altSchool4"></label>
            <select id="areaSchool4" name="altSchool4">
              <option>南京大学</option>
              <option>东南大学</option>
              <option>南京理工大学</option>
            </select>
          </datalist>
    `
    return t
}

var templateTodo5 = function() {
    var t = `
          <label for="school5">学校</label>
          <input type="text" id="school5" name="school5" list="schoolList5">
          <datalist id="schoolList5">
            <label for="altSchool5"></label>
            <select id="areaSchool5" name="altSchool5">
              <option>中山大学</option>
              <option>华南理工大学</option>
              <option>暨南大学</option>
            </select>
          </datalist>
    `
    return t
}

var templateTodo6 = function() {
    var t = `
          <label for="job">就业单位</label>
          <input type="text" id="job">
    `
    return t
}

var selectContainer = e('#select1')
selectContainer.addEventListener('click', function(event){
    var todoContainer = e('#id-div-container')
    if (!e('#areaList')) {
      var t = templateTodo()
      todoContainer.insertAdjacentHTML('beforeend', t)
    }
})

var show = function() {
    if (e('#area').value == '北京') {
        var t = templateTodo2()
        var todoContainer = e('#id-div-container')
        todoContainer.insertAdjacentHTML('beforeend', t)
    }
    else if (e('#area').value == '上海') {
        var a = templateTodo3()
        var todoContainer = e('#id-div-container')
        todoContainer.insertAdjacentHTML('beforeend', a)
        log(33)
    }
    else if (e('#area').value == '广东') {
        var t = templateTodo5()
        var todoContainer = e('#id-div-container')
        todoContainer.insertAdjacentHTML('beforeend', t)
    }
    else if (e('#area').value == '江苏') {
        var t = templateTodo4()
        var todoContainer = e('#id-div-container')
        todoContainer.insertAdjacentHTML('beforeend', t)
    }
}

var selectContainer = e('#select2')
selectContainer.addEventListener('click', function(event){
    var todoContainer = e('#id-div-container')
    if (!e('#job')) {
      var t = templateTodo6()
      todoContainer.insertAdjacentHTML('beforeend', t)
    }
})
