/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model } from 'mongoose';

export type IFloor = {
  title: string;
  totalFloat: number;
  flats?: any;
  renter?: any;
};

export type FloorModel = Model<IFloor, Record<string, unknown>>;
