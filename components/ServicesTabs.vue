<template>
  <div class="services-tabs">
    <div class="service-headers">
      <div
        :class="{
          'services-title': true,
          active: service === activeService,
        }"
        v-for="(service, i) in services"
        :key="service.slug"
        @click="$store.commit('main/setActiveService', i)"
      >
        <h5>{{ service.title }}</h5>
      </div>
    </div>
    <div class="service-content">
      <nuxt-content :document="activeService" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesTabs',
  data() {
    return {
      services: [],
    }
  },
  computed: {
    activeService() {
      return this.services[this.$store.state.main.activeService]
    },
  },
  async mounted() {
    this.services = await this.$content('services').sortBy('order').fetch()
  },
}
</script>

<style lang="scss">
.services-tabs {
  display: flex;
  @media (max-width: $mediumBreakpoint) {
    flex-direction: column;
  }
}

.service-headers {
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
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
  background-color: #e3eae9;
  border-radius: 5px 0 0 5px;
  margin-bottom: 10px;
  background-image: linear-gradient(
    90deg,
    #e3eae9 0%,
    #e3eae9 50%,
    #ffffff 50%,
    #ffffff 100%
  );
  transition: background-position 0.25s cubic-bezier(0.47, 0.1, 1, 0.63);
  background-size: 200% 100%;
  @media (max-width: $mediumBreakpoint) {
    text-align: center;
    padding: 10px 12px;
    transition: none;
    margin: 5px;
    border-radius: 5px;
    //white-space: nowrap;
    min-width: 140px;
  }
}

.services-title.active {
  position: relative;
  border: 2px solid black;
  border-right: none;
  // width: calc(100% + 2px);
  background-position: -100% 100%;
  @media (max-width: $mediumBreakpoint) {
    border-right: 2px solid black;
  }
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
  margin-bottom: 0px;
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
  //border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  min-height: 300px;
  padding: 30px;
  flex-grow: 1;
  font-size: 18px;
  @media (max-width: $mediumBreakpoint) {
    margin-top: 10px;
    min-height: auto;
    padding: 15px;
  }
}

.service-content h1,
.service-content h2,
.service-content h3 {
  margin-bottom: 0.6em;
}

.service-content ul {
  margin-block-start: 15px;
  margin-block-end: 15px;
}
</style>
