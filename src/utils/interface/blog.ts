export interface BlogDataProps {
    id?: string;
    name?: string;
    title?: string;
    date?: string;
    image?: string | File | null;
    article?: string;
    status ?: string;
    category? : string;
}

export interface KegiatanDataProps {
    id?: string;
    title : string;
    image?: string | File | null;
    description : string;
}