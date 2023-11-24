import React from 'react';
import { Box } from '@mui/material';
import ControlledAccordions from '../ui/Accordion';

export default function QuestPage(): JSX.Element {
  return (
    <div>
        <Box component="section" sx={{ p: 4, border: '1px dashed white' }} flex={2}>
          <ControlledAccordions />
        </Box>
     
    </div>
  );
}
