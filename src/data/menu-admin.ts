import { FaBullhorn, FaCheckCircle, FaDownload, FaHome, FaQuestionCircle,  } from "react-icons/fa";

export const DataMenuAdmin = [
    {
        title : "Dashboard",
        url : "/admin",
        icon :  FaHome,
        type : 'menu'
    },
    {
        title : "Publikasi",
        icon :  FaBullhorn,
        type : 'submenu',
        menu : [
            {
                title : "Berita",
                url : "/admin/blog/berita"
            },
            {
                title : "Opini",
                url : "/admin/blog/opini"
            },
            {
                title : "Artikel",
                url : "/admin/blog/artikel"
            },
            {
                title : "Galeri",
                url : "/admin/galeri"
            },
            {
                title : "Penghargaan",
                url : "/admin/penghargaan"
            },
        ]
    },
    {
        title : "Unduhan",
        url : "/admin/unduhan",
        icon :  FaDownload,
        type : 'menu'
    },
    {
        title : "Progress",
        url : "/admin/progress",
        icon :  FaCheckCircle,
        type : 'menu'
    },
    {
        title : "FAQ",
        url : "/admin/faq",
        icon :  FaQuestionCircle,
        type : 'menu'
    }
]