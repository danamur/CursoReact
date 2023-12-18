import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { isLoading, pokemons = [], page } = useSelector(state => state.pokemons);

  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const handleSliderAfterChange = (currentIndex) => {
    if (pokemons.length / (currentIndex + 1) === 2) {
      dispatch(getPokemons(page, pokemons));
    }
  };

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading: {isLoading ? 'True' : 'False'}</span>

      <Slider {...sliderSettings} afterChange={handleSliderAfterChange}>
        {pokemons.map(({ name, sprites }) => (
          <Card key={name}>
            <CardMedia component='img' alt={name} height='auto' image={sprites.front_default} />
            <CardContent>
              <Typography variant='h5' component='div'>
                {name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </>
  );
};
