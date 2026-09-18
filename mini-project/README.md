# Mini Project: Lokakarya Web Dasar 2026

**Mata Kuliah**: Proyek 3 — Proyek Pengembangan Perangkat Lunak Berbasis Web
**Program Studi**: D3 Teknik Informatika
**Nama**: Wildan M Zaki
**NIM**: 251511062
**Kelas**: B
**Repository**: [Repo Module 2](https://github.com/WildanMZaki/p3d3s3-module2)

---

## 1. Ringkasan Proyek

Landing page ini dibangun untuk mempromosikan kegiatan **Lokakarya Web Dasar 2026**, sebuah inisiatif belajar sebaya mahasiswa D3 Teknik Informatika untuk memperdalam fondasi HTML & CSS murni secara terstruktur sebelum melangkah ke framework modern.

Halaman ini mematuhi standar web modern, mengutamakan struktur semantik yang bermakna, tata letak adaptif menggunakan Flexbox tanpa framework eksternal, kepatuhan aksesibilitas keyboard (`focus-visible`), serta bebas dari *horizontal overflow* pada viewport ekstrem (320px).

## 2. Refleksi Pembelajaran

Mengerjakan proyek *mini landing page* ini memberikan perspektif mendalam mengenai perbedaan mendasar antara sekadar membuat tampilan yang terlihat rapi dengan membangun fondasi web yang benar secara teknis. Selama proses pengerjaan, godaan terbesar adalah langsung bergantung pada *framework* instan atau membiarkan AI menghasilkan *template* utuh secara otomatis. Namun, ketika saya membedah kembali kode tersebut, saya menyadari bahwa kode yang dihasilkan mesin sering kali terlalu generik, kaku, dan mengabaikan konteks nyata kebutuhan pengguna.

Tantangan teknis paling signifikan terletak pada penataan *layout* Flexbox murni serta pencegahan *horizontal overflow* pada resolusi layar 320px. Pengalaman mengembangkan sistem informasi kompleks (seperti RME Medisy) yang *desktop-centric* biasanya menyerahkan responsivitas seluler sepenuhnya pada bawaan  *framework* . Melalui modul ini, saya dipaksa memahami kembali  *Mobile-First design* , penerapan `box-sizing: border-box`, pembatasan `max-width: 100%`, serta penentuan `flex-basis` yang fleksibel agar kontainer dapat meregang dan menyusut secara proporsional.

Selain itu, eksplorasi pada aspek aksesibilitas membuka wawasan baru. Menambahkan pseudo-class `:focus-visible` dengan kontras yang memadai bukan sekadar formalitas pengujian, melainkan tanggung jawab dasar pengembang web untuk memastikan aplikasi dapat dioperasikan oleh semua orang, termasuk mereka yang mengandalkan navigasi keyboard.

Secara keseluruhan, eksperimen ini memperkuat pemahaman saya bahwa penguasaan HTML semantik dan CSS murni adalah investasi keterampilan yang mutlak. *Framework* dan pustaka tampilan akan terus berganti, tetapi pemahaman tentang alur  *cascade* , kalkulasi  *box model* , serta hierarki dokumen akan selalu menjadi fondasi utama dalam memecahkan masalah rekayasa web secara elegan dan mandiri.
