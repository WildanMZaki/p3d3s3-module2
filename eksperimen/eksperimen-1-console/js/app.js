'use strict';

console.log('Script terhubung');
console.log({ halaman: document.title, status: 'siap' });

// Eksperimen 1. Console dan Tipe Data
const nama = 'Rani';
const nilaiTeks = '80';
// const nilaiTeks = 'delapan puluh'; // bekas uji coba
const nilaiAngka = 80;
const aktif = true;

console.log('--- Hasil Eksperimen 1 ---');
console.log(typeof nama);
console.log(typeof nilaiTeks);
console.log(typeof nilaiAngka);
console.log(typeof aktif);
console.log(nilaiTeks + 5);
console.log(Number(nilaiTeks) + 5);
console.log(nilaiTeks == nilaiAngka);
console.log(nilaiTeks === nilaiAngka);
console.log(Number('abc'));
