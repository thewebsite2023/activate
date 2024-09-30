const listAccount = [{
    username: '940211', password: '15112015'
  }, {
    username: '216390', password: '14092013'
  },{
    username: '143252', password: '29052013'
  }];
  let isLogin = !!localStorage.getItem('token');
  function CheckLogin () {
    if (isLogin) {
      window.location.href = 'https://thewebsite2023.github.io/my-exam-en/';
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
