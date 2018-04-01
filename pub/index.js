var app = new Vue({
  el:'#app',
  data: {
    state: 'reeling in',
    notifyConfig : {
        body: `Your clothes are now ${this.state}`, // 設定內容
        //icon: '/images/favicon.ico' // 設定 icon
    },
  },
  methods:{
    check: function(){
      that = this
      setInterval(() => {
        preState = this.state
        $.ajax({
          method: "get",
          url: "./ajax_data",
          success: function(res) {
            that.state = res.state
            that.cloNum = res.cloNum
            if (preState != that.state){that.notificate()}
            console.log(res)
          }
        })
      }, 1000)
    },
    notificate: function(){
      that = this
      if (!('Notification' in window)) {return}
       console.log(Notification.permission) 
      if (Notification.permission === 'default' || Notification.permission === 'undefined') {
        console.log('aaa')
        Notification.requestPermission(function(permission) {
          if (permission === 'granted') { 
            var notification = new Notification('Hi there!', {body: 'welcome'}) 
          }
        })
      }else if (Notification.permission === 'granted') { 
        var notification = new Notification('Hi there!', that.notifyConfig) 
      }
    }
      
      
  }
})


app.check()
