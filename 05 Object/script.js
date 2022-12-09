//membuat objek
var mhs = {
    nama : "Ridho",
    umur : 23,
    ips : [3.00, 3.12, 3.23, 3.45],
    //objek di dalam objek
    alamat : {
        jalan : "Jl. Merdeka",
        kabupaten : "Lombok Timur",
        propinsi : "NTB"
    }
}

//objek literal
var cnth1 = {
    nama : "Nama ama",
    nrp : "09090909",
    email : "email@mail.com",
    jurusan : "jjuras"
}

//Function declaration
function buatObjectMhs(nama, nrp, email, jurusan){
    var mhs = {}
    mhs.nama = nama
    mhs.nrp = nrp
    mhs.email = email
    mhs.jurusan = jurusan
    return mhs
}

// Constructor
// nama fungsi diawali dgn kapitan, sebagai pembeda
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama
    this.nrp = nrp
    this.email = email
    this.jurusan = jurusan
}

//Memanggil yg konstruktor
// var mhs4 = new Mahasiswa ('Erik','9090909','erik@gmail.com','hukum')