console.log("====================SOAL 1====================")
function changeWord(selectedText, changedText, text) {
  const words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i] === selectedText) {
      words[i] = changedText;
    }
  }

  const new_text = words.join(' ');

  return new_text;
}


const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";
console.log(`Kalimat 1 ==> ${changeWord('mencintai', 'membenci', kalimat1)}`);
console.log(`Kalimat 2 ==> ${changeWord('bromo', 'semeru', kalimat2)}`);
console.log('')



console.log("====================SOAL 2====================")

const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber !== 'number') {

    return 'Error: invalid data type';
  }
  
  if (givenNumber % 2 === 0) {
    return 'GENAP';
  } else {

    return 'GANJIL';
  }
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())
console.log('')



console.log("====================SOAL 3====================")
function getAngkaTerbesarKedua(dataNumbers) {
  if (!Array.isArray(dataNumbers)) {
  
    return 'ERROR: Parameter harus berupa array.';
  }


  if (dataNumbers.length < 2) {

    return 'ERROR: Array harus berisi minimal dua angka.';
  }

  const max1 = Math.max(...dataNumbers);
  const indexMax1 = dataNumbers.indexOf(max1);
  dataNumbers.splice(indexMax1, 1);

  
  const max2 = Math.max(...dataNumbers);

  return max2;
}


const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
console.log(getAngkaTerbesarKedua([]));
console.log('');



console.log("====================SOAL 4====================")
function getTotalPenjualan(dataPenjualan) {

  if (!Array.isArray(dataPenjualan)) {
    return "Parameter harus berupa array!";
  }


  let total = 0;

  for (let i = 0; i < dataPenjualan.length; i++) {
    if (typeof dataPenjualan[i] === "object" && dataPenjualan[i].hasOwnProperty("totalTerjual")) {
      
      total += dataPenjualan[i].totalTerjual;
    }
  }


  return total;
}


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

console.log(getTotalPenjualan(dataPenjualanPakAldi));
console.log('');


console.log("====================SOAL 5====================")
function getInfoPenjualan(dataPenjualanNovel) {

  if (!Array.isArray(dataPenjualanNovel)) {
    return "Parameter harus berupa array!";
  }

  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkBukuTerlaris = {};
  let penulisTerlaris = {};
  let jumlahBukuTerjualTerlaris = 0;

 
  for (let i = 0; i < dataPenjualanNovel.length; i++) {
    const dataBuku = dataPenjualanNovel[i];
    
    if (
      typeof dataBuku === "object" &&
      dataBuku.hasOwnProperty("hargaBeli") &&
      dataBuku.hasOwnProperty("hargaJual") &&
      dataBuku.hasOwnProperty("totalTerjual")
    ) {
   
      totalKeuntungan += (dataBuku.hargaJual - dataBuku.hargaBeli) * dataBuku.totalTerjual;
      totalModal += dataBuku.hargaBeli * dataBuku.totalTerjual;

     
      const produk = dataBuku.namaProduk;
      if (produkBukuTerlaris[produk]) {
        produkBukuTerlaris[produk] += dataBuku.totalTerjual;
      } else {
        produkBukuTerlaris[produk] = dataBuku.totalTerjual;
      }

      
      const penulis = dataBuku.penulis;
      if (penulisTerlaris[penulis]) {
        penulisTerlaris[penulis] += dataBuku.totalTerjual;
      } else {
        penulisTerlaris[penulis] = dataBuku.totalTerjual;
      }

      
      if (produkBukuTerlaris[produk] > jumlahBukuTerjualTerlaris) {
        jumlahBukuTerjualTerlaris = produkBukuTerlaris[produk];
      }
    }
  }

  
  const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(2) + "%";


  totalKeuntungan = "Rp. " + totalKeuntungan.toLocaleString();
  totalModal = "Rp. " + totalModal.toLocaleString();


  let produkTerlaris = "";
  for (const produk in produkBukuTerlaris) {
    if (produkBukuTerlaris[produk] === jumlahBukuTerjualTerlaris) {
      produkTerlaris = produk;
      break;
    }
  }

  
  let penulisBukuTerlaris = "";
  let jumlahPenjualanTerlaris = 0;
  for (const penulis in penulisTerlaris) {
    if (penulisTerlaris[penulis] > jumlahPenjualanTerlaris) {
      penulisBukuTerlaris = penulis;
      jumlahPenjualanTerlaris = penulisTerlaris[penulis];
    }
  }


  const infoPenjualan = {
    totalKeuntungan,
    totalModal,
    persentaseKeuntungan,
    produkBukuTerlaris: produkTerlaris,
    penulisTerlaris: penulisBukuTerlaris,
  };

  
  return infoPenjualan;
}


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
