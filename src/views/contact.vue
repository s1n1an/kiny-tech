<template>
  <main>
    <div class="title">
      <h1>Kiny的联系方式</h1>
    </div>

    <div class="content">
      <section>
        <div class="desc">QQ号码</div>
        <div class="val">532031821</div>
        <div class="action">
          <a
            target="_blank"
            href="http://wpa.qq.com/msgrd?v=3&uin=532031821&site=qq&menu=yes"
          >发起QQ聊天</a>
          <button
            class="copy"
            :style="{color:qqCopied?'#47fe47':'#fff'}"
            @click="copy('qq')"
            data-clipboard-text="532031821"
          >{{qqCopied?qqTextCopied:qqText}}</button>
        </div>
      </section>

      <section>
        <div class="desc">微信号</div>
        <div class="val">a532031821</div>
        <div class="action">
          <button
            class="copy"
            :style="{color:wxCopied?'#47fe47':'#fff'}"
            @click="copy('wx')"
            data-clipboard-text="a532031821"
          >{{wxCopied?wxTextCopied:wxText}}</button>
        </div>
      </section>

      <section>
        <div class="desc">电子邮箱</div>
        <div class="val">{{displayValue}}</div>
        <div class="action">
          <span @click="displayEmail">显示地址</span>
          <button
            class="copy"
            :style="{color:mailCopied?'#47fe47':'#fff'}"
            @click="copy('mail')"
            :data-clipboard-text="email"
          >{{mailCopied?mailTextCopied:mailText}}</button>
        </div>
      </section>

      <section>
        <div class="desc">微博</div>
        <div class="val">阿妈港甚内XKinyX银古</div>
        <div class="action">
          <a target="_blank" href="https://weibo.com/u/1807990034">前往观摩</a>
        </div>
      </section>

      <section>
        <div class="desc">闲鱼</div>
        <div class="val">kiny日在校园</div>
        <div class="action">
          <a
            target="_blank"
            href="https://market.m.taobao.com/app/idleFish-F2e/IdleFishWeexPersonalPage/PersonalHome?userid=2392066812&ut_sk=1.XLqWRTwg0A8DAFg%252FNZq%252BPqQE_21407387_1571040455203.Copy.mypage.2392066812.2264215772&type=1&wh_weex=true&forceFlush=1"
          >前往闲鱼</a>
          <button
            class="copy"
            :style="{color:xyCopied?'#47fe47':'#fff'}"
            @click="copy('xy')"
            data-clipboard-text="【常熟Kiny技术，专业维修，优化，装配电脑】复制这条消息后，打开闲鱼€Jd3aYpsLaoZ€"
          >{{xyCopied?xyTextCopied:xyText}}</button>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import clipboard from 'clipboard'

export default {
  name: 'contact',

  data() {
    return {
      displayValue: '请点击「显示地址」按钮',
      email: 'xiyiheng521@qq.com',

      qqCopied: false,
      wxCopied: false,
      mailCopied: false,
      xyCopied: false,

      qqText: '复制QQ号码',
      wxText: '复制微信号',
      mailText: '复制邮箱地址',
      xyText: '复制淘口令',

      qqTextCopied: 'QQ号码已复制',
      wxTextCopied: '微信号已复制',
      mailTextCopied: '邮箱地址已复制',
      xyTextCopied: '淘口令已复制'
    }
  },

  mounted() {
    new clipboard('.copy')
  },

  methods: {
    copy(item) {
      this.qqCopied = false
      this.wxCopied = false
      this.mailCopied = false
      this.xyCopied = false
      this[`${item}Copied`] = true
    },

    displayEmail() {
      this.displayValue = this.email
    }
  }
}
</script>

<style lang="less" scoped>
main {
  padding: 5px 15px 15px;

  .title {
    margin-bottom: 1.2rem;
    text-align: center;

    h1 {
      font-size: 1.8rem;
      font-family: 'fz-ys';
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;

    a {
      color: #000;
      text-decoration: none;
    }

    section {
      width: 30%;
      padding: 0.8rem;
      color: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 0.5rem 1rem;
      transition: all 350ms;
      background-color: #000;
      background-image: url('~@img/repeat/5.jpg');
      box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 6px 0px;

      .desc {
        font-size: 1.5rem;
        margin-bottom: 0.4rem;
      }

      .val {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      .action a,
      .action .copy,
      .action span {
        color: #fff;
        font-size: 1rem;
        padding: 0.2rem 0.5rem;
        border: 1px currentColor solid;
        border-radius: 4px;
        margin: 0 0.4rem;
        cursor: pointer;
        background: none;

        &:hover {
          background-color: #333;
        }
      }
    }
  }
}

@media (max-width: 450px) {
  main {
    .title {
      text-align: center;
    }

    .content {
      flex-wrap: wrap;

      section {
        width: 100%;
      }
    }
  }
}
</style>