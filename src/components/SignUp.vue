<template>
  <div class="container">
    <h4 class="title">
      sign_up
    </h4>
    <form class="form">
      <div class="input-wrapper">
        <label for="name" class="label">name</label>
        <input v-model="name" id="name" type="text" class="input" placeholder="John Smith" />
      </div>
      <div class="input-wrapper">
        <label for="email" class="label">email</label>
        <input v-model="email" id="email" type="email" class="input" placeholder="john@example.com" />
      </div>
      <div class="input-wrapper">
        <label for="login" class="label">username</label>
        <input v-model="username" id="login" type="text" class="input" placeholder="Enter username" />
      </div>
      <div class="input-wrapper">
        <label for="password" class="label">password</label>
        <input v-model="password" id="password" type="password" class="input" placeholder="Enter password" />
      </div>
      <div class="input-wrapper">
        <label for="phone" class="label">phone</label>
        <input v-model="phone" id="phone" type="text" class="input" placeholder="+380881234567" />
      </div>
      <div class="input-wrapper">
        <label for="address" class="label">address</label>
        <input v-model="address" id="address" type="text" class="input" placeholder="Seaside Park, 170 st, 25" />
      </div>
      <div class="buttons">
        <button type="button" @click="signUp" class="button success">submit</button>
        <button type="button" @click="$parent.$emit('close')" class="button fail close">cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      name: '',
      email: '',
      phone: '',
      address: '',
    };
  },
  methods: {
    signUp() {
      this.$parent.$emit('close');
      this.$store.dispatch('signUp', {
        username: this.username,
        password: this.password,
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
      });
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
