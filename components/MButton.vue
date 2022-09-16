<template>
  <button class="btn">
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    label: String
  }
};
</script>

<style scoped>
  .btn {
    border-radius: 4px;
    font-size: 20px;
    font-family: var(--header-font);
    font-weight: bold;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    padding: 10px 22px;
    border: none;
    transition: all .15s linear;
    cursor: pointer;
  }

  .btn:hover {
    transform: scale(1.1);
  }
</style>
