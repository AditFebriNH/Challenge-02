// ====================SOAL 1====================
console.log("====================SOAL 1====================")
function changeWord(selectedText, changedText, text) {
  // Membagi kalimat menjadi array kata-kata
  // Kita memisahkan kalimat awal menjadi sebuah array kata-kata dengan menggunakan split(' ')
  // Ini akan menghasilkan array words yang berisi kata-kata dalam kalimat
  const words = text.split(' ');
  // Isi variabel array words untuk kalimat1 yaitu [ 'Andini', 'sangat', 'mencintai', 'kamu', 'selamanya' ]
  // Isi variabel array words untuk kalimat2 yaitu [ 'Gunung', 'bromo', 'tak', 'akan', 'mampu', 'menggambarkan', 'besarnya', 'cintaku', 'padamu' ]

  // Mencari dan mengganti kata yang sesuai
  // loop for digunakan untuk iterasi melalui setiap kata dalam array words.
  for (let i = 0; i < words.length; i++) {
    //Di dalam loop, kita memeriksa apakah kata saat ini (words[i]) sama dengan kata yang ingin diganti (selectedText)
    //Jika kata saat ini sama dengan kata yang ingin diganti, kami menggantinya dengan kata yang baru (changedText)
    if (words[i] === selectedText) {
      words[i] = changedText;
    }
  }

  // Menggabungkan kata-kata kembali menjadi kalimat
  // Setelah selesai mengganti kata-kata yang sesuai, kami menggabungkan array kata-kata kembali menjadi kalimat dengan menggunakan join(' ')
  // Akhirnya, function mengembalikan kalimat yang telah dimodifikasi
  const new_text = words.join(' ');

  return new_text;
}

// Penggunaan dan output dari function changeWord
const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";
console.log(`Kalimat 1 ==> ${changeWord('mencintai', 'membenci', kalimat1)}`);
console.log(`Kalimat 2 ==> ${changeWord('bromo', 'semeru', kalimat2)}`);
console.log('')


// ====================SOAL 2====================
console.log("====================SOAL 2====================")
// Mendefinisikan fungsi checkTypeNumber dengan sintaks arrow function
const checkTypeNumber = (givenNumber) => {
  // Validasi tipe data parameter
  // Di dalam fungsi ini, kita melakukan validasi terhadap tipe data parameter givenNumber menggunakan typeof
  // Jika tipe datanya bukan angka ('number'), maka fungsi akan mengembalikan pesan kesalahan 'Error: invalid data type'
  if (typeof givenNumber !== 'number') {
    // Jika tipe data parameter bukan angka, kembalikan pesan kesalahan
    return 'Error: invalid data type';
  }
  
  // Cek apakah angka genap atau ganjil
  // Setelah validasi, fungsi melakukan perhitungan dengan operator modulus (%).
  if (givenNumber % 2 === 0) {
    // Jika sisa pembagian dengan 2 adalah 0, angka tersebut adalah genap, dan fungsi mengembalikan string 'GENAP'
    return 'GENAP';
  } else {
    // Jika sisa pembagian dengan 2 bukan 0, angka tersebut adalah ganjil, dan fungsi mengembalikan string 'GANJIL'
    return 'GANJIL';
  }
}

// Penggunaan dan output dari function checkTypeNumber
console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())
console.log('')


// ====================SOAL 3====================
console.log("====================SOAL 3====================")
function getAngkaTerbesarKedua(dataNumbers) {
  // Validasi tipe data parameter
  // Kita memeriksa tipe data parameter dataNumbers menggunakan Array.isArray
  if (!Array.isArray(dataNumbers)) {
    // Jika parameter bukan sebuah array, maka fungsi akan melempar exception dengan pesan "ERROR: Parameter harus berupa array."
    return 'ERROR: Parameter harus berupa array.';
  }

  // Validasi panjang array, harus minimal 2 angka
  // Fungsi ini juga memeriksa panjang array dataNumbers
  if (dataNumbers.length < 2) {
    //Jika panjang array kurang dari 2, maka fungsi akan melempar exception dengan pesan "ERROR: Array harus berisi minimal dua angka."
    return 'ERROR: Array harus berisi minimal dua angka.';
  }

  // Menghapus angka terbesar pertama
  // Untuk mendapatkan angka terbesar kedua, kita menghapus angka terbesar pertama dari array dengan menggunakan Math.max dan indexOf
  const max1 = Math.max(...dataNumbers);
  const indexMax1 = dataNumbers.indexOf(max1);
  dataNumbers.splice(indexMax1, 1);

  // Menghitung angka terbesar kedua
  // Kemudian, kita menggunakan kembali Math.max untuk mendapatkan angka terbesar kedua
  const max2 = Math.max(...dataNumbers);

  return max2;
}

// Penggunaan dan output dari function getAngkaTerbesarKedua
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
console.log(getAngkaTerbesarKedua([]));
console.log('');


