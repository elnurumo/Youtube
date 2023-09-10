const toggle = document.querySelector('#toggler')

const hidden = document.querySelectorAll('.hidden')

const sidebar = document.querySelector('#sidebar')

const brger = document.querySelector('#burger')

const nvbr_link = document.querySelectorAll('.navbar-link')

const icon = document.querySelectorAll(".nav")

const navname = document.querySelectorAll(".nav-name")

const bdy = document.querySelector(".dark")

const ball = document.querySelector('.ball')

const navbar_area = document.querySelector(".navbar-area")

const logo_alfabe = document.querySelectorAll(".logo-alfabe")

// const yt_icon = document.querySelectorAll(".yt-icon")


toggle.addEventListener('click', function (e) {
    bdy.classList.toggle("dark")
    bdy.classList.toggle("light")
    ball.classList.toggle("right")
})


for (let i = 0; i < navname.length; i++) {
    brger.addEventListener('click', function () {
        navname[i].classList.toggle("nav-name-js")
    })
}

for (let i = 0; i < hidden.length; i++) {
    brger.addEventListener('click', function changeDisplay() {
        hidden[i].classList.toggle("active-js")
    })
}

nvbr_link[0].classList.toggle("active")

for (let i = 0; i < nvbr_link.length; i++) {
    brger.addEventListener('click', function () {
        nvbr_link[i].classList.toggle("navbar-link-js")
    })
}

for (let i = 0; i < icon.length; i++) {
    brger.addEventListener('click', function () {
        icon[i].classList.toggle("nav-icon-js")
    })
}

brger.addEventListener('click', function changeDisplay2() {
    sidebar.classList.toggle("sidebar")
})





