// Memecah iterable object jadi array 
const string = 'Yaldriyan'

const s = [...string]
console.log(s) // output array [Y,a,l,d,r,i,y,a,n]

// menggabungkan Array

const array1 = ['Yaldriyan', 'Kelas', 'Bobo', 'Doni',]
const array2 = [1, 2, true, false]

const hasil = [...array1, ...array2]
console.log(hasil) // output (8) ['Yaldriyan', 'Kelas', 'Bobo', 'Doni', 1, 2, true, false]

// Mengcopy array menjadi array baru
const hasilCopy = [...array1]
console.log(hasilCopy) // output ['Yaldriyan', 'Kelas', 'Bobo', 'Doni']

// mengubah nodelist jadi array (selain pakai array.from)
// kalau kita gunakan for 

const li = document.querySelectorAll('ol li') // output nya html collection
const mhs = []
for (let i = 0; i < li.length; i++) {
    mhs.push(li[i].textContent)
}
console.log(mhs) // output ['Li 1', 'Li 2', 'Li 3', 'Li 4', 'Li 5', 'Li 6']


// kalau dengan map , forEach , harus jadi array dulu 
const mhsHasil = [...li].map(function (l, indeks) {
    return l.textContent
})

console.log(mhsHasil) // output  ['Li 1', 'Li 2', 'Li 3', 'Li 4', 'Li 5', 'Li 6']

