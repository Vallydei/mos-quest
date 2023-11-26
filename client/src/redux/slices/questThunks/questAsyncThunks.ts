import { createAsyncThunk } from '@reduxjs/toolkit';
import QuestService from '../../../services/questService';
import type { QuestType } from '../../../types/questType/questType';

export const thunkGetQuests = createAsyncThunk<QuestType[]>(
  'questSlice/thunkGetQuests',
  async () => {
    const quests = await QuestService.getAllQuests();    
    return quests;
  },
);

export const a = 3;
