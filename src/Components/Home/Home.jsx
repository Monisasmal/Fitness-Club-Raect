import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../../Components/Exercieses/Exercieses';
import SearchExercises from '../../Components/SearchExerciese/SearchExerciese';
import HeroBanner from '../../Components/HeroBanner/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
