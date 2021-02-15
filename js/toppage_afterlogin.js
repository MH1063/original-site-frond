/*session delete*/

/*user delete*/
new Vue({
  el: '#app',
  data() {
    return {
      teams: [],
      errored: false
    };
  },
  mounted() {
    if(sessionStorage.getItem("userId")){
      axios
        .get('https://nba-api24.herokuapp.com/teams/index')
        .then(response => (this.teams = response.data))
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
    }else{
      window.location.href = 'https://nba-view24.herokuapp.com/toppage.html';
    }
  },
  methods: {
    destroyUser: function(){
      var id = sessionStorage.getItem('userId');
      axios
        .delete(`https://nba-api24.herokuapp.com/users/${id}`,
          {
            withCredentials: true,
          })
        .then(function (response) {
          console.log(response);
          sessionStorage.removeItem('userId');
          window.location.href = 'https://nba-view24.herokuapp.com/toppage.html';
        })
        .catch(function (error) {
          alert('退会できませんでした。');
          console.log(error);
          return false;
        });
    },
    logout: function(){
      var id = sessionStorage.getItem('userId');
      axios
        .delete(`https://nba-api24.herokuapp.com/sessions/${id}`,
          {
            withCredentials: true,
          })
        .then(function (response) {
          console.log(response);
          sessionStorage.removeItem('userId');
          window.location.href = 'https://nba-view24.herokuapp.com/toppage.html';
        })
        .catch(function (error) {
          alert('ログアウトできませんでした。');
          console.log(error);
          return false;
        });
    },
    teamget: function(number){
      console.log(number);
      window.location.href = 'https://nba-view24.herokuapp.com/team.html?number=' +  number;
    }
  }
});