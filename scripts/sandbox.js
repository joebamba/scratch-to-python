import { userTextarea } from "./skulpt.js";

window.addCode = (code) => {
  userTextarea.value += "\n" + code;
};

window.addImport = (importText) => {
  const code = userTextarea.value;
  if (!code.includes(importText)) {
    userTextarea.value = `import ${importText}\n${code}`;
  }
};
