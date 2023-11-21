const hr = document.getElementById("hr");
const mi = document.getElementById("mi");
const sec = document.getElementById("sec");
const ampm = document.getElementById("ampm");

function Time(time){
    return time.toString().padStart(2, "0");
}
function isampm(hours){
    return hours >= 12 ? "PM" : "AM";
}
function clock(){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    hr.textContent = Time(h);
    mi.textContent = Time(m);
    sec.textContent = Time(s);
    ampm.textContent = isampm(h);
}

setInterval(clock, 1000);