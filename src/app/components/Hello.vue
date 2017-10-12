<template lang='pug'>
div
  mu-sub-header {{ msg }}
  br
  mu-tabs.tabs(:value='activeTab' @change="handleTabChange")
    mu-tab(title='已有账号' value='toLogin')
    mu-tab(title='没有账号' value='toRegister')
  mu-content-block.login(v-if="activeTab === 'toLogin'")
    mu-text-field(label='邮箱' name='email' hintText='请输入邮箱' type='text' v-model='auth.email' :required='true' v-validate={ required: true ,email:true} :errorText="errors.first('email')")
    br
    mu-text-field(label='密码' name='password' hintText='请输入密码' type='password' v-model='auth.password' :required='true' v-validate="{ required: true }" :errorText="errors.first('password')")
    br
    mu-flexbox(style={paddingTop:'.5em'})
      mu-flexbox-item(:grow=1)
        mu-raised-button(label="登陆" class="demo-raised-button" primary @click='login')
      mu-flexbox-item(:grow=2)
        mu-circular-progress(v-if='progressing' style={marginLeft:'20px'})
  mu-content-block.register(v-if="activeTab === 'toRegister'")
    mu-text-field(label='邮箱' name='email' hintText='请输入邮箱' type='text' v-model='register.email' :required='true' v-validate={ required: true ,email:true} :errorText="errors.first('email')")
    br
    mu-text-field(label='密码' name='password' hintText='请输入密码' type='password' v-model='register.password' :required='true' v-validate="{ required: true }" :errorText="errors.first('password')")
    br
    //- mu-text-field(label='确认密码' name='password' hintText='请输入确认密码' type='password' v-model='register.passwordConfirm' :required='true' v-validate="{ required: true }" :errorText="errors.first('passwordConfirm')")
    //- br
    mu-flexbox(style={paddingTop:'.5em'})
      mu-flexbox-item(:grow=1)
        mu-raised-button(label="注册" class="demo-raised-button" secondary @click='registerUser')
      mu-flexbox-item(:grow=2)
        mu-circular-progress(v-if='progressing' style={marginLeft:'20px'})
  //- mu-flat-button(label='test' @click='debug')
</template>

<script>
import AV from 'leancloud-storage'

export default {
  name: 'hello',
  data() {
    return {
      msg: '',
      progressing: false,
      auth: {
        email: '',
        password: ''
      },
      register: {
        email: '',
        password: '',
        passwordConfirm: ''
      },
      activeTab: 'toLogin'
    }
  },
  methods: {
    debug() {
      window.testVar = this.errors
    },
    handleTabChange(val) {
      this.activeTab = val
    },
    validForm() {
      return !!this.auth.username.trim() && !!this.auth.password.trim()
    },
    async login() {
      if (this.errors.count()) return console.warn('表单未填充')
      if (this.progressing) return
      this.progressing = true
      await new Promise(resolve => setTimeout(resolve, 400))
      await AV.User.logIn(this.auth.email, this.auth.password).then(async loginedUser => {
        this.progressing = false
        this.msg = '登陆成功'
        if (this.msgTimer) (clearTimeout(this.msgTimer))
        this.msgTimer = setTimeout(() => { this.msg = '' }, 2000)
        console.log(loginedUser)
        await new Promise(resolve => setTimeout(resolve, 400))
        this.$router.push({ path: '/all' })
      }, (error) => {
        this.progressing = false
        this.msg = '登陆失败，' + error.message
        if (this.msgTimer) (clearTimeout(this.msgTimer))
        this.msgTimer = setTimeout(() => { this.msg = '' }, 2000)
        // console.dir(error)
      })
    },
    async registerUser() {
      if (this.errors.count()) return console.warn('表单未填充')
      // 新建 AVUser 对象实例
      var user = new AV.User()
      // 设置用户名
      user.setUsername(this.register.email)
      // 设置密码
      user.setPassword(this.register.password)
      // 设置邮箱
      user.setEmail(this.register.email)
      user.signUp().then(function(loginedUser) {
        console.log(loginedUser)
        this.msg = '注册成功'
        if (this.msgTimer) (clearTimeout(this.msgTimer))
        this.msgTimer = setTimeout(() => { this.msg = '' }, 2000)
      }, (error) => {
        this.msg = '注册失败，' + error.message
        if (this.msgTimer) (clearTimeout(this.msgTimer))
        this.msgTimer = setTimeout(() => { this.msg = '' }, 2000)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
