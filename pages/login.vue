<template>
  <div class="app-container">
    <Title>登录</Title>
    <div class="login-dialog">
      <el-form :model="form" label-width="120px">
        <el-form-item label="账号">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { useUserStore } from '~/store/userStore';
import { defineComponent } from 'vue';
import UserApi from '~/api/UserApi';

export default defineComponent({
  data() {
    return {
      form: {
        account: '',
        password: '',
      }
    };
  },
  methods: {
    onSubmit() {
      const user = useUserStore();
      UserApi.login(this.form).then(res => {
        user.auth = res;
        localStorage.setItem('token', res);
        this.$router.push('/admin');
      }).catch(err => {
        this.$message.error('登录错误');
      });
    }
  }
});

</script>

<style lang="less" scoped>
.app-container {
  display: flex;
  justify-content: center;

  .login-dialog {
    margin-top: 10%;
    width: 40%;
    height: 500px;
  }
}
</style>
