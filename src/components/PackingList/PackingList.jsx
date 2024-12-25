import Item from "./Item";
import SortClear from "./Sort";

export default function PackingList({
  list,
  deleteItem,
  oncheckBox,
  handleClear,
  handleSort,
}) {
  function handleDelete(id) {
    deleteItem(id);
  }
  function checkBox(id) {
    oncheckBox(id);
  }
  return (
    <div className="list">
      {list.length ? (
        <ul>
          {list.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDelete={handleDelete}
              onCheckboxChange={checkBox}
              handleSort={handleSort}
            />
          ))}
        </ul>
      ) : (
        "Your list is empty. Start adding items! ❤️"
      )}
      {list.length ? (
        <SortClear handleSort={handleSort} handleClear={handleClear} />
      ) : (
        ""
      )}
    </div>
  );
}
