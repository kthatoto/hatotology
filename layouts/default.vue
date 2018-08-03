<template lang="pug">
.default
  h1.title
    nuxt-link(to="/") hatotolo.gy
  nuxt.main
</template>

<style lang="scss">
html {
  background-color: #fafafa;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 游ゴシック体, 'Yu Gothic', YuGothic, 'ヒラギノ角ゴシック Pro', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
}
a {
  color: inherit;
}
h1 { font-size: 1.8rem; }
h2 { font-size: 1.6rem; }
h3 { font-size: 1.4rem; }
h4 { font-size: 1.2rem; }
h5 { font-size: 1.0rem; }
h6 { font-size: 0.8rem; }

.default {
  width: 800px;
  margin: 0 auto;
  padding-top: 200px;
  > .title {
    font-size: 2.4rem;
    margin-bottom: 10px;
    &:hover {
      text-decoration: underline;
    }
  }
  > .main {
    a {
      padding: 2px;
      &:hover {
        background-color: #37619c;
        color: white;
      }
    }
  }
}
</style>
