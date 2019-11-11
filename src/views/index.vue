<template>
  <main>
    <section>
      <h1>常熟Kiny · 专业技术 · 值得信赖</h1>
      <h6>8年维修优化经验，专业级硬件/服务器/企业级中间件运维服务，技术栈广，效率高！</h6>
      <h6>家用/电竞/办公电脑专业定制配置，多年市场经验，性价比高，硬件稳定，值得信赖！</h6>
    </section>

    <section style="margin-top:0;">
      <div class="action">
        <router-link to="/price">查看我们的业务</router-link>
        <router-link to="/contact">联系Kiny解决问题</router-link>
      </div>
    </section>

    <section>
      <h1>怀念丽丽带给我们的欢乐时光</h1>
      <div class="action">
        <router-link to="/lili">R.I.P</router-link>
        <span @click="gray=!gray">{{gray?'关闭':'开启'}}RIP配色</span>
      </div>
    </section>

    <section>
      <h1>Kiny照片</h1>
      <div class="action">
        <span @click="nextPhoto">下一张照片 ({{photoNum}}/{{kinyPhoto}})</span>
      </div>
    </section>

    <div class="photo">
      <img class="img" :src="photoSrc" />
    </div>

    <div class="author">
      <img src="@img/sn-icon.png" class="author-icon" />
      <div class="author-item">
        <div class="author-text">Copyright © 2017-2020</div>
        <div class="author-text">via Frank (s1n1an).</div>
      </div>
    </div>
  </main>
</template>

<script>
import { kinyPhoto } from '@/config.js'

export default {
  name: 'index',

  data() {
    return {
      gray: false,
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
  },

  watch: {
    gray(isGray) {
      const bodyStyle = document.getElementById('body').style
      bodyStyle.setProperty('filter', isGray ? 'gray' : 'none')
      bodyStyle.setProperty(
        '-webkit-filter',
        isGray ? 'grayscale(100%)' : 'none'
      )
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

  section {
    margin-top: 2rem;

    &:first-child {
      margin-top: 0;
    }

    .action {
      text-align: center;

      a,
      span {
        display: inline-block;
        padding: 0.5rem 1rem;
        margin: 0.2rem 0.5rem;
        text-align: center;
        border-radius: 4px;
        border: 1px currentColor solid;
        color: #000;
        text-decoration: none;
        cursor: pointer;
      }
    }

    h1 {
      font-size: 2rem;
      font-family: 'fz-ys';
      text-align: center;
      margin: 0.5rem 0;
    }

    h6 {
      font-size: 1.4rem;
      font-family: 'fz-ys';
      text-align: center;
      margin: 0.5rem 0;
    }
  }

  .photo {
    margin-top: 1rem;

    .img {
      margin: 0.4rem;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 6px 0px;
      max-width: 100%;
      height: auto;
      width: auto\9;
    }
  }

  .author {
    display: flex;
    align-items: center;
    margin-top: 3rem;

    .author-icon {
      height: 50px;
      width: 50px;
      opacity: 0.4;
      margin-right: 10px;
    }

    .author-item {
      display: inline-block;

      .author-text {
        color: #aaaaaa;
        margin-top: 5px;
        font-size: 1.2em;

        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
}

@media (max-width: 450px) {
  main {
    section {
      margin: 0.5rem 0;

      h1,
      h6 {
        margin: 1rem 0 0.2rem;
      }
    }

    .photo {
      margin-top: 0;

      .img {
        width: 100%;
      }
    }
  }
}
</style>