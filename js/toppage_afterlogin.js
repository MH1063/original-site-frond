/*session delete*/

/*user delete*/
new Vue({
  el: '#app',
  data() {
    return {
      user:{},
      teams: [],
      errored: false
    };
  },
  mounted() {
    if(sessionStorage.getItem("userId")){
      
      var id = sessionStorage.getItem('userId');
      axios
        .get(`https://nba-api24.herokuapp.com/users/${id}`
        )
        .then(response => {
          console.log(response.data);
          this.user = response.data.user;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
        
      axios
        .get('https://nba-api24.herokuapp.com/teams/index')
        .then(response => (this.teams = response.data))
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
    }else{
      window.location.href = 'https://nba-view24.herokuapp.com/';
    }
  },
  methods: {
    destroyUser: function(){
      var id = sessionStorage.getItem('userId');
      console.log(this.user.token);
      axios
        .delete(`https://nba-api24.herokuapp.com/users/${id}`,
          {
            headers: {
              Authorization: `Bearer ${this.user.token}`,
            }
          },
          {
            withCredentials: true,
          })
        .then(function (response) {
          console.log(response);
          localStorage.clear();
          sessionStorage.removeItem('userId');
          window.location.href = 'https://nba-view24.herokuapp.com/';
        })
        .catch(function (error) {
          alert('退会できませんでした。');
          console.log(error);
          return false;
        });
    },
    /*logout: function(){
      var id = sessionStorage.getItem('userId');
      axios
        .delete(`https://nba-api24.herokuapp.com/sessions/${id}`,
          {
            withCredentials: true,
          })
        .then(function (response) {
          console.log(response);
          sessionStorage.removeItem('userId');
          window.location.href = 'https://nba-view24.herokuapp.com/';
        })
        .catch(function (error) {
          alert('ログアウトできませんでした。');
          console.log(error);
          return false;
        });
    },*/
    logout: function(){
      axios
        .delete('https://nba-api24.herokuapp.com/users/log_out',
          {
            headers: {
              Authorization: `Bearer ${this.user.token}`,
            }
          },
          {
            withCredentials: true,
          })
        .then(function (response) {
          console.log(response);
          localStorage.clear();
          sessionStorage.removeItem('userId');
          window.location.href = 'https://nba-view24.herokuapp.com/';
        })
        .catch(function (error) {
          alert('ログアウトできませんでした。');
          console.log(error);
          return false;
        });
    },
    teamget: function(number){
      console.log(number);
      window.location.href = 'https://nba-view24.herokuapp.com/team?number=' +  number;
    }
  }
});
