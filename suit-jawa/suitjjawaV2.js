


function getKomputer () {

    const comp = Math.random()

    if (comp < 0.34) {
        return 'gajah'
    }

    else if (comp >= 0.34 && comp <=0.67 ) {
        return 'orang'
    }
    
    else {
        return 'semut'
    }


}


function getHasil (user, comp) {

    if (user == comp) {
        return 'SERI'
    }

   else  if (user == 'gajah' && comp == 'semut' || user == 'orang' && comp == 'gajah' || user == 'semut' && comp == 'orang' ) {
        return 'KALAH'
    }

    else {
        return 'MENANG' 
    }

}

const pilihanUser = document.querySelectorAll ('li img')

pilihanUser.forEach(function (e, indeks) {

    e.addEventListener('click', function() {
        
        // const computer = getKomputer()
        const player = e.className
        const result = getHasil(player, getKomputer())
        
        const imgKomputer = document.getElementsByClassName('image-komputer')
        imgKomputer[0].setAttribute(`src`, `img/${getKomputer()}.png`)
        
        const hasilnya = document.getElementsByClassName('hasil')[0]
        hasilnya.innerHTML = result
        
    })
    
})

















window.addEventListener('DOMContentLoaded', function () {

    const gajah = document.getElementsByClassName('gajah')[0]
    const semut = document.getElementsByClassName('semut')[0]
    const orang = document.getElementsByClassName('orang')[0]

    function randomComputer() {
        
        const kompGenerate = document.getElementsByClassName('image-komputer')[0]
        //parent dari kompGenerate 
        const parent = document.getElementsByClassName('area-komputer')[0]

        let array = [gajah, semut, orang]
        let mathRandom = Math.random()


        if (mathRandom < 0.34) {
            // mathRandom = 'gajah'
            mathRandom = array[0].cloneNode(true)
            // buat class baru 
            mathRandom.classList.add('image-komputer')
            // replace gambar komputer //
            // kembalikan isi
        } else if (mathRandom >= 0.35 && mathRandom <= 0.67) {
            // mathRandom = 'semut'
            mathRandom = array[1].cloneNode(true)
            // buat class baru 
            mathRandom.classList.add('image-komputer')
            // replace gambar komputer //
            // kembalikan isi
        } else {
            // mathRandom = 'orang
            mathRandom = array[2].cloneNode(true)
            // buat class baru 
            mathRandom.classList.add('image-komputer')
            // replace gambar komputer //
            // kembalikan isi
        }

        if (kompGenerate) {
            parent.replaceChild(mathRandom, kompGenerate)
        } else {
            parent.appendChild(mathRandom)
        }

        if (kompGenerate && parent.contains(kompGenerate)) {
            parent.replaceChild(mathRandom, kompGenerate);
        }

        return mathRandom
    }

    let userT;
    let array = [orang, semut, gajah]
    array.forEach(function (e, indeks) {

        e.addEventListener('click', function () {

            if (indeks == 0) {
                userT = array[0]
            } else if (indeks == 1) {
                userT = array[1]
            } else {
                userT = array[2]
            }
            result()
        })


    })

    function result() {
        const result = document.getElementsByClassName('hasil')[0]
        let arrayT = ['seri', 'menang', 'kalah']
        let pbaru = document.createElement('p')
        let pText;
        let pengguna = userT.classList[0]
        let komputer = randomComputer().classList[0]

        if (komputer == pengguna) {
            pText = document.createTextNode('SERI')
            pbaru.appendChild(pText)
            result.appendChild(pbaru)
        }

        else if ((pengguna === 'orang' && komputer === 'gajah') ||
            (pengguna === 'gajah' && komputer === 'semut') ||
            (pengguna === 'semut' && komputer === 'orang')
        ) {
            pText = document.createTextNode('KALAH')
        }

        else {
            pText = document.createTextNode('MENANG')

        }

        pbaru.appendChild(pText)
        result.innerHTML = ''
        result.appendChild(pbaru)
        // else if (pengguna == 'orang') {
        //     if (komputer == 'gajah') {
        //         pText = document.createTextNode('KALAH')
        //         pbaru.appendChild(pText)
        //         result.appendChild(pbaru)
        //     }

        //     else {
        //         pText = document.createTextNode('MENANG')
        //         pbaru.appendChild(pText)
        //     }
        // }

        // else if (pengguna == 'gajah') {
        //     if (komputer == 'orang') {
        //         pText = document.createTextNode('KALAH')
        //         pbaru.appendChild(pText)
        //     }
        //     else {
        //         pText = document.createTextNode('MENANG')
        //         pbaru.appendChild(pText)
        //     }

        // }

        // else {
        //     if (komputer == 'gajah') {
        //         pText = document.createTextNode('MENANG')
        //         pbaru.appendChild(pText)
        //     }
        //     else {
        //         pText = document.createTextNode('KALAH')
        //         pbaru.appendChild(pText)
        //     }
        // }
    }


}) 