import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
//import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import City from "./city";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function State({ states }) {
  const classes = useStyles();
  const [cityIndex, setCityIndex] = React.useState(-1);
  const [townIndex, setTownIndex] = React.useState(-1);

  const [state, setState] = React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

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
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">States</InputLabel>
        <Select value={state} onChange={handleChange}>
          {states.map((item, index) => (
            <MenuItem key={index} onClick={handleCity} id={`state${index + 1}`}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
