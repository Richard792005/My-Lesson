const semut = document.getElementsByClassName('semut')[0]
const orang = document.getElementsByClassName('orang')[0]
const gajah = document.getElementsByClassName('gajah')[0]



function komputer() {
    let array = [gajah, semut, orang]
    let angkaRandom = Math.random()
    const gambarKomp = document.querySelector('.image-komputer')
    const parents = document.querySelector('div[class = area-komputer')
    if (angkaRandom < 0.34) {
        // angkaRandom = gajah
        // ganti gambar komp 
        angkaRandom = array[0].cloneNode(true)
        parents.replaceChild(angkaRandom, gambarKomp)
        angkaRandom.classList.add('image-komputer')


        // kembalikan isi
        return angkaRandom

    }

    else if (angkaRandom >= 0.35 && angkaRandom <= 0.67) {
        angkaRandom = array[1].cloneNode(true)
        parents.replaceChild(angkaRandom, gambarKomp)
        angkaRandom.classList.add('image-komputer')
        return angkaRandom
    }

    else {
        angkaRandom = array[2].cloneNode(true)
        parents.replaceChild(angkaRandom, gambarKomp)
        angkaRandom.classList.add('image-komputer')
        return angkaRandom
    }

}


komputer()

// gunakan jeda waktu 



// buat even handler setiap tombol
let player;
let array = [orang, semut, gajah]
array.forEach(function (e, indeks) {

    e.addEventListener('click', function () {
        if (indeks == 0) {
            player = array[0]
        }
        else if (indeks == 1) {
            player = array[1]
        }

        else if (indeks == 2) {
            player = array[2]
        }
        setTimeout(function () {
            return Hasil()

        }, 1000)

        loadingGambar()
    })

}, 1000)


// sekarang kita bikin fungsi hasil nya 



function Hasil(a, b) {
    let hasil = document.getElementsByClassName('hasil')[0]
    // bersihkan dulu sebelum di isi 

    hasil.innerHTML = ''
    let pBaru = document.createElement('p')
    let objectTeks = {
        string1: document.createTextNode('SERI'),
        string2: document.createTextNode('KALAH'),
        string3: document.createTextNode('MENANG')

    }
    if (komputer().classList[0] == player.classList[0]) {
        // letakan string di MENANG 
        pBaru.appendChild(objectTeks.string1)
        hasil.appendChild(pBaru)

        //kembalikan isi
        return pBaru
    }

    else if (player.classList[0] === 'gajah' && komputer().classList[0] === 'orang' ||
        player.classList[0] === 'semut' && komputer().classList[0] === 'orang' ||
        player.classList[0] === 'orang' && komputer() === 'gajah') {

        pBaru.appendChild(objectTeks.string2)
        hasil.appendChild(pBaru)
        return pBaru
    }

    else {
        pBaru.appendChild(objectTeks.string3)
        hasil.appendChild(pBaru)
        return pBaru
    }


}
// sekarang buat gambar interval

function loadingGambar() {
    let i = 0
    const gambarKomp = document.getElementsByClassName('image-komputer')[0]
    const waktuMulai = new Date().getTime()

    // agar bisa berhenti tidk infinity loop
    if (new Date().getTime() - waktuMulai > 1000) {
        clearInterval
        return
    }

    let array = [orang.classList[0], gajah.classList[0], semut.classList[0]]
    let arrayO = [orang, gajah, semut]
    const parents = document.querySelector('div[class = area-komputer')

    setInterval(function (e) {

        gambarKomp.setAttribute(`src`, `img/${array[i++]}.png`)

        // agar bisa berhenti tidk infinity loop gambar undefined
        if (i == array.length) {
            i = 0
        }

    }, 100)



}

