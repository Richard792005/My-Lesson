alert('Selamat Datang')

// Penerapan while dan for //

// var nilaiAwal = 1

// while(nilaiAwal <= 10){
//     console.log(`Angkot No. ${nilaiAwal} beroperasi dengan baik`)

// nilaiAwal = nilaiAwal + 1
// }


// var noAngkot = 1
// var jumlahAngkot = 10
// var angkotBeroperasi = 6

// while (noAngkot <= angkotBeroperasi){
//     console.log(`Angkot No. ${noAngkot} beroperasi dengan baik`)

// noAngkot = noAngkot + 1
// }

// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot = noAngkot + 1){
//     console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`)
// }



// Penerapan if else dan for serta while //


var noAngkot = 1
var angkotBeroperasi = 8
var jumlahAngkot = 10

while (noAngkot <= jumlahAngkot) {
    if (noAngkot <= angkotBeroperasi) {
        console.log(`Angkot No. ${noAngkot} beroperasi dengan baik`)
    }else {
        console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`)
    }
noAngkot = noAngkot + 1
}


for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log(`Angkot No. ${noAngkot} lagi beroperasi nih !`)
    }else {
        console.log(`Angkot No. ${noAngkot} sedang rusak !`)
    }
}


let rows = 5;
let bintangPersegi = '';

for (let i = 1; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
        bintangPersegi += '*';
    }
    bintangPersegi += '\n';
}
console.log(bintangPersegi);


 rows = 5;
 segitigaKebawah = '';

for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
        segitigaKebawah += '*';
    }
    segitigaKebawah += '\n';
}
console.log(segitigaKebawah);

let segitigaAtas = ''
for(nilaiAwal = 0; nilaiAwal <= 10; nilaiAwal++){
    for (let nilaiBaru = 0; nilaiBaru > nilaiAwal; nilaiBaru = nilaiBaru - 1 ) {
        segitigaAtas += '*'
    }
    segitigaAtas += '\n'
}
console.log(segitigaAtas)