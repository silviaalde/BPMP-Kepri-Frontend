"use client";

import Dropdown from "@/components/element/user/Dropdown";
import MainLayout from "@/components/layout/mainLayout";
import { Faq } from "@/services/api";
import { useCallback, useEffect, useState } from "react";
import { BiBuildings } from "react-icons/bi";
import { FaPlus, FaRegHandshake } from "react-icons/fa";

interface FaqDataProps {
    title : string;
    content : string;
    category : string;
}

const Page = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("layanan_publik"); // State to hold the selected category
    const [data, setData] = useState<FaqDataProps[] | null>(null);

    const fetchData = useCallback(async () => {
        try {
            const response = await Faq.GetFaq({ category: selectedCategory });
            setData(response?.data.data || null);
        } catch (error) {
            console.log(error);
        }
    }, [selectedCategory]);  // include selectedCategory in the dependency

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    
    return (
        <MainLayout>
            <div className="w-full h-max center-flex py-16">
                <div className="container h-full  flex flex-col items-center gap-7">    
                    <h4 className="uppercase text-3xl md:text-5xl font-semibold text-blue-secondary text-center">
                        Yang Paling Banyak Ditanyakan
                    </h4>
                    <p className="text-center">
                        Jika anda tidak menemukan jawaban dibawah ini, silahkan hubungi kami pada menu layanan
                    </p>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 ">
                        {/* button Layanan Publik */}
                        <div 
                            onClick={() => setSelectedCategory("layanan_publik")}
                            className={`h-24 border-b-2 flex items-center gap-4 cursor-pointer relative flex-shrink-0 ${selectedCategory === 'layanan_publik'  ? 'border-red-primary ' : 'border-gray-200'}`}
                        >
                            <div className={` ${selectedCategory === 'layanan_publik' ? 'bg-blue-light text-white ' : 'bg-gray-100 text-blue-light'} h-16 w-16  rounded-full center-flex `}>
                                <FaRegHandshake className="text-3xl" />
                            </div>
                            <h3 className="text-3xl font-semibold text-blue-secondary">Layanan Publik</h3>
                            <FaPlus className="absolute right-0 md:hidden flex" />
                        </div>              
                        {/* Button BPMP KEPRI */}
                        <div 
                            onClick={() => setSelectedCategory("BPMP_kepri") }
                            className={`${selectedCategory === 'BPMP_kepri' ? 'border-red-primary ' : 'border-gray-200'} h-24 border-b-2 flex items-center gap-4 cursor-pointer relative`}
                        >
                            <div className={` ${selectedCategory === 'BPMP_kepri' ? 'bg-blue-light text-white ' : 'bg-gray-100 text-blue-light'} h-16 w-16 rounded-full center-flex flex-shrink-0`}>
                                <BiBuildings className="text-3xl" />
                            </div>
                            <h3 className="text-2xl font-semibold text-blue-secondary">
                                BPMP Provinsi Kepulauan Riau
                            </h3>
                            <FaPlus className="absolute right-0 md:hidden flex" />
                        </div>                                                 
                    </div>

                    <div className="flex flex-col gap-3 w-full min-h-[300px] h-max mt-16">
                        {data ? (
                            <>
                                {data.map((item, index) => (
                                    <Dropdown 
                                        title={item.title}
                                        content={item.content}
                                        key={index}
                                    />
                                ))}
                            </>
                        ) : (
                            <div className="w-full center-flex h-max">
                                {selectedCategory} tidak ada
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
        </MainLayout>
    );
};

export default Page;
