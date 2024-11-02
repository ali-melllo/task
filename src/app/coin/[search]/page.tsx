import NotFoundPage from "@/components/coin/NotFound";
import { fetchFromApi } from "@/lib/fetchFormApi";
import { addCommas, truncateString } from "@/lib/globalUtils";
import Image from "next/image";

type PropTypes = {
	params: Promise<{
		search: string;
	}>;
};

type CoinResultType = {
	name: string;
	description: {
		en: string;
	};
	symbol: string;
	market_data: {
		current_price: {
			usd: number;
		};
	};
	image: {
		large: string;
	};
};

export default async function SearchPage({ params }: PropTypes) {
	const { search } = await params;

	let coinResult: CoinResultType;
	try {
		coinResult = await fetchFromApi(`/coins/${search}`);
	} catch (err: unknown) {
		if (err instanceof Error) {
			console.error(err.message);
		}
		return <NotFoundPage />;
	}

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="form-shadow gap-y-8 rounded-3xl h-[618px] w-[604px] p-10 flex flex-col">
				<h1 className="font-[Montserrat] text-xl">{coinResult.name}</h1>
				<div className="flex justify-center items-center">
					<Image
						width={104}
						height={104}
						alt={'coin'}
						src={coinResult.image.large}
						className=""
					/>
				</div>
				<div className="flex text-[#242424] text-[16px] font-normal justify-between  items-center">
					<p>Name</p><p className="font-medium">{coinResult.name}</p>
				</div>
				<div className="flex text-[#242424] text-[16px] font-normal justify-between  items-center">
					<p>Symbol</p><p className="font-medium">{coinResult.symbol}</p>
				</div>
				<div className="flex text-[#242424] text-[16px] font-normal justify-between  items-center">
					<p>Price</p><p className="font-medium">{addCommas(coinResult.market_data.current_price.usd)} $</p>
				</div>
				<div className="flex flex-col gap-y-3 text-[#242424] text-[16px] font-normal">
					<p>Description</p>
					<p className="font-medium">{truncateString(coinResult.description.en , 300)}</p>
				</div>
			</div>
		</div>
	);
}