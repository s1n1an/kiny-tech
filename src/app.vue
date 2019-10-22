<template>
  <div id="app">
    <header>
      <div class="title">
        <img @click="green=true" v-if="!green" src="~@img/logo.jpg" />
        <img v-else src="~@img/logo2.jpg" />
        <div class="text">
          <h1>苏州凯尼科技 · 专业PC装机维修优化</h1>
          <h3>Suzhou Kiny Tech Ltd.</h3>
        </div>
      </div>

      <nav>
        <router-link to="/">主页</router-link>
        <router-link to="/show">工作展示</router-link>
        <router-link to="/price">服务报价</router-link>
        <router-link to="/contact">联系方式</router-link>
        <router-link to="/lili">Miss丽丽</router-link>
      </nav>
    </header>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      green: false
    }
  },

  methods: {},

  computed: {}
}
</script>

<style scoped lang="less">
header {
  margin-bottom: 10px;
  background-image: url('~@img/repeat/3.jpg');
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  .title {
    display: flex;
    align-items: center;
    padding: 0 20px;
    padding-right: 0;

    img {
      height: 60px;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 4px 2px;
    }

    .text {
      padding: 15px 25px 5px;
      padding-right: 0;
      text-shadow: 0 0.05em 0.05em hsla(0, 0%, 100%, 0.8);

      h1 {
        margin: 5px 0;
        font-size: 2rem;
        font-family: 'fz-ys';
        font-style: normal;
        font-weight: normal;
      }

      h3 {
        margin: 5px 0;
        font-size: 1.5rem;
        font-family: 'optima';
        font-style: normal;
        font-weight: normal;
      }
    }
  }

  nav {
    padding-left: 25px;
    background: none;
    background-color: hsla(0, 0%, 100%, 0.5);
    position: relative;

    & > a {
      cursor: pointer;
      color: #000;
      text-decoration: none;
      display: inline-block;
      padding: 5px 10px;
      transition: 350ms;

      &.router-link-exact-active {
        color: #fff;
        background-color: hsla(0, 0%, 10%, 0.7);
      }

      &:hover {
        background-color: hsla(0, 0%, 50%, 0.3);
      }
    }
  }
}

@media (max-width: 450px) {
  header {
    padding-top: 1rem;

    nav {
      padding-left: 0;

      text-align: center;

      & > a {
        padding: 5px 6px;
      }

      & > a:hover {
        background-color: hsla(0, 0%, 10%, 0.7);
      }
    }

    .title {
      padding-left: 0;
      margin-bottom: 1rem;

      .text {
        padding-left: 0;
        padding: 0 5px;
        text-align: center;
      }

      img {
        display: none;
      }
    }
  }
}
</style>
