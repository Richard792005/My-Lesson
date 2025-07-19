// kita buat dark mode dengan local storage 
const toggle = document.querySelector('.toggle')
let tema = localStorage.getItem('tema')

if (tema == null) {
    localStorage.setItem('tema', 'light')
}

if (tema === 'dark') {
    darkMode()
} else {
    lightMode()
}


toggle.addEventListener('click', function (event) {
    alert('ok')
    tema = localStorage.getItem('tema')
    if (tema === 'light') {
        darkMode()
    } else {
        lightMode()
    }
    event.preventDefault()
})

function darkMode() {
    document.body.classList.remove('lightMode')
    document.body.classList.add('darkMode')
    toggle.textContent = 'light Mode'
    localStorage.setItem('tema', 'dark')
}
function lightMode() {
    document.body.classList.remove('darkMode')
    document.body.classList.add('lightMode')
    toggle.textContent = 'Dark Mode'
    localStorage.setItem('tema', 'light')
}



const h1 = document.querySelector('h1')
const tambah = document.querySelector('.tambah')
const hapus = document.querySelector('.hapus')

let nama = localStorage.getItem('nama')

if (!nama) {
    nama = prompt('Masukan nama Anda')
    localStorage.setItem('nama', nama)
}
h1.innerHTML = `Halo! ${nama}`

tambah.addEventListener('click', function(e) {
    nama = prompt('masukan Nama baru anda !')
    localStorage.setItem('nama', nama)
    h1.innerHTML = `Halo! ${nama}`
    
    e.preventDefault()
})

hapus.addEventListener('click', function (e) {
    localStorage.removeItem('nama')
})