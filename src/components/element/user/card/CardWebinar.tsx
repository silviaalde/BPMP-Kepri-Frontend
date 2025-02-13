import { StaticImageData } from "next/image";
import { FaArrowRight, FaClock } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import Image  from "next/image";

interface PropsCard {
    date : string;
    month : string;
    time : string;
    title : string;
    location : string;
    image : StaticImageData;
}


const CardWebinar = ({
    date,
    month,
    time,
    title,
    location,
    image
} : PropsCard) => {
    return (
        <div className="h-max md:h-[200px] w-full bg-gray-100 hover:bg-white hover:shadow-lg cursor-pointer flex items-start md:items-center md:flex-row flex-col gap-5 py-8 md:py-4  px-8">
            <div className="h-40 w-40 relative center-flex ">
            <div className="h-14 w-14 absolute top-0 left-0 bg-blue-light center-flex flex-col text-white text-sm font-medium">
                <p>{date}</p>
                <p>{month}</p>
            </div>
            <Image src={image} className="w-36 h-36 rounded-full object-cover" alt="Image Zoom 1" />
            </div>
            <div className="h-full flex flex-1 flex-col gap-5 justify-center">
            <div className="flex flex-col  gap-2 ">
                <div className="flex items-center gap-2">
                    <FaClock className="text-blue-light text-lg" />
                    <p className="text-sm">{time}</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaLocationPin className="text-blue-light text-lg" />
                    <p className="text-sm">{location}</p>
                </div>
            </div>
            <h3 className="uppercase text-blue-secondary text-3xl font-semibold">{title}</h3>
            <div className="flex items-center gap-2">
                <a href="" className="hover:underline hover:text-blue-light underline font-medium">View Event</a>
                <FaArrowRight className="text-sm" />
            </div>
            </div>
        </div>
    )
}

export default CardWebinar