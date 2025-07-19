// manipulation node 

// ada beberapa manipulation node 

// 1. document.createElement('h1')
// 2. document.createTextNode('Aku h1 baru')
// 3. parentNode.AppendChild('nama class yang mau di simpan')
// 4. parentNode.insertBefore('elemen baru', 'masukan sebelum elemen : ')
// 5. parentNode.removeChild('elemen yang diremove')
// 6. parentNode.replaceChild('elemen yang baru', 'elemen yg mau ditimpa')


function ubahSlider () {
    
    console.log(slider1.value)
    // buat beberapa r g b dengan kode value 

    var r = slider1.value 
    var g = slider1.value
    var b = slider1.value

    // ambil body dan terabkan r g b

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
    
}

function ubahSlider2 () {
    
    console.log(slider1.value)
    // buat beberapa r g b dengan kode value 
    
    var r = slider2.value 
    var g = slider2.value
    var b = slider2.value
    
    // ambil body dan terabkan r g b
    
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`


}

function ubahSlider3 () {
    
    console.log(slider1.value)
    // buat beberapa r g b dengan kode value 
    
    var r = slider3.value 
    var g = slider3.value
    var b = slider3.value
    
    // ambil body dan terabkan r g b
    
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`


}

var h1Baru = document.createElement('h1')
var h1BaruTeks = document.createTextNode('Judul baru dari js')

h1Baru.appendChild(h1BaruTeks)

var judul = document.getElementById('judul')
// masukan ke dalam judul 

var hasil = judul.appendChild(h1Baru)
hasil.style.fontSize = '30px'

// parent node
var ul = document.querySelector('section#b ul')

// node yang jadi target sebelum
var li = document.querySelector('ul li:nth-child(3)')

ul.insertBefore(h1Baru, li)

ul.removeChild(li)

