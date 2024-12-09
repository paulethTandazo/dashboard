import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Item } from './interface/Item';

interface TableWeatherProps {
  itemsIn: Item[];
}

// Función para extraer la hora de una fecha
const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export default function TableWeather({ itemsIn }: TableWeatherProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="weather table">
        <TableHead>
          <TableRow>
            <TableCell>Hora Inicio</TableCell>
            <TableCell>Hora Fin</TableCell>
            <TableCell align="right">Precipitación (%)</TableCell>
            <TableCell align="right">Humedad (%)</TableCell>
            <TableCell align="right">Nubosidad (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemsIn.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{formatTime(item.dateStart)}</TableCell>
              <TableCell>{formatTime(item.dateEnd)}</TableCell>
              <TableCell align="right">{item.precipitation}</TableCell>
              <TableCell align="right">{item.humidity}</TableCell>
              <TableCell align="right">{item.clouds}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
