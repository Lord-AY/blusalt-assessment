import { UseAppContext } from "../../App";

export default function Header() {
  const [, setDisplay] = UseAppContext();
  const displaySideBar = () => {
    return setDisplay(true);
  };

  return (
    <div className="flex justify-between overflow-x-auto bg-white px-5 py-[23px] sm:overflow-x-hidden">
      <div className="flex items-center gap-2 text-2xl font-bold text-[#171717]">
        <div onClick={displaySideBar} className="inline-block lg:hidden">
          <svg viewBox="0 0 100 80" width="20" height="20">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
        Dashboard
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="relative h-10 w-10 lg:h-auto lg:w-auto">
          <input
            className="mr-[37px] hidden h-10 w-[271px] rounded-[6px] bg-[#FAFAFA] pl-[42px] pr-2 text-sm outline-none lg:block"
            placeholder="Enter keywords"
            type="search"
          />
          <img
            className="absolute top-2 left-2 z-10"
            src="/assets/icons/Search.svg"
            alt="Search"
          />
        </div>
        <div className="flex items-center">
          <p className="mr-2.5 text-[#767676]">EN</p>
          <svg
            width="12"
            height="6"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="#B9B9B9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#FAFAFA] lg:flex">
          <img src="/assets/icons/Switch.svg" alt="Switch" />
        </div>
        <div className="relative hidden h-10 w-10 items-center justify-center rounded-full bg-[#FAFAFA] lg:flex">
          <div className="bg-[#F26464] h-[9px] w-[9px] rounded-full absolute top-2 right-2.5"></div>
          <img src="/assets/icons/Notification.svg" alt="Notification" />
        </div>
        <div className="h-9 w-9 overflow-hidden rounded-full">
          <img src="/assets/images/team-4-800x800.png" alt="Profile" />
        </div>
      </div>
    </div>
  );
}
