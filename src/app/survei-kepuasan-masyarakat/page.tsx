"use client";

import BarsChart from "@/components/element/barsChart";
import MainLayout from "@/components/layout/mainLayout";
import { DataSKM } from "@/data/data-skm";

const Page = () => {
  // Data untuk chart
  

  return (
    <MainLayout>
      <div className="center-flex w-full h-max py-20">
        <div className="container flex flex-col gap-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-blue-secondary text-center">
            Survei Kepuasan Masyarakat
          </h1>
        {DataSKM.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-10 w-full">
                <h1 className="text-xl uppercase font-semibold text-blue-secondary">{item.title}</h1>
                <BarsChart data={item.data} />
                <div className="w-full flex flex-col gap-4 ">
                    <div className="flex items-center gap-2 uppercase">
                        <p className="text-blue-secondary font-medium">Tindak Lanjut</p>
                        <p className="text-gray-400 font-semibold">Hasil Survei</p>
                    </div>
                    {item.content.map((item, index) => (
                        <div key={index} className="flex fle-col gap-3">
                            <div className="flex items-center gap-1 text-sm">
                                <p className="font-semibold">{item.title}</p>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}

        <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSe8Xeg4k41SeoW3ou2kC7bprbHuivtrVZw3xfH6ZBeIYfbCYQ/viewform"
            target="blank"
            className="h-16 w-80 bg-blue-light center-flex text-white hover:bg-yellow-500"
        >
            Isi Survei Kepuasan Masyarakat
        </a>

        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
