import React from "react";

import City from "./city";

export default function State({ states }) {
  const [cityIndex, setCityIndex] = React.useState(-1);
  const [townIndex, setTownIndex] = React.useState(-1);

  const handleCity = (event) => {
    let index = event.target.id;
    index = index.charAt(index.length - 1) - 1;
    if (cityIndex === index) {
      setCityIndex(-1);
      return;
    }
    setCityIndex(index);
    setTownIndex(-1);
  };
  return (
    <>
      {states.map((item, index) => (
        <li key={index} onClick={handleCity} id={`state${index + 1}`}>
          {item.name}
        </li>
      ))}

      {cityIndex !== -1 && <City index={townIndex} city={states[cityIndex]} />}
    </>
  );
}

// {
//   /* <FormControl className={classes.formControl}>
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
// </FormControl> */
// }

// {
//   states.map((item, index) => (
//     <li key={index} onClick={handleCity} id={`state${index + 1}`}>
//       {item.name}
//     </li>
//   ));
// }
