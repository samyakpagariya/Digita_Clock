const clock = document.getElementById('clock')

let date = new Date()
const current_date = date.toLocaleDateString();
const banner = document.getElementById('banner');
banner.innerHTML = current_date

setInterval(function(e){
    let date = new Date()
    console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
} , 1000)