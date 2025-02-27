const addStrings = (num1, num2) => {
  let res = "";
  let i = num1.length - 1;
  let j = num2.length - 1;
  let flag = 0;
  while (i >= 0 || j >= 0 || flag !== 0) {
    if (i >= 0) flag += parseInt(num1[i--]);
    if (j >= 0) flag += parseInt(num2[j--]);
    // 取余
    res = (flag % 10) + res;
    flag = Math.floor(flag / 10);
  }
  return res;
};

console.log(addStrings("456231421242131414212", "45623142124213141421"));
