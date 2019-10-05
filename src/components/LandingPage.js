import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const LandingPage = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = () => {
    const loadGifs = [];
    for (let i = 1; i <= 386; i++) {
      if (i < 10) {
        loadGifs.push(`images/00${i}.gif`);
      } else if (i < 100) {
        loadGifs.push(`images/0${i}.gif`);
      } else {
        loadGifs.push(`images/${i}.gif`);
      }
    }
    setGifs(loadGifs);
  };

  return (
    <div style={{ margin: '50px' }}>
      <Grid container>
        {gifs.map((gif, idx) => (
          <Grid key={idx} item>
            <img src={gif}></img>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LandingPage;
