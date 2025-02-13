export const MenuPPID = [
    { title: "Beranda PPID", url: "/ppid" },
    {
        title: "Profile PPID",
        type: "dropdown",
        menu: [
            { title: "Laman Utama", url: "/" },
            { title: "Profil Pimpinan", url: "/ppid/profile-singkat" },
            { title: "Profil PPID", url: "/ppid/profile-ppid" },
            { title: "Struktur PPID", url: "/ppid/struktur-ppid" },
            { title: "Tugas PPID", url: "/ppid/tugas-ppid" },
        ],
    },
    {
        title: "Informasi Publik",
        type: "dropdown",
        menu: [
            { title: "Regulasi", url: "/ppid/regulasi-keterbukaan-informasi-publik" },
            { title: "Daftar Informasi Publik", url: "https://drive.google.com/file/d/1CYkZjoXd2Vu0c0L9xSJ9P1FWE3uFZ1Et/view", isExternal : true },
            { title: "Informasi Dikecualikan", url: "https://drive.google.com/file/d/1d427ApNx_xomWAqfAIguMkup3g_fFq2J/view", isExternal : true },
            { title: "Rekapitulasi Permohonan Informasi Publik", url: "/ppid/" },
            { title: "Survei Kepuasan Informasi Publik", url: "/ppid/" },
        ],
    },
    {
        title: "Layanan Informasi",
        type: "dropdown",
        menu: [
            { title: "Standar Layanan", url: "/ppid/standar-pelayanan" },
            { title: "Prosedur Permohonan", url: "/ppid/prosedur-permohonan-informasi-publik" },
            { title: "Prosedur Pengajuan Keberatan", url: "/ppid/prosedur-pengajuan-keberatan" },
            { title: "Prosedur Penyelesaian Sengketa", url: "/ppid/prosedur-penyelesaian-sengketa" },
            { title: "Permohonan Informasi Publik", url: "https://docs.google.com/forms/d/e/1FAIpQLSeEmEB0PhnttN35ckZ7DFzY-C0dyNAZRtutLhE99nJcXR7BWQ/viewform", isExternal : true },
            { title: "Keberatan atas Informasi Publik", url: "https://docs.google.com/forms/d/e/1FAIpQLScgZ9KNjlaBCmJpn3i3F9dDzpK5cnDKDV0fHoy1xOIVetkU8g/viewform", isExternal : true },
            { title: "Aplikasi PPID BPMP Kepri", url: "https://drive.google.com/file/d/17pfUNvtCLyJ7qotaB-o0DzIpINOrRSOv/view", isExternal : true },
            { title: "Jejak Surat", url: "https://sinde.kemdikbud.go.id/login", isExternal : true },
        ],
    },
    {
        title: "Tautan",
        type: "dropdown",
        menu: [
            { title: "Merdeka Belajar", url: "https://merdekabelajar.kemdikbud.go.id/", isExternal : true },
            { title: "Portal Data", url: "https://data.kemdikbud.go.id/", isExternal : true },
            { title: "Data Pokok Pendidikan (Dapodik)", url: "https://dapo.kemdikbud.go.id/", isExternal : true },
            { title: "Layanan Pengadaan secara Elektronik (LPSE)", url: "https://lpse.kemdikbud.go.id/eproc4", isExternal : true },
            { title: "Sistem Informasi Pengadaan Sekolah (SIPLAH)", url: "https://siplah.kemdikbud.go.id/", isExternal : true },
        ],
    },
    {
        title: "Publikasi",
        type: "dropdown",
        menu: [
            { title: "Berita", url: "/ppid/publikasi/berita" },
            { title: "Statistik Pegawai", url: "/ppid/statistik-pegawai" },
        ],
    },
    { title: "SP4N Lapor", url: "https://kemedikbud.lapor.go.id/", isExternal : true },
];