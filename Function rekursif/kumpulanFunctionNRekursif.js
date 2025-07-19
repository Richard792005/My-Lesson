// Kumpulan function dan rekursif


//Rekursif looping hitung mundur

function hitungMundur(n) {
    // base case
    if (n === 0) {
        return 0
    }
    //
    console.log(n)
    hitungMundur(n - 1)

}
hitungMundur(5)


// hitungMundur (5) 
// 5
// return hitungMundur(4)
// hitungMundur (4) 
// 4
// return hitungMundur(3)
// hitungMundur (3) 
// 3
// return hitungMundur(2)
// hitungMundur (2) 
// 2
// return hitungMundur(1)
// hitungMundur (1) 
// 1
// return hitungMundur(0)
// hitungMundur (0) 
// 0
// return 0

console.log(`\n`)
console.log(`Di bawah ini hitung maju`)
console.log(`\n`)

function hitungMaju(n) {
    // base case
    if (n === 11) {
        return
    }
    //
    console.log(n)
    return hitungMaju(n + 1)
}
hitungMaju(1)

// while looping
// let n = 1
// while (n <= 10) {
//     console.log(n)
// n = n + 1
// }

console.log(`\n`)
console.log(`Di bawah ini Faktorial`)
console.log(`\n`)

function faktorial(n) {
    // case = 5! = 5 x 4 x 3 x 2 x 1 = 120
    // base case
    if (n === 1) {
        return 1 ;
    }
    //
    
    return n * faktorial(n-1)

}
console.log(faktorial(5))

// faktorial(5)
// => 5 * faktorial(4)
//           ↓
//      faktorial(4)
//      => 4 * faktorial(3)
//                 ↓
//            faktorial(3)
//            => 3 * faktorial(2)
//                         ↓
//                    faktorial(2)
//                    => 2 * faktorial(1)
//                                 ↓
//                            faktorial(1)
//                            => return 1 (base case)

// sekarang hitung mundur hasilnya 


// faktorial(1) = 1
// faktorial(2) = 2 * 1 = 2
// faktorial(3) = 3 * 2 = 6
// faktorial(4) = 4 * 6 = 24
// faktorial(5) = 5 * 24 = 120




function balikKata(kalimat) {
    // base case
    if (kalimat.length <= 1) {
        return kalimat
    }
    //
    let a = balikKata(kalimat.slice(1))
    let hasilPembalikan = a + kalimat[0]
    return hasilPembalikan
}
console.log(balikKata('Jeruk'))

// balikKata(Jeruk)
// => let a = 'eruk'
// => hasilPembalikan = 'eruk' + 'J'
//           ↓
        // balikKata(eruk)
//      => let a = 'ruk'
//      => hasilPembalikan = 'ruk' + 'e'
//                 ↓
//            // balikKata(ruk)
//            => let a = 'uk'
//            => hasilPembalikan = 'uk' + 'r'
//                         ↓
//                    // balikKata(uk)
//                    => let a = 'k'
//                    => hasilPembalikan = 'k' + 'u'
//                                 ↓
//                            // balikKata(k)
//                            base case langsungg return 'k'

// sekarang hitung mundur hasilnya 

// | Tahap Naik                                          | Hasil |
// | --------------------------------------------------- | ----- |
// | `balikKata("k")` → `"k"`                            |       |
// | `balikKata("uk")` → `"k" + "u"` → `"ku"`            |       |
// | `balikKata("ruk")` → `"ku" + "r"` → `"kur"`         |       |
// | `balikKata("eruk")` → `"kur" + "e"` → `"kure"`      |       |
// | `balikKata("Jeruk")` → `"kure" + "J"` → `"kureJ"` ✅ |       |


function jumlahDeret(n) {
    // case jumlahDeret(5) = 1 + 2 + 3 + 4 + 5 = 15
    // base case
    if (n <= 0 ) {
        return n
    }
    //
    
    return n + jumlahDeret(n-1)
    
}

console.log(jumlahDeret(5))

// jumlahDeret(5) => 5 + jumlahDeret(4)
// jumlahDeret(4) => 4 + jumlahDeret(3)
// jumlahDeret(3) => 3 + jumlahDeret(2)
// jumlahDeret(2) => 2 + jumlahDeret(1)
// jumlahDeret(1) => 1 + jumlahDeret(0)

// jumlahDeret(0) → 0
// jumlahDeret(1) = 1 + 0 = 1
// jumlahDeret(2) = 2 + 1 = 3
// jumlahDeret(3) = 3 + 3 = 6
// jumlahDeret(4) = 4 + 6 = 10
// jumlahDeret(5) = 5 + 10 = 15 ✅
