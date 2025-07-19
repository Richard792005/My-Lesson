//Meminta Input User
var cobaLagi = true 

while (cobaLagi === true) {

var inputPlayer = prompt('Silahkan Pilih : Gajah, Semut, atau Orang ')

// Membuat angk random 

var randomComputer = Math.random()


if (randomComputer < 0.34) {
    randomComputer = 'Gajah'
}else if (randomComputer >= 0.34 && randomComputer <= 0.67) {
    randomComputer = 'Orang'
}else {
    randomComputer = 'Semut'
}

// Memeriksa hasil input user 

var hasil = ''

if (inputPlayer == randomComputer) {
    hasil = 'Seri'
}else if (inputPlayer == 'Orang') {
    if (randomComputer == 'Gajah') {
        hasil = 'KALAH'
    }else {
        hasil = 'MENANG'
    }
}else if (inputPlayer == 'Gajah'){
    if (randomComputer == 'Orang') {
        hasil = 'MENANG'
    }else {
        hasil = 'KALAH'
    }
}else if (inputPlayer == 'Semut') {
    if (randomComputer == 'Orang') {
        hasil = 'KALAH'
    }else {
        hasil = 'MENANG'
    }
}else {
    hasil = 'Maaf ! Kamu memasukan Input yang salah'
}

alert(`Kamu memilih ${inputPlayer} dan Komputer memilih ${randomComputer} \nMaka hasilnya Kamu : ${hasil}`)


var cobaLagi = confirm('Masih mau bermain lagi ?')

}
alert('Terimakasih sudah bermain bersama kami ya !')