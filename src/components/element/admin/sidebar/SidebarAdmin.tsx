import {  ImageLogoBPMP1 } from "@/assets/images"
import Image from "next/image"
import SidebarMenuAdmin from "./SidebarMenuAdmin"
import { DataMenuAdmin } from "@/data/menu-admin"
import { FaSignOutAlt } from "react-icons/fa"
import { useAuth } from "@/providers/userContext"
import { useRouter } from "next/navigation";

const SidebarAdmin = () => {
    const { setToken } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        setToken('');
        router.push('/admin/sign-in')
    }

    return (
        <aside className="w-[280px] h-screen bg-[#008DD1] fixed hidden md:flex flex-col gap-10 px-5 py-10">
            <Image 
                src={ImageLogoBPMP1}
                alt="Image Logo"
                
            />
            <div className="flex flex-col h-max gap-2">
                {DataMenuAdmin.map((item, index) => (
                    <SidebarMenuAdmin 
                        key={index}
                        title={item.title}
                        type={item.type}
                        url={item.url}
                        Icon={item.icon}
                        menu={item.menu}
                    />
                ))}
                <div 
                    onClick={handleLogout}
                    className=" w-full h-12 flex  gap-2 items-center rounded-lg px-2 text-white cursor-pointer hover:bg-[#ffffff71]">
                    <div className="h-10 w-10 center-flex text-xl">
                        <FaSignOutAlt />
                    </div>
                    <p>Logout</p>
                </div>
            </div>
        </aside>
    )
}

export default SidebarAdmin