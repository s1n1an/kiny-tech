<template>
  <main>
    <div class="title">
      <h1>服务与报价表</h1>
      <h6>via 2019-10-10</h6>
    </div>

    <div class="content">
      <section>
        <h3>定制配置单</h3>
        <p class="tips">按次收费，以客户满意并接受配置单为准。</p>
        <ul>
          <li>
            <span class="desc">家用/游戏PC</span>
            <span class="price">￥5.00</span>
          </li>
          <li>
            <span class="desc">笔记本电脑</span>
            <span class="price">￥5.00</span>
          </li>
          <li>
            <span class="desc">办公电脑采购</span>
            <span class="price">￥15.00</span>
          </li>
        </ul>
        <hr />
        <div class="more">
          <span class="desc">增值服务 · 网店/闲鱼采购单</span>
          <span class="price">+ ￥50.00</span>
        </div>
      </section>

      <section>
        <h3>装机/维修/优化</h3>
        <p
          class="tips"
        >以下服务均特指 Windows 操作系统。默认为远程指导，按需求数收费，以实际问题解决为准。该价格不包含服务期间产生的购买激活码/硬件/付费软件等额外花费。</p>
        <ul>
          <li>
            <span class="desc">操作系统安装/机器组装</span>
            <span class="price">￥25.00</span>
          </li>
          <li>
            <span class="desc">系统垃圾清理/优化</span>
            <span class="price">￥25.00</span>
          </li>
          <li>
            <span class="desc">通常故障修复</span>
            <span class="price">￥25.00</span>
          </li>
          <li>
            <span class="desc">复杂故障 (例如:硬盘数据恢复)</span>
            <span class="price" style="color:#ffb300">联系议价</span>
          </li>
          <hr />
          <div class="more">
            <span class="desc">售后服务 · 提供一个月内免费售后</span>
            <span class="price" style="color:#47fe47;">免费</span>
          </div>

          <div class="more">
            <span class="desc">增值服务 · 常熟地区上门服务</span>
            <span class="price">+ ￥25.00</span>
          </div>
        </ul>
      </section>

      <section>
        <h3>高级服务</h3>
        <p class="tips">以需求满足为准，在本人技术范围内的需求会尽力满足。</p>
        <ul>
          <li>
            <span class="desc">服务器/机房网络配置</span>
            <span class="price" style="color:#ffb300">联系议价</span>
          </li>
          <li>
            <span class="desc">BAT批处理制作</span>
            <span class="price" style="color:#ffb300">联系议价</span>
          </li>
          <li>
            <span class="desc">大数据处理</span>
            <span class="price" style="color:#ffb300">联系议价</span>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'price'
}
</script>

<style lang="less" scoped>
main {
  padding: 5px 15px 15px;

  .title {
    margin-bottom: 1.2rem;

    h1 {
      font-size: 1.8rem;
      font-family: 'fz-ys';
    }

    h6 {
      font-size: 1.2rem;
      font-family: 'optima';
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    section {
      padding: 1rem 0.8rem;
      width: 30%;
      border-radius: 3px;
      background: url('~@img/repeat/2.jpg');
      margin-bottom: 10px;
      color: #fff;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 6px 0px;

      .tips {
        margin-top: 0.5rem;
        font-size: 0.8rem;
        font-family: 'Microsoft YaHei';
      }

      .more {
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.8rem;

        &:last-child {
            margin-bottom: 0;
          }

        .price {
          padding: 2px 0.5rem;
          border-radius: 3px;
          border: 1px currentColor solid;
          flex-shrink: 0;
        }
      }

      hr {
        border: none;
        border-top: 1px #fff dashed;
        margin: 1rem 0;
      }

      h3 {
        font-size: 1.6rem;
        font-family: 'fz-ys';
      }

      ul {
        padding-top: 1.4rem;
        margin: 5px 0;

        li {
          margin-bottom: 0.8rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: center;

          .price {
            padding: 2px 0.5rem;
            border-radius: 3px;
            border: 1px currentColor solid;
            flex-shrink: 0;
          }

          &:last-child {
            margin-bottom: 0;
          }
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

        .tips {
          text-align: center;
        }

        h3 {
          text-align: center;
        }
      }
    }
  }
}
</style>