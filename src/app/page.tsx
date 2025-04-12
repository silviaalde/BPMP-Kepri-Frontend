'use client';

import { BgKepriMaju, BgMap, BgVisiMisi } from "@/assets/background";
import { ImageKepalaBPMP, ImageLogoPerpustkaan, ImageLogoSelayar, ImageLogoSempena, ImageLogoSerasan, ImageLogoWBS, ImageProfile } from "@/assets/images";
import Footer from "@/components/element/user/Footer";
import Navbar from "@/components/element/user/Navbar/Navbar";
import Image from "next/image";
import {  FaArrowRight,  FaFilePdf, FaPlay } from 'react-icons/fa';
import CardBerita from "@/components/element/user/card/CardBerita";
import CardWebinar from "@/components/element/user/card/CardWebinar";
import ButtonToTop from "@/components/element/user/button/ButtonToTop";
import WhatsappButton from "@/components/element/user/button/ButtonWhatsapp";
import SectionTitle from "@/components/element/user/SectionTitle";
import BannerSlider from "@/components/element/user/slider/BannerSlider";
import TestimoniSlider from "@/components/element/user/slider/TestimoniSlider";
import Link from "next/link";
//import CardProgramPDM from "@/components/element/user/card/CardProgramPDM";
import { DataVisiMisi, DataPublicStats, DataFasilitas } from "@/data/data-home";
import ButtonUnduhanDoc from "@/components/element/user/button/ButtonUnduhanDoc";
import CardPublicStats from "@/components/element/user/card/cardPublicStats";
import { useEffect, useState } from "react";
import { Blog, storageUrl, Unduhan, Webinar } from "@/services/api";
import { programList, ProgramList } from "@/data/data-program";
import Script from "next/script";
import { WebinarType } from "@/data/data-webinar";


interface File {
  id: string;
  unduhan_id: string;
  title: string;
  file: string; // URL of the file
  size: string; // Size of the file (e.g., "180kb")
}

interface Unduhan {
  id: string;
  title: string;
  content: string; // HTML content
  category: string;
  date: string; // Date when the unduhan was created or relevant
  files: File[]; // List of files associated with the unduhan
}

export interface BeritaProps {
  id?: string;
  name?: string;
  title?: string;
  date?: string;
  image?: string | null;
  article?: string;
  status ?: string;
  category? : string;
}

const month = ['JAN','FEB','MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGU', 'SEP', 'OKT', 'NOV', 'DES'];




