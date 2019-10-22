<template>
  <main>
    <div class="title">
      <h1>怀念在天国的丽丽</h1>
    </div>

    <div class="content">
      <img v-for="(img,i) of allPhotoList" :key="i" :src="img" />
    </div>
  </main>
</template>

<script>
import { liliPhoto } from '@/config.js'

export default {
  name: 'show',

  data() {
    return {}
  },

  computed: {
    allPhotoList() {
      return new Array(liliPhoto)
        .fill(1)
        .map((_, idx) => require(`@img/lili/${idx + 1}.jpg`))
    }
  }
}
</script>

<style lang="less" scoped>
main {
  padding-top: 10px;

  .title {
    margin-bottom: 1.2rem;
    text-align: center;

    h1 {
      font-size: 1.8rem;
      font-family: 'fz-ys';
    }
  }

  .content {
    padding: 0 25px 10px;
    column-count: 3;
    column-gap: 25px;

    img {
      margin-bottom: 20px;
      border-radius: 5px;
      max-width: 100%;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 6px 0px;
    }
  }
}

@media (max-width: 450px) {
  main {
    .content {
      padding: 0 7px 5px;
      column-count: 2;
      column-gap: 7px;

      img {
        margin-bottom: 2px;
      }
    }
  }
}
</style>