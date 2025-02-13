import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const handleRequest = async (request: Promise<AxiosResponse>) => {
    try {
        const response = await request;
        return response;
    } catch (error) {
        throw error;
    }
};


interface BlogQueryParams {
    id?: string | string[] | undefined; // Optional karena tidak selalu ada di query
    title?: string;
    category?: string | string[] | undefined;
    status?: string;
}

export const Auth = {
    Login: (email: string, password: string) => 
        handleRequest(axios.post(`${baseUrl}/user/sign-in`, { email, password })),
};

export const Blog = {
    GetBlog: (params: BlogQueryParams = {}) =>
        handleRequest(
            axios.get(`${baseUrl}/blog`, { params })
        ),
    DeleteBlog : (id : string, token : string | null) => 
        handleRequest(
            axios.delete(`${baseUrl}/blog/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
    UpdateBlog : (id : string | undefined | string[], token : string | null, data : FormData) => 
        handleRequest(
            axios.post(`${baseUrl}/blog-update/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )), 
    CreateBlog : (token : string | null, data : FormData) => 
        handleRequest(
            axios.post(`${baseUrl}/blog`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )), 
}

interface KegiatanQueryParams {
    title?: string;
    id?: string | string[] | undefined; 
}

export const Kegiatan = {
    CreateKegiatan : (token : string | null, data : FormData) => 
        handleRequest(
            axios.post(`${baseUrl}/kegiatan`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )), 
    GetKegiatan: (params: KegiatanQueryParams = {}) =>
        handleRequest(
            axios.get(`${baseUrl}/kegiatan`, { params })
        ),
    DeleteKegiatan : (id : string, token : string | null) => 
        handleRequest(
            axios.delete(`${baseUrl}/kegiatan/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
    UpdateKegiatan : (id : string | undefined | string[], token : string | null, data : FormData) => 
        handleRequest(
            axios.post(`${baseUrl}/kegiatan-update/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
}

export const ImageKegiatan = {
    DeleteImageKegiatan : (id : string, token : string | null) => 
        handleRequest(
            axios.delete(`${baseUrl}/kegiatan-image/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
    CreateImageKegiatan : (token : string | null, data : FormData) => 
        handleRequest(
            axios.post(`${baseUrl}/kegiatan-image`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )), 
}

interface PenghargaanQueryParams {
    id?: string | string[] | undefined; // Optional karena tidak selalu ada di query
    title?: string;
    category?: string | string[] | undefined;
}


export const Penghargaan = {
    GetPenghargaan: (params: PenghargaanQueryParams = {}) =>
        handleRequest(
            axios.get(`${baseUrl}/penghargaan`, { params })
        ),
    DeletePenghargaan : (id : string, token : string | null) => 
        handleRequest(
            axios.delete(`${baseUrl}/penghargaan/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
    CreatePenghargaan : (token : string | null, data : FormData) => 
        handleRequest(
            axios.post(`${baseUrl}/penghargaan`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )), 
    UpdatePenghargaan : (id : string | undefined | string[], token : string | null, data : FormData) => 
        handleRequest(
            axios.post(`${baseUrl}/penghargaan-update/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
}

interface UnduhanQueryParams {
    id?: string | string[] | undefined; // Optional karena tidak selalu ada di query
    title?: string;
    category?: string | string[] | undefined;
}


export const Unduhan = {
    GetUnduhan: (params: UnduhanQueryParams = {}) =>
        handleRequest(
            axios.get(`${baseUrl}/unduhan`, { params })
        ),
    DeleteUnduhan : (id : string, token : string | null) => 
        handleRequest(
            axios.delete(`${baseUrl}/unduhan/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
    CreateUnduhan : (token : string | null, data : FormData) => 
        handleRequest(
            axios.post(`${baseUrl}/unduhan`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )), 
    UpdateUnduhan : (id : string | undefined | string[], token : string | null, data : FormData) => 
        handleRequest(
            axios.post(`${baseUrl}/unduhan-update/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
    CreateFileUnduhan : (token : string | null, data : FormData) => 
        handleRequest(
            axios.post(`${baseUrl}/file-unduhan`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )), 
    DeleteFileUnduhan : (id : string, token : string | null) => 
        handleRequest(
            axios.delete(`${baseUrl}/file-unduhan/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
}

interface FaqQueryParams {
    id?: string | string[] | undefined; 
    category?: string | string[] | undefined;
}

export const Faq = {
    GetFaq: (params: FaqQueryParams = {}) =>
        handleRequest(
            axios.get(`${baseUrl}/faq`, { params })
        ),
    CreateFaq : (token : string | null, data : FormData) => 
        handleRequest(
            axios.post(`${baseUrl}/faq`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
    DeleteFaq : (id : string, token : string | null) => 
        handleRequest(
            axios.delete(`${baseUrl}/faq/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
    UpdateFaq : (id : string | undefined | string[], token : string | null, data : FormData) => 
        handleRequest(
            axios.post(`${baseUrl}/faq-update/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
}

interface ProgressQueryParams {
    id?: string | string[] | undefined; 
    month?: string | string[] | undefined; 
    year?: string | string[] | undefined; 

}

export const Progress = {
    GetProgress: (params: ProgressQueryParams = {}) =>
        handleRequest(
            axios.get(`${baseUrl}/progress`, { params })
        ),
    CreateProgress : (token : string | null, data : FormData) => 
        handleRequest(
            axios.post(`${baseUrl}/progress`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
    DeleteProgress : (id : string, token : string | null) => 
        handleRequest(
            axios.delete(`${baseUrl}/progress/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
    UpdateProgress : (id : string | undefined | string[], token : string | null, data : FormData) => 
        handleRequest(
            axios.post(`${baseUrl}/progress-update/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )),
    
}

export const Stats = {
    GetStats: () =>
        handleRequest(
            axios.get(`${baseUrl}/data-stats`)
        ),
}