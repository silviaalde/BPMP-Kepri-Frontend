import { IconsGovernment, IconsSchool, IconsStudent, IconsTeacher } from "@/assets/icons";
import { ImageBerita1, ImageBerita2, ImageBerita3, ImageFasilitas1, ImageFasilitas2, ImageFasilitas3, ImageFasilitas4, ImageProfile, ImageZoom1 } from "@/assets/images";
import { FaBriefcase, FaBuilding, FaHands, FaRocket, FaUsers } from "react-icons/fa";

export const DataVisiMisi = [
    { 
        id: 1, 
        icon: FaRocket, 
        title: 'VISI DAN MISI', 
        number: '01' ,
        url : '/visi-dan-misi'
    },
    { 
        id: 2, 
        icon: FaBriefcase, 
        title: 'TUGAS DAN FUNGSI', 
        number: '02',
        url : '/tugas-dan-fungsi'
    },
    { 
        id: 3, 
        icon: FaUsers, 
        title: 'SUMBER DAYA MANUSIA', 
        number: '03' ,
        url : "/sumber-daya-manusia"
    },
    { 
        id: 4, 
        icon: FaBuilding, 
        title: 'STRUKTUR ORGANISASI', 
        number: '04',
        url : "/struktur-organisasi"
    },
    { 
        id: 5, 
        icon: FaHands, 
        title: 'MAKLUMAT PELAYANAN', 
        number: '05',
        url : "/maklumat-pelayanan"
    },
];

export const DataPublicStats = [
    { 
        icon : IconsGovernment, 
        count : 8, 
        title : "Pemerintah Daerah"
    },
    { 
        icon : IconsSchool, 
        count : 2.989, 
        title : "Satuan Pendidikan"
    },
    { 
        icon : IconsTeacher, 
        count : 29.812, 
        title : "Guru"
    },
    { 
        icon : IconsStudent, 
        count : 469.194, 
        title : "Siswa"
    },
]

export const DataBerita = [
    { 
      date : 1, 
      month : "Dec", 
      year : '2024',
      title : "Bootcamp 2024 untuk guru dan Tenaga Kependidikan Sukses Digelar di Kepulauan Anambas", 
      name : "Bpmp_kepri", 
      profile : ImageProfile,
      image : ImageBerita1
    },
    { 
      date : 25, 
      month : "NOV", 
      year : '2024',
      title : "Kepala BPMP Kepri Apresiasi Tim Publikasi dan Komunikasi atas Prestasi di Tingkat Nasional", 
      name : "Bpmp_kepri", 
      profile : ImageProfile,
      image : ImageBerita2
    },
    { 
      date : 6, 
      month : "NOV", 
      year : '2024',
      title : "Warsita, Kepala BPMP Pinta Pendidikan Vokasi Harus Responsif ", 
      name : "Irafaria Putra Ibra", 
      profile : ImageProfile,
      image : ImageBerita3
    },
]

export const DataFasilitas = [
    {
      image: ImageFasilitas1,
      title: "Asrama Raja",
      description: "PNPB KOMPUTER"
    },
    {
      image: ImageFasilitas2,
      title: "Ruang Kelas Raja",
      description: "PNPB SALIHA"
    },
    {
      image: ImageFasilitas3,
      title: "Laboratorium",
      description: "PNPB KOMPUTER"
    },
    {
      image: ImageFasilitas4,
      title: "Ruang Makan",
      description: "PNPB Aisyah Sulaiman"
    }
];

export const DataWebinar  = [
    {
      date : '20',
      month : 'JUN',
      time : '09:00 - 12:00',
      title : 'Teh Obeng',
      location : 'Zoom Meeting, Live',
      image : ImageZoom1,
    },
    {
      date : '07',
      month : 'JUN',
      time : '14:00 - 16:00',
      title : 'Teh Obeng BPMPM',
      location : 'Zoom Meeting, Live',
      image : ImageZoom1,
    },
]

