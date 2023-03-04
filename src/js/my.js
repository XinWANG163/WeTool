// Renderer Process
const { ipcRenderer } = window.require('electron')
const electron = require('electron');


// 更换图片
function changep() {
    var el = document.getElementById('uploadFileTempSeat')
    el.click();
}

function getImage(event) {
    const file = document.getElementById('uploadFileTempSeat').files[0]
    this.uploadFileName = file.name
    var el = document.getElementById('photo')
    el.src = window.URL.createObjectURL(file)
}


function closeWindow() {

    ipcRenderer.send("close");

}

function changeName() {
    alert("成功修改用户名！")

}

function jinggao() {
    alert("无法从这里退出！")
}


function deleteItem(event) {
    var con = confirm("确定删除记录？")
    if (con == true) {
        var btn = event.target.parentNode;
        var item = btn.parentNode;
        item.remove();
        alert("成功删除记录！")
    }

}

// 进度条取随机数
let n = 100;
n += Math.ceil(Math.random() * 700);
let i = -1;

// 正在发送页面
function showSending() {
    // 改变按钮颜色
    var ontime = document.getElementById("ontime")
    ontime.style.borderBottom = "2px solid rgb(35, 90, 250)"
    ontime.style.color = "rgb(35, 90, 250)"
    var record = document.getElementById("record")
    record.style.border = "none"
    record.style.color = "black"
    var task = document.getElementById("task")
    task.style.border = "none"
    task.style.color = "black"
    document.getElementById("sendingContent").style.display = "inline-block"
    document.getElementById("record-content").style.display = "none"


    // 将当前数据的条数改为n
    var load = document.getElementById('load');
    var result = document.getElementById('result');
    loadResult.innerText = '0/';
    var timer = setInterval(function() {
        if (i < n) {
            i += 1;
            load.style.width = (i / n) * 790 + 'px';
            loadResult.innerText = i + '/';
        }
    }, 7000);
}

function changeSendingp(event) {

    var el = document.getElementById('sending_img')
    el.click();
}

function getSendingImage(event) {
    const file = document.getElementById('sending_img').files[0]
    this.uploadFileName = file.name
    var el = document.getElementById('wxpho-sending')
    el.src = window.URL.createObjectURL(file)
}
let list = ""

function loadingRecord() {
    if (list == "") {
        var number = 1 + Math.ceil(Math.random() * 800) // 发送群数
        item_btns = '<div class="task-item-btns"><input type="button" class="task-complete" disabled="disabled" value="完成"><input type="button" class="task-delete" value="删除" onclick="deleteRecord(event)"></div>'
        item_info = '<div class="text-info-record"><input type="text" id="input-send-time" value="今天 14:36:16"><input type="text" class="text-type" value="1文本/1图片">'
        item_info2 = '<input type="text" class="send-number" value="567个群"><input type="text" class="send-type" value="即时群发"><input type="text" class="x" value="标签:"></div>'

        round = Math.ceil(Math.random() * 30) + 5
        for (var i = 0; i < round; i++) {
            item_img = '<img class="wxpho-record " src="../../assets/wx' + (i % 6) + '.png" onclick="changeRecordp(event)">'
            img_input = '<input style="display:none" class="record_img" type="file" onchange="getRecordImage(this)">'
            list += '<div class="task-item">' + item_img + img_input
            list += '<div class="outer-record"><span class="sp-text-record"> 文本 </span><div class="cover-record" onclick="showTextContent(event)">'
            list += '<div class="text-content-record">' + "我是简单的第" + i + "条图片数据，长度很长，你可能看不完"
            list += '</div></div>' + item_info + item_info2 + '</div>' + item_btns + '</div>'
        }
        var ul = document.getElementById("show-record-items");
        ul.innerHTML = list
    } else {
        ul.innerHTML = list
    }
}

// 显示记录页面
function showRecord() {
    // 改变按钮颜色
    var record = document.getElementById("record")
    record.style.borderBottom = "2px solid rgb(35, 90, 250)"
    record.style.color = "rgb(35, 90, 250)"
    var ontime = document.getElementById("ontime")
    ontime.style.border = "none"
    ontime.style.color = "black"
    var task = document.getElementById("task")
    task.style.border = "none"
    task.style.color = "black"
    document.getElementById("sendingContent").style.display = "none"
    document.getElementById("record-content").style.display = "inline-block"
}

// 删除记录
function deleteRecord(event) {
    var el = event.target.parentNode.parentNode
    el.remove()
        // alert(event.target.parentNode.parentNode.className)

}

// 更换记录图片
function changeRecordp(event) {

    var img = event.target
    img.setAttribute("id", "imgReco")
    var el = event.target.nextSibling
    el.setAttribute("id", "changeImgRe")
    el.click();
}

