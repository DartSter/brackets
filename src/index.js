module.exports = function check(str, bracketsConfig) {
  let slicedStr = str;
  const reg = bracketsConfig.map((item) => {
    return `${item[0].match(/[\[\]\{\}\(\)\|]/) ? `\\${item[0]}` : item[0]}${
      item[1].match(/[\[\]\{\}\(\)\|]/) ? `\\${item[1]}` : item[1]
    }`;
  }, "");

  for (let i = 0; i < str.length; i++) {
    reg.forEach(
      (i) => (slicedStr = slicedStr.replace(new RegExp(`${i}`, "g"), ""))
    );
  }
  console.log(!slicedStr.length);
  return !slicedStr.length;
}
