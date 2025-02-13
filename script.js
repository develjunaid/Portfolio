var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw6hgOlElC_10QQynaVx3yKl1dN6ewixh-f1A9UGEw67mmpSZ8vEam5_qEceDxJq_WV/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})

window.onload = function () {
    setTimeout(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);  // 100 milliseconds (0.1 second) delay
}