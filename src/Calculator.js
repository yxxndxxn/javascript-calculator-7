export default function Calculator() {
  const customDelimiter = (input) => {
    if (input.startsWith("//")) {
      const endDelimiter = input.indexOf("\\n"); //마지막 찾기
      if (endDelimiter == -1) {
        throw new Error("커스텀 구분자가 올바른 형식이 아닙니다.");
      } else {
        //커스텀 구분자 파싱
        const delimiter = input.substring(2, endDelimiter);
        const numbers = input.substring(endDelimiter + 2);
        return { delimiter, numbers };
      }
    }
    return { delimiter, numbers };
  };

  const splitDelimiter = (input) => {
    const { delimiter, numbers } = customDelimiter(input);
    //커스텀 구분자
    if (delimiter) {
      return numbers.split(delimiter);
    } else {
      //기본 구분자
      return numbers.split(/[,:]/).filter((num) => num !== "");
    }
  };

  const validateNumber = (num) => {
    const parsed = Number(num.trim());
    if (isNaN(parsed)) {
      throw new Error("숫자가 아닙니다.");
    } else if (parsed < 0) {
      throw new Error("양수가 아닙니다.");
    }
    return parsed;
  };

  const add = (input) => {
    if (!input) return 0;

    const numbers = splitDelimiter(input).map(validateNumber);

    return numbers.reduce((sum, num) => sum + num, 0);
  };

  return { add };
}
