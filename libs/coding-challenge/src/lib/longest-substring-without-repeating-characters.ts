export function lengthOfLongestSubstring(s: string): number {
  return Array.from(s).reduce(
    (state, char, right) => {
      const previousIndex = state.lastSeen.get(char);

      const left =
        previousIndex !== undefined && previousIndex >= state.left
          ? previousIndex + 1
          : state.left;

      const lastSeen = new Map(state.lastSeen).set(char, right);

      return {
        left,
        lastSeen,
        maxLength: Math.max(state.maxLength, right - left + 1),
      };
    },
    {
      left: 0,
      maxLength: 0,
      lastSeen: new Map<string, number>(),
    }
  ).maxLength;
}
