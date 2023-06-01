const view = document.getElementById('view')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const d = document.getElementById('date')

let year = new Date().getFullYear()
let month = new Date().getMonth()+1

let date = new Date(year, month-1)
d.innerText = `${date.getMonth()+1}:${date.getFullYear()}`
let html = ""

next.addEventListener('click', () => {
    month += 1
    date = new Date(year, month-1)

    html = ""
    d.innerText = `${date.getMonth()+1}:${date.getFullYear()}`
    fillCalendar()
})

prev.addEventListener('click', () => {
    month -= 1
    date = new Date(year, month-1)

    html = ""
    d.innerText = `${date.getMonth()+1}:${date.getFullYear()}`
    fillCalendar()
})

function fillCalendar(){
    let calendar = [[]]
    const firstDay = getDayOfWeek(date.getDay())

    for(i = 0; i < firstDay; i++){ // Пустые поля
        calendar[0].push('')
    }

    const newDate = new Date(date.getFullYear(), date.getMonth()+1, 0)
    const lastDay = newDate.getDate()

    let week = 0
    for(i = 0; i < lastDay; i++){ // Дни недели
        calendar[week].push(i+1)
        if(calendar[week].length === 7){
            calendar.push([])
            week += 1
        }
    }

    renderCalendar(calendar)
}

function renderCalendar(calendar){
    for(let week of calendar){
        html += `<tr>`
        for(let day of week){
            html += `<td>${day}</td>`
        }
        html += `</tr>`
    }
    view.innerHTML = html
}


function getDayOfWeek(day){
    if (day == 0) day = 7
    return day - 1
}

fillCalendar()
