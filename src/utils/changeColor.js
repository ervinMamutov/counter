const changeColor = (count) => {
  if (count > 0) {
    return 'green';
  } else if (count < 0) {
    return 'blue';
  } else {
    return 'red';
  }
};

export default changeColor;
