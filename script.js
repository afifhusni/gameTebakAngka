var chance = 3;

alert('Tebak angka dari 1-10' + '\nAnda punya ' + chance + ' kesempatan');

while (chance >= 0) {
    var p = prompt('Masukkan angka tebakan : ');
    var comp = Math.floor(Math.random() * 10 + 1);

    if (p == comp) {
        alert('Anda benar' + '\nAngka yang dicari adalah : ' + comp);
    } else if (chance == 0) {
        alert('Anda gagal' + '\nKesempatan anda telah habis');
    } else if (p < comp) {
        alert('Angka terlalu rendah' + '\nAnda masih punya ' + chance + ' kesempatan');
    } else if (p > comp) {
        alert('Angka terlalu tinggi' + '\nAnda masi punya ' + chance + ' kesempatan');
    }
    chance--;
}

alert('Teima kasih telah bermain');