import { useLayoutEffect, useMemo, useRef } from "react";
import Chart from "chart.js/auto";

export default function UserFlowChart() {
  const ref = useRef();
  const state = useMemo(() => {
    return {
      labels: [
        "Nov",
        "Nov",
        "Dec",
        "Dec",
        "Jan",
        "Jan",
        "Feb",
        "Feb",
        "Mar",
        "Mar",
        "Apr",
        "Apr",
        "May",
        "May",
        "Jun",
      ],

      datasets: [
        {
          label: "Agents",
          // backgroundColor: "rgba(75,192,192,1)",
          borderColor: "#5F2EEA",
          borderWidth: 2,
          data: [28, 28, 45, 18, 35, 16, 30, 8, 75, 9, 25, 30, 10, 28, 25],
          lineTension: 0.5,
        },
        {
          label: "Users",
          // backgroundColor: "rgba(75,192,192,1)",
          borderColor: "#4BDE97",
          borderWidth: 2,
          data: [12.5, 27, 23, 25, 20, 15, 30, 23, 28, 18, 32, 25, 34, 25, 75],
          lineTension: 0.5,
        },
      ],
    };
  }, []);

  useLayoutEffect(() => {
    const chart = ref.current;
    const myChart = new Chart(chart.getContext("2d"), {
      type: "line",
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          y: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              autoSkip: true,
              stepSize: 25,
            },
            max: 100,
            min: 0,
          },
          x: {
            grid: {
              // borderDash: [8, 4],
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 10,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
      },
      data: state,
    });

    // when component unmounts
    return () => {
      myChart.destroy();
    };
  }, [state]);

  return (
    <div className="flex h-72 xl:h-96 flex-col rounded-[10px] bg-white p-5 shadow-custom">
      <div className="flex justify-between">
        <div className="text-left">
          <p className="text-[18px] font-semibold text-[#171717]">
            User Inflow Statistics
          </p>
          <p className="text-base text-[#B9B9B9]">Nov - July</p>
        </div>
        <div className="flex flex-row gap-5 lg:gap-10">
          <div className="flex basis-1/2">
            <div className="mt-[4px] mr-[4px] h-2 w-2 rounded-full bg-customPurple-200"></div>
            <div>
              <p className="mb-2 text-xs text-[#B9B9B9]">AGENTS</p>
              <p className="whitespace-nowrap text-xs font-medium text-[#171717] md:text-base">
                475 273
              </p>
            </div>
          </div>
          <div className="flex basis-1/2">
            <div className="mt-[4px] mr-[4px] h-2 w-2 rounded-full bg-customGreen-100"></div>
            <div>
              <p className="mb-2 text-xs text-[#B9B9B9]">USERS</p>
              <p className="whitespace-nowrap text-xs font-medium text-[#171717] md:text-base">
                782 396
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Line datasetIdKey="id" data={state} /> */}
      <div className="h-full">
        <canvas ref={ref} id="chart"></canvas>
      </div>
    </div>
  );
}
