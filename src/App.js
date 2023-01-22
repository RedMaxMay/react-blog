import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Total from "./components/Total/Total";

const App = () => {
  const course = "Frontend Pro";

  const parts = [
    {
      id: 1,
      part: "Вводные занятия по React",
      tasks: 10,
    },
    {
      id: 2,
      part: "Использование React хуков",
      tasks: 5,
    },
    {
      id: 3,
      part: "Использование библиотеки react-router-dom",
      tasks: 15,
    },
  ];

  return (
    <div className="App">
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
