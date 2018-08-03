<template lang="pug">
.default
  h1.title
    nuxt-link(to="/") hatotolo.gy
  nuxt
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
h1 { font-size: 2.0rem; }
h2 { font-size: 1.8rem; }
h3 { font-size: 1.6rem; }
h4 { font-size: 1.4rem; }
h5 { font-size: 1.2rem; }
h6 { font-size: 1.0rem; }

.default {
  width: 800px;
  margin: 0 auto;
  padding-top: 200px;
}
.title {
  &:hover {
    text-decoration: underline;
  }
}
</style>