function getRecordImage(event) {
    const file = document.getElementById('changeImgRe').files[0]
    this.uploadFileName = file.name
    document.getElementById('changeImgRe').removeAttribute("id")
    var el = document.getElementById('imgReco')
    el.src = window.URL.createObjectURL(file)
    document.getElementById('imgReco').removeAttribute("id")
}

// 定时任务
function showTask() {
    // 改变按钮颜色
    var task = document.getElementById("task")
    task.style.borderBottom = "2px solid rgb(35, 90, 250)"
    task.style.color = "rgb(35, 90, 250)"
    var ontime = document.getElementById("ontime")
    ontime.style.border = "none"
    ontime.style.color = "black"
    var record = document.getElementById("record")
    record.style.border = "none"
    record.style.color = "black"
    document.getElementById("sendingContent").style.display = "inline-block"
    document.getElementById("record-content").style.display = "none"

    document.getElementById("sendingBox").style.display = "none"

    document.getElementById("sendingTe").style.display = "none"
}

function getHight(content) {
    var div = document.getElementById("getHightDiv")
    div.innerHTML = content
    height = div.clientHeight
    div.innerHTML = ""
    return height
}

// 点击显示内容
function showTextContent(event) {

    // 显示详情内容面板
    var el = document.getElementById("show-detail-content")
    el.setAttribute('style', 'display:block');
    el.value = ""

    var exist = document.getElementById("show")
    if (document.getElementById("show")) {
        el.value = document.getElementById("show").textContent
    }


    // 改变按钮颜色
    var btnC = document.getElementById("detail-c")
    btnC.style.borderBottom = "2px solid rgb(35, 90, 250)"
    btnC.style.color = "rgb(35, 90, 250)"
    var btnTo = document.getElementById("detail-t")
    btnTo.style.border = "none"
    btnTo.style.color = "black"

    // 隐藏发送对象面板
    var ContentTo = document.getElementById("show-details-to")
    ContentTo.setAttribute('style', 'display:none');

    // 找到点击的那条记录
    var aLi = event.target;
    // alert(aLi.className)
    if (exist != null) {
        exist.removeAttribute('id')
    }
    if (aLi.tagName == "DIV") {
        if (aLi.className == "cover") {
            var contentEl = aLi.children[1]
        }

        if (aLi.className == "text-content" || aLi.className == "text-content-record") {
            var contentEl = aLi
        }
    }
    if (aLi.tagName == "SPAN" && aLi.className == "sendingText") {
        var contentEl = aLi.parentNode.children[1]
    }

    // 添加当前选中的记录的id属性，让编辑的时候可以方便找元素
    if (contentEl != null) {
        contentEl.setAttribute('id', 'show');
        var height = getHight(contentEl.textContent)
        document.getElementById("detail-content-div").style.height = height * 1.1 + 10 + "px"
        el.style.height = height * 1.1 + 10 + "px"
        var el = document.getElementById("show-detail-content")
        el.value = contentEl.textContent //显示记录内容在详情面板上
    }
}

// 点击显示发送对象
function showTo(event) {

    var el = document.getElementById("show-detail-content")
    el.setAttribute('style', 'display:none');


    var ContentTo = document.getElementById("show-details-to")
    ContentTo.style.overflow = "scroll"
    ContentTo.setAttribute('style', 'display:block');

    var btns = document.getElementsByClassName("edit-content")
    btns[0].setAttribute('style', 'display:none');

    // 改变按钮颜色
    var btnTo = document.getElementById("detail-t")
    btnTo.style.borderBottom = "2px solid rgb(35, 90, 250)"
    btnTo.style.color = "rgb(35, 90, 250)"
    var btnC = document.getElementById("detail-c")
    btnC.style.border = "none"
    btnC.style.color = "black"
    showSendTos()
}

function editTextContent(content) {
    var text = document.getElementById("show-detail-content")
    text.readOnly = false
    document.getElementById('change-content').setAttribute('style', 'display:block');

}

// 编辑之后改变内容
function changeTextContent(content) {
    var newText = document.getElementById("show-detail-content") //目前详情面板上的值
    var show = document.getElementById("show")
    show.textContent = newText.value //改变记录的值
    newText.readOnly = true
        // show.removeAttribute('id')
    document.getElementById('change-content').setAttribute('style', 'display:none');
}

// 群数据
var Users = ["贰阅读阅读(衣食住行)", "2022家电爆款", "二手交易...物品交易", "内衣美背紧身衣资源群",
    "木乐的行业新闻招工群", "全国制造业交流群", "同城电商选品交流群", "芜湖优选购物红包群", "开心快乐发红包群"
]