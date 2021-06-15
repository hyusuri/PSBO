# <div align="center"> Laporan Akhir PSBO </div>
# <div align="center"> **IPB Scholar** </div>
## <div align="center"> (P1 | Kelompok 6) </div>

[Deskripsi](#deskripsi-singkat-aplikasi) | [User Analysis](#user-story) | [Lingkungan Pengembangan](#spesifikasi-teknis-lingkungan-pengembangan) | [Konsep OOP](#konsep-oop-yang-digunakan) | [Tipe Desain Pengembangan](#tipe-desain-pengembangan-yang-digunakan) | [Hasil & Pembahasan](#hasil-dan-pembahasan) | [Hasil Implementasi](#hasil-implementasi) | [Saran](#saran) | [Developer & Job Desc](#developer-&-job-desc) | [Link](#link) |
:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:

## Deskripsi Singkat Aplikasi
Aplikasi yang dirancang berbentuk suatu web app. Pada web tersebut para mahasiswa dapat membuat profil untuk diri mereka sendiri. Di dalam profil tersebut terdapat data-data umum mereka seperti nama, jurusan dan lainnya, dan juga terdapat prestasi-prestasi, rekam jejak organisasi dan pengalaman lainnya. Data diri tersebut diperoleh dari database simak, sedangkan data prestasi dan organisasi ini didapat dari data simawa. Selain data diri, mahasiswa juga dapat mengunggah berkas-berkas umum yang dibutuhkan suatu beasiswa seperti keterangan gaji orang tua, KTP/KK, dan lainnya jika tidak terdapat di dalam database simak.

Dalam web tersebut, mahasiswa dapat login menggunakan akun IPB. Setelah login, mahasiswa diarahkan ke homepage yang berisi daftar beasiswa yang sedang dibuka dan yang dapat didaftar oleh mahasiswa tersebut. Hal ini dibuat dengan tujuan agar mahasiswa lebih mudah menemukan beasiswa yang sesuai dengan persyaratannya, sehingga sistem dibuat agar hanya menampilkan list beasiswa yang dapat didaftar saja. Dalam homepage juga terdapat search box yang dapat digunakan untuk mencari beasiswa. Ketika seorang mahasiswa mendaftar atau mengajukan beasiswa, mahasiswa hanya perlu mengunggah berkas tambahan saja. Untuk data - data yang pasti ada dalam persyaratan pengajuan beasiswa sudah ada dalam sistem yang diambil dari database IPB.


## User Story
1. Sebagai Mahasiswa, Saya ingin mendaftar atau mengajukan beasiswa dengan lebih mudah, sehingga Saya tidak perlu repot - repot mengisi formulir terkait data diri yang sudah ada di database IPB dan hanya perlu mengunggah berkas tambahan
2. Sebagai Mahasiswa, Saya ingin mendapatkan informasi pembukaan beasiswa yang sesuai dan dapat Saya daftar (contoh beasiswa khusus fakultas/departemen tertentu), sehingga Saya lebih mudah mendapatkan informasi beasiswa yang dapat didaftar dan menentukan beasiswa yang sesuai

## Spesifikasi teknis lingkungan pengembangan
### Software :
- `Visual Studio Code`
- `Postman`
- `Figma`
- `Github`

### Hardware :
- CPU i7-7700HQ
- RAM 8GB
- ROM 1TB 
- GPU NVIDIA Geforce GTX 1050 

### Tech Stack :
- `Next JS`
- `Node JS`
- `MySQL`

## Konsep OOP yang Digunakan
Konsep OOP yang digunakan yaitu Enkapsulasi. Enkapsulasi adalah ...


## Tipe Desain Pengembangan yang Digunakan
Tipe desain yang digunakan adalah Waterfall. Waterfall adalah metode pengembangan ...


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

## Saran
Saran untuk pengembangan sistem selanjutnya, antara lain :
- Implementasi sistem dapat menggunakan konsep OOP dan design pattern yang lebih baik agar lebih mudah untuk dikembangkan
- Dapat ditambahkan fungsi sorting Beasiswa otomatis agar dapat menampilkan Beasiswa sesuai data Mahasiswa
- Dapat ditambahkan fungsi pencarian (search box) untuk memudahkan pencarian beasiswa pada halaman beranda

## Developer & Job Desc
|NIM|Nama|Role|
|---|---|---|
|G64180007|Arya Aminata|...|
|G64180036|Hafizh Yusuf Buchori|...|
|G64180064|Muhammad Rayhan Adyatma|...|
|G64180075|Pradhipta Trimanggala Satya|...|
|G64180084|Faiz Muhammad 'Alauddin|...|

## Link
-  Figma : [PSBO Kelompok 6 P1 | Figma](https://www.figma.com/file/dKVKrEMTA4gxcKf6wE9IwI/PSBO-Kelompok-6-P1?node-id=0%3A1)
-  Trello : [PSBO Kelompok 6 P1 | Trello](https://trello.com/b/e1TKxm4c/psbo)
