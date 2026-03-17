"use client";

import { useState } from "react";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([
    { id: 1, label: "Learn React", done: true },
    { id: 2, label: "Learn Next.js", done: false },
  ]);

  const handleAddItem = () => {
    if (inputText.trim() === "") return;

    setList([...list, { id: Date.now(), label: inputText, done: false }]);
    setInputText("");
  };

  const handleDeleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  const toggleItem = (id: number) => {
    const newItem = [...list];

    for (const key in newItem) {
      if (newItem[key].id === id) {
        newItem[key].done = !newItem[key].done;
      }
    }

    setList(newItem);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Todo List</h1>

      <div>
        <input
          type="text"
          className="border p-2"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={handleAddItem}
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          Adicionar
        </button>

        <ul>
          {list.map((item) => (
            <li key={item.id} className="flex items-center mt-2">
              <input
                onClick={() => toggleItem(item.id)}
                type="checkbox"
                checked={item.done}
                className="w-4 h-4 mr-3"
              />
              <span>
                {item.label} -{" "}
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="text-red-500 cursor-pointer"
                >
                  [excluir]
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
