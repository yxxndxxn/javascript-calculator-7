import { Console } from "@woowacourse/mission-utils";
import Calculator from "./Calculator.js";
class App {
  async run() {
    try {
      const calculator = Calculator();
      const input = await Console.readLineAsync("문자열을 입력해 주세요: ");
      const result = calculator.add(input);

      Console.print(`계산 결과: ${result}`);
    } catch (error) {
      Console.print(error.message);
    } finally {
    }
  }
}

export default App;
