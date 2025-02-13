"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

interface NavMenuProps {
  title: string;
  url?: string;
  type?: string;
  menu?: NavMenuItem[];
  textColor?: string; // Warna teks default
  isExternal? : boolean;
}

interface NavMenuItem {
  title: string;
  url: string;
  isExternal? : boolean;
}

const NavMenu = ({
  type = "menu",
  title,
  url,
  menu,
  textColor = "#0F235A", // Default text color
  isExternal = false,
}: NavMenuProps) => {
  // Menangani undefined url
  const validUrl = url || "/";

  const pathname = usePathname();

  return (
    <div className="relative group">
      {type === "dropdown" ? (
        <>
          <div
            className={`py-2 flex items-center gap-1 cursor-pointer hover:text-red-primary ${textColor} `}
          >
            <p className="">
              {title}
            </p>
            <FaChevronDown className="text-xs" />
          </div>

          <div className="absolute left-0 hidden group-hover:block text-black py-3 w-52 bg-white rounded shadow-lg z-20">
            <ul className="flex gap-2 flex-col">
              {menu &&
                menu.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-gray-100 font-light text-sm px-4 py-2 cursor-pointer"
                    style={{
                      color: textColor,
                    }}
                  >
                    {item.isExternal ? (
                      <a href={item.url} target="blank" rel="noopener noreferrer">
                        <p
                          className={`hover:text-blue-400  font-normal ${pathname === item.url ? 'text-blue-400' : 'text-black'}`}
                          
                        >
                          {item.title}
                        </p>
                      </a>
                    ) : (
                      <Link href={item.url}>
                        <p
                          className={`hover:text-blue-400  font-normal ${pathname === item.url ? 'text-blue-400' : 'text-black'}`}
                          
                        >
                          {item.title}
                        </p>
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          {isExternal ? (
            <a href={validUrl} target="blannk" rel="noopener noreferrer" >
              <p className={`py-2 cursor-pointer hover:text-red-primary ${textColor}`}>{title}</p>
            </a> 
            
          ) : (
            <Link href={validUrl} >
              <p 
                className={` ${pathname === url ? 'text-red-primary ' : `${textColor}`}
                  py-2 cursor-pointer hover:text-red-primary`}
              >
                {title}
              </p>
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default NavMenu;
