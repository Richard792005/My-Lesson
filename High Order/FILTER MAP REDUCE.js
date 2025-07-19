// Penerapan Filter map dan reduce 
let tekss = Array.from(document.querySelectorAll(`ul li[data-nama]`))
console.log(tekss)

const coba = tekss.map(function(e,indeks) {

    return e.dataset.nama

})

console.log(coba)
// kita ambil / seleksi dom semua nya yang mengandung kata " java script"

let teks = Array.from(document.querySelectorAll(`ul li[data-duration]`))
console.log(teks)

// kita ubah ke array saja , karena sebelumnya itu kan html collection 
// Array.from(teks)


// kita map (petakan)  ambil dataset nya aja 
const teksJS = teks.filter(function(tek,indeks) {
    
    return tek.textContent.includes('JAVA SCRIPT')
    
})

console.log(teksJS)
// kita map (petakan)  ambil dataset nya aja 
const teksData = teksJS.map(function(tek, indeks) {

    return tek.dataset.duration 

})

console.log(teksData)

// kita ubah durasi ke integer , dan ubah dari menit ke detik
const waktu = teksData.map(function(waktu,indeks) {

    return waktu.split(':')

})

console.log(waktu)

const waktuParse = waktu.map(function(waktu, indeks) {

    return ((waktu[0]*60) + parseFloat(waktu[1]))
})

console.log(waktuParse)



// kita jumlahkan semua detik
const jumlahTime = waktuParse.reduce(function(waktu, indeks) {
    
    return waktu + indeks
    
},0)

console.log(`ini jumlah seluruh hasil diatas ${jumlahTime}`)

// ubah formatnya jadi jam menit dan detik
const jam = Math.floor(jumlahTime / 3600)
console.log(jam)

const menit = Math.floor(jumlahTime % (jam * 3600) / 60 )
console.log(menit)

const detik = (jumlahTime % (jam * 3600 ) - menit * 60)
console.log(detik)



// simpan atau tempel ke dom 
const jumlahVideoDom = document.querySelector(`span[class = Jumlah-video]`)
const Durasi = document.querySelector(`span[class = Total-durasi]`)

console.log(jumlahVideoDom)
console.log(Durasi)


jumlahVideoDom.textContent = teksJS.length
Durasi.innerHTML = `${jam} jam ${menit} menit ${detik} detik`
