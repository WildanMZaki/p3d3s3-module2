'use strict';

const judulUtama = document.querySelector('#judul-utama');
const status = document.querySelector('#status');
const namaInput = document.querySelector('#nama');
const jumlahKarakter = document.querySelector('#jumlah-karakter');
const tombolUbahJudul = document.querySelector('#ubah-judul');
const tombolToggleStatus = document.querySelector('#toggle-status');

console.log({
  judulUtama,
  status,
  namaInput,
  jumlahKarakter,
  tombolUbahJudul,
  tombolToggleStatus
});

// langkah 2
tombolUbahJudul.addEventListener('click', () => {
  judulUtama.textContent = 'DOM Berhasil Diubah';
  // status.textContent = 'Teks heading berhasil diubah.';
  ubahStatus('Teks heading berhasil diubah.');
  // status?.textContent = 'Teks heading berhasil diubah.';
});

// langkah 3
tombolToggleStatus.addEventListener('click', () => {
  const aktif = document.body.classList.toggle('is-active');
  
  tombolToggleStatus.setAttribute(
    'aria-pressed',
    String(aktif)
  );
  
  // status.textContent = aktif
  //   ? 'Mode aktif dinyalakan.'
  //   : 'Mode aktif dimatikan.';
  ubahStatus(aktif
    ? 'Mode aktif dinyalakan.'
    : 'Mode aktif dimatikan.');
});

// langkah 4
namaInput.addEventListener('input', (event) => {
  const jumlah = event.target.value.length;
  jumlahKarakter.textContent = jumlah;
});

// langkah 5
function ubahStatus(pesan) {
  if (!status) {
    console.warn('Elemen #status tidak ditemukan.');
    return;
  }
  
  status.textContent = pesan;
}
