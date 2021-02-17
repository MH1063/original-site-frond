/*relationship POST*/

/*relationship DELETE*/


new Vue({
  el: '#app',
  data() {
    return {
      user: {},
      user_login: {},
      activefollow: '',
      count_favoritings: '',
      count_followers: '',
      count_followings: '',
      errored: false
    };
  },
  mounted() {
    if(sessionStorage.getItem("userId")){
      
      var id = sessionStorage.getItem('userId');
      //var query = location.search;
      //var value = query.split('=');
      //console.log(decodeURIComponent(value[1]));
      var OtherId = localStorage.getItem('OtherUserId');
      
      axios
        //.get(`https://nba-api24.herokuapp.com/users/${value[1]}`)
        .get(`https://nba-api24.herokuapp.com/users/${OtherId}`)
        .then(response => {
          this.user = response.data.user;
          this.count_favoritings = response.data.count_favoritings;
          this.count_followers = response.data.count_followers;
          this.count_followings = response.data.count_followings;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
        
      axios
        .get(`https://nba-api24.herokuapp.com/users/${id}`)
        .then(response => {
          console.log(response);
          this.user_login = response.data.user;
          const arr = response.data.followings.map(function(user){
            return user.id;
          });
          console.log(arr);
          if( arr.includes(this.user.id)){
            this.activefollow = 'true';
          }else{
            this.activefollow = 'false';
          }
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
        
    }else{
      window.location.href = 'https://nba-view24.herokuapp.com/';
    }
  },
  methods: {
    follow: function(){
      axios
        .post('https://nba-api24.herokuapp.com/relationships/create', {
          follow_id: this.user.id 
        },
        {
          headers: {
            Authorization: `Bearer ${this.user_login.token}`,
          }
        },
        {
          withCredentials: true,
        },
        )
        .then(function (response) {
          console.log(response);
          location.reload();
        })
        .catch(function (error) {
          alert('フォローできませんでした。');
          console.log(error);
          return false;
        });
    },
    unfollow: function(){
      axios
        .delete('https://nba-api24.herokuapp.com/relationships/destroy', {
          /*follow_id: this.user.id ここにteamページからアクセスしたuserの情報が乗るようにする。また、deleteの場合は、paramsを使った方法にしないと出来ないかもしれない。*/
          data: {follow_id: this.user.id}
        },
        {
          headers: {
            Authorization: `Bearer ${this.user_login.token}`,
          }
        },
        {
          withCredentials: true,
        },
        )
        .then(function (response) {
          console.log(response);
          location.reload();
        })
        .catch(function (error) {
          alert('アンフォローできませんでした');
          console.log(error);
          return false;
        });
    }
  },
  
});

