<template>
  <main>
    <div class="title">
      <h1>常熟Kiny · 专业技术 · 值得信赖</h1>
      <h6>8年维修优化经验，专业级硬件/服务器/企业级中间件运维服务，技术栈广，效率高！</h6>
      <h6>家用/电竞/办公电脑专业定制配置，多年市场经验，性价比高，硬件稳定，值得信赖！</h6>
    </div>

    <div class="content">
      <h1>Kiny照片</h1>
      <span @click="nextPhoto">下一张照片 ({{photoNum}}/{{kinyPhoto}})</span>
      <div class="photo">
        <img :src="photoSrc" />
      </div>
    </div>
  </main>
</template>

<script>
import { kinyPhoto } from '@/config.js'

export default {
  name: 'about',

  data() {
    return {
      photoNum: 1,
      kinyPhoto
    }
  },

  methods: {
    nextPhoto() {
      this.photoNum = (this.photoNum % kinyPhoto) + 1
    }
  },

  computed: {
    photoSrc() {
      return require(`@img/kiny/${this.photoNum}.jpg`)
    }
  }
}
</script>

<style lang="less" scoped>
main {
  padding: 5px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    & > * {
      text-align: center;
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 2rem;
      font-family: 'fz-ys';
    }

    h6 {
      font-size: 1.4rem;
      font-family: 'fz-ys';
    }
  }

  .content {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
      text-align: center;
      margin-bottom: 1rem;
    }

    span {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      border: 1px currentColor solid;
      cursor: pointer;
    }

    h1 {
      font-size: 2rem;
      font-family: 'fz-ys';
    }

    img {
      margin: 0.4rem;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 6px 0px;
    }
  }
}

@media (max-width: 450px) {
  main {
    .content {
      img {
        width: 100%;
      }
    }
  }
}
</style>