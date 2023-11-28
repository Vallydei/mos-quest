import { createAsyncThunk } from '@reduxjs/toolkit';
import QuestService from '../../../services/questService';
import type { QuestType } from '../../../types/questType/questType';
import ProgressService from '../../../services/progressService';
import type { ProgressType, ProgressTypeData } from '../../../types/progressType/progressType';
import type { UserType } from '../../../types/auth';

export const thunkGetQuests = createAsyncThunk<QuestType[]>(
  'questSlice/thunkGetQuests',
  async () => {
    const quests = await QuestService.getAllQuests();
    return quests;
  },
);

export const thunkGetProgress = createAsyncThunk<ProgressType[], UserType['id']>(
  'questSlice/thunkGetProgress',
  async (id: UserType['id']) => ProgressService.getAllProgress(id),
);
export const thunkNewProgress = createAsyncThunk(
  'questSlice/thunkNewProgress',
  async (data: ProgressTypeData) => {
    const progress = await ProgressService.createNewProgress(data);
    return progress;
  },
);

export const a = 3;
