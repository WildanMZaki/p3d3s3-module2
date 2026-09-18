'use strict';

const statusProfil = document.querySelector('#status-profil');
const profileAvatar = document.querySelector('#profile-avatar');
const profileName = document.querySelector('#profile-name');
const profileNim = document.querySelector('#profile-nim');
const profileRole = document.querySelector('#profile-role');
const profileBio = document.querySelector('#profile-bio');
const profileDetail = document.querySelector('#profile-detail');
const btnToggleDetail = document.querySelector('#btn-toggle-detail');
const btnTema = document.querySelector('#btn-tema');
const labelTema = document.querySelector('#label-tema');
const skillsList = document.querySelector('#skills-list');
const skillsEmptyMsg = document.querySelector('#skills-empty-msg');
const formTambahSkill = document.querySelector('#form-tambah-skill');
const inputSkill = document.querySelector('#input-skill');
const errorSkill = document.querySelector('#error-skill');
const btnCobaLagi = document.querySelector('#btn-coba-lagi');

let daftarKeterampilan = [];

function aturState(state, pesan) {
  statusProfil.dataset.state = state;
  statusProfil.textContent = pesan;
  btnCobaLagi.hidden = state !== 'error';
}

async function ambilDataProfil() {
  const response = await fetch('data/profile.json');
  if (!response.ok) {
    throw new Error(`Gagal memuat profil HTTP ${response.status}`);
  }
  return await response.json();
}

function hapusSkill(index) {
  daftarKeterampilan.splice(index, 1);
  renderSkills();
}

function renderSkills() {
  if (daftarKeterampilan.length === 0) {
    skillsList.replaceChildren();
    skillsEmptyMsg.hidden = false;
    return;
  }

  skillsEmptyMsg.hidden = true;

  const cards = daftarKeterampilan.map((skill, index) => {
    const span = document.createElement('span');
    span.classList.add('skill-pill');

    const text = document.createTextNode(skill);

    const btnHapus = document.createElement('button');
    btnHapus.type = 'button';
    btnHapus.classList.add('btn-hapus-skill');
    btnHapus.textContent = '×';
    btnHapus.setAttribute('aria-label', `Hapus keterampilan ${skill}`);
    btnHapus.addEventListener('click', () => {
      hapusSkill(index);
    });

    span.appendChild(text);
    span.appendChild(btnHapus);

    return span;
  });

  skillsList.replaceChildren(...cards);
}

async function muatProfil() {
  aturState('loading', 'Memuat data profil...');
  profileAvatar.hidden = true;

  try {
    const data = await ambilDataProfil();

    if (!data || Object.keys(data).length === 0) {
      aturState('empty', 'Data profil tidak ditemukan.');
      return;
    }

    profileName.textContent = data.nama || '-';
    profileNim.textContent = data.nim || '-';
    profileRole.textContent = data.role || data.programStudi || '-';
    profileBio.textContent = data.bio || '-';

    if (data.avatar) {
      profileAvatar.src = data.avatar;
      profileAvatar.alt = `Foto Profil ${data.nama}`;
      profileAvatar.hidden = false;
    }

    daftarKeterampilan = Array.isArray(data.keterampilan) ? [...data.keterampilan] : [];
    renderSkills();

    aturState('success', 'Profil berhasil dimuat.');
  } catch (error) {
    console.error(error);
    aturState('error', 'Gagal memuat profil. Silakan coba lagi.');
  }
}

btnTema.addEventListener('click', () => {
  const aktif = document.body.classList.toggle('dark-theme');
  btnTema.setAttribute('aria-pressed', String(aktif));
  labelTema.textContent = aktif ? '☀️ Mode Terang' : '🌙 Mode Gelap';
});

btnToggleDetail.addEventListener('click', () => {
  const tersembunyi = profileDetail.hidden;
  profileDetail.hidden = !tersembunyi;
  btnToggleDetail.setAttribute('aria-expanded', String(tersembunyi));
  btnToggleDetail.textContent = tersembunyi ? 'Tutup Bio' : 'Lihat Bio Lengkap';
});

inputSkill.addEventListener('input', () => {
  errorSkill.textContent = '';
  inputSkill.removeAttribute('aria-invalid');
});

formTambahSkill.addEventListener('submit', (event) => {
  event.preventDefault();

  const nilai = inputSkill.value.trim();

  if (!nilai) {
    errorSkill.textContent = 'Nama keterampilan tidak boleh kosong.';
    inputSkill.setAttribute('aria-invalid', 'true');
    return;
  }

  const sudahAda = daftarKeterampilan.some(
    (item) => item.toLowerCase() === nilai.toLowerCase()
  );

  if (sudahAda) {
    errorSkill.textContent = 'Keterampilan ini sudah ada dalam daftar.';
    inputSkill.setAttribute('aria-invalid', 'true');
    return;
  }

  daftarKeterampilan.push(nilai);
  inputSkill.value = '';
  errorSkill.textContent = '';
  inputSkill.removeAttribute('aria-invalid');

  renderSkills();
});

btnCobaLagi.addEventListener('click', muatProfil);

muatProfil();
