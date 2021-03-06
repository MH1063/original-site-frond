new Vue({
  el: '#app',
  data() {
    return {
      user: {},
      count_favoritings: '',
      count_followers: '',
      count_followings: '',
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
          this.count_favoritings = response.data.count_favoritings;
          this.count_followers = response.data.count_followers;
          this.count_followings = response.data.count_followings;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
    }else{
      window.location.href = 'https://nba-view24.herokuapp.com/';
    }
  }
});
