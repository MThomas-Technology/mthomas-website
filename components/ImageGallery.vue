<template>
  <div>
    <div class="thumbnails">
      <div class="thumbnail" v-for="(img, i) in images" :key="img.src">
        <img
          :src="require(`~/assets/${img.src}`)"
          :alt="img.alt"
          @click="show(i)"
        />
      </div>
    </div>

    <vue-easy-lightbox
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="images"
      :index="index"
      @hide="handleHide"
    >
      <template v-slot:toolbar>
        <span></span>
      </template>
    </vue-easy-lightbox>
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  props: {
    images: Array,
  },
  data() {
    return {
      visible: false,
      index: 0,
    }
  },
  methods: {
    show(i) {
      this.index = i
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
  },
}
</script>

<style scoped lang="scss">
.thumbnails {
  margin: 30px auto 15px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.thumbnail {
  cursor: pointer;
  flex-basis: 30%;
  margin: 20px 0;
  @media (max-width: $smallBreakpoint) {
    flex-basis: 45%;
  }
}

img {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  max-width: 100%;
}
</style>
