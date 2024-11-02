import Image from "next/image";

export default function NotFoundPage() {
    return (
        <div className="flex items-center gap-y-8 justify-center  min-h-screen">
            <div className="w-[640px] flex flex-col gap-y-8 h-[326px] p-10 rounded-3xl form-shadow">
                <h1 className="font-semibold text-[19px]">Not Found</h1>
                <div className="flex flex-col gap-y-6 justify-center items-center">
                    <Image
                        width={104}
                        height={104}
                        alt={'coin'}
                        src={'/assets/close-circle.svg'}
                        className=""
                    />
                    <p className="text-center font-medium">Symbol not found!</p>
                </div>
            </div>
        </div>
    )
}