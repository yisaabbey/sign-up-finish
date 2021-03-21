$(document).ready(function () {
  const changeEye = () => {
    const pass = document.getElementById('my_pass');
    const hide1 = document.getElementById('hide1');
    const hide2 = document.getElementById('hide2');
    if (pass.type === 'password') {
      pass.type = 'text';
      hide2.style.display = 'inline-block';
      hide1.style.display = 'none';
    } else {
      pass.type = 'password';
      hide2.style.display = 'none';
      hide1.style.display = 'inline-block';
    }
  };
  $('.password_eye').on('click', changeEye);

  const myInput = document.getElementById('my_pass');
  myInput.onfocus = function () {
    document.getElementById('message').style.display = 'inline-block';
  };