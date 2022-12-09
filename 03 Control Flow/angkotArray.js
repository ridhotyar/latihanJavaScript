var penumpang = ['Sasa', undefined, 'Doddy']

function tambahPenumpang(nama, penumpang) {
    if (penumpang.length == 0){
        return penumpang.push(nama)
    } else {
        // penumpang.forEach(function(i){
        //     if (penumpang[i] == undefined){
        //         penumpang[i] = nama
        //         return penumpang
        //     } else if ( i == penumpang.length - 1) {
        //         return penumpang.push(nama)
        //     }
        // })
        for ( var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = nama
                return penumpang
            } else 
            if (penumpang[i] == nama){
                console.log('Nama penumpang sudah ada, mohon naik yang lain')
                return
            } else 
            if (i == penumpang.length - 1) {
                return penumpang.push(nama)
            }
        }
    }
}

function penumpanTurun(nama, penumpang){
    if (penumpang.length == 0) {
        console.log('Angkot Kosong, tidak ada yang turun')
        return
    } else {
        for (var i = 0; i<penumpang.length; i++) {
            if ( penumpang[i] == nama) {
                return penumpang[i] = undefined;
            } else {
                return console.log('Tidak terdapat nama penumpang tersebut')
            }
        }
    }
}

// var nama = prompt('Masukan nama penumpang')

// tambahPenumpang(nama, penumpang);

// penumpang.forEach(function(e){
//     console.log(e);
// })