// berikut cara untuk menggunakan template literal

//  html fragment
// looping
// condition
// 


// html fragment
const mhs = {
    nama: 'Yaldriyan',
    kelas: '1b',
    umur: 20

}


const el = `
<div class="mhs">
    <h2 class="">${mhs.nama}</h2>
    <span class="">umur : ${mhs.umur}</span>
</div>

`




// LOOPING

const mhs1 = [
    { // INDEKS 0
        nama: 'Jojo',
        email: '@Jojo'
    }, // INDEKS 1
    {
        nama: 'Riyan',
        email: '@Jojo'
    },
    { // INDEKS 2
        nama: 'Daniel',
        email: '@Jojo'
    }
]

const el1 = mhs1.map(function (e, indeks) {
    nama = e.nama
    email = e.email

    return `<div>
        <h2>${nama}</h2>
        <span>${email}</span>
    </div>`
})

document.body.innerHTML = el1


// NESTED template literal 

const mhs2 = {
    nama: 'Yaldriyan',
    semester: 5,
    bintang: 'scorpion',
    matahKuliah: [
        'PPKN',
        'BAHASA INGGRIS',
        'BAHASA INDONESIA',
        'BAHASA ASING',
    ]
}


function cetakMataKuliah(mataKuliah) {
    return `
    ${mataKuliah.map(function(m, indeks) {
        return `<li>${m}</li>`
    }).join(" ")}
    `
}
const el2 = `
<div class="mhs2">
    <h2>Nama : ${mhs2.nama}</h2>
    <p>Bintang :${mhs2.bintang}</p>
    <p>Semester :${mhs2.semester}</p>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs2.matahKuliah)}
</div>

`
document.body.innerHTML = el2


// TAGGED TEMPLATE LITERAL 

// Ditandai dengan adanya function sebelum tagged nya 

const mhs3 = {
    nama : 'Yaldriyan' ,
    kelas : '1b' ,
    semester : 3 ,
    umur : 20
}

const el3 =  coba`Halo nama saya : ${mhs3.nama}, umur saya ${mhs3.umur}, saya semester : ${mhs3.semester}`

function coba (strings, ...values) {
    console.log(strings)
    let hasil = ''    
    strings.forEach(function(string, indeks) {
        hasil += `${string} ${values[indeks] || ''}` 
    })
    return hasil 
}

document.body.innerHTML = el3

// seluruh string akan tersimpan ke 'strings' dan value juga akan tersimpan ke ...values
// string 1 = Halo nama saya , string 2 = umur saya, string 3 = saya semester
// value 1 = nama , value 2 = umur, value 3 semester
// string itu return nya berupa array
// values itu return nya berupa array 
// ini berguna ketika , kita mau menghilight antara values atau string nya

// contoh
// highlight values dengan warna pink , yang kita buat class nya di css  
// kita highlight dengan span yg dikasih class tersebut 

const el4 = highlight`Halo Nama saya : ${mhs3.nama}, umur saya : ${mhs3.umur}, saya semester : ${mhs3.semester}`

function highlight(strings, ...values) {
    console.log(strings) // outpute : ['Halo Nama saya : ', ', umur saya : ', ', saya semester : ', '', raw: Array(4)]
    console.log(values) // outpute : ['Yaldriyan', 20, 3]
    let hasil = ''
    strings.forEach(function(string, indeks) {
        // return hasil = `${hasil} + ${string} + ${values[indeks]}`
         hasil = `${hasil} ${string}<span class="pink">${values[indeks] || ' '}</span>`
        
    })
    return hasil 
}


document.body.innerHTML = el4