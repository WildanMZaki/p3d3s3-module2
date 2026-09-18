'use strict';

const peserta = [
  { id: 1, nama: 'Alya', prodi: 'Teknik Informatika' },
  { id: 2, nama: 'Bima', prodi: 'Sistem Informasi' },
];

const form = document.querySelector('#form-peserta');
const namaInput = document.querySelector('#nama');
const prodiInput = document.querySelector('#prodi');
const filterInput = document.querySelector('#filter-prodi');
const daftar = document.querySelector('#daftar-peserta');
const status = document.querySelector('#status');
const errorNama = document.querySelector('#error-nama');
const errorProdi = document.querySelector('#error-prodi');

function validasiPeserta(calon) {
  const nama = calon.nama ? calon.nama.trim() : '';
  const prodi = calon.prodi ? calon.prodi.trim() : '';

  let pesanErrorNama = '';
  let pesanErrorProdi = '';

  if (nama.length < 3) {
    pesanErrorNama = 'Nama minimal 3 karakter.';
  }

  if (!prodi) {
    pesanErrorProdi = 'Program studi wajib dipilih.';
  }

  return {
    valid: pesanErrorNama === '' && pesanErrorProdi === '',
    errorNama: pesanErrorNama,
    errorProdi: pesanErrorProdi,
  };
}

function buatKartuPeserta(item) {
  const article = document.createElement('article');
  article.classList.add('kartu');

  const h2 = document.createElement('h2');
  h2.textContent = item.nama;

  const p = document.createElement('p');
  p.textContent = item.prodi;

  article.appendChild(h2);
  article.appendChild(p);

  return article;
}

function renderPeserta(data) {
  if (data.length === 0) {
    const pesanKosong = document.createElement('p');
    pesanKosong.textContent = 'Tidak ada peserta';
    daftar.replaceChildren(pesanKosong);
    status.textContent = 'Tidak ada peserta';
    return;
  }

  status.textContent = '';

  const cards = data.map((item) => buatKartuPeserta(item));
  daftar.replaceChildren(...cards);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const calon = {
    nama: namaInput.value,
    prodi: prodiInput.value,
  };

  const hasilValidasi = validasiPeserta(calon);

  errorNama.textContent = hasilValidasi.errorNama;
  namaInput.setAttribute('aria-invalid', String(hasilValidasi.errorNama !== ''));

  errorProdi.textContent = hasilValidasi.errorProdi;
  prodiInput.setAttribute('aria-invalid', String(hasilValidasi.errorProdi !== ''));

  if (!hasilValidasi.valid) {
    return;
  }

  const pesertaBaru = {
    id: Date.now(),
    nama: calon.nama.trim(),
    prodi: calon.prodi.trim(),
  };

  peserta.push(pesertaBaru);
  form.reset();

  filterInput.value = 'semua';
  renderPeserta(peserta);
});

filterInput.addEventListener('change', () => {
  const prodiTerpilih = filterInput.value;

  if (prodiTerpilih === 'semua') {
    renderPeserta(peserta);
  } else {
    const hasilFilter = peserta.filter((item) => item.prodi === prodiTerpilih);
    renderPeserta(hasilFilter);
  }
});

renderPeserta(peserta);
