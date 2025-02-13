import InputField from "@/components/element/InputField"
import SectionTitle from "@/components/element/user/SectionTitle"
import MainLayout from "@/components/layout/mainLayout"
import { FaMailBulk, FaMapSigns, FaPhone } from "react-icons/fa"


const Page = () => {
    const DataAddress = [
        { icons : FaPhone, title : "Telephone", desc : "(0771) 4442196" },
        { icons : FaMailBulk, title : "Tirim Surel", desc : "bpmp.kepri@kemdikbud.go.id" },
        { icons : FaMapSigns, title : "Kunjungi Kantor Kami", desc : "Jl. Tata Bumi Km.20 Ceruk Ijuk, Toapaya, Bintan" },
    ]

    return (
        <MainLayout>
            <div className="h-max w-full center-flex py-16">
                <div className="container h-full  flex flex-col items-center gap-20">
                    <SectionTitle 
                        title="HUBUNGI KAMI"
                        heading="Kami berkomitmen memberikan pelayanan terbaik"
                        headingClassName="text-center"
                    />
                    <div className="w-full h-max flex gap-10 md:flex-row flex-col">
                        <div className="flex flex-col gap-8 w-max h-max">
                            {DataAddress.map((items, index) => (
                                <div key={index} className="flex items-center gap-5">
                                    <div className="h-16 w-16 bg-blue-light center-flex text-white text-2xl flex-shrink-0">
                                        <items.icons />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p>{items.title}</p>
                                        <h1 className="text-blue-secondary text-lg font-semibold">
                                            {items.desc}
                                        </h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className=" flex-1 flex flex-col gap-4">
                            <div className="flex flex-col md:w-[50%] w-full gap-4">
                                <InputField 
                                    title="Nama Anda"
                                />
                                <InputField 
                                    title="Email Anda"
                                />
                                <InputField 
                                    title="Subject"
                                />
                            </div>
                            <InputField 
                                title="Nama Anda"
                                type="textarea"
                            />
                            <div className="flex items-center w-full h-max mt-5">
                                <button
                                    className="w-32 h-14 bg-blue-secondary text-white hover:opacity-50"
                                >   
                                    Kirim
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Page