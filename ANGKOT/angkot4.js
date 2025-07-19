//Tugas 3

// Penggunaan if else if 

// Mobil 1 - 7 beroperasi , Mobil 8 lembur, Mobil 9 - 10 tdk beroperasi

console.log('\n')
console.log('Di bawah ini kondisi if else if')
console.log('\n')

// let nilaiAwal = 1

// while (nilaiAwal <= 10){
//     if (nilaiAwal <= 7) {
//         console.log(`Angkot No. ${nilaiAwal} beroperasi dengan baik`)
//     }else if (nilaiAwal >= 9) {
//         console.log(`Angkot No. ${nilaiAwal} sedang tidak beroperasi`)
//     }else {
//         console.log(`Angkot No. ${nilaiAwal} sedang lembur`)
//     }
// nilaiAwal++
// }


let nilaiAwal = 1
let beroperasi = 7
let jumlahMobil = 10

while (nilaiAwal <= jumlahMobil){
    if (nilaiAwal <= beroperasi) {
        console.log(`Angkot No. ${nilaiAwal} beroperasi dengan baik.`)
    }else if (nilaiAwal === 8) {
        console.log(`Angkot No. ${nilaiAwal} sedang lembur.`)
    }else {
        console.log(`Angkot No. ${nilaiAwal} sedang tidak beroperasi.`)
    }
nilaiAwal++
}



// Tugas 4
 
// Angkot 1 - 6 beroperasi, 7 dan 9 tdk beroperasi, 8 dan 10 lembur

console.log('\n')
console.log('Di bawah ini kondisi kompleks lagi')
console.log('\n')


nilaiAwal = 1
jumlahMobil = 10
beroperasi = 6

while (nilaiAwal <= jumlahMobil) {
    if (nilaiAwal <= beroperasi) {
        console.log(`Angkot No. ${nilaiAwal} sedang beroperasi.`)
    }else if (nilaiAwal === 8) {
        console.log(`Angkot No. ${nilaiAwal} sedang lembur.`)
    }else if (nilaiAwal === 10){
        console.log(`Angkot No. ${nilaiAwal} sedang lembur.`)
    }else {
        console.log(`Angkot No. ${nilaiAwal} sedang tidak beroperasi.`)
    }
nilaiAwal++
}
// bisa juga menggunakan atau || dalam kondisi nya

//else if (nilaiAwal === 8 || nilaiAwal === 10 ) //


// Tugas 5 

// Angkot 1 - 4 beroperasi, 5, 8, dan 10 lembur, 6, 7, dan 9 tidak beroperasi

console.log('\n')
console.log('Di bawah ini kondisi lebih kompleks')
console.log('\n')

nilaiAwal = 1
jumlahMobil = 10
beroperasi = 6

while (nilaiAwal <= jumlahMobil) {
    if (nilaiAwal <= beroperasi && nilaiAwal !== 5) {
        console.log(`Angkot No ${nilaiAwal} beroperasi dengan baik.`)
    }else if (nilaiAwal === 5 || nilaiAwal === 8 || nilaiAwal === 10) {
        console.log(`Angkot No ${nilaiAwal} sedang lembur.`)
    }else {
        console.log(`Angkot No ${nilaiAwal} sedang tidak beroperasi.`)
    }
nilaiAwal++
}


// Membuat segitiga ke atas dan ke bawah

// nilaiAwal = 1
// let nama = parseInt(prompt('Masukan Angka 1 - 20'))

// if (nama <= 20) {
//     alert(`Angka yang kamu masukan adalah ${nama}`)
//     console.log(typeof(nama))
// }else {
//     alert('Angka yang kamu masukan melebihi indeks !')
//     confirm('Harap coba lagi !')
//    let pr =  parseInt(prompt('Masukan Angka valid !'))
//    if (pr > 20){
//     var test = true
//     alert('Masukan lagi kali ini !')
//     while (test === true){
//         prompt(' Masukan angka lagi !')

//     test = confirm('Mau coba lagi ?') // output = true n false
//     }

//    }
// }
    

// while (nilaiAwal <= 3) {
    
    
// nilaiAwal = nilaiAwal + 1
// }



// Bintang 

nilaiAwal = 10 
bintang = '' 

while (nilaiAwal > 0) {
    for(nilaiKemudian = 0; nilaiKemudian < nilaiAwal; nilaiKemudian++){
        bintang = bintang + '*'
    }
    bintang = bintang + '\n'
nilaiAwal--
}

console.log(bintang)