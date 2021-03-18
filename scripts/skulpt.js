const pre = document.getElementById("output");
export const userTextarea = document.getElementById("yourcode");

// Modified version of code taken from https://skulpt.org/using.html#html
const outf = (text) => (pre.innerText += text);

function builtinRead(x) {
  if (
    Sk.builtinFiles === undefined ||
    Sk.builtinFiles["files"][x] === undefined
  )
    throw "File not found: '" + x + "'";
  return Sk.builtinFiles["files"][x];
}

window.runit = async () => {
  const prog = userTextarea.value;
  pre.innerText = "";
  Sk.pre = "output";
  Sk.configure({ output: outf, read: builtinRead });
  (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = "mycanvas";
  await Sk.importMainWithBody("<stdin>", false, prog, true);
};
