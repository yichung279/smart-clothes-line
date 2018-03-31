var app = new Vue({
  el:'#app',
  data: {
    state: 'reeling in',
    cloNum:  0
  },
  methods:{
    check: function(){
      that = this
      setInterval(() => {
        $.ajax({
          method: "get",
          url: "./ajax_data",
          success: function(res) {
            that.state = res.state
            that.cloNum = res.cloNum
            console.log(res)
          }
        })
      }, 1000)
     
      
      
      
    }
  }
})


app.check()
