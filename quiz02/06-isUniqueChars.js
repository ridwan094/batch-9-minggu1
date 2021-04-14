const allUniqueChars = string => {
    for (let i = 0; i < string.length; i++) {
      for (let j = i + 1; j < string.length; j++) {
        if (string[i] === string[j]) {
          return false; // if match, return false
        }
      }
    }
    return true; // if no match, return true
  };
  
  
  
  console.log(allUniqueChars('abcdefghijklmn'));