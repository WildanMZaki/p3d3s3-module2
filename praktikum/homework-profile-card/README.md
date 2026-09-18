# Interactive Profile Card

Proyek ini merupakan implementasi kartu profil mahasiswa interaktif yang memadukan manipulasi DOM, penanganan event, validasi form, serta pemuatan data asinkron berbasis `fetch`.

## Fitur Utama

1. **Pemuatan Data Asinkron**: Profil dan daftar keterampilan awal diambil secara dinamis dari `data/profile.json`.
2. **State Antarmuka Lengkap**: Mendukung kondisi `loading`, `success`, `empty`, `error`, dan tombol `Coba Lagi`.
3. **Toggle Bio**: Menampilkan/menyembunyikan bio menggunakan `aria-expanded` dan kontrol atribut `hidden`.
4. **Ganti Tema (Dark/Light)**: Berpindah tema secara mulus melalui kelas CSS pada elemen `body`.
5. **Manajemen Keterampilan Dinamis**:
   - Menambah keterampilan baru dengan validasi input kosong dan pencegahan duplikasi.
   - Menghapus keterampilan dengan tombol khusus per item.
   - Menangani kondisi ketika semua keterampilan terhapus.
6. **Aksesibilitas & Anti-Duplikasi**: Seluruh interaksi dapat diakses melalui keyboard dan aman dari klik ganda (debounced / guarded).

## Cara Menjalankan Menggunakan Local Development Server

Karena proyek ini menggunakan fitur `fetch()` untuk membaca file JSON lokal, Anda **harus** menjalankannya melalui server lokal (bukan protokol `file://`):

### Opsi 1: Menggunakan Python (Sudah Terpasang)

Buka terminal pada folder ini dan jalankan:

```bash
python -m http.server 3000
```

Lalu buka browser di: `http://localhost:3000`

### Opsi 2: Menggunakan VS Code Live Server

Klik kanan pada file `index.html` lalu pilih **Open with Live Server**.

### Opsi 3: Menggunakan npx serve

```bash
npx serve .
```
