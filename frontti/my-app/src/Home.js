import React from "react";
import Person from "./components/Person";
function Home(props) {
  let [number, setNumber] = React.useState("");

  return (
    <div>
      <Person
        id={number}
        characters={props.characters}
        setCharacters={props.setCharacters}
        idnumber={props.idnumber}
        setIdnumber={props.setIdnumber}
      />
      <input
        type="number"
        min="1"
        name="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
    </div>
  );
}

export default Home;
