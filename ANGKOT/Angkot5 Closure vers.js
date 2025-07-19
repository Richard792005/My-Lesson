// BUAT LATIHAN CLOSURE 


function buatSaldoAwal (usr) {

    let saldo = 10000
    return function (saldo) {

        console.log(`Saldo milik : Tn.${usr} ada sebesar : ${saldo}`)
        
    }

}


const cek = buatSaldoAwal('Yaldriyan')