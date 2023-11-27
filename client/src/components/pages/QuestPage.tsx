import React from 'react';
import { Backdrop, Box, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import ControlledAccordions from '../ui/Accordion';
import { useAppSelector } from '../../redux/hooks';

export default function QuestPage(): JSX.Element {
  const quests = useAppSelector((store) => store.questsSlice.quests);
  const { questId } = useParams();
  const quest = quests.find((el) => el?.id === Number(questId));
 
  // 
  


  

  return (
    <div>
      <Box component="section" sx={{ p: 4, border: '1px dashed white' }} flex={2}>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={!(quest !== undefined)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {quest !== undefined ? <ControlledAccordions quest={quest} /> : (<>Загрузка</>) }
      </Box>
    </div>
  );
}
