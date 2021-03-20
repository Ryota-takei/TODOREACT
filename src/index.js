import ReactDom from "react-dom";
import { Todo } from "./components/Todo";

const App = () => {
  return (
    <div className="contaier is-fluid">
      <Todo />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
