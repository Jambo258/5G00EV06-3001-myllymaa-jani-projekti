import React from "react";
import Table from "react-bootstrap/Table";

function Output(props) {
  const deleteById = (id) => {
    const arr = [...props.characters];
    props.setCharacters(arr.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Added characters data</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Character Name</th>
            <th>Height (cm)</th>
            <th>Mass (kg)</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {props.characters.map((item, i) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.mass}</td>
              <td>
                {<button onClick={() => deleteById(item.id)}>Delete</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function Characters(props) {
  return (
    <div>
      <Output
        characters={props.characters}
        setCharacters={props.setCharacters}
      />
    </div>
  );
}

export default Characters;
