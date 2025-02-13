export const MenuUtama = [
    { title: 'Beranda', url: '/' },
    {
        title: 'Zona Integritas',
        type: 'dropdown',
        menu: [
            { title: 'Sakip', url: '/sakip' },
            { title: 'RBI', url: '/sakip' },
            { title: 'Pengawasan', url: '/pengawasan' },
            { title: 'Kehadiran Pegawai', url: 'http://36.94.55.252:8080/absensoap/' },
        ],
    },
    { title: 'PPID', url: '/ppid' },
    {
        title: 'Publikasi',
        type: 'dropdown',
        menu: [
            { title: 'Berita', url: '/blog/berita' },
            { title: 'Opini', url: '/blog/opini' },
            { title: 'Artikel', url: '/blog/artikel' },
            { title: 'Prosedur Operasional Standar', url: '/sakip/doc/Prosedur Operasional Standar' },
            { title: 'Galery', url: '/galeri' },
            { title: 'E-Bulletin', url: '#' },
            { title: 'Penghargaan', url: '/penghargaan' },
            { title: 'Unduhan', url: '/unduhan' },
        ],
    },
    {
        title: 'Layanan',
        type: 'dropdown',
        menu: [
            { title: 'Standar Pelayanan', url: '/standar-pelayanan' },
            { title: 'Portal Pelayanan', url: '/portal_layanan' },
            { title: 'Rekapitulasi Permohonan Pelayanan', url: '/rekapitulasi-layanan' },
        ],
    },
    { title: 'Survey', url: '/survei-kepuasan-masyarakat' },
    { title: 'Fax', url: '/fax' },
];