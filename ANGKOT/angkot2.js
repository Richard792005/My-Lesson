// Penerapan while dan for 


// Tugas 1 

// Menampilkan Angkot 1 - 6 beroperasi baik dengan while , dan 7 - 10 sedang tidak beroperasi (for)


var nilaiAwal = 1
var angkotBeroperasi = 7
var jumlahAngkot = 10


while (nilaiAwal <= angkotBeroperasi) {
    console.log(`Angkot No. ${nilaiAwal} beroperasi dengan baik`)

nilaiAwal = nilaiAwal + 1
}

for (nilaiAwal = angkotBeroperasi + 1; nilaiAwal <= 10; nilaiAwal++) {
    console.log(`Angkot No. ${nilaiAwal} sedang tidak beroperasi `)
}