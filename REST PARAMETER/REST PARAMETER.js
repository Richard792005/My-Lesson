// setiap rest parameter pasti hasilnya array , terkecuali object

function jumlahkan(a, b, ...angka) { // jadi disini a = 20 , b = 30, dan gunanya restt parameter menyimpan sisanya
    let hasil = 0
    for (const a of angka) { // Gunakan for of karena bisa looping argument for (const a of arguments) a adlah perwakilan dari arguments 
        hasil += a
    }
    return angka
}
console.log(jumlahkan(20, 30, 40))

const player1 = {
    name: 'Sandikha',
    nyawa: 100,
    skill: 'Melompat',
    skill2: 'Mencakar',
    skill3: 'Menombak'
}
// object harus sama sama nya sesuai properti, kalau array bebas 
const { name, ...perlengkapan } = player1
console.log(perlengkapan) // ini type of nya object 

//  UNTUK FILTERING 
function myFunc(type, ...myArgs) {
    return myArgs.filter(function (arg, indeks) {
        return typeof arg === type // output nya : true dan false karena filter yang hanya tipe datanya seperti boolean ,
        // boolean kan disimpan di dalam parameter type kan
    })
}

console.log(myFunc('boolean', true, false, 1, 3, 'yaldriyan'))

// DESTRUCTURING Array

const salam = ['Halo', 'Nama', 'Saya', 'Yaldriyan']

const [sapa, , , nama] = salam
console.log(sapa) // output : Halo

// swap item 
// bisa untuk swap item variabel
let j = 1;
let h = 2;
[j, h] = [h, j]
console.log(j)

// DESTRUCTURING OBJECT

const mhs = {
    nickname: 'Yaldriyan',
    email: 'bla@gmail.com',
    kota: 'Jakarta'
}

const { nickname: u, email: m, ...values } = mhs
console.log(JSON.stringify(values)); // kota: Jakarta kota disimpan ke dalam values


// bisa untuk mereturn value pada function 
function coba() {
    return [1, 2]
}
// const a = coba()
// console.log(a[1])
const [k, l] = coba()
console.log(k)
const [d, g] = [1, 2] // ini kan sama saja seperti ini 
console.log(d)

