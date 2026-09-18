'use strict';

const status = document.querySelector('#status');
const daftar = document.querySelector('#daftar-materi');
const tombolMuat = document.querySelector('#muat');
const tombolCobaLagi = document.querySelector('#coba-lagi');

function aturState(state, pesan) {
  status.dataset.state = state;
  status.textContent = pesan;
  tombolCobaLagi.hidden = state !== 'error';
}

async function ambilMateri() {
  const response = await fetch('data/materi.json');
  if (!response.ok) {
    throw new Error(`Gagal memuat data HTTP ${response.status}`);
  }
  return await response.json();
}

function renderMateri(data) {
  const cards = data.map((item) => {
    const article = document.createElement('article');
    article.classList.add('kartu');

    const h2 = document.createElement('h2');
    h2.textContent = item.judul;

    const p = document.createElement('p');
    p.textContent = `Durasi: ${item.durasi} menit`;

    article.appendChild(h2);
    article.appendChild(p);

    return article;
  });

  daftar.replaceChildren(...cards);
}

function tunggu(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function muatData() {
  aturState('loading', 'Memuat data...');

  tombolMuat.disabled = true;
  daftar.replaceChildren();

  // bantuan delay lebih lama buat screenshot bukti
  // await tunggu(5000);

  try {
    const data = await ambilMateri();

    if (data.length === 0) {
      aturState('empty', 'Data materi kosong.');
      return;
    }

    renderMateri(data);
    aturState('success', 'Data materi berhasil dimuat.');
  } catch (error) {
    console.error(error);
    aturState('error', 'Terjadi kesalahan saat memuat data.');
  } finally {
    tombolMuat.disabled = false;
  }
}

tombolMuat.addEventListener('click', muatData);
tombolCobaLagi.addEventListener('click', muatData);
