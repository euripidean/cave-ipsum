export function markovChainGenerator(text: string) {
  const words: string[] = text.split(" ");
  const wordMap: { [key: string]: string[] } = {};
  words.forEach((word, index) => {
    if (!wordMap[word]) {
      wordMap[word] = [];
    }
    if (words[index + 1]) {
      wordMap[word].push(words[index + 1]);
    }
  });

  // Add index signature to wordMap object
  interface WordMap {
    [key: string]: string[];
  }

  return wordMap as WordMap;
}
