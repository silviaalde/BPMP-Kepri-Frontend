import { ImageStandarPelayanan } from "@/assets/images"
import LayoutPPID from "@/components/layout/ppidLayout"
import Image from "next/image"

const Page = () => {
    return (
        <LayoutPPID>
            <div className="h-max py-16 center-flex">
                <div className="container h-max flex ">
                    <Image 
                        src={ImageStandarPelayanan}
                        alt="Image Standar Pelayanan"
                        className="object-contain"
                    />
                </div>
            </div>
        </LayoutPPID>
    )
}

export default Page