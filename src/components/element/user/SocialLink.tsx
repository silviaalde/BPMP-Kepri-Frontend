import { FaTwitter, FaYoutube, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

interface PropsSocial {
    type?: "nav" | "footer";
    style? : string
}

const socialLinks = [
    { icon: FaTwitter, url: "https://x.com/bpmpkepri" },
    { icon: FaYoutube, url: "https://www.youtube.com/@bpmpkepri" },
    { icon: FaFacebook, url: "https://www.facebook.com/bpmpkepri" },
    { icon: FaInstagram, url: "https://www.instagram.com/bpmpkepri" },
    { icon: FaWhatsapp, url: "https://whatsapp.com" },
];

// Component untuk individual Social Link
const SocialIcon = ({
        url,
        Icon,
        styles,
    }: {
        url: string;
        Icon: React.ElementType;
        styles: string;
    }) => (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles}
        >
            <Icon />
        </a>
);

const SocialLink = ({ type = "nav", style  }: PropsSocial) => {
    const baseStyles = `transition-all cursor-pointer hover:scale-110 flex items-center justify-center ${style}`;
    const footerStyles = `h-12 w-12 bg-[#082060] rounded-full hover:bg-red-500 text-white ${baseStyles}`;
    const navStyles = `text-lg hover:text-[#F80606] ${baseStyles}`;

    const renderFooter = () => (
        <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, url }, index) => (
                <SocialIcon key={index} url={url} Icon={Icon} styles={footerStyles} />
            ))}
        </div>
    );

    const renderNav = () => (
        <div className="flex items-center gap-5 ">
            {socialLinks.map(({ icon: Icon, url }, index) => (
                <SocialIcon key={index} url={url} Icon={Icon} styles={navStyles} />
            ))}
        </div>
    );

  return type === "footer" ? renderFooter() : renderNav();
};

export default SocialLink;
