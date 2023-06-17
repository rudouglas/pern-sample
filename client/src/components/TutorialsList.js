import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/TutorialService";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";
const sleep = (time = 5000) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
const stack = [];
for (let i = 0; i < 50; i++) {
  stack.push(`option ${i % 10} ${i}`);
}
const TutorialsList = () => {
  const [tutorials, setTutorials] = useState([]);
  const [currentTutorial, setCurrentTutorial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
  const [options, setOptions] = React.useState([]);

  const search = async (s) => {
    await sleep(500);
    setOptions(stack.filter((value) => value.includes(s)));
  };
  useEffect(() => {
    retrieveTutorials();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTutorials = () => {
    TutorialDataService.getAll()
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTutorials();
    setCurrentTutorial(null);
    setCurrentIndex(-1);
  };

  const setActiveTutorial = (tutorial, index) => {
    setCurrentTutorial(tutorial);
    setCurrentIndex(index);
  };

  const removeAllTutorials = () => {
    TutorialDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    TutorialDataService.findByTitle(searchTitle)
      .then(response => {
        setTutorials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <Autocomplete
          autoHighlight
          onHighlightChange={(event, option, reason) => {
            console.log('onHighlightChange', option);
          }}
          filterOptions={(x) => x}
          
          options={options}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Combo box"
              variant="outlined"
              onChange={async (event) => await search(event.target.value)}
            />
          )}
        />
    </div>
  );
};

export default TutorialsList;
