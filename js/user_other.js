/*relationship POST*/

/*relationship DELETE*/


new Vue({
  el: '#app',
  data() {
    return {
      user: {},
      user_login: {},
      user_login_followings: [],
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
          console.log(response);
          this.user = response.data.user;
          console.log(this.user.id);
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
          console.log(this.user_login.id);
          this.user_login_followings = response.data.followings;
          /*const arr = response.data.followings.map(function(user){
            return user.id;
          });
          console.log(arr);
          if( arr.includes(this.user.id)){
            this.activefollow = 'true';
          }else{
            this.activefollow = 'false';
          }*/
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
        
    }else{
      window.location.href = 'https://nba-view24.herokuapp.com/';
    }
  },
  /*methods: {
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
        .delete(`https://nba-api24.herokuapp.com/relationships/${this.user.id}`, {
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
  },*/
  
});







Vue.component('follow-button', {
  props:{
    user_other_id:{
      type: Number,
      required: true,
    },
    user_login_id:{
      type: Number,
      required: true,
    },
    user_login_followings:{
      type: Array,
    },
    user_login_token:{
      type: String,
      required: true,
    },
  },
  data() {
    return{
      UserOtherId: this.user_other_id,
      UserLoginId: this. user_login_id,
      UserLoginFollwings: this.user_login_followings,
      Token: this.user_login_token,
    };
  },
  computed: {
    followcompare(){
      console.log(this.UserOtherId);
      const UserOtherId = this.UserOtherId;
      const arr = this.UserLoginFollwings.map(function(user){
        return user.id;
      });
      return this.followsort(UserOtherId, arr);
    }
  },
  methods:{
    followsort: function(UserOtherId, arr){
      console.log(UserOtherId);
      console.log(arr);
      if( arr.includes(UserOtherId)){
        return false;
      }else{
        return true;
      }
    },
    follow: function(){
      axios
        .post('https://nba-api24.herokuapp.com/relationships/create', {
          follow_id: this.UserOtherId 
        },
        {
          headers: {
            Authorization: `Bearer ${this.Token}`,
          }
        },
        {
          withCredentials: true,
        },
        )
        .then(function (response) {
          console.log(response);
          this.getuser();
        })
        .catch(function (error) {
          alert('フォローできませんでした。');
          console.log(error);
          return false;
        });
    },
    unfollow: function(){
      axios
        .delete(`https://nba-api24.herokuapp.com/relationships/${this.UserOtherId}`, {
          headers: {
            Authorization: `Bearer ${this.Token}`,
          }
        },
        {
          withCredentials: true,
        },
        )
        .then(function (response) {
          console.log(response);
          this.getuser();
        })
        .catch(function (error) {
          alert('アンフォローできませんでした');
          console.log(error);
          return false;
        });
    },
    getuser: function(){
      var id = this.UserLoginId;
      axios
        .get(`https://nba-api24.herokuapp.com/users/${id}`)
        .then(response => {
          console.log(response.data);
          this.UserLoginFollwings = response.data.followings;
          /*ここにコンポーネントだけリロードできるようにする。*/
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  template:`
    <section  v-if="followcompare">
        <button type = "button" class="btn btn-primary btn-lg" v-on:click="follow">follow</button>
    </section>
    <section v-else>
        <button type = "button" class="btn btn-danger btn-lg" v-on:click="unfollow">unfollow</button>
    </section>
    `,
});
