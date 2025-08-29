const vocabulary = [
  { word: 'remote', meaning: 'làm việc từ xa' },
  { word: 'flexibility', meaning: 'tính linh hoạt' },
  { word: 'communication', meaning: 'giao tiếp' },
  { word: 'productivity', meaning: 'năng suất' }
];

const findWord = (word) => {
  return vocabulary.find(v => v.word === word);
};

export { findWord };