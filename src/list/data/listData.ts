import {ListData} from '../model/ListData';

export const generateData = (): ListData[] => {
  const list: ListData[] = [];

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  alphabet.forEach(char => {
    const dataArray: string[] = [];
    for (let i = 1; i <= 100; i += 1) {
      dataArray.push(`${char.toUpperCase()} - item ${i}`);
    }
    list.push({
      title: char.toUpperCase(),
      data: dataArray,
    });
  });

  return list;
};
