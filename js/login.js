/*new Vue({
  el: '#app',
  data: {
    Email: '',
    Password: ''
  },
  methods: {
    login: function(){
      axios
        .post('https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/sessions/create', {
          email: this.Email,
          password: this.Password,
        })
        .then(response => {
          console.log(response);
          sessionStorage.setItem("userId", response.data.user.id);
          window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/toppage_afterlogin.html';
        })
        .catch(error => {
          alert('ログイン出来ませんでした。');
          console.log(error);
          return false;
        });
    }
  }
});*/
  
  
new Vue({
  el: '#app',
  data: {
    Email: '',
    Password: ''
  },
  methods: {
    login: function(){
      axios
        .post('https://nba-api24.herokuapp.com/sessions/create', {
          email: this.Email,
          password: this.Password,
        },
        {
          withCredentials: true,
        },
        )
        .then(response => {
          console.log(response);
          sessionStorage.setItem("userId", response.data.user.id);
          window.location.href = 'https://nba-view24.herokuapp.com/toppage_afterlogin.html';
        })
        .catch(error => {
          alert('ログイン出来ませんでした。');
          console.log(error);
          return false;
        });
    }
  }
});



/*new Vue({
  el: '#app',
  methods: {
    login: function(){
      window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/toppage_afterlogin.html';
        
    }
  }
});*/