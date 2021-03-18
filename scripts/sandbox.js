import { userTextarea } from "./skulpt.js";

window.addSay = () => {
  userTextarea.value += "\nprint('Hello World')";
};
