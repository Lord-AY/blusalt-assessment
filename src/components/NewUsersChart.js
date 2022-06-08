import { useLayoutEffect, useRef, useMemo } from "react";
import Chart from "chart.js/auto";

export default function NewUsersChart() {
  const ref = useRef();
  const state = useMemo(() => {
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],

      datasets: [
        {
          label: "Agents",
          backgroundColor: "#fff",
          borderColor: "#fff",
          borderWidth: 0,
          borderRadius: 8,
          data: [900, 700, 400, 1100, 800],
        },
      ],
    };
  }, []);

  useLayoutEffect(() => {
    const chart = ref.current;
    const myChart = new Chart(chart.getContext("2d"), {
      type: "bar",

      data: state,
      options: {
        responsive: true,
        // maintainAspectRatio: false,
        barPercentage: 0.15,
        scales: {
          x: {
            grid: {
              display: false,
            },
            // barThickness: 0.15,
            ticks: {
              color: "#fff",
            },
          },
          y: {
            grid: {
              borderDash: [8, 4],
              drawBorder: false,
              color: "rgba(255,255,255,0.2)",
            },
            ticks: {
              color: "#fff",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    // when component unmounts
    return () => {
      myChart.destroy();
    };
  }, [state]);

  return (
    <div className="flex h-auto flex-col rounded-[10px]  bg-customPurple-100 p-5 md:h-full">
      {/* <Line datasetIdKey="id" data={state} /> */}
      <div className="h-full">
        <canvas ref={ref}></canvas>
      </div>
      <div className="text-left text-white">
        <p className="text-base font-bold">New Users</p>
        <p className="text-sm">
          <span className="font-bold">(+23%)</span> than last week
        </p>
      </div>
    </div>
  );
}
