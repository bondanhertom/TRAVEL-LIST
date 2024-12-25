import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats";

function App() {
  const [list, setList] = useState([]);

  function handleAddItem(item) {
    setList((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setList((items) => {
      const updatedItems = items.filter((item) => item.id !== id);
      return updatedItems;
    });
  }

  function handleCheck(id) {
    setList((items) => {
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          if (item.packed === false) {
            return { ...item, packed: true };
          } else {
            return { ...item, packed: false };
          }
        }

        return item;
      });

      return updatedItems;
    });
  }

  function handleClear() {
    return setList([]);
  }

  function handleSort(e) {
    if (e.target.value === "input") {
      setList((items) => {
        return [...items].sort((a, b) => {
          return a.id - b.id;
        });
      });
    } else if (e.target.value === "description") {
      setList((items) => {
        return [...items].sort((a, b) => a.name.localeCompare(b.name));
      });
    } else {
      setList((items) => {
        console.log("packedddd");
        return [...items].sort((a, b) => {
          return a.packed - b.packed;
        });
      });
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        list={list}
        deleteItem={handleDeleteItem}
        oncheckBox={handleCheck}
        handleClear={handleClear}
        handleSort={handleSort}
      />
      <Stats list={list} />
    </div>
  );
}

function Logo() {
  return <h1> 🌴 H E V I T R I P 🧳</h1>;
}

export default App;
