import Image from "next/image";
import Card from "../common/Card";

export default function TeamCard() {
  return (
    <Card className="h-full w-full p-0 relative">
      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <Image
          src="/teams.png"
          alt="Team working together"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>
      <div className="absolute inset-0 flex-1 flex flex-col justify-between p-7">
        <div className="text-white">
          <h2 className="text-lg font-bold">Work with the Rockets</h2>
          <p className="text-xs mt-1 font-normal">
            Wealth creation is an evolutionarily recent positive-sum game.
            <br />
            It is all about who take the opportunity first..
          </p>
        </div>

        <div className="flex">
          <button
            onClick={() => alert("Read more")}
            className="mt-4 flex items-center gap-1 text-xs font-bold text-white cursor-pointer"
          >
            Read more
            <span className="inline-flex mt-0.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.28125 2.625L9.65625 6L6.28125 9.375" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.1875 6.00024H2.34375" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
}
