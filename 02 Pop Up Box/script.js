alert('Percobaan dialog box menggunakan alert')
var nama = prompt('menggunakan perintah prompt')
console.log(nama);

var tes = confirm('menggunakan perintah confirm')

if (tes == true) {
    alert('tombol OK tertekan')
} else {
    alert('tombol cancel tertekan')
}