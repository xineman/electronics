<template>
  <div class="container">
    <h4 class="title">
      sign_in
    </h4>
    <form class="form">
      <div class="input-wrapper">
        <label for="login" class="label">username</label>
        <input v-model="username" id="login" type="text" class="input" placeholder="Enter username" />
      </div>
      <div class="input-wrapper">
        <label for="password" class="label">password</label>
        <input v-model="password" id="password" type="password" class="input" placeholder="Enter password" />
      </div>
      <div class="buttons">
        <button type="button" @click="signIn" class="button success">submit</button>
        <button type="button" @click="$parent.$emit('close')" class="button fail close">cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import VueNotifications from 'vue-notifications';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      this.$store.dispatch('signIn', {
        username: this.username,
        password: this.password,
      })
        .then(() => {
          this.showSuccessMsg();
          this.$parent.$emit('close');
        })
        .catch(({ response: r }) => this.showErrorMsg({
          message: r.data.error,
        }));
    },
  },
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      message: 'Successfully signed in',
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      message: 'Error',
    },
  },
};
</script>


<style lang="postcss" scoped>
  .title {
    text-align: center;
    margin-bottom: 5px;
  }

  .label {
    font-size: 12px;
  }

  .input {
    font-size: 12px;
    width: 200px;
    margin-left: 10px;
    padding: 5px;
    border: 1px solid #2B515D;
  }

  .input-wrapper {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
