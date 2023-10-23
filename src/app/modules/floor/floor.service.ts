import { IFloor } from './floor.interface';
import { Floor } from './floor.model';

const crateFloor = async (floor: IFloor): Promise<IFloor | null> => {
  console.log('from service is = ', floor);
  const newfloor = await Floor.create(floor);
  return newfloor;
};

export const FloorService = {
  crateFloor,
};
