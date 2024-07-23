import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Работа", 6],
  ["Дорога на работу", 3],
  ["Учеба", 3],
  ["Еда", 2],
  ["Общение", 1],
  ["Спорт", 2],
  ["Сон", 7],
];

export const options = {
  title: "Моя активность",
};

function App() {
  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}

export default App;
