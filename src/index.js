const instructions = `
Write a javascript function that takes a string of lowercase english letters
and "increments" the string by one letter. For example, 'a' goes to 'b'. 'b'
goes to 'c'. 'e' goes to 'f', 'ge' goes to 'gf', 'z' goes to 'aa', 'aa' goes
to 'ab'. 'zzz' goes to 'aaaa', 'cazdzz' goes to 'cazeaa', etc etc.
`;

function increment(str) {
  if (!str) return;
  const len = str.length;
  let code = str.charCodeAt(len - 1);
  let add = "";

  if (code === 122) {
    code = 97;
    if (len === 1) {
      add = "a";
    } else {
      add = increment(str.substr(0, len - 1));
    }
  } else {
    code = code + 1;
    add = str.substr(0, len - 1);
  }

  return add + String.fromCharCode(code);
}

console.log(increment("zzz"));
