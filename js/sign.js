/*new Vue({
  el: '#app',
  data: {
    Name: '',
    Email: '',
    Password: '',
    Password_Confirm: '',
  },
  methods: {
    createNewUser: function(){
      if (this.Password === this.Password_Confirm){
        axios
          .post('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/users', {
            user: {name: this.Name,
              email: this.Email,
              password: this.Password,
            }})
          .then(function (response) {
            console.log(response);
            sessionStorage.setItem('userId', response.data.id);
            window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/toppage_afterlogin.html';
          })
          .catch(function (error) {
            alert('ログイン出来ませんでした。');
            console.log(error);
          });
      }else{
        alert('パスワードが一致しません。');
        return false;
      }
    }
  }
});*/
  


new Vue({
  el: '#app',
  data: {
    Name: '',
    Email: '',
    Password: '',
    Password_Confirm: '',
  },
  methods: {
    createNewUser: function(){
      if (this.Password === this.Password_Confirm){
        axios
          .post('https://nba-api24.herokuapp.com/users', {
            user: {name: this.Name,
              email: this.Email,
              password: this.Password,
            }},
          {
            withCredentials: true,
          },
          )
          .then(function (response) {
            console.log(response);
            sessionStorage.setItem('userId', response.data.id);
            window.location.href = 'https://nba-view24.herokuapp.com/toppage_afterlogin';
          })
          .catch(function (error) {
            alert('ログイン出来ませんでした。');
            console.log(error);
          });
      }else{
        alert('パスワードが一致しません。');
        return false;
      }
    }
  }
});
  