import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import ControlledAccordions from '../ui/Accordion';
import { useAppSelector } from '../../redux/hooks';

export default function QuestPage(): JSX.Element {
  const quests = useAppSelector((store) => store.questsSlice.quests);
  const { questId } = useParams();
  const quest = quests.find((el) => el?.id === Number(questId));
  console.log(quests, questId);

  return (
    <div
      style={{
        borderRadius: '20px',
        height: '90vh',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <div
        style={{
          width: '840px',
          animation: 'fadeIn 0.5s ease-in',
          backgroundColor: 'white',
          borderRadius: '20px',
        }}
      >
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={!(quest !== undefined)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {quest !== undefined ? <ControlledAccordions quest={quest} /> : <>Загрузка</>}
      </div>
    </div>
  );
}
