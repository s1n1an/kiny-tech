<template>
  <main>
    <img v-for="(img,i) of allPhotoList" :key="i" :src="img" />
  </main>
</template>

<script>
import { showPhoto } from '@/config.js'

export default {
  name: 'show',

  data() {
    return {}
  },

  computed: {
    allPhotoList() {
      return new Array(showPhoto)
        .fill(1)
        .map((_, idx) => require(`@img/show/${idx + 1}.jpg`))
    }
  }
}
</script>

<style lang="less" scoped>
main {
  padding: 15px 25px 10px;
  column-count: 3;
  column-gap: 25px;

  img {
    margin-bottom: 20px;
    border-radius: 5px;
    max-width: 100%;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 6px 0px;
  }
}

@media (max-width: 450px) {
  main {
    padding: 0 7px 5px;
    column-count: 2;
    column-gap: 7px;

    img {
      margin-bottom: 2px;
    }
  }
}
</style>