const listAccount = [{
    username: '123', password: '123'
  }, {
    username: 'quantrivien', password: '123'
  }, {
    username: 'quantrivienweb', password: 'quantrivien'
  }, {
    username: 'cartoonwebsite', password: 'cartoonwebsite'
  }];
  let isLogin = !!localStorage.getItem('token');

  function CheckLogin () {
    if (isLogin) {
      window.location.href = 'https://thewebsite2023.github.io/';
    }
  }

  function Login () {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let checkLogin = listAccount.some(value => value.username === username && value.password === password);
    if (checkLogin) {
      localStorage.setItem('token', username);
      isLogin = true;
      CheckLogin();
    } else {
      alert('Tên đăng nhập hoặc mật khẩu sai!');
    }
  }
