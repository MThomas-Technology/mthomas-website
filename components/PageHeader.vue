<template>
  <header id="page-header" ref="header">
    <div class="container header-inner">
      <div class="header-right">
        <img v-scroll-to="{el: '#about', offset: offset}" src="~/assets/mthomas-logo.png" alt="M Thomas Technology logo">
      </div>
      <div class="header-left">
        <a class="header-link" href="#" v-scroll-to="{el: '#about', offset: offset}">About Me</a>
        <a class="header-link" href="#" v-scroll-to="{el: '#services', offset: offset}">My Services</a>
        <MButton label="Get in touch" v-scroll-to="{el: '#contact', offset: offset}" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ffffff;
    z-index: 100;
  }

  .header-inner {
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 700px) {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  .header-right {
    @media (max-width: 700px) {
      width: 160px;
    }
  }

  .header-left .header-link {
    text-decoration: none;
    font-family: var(--header-font);
    color: var(--secondary-color);
    margin-right: 18px;
    font-size: 20px;
    @media (max-width: 700px) {
      display: none;
    }
  }

  .header-left .header-link:hover {
    font-weight: bold;
  }

  .header-left .btn {
    @media (max-width: 700px) {
      font-size: 16px;
      padding: 8px 16px;
    }
  }
</style>

<script>
export default {
  methods: {
    offset() {
      return -this.$refs.header.offsetHeight;
    }
  }
}
</script>
