import Header from "./components/layout/Header";
import InfoCard from "./components/InfoCard";
import UserFlowChart from "./components/UserFlowChart";
import NewUsersChart from "./components/NewUsersChart";
import RecentRequest from "./components/RecentRequest";

import Sidebar from "./components/layout/Sidebar";
import React, { useContext, useEffect, useState } from "react";

const SideBarContext = React.createContext(undefined);
export const UseAppContext = () => {
  return useContext(SideBarContext);
};

function App() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (display && window.innerWidth < 768) {
      document.body.classList.add("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [display]);
  return (
    <SideBarContext.Provider value={[display, setDisplay]}>
      <div className="App">
        <Sidebar />
        <div className="lg:ml-64">
          <Header />
          <div className="px-5 py-10">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              <div className="col-span-1">
                <InfoCard
                  obj={{
                    total: 1478286,
                    type: "Pending Requests",
                    percentage: 4.07,
                    status: "good",
                  }}
                >
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-customBlue/10">
                    <img src="/assets/icons/StopWatch.svg" alt="Stopwatch" />
                  </div>
                </InfoCard>
              </div>
              <div className="col-span-1">
                <InfoCard
                  obj={{
                    total: 478520,
                    type: "Approved Requests",
                    percentage: 0.24,
                    status: "good",
                  }}
                >
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-customYellow/10">
                    <img
                      src="/assets/icons/DoubleCheck.svg"
                      alt="Double check"
                    />
                  </div>
                </InfoCard>
              </div>
              <div className="col-span-1">
                <InfoCard
                  obj={{
                    total: 154872,
                    type: "Total Agents",
                    percentage: 1.64,
                    status: "bad",
                  }}
                >
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-customPurple-100/10">
                    <img src="/assets/icons/Shop.svg" alt="Shop" />
                  </div>
                </InfoCard>
              </div>
              <div className="col-span-1">
                <InfoCard
                  obj={{
                    total: 167,
                    type: "Total Users",
                    percentage: 0.0,
                    status: "moderate",
                  }}
                >
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-customGreen-100/10">
                    <img src="/assets/icons/Users2.svg" alt="Users" />
                  </div>
                </InfoCard>
              </div>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-4 gap-5">
                <div className="col-span-4 xl:col-span-3">
                  <UserFlowChart />
                </div>
                <div className="col-span-4 xl:col-span-1">
                  <NewUsersChart />
                </div>
              </div>
            </div>
            <div className="mt-7">
              <div className="grid grid-cols-3 gap-5 xl:grid-cols-4">
                <div className="col-span-3">
                  <RecentRequest />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideBarContext.Provider>
  );
}

export default App;
