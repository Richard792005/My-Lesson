// Membuat Program pengelolaan Angkot yang lebih Kompleks //
// Dengan Object dalam js //


// Buat function object constructor

function Angkot(sopir, track, penumpang, kasMobil) {

    // var this = {}
    this.sopir = sopir
    this.track = track
    this.penumpang = penumpang
    this.kasMobil = kasMobil
    // buat function untuk menambahkan penumpang
    this.penumpangNaik = function (namaPenumpang) {

        // jika kursi kosong semua, tambahkan penumpang di awal 
        if (this.penumpang.length == 0) {
            this.penumpang.unshift(namaPenumpang)
            return this.penumpang
        }
        // Jika tidak kosong, semisal ada penumpang 1 di kursi 
        else {
            var checkKursiKosong = this.penumpang.findIndex(function (e) {
                return e == undefined
            })

            var checkKursiPenuh = this.penumpang.every(function (e) {
                return e !== undefined
            })

            var checkNama = this.penumpang.includes(namaPenumpang)

            // jika ada kursi undefined atau kosong tidak ditempati
            if (checkKursiKosong !== -1) {
                this.penumpang[checkKursiKosong] = namaPenumpang
                return this.penumpang
            }
            // jika ada nama penumpang sama
            else if (checkNama == true) {
                console.log(`Mohon maaf... Penumpang ${namaPenumpang} sudah naik di dalam angkot !`)
                return this.penumpang
            }
            // jika kursi penuh terisi semua 
            else if (checkKursiPenuh !== -1) {
                this.penumpang.push(namaPenumpang)
                return this.penumpang
            }


        }
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {

        // jika tidak add penumpang
        var noPenumpang = this.penumpang.every(function (e) {
            return e == undefined
        })

        if (this.penumpang.length == 0 || noPenumpang == true) {
            alert(`Saat ini tidak ada penumpang naik`)
            return false
        }

        else {
            var checkNama1 = this.penumpang.findIndex(function (e) {
                return e == namaPenumpang
            })
            // jika nama penumpang benar 
            if (checkNama1 !== -1) {
                // turunkan pengguna itu
                this.penumpang[checkNama1] = undefined
                this.kasMobil += bayar
                return this.penumpang
            }
            // jika nama penumpang tidak sesuai
            else if (checkNama1 == -1) {
                console.log(`Tidak ada penumpang dengan nama : ${namaPenumpang}`)
                return this.penumpang
            }

        }

        // return = this
    }

}
var angkot1 = new Angkot('Roy', ['Sunter', 'Pluit'], ['Roy', undefined, 'YYK'], 0)
angkot1.penumpangNaik()










