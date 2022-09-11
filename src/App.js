import Header from "./components/Header";
import LogTile from "./components/LogTile";
import data from "./data";

export default function App() {
  const logs=data.map(log => (<LogTile {...log}/>));
  return (
    <>
    <Header/>
    {logs}
    </>  
  );
}