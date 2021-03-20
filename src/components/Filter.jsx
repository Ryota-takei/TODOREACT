export const Filter = ({ value, onChange }) => {
  const handleClick = (key, e) => {
    // e.preventDefault();
    onChange(key);
  };

  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={() => {
          handleClick("ALL");
        }}
        className={value === "ALL" ? "is-active" : ""}
      >
        ALL
      </a>
      <a
        href="#"
        onClick={() => {
          handleClick("TODO");
        }}
        className={value === "TODO" ? "is-active" : ""}
      >
        TODO
      </a>
      <a
        href="#"
        onClick={() => {
          handleClick("DONE");
        }}
        className={value === "DONE" ? "is-active" : ""}
      >
        DONE
      </a>
    </div>
  );
};
