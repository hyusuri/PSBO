# <div align="center"> Laporan Akhir PSBO </div>
# <div align="center"> **IPB Scholar** </div>
## <div align="center"> (P1 | Kelompok 6) </div>

[Deskripsi](#deskripsi-singkat-aplikasi) | [User Analysis](#user-story) | [Lingkungan Pengembangan](#spesifikasi-teknis-lingkungan-pengembangan) | [Konsep OOP](#konsep-oop-yang-digunakan) | [Tipe Desain Pengembangan](#tipe-desain-pengembangan-yang-digunakan) | [Hasil & Pembahasan](#hasil-dan-pembahasan) | [Hasil Implementasi](#hasil-implementasi) | [Saran](#saran) | [Developer & Job Desc](#developer-dan-job-desc) | [Link](#link) |
:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:

## Deskripsi Singkat Aplikasi
Aplikasi yang dirancang berbentuk suatu web app. Pada web tersebut para mahasiswa dapat membuat profil untuk diri mereka sendiri. Di dalam profil tersebut terdapat data-data umum mereka seperti nama, jurusan dan lainnya, dan juga terdapat prestasi-prestasi, rekam jejak organisasi dan pengalaman lainnya. Data diri tersebut diperoleh dari database simak, sedangkan data prestasi dan organisasi ini didapat dari data simawa. Selain data diri, mahasiswa juga dapat mengunggah berkas-berkas umum yang dibutuhkan suatu beasiswa seperti keterangan gaji orang tua, KTP/KK, dan lainnya jika tidak terdapat di dalam database simak.

Dalam web tersebut, mahasiswa dapat login menggunakan akun IPB. Setelah login, mahasiswa diarahkan ke homepage yang berisi daftar beasiswa yang sedang dibuka dan yang dapat didaftar oleh mahasiswa tersebut. Hal ini dibuat dengan tujuan agar mahasiswa lebih mudah menemukan beasiswa yang sesuai dengan persyaratannya, sehingga sistem dibuat agar hanya menampilkan list beasiswa yang dapat didaftar saja. Dalam homepage juga terdapat search box yang dapat digunakan untuk mencari beasiswa. Ketika seorang mahasiswa mendaftar atau mengajukan beasiswa, mahasiswa hanya perlu mengunggah berkas tambahan saja. Untuk data - data yang pasti ada dalam persyaratan pengajuan beasiswa sudah ada dalam sistem yang diambil dari database IPB.


## User Story
1. Sebagai Mahasiswa, Saya ingin mendaftar atau mengajukan beasiswa dengan lebih mudah, sehingga Saya tidak perlu repot - repot mengisi formulir terkait data diri yang sudah ada di database IPB dan hanya perlu mengunggah berkas tambahan
2. Sebagai Mahasiswa, Saya ingin menyimpan berkas tambahan terkait Beasiswa dalam sistem, sehingga Saya lebih mudah menambahkan berkas tersebut ketika mendaftar Beasiswa
3. Sebagai Mahasiswa, Saya ingin mendapatkan informasi pembukaan beasiswa yang sesuai dan dapat Saya daftar (contoh beasiswa khusus fakultas/departemen tertentu), sehingga Saya lebih mudah mendapatkan informasi beasiswa yang dapat didaftar dan menentukan beasiswa yang sesuai

## Spesifikasi teknis lingkungan pengembangan
### Software
- `Visual Studio Code`
- `Postman`
- `Figma`
- `Github`

### Hardware
- CPU i7-7700HQ
- RAM 8GB
- ROM 1TB 
- GPU NVIDIA Geforce GTX 1050 

### Tech Stack
- `Next JS`
- `Node JS`
- `MySQL`

## Konsep OOP yang Digunakan
- **Abstraction**. Abstraksi adalah konsep yang menyembunyikan atau mengabaikan perincian dari implementasi suatu fungsi. Dalam penerapannya yaitu ketika suatu fungsi dipanggil tidak perlu diketahui detail dari fungsi tersebut, sehingga pengguna dari fungsi tersebut lebih fokus ke output yang dihasilkan dari fungsi. 
- **Encapsulation**. Enkapsulasi adalah konsep penggabungan antara data dan fungsi menjadi satu bagian (class) serta memberikan akses terbatas bagi entitas atau fungsi di luar bagian (class) tersebut.
- **Class dan Object**. Class merupakan pola atau cetakan dari suatu Object yang memiliki Method atau Behavior. Method atau Behavior adalah perilaku (fungsi) yang dapat dilakukan oleh suatu class.  Object merupakan entitas paling dasar dari OOP yang menggambarkan objek nyata. Object juga memiliki Method sesuai dengan Classnya. 
- **Inheritance**. Pewarisan adalah konsep untuk membentuk class baru dengan penurunan bagian atau dan perilaku dari class yang sudah ada. Kegunaan dari konsep ini adalah untuk membuat kelas yang lebih spesifik. 

## Tipe Desain Pengembangan yang Digunakan
![tipe desain](https://github.com/hyusuri/PSBO/blob/main/img/tipedes.png)
Tipe desain yang digunakan adalah Waterfall. Waterfall adalah metode pengembangan perangkat lunak dengan konsep yang paling klasik. Metode ini dilakukan dengan konsep menyelesaikan tahap yang sedang dilakukan sebelum beralih ke tahap berikutnya. Secara sederhana, seluruh tahap dilakukan secara berurutan dari tahap awal (Requirement Analysis) hingga tahap terakhir (Operation & Maintenance). Berikut adalah tahapan lengkapnya :
1. **Requirement Analysis**, pada tahap ini dilakukan dengan pencarian informasi mengenai kebutuhan dari sistem yang akan dirancang. Tujuan dari tahap ini adalah untuk mendefinisikan alur sistem sesuai dengan masalah yang akan diselesaikan melalui sistem tersebut. Tahap ini dilakukan dengan cara berdiskusi dan mencari literatur/informasi terkait sistem yang akan dirancang. Hasil dari tahap ini berupa analisis (User Story) yang akan digunakan pada tahap selanjutnya (Design). 
2. **Design**, tahap ini merupakan lanjutan dari pengolahan analisis pada tahap Requirement Analysis menjadi rancangan sistem yang lebih spesifik dan detil. Pada tahap ini didefinisikan Use Case Diagram, Activity Diagram, Class Diagram, ER Diagram, Arsitektur Sistem dan Desain UI. Selain itu, kebutuhan perangkat lunak dan keras yang diperlukan untuk membangun sistem juga ditentukan di tahap ini.
3. **Implementation**, tahap ini adalah proses implementasi dari desain yang sudah dibuat menjadi sebuah sistem. Proses yang dilakukan adalah penulisan kode (fungsi, modul, dll) dan pengujian pada level unit atau per bagian tertentu.
4. **Integration & Testing**, setelah implementasi pada tiap unit atau bagian sudah dilakukan tahap selanjutnya adalah menggabungkan dan menghubungkan seluruh bagian menjadi satu sistem. Sealin itu, dilakukan juga pengecekan dan pengujian pada keseluruhan sistem untuk memastikan seluruh bagiannya dapat berjalan dengan baik.
5. **Operation & Maintenance**, tahap terakhir dalam pengembangan sistem adalah dengan menjalankan sistem tersebut ke pengguna secara langsung. Dalam prosesnya, dilakukan juga pemeliharaan dan perbaikan sistem yang mungkin mengalami error yang sebelumnya belum ditemukan untuk tetap menjaga kinerja dari sistem.

## Hasil dan Pembahasan
### Use Case Diagram
![usecase](https://github.com/hyusuri/PSBO/blob/main/img/ucdiag.png)

### Class Diagram
![class](https://github.com/hyusuri/PSBO/blob/main/img/cddiag.png)

### Activity Diagram
![activity](https://github.com/hyusuri/PSBO/blob/main/img/actdiag.png)

### Entity Relationship Diagram
![erd](https://github.com/hyusuri/PSBO/blob/main/img/erdiag.png)

### Arsitektur Sistem
![arsitektur](https://github.com/hyusuri/PSBO/blob/main/img/arsdiag.png)

### Fungsi Utama yang Dikembangkan
- **Mengisi form Beasiswa secara otomatis.** Fungsi ini digunakan untuk memudahkan pengisian data - data yang diperlukan pada form Beasiswa yang sebenarnya sudah ada di database IPB. Tujuannya agar Mahasiswa tidak perlu mengisi dan mengubah data tersebut yang akan diinputkan langsung oleh sistem. 
- **Unggah berkas tambahan.** Fungsi ini digunakan untuk menyimpan berkas - berkas yang sering digunakan pada pendaftaran Beasiswa. Tujuannya agar Mahasiswa tidak perlu menggunggah berkas yang sama berulang kali ketika mendaftar Beasiswa dan dapat langsung memilihnya ketika mengisi form Beasiswa.

### Fungsi CRUD
- Create
    - Mahasiswa dapat membuat/mengunggah berkas tambahan baru terkait Beasiswa ke database sistem 
- Read
    - Mahasiswa dapat melihat daftar informasi Beasiswa di halaman beranda
    - Mahasiswa dapat melihat detail Beasiswa di halaman Beasiswa
    - Mahasiswa dapat melihat data diri di halaman profil
- Update
    - Mahasiswa dapat mengubah berkas tambahan terkait Beasiswa yang sudah pernah ditambahkan
- Delete
    -   

## Hasil implementasi
### Screenshot Sistem
#### Login
![login](https://github.com/hyusuri/PSBO/blob/main/img/login.png)
#### Beranda
![home](https://github.com/hyusuri/PSBO/blob/main/img/home.png)
#### Profil
![profil](https://github.com/hyusuri/PSBO/blob/main/img/Profile.png)
#### Detil Beasiswa
![detail beasiswa](https://github.com/hyusuri/PSBO/blob/main/img/detail_beasiswa.png)
#### Form Beasiswa
![formulir_beasiswa](https://github.com/hyusuri/PSBO/blob/main/img/formulir_beasiswa.png)

## Saran
Saran untuk pengembangan sistem selanjutnya, antara lain :
- Implementasi sistem dapat menggunakan konsep OOP dan design pattern yang lebih baik agar lebih mudah untuk dikembangkan
- Dapat ditambahkan fungsi sorting Beasiswa otomatis agar dapat menampilkan Beasiswa sesuai data Mahasiswa
- Dapat ditambahkan fungsi pencarian (search box) untuk memudahkan pencarian beasiswa pada halaman beranda

## Developer dan Job Desc
|NIM|Nama|Role|
|---|---|---|
|G64180007|Arya Aminata|Analyst & Project Manager|
|G64180036|Hafizh Yusuf Buchori|Frontend & Backend Developer|
|G64180064|Muhammad Rayhan Adyatma|UI & Database Designer|
|G64180075|Pradhipta Trimanggala Satya|Backend Developer|
|G64180084|Faiz Muhammad 'Alauddin|Frontend Developer|

## Link
-  Figma : [PSBO Kelompok 6 P1 | Figma](https://www.figma.com/file/dKVKrEMTA4gxcKf6wE9IwI/PSBO-Kelompok-6-P1?node-id=0%3A1)
-  Trello : [PSBO Kelompok 6 P1 | Trello](https://trello.com/b/e1TKxm4c/psbo)
