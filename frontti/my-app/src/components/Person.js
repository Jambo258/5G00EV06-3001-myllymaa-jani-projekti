import React from "react";

import Table from "react-bootstrap/Table";

function Person(props) {
  let [name, setName] = React.useState("");
  let [mass, setMass] = React.useState("");
  let [height, setHeight] = React.useState("");
  let [movies, setMovies] = React.useState([]);

  let moviesArr = [];

  React.useEffect(() => {
    async function fetchCharacter() {
      if (props.id === "") {
        console.log("Nothing to fetch without ID");
      } else {
        let hr = await fetch(`https://swapi.dev/api/people/${props.id}/`);
        let data = await hr.json();
        console.log(data.name);

        console.log(data.films);
        setName(data.name);
        setHeight(data.height);
        setMass(data.mass);

        let moviedata = data.films;

        for (const key in moviedata) {
          let hr2 = await fetch(moviedata[key]);
          let data2 = await hr2.json();
          console.log(data2.title);
          moviesArr.push(<li key={key}>{data2.title}</li>);
        }

        setMovies(moviesArr);
      }
    }

    fetchCharacter();
  }, [props.id]);

  const clicked = () => {
    const arr = [...props.characters];
    if (props.id === "") {
      console.log("Cant put empty data into a list");
    } else {
      let alreadyinarray = false;
      arr.forEach((element) => {
        if (element.name === name) {
          alreadyinarray = true;
          console.log("Character is already on the list");
          props.setCharacters([...props.characters]);
          props.setIdnumber(props.idnumber);
        }
      });
      if (!alreadyinarray) {
        props.setCharacters([
          ...props.characters,
          {
            id: props.idnumber,
            name: name,
            height: height,
            mass: mass,
            movies: movies,
          },
        ]);
        props.setIdnumber(props.idnumber + 1);
      }
    }
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Character Name</th>
            <th>Height (cm)</th>
            <th>Mass (kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{height}</td>
            <td>{mass}</td>
          </tr>
        </tbody>
      </Table>
      <button onClick={clicked}>Add to list</button>
    </div>
  );
}

export default Person;
