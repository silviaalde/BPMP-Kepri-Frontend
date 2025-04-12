"use client";

import MainLayout from "@/components/layout/mainLayout";
import { useParams } from "next/navigation";
import {  useEffect, useState } from "react";
import { DataFasilitas } from "@/data/data-home";
import Image  from "next/image";
import { StaticImageData } from "next/image";

interface Fasilitas{
    image : StaticImageData,
    title : string,
    description : string,
    url?  :string,
    priceList : {
        name : string,
        price : string
    }[]
}

const Page = () => {
   const param = useParams();
   const [dataFasilitas, setFasilitas] = useState<Fasilitas|null>(null);
   useEffect(()=>{
        switch(param.id){
            case "asrama":
                setFasilitas(DataFasilitas[0])
                break
            case "kelas":
                setFasilitas(DataFasilitas[1])
                break
            case "laboratorium":
                setFasilitas(DataFasilitas[2])
                break
            case "ruang-makan":
                setFasilitas(DataFasilitas[3])
                break
            case "aula":
                setFasilitas(DataFasilitas[4])
                break
        }
   },[param.id]);
    
    return (
        <MainLayout>
            <div className="w-full h-max center-flex py-16">
                <div className="container h-full  flex flex-col items-center gap-7">    
                    <h4 className="uppercase text-3xl md:text-5xl font-semibold text-blue-secondary text-center">
                        {dataFasilitas?.title}
                    </h4>
                    <p className="text-center">
                        {dataFasilitas?.description}
                    </p>

                    {
                        dataFasilitas?.image ? <Image src={dataFasilitas?.image} alt={"gambar-fasilitas"}/> : <div></div>
                    }

                    <h4 className="mt-8 uppercase text-3xl md:text-5xl font-semibold text-blue-secondary text-center">
                        Harga Sewa
                    </h4>
                    {
                        dataFasilitas?.priceList.map((item,key)=>(
                            <div key={key} id={key+"1"} className="text-2xl ">
                                {item.name}
                                <span className="font-bold">
                                    {" "+item.price}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </MainLayout>
    );
};

export default Page;
