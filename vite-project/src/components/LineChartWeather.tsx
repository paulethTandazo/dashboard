import Paper from '@mui/material/Paper';
import { LineChart } from '@mui/x-charts/LineChart';
import Item from '../interface/Item';

interface LineChartWeatherProps {
  itemsIn: Item[];
}

export default function LineChartWeather({ itemsIn }: LineChartWeatherProps) {
  const xLabels = itemsIn.map((item) =>
    new Date(item.dateStart).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  const series = [
    {
      label: 'Precipitación (%)',
      data: itemsIn.map((item) => parseFloat(item.precipitation || '0')),
    },
    {
      label: 'Humedad (%)',
      data: itemsIn.map((item) => parseFloat(item.humidity || '0')),
    },
    {
      label: 'Nubosidad (%)',
      data: itemsIn.map((item) => parseFloat(item.clouds || '0')),
    },
  ];

  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <LineChart
        width={500}
        height={300}
        series={series}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
      />
    </Paper>
  );
}
