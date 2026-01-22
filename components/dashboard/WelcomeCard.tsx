import Image from "next/image";
import Card from "../common/Card";

export default function WelcomeCard() {
  return (
    <Card className="w-full h-full flex flex-col md:flex-row gap-6">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-[#A0AEC0] font-bold my-2">Built by developers</p>
          <h2 className="text-lg font-bold text-[#2D3748]">Purity UI Dashboard</h2>
          <p className="text-sm mt-1 font-medium text-[#A0AEC0]">
            From colors, cards, typography to complex elements,
            <br />
            you will find the full documentation.
          </p>
        </div>
        <div className="flex">
          <button
            onClick={() => alert("Read more")}
            className="mt-4 flex items-center gap-1 text-xs font-bold text-[#2D3748] cursor-pointer"
          >
            Read more
            <span className="inline-flex mt-0.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.28125 2.625L9.65625 6L6.28125 9.375"
                  stroke="#2D3748"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.1875 6.00024H2.34375"
                  stroke="#2D3748"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

      </div>

      <div className="flex gap-4">
        <Image src="/chakra.png" alt="chakra" width={256} height={280} />
      </div>
    </Card>
  );
}
