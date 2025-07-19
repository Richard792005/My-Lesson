// tugas 1 // 


// parentElement
// parentNode
// nextSibling
// nextElementsibling
// previousSibling
// previousElementSibling



//Kita mau agar ketika tombol x di pencet , maka seluruh elemen hilang (elemen gambar) 

// ambil tombol x 
let v = document.querySelector('.card span[class = close]')



v.addEventListener('click', function () {

    // ambil parent untuk removechild
    const parent = document.querySelector('div[class = container')
    //

    // ambil objek nya yg mau di hapus 
    const card = document.getElementsByClassName('card')[0]
    const img = document.getElementsByTagName('img')
    const span1 = document.querySelector('span[class = nama]')
    const span2 = document.querySelector('span[class = telp]')


    // ada dua method atau cara ya 
    // parent.removeChild(card)
    // card.style.display = 'none'

})

// sekarang kalau ada beberapa tombol card

let tombolXAll = document.querySelectorAll('.card span[class = close]')

tombolXAll.forEach(function (e, indeks) {

    e.addEventListener('click', function (el) {

        let parent = document.querySelector('.container')
        const card = document.getElementsByClassName('card')


        // sekarang kita hapus card 
        console.log(`card ke - ${indeks} hapus semua isi`)
        // parent.removeChild(card[indeks])
        


        

    })


})

// atau bisa juga menggunakan dom traversal 

tombolXAll.forEach(function(e, indeks) {

    e.addEventListener('click', function(event) {
        const card = document.getElementsByClassName('card')

        console.log(`Card ke - ${indeks} hapus isi `)
        event.target.parentElement.parentElement.removeChild(card[indeks])   
        // event.preventDefault()
        // event.stopPropagation()
        
        

    })


})


const card = document.getElementsByClassName('card')



console.log(card)