export default function Home() {
    const [dataUnduhan, setDataUnduhan] = useState<Unduhan[] | null>(null);
    const [dataBerita, setDataBerita] = useState<BeritaProps[] | null>(null);
    //const DataProgramPDMUtama = DataPDM.filter((item) => item.category === "Utama");
    const [getProgram, setProgram ] = useState<ProgramList|null>(programList[0]);
    const [dataWebinar, setDataWebinar] = useState<WebinarType[]|null>(null);

  const fetchDataUnduhan = async () => {
    try {
      const response = await Unduhan.GetUnduhan();

      setDataUnduhan(response?.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  const fetchDataBerita = async () => {
    try {
      const response = await Blog.GetBlog();

      setDataBerita(response?.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  const fetchDataWebinar = async ()=>{
    const response = await Webinar.getWebinar({limit : 2});
    setDataWebinar(response?.data.data);
  }

    useEffect(() => {
      fetchDataWebinar();
      fetchDataUnduhan();
      fetchDataBerita();
    }, []);

    const DataAplikasi = [
      { 
        name : "Sempena", 
        image : ImageLogoSempena, 
        Link : "/",
        ref : "internal" 
      },
      { 
        name : "Perpustakaan", 
        image : ImageLogoPerpustkaan, 
        Link : "https://perpus-bpmpkepri.kemdikbud.go.id/",
        ref : "external"
      },
      { 
        name : "WBS", 
        image : ImageLogoWBS, 
        Link : "/wbs",
        ref : "internal"
      },
      {
        name : "Selayar", 
        image : ImageLogoSelayar, 
        Link : 'portal_layanan',
      },
      {
          name : "Serasan", 
          image : ImageLogoSerasan, 
          Link : 'portal_layanan',
      },
    ]


    return (
      <div className="overflow-x-hidden bg-gray-100 w-full min-h-screen h-max relative">
                <Script src="https://cdn.userway.org/widget.js" data-account="FcZSy6pC1a"
                    strategy="afterInteractive"></Script>
        <Navbar />
        {/* Banner */}
        <BannerSlider />

        {/* button untuk top page */}
        <ButtonToTop />

        <WhatsappButton/>
        
        <div className="center-flex   h-max w-full md:py-46 py-10 ">
          <div className="container flex flex-col gap-10 items-center h-max ">
            <div className="flex flex-col items-center gap-4">
              <SectionTitle 
                title=""
                heading="Aplikasi Unggulan"
                alignItems="items-center"
              />
              <p className="font-medium text-blue-light text-center">BPMP Prov Kepulauan Riau Memiliki 5 Aplikasi Unggulan Terdiri Dari</p>
            </div>
            <div className="w-full  grid xl:grid-cols-5  md:grid-cols-3 grid-cols-2">
              {DataAplikasi.map((item, index) => (
                  <div key={index} className="p-4 w-full md:w-[200px]  flex flex-col items-center text-center justify-between cursor-pointer">
                    {item.ref === 'internal' ? (
                        <Link href={item.Link} className="h-[200px] flex flex-col items-center text-center justify-between">
                            <Image src={item.image} alt={item.name} className="h-36 w-36" />
                            <p className="py-1 border-t border-blue-secondary text-blue-secondary font-medium">
                                {item.name}
                            </p>
                        </Link>
                    ) : (
                        <a href={item.Link} target="_blank" rel="noopener noreferrer" className="h-[200px] flex flex-col items-center text-center justify-between">
                            <Image src={item.image} alt={item.name} className="h-36 w-36" />
                            <p className="py-1 border-t border-blue-secondary text-blue-secondary font-medium">
                                {item.name}
                            </p>
                        </a>
                    )}
                  </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visi Misi BPMP  */}
        <div className="center-flex bg-blue-secondary relative">
            <Image 
              src={BgVisiMisi} 
              alt="bg-decor" 
              className="absolute  opacity-20 w-full top-0 bottom-0 h-full" 
            />
            <div className="container h-max xl:h-28 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-3 py-5 fade-in-from-bottom z-10">
              {DataVisiMisi.map((item, index) => (
                <div key={index} className="h-32 md:h-48 bg-white shadow-lg flex flex-col items-center justify-center px-7 gap-4 z-20">
                    <div className="w-full h-14 flex items-center justify-between">
                        <item.icon className="text-4xl text-blue-light" />
                        <div className="h-12 w-12 flex items-center justify-center bg-gray-100">
                            <p>{item.number}</p>
                        </div>
                    </div>
                    <Link href={item.url}>
                      <p 
                        className="text-xl font-semibold text-blue-secondary hover:text-blue-light w-full cursor-pointer"
                      >
                        {item.title}
                      </p>
                    </Link>
                </div>
              ))}
            </div>  
        </div>

        {/* Profile kepala BPMP */}
        <div className="center-flex  h-max lg:h-[900px] relative my-10">
          <Image src={BgMap} className="absolute top-0 right-0 opacity-10" alt="Icons Map bg" />
          <div className="container h-max lg:h-[600px] grid grid-cols-1 lg:grid-cols-2 gap-7 lg:py-0 py-14">
              <Image 
                src={ImageKepalaBPMP} 
                alt="Image Kepala BPMP"
                className="w-full h-full fade-in-from-left"
              />
              <div className="flex flex-col  gap-14">
                <div className="flex flex-col gap-5">
                    <div className="w-10 h-1 bg-blue-light"></div>
                    <p className="text-blue-light font-semibold text-lg">TABEK HAMBA</p>
                    <p className="uppercase text-3xl md:text-5xl text-blue-secondary font-semibold" style={{ letterSpacing: '4px' }}>
                    Selamat datang di laman resmi BPMP Prov. Kepri
                    </p>
                </div>
                <p>
                    Kami berkomitmen untuk menyediakan informasi yang akurat, cepat, dan mudah diakses guna meningkatkan transparansi dan pelayanan publik. Melalui situs ini, kami berharap dapat memenuhi kebutuhan informasi masyarakat serta memberikan layanan yang lebih baik dan efektif.
                </p>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Warsita, S.S., M.Pd.</p>
                    <p className="">Kepala BPMP Provinsi Kepulauan Riau</p>
                </div>
              </div>
          </div>
        </div>

        {/* Public Stats BPMPM */}
        <div className="h-max xl:h-[200px] w-full center-flex mb-10">
            <div className="container grid bg-white  md:grid-cols-2 grid-cols-1 xl:grid-cols-4 gap-x-5 h-full w-full gap-y-32">
            {DataPublicStats.map((item, index) => (
              <CardPublicStats 
                key={index}
                image={item.icon}
                title={item.title}
                count={item.count}
              />
            ))}
            </div>
        </div>

        {/* Program Pendidikan Bermutu  PDM */}
        <div className="h-max w-full flex-col flex ">
          <div
              className="h-[550px] w-full center-flex bg-cover bg-center relative"
              style={{
                  backgroundImage: `url(${BgKepriMaju.src})`, // Menambahkan gambar sebagai background
              }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#142c66f1] opacity-60"></div>
              <div className="container flex flex-col gap-10 ">
                <div 
                    style={{
                      animation: "pulse 1.5s infinite ease-in-out",
                    }}
                    className="w-20 h-20 bg-[rgba(255,255,255,0.19)] z-20 rounded-full p-2 animate-pulse cursor-pointer group">
                  <div
                    className="h-full w-full bg-[#7CD4FD] z-20 rounded-full center-flex text-white group-hover:bg-white group-hover:text-[#7CD4FD]"
                    
                  >
                    <Link href={"https://www.youtube.com/watch?v=7Ozf6Kr4iPc"}>
                      <FaPlay />
                    </Link>
                  </div>
                </div>
                <p className="text-white text-4xl md:text-7xl font-semibold z-10 uppercase tracking-wider">
                    Pendidikan Bermutu Kepulauan Riau Maju
                </p>
            </div>
          </div>

          {/* <div className="h-max min-h-[550px] w-full bg-[#7CD4FD] center-flex md:mb-10 mb-0">
            <div className="container h-full grid grid-cols-1 md:grid-cols-3 min-h-[550px]">
              <div className="relative w-full h-[500px] md:h-full">
                <Image src={ImageProgramPDM} alt="sample" className="h-full w-full object-cover  absolute top-[-80px]" />
              </div>
              <div className=" col-span-1 md:col-span-2 relative">
                <div className="w-[400px] h-20 bg-white absolute top-[-80px] center-flex">
                  <p className="text-2xl font-semibold text-blue-primary">PROGRAM PRIORITAS </p>
                </div>
                <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4 lg:gap-y-0   p-10 ">
                  {DataPDM.map((items, index) => (
                    <Link 
                      key={index} 
                      href={`/program-prioritas-pdm/${encodeURIComponent(items.title)}`} 
                      className="h-max min-h-12 w-full border-b border-red-primary gap-2 flex items-center justify-between cursor-pointer hover:border-white transition-all duration-300 ease-in hover:delay-150"
                    >
                      <p className=" font-medium">{items.title}</p>
                      <FaChevronRight />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>  

        {/* Program Prioritas PDM */}
        <div id="kemdikbud" className="center-flex min-h-[700px] w-full md:py-0 py-10 ">
          <div className="container flex flex-col gap-5">
            <div className="flex items-center justify-between md:flex-row flex-col gap-4">
              <SectionTitle 
                title="Jelajahi"
                heading="PROGRAM PRIORITAS KEMENDIKDASMEN"
                alignItems="items-start"
              />
              <div className="hidden md:flex items-center justify-end md:w-max w-full">
                <Link href="/program-prioritas-pdm" >
                 
                </Link>
              </div>
            </div>
            <div className="flex flex-col md:flex-row item-start gap-1 " >
              {
                programList.map((item )=>(
                  <button className="text-blue-500 bg-yellow-400 p-3 font-bold" key={item.id} onClick={()=>setProgram(item)}>
                    {item.name}
                  </button>
                ))
              }
             
            </div>
            <div className="w-full flex flex-col gap-2 p-7 bg-white">
              <h1 className="text-blue-500 font-bold text-2xl">Layanan {getProgram?.name?? ""}</h1>
              <hr />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
                <div className="w-full pt-2 h-[50vh] md:h-auto">
                  <iframe className="w-full h-full" src="https://www.youtube.com/embed/usPBMKJMt6s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
                <div className="w-full col-span-2 grid grid-cols-1 md:grid-cols-3 mt-2 gap-x-3 gap-y-2" >
            
                  {

                    getProgram?.services?.map((item)=>(
                      <a 
                      className= "bg-[#7CD4FD] p-3 text-blue-800 rounded min-h-20 font-bold"
                      key={item.id} 
                      href={item.link??""}>
                        {item.id?? ""}. {item.service_name??""}
                      </a>
                    ))

                  // DataProgramPDMUtama.map((item, index) => (
                  //   <CardProgramPDM 
                  //     key={index}
                  //     title={item.title}
                  //     Icon={item.icon}
                  //     image={item.Image}
                  //   />
                  // ))
                  }
                </div>
        
              </div>
      
            </div>
          </div>
        </div>
        
        {/* Fasilitas */}
        <section className="flex flex-col items-center gap-10 my-10">
          <SectionTitle 
            title="PNBP"
            heading="Fasilitas Kami"
          />
         
          <div className="h-max  grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-10">
              {DataFasilitas.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-${index % 2 === 0 ? 'start' : 'end'} justify-start h-[350px] md:h-[500px] text-white`}
                >
                  <div className="w-full h-[300px] md:h-[470px] center-flex relative group cursor-pointer">
                    <Image src={item.image} alt="sample" className="w-full h-full object-cover" />
                    <Link href={`${item.url ?? ""}`} className="bg-[#7cd4fda4] absolute top-6 bottom-6 right-6 left-6 py-5 px-3 group-hover:flex hidden flex-col items-center justify-between">
                      <div className="h-14 w-14 rounded-full border center-flex hover:transform hover:rotate-45 transition-transform duration-300 ease-in-out">
                        <FaArrowRight />
                      </div>
                      <div className="flex flex-col items-center font-medium gap-5 uppercase">
                        <p className="text-sm">PNPB</p>
                        <p className="text-lg">{item.title}</p>
                        {/* <p className="text-sm">{item.description}</p> */}
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Testimoni */}
        <section className="w-full h-max  center-flex my-10 py-10">
          <div className="container h-full flex flex-col  items-center gap-20">
            <SectionTitle 
              title="Testimoni Stakeholder"
              heading="Apa Kata Mereka Tentang Layanan Kami"
            />
            <TestimoniSlider

            />
          </div>
        </section>

        {/* Webinar */}
        <section className=" h-max w-full bg-gray-200 center-flex flex-col py-20 ">
          <div className="container h-full grid grid-cols-1 lg:grid-cols-2 gap-8 py-20">
            <div className="h-full flex flex-col gap-7">
              <SectionTitle 
                useLine={false}
                headingClassName=""
                title="PNBP"
                heading="Ikuti Kegiatan dan Webinar Terdekat"
                alignItems="items-start"
              />
              <div className="flex flex-col gap-2">
                {dataWebinar?.map((items, index) => (
                  <CardWebinar 
                    description={items.description??""}
                    url={items.url??""}
                    key={index}
                    date={items.date?.substring(8,10)??""}
                    month={month[parseInt(items.date?.substring(5,7)??"1")-1]}
                    location={items.location??""}
                    title={items.title??""}
                    image={ storageUrl + "/storage/content/webinar/" + items.image}
                    time={items.time_start??"" + "-" + items.time_end??""}
                  />
                ))}
              </div>
            </div>

            <div className=" h-max min-h-[560px] w-full flex-col flex ">
              <div className="flex flex-1 w-full bg-blue-secondary p-14 flex-col gap-12 text-white relative">
                <div 
                  className="h-40 w-44 absolute top-0 right-0 bg-blue-light"
                  style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                >
                </div>
                <div 
                  className="absolute top-12 right-12 h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <FaFilePdf className="text-blue-light text-3xl" />
                </div>
                <h1 className="font-medium text-3xl">Unduh Dokumen</h1>
                {dataUnduhan ? (
                  <div className="flex flex-col gap-5">
                     {dataUnduhan.slice(0, 5).map((item, index) => (
                        <ButtonUnduhanDoc 
                          key={index}
                          title={item.title}
                          link={`/sakip/doc/${item.title}`}
                          menu={item.files}
                        />              
                    ))}
                  </div>
                ) : (
                  <div className="flex ">
                    <p>Tidak ada document unduhan</p>
                  </div>
                )}
              </div>
              <div className="h-14 w-full flex items-center">
                <Link href="/unduhan">
                  <button
                    className="h-14 px-5 bg-yellow-400 text-white"
                  >   
                    Unduhan Lainya
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="h-max lg:h-[200px] w-full center-flex mb-[-280px]  lg:mb-[-180px]">
            <div className="container h-full bg-blue-light relative flex items-center justify-center lg:justify-between lg:flex-row flex-col px-5 md:px-10 py-10 lg:gap-0 gap-10 text-white">
              <Image src={BgBerlangganan} className="absolute bottom-0 right-0 h-full w-full opacity-20 object-cover" alt="bg-berlangganan" />
              <div className="flex items-center lg:flex-row flex-col  gap-6 z-10 w-full">
                <div className="h-28 w-28 rounded-full bg-[#DC3938] center-flex">
                  <FaMessage className="text-white text-4xl" />
                </div>  
                <div className="flex flex-col lg:text-start text-center gap-1">
                  <h2 className="text-4xl font-semibold">Berlangganan</h2>
                  <p className="text-lg">Dapatkan informasi terbaru seputar pendidikan</p>
                </div>
              </div>
              <div className="flex items-center gap-6 z-10 w-full">
                <div className="h-12 md:h-16 w-full flex items-center">
                  <input type="text" className="flex flex-1 h-full indent-5 text-black " placeholder="Enter Address" />
                  <button className="h-full px-2 md:px-6 bg-blue-secondary text-white hover:opacity-75 font-medium md:text-md text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        {/* Berita */}
        <div className="center-flex min-h-[700px]  py-10  mt-52 lg:mt-36 mb-20">
          <div className="container flex flex-col gap-14">
            <div className="flex flex-col items-center gap-3">
              <div className="section-line"></div>
              <p className="section-title">PUBLIKASI</p>
              <h1 className="section-heading" >
                BERITA DAN OPINI
              </h1>
            </div>
            {dataBerita ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-8 w-full h-max">
                {dataBerita.slice(0, 3).map((item, index) => (
                  <CardBerita 
                    key={index}
                    title={item.title}
                    name={item.name}
                    date={item.date}
                    profile={ImageProfile}
                    image={item.image}
                  />
                ))}
              </div>
            ) : (
              <div className="h-[250px] w-full center-flex">
                <p>Tidak ada berita</p>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    );
}
