/* =========================================================================
   DATA PORTOFOLIO — EDIT FILE INI SAJA
   -------------------------------------------------------------------------
   Semua isi website (nama, deskripsi, keahlian, sertifikasi, proyek, dll)
   diambil dari objek "portfolioData" di bawah ini. Untuk memperbarui isi
   situs, cukup ubah nilai di file ini lalu simpan — TIDAK perlu membuka
   atau mengubah portofolio_cv3.html sama sekali.

   CARA MENAMBAH ITEM BARU (skill / sertifikat / proyek):
   1. Cari array yang sesuai (skills, certifications, projects, dst).
   2. Salin (copy) salah satu blok "{ ... }" yang sudah ada di dalamnya.
   3. Tempel (paste) tepat di bawahnya.
   4. Ganti isi teksnya sesuai kebutuhan.
   5. Pastikan ada tanda koma (,) di antara setiap blok "{ ... }".

   CARA MENGHAPUS ITEM:
   Hapus seluruh blok "{ ... }" milik item tersebut (termasuk koma
   setelah/sebelumnya agar tidak ada koma ganda atau koma di awal/akhir).

   TIPS: setelah mengedit, buka portofolio_cv3.html di browser lalu
   refresh (F5) untuk melihat perubahan.
   ========================================================================= */