// ====================SOAL 4====================
console.log("====================SOAL 4====================")
function getTotalPenjualan(dataPenjualan) {
  // Validasi tipe data parameter
  // Validasi parameter: Function memeriksa apakah parameter dataPenjualan adalah array dengan menggunakan Array.isArray(dataPenjualan)
  // Jika bukan array, function akan mengembalikan pesan kesalahan
  if (!Array.isArray(dataPenjualan)) {
    return "Parameter harus berupa array!";
  }

  // Inisialisasi variabel total: Variabel ini digunakan sebagai akumulator untuk menjumlahkan total penjualan
  let total = 0;

  // Iterasi melalui array dataPenjualan: Menggunakan loop for, function akan mengiterasi melalui setiap elemen dalam array
  for (let i = 0; i < dataPenjualan.length; i++) {
    // Validasi tipe data objek dan keberadaan properti totalTerjual: Function memeriksa apakah setiap elemen dalam array adalah objek (typeof dataPenjualan[i] === "object") dan memiliki properti totalTerjual (dataPenjualan[i].hasOwnProperty("totalTerjual"))
    // Jika validasi ini gagal, objek tersebut akan diabaikan.
    if (typeof dataPenjualan[i] === "object" && dataPenjualan[i].hasOwnProperty("totalTerjual")) {
      // Menambahkan totalTerjual pada objek ke variabel total
      // Penjumlahan total penjualan: Jika validasi berhasil, properti totalTerjual pada objek akan ditambahkan ke variabel total
      total += dataPenjualan[i].totalTerjual;
    }
  }

  // Mengembalikan total penjualan: Setelah iterasi selesai, function akan mengembalikan nilai total penjualan
  return total;
}

// Ini Array of Object yang berisi data penjualan Pak Aldi
const dataPenjualanPakAldi = [
  { 
    namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct : 'Sepatu Warrior Tristan Black Brown High - Original',
    hargaSatuan: 960000,
    kategori : "Sepatu Sneaker",
    totalTerjual : 37,
  },
  {
    namaProduct : 'Sepatu Warrior Tristan Maroon High - Original',
    kategori : "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual : 90,
  },
  {
    namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original',
    hargaSatuan: 120000,
    kategori : "Sepatu Sneaker",
    totalTerjual : 90,
  }
];

// Penggunaan dan output dari function getTotalPenjualan
console.log(getTotalPenjualan(dataPenjualanPakAldi));
console.log('');

// ====================SOAL 5====================
console.log("====================SOAL 5====================")
function getInfoPenjualan(dataPenjualanNovel) {
  // Validasi tipe data parameter
  if (!Array.isArray(dataPenjualanNovel)) {
    return "Parameter harus berupa array!";
  }

  // Inisialisasi variabel-variabel untuk menghitung total keuntungan, total modal, 
  // serta objek untuk melacak produk buku terlaris dan penulis buku terlaris.
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkBukuTerlaris = {};
  let penulisTerlaris = {};
  let jumlahBukuTerjualTerlaris = 0;

  // Iterasi melalui array dataPenjualanNovel
  for (let i = 0; i < dataPenjualanNovel.length; i++) {
    const dataBuku = dataPenjualanNovel[i];
    
    // Validasi tipe data objek dan keberadaan properti yang diperlukan pada setiap objek
    if (
      typeof dataBuku === "object" &&
      dataBuku.hasOwnProperty("hargaBeli") &&
      dataBuku.hasOwnProperty("hargaJual") &&
      dataBuku.hasOwnProperty("totalTerjual")
    ) {
      // Menghitung total keuntungan dan total modal
      totalKeuntungan += (dataBuku.hargaJual - dataBuku.hargaBeli) * dataBuku.totalTerjual;
      totalModal += dataBuku.hargaBeli * dataBuku.totalTerjual;

      // Melacak produk buku terlaris
      const produk = dataBuku.namaProduk;
      if (produkBukuTerlaris[produk]) {
        produkBukuTerlaris[produk] += dataBuku.totalTerjual;
      } else {
        produkBukuTerlaris[produk] = dataBuku.totalTerjual;
      }

      // Melacak penulis buku terlaris
      const penulis = dataBuku.penulis;
      if (penulisTerlaris[penulis]) {
        penulisTerlaris[penulis] += dataBuku.totalTerjual;
      } else {
        penulisTerlaris[penulis] = dataBuku.totalTerjual;
      }

      // Memeriksa apakah produk buku saat ini adalah buku terlaris
      if (produkBukuTerlaris[produk] > jumlahBukuTerjualTerlaris) {
        jumlahBukuTerjualTerlaris = produkBukuTerlaris[produk];
      }
    }
  }

  // Menghitung persentase keuntungan dan mengubahnya menjadi string dengan tanda persen
  const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(2) + "%";

  // Mengubah totalKeuntungan dan totalModal menjadi string dengan format "Rp."
  totalKeuntungan = "Rp. " + totalKeuntungan.toLocaleString();
  totalModal = "Rp. " + totalModal.toLocaleString();

  // Mendapatkan produk buku terlaris
  let produkTerlaris = "";
  for (const produk in produkBukuTerlaris) {
    if (produkBukuTerlaris[produk] === jumlahBukuTerjualTerlaris) {
      produkTerlaris = produk;
      break;
    }
  }

  // Mendapatkan penulis buku terlaris
  let penulisBukuTerlaris = "";
  let jumlahPenjualanTerlaris = 0;
  for (const penulis in penulisTerlaris) {
    if (penulisTerlaris[penulis] > jumlahPenjualanTerlaris) {
      penulisBukuTerlaris = penulis;
      jumlahPenjualanTerlaris = penulisTerlaris[penulis];
    }
  }

  // Membuat objek dengan hasil yang akan di-return
  const infoPenjualan = {
    totalKeuntungan,
    totalModal,
    persentaseKeuntungan,
    produkBukuTerlaris: produkTerlaris,
    penulisTerlaris: penulisBukuTerlaris,
  };

  // Mengembalikan objek dengan informasi penjualan
  return infoPenjualan;
}

// Contoh penggunaan function getInfoPenjualan
const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

console.log(getInfoPenjualan(dataPenjualanNovel));
