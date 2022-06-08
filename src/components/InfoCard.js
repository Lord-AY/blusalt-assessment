import { ReactComponent as TrendingUp } from "./icons/TrendingUp.svg";
import { ReactComponent as TrendingDown } from "./icons/TrendingDown.svg";

export default function InfoCard({ children, obj }) {
  const { total, type, percentage, status } = obj;
  return (
    <div className="flex flex-col rounded-[10px] bg-white px-5 py-[17px] shadow-custom">
      <div className="flex">
        <div className="mr-[9px]">{children}</div>
        <div className="flex flex-col">
          <p className="text-left text-2xl font-bold text-[#171717]">
            {total.toLocaleString("en-US").replaceAll(",", " ")}
          </p>
          <p className="text-left text-sm sm:text-base text-[#AAAAAA] whitespace-nowrap">{type}</p>
        </div>
      </div>
      <div className="mt-5 flex justify-end text-base">
        <div
          className={`mr-2.5 flex items-center text-left ${
            status === "good"
              ? "trendUp text-customGreen-100"
              : status === "moderate"
              ? "trendOk text-customYellow"
              : "text-customRed"
          }`}
        >
          {status === "good" || status === "moderate" ? (
            <TrendingUp className="mr-1.5" />
          ) : (
            <TrendingDown className="mr-1.5" />
          )}
          {percentage.toFixed(2)}%
        </div>
        <p className="text-[#BDBDBD]">Last month</p>
      </div>
    </div>
  );
}
