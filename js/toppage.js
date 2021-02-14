new Vue({
  el: '#app',
  mounted() {
    this.waypoint();       
  },
  methods: {
    start: function(){
      window.location.href = 'https://fae945d999374a79b64f384ea8675d41.vfs.cloud9.us-east-1.amazonaws.com/_static/original/nba_frond/login.html';
    },
    waypoint () {
      let elem = this.$el.querySelectorAll('.animated');

      elem.forEach(x => {
        this.waypoint = new window.Waypoint({
          element: x,
          handler: () => {
            x.classList.add('fadeInUp');
          },
          offset: '50%',
        });
      });
    },
  },
  beforeDestroy: function () {
    this.waypoint.destroy();
  },
});






