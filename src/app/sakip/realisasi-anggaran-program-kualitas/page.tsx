import ProgressBar from '@/components/element/user/ProgressBar';
import MainLayout from '@/components/layout/mainLayout';
import { DataAnggaranProgramKualitas } from '@/data/data-anggaran';

const Page = () => {
    return (
        <MainLayout>
            
            <div className='h-max min-h-[700px] center-flex'>
                <div className='container h-full py-20 flex items-center flex-col gap-16'>
                    <div className="flex flex-col items-center gap-3">
                        <h1 className="text-2xl font-semibold text-blue-secondary tracking-wider">
                            Realisasi Anggaran Program Kualitas BPMP Provinsi Kepulauan Riau
                        </h1>
                        <p className="text-md">
                            Per Oktober 2024
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 w-full'>
                        {DataAnggaranProgramKualitas.map((item, index) => (
                            <ProgressBar 
                                key={index}
                                title={item.title}
                                percentage={item.percentage}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Page