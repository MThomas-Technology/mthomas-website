<template>
  <div class="services-tabs">
    <div class="service-headers">
      <div
        :class="{
          'services-title': true,
          'active': service === activeService
        }"
        v-for="service in services"
        @click="activeService = service"
      >
        <h5>{{ service.title }}</h5>
        <div class="services-description">
          <span>{{ service.description }}</span>
        </div>
      </div>
    </div>
    <div class="service-content">
      <nuxt-content :document="activeService" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesTabs",
  data() {
    return {
      activeService: null,
      services: []
    }
  },
  async mounted() {
    this.services = await this.$content('services').fetch();
    this.activeService = this.services[0];
  }
};
</script>

<style scoped lang="scss">
  .services-tabs {
    display: flex;
    @media (max-width: $mediumBreakpoint) {
      flex-direction: column;
    }
  }

  .service-headers {
    flex: 0 0 440px;
    display: flex;
    flex-direction: column;
    margin-top: 55px;
    @media (max-width: $mediumBreakpoint) {
      margin: 0;
      flex-direction: row;
      flex: 1;
      overflow-x: scroll;
      padding: 0 0 10px;
    }
  }

  .services-title {
    padding: 12px;
    background-color: #E3EAE9;
    border-radius: 5px 0 0 5px;
    margin-bottom: 10px;
    background-image: linear-gradient(
                                    90deg,
                                    #E3EAE9 0%,
                                    #E3EAE9 50%,
                                    #ffffff 50%,
                                    #ffffff 100%
                                  );
    transition: background-position .25s cubic-bezier(.47, .1, 1, .63);
    background-size: 200% 100%;
    @media (max-width: $mediumBreakpoint) {
      text-align: center;
      padding: 10px 16px;
      transition: none;
      margin: 5px;
      border-radius: 5px;
    }
  }

  .services-title.active {
    background-position: -100% 100%;
  }

  .services-title:hover {
    cursor: pointer;
  }

  .services-title:hover:not(.active) {
    background-position: -100% 100%;
    @media (max-width: $mediumBreakpoint) {
      background-position: initial;
    }
  }

  .services-title h5 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    @media (max-width: $mediumBreakpoint) {
      margin: 0;
    }
  }

  .services-description {
    @media (max-width: $mediumBreakpoint) {
      display: none;
    }
  }

  .service-content {
    border-radius: 5px;
    background-color: white;
    min-height: 650px;
    padding: 30px;
    flex-grow: 1;
    @media (max-width: $mediumBreakpoint) {
      margin-top: 10px;
      min-height: auto;
      padding: 15px;
    }
  }
</style>
