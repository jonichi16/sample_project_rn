import {ListData} from '../model/ListData';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const list: ListData[] = [];
// const currentPage = page;
// const numberOfPage = Math.ceil(list.length / pageSize);

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

export const generateData = (
  index: number,
  numberOfSection: number,
): ListData[] => {
  return list.slice(index, index + numberOfSection);
};
