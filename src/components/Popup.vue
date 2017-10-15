<template>
  <div class="popup">
    <div class="popup-wrapper">
      <slot>Empty popup</slot>
      <div class="buttons">
        <button class="button success">submit</button>
        <button class="button fail">cancel</button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .buttons {
    display: flex;
    justify-content: center;
    margin: 10px -5px 0;
  }
  .button {
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
