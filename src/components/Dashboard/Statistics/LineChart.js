import { useEffect } from "react";
import { Chart } from "chart.js";

function LineChart() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133],
            label: "Applied",
            borderColor: "#FF5A00",
            backgroundColor: "#FF5A00",
            fill: true,
          },
        ],
      },
    });
  }, []);
  return (
    <>
      {/* line chart */}
      <div className="flex mx-auto my-auto">
        <div className="w-full border border-orange-400 pt-0 my-auto  shadow-xl">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
}

export default LineChart;
