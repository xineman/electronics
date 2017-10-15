<template>
  <div @click="close" class="popup">
    <div class="popup-wrapper">
      <slot>Empty popup</slot>
      <div class="buttons">
        <button class="button success">submit</button>
        <button class="button fail close">cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close(e) {
      if (e.target.classList.contains('popup') || e.target.classList.contains('close')) {
        this.$emit('close');
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
  .buttons {
    display: flex;
    justify-content: center;
    margin: 10px -5px 0;
  }
  .button {
    cursor: pointer;
    background: #2B515D;
    color: #FFF;
    padding: 5px 10px;
    border-radius: 0px;
    border: none;
    margin: 0 5px;
  }
  .success {
    background: green;
  }
  .fail {
    background: red;
  }

</style>
