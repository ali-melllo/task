'use client';

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";


export default function SearchForm() {

    const router = useRouter();

    const [searchText, SetSearchText] = useState<string>('');

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        SetSearchText(value);

    }, [])

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/coin/${searchText}`);
    }, [router, searchText]);

    return (
        <form onSubmit={handleSubmit} className="flex p-10 flex-col h-[358px] w-[604px] justify-between rounded-3xl form-shadow">
            <h1 className="font-[Montserrat] font-semibold text-xl">Crypto</h1>

            <label className="flex flex-col gap-y-4 text-[#242424] text-[16px]">Enter Symbol Name and Search:
                <input onChange={handleInputChange} placeholder="Symbol Name" className="border border-[#F5F5F5] px-10 py-3" />
            </label>

            <button className="bg-[#0059FF] text-white text-center rounded-[4px] px-10 py-3">
                Search
            </button>
        </form>
    )
}