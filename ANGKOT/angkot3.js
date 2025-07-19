// Tugas 2 

// Penggunaan if else dalam for dan while

console.log('Di bawah ini While\n')
console.log('\n')

let nilaiAwal = 1 
let angkotBeroperasi = 9
let jumlahAngkot = 10

while (nilaiAwal <= jumlahAngkot) {
    if (nilaiAwal <= angkotBeroperasi) {
        console.log(`Angkot No. ${nilaiAwal} beroperasi dengan baik`)
    }else {
        console.log(`Angkot No. ${nilaiAwal} sedang tidak beroperasi`)
    }
    
    nilaiAwal = nilaiAwal + 1 
}
console.log('\n')
console.log('Di bawah ini For\n')
console.log('\n')

for (nilaiAwal = 1; nilaiAwal <= jumlahAngkot; nilaiAwal++) {
    if (nilaiAwal <= angkotBeroperasi) {
        console.log(`Angkot No. ${nilaiAwal} beroperasi dengan baik`)
    }else {
        console.log(`Angkot No. ${nilaiAwal} sedang tidak beroperasi`)
    }
}