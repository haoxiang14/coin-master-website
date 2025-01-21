import Image from "next/image";
import TradingBot from "@/components/trading-bot";
import Roadmap from "@/components/roadmap";
import { CoinPile } from "@/components/coin-pile";

export default function Home() {
  return (
    <>
    <TradingBot />
    <Roadmap />
    <CoinPile />
    </>
  );
}
