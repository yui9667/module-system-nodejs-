//Part 1: Create Your Own Custom Module:

export const reverseString = (str: string): string =>
  str.split('').reverse().join('');

export const countCharacters = (str: string): number => str.length;

export const capitalizeFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

//Part 4: Go a step Further
export const countCharactersTwo = (str: string): any => {
  const charactersSpace = str.split('');
  const filteredCharacter = charactersSpace.filter(
    (item) => item !== ' '
  ).length;
  return filteredCharacter;
};
