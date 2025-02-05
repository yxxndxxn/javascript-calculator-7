export default function Calculator() {
  const add = (input) => {
    if (!input) return 0;

    const numbers = input.split(/[,:]/).map((num) => {
      const parsed = Number(num.trim());
      if (isNaN(parsed)) {
        throw new Error("숫자가 아닙니다.");
      }
      return parsed;
    });

    return numbers.reduce((sum, num) => sum + num, 0);
  };

  return { add };
}