const portfolioData = {

  // ============================================================
  // PROFIL & BAGIAN HERO (atas halaman) + TENTANG SAYA + KONTAK
  // ============================================================
  profile: {
    greeting: "Halo, Nama Saya",
    name: "Nama Anda",

    // Daftar peran/profesi yang muncul bergantian dengan efek mengetik.
    // Tambah atau kurangi baris sesuai kebutuhan.
    roles: [
      "Data Scientist.",
      "Robotics Engineer.",
      "AI & CV Enthusiast.",
      "Data Analyst.",
      "Frontend Developer."
    ],

    heroDescription: "Saya merancang dan membangun pengalaman digital yang menarik, responsif, dan mudah digunakan. Mari ubah ide brilian Anda menjadi kenyataan.",

    // Kosongkan photoUrl ("") jika belum punya foto -> huruf di photoInitial
    // akan tampil sebagai gantinya. Jika sudah punya foto, isi photoUrl
    // dengan alamat/link gambarnya, contoh: "foto-saya.jpg" atau URL penuh.
    photoUrl: "",
    photoInitial: "A",

    // Link tombol "Unduh CV Lengkap (PDF)". Ganti "#" dengan link file CV Anda.
    cvUrl: "#",

    // Paragraf di bagian "Tentang Saya". Boleh 1, 2, 3, atau lebih paragraf —
    // tambahkan/hapus blok teks di dalam kurung siku [ ] di bawah ini.
    aboutParagraphs: [
      "Halo! Saya adalah seorang tech enthusiast yang memiliki ketertarikan mendalam pada persimpangan antara Kecerdasan Buatan (AI), Robotika, dan Pengembangan Web (Frontend).",
      "Meski belum terikat dengan perusahaan formal, saya telah mendedikasikan waktu saya untuk membangun berbagai proyek independen, mengikuti bootcamp intensif, dan bereksperimen dengan data serta mikrokontroler. Saya siap membawa semangat eksplorasi ini ke dalam lingkungan profesional seutuhnya."
    ],

    // Bagian Kontak (paling bawah halaman)
    contactDescription: "Meskipun saat ini saya tidak secara aktif mencari peluang baru, kotak masuk saya selalu terbuka. Baik Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan berusaha sebaik mungkin untuk membalas Anda!",
    contactEmail: "emailanda@contoh.com",

    // Nama yang tampil di footer paling bawah
    footerName: "Nama Anda"
  },

  // ============================================================
  // RIWAYAT PENGALAMAN / TIMELINE (bagian "Tentang Saya")
  // Tambah/hapus blok { ... } untuk menambah riwayat baru.
  // current: true -> ditandai sebagai yang paling baru/aktif (warna terang)
  // ============================================================
  experience: [
    {
      period: "2024 - SEKARANG",
      title: "Pengembang & Peneliti Independen",
      subtitle: "Proyek Pribadi & Eksplorasi",
      description: "Fokus merancang proyek end-to-end: mulai dari melatih model Machine Learning, merakit hardware IoT dengan Arduino, hingga merancang antarmuka (Frontend) web untuk menampilkan data.",
      current: true
    },
    {
      period: "2022 - 2024",
      title: "Pembelajaran Ekstensif",
      subtitle: "Bootcamp & Sertifikasi (Coursera, Dicoding, IBM)",
      description: "Menyelesaikan berbagai program sertifikasi profesional untuk memperdalam dasar teori dan praktik di bidang Data Science, Computer Vision, dan Web Development.",
      current: false
    }
  ],

  // ============================================================
  // KEAHLIAN / SKILLS
  // icon  : singkatan pendek (2 huruf) yang tampil sebagai ikon teks
  // label : nama skill yang tampil di bawah ikon
  // color : kode warna hex untuk efek saat kursor diarahkan (hover)
  // ============================================================
  skills: [
    { icon: "Py", label: "Python", color: "#3776AB" },
    { icon: "ML", label: "Machine Learning", color: "#FF6F00" },
    { icon: "Rb", label: "Robotic", color: "#E34F26" },
    { icon: "Ar", label: "Arduino", color: "#00979D" },
    { icon: "CV", label: "Computer Vision", color: "#8A2BE2" },
    { icon: "DA", label: "Data Analyst", color: "#FFD700" },
    { icon: "DS", label: "Data Science", color: "#00CED1" },
    { icon: "FE", label: "Frontend Dev", color: "#61DAFB" }
  ],

  // ============================================================
  // SERTIFIKASI — dikelompokkan per kategori
  // theme : salah satu dari "cyan", "purple", "brand", "emerald"
  //         (menentukan warna kartu kategori)
  // items : daftar sertifikat di dalam kategori tersebut
  // ============================================================
  certifications: [
    {
      theme: "cyan",
      category: "Python, Data Science & Analyst",
      description: "Mempelajari fundamental Python, pemrosesan data (Pandas, NumPy), analisis statistik, dan visualisasi data menggunakan Tableau & Matplotlib. Mampu mengubah data mentah menjadi insight bisnis yang berharga.",
      items: [
        { icon: "📊", title: "Google Data Analytics Professional Certificate", issuer: "Coursera, Diterbitkan 2023" },
        { icon: "🐍", title: "IBM Data Science Professional", issuer: "IBM Training, Diterbitkan 2024" }
      ]
    },
    {
      theme: "purple",
      category: "Machine Learning & Computer Vision",
      description: "Eksplorasi mendalam pada algoritma Deep Learning, Jaringan Saraf Tiruan (ANN, CNN), pemrosesan gambar dengan OpenCV, dan implementasi model deteksi objek seperti YOLO.",
      items: [
        { icon: "🧠", title: "Deep Learning Specialization", issuer: "DeepLearning.AI, Diterbitkan 2024" },
        { icon: "👁️", title: "Computer Vision with Python and OpenCV", issuer: "Udemy Bootcamp, Diterbitkan 2025" }
      ]
    },
    {
      theme: "brand",
      category: "Arduino & Robotic",
      description: "Berawal dari hobi membuat line follower robot, saya mendalami mikrokontroler (Arduino, ESP32), sensor IoT, aktuator, dan bahasa pemrograman C/C++. Saat ini fokus pada penggabungan AI (Computer Vision) dengan robotika perangkat keras.",
      items: [
        { icon: "🤖", title: "Introduction to Robotics & IoT", issuer: "Dicoding Indonesia, Diterbitkan 2023" },
        { icon: "⚙️", title: "Advanced Arduino Interfacing", issuer: "Workshop Sertifikasi Universitas, Diterbitkan 2024" }
      ]
    },
    {
      theme: "emerald",
      category: "Frontend Web Development",
      description: "Menguasai perancangan antarmuka web modern yang responsif dan interaktif menggunakan HTML, CSS, JavaScript, Tailwind, dan kerangka kerja seperti React.js.",
      items: [
        { icon: "💻", title: "Meta Front-End Developer", issuer: "Coursera, Diterbitkan 2024" },
        { icon: "🎨", title: "Belajar Membuat Front-End Web", issuer: "Dicoding Indonesia, Diterbitkan 2023" }
      ]
    }
  ],

  // ============================================================
  // TOMBOL FILTER PORTOFOLIO
  // "value" pada setiap filter HARUS SAMA PERSIS dengan "category"
  // yang dipakai pada proyek-proyek di bawah (di bagian "projects").
  // Filter pertama ("Semua") sebaiknya tetap value: "semua".
  // ============================================================
  filters: [
    { label: "Semua", value: "semua" },
    { label: "Data & ML", value: "data" },
    { label: "Computer Vision", value: "ai-cv" },
    { label: "Arduino & Robotic", value: "robotik" },
    { label: "Frontend Web", value: "frontend" }
  ],

  // ============================================================
  // PROYEK / PORTOFOLIO
  // category : harus sama dengan salah satu "value" di daftar filters
  //            di atas, supaya tombol filternya berfungsi
  // theme    : salah satu dari "cyan", "purple", "brand", "emerald"
  // thumbnailLabel : teks yang tampil di area gambar/thumbnail
  // tags     : daftar teknologi yang dipakai (bebas jumlahnya)
  // link     : link menuju detail/repo proyek (boleh "#" jika belum ada)
  // ============================================================
  projects: [
    {
      // Proyek ini tampil di 2 kategori sekaligus: "robotik" dan "frontend".
      // Caranya: tulis kedua value filter dipisah spasi dalam satu teks.
      category: "robotik frontend",
      theme: "brand",
      thumbnailLabel: "Bel Sekolah Cloud",
      title: "Sistem Bel Sekolah Otomatis Berbasis Cloud",
      description: "Merancang sistem bel & pengumuman otomatis untuk pondok pesantren dengan 4 komplek terpisah (SMA, SMP, Akhwat, MI) yang masing-masing berjalan mandiri di perangkat ESP32, namun dikendalikan terpusat dari satu dashboard web berbasis cloud. Mencakup pengaturan jadwal & kegiatan, kontrol audio (DFPlayer Mini), serta pemantauan status keempat perangkat secara real-time.",
      tags: ["ESP32", "Firebase Realtime DB", "DFPlayer Mini", "GitHub Pages"],
      link: "#"
    },
    {
      category: "data",
      theme: "cyan",
      thumbnailLabel: "Dashboard Analitik",
      title: "Sistem Prediksi Penjualan",
      description: "Membangun model Machine Learning untuk memprediksi tren penjualan retail bulan depan berdasarkan historis data 3 tahun terakhir.",
      tags: ["Python", "Scikit-Learn", "Pandas"],
      link: "#"
    },
    {
      category: "ai-cv",
      theme: "purple",
      thumbnailLabel: "Deteksi Objek AI",
      title: "Deteksi Masker Real-time",
      description: "Sistem Computer Vision yang mendeteksi penggunaan masker melalui kamera webcam menggunakan arsitektur YOLOv8.",
      tags: ["OpenCV", "YOLO", "PyTorch"],
      link: "#"
    },
    {
      category: "robotik",
      theme: "brand",
      thumbnailLabel: "Robotik IoT",
      title: "Smart Robotic Arm",
      description: "Merakit dan memprogram lengan robot otomatis berbasis Arduino yang dapat dikendalikan melalui aplikasi smartphone via Bluetooth.",
      tags: ["Arduino Uno", "C++", "IoT"],
      link: "#"
    },
    {
      category: "frontend",
      theme: "emerald",
      thumbnailLabel: "Web E-Commerce",
      title: "Aplikasi Web E-Commerce",
      description: "Membangun antarmuka toko online interaktif dengan fitur filter, keranjang belanja dinamis, dan responsif di semua perangkat.",
      tags: ["React.js", "Tailwind CSS", "API"],
      link: "#"
    }
  ]

};