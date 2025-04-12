interface SectionTitleProps {
    title: string;
    heading: string;
    useLine? : boolean;
    titleClassName?: string;  // Optional class for the title
    headingClassName?: string;  // Optional class for the heading
    containerClassName?: string; // Optional class for the container
    alignItems?: "items-center" | "items-start" | "items-end"; // Alignment options
}

const SectionTitle = ({
    title,
    heading,
    useLine = true,
    titleClassName = '',   // Default to empty string if not provided
    headingClassName = '', // Default to empty string if not provided
    containerClassName = '', // Default to empty string if not provided
    alignItems = "items-center", // Default alignment
}: SectionTitleProps) => {
    return (
        <div className={`flex flex-col gap-3 ${alignItems} ${containerClassName}`}>
            { useLine ?<div className="section-line"></div> : <div></div>}
            <p className={`section-title uppercase ${titleClassName}`}>{title}</p>
            <h1 className={`text-3xl md:text-5xl text-blue-secondary font-semibold tracking-wider uppercase ${headingClassName}`}>
                {heading}
            </h1>
        </div>
    );
};

export default SectionTitle;
