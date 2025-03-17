function countOfSubstrings(word: string, k: number): number {
  return fk(word, k) - fk(word, k + 1);
}

function fk(word: string, k: number): number {
  const vowels = [0, 0, 0, 0, 0];
  let constant = 0;
  let ans = 0;

  let [i, j] = [0, 0];

  while (j < word.length) {
    switch (word[j]) {
      case 'a':
        vowels[0]++;
        break;
      case 'e':
        vowels[1]++;
        break;
      case 'i':
        vowels[2]++;
        break;

      case 'o':
        vowels[3]++;
        break;

      case 'u':
        vowels[4]++;
        break;

      default:
        constant++;
        break;
    }

    while (constant >= k && vowels.every((x) => x)) {
      ans += word.length - j;

      switch (word[i]) {
        case 'a':
          vowels[0]--;
          break;

        case 'e':
          vowels[1]--;
          break;

        case 'i':
          vowels[2]--;
          break;

        case 'o':
          vowels[3]--;
          break;

        case 'u':
          vowels[4]--;
          break;

        default:
          constant--;
          break;
      }

      i++;
    }

    j++;
  }

  return ans;
}

console.log(countOfSubstrings('ieaouqqieaouqq', 1));
