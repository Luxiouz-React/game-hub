import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ListGroup } from "./components/ListGroup.tsx";

const cities = ["New York", "London", "Paris"];

function App() {
  return (
    <>
      <ListGroup items={cities} />
    </>
  );
}

export default App;
