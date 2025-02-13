export interface ServiceList{
    id? : number, 
    service_name? : string,
    link ? : string
}

export interface ProgramList{
  id ? : number,
  name ? : string,
  services? : ServiceList[]
}

export const programList : ProgramList[] = [
  {
    id : 1,
    name : "Program Prioritas",
    services : [
      {
        id : 1,
        service_name : "Informasi Merdeka Belajar",
        link : "https://merdekabelajar.kemdikbud.go.id/"
      },
      {
        id : 2,
        service_name : "Akun Belajar",
        link : "https://belajar.id/"
      },
      {
        id : 3,
        service_name : "Merdeka Mengajar",
        link : "https://guru.kemdikbud.go.id/"
      },
      {
        id : 4,
        service_name : "Rapor Pendidikan",
        link : "https://raporpendidikan.kemdikbud.go.id/login"
      },
      {
        id : 5,
        service_name : "ARKAS",
        link : "https://arkas.kemdikbud.go.id/"
      },
      {
        id : 6,
        service_name : "SIPLah",
        link : "https://siplah.kemdikbud.go.id/"
      },
      {
        id : 7,
        service_name : "TanyaBOS",
        link : "https://tanyabos.kemdikbud.go.id/"
      },
      {
        id : 8,
        service_name : "Kampus Merdeka",
        link : "https://kampusmerdeka.kemdikbud.go.id/"
      },
      {
        id : 9,
        service_name : "7 Kebiasaan Anak Indonesia Hebat",
        link : "https://cerdasberkarakter.kemdikbud.go.id/gerakan7kebiasaan/"
      },
      {
        id : 10,
        service_name : "Wiyata Kinerja Merdeka Belajar",
        link : "https://wkmb.kemdikbud.go.id/"
      },
      {
        id : 11,
        service_name : "Sistem Informasi Perbukuan Indonesia",
        link : "https://buku.kemdikbud.go.id/"
      }
    ]
  },
  {
    id : 2,
    name : "ePPID",
    services : [
      {
        id : 1,
        service_name : "Daftar Informasi Publik",
        link : "https://ppid.kemdikbud.go.id/page/daftar-informasi-publik"
      },
      {
        id : 2,
        service_name : "e-PPID (Pejabat Pengelola Informasi & Dokumentasi)",
        link : "http://ppid.kemdikbud.go.id/"
      },
      {
        id : 3,
        service_name : "ePPID (Android)",
        link : "https://play.google.com/store/apps/details?id=com.dera.perman.ppidkemendikbudristek"
      },
      {
        id : 4,
        service_name : "Maklumat Pelayanan Informasi Publik",
        link : "https://ppid.kemdikbud.go.id/page/maklumat-pelayanan-informasi-publik"
      },
      {
        id : 5,
        service_name : "Permohonan Informasi Publik",
        link : "https://kemdikbud.lapor.go.id/"
      },
      {
        id : 6,
        service_name : "Prosedur Pengajuan Keberatan Informasi Publik",
        link : "https://ppid.kemdikbud.go.id/page/prosedur-pengajuan-keberatan-atas-permohonan-informasi-publik"
      },
      {
        id : 7,
        service_name : "Prosedur Penyelesaian Sengketa Informasi",
        link : "https://ppid.kemdikbud.go.id/page/prosedur-penyelesaian-sengketa-informasi-publik"
      },
      {
        id : 8,
        service_name : "Prosedur Permohonan Informasi Publik",
        link : "https://ppid.kemdikbud.go.id/page/prosedur-permohonan-informasi-publik"
      },
      {
        id : 9,
        service_name : "Regulasi Keterbukaan Informasi Publik",
        link : "https://ppid.kemdikbud.go.id/page/regulasi-keterbukaan-informasi-publik"
      },
      {
        id : 10,
        service_name : "Rekap Jumlah Pemohon Informasi Publik",
        link : "https://ppid.kemdikbud.go.id/page/rekapitulasi-permohonan-informasi-publik"
      }
    ]
  },
  {
    id : 3,
    name : "Siswa & Mahasiswa",
    services : [
      {
        id : 1,
        service_name : "Beasiswa Unggulan",
        link : "http://beasiswaunggulan.kemdikbud.go.id/"
      },
      {
        id : 2,
        service_name : "Bersama Hadapi Korona",
        link : "http://bersamahadapikorona.kemdikbud.go.id/"
      },
      {
        id : 3,
        service_name : "Darmasiswa",
        link : "http://darmasiswa.kemdikbud.go.id/darmasiswa/"
      },
      {
        id : 4,
        service_name : "Glosarium Bahasa Indonesia",
        link : "http://bahasasastra.kemdikbud.go.id/glosarium/"
      },
      {
        id : 5,
        service_name : "Kamus Besar Bahasa Indonesia (KBBI)",
        link : "http://kbbi.kemdikbud.go.id/"
      },
      {
        id : 6,
        service_name : "Layanan Informasi, Pengaduan dan Saran",
        link : "http://ult.kemdikbud.go.id/"
      },
      {
        id : 7,
        service_name : "Nomor Induk Siswa Nasional (NISN)",
        link : "http://nisn.data.kemdikbud.go.id/"
      },
      {
        id : 8,
        service_name : "Pembinaan Kursus dan Pelatihan",
        link : "https://kursus.kemdikbud.go.id/"
      },
      {
        id : 9,
        service_name : "Perizinan dan Penyetaraan Ijazah",
        link : "http://e-layanan.dikdasmen.kemdikbud.go.id/"
      },
      {
        id : 10,
        service_name : "Perpustakaan",
        link : "http://perpustakaan.kemdikbud.go.id/"
      },
      {
        id : 11,
        service_name : "Program Indonesia Pintar",
        link : "http://indonesiapintar.kemdikbud.go.id/"
      },
      {
        id : 12,
        service_name : "Rumah Belajar",
        link : "https://belajar.kemdikbud.go.id/"
      },
      {
        id : 13,
        service_name : "Sistem Informasi Perbukuan Indonesia",
        link : "https://buku.kemdikbud.go.id/"
      },
      {
        id : 14,
        service_name : "Televisi Edukasi",
        link : "http://tve.kemdikbud.go.id/"
      },
      {
        id : 15,
        service_name : "Ujian Nasional",
        link : "http://un.kemdikbud.go.id/"
      }
    ]
  },
  {
    id : 4,
    name : "Guru & Dosen",
    services : [
      {
        id : 1,
        service_name : "NUPTK",
        link : "http://gtk.data.kemdikbud.go.id/"
      },
      {
        id : 2,
        service_name : "Bersama Hadapi Korona",
        link : "http://bersamahadapikorona.kemdikbud.go.id/"
      },
      {
        id : 3,
        service_name : "Data Pokok Pendidikan Dasar",
        link : "http://dapo.dikdasmen.kemdikbud.go.id/"
      },
      {
        id : 4,
        service_name : "Guru Berbagi",
        link : "http://guruberbagi.kemdikbud.go.id/"
      },
      {
        id : 5,
        service_name : "Layanan Informasi, Pengaduan dan Saran",
        link : "http://ult.kemdikbud.go.id/"
      },
      {
        id : 6,
        service_name : "Layanan Sumber Daya Dikti",
        link : "http://dikti.kemdikbud.go.id/layanan-sumber-daya/"
      },
      {
        id : 7,
        service_name : "Ruang Guru PAUD",
        link : "http://anggunpaud.kemdikbud.go.id/index.php"
      },
      {
        id : 8,
        service_name : "Rumah Belajar",
        link : "https://belajar.kemdikbud.go.id/"
      },
      {
        id : 9,
        service_name : "Sistem Informasi Perbukuan Indonesia",
        link : "https://buku.kemdikbud.go.id/"
      },
      {
        id : 10,
        service_name : "Televisi Edukasi",
        link : "http://tve.kemdikbud.go.id/"
      }
    ]
  },
  {
    id : 5,
    name : "Orang Tua",
    services : [
      {
        id : 1,
        service_name : "Akreditasi Sekolah / Madrasah",
        link : "https://bansm.kemdikbud.go.id/akreditasi"
      },
      {
        id : 2,
        service_name : "Layanan Informasi, Pengaduan dan Saran",
        link : "http://ult.kemdikbud.go.id/"
      },
      {
        id : 3,
        service_name : "Perizinan dan Penyetaraan",
        link : "http://e-layanan.dikdasmen.kemdikbud.go.id/"
      },
      {
        id : 4,
        service_name : "Sekolah Kita",
        link : "http://sekolah.data.kemdikbud.go.id/"
      },
      {
        id : 5,
        service_name : "Sistem Informasi Perbukuan Indonesia",
        link : "https://buku.kemdikbud.go.id/"
      },
      {
        id : 6,
        service_name : "Standar Nasional Pendidikan",
        link : "http://bsnp-indonesia.org/"
      }
    ]
  },
  {
    id : 6,
    name : "Sekolah dan Pendidikan",
    services : [
      {
        id : 1,
        service_name : "Bantuan Operasional Sekolah",
        link : "http://bos.kemdikbud.go.id/"
      },
      {
        id : 2,
        service_name : "Bursa Kerja Khusus",
        link : "http://psmk.kemdikbud.go.id/bkk"
      },
      {
        id : 3,
        service_name : "Helpdesk Dapodik PAUD dan Dikmas",
        link : "http://helpdesk.paud-dikmas.kemdikbud.go.id/"
      },
      {
        id : 4,
        service_name : "Helpdesk Data Pokok Pendidikan",
        link : "http://helpdesk.dikmen.kemdikbud.go.id/"
      },
      {
        id : 5,
        service_name : "Menengah",
        link : "http://helpdesk.dikmen.kemdikbud.go.id/"
      },
      {
        id : 6,
        service_name : "Layanan Informasi, Pengaduan dan Saran",
        link : "http://ult.kemdikbud.go.id/"
      },
      {
        id : 7,
        service_name : "Majalah Jendela",
        link : "http://jendela.kemdikbud.go.id/"
      },
      {
        id : 8,
        service_name : "Pembinaan Kursus dan Pelatihan",
        link : "https://kursus.kemdikbud.go.id/"
      },
      {
        id : 9,
        service_name : "Penguatan Pendidikan Karakter",
        link : "http://cerdasberkarakter.kemdikbud.go.id/"
      },
      {
        id : 10,
        service_name : "Penyaluran Siswa",
        link : "http://e-layanan.dikdasmen.kemdikbud.go.id/elayanan2019/"
      },
      {
        id : 11,
        service_name : "Program Indonesia Pintar",
        link : "http://indonesiapintar.kemdikbud.go.id/"
      },
      {
        id : 12,
        service_name : "Program Organisasi Penggerak",
        link : "http://sekolah.penggerak.kemdikbud.go.id/"
      },
      {
        id : 13,
        service_name : "Sistem Informasi Perbukuan Indonesia",
        link : "https://buku.kemdikbud.go.id/"
      },
      {
        id : 14,
        service_name : "Standar Nasional Pendidikan",
        link : "http://bsnp-indonesia.org/"
      }
    ]
  }
];