function longestCommonPrefix(strs: string[]): string {
  // Find the shortest string length, as the common prefix can't be longer than that
  const shortestLength = strs.reduce(
    (minLength, currentString) => Math.min(minLength, currentString.length),
    Infinity
  );

  // Starting from the length of the shortest string, reduce the length
  // until we find the longest common prefix
  for (let i = shortestLength; i > 0; i--) {
    // Grab the prefix from the start of the first string up to the current length
    const currentPrefix = strs[0].substring(0, i);

    // Check if every string in the array has the same prefix
    if (strs.every((string) => string.startsWith(currentPrefix))) {
      // If they do, return the current prefix
      return currentPrefix;
    }
  }

  // If there's no common prefix at all, return an empty string
  return '';
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
