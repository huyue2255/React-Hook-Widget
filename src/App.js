import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
const items = [
  {
    title: "What is react",
    content: "React is a front end javascript framework",
  },
  {
    title: "why use react?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use react?",
    content: "You use react by create component",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    // <Accodion items={items} />
    // <Search />
    // =========================================================
    // <div>
    //   <button onClick={() => setShowDropdown(!showDropdown)}>
    //     Toggle Dropdown
    //   </button>
    //   {showDropdown ? (
    //     <DropDrown
    //       selected={selected}
    //       onSelectedChange={setSelected}
    //       options={options}
    //     />
    //   ) : null}
    // </div>
    // =========================================================
    // <Translate />
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
