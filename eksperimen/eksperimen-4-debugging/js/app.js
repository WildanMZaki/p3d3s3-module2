'use strict';

const form = document.querySelector('#form-hitung');
const hargaInput = document.querySelector('#harga');
const jumlahInput = document.querySelector('#jumlah');
const hasil = document.querySelector('#hasil');
const pesan = document.querySelector('#pesan');

function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}

function tampilkanPesan(teks) {
  pesan.textContent = teks;
}

function prosesForm(event) {
  console.count('prosesForm');
  
  event.preventDefault();

  const harga = Number(hargaInput.value); // variaebel dipulihkan
  const jumlah = Number(jumlahInput.value);

  // const harga = Number(hargainput.value); // testing var typo

  // ujicoba tanpa konversi ke number dulu
  // const harga = hargaInput.value;
  // const jumlah = jumlahInput.value;

  if (harga <= 0 || jumlah <= 0) {
    tampilkanPesan('Harga dan jumlah harus positif.');
    return;
  }

  const total = hitungTotal(harga, jumlah);
  hasil.textContent = total.toLocaleString('id-ID');
  tampilkanPesan('Perhitungan berhasil.');
}

if (form) {
  form.addEventListener('submit', prosesForm);

  // uji coba handler ganda
  form.addEventListener('submit', (event) => {
    prosesForm(event);
  });
}
