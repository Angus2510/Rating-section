import Image from "next/image";
import Rating from "@/components/rating";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Rating />
    </div>
  );
}
