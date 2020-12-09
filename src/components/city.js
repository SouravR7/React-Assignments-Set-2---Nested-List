import React from "react";
import Town from "./town";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function City({ city, index }) {
  const classes = useStyles();
  const [townIndex, setTownIndex] = React.useState(index);
  const [cityname, setCity] = React.useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

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
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">City</InputLabel>{" "}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cityname}
          onChange={handleChange}
        >
          {city.cities.map((item, index) => (
            <MenuItem onClick={handleTown} id={`city${index + 1}`} key={index}>
              {item.name}
            </MenuItem>
          ))}
        </Select>{" "}
      </FormControl>
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
