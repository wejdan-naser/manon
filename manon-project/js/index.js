let parintburger = document.querySelector("#nav-list");

function thelist() {
    if (parintburger.classList.contains("hide")) {
        parintburger.classList.remove("hide");
    } else
        parintburger.classList.add("hide");

};

// to save email and name when click in submt 
let inputemail = document.getElementById('inputemail')
let inputname = document.getElementById('inputname')
let submitbtn = document.querySelector('.submit')
let message = document.getElementById('message')

//create     
submitbtn.addEventListener('click', function () {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputemail.value.match(pattern) && inputname.value != '') {
        message.innerHTML = "hello " + inputname.value + " we are so happy to have you";
        cleaning()
        console.log(inputemail.value,inputname.value)
        message.style.cssText = `
        color: #8C6C5A;
        font-size: 30px;
        margin-top: 9px;
      `
    } else {
        message.innerHTML = "you have to write the emali correctly or name"
        console.log("no")
        message.style.cssText = `
        color:red;
        font-size: 30px;
        margin-top: 9px;
      `
    }

})

function cleaning() {
    inputname.value = ''
    inputemail.value = ''
}

