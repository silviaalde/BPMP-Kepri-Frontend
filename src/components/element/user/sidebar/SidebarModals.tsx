"use client";

import { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";

interface SidebarModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  positon : "right" | "left"
  className?: string;
}

const SidebarModal: React.FC<SidebarModalProps> = ({
  isOpen,
  onClose,
  children,
  positon = "right",
  className = ""
}) => {

    const translate = positon === "right" ? "translate-x-full" : "-translate-x-full"
    

    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            {/* Overlay */}
            <div
                className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
            ></div>

            {/* Sidebar Content */}
            <div
                className={`fixed top-0 ${positon === "right" ? "right-0" : "left-0"}
                     h-full w-80 shadow-lg p-7 transition-transform duration-300 z-60 ${
                    isOpen ? "translate-x-0 pointer-events-auto" : `${translate} pointer-events-none`
                    } ${className}`
                }
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 h-8 w-8 bg-blue-light center-flex rounded-full text-white"
                >
                    <FaTimes size={20} />
                </button>

                {children}
            </div>
        </div>
    );
};

export default SidebarModal;
