import { useState } from "react";
import { TodoItem } from "./Todoitem";
import { Input } from "./Input";
import { Filter } from "./Filter";

export const Todo = () => {
  const getKey = () => Math.random().toString(32).substring(2);

  const [items, setItems] = useState([]);
  const [filter, setFileter] = useState("ALL");

  const handleCheck = (check) => {
    const newItems = items.map((item) => {
      if (item.key === check.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };

  const addItem = (val) => {
    console.log(val);
    setItems([...items, { key: getKey(), text: val, done: false }]);
  };

  const onChange = (val) => {
    setFileter(val);
  };

  const filterItems = items.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "TODO") return !item.done;
    if (filter === "DONE") return item.done;
  });

  return (
    <div className="panel">
      <div className="panel-heading">
        <span />
        ⚛️ React ToDo
      </div>
      <Input onAdd={addItem} />
      <Filter onChange={onChange} value={filter} />
      {filterItems.map((item) => {
        return <TodoItem key={item.key} item={item} onCheck={handleCheck} />;
      })}
      <p>{filterItems.length}items</p>
    </div>
  );
};
