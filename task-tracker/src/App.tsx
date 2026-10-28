import Content from "./components/Content";
import "./index.css";


export default function App() {
  let year = 2026;
  return <>
      <div className="root">
        <Content Title="САМЫЕ УМНЫЕ ПРОЕКТЫ" Semititle="РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!" Year={year}/>
        </div>
      </>
}