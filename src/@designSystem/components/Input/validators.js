export const validator = (number, min, max) => {
  var isError;
  if(number < min ||  number> max) {
    isError= true;
  } else {
    isError= false;
  }
  return isError
}