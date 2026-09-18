'use strict';

const btnNavToggle = document.querySelector('#btn-nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

const btnTema = document.querySelector('#btn-tema');

const filterButtons = document.querySelectorAll('.filter-btn');
const materiContainer = document.querySelector('#materi-container');
const materiKosong = document.querySelector('#materi-kosong');

const faqQuestions = document.querySelectorAll('.faq-question');

const formDaftar = document.querySelector('#form-daftar');
const namaInput = document.querySelector('#nama');
const emailInput = document.querySelector('#email');
const sesiInput = document.querySelector('#sesi-pilihan');
const errorNama = document.querySelector('#error-nama');
const errorEmail = document.querySelector('#error-email');
const errorSesi = document.querySelector('#error-sesi');
const pesanSukses = document.querySelector('#pesan-sukses');

const btnBackToTop = document.querySelector('#btn-back-to-top');

const daftarMateri = [
  {
    kategori: 'html',
    judul: 'HTML Semantik',
    deskripsi: 'Mengenal anatomi dokumen, pemilihan tag yang bermakna, dan hierarki heading untuk keterbacaan serta aksesibilitas yang baik.',
  },
  {
    kategori: 'css',
    judul: 'CSS Box Model',
    deskripsi: 'Mengatur margin, border, padding, dan memahami cascade CSS agar style tampilan tidak saling tumpang tindih.',
  },
  {
    kategori: 'layout',
    judul: 'Flexbox Responsif',
    deskripsi: 'Menyusun tata letak halaman yang adaptif di berbagai ukuran layar tanpa memicu scrollbar horizontal pada tampilan kecil.',
  },
];

btnNavToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  btnNavToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    btnNavToggle.setAttribute('aria-expanded', 'false');
  });
});

btnTema.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  btnTema.setAttribute('aria-pressed', String(isDark));
  btnTema.textContent = isDark ? '☀️' : '🌙';
});

function renderMateri(kategori) {
  let hasil = daftarMateri;
  if (kategori !== 'semua') {
    hasil = daftarMateri.filter((item) => item.kategori === kategori);
  }

  if (hasil.length === 0) {
    materiContainer.replaceChildren();
    materiKosong.hidden = false;
    return;
  }

  materiKosong.hidden = true;

  const cards = hasil.map((item) => {
    const article = document.createElement('article');
    article.classList.add('feature-card');

    const h3 = document.createElement('h3');
    h3.textContent = item.judul;

    const p = document.createElement('p');
    p.textContent = item.deskripsi;

    article.appendChild(h3);
    article.appendChild(p);

    return article;
  });

  materiContainer.replaceChildren(...cards);
}

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderMateri(btn.dataset.filter);
  });
});

faqQuestions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answerId = btn.getAttribute('aria-controls');
    const answerEl = document.getElementById(answerId);
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

    faqQuestions.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.setAttribute('aria-expanded', 'false');
        const otherId = otherBtn.getAttribute('aria-controls');
        const otherEl = document.getElementById(otherId);
        if (otherEl) otherEl.hidden = true;
      }
    });

    btn.setAttribute('aria-expanded', String(!isExpanded));
    if (answerEl) {
      answerEl.hidden = isExpanded;
    }
  });
});

function validasiEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

namaInput.addEventListener('input', () => {
  errorNama.textContent = '';
  namaInput.removeAttribute('aria-invalid');
});

emailInput.addEventListener('input', () => {
  errorEmail.textContent = '';
  emailInput.removeAttribute('aria-invalid');
});

sesiInput.addEventListener('change', () => {
  errorSesi.textContent = '';
  sesiInput.removeAttribute('aria-invalid');
});

formDaftar.addEventListener('submit', (event) => {
  event.preventDefault();

  const nama = namaInput.value.trim();
  const email = emailInput.value.trim();
  const sesi = sesiInput.value;

  let isValid = true;

  if (nama.length < 3) {
    errorNama.textContent = 'Nama lengkap minimal 3 karakter.';
    namaInput.setAttribute('aria-invalid', 'true');
    isValid = false;
  } else {
    errorNama.textContent = '';
    namaInput.removeAttribute('aria-invalid');
  }

  if (!email || !validasiEmail(email)) {
    errorEmail.textContent = 'Format email tidak valid.';
    emailInput.setAttribute('aria-invalid', 'true');
    isValid = false;
  } else {
    errorEmail.textContent = '';
    emailInput.removeAttribute('aria-invalid');
  }

  if (!sesi) {
    errorSesi.textContent = 'Silakan pilih sesi lokakarya.';
    sesiInput.setAttribute('aria-invalid', 'true');
    isValid = false;
  } else {
    errorSesi.textContent = '';
    sesiInput.removeAttribute('aria-invalid');
  }

  if (!isValid) {
    pesanSukses.hidden = true;
    return;
  }

  pesanSukses.hidden = false;
  pesanSukses.textContent = `Terima kasih ${nama}, pendaftaran Anda untuk "${sesi}" berhasil dikirim! Konfirmasi akan dikirim ke ${email}.`;

  formDaftar.reset();
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnBackToTop.hidden = false;
  } else {
    btnBackToTop.hidden = true;
  }
});

btnBackToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

renderMateri('semua');
