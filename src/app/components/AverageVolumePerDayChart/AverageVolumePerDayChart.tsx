"use client";
import { useEffect, useState } from "react";
import { useTableContext } from "../../context/TableContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Label,
} from "recharts";
import { RowData } from "../../interfaces/RowData";
import { prepareAverageVolumeChartData } from "./utils/prepareAverageVolumeChartData";
import { AverageVolumeChartData } from "./interfaces/AverageVolumeChartData";

const AverageVolumePerDayChart = (): React.ReactElement => {
  // using originalTableData as the data is sorted by date by default
  const { originalTableData } = useTableContext();
  const [chartData, setChartData] = useState<AverageVolumeChartData[]>([]);

  useEffect(() => {
    if (originalTableData) {
      const chartData = prepareAverageVolumeChartData(originalTableData);
      console.log(chartData);
      setChartData(chartData);
    }
  }, [originalTableData, setChartData]);

  return (
    <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center mt-4">
      <h2 className="title is-4 has-text-centered">Average Volume Per Day</h2>
      <BarChart width={800} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="averageVolume" fill="#006B5B" />
      </BarChart>
    </div>
  );
};

export default AverageVolumePerDayChart;
