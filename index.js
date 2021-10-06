const title = document.getElementById('title')
const date = document.getElementById('date')
const time = document.getElementById('time')
const des = document.getElementById('des')
const addBtn = document.getElementById('addBtn')
const deleteBtn = document.getElementById('deleteBtn')
const list = document.getElementById('list')

const listContent = []

function render() {
    let htmlStr = ''

    listContent.forEach(function (item) {
        htmlStr = htmlStr + `
        <div class="item">
            <div>
                <p>Title：${item.title}</p>
                <p>Time：${item.date} ${item.time}</p>
                <p>Content：${item.des}</p>
            </div>      
        </div>
        `
    })

    list.innerHTML = htmlStr
}

addBtn.addEventListener('click', function () {
    
    listContent.unshift({
        title: title.value,
        date: date.value,
        time: time.value,
        des: des.value
    })

    render()

})

deleteBtn.addEventListener('click', function () {
    listContent.pop()

    render()
})