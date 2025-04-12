import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaCalendar, FaComment, FaFolder } from "react-icons/fa";

interface CardBlogProps {
    image: StaticImageData | string | null | undefined;
    title: string;
    date: string;
    category: string;
    comment: number;
    content: string; // content bisa berupa string dengan HTML
}

const CardBlog = ({
    image,
    title,
    date,
    category,
    comment,
    content
}: CardBlogProps) => {

    const truncateContent = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return `${text.slice(0, maxLength)} [...]`;
        }
        return text;
    };

    return (
        <div className="flex flex-col gap-7 w-full h-max">
            {/* Menampilkan gambar jika image adalah URL string */}
            {typeof image === "string" ? (
                <Image
                    src={`https://bpmp-kepri-backend.my.id/${image.replace(/^\/+/, '')}`} // Menggunakan URL string dari backend
                    alt={`images ${title}`}
                    className="h-[250px] md:h-[340px] lg:h-[370px] w-full object-cover"
                    width={700}
                    height={370}
                />
            ) : (
                <Image
                    src={image || '/default-image.jpg'} // Default image jika tidak ada gambar
                    alt={`images ${title}`}
                    className="h-[250px] md:h-[340px] lg:h-[370px] w-full object-cover"
                />
            )}

            <div className="flex flex-col gap-4">
                <div className="h-max flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <FaCalendar
                            className="text-blue-light"
                        />
                        <p className="text-sm">{date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaFolder
                            className="text-blue-light"
                        />
                        <Link href={`/blog/${category}`}>
                            <p className="text-sm hover:text-blue-light ">{category}</p>
                        </Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaComment
                            className="text-blue-light"
                        />
                        <p className="text-sm">{comment} Comments</p>
                    </div>
                </div>
                <Link href={`/blog/by/${title}`}>
                    <h4 className="text-2xl text-blue-secondary hover:text-blue-light uppercase font-semibold tracking-wider">
                        {title}
                    </h4>
                </Link>

                {/* Menampilkan content yang telah di-truncate jika perlu */}
                <p className="text-justify text-md mb-5">
                    {content ? (
                        <span
                            dangerouslySetInnerHTML={{
                                __html: truncateContent(content, 402) // Memasukkan HTML dengan hati-hati
                            }}
                        />
                    ) : (
                        <span>{truncateContent(content, 402)}</span>
                    )}
                </p>

                <Link href={`/blog/by/${title}`}>
                    <div className="h-12 w-36 bg-blue-light text-white center-flex hover:border 
                    hover:border-blue-light hover:text-blue-light hover:bg-white transform transition duration-300 hover:scale-105">
                        <p>
                            Read More
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CardBlog;
