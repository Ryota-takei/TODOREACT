export const TodoItem = ({ item, onCheck }) => {
  const handleChange = () => {
    onCheck(item);
  };

  return (
    <label className="panel-block">
      <input type="checkbox" onChange={handleChange} checked={item.done} />
      <span className={item.checked ? "has-text-grey-light" : ""}>
        {item.text}
      </span>
    </label>
  );
};
