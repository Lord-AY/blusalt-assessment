import React from "react";
import { UseAppContext } from "../../App";
import Links from "./Links";

export default function Sidebar() {
  const [display, setDisplay] = UseAppContext();

  const close = () => {
    return setDisplay(false);
  };
  return (
    <React.Fragment>
      <div
        className={`${
          display ? "translate-x-0" : "-translate-x-full"
        } fixed z-[100] flex h-screen w-full flex-col overflow-y-auto bg-customPurple-100 px-5 pt-[30px] pb-[60px] text-white transition-all duration-150 md:w-1/3 lg:w-64 lg:translate-x-0`}
      >
        <div className="relative flex justify-center  border-b border-b-white/10 pb-[11px]">
          <img src="/assets/icons/Logo.svg" alt="Logo" />
          <div
            onClick={close}
            className="absolute top-0 right-0 flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#509FEF]/10 lg:hidden"
          >
            X
          </div>
        </div>

        <div>
          <Links title="Dashboard">
            <img src="/assets/icons/Home.svg" alt="Home" />
          </Links>
          <Links title="Requests">
            <img src="/assets/icons/Chat.svg" alt="Request" />
          </Links>
          <Links title="KYCs">
            <img src="/assets/icons/File.svg" alt="File" />
          </Links>
          <Links title="Reports">
            <img src="/assets/icons/Document.svg" alt="Reports" />
          </Links>
          <Links title="Audit Trail">
            <img src="/assets/icons/Folder.svg" alt="Audit" />
          </Links>
          <Links title="Users">
            <img src="/assets/icons/Users.svg" alt="Users" />
          </Links>
          <Links title="Users">
            <img src="/assets/icons/Settings.svg" alt="Logo" />
          </Links>
        </div>
        <div className="mt-auto flex items-center gap-2 rounded-[5px] bg-white/10  py-[9px] px-[8.5px]">
          <div className="overflow-none h-9 w-9">
            <img
              className="rounded-full"
              src="/assets/images/team-4-800x800.png"
              alt="profile"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Nafisa Sh.</p>
            <p className="text-[10px] font-medium">Support manager</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
