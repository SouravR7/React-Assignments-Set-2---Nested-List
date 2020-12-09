import React from "react";
import Town from "./town";

export default function City({ city, index }) {
  const [townIndex, setTownIndex] = React.useState(index);

  const handleTown = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;
    if (townIndex === index) {
      setTownIndex(-1);
      return;
    }
    setTownIndex(index);
  };
  return (
    <>
      {city.cities.map((item, index) => (
        <li onClick={handleTown} id={`city${index + 1}`} key={index}>
          {item.name}
        </li>
      ))}

      {townIndex !== -1 && <Town town={city.cities[townIndex]} />}
    </>
  );
}

// {/* <FormControl className={classes.formControl}>
// <InputLabel id="demo-simple-select-label">Age</InputLabel>
// <Select
//   labelId="demo-simple-select-label"
//   id="demo-simple-select"
//   value={age}
//   onChange={handleChange}
// >
//   <MenuItem value={10}>Ten</MenuItem>
//   <MenuItem value={20}>Twenty</MenuItem>
//   <MenuItem value={30}>Thirty</MenuItem>
// </Select>
// </FormControl> */}
