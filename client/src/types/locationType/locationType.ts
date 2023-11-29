import type { UserType } from '../auth';

export type LocationType = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  adress: string;
  map: string;
  Images: ImageType[];
  Comment: CommentType[];
} | null;

export type ImageType = {
  id: number;
  locationId: number;
  locationImg: string;
};

export type CommentType = {
  id: number;
  userId: number;
  locationId: number;
  text: string;
  User: UserType[];
};

export type CommentFormType = {
  text: string;
  locationId: number;
};

export type CommentEditType = {
  text: string;
  id: number;
};