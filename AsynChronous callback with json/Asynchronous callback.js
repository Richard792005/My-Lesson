// CALLBACK FUNCTION 
// Kita akan belajar callback function
// contoh

function selesai(mataKuliah) {
    console.log(`tugas ${mataKuliah} sudah selesai dikerjakan`)
}

function kerjakanTugas(mataKuliah, selesai) {
    console.log(`mulai mengerjakan tugas : ${mataKuliah}`)
    selesai(mataKuliah)
}
kerjakanTugas('Programming', selesai)


// function halo (nama) {
//     alert(`Halo, ${nama}`)
// }
// function tampilkanPesan(callback) {
//     const nama = prompt(`Masukan nama : `)
//     callback(nama)
// }
// tampilkanPesan(halo)

// merequest api dengan vanilla js

const arrayMahasiswa = [
    {nama : 'Yaldriyan', 
     Kelas : 2,
     email : 'yaldriyan@gmail.com'
    },
    {nama : 'Ralph', 
     Kelas : 2,
     email : 'yaldriyan@gmail.com'
    },
    {nama : 'Nayla', 
     Kelas : 2,
     email : 'yaldriyan@gmail.com'
    }
    
]

// kalau pakai cara manual menampilkan nama : Yaldriyan bisa dengan foreach
console.log(`ini ketika menggunakan synchronous blocking`)
console.log('Mulai')
arrayMahasiswa.forEach(function (m, indeks) {
    for (let i = 0; i < 10000000; i++) {
        let date = new Date()
    }
    console.log(m.nama)
})
console.log('selesai') 
// nah ini akan jadi cetak mulai dulu  , lalu proses getDataMahasiswa  dimana ini akan makan waktu dulu , lalu cetak selesai//
// bisa di lihat ini masih terjadi blocking , dimana kalau proses sebelumnya belum selesai maka tidak bisa lanjut ke proses berikutnya 
// maka harus di akali dengan set timeout atau bisa dengan jQQuery ajax dan murni js vanilla

// kalau dengan vanilla json request api misal data diatas kita pisahkan ke folder /data/mahasiswa.json

// buat function dengan parameter (url,  callback1, callback2)

function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response)
            }
            if (xhr.status === 404) {
                error()
            }
        }
    }
    xhr.open('get', url)
    xhr.send()
}

// function success dan error ini adalah function callback 
function success (results) {
    console.log(results)
    // sekarang tinggal ambil nama
    const mhs = JSON.parse(results) // ini kan hasilnya array (3) [{…}, {…}, {…}]
    mhs.forEach(function (m, indeks) {
        console.log(m.nama) 
    })
}

function error () {
}
console.log(`
    
Ini ketika menggunakkan  asynchronous callback | nonblocking`)

console.log('Mulai2')
getDataMahasiswa('data/mahasiswa.json', success, error)
console.log('selesai2')

// nah ini akan jadi cetak mulai dulu lalu cetak selesai , lalu tetap proses getDataMahasiswa //
