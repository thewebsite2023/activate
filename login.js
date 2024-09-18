    const listAccount = [{
    username: '940211', password: '15112015'
  }, {
    username: '626162', password: '05012013'
  }];
  let isLogin = !!localStorage.getItem('token');

  function CheckLogin () {
    if (isLogin) {
      window.location.href = 'https://thewebsite2023.github.io/my-exam';
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
      result.innerHTML = "<h5>Tên đăng nhập hoặc mật khẩu sai!</h5>";
    }
  }
