<template>
  <div id="app">
    <header>
      <h1>苏州凯尼科技 · 专业PC装机维修优化</h1>
      <h3>Suzhou Kiny Tech Ltd.</h3>
    </header>

    <main>
      <section class="photo">
        <h3>
          Kiny照片：
          <button @click="randomPhotoNum">随机</button>
        </h3>
        <img :src="photoSrc" />
      </section>

      <section class="work">
        <h3>服务与收费：</h3>
        <ol>
          <li>写电脑配置清单（￥5）</li>
          <li>上门帮忙装电脑，常熟地区（￥50），市区外加价</li>
          <li>上门修电脑，常熟地区（￥50），市区外加价</li>
          <li>远程服务，装系统修电脑等（￥25）</li>
        </ol>
      </section>

      <section class="notice">
        <h3>其他事项：</h3>
        <ul>
          <li>本人经手的电脑有一个月免费售后服务</li>
          <li>提供制作批处理、大数据处理、网络维护等服务，请联系我议价</li>
          <li>服务视难度可能有加价情况，会提前说明</li>
        </ul>
      </section>

      <section class="contact">
        <h3>联系方式：</h3>
        <ul>
          <li>微信：a532031821</li>
          <li>QQ：532031821</li>
          <li>邮箱：xiyiheng521@qq.com</li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      photoNum: 1
    }
  },

  methods: {
    randomPhotoNum() {
      this.photoNum = Math.floor(Math.random() * 4) + 1
    }
  },

  computed: {
    photoSrc() {
      return require(`@/assets/img/kiny/${this.photoNum}.jpg`)
    }
  }
}
</script>

<style scoped lang="less">
main {
  .photo {
    img {
      max-height: 400px;
      margin-right: 10px;
    }
  }
}
</style>

<style lang="less">
@import url('~@/assets/css/global.less');
</style>
