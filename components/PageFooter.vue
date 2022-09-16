<template>
  <footer>
    <div class="container">
      <span>Michael Thomas | &copy; {{ new Date().getFullYear() }}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PageFooter",
  computed: {
    date() {
      return 'Michael Thomas &copy; ' + new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
footer {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 14px;
  padding-bottom: 14px;
  font-family: var(--header-font);
}
</style>
