import { Console } from "@woowacourse/mission-utils";
import Calculator from "./Calculator.js";
class App {
  async run() {
    try {
      const calculator = Calculator();
      const input = await Console.readLineAsync("문자열을 입력해 주세요: ");
      const result = calculator.add(input);

      Console.print(`결과 : ${result}`);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    } finally {
    }
  }
}

export default App;
