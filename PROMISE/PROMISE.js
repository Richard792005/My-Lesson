// promise adalah objek yang mendeksripsikan keberhasilan dan kegagalan dalam asynchronous event yang di masa akan mendatang

// Janji => terpenuhi => tidak terpenuhi => tunggu
// States => fulfilled => rejected => pending
// callback => resolve => reject => finally
// Aksi => .then => .catch 

// penerapan promise

let ditepati = true
const promise1 = new Promise (function (resolve, reject) {
    if (ditepati) {
        resolve ('Janji telah ditepati!')
    }
    else {
        reject ('Ingkar Janji..')
    }
})
promise1
.then(function (response) {
    console.log(`OK ! : ${response}`)
})
.catch(function (response) {
    console.log(`NOT OK ! : ${response}`)
})


// Penerapan promise dengan waktu tertentu

const promise2 = new Promise (function (resolve,reject) {
    if (ditepati) {
        setTimeout(function() {
            resolve('Ditepati setelah beberapa waktu!')
        }, 2000)
    }
    else {
        setTimeout(function() {
            reject('Tidak ditepati setelah beberapa waktu!')
        }, 2000)
    }
})
console.log('Mulai')
promise2
.finally(function () { // finally ini ga peduli nilai ditepati false / true , dia akan selalu jalan dahulu
    console.log('Selesai menunggu !')
})
.then(function (response) { // then ini menangkap resolve 
    console.log(`OK ! : ${response}`)
})
.catch(function (response) { // catch ini menangkap reject
    console.log(` NOT OK ! : ${response}`)
})
console.log('selesai')



// PROMISE ALL 

//UNTUK MENJALAKAN SEMUA PROMISE SEKALIGUS

const film = new Promise (function (resolve, reject) {
    setTimeout(function() {
        resolve([{
            Judul : 'Avengers',
            sutradara : 'Sandika',
            pemeran : 'Doddy, Erik'
        }])
    }, 1000)
    setTimeout(function() {
        reject('Tidak ada film !')
    },1000)
})

const cuaca = new Promise (function (resolve, reject) {
    setTimeout(function() {
        resolve([{
            kota : 'Bandung',
            suhu : 26,
            kondisi : 'Cerah - berawan'
        }])
    }, 500)
    setTimeout(function() {
        reject()
    
    },500)
})

// nah disini kan kalau mau jalankan satu satu seperti ini , tapi sebenarnya kita bisa mneggunakan .promise all agar jalan sekaligus
film.then(function (response) {
    console.log(response)
})
.catch(function (response) {

})
cuaca.then(function (response) {
    console.log(response)
})
.catch(function (response) {

})


Promise.all([film, cuaca])
.then(function (response) {
    const [film, cuaca] = response
    console.log(film)
    console.log(cuaca)
})
