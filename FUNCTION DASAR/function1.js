// // // MENGHITUNG VOLUME DUA KUBUS

// // // CONTOH KASUS PERTAMA MENGGUNAKAN FUNCTION



// // FUNCTION MENGHITUNG VOLUME KUBUS

function jumlahVolumeDuaKubus (x, y) {
    var volumeKubus1
    var volumeKubus2
    var total

    volumeKubus1 = x * x * x 
    volumeKubus2 = y * y * y

    total = volumeKubus1 + volumeKubus2
    return total
}

// KETAHUI KEDUA SISI KUBUS
function volumeKubus(x, y) {
    // KEDUA SISI MASING - MASING DI PANGKAT 3

    var eksponen = 3 
    var kubus1 = Math.pow(inputUser1, eksponen) // Pangkat 3 
    var kubus2 = Math.pow(inputUser2, eksponen) // Pangkat 3

    // HASIL NYA DI JUMLAHKAN 
    var hasil = kubus1 + kubus2
    return hasil;
}


var nilaiAwal = true
alert('Selamat Datang ! Di sini kamu bisa menghitung volume 2 kubus')
while (nilaiAwal == true) {

    var inputUser1 = parseInt(prompt('Masukan sisi Kubus A !'))
    var inputUser2 = parseInt(prompt('Masukan sisi Kubus B !'))

    alert(`RECORDED ! \n\nSisi Kubus A : ${inputUser1}\nSisi Kubus B : ${inputUser2}\nHASIL : ${volumeKubus()}`)


    nilaiAwal = confirm('Mau mencoba menghitung kubus lain?')
}


// function tambah () {
//     var hasil = 0

//     for (var nilaiAwal = 0; nilaiAwal < arguments.length; nilaiAwal++) {
//         hasil += arguments[2]
//     }

//     return hasil
// }

// var coba = tambah(1, 2, 3, 5, 5)
// console.log(coba)

