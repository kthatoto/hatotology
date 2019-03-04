<template lang="pug">
#presentation
  .eg-slideshow(:mouseNavigation=false)
    slide#page1(enterPrev='slideInDown' leaveNext='slideOutUp')
      h1
        | Hacking
        br
        | Hack and Slash
        br
        | on Terminal
      h2
        | event: Akatsuki Geek Live
        br
        | &nbsp;date: Fri Feb 22 JST 2019
        br
        | &nbsp;&nbsp;&nbsp;by: @kthatoto

    slide#page1-1(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ cat 自己紹介.json; imgcat 自己紹介.jpg
      div
        h4 {
        h4 &nbsp;"名前":&nbsp;"高橋一斗",
        h4 &nbsp;"大学":&nbsp;"明治大学/3年",
        h4 &nbsp;"好きな分野":&nbsp;"Infrastructure&nbsp;as&nbsp;Code",
        h4 &nbsp;"好きな言語":&nbsp;"Ruby,JavaScript",
        h4 &nbsp;"好きなエディタ":&nbsp;"Vim",
        h4 }
        img(src="./images/profile.jpg")

    slide#page2(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ ls -l table_of_content
      h3 drwxr-xr-x Hack\ and\ Slashとは
      h3 drwxr-xr-x 悩み・経緯
      h3 drwxr-xr-x どう悩みを解決するか
      h3 d--------- デモ
      h3 drwxr-xr-x 構成とそれによるメリット

    slide#page1-5(:steps=2 enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ imgcat gomennasai.png
      img(v-if="step >= 2" src="./images/im-sorry.png")

    slide#page3(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ cat Hack\ and\ Slashとは
      h4 敵を倒して強くなり強いアイテムを入手しさらに強い敵を倒す
      h4 みたいな感じで、敵を倒すことに重点をおいたゲームジャンル
    slide#page4(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ cat 悩み・経緯
      h4.li キャラ育成でどの職業を極めるか迷い続ける
      h4.li NPCが思い通り動いてくれない
      h4.li 自動化したくても限度がある
      h3 みたいなモヤモヤがある
    slide#page5(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2
        | $ echo これを全部解決する
        br
        | $ echo ゲームアーキテクチャを
        br
        | $ echo 思いつきました！
    slide#page6(:steps=3 enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ tail -f どう悩みを解決するか
      h3 キャラ育成でどの職業を極めるか迷い続ける
      h4.li(v-if="step >= 2") キャラたくさん作れればいいじゃん
      h4.li(v-if="step >= 3") 複数同時に操作できればいいじゃん
    slide#page7(:steps=2 enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ tail -f どう悩みを解決するか
      h3 NPCが思い通り動いてくれない
      h4.li(v-if="step >= 2") 複数同時に(ry

    slide#page8(:steps=2 enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ tail -f どう悩みを解決するか
      h3 自動化したくても限度がある
      h4.li(v-if="step >= 2") ゲームの操作をプログラマブルにすればいいじゃん

    slide#page9(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ echo 要するに
      h2 $ echo プログラムから操作できるゲーム

    slide#page10(:steps=4 enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ ./デモ
      h3(v-if="step >= 2") Permission denied
      h3(v-if="step >= 3") $ sudo chmod +x デモ
      h3(v-if="step >= 4") $ ./デモ

    slide#page11(:steps=7 enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ imgcat 構成とそれによるメリット
      .boxes
        .imageWrapper
          img(src="./images/architecture.svg")
          .box(v-if="step == 2")
            p APIサーバー
            p.li データ永続化
            p.lili プレイヤー経験値
            p.lili 所有アイテム
            p.li APIリスト
            p.lili 敵を倒したよAPI
            p.lilili 経験値を獲得
            p.lilili アイテムを一定確率で獲得
            p.lilili レベルアップするならレベルアップ
          .box(v-if="step == 3")
            p ゲームクライアント1
            p.li 永続化する必要のない状態管理
            p.lili プレイヤーの情報
            p.lilili 位置
            p.lilili HP
            p.lilili バフやデバフ状態
            p.lili 敵の情報
            p.lilili プレイヤーと一緒
            p.lili 状態保持をキャッシュサーバーで行う
            p.li 敵の行動制御
            p.lili 敵の生成
            p.lili 敵の移動
            p.lili 敵の攻撃
            p.li キューの処理を行う
            p.lili 入力を順番に受け取って反映する
          .box(v-if="step == 4")
            p ゲームクライアント2
            p.li 状態を出力
            p.lili マップ情報
            p.lili 自分の位置
            p.lili 敵の位置
            p.lili 所持アイテム
          .box(v-if="step == 5")
            p キャッシュサーバー
            p.li ゲームクライアントで管理している情報の保持
          .box(v-if="step == 6")
            p キューサーバー
            p.li プレイヤー操作をメッセージとして溜め込む
            p.lili 移動
            p.lili 攻撃
            p.lili アイテム使用
          .box(v-if="step == 7")
            p ブラウザ
            p.li ターミナル上に出力
            p.li キー入力受付
            p.lili キューサーバーに入力情報をエンキューする
            p.li ゲームクライアントから情報を取得して出力
    slide#page12(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h2 $ cat accounts.json | jq .
      h3
        p {
        p &nbsp;&nbsp"github": "kthatoto",
        p &nbsp;&nbsp"twitter": "kthatoto"
        p }

    slide#page13(enterNext='slideInUp' enterPrev='slideInDown' leaveNext='slideOutUp' leavePrev='slideOutDown')
      h1 $ cowsay Thank you!
      h6 &nbsp;____________
      h6 &#60;&nbsp;Thank&nbsp;you!&nbsp;&#62;
      h6 &nbsp;------------
      h6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;&nbsp;^__^
      h6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\&nbsp;&nbsp;(oo)\_______
      h6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__)\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)\/\
      h6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||----w&nbsp;|
      h6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||
</template>

<script>
export default {
  layout: 'presentation'
}
</script>

<style lang="scss" scoped>
#presentation {
  font-family: "Courier New", 'Kosugi Maru', sans-serif;
  color: #20c20e;
  ::selection {
    color: white;
    background-color: #46639c;
  }
  #page1 {
    h1 {
      text-align: left;
      font-size: 3em;
    }
    h2 {
      text-align: left;
      font-size: 1em;
    }
  }
  #page1-5 {
    text-align: center;
    position: relative;
  }
  #page1-1 {
    h2 {
      font-size: 1.2em;
    }
    h4 {
      margin: 0.5em 0;
    }
    > div {
      position: relative;
    }
    img {
      position: absolute;
      width: 12em;
      bottom: 5em;
      right: 10em;
    }
  }
  #page2 {
    h2 { font-size: 1.7em; }
    h3 { font-size: 1.2em; }
  }
  #page11 {
    .imageWrapper {
      width: 15em;
      background-color: white;
      padding: 2em;
    }
    .boxes {
      position: relative;
    }
    .box {
      position: absolute;
      background-color: white;
      padding: 0.5em;
      color: black;
      background-color: #ddd;
      top: 0;
      left: 25em;
      font-size: 0.8em;
    }
  }
  #page13 {
    h6 {
      margin: 0.4em;
      font-size: 1em;
    }
  }
  .eg-slideshow {
    padding: 1em 2em;
    background-color: #222;
    h1, h2, h3, h4, h5, h6 {
      text-align: left;
    }
    h1 { font-size: 2.5em; }
    h2 { font-size: 1.8em; }
    h3 { font-size: 1.5em; }
    h4 {
      font-size: 1.1em;
      &.li {
        display: list-item;
        margin: 1em 0 1em 2em;
        list-style-type: disc;
      }
    }
    h5 {
      font-size: 0.9em;
      &.li {
        display: list-item;
        margin: 1em 0 1em 2em;
        list-style-type: disc;
      }
    }
    h6 {
      font-size: 0.7em;
      &.li {
        display: list-item;
        margin: 1em 0 1em 4em;
        list-style-type: circle;
      }
    }
    p {
      font-size: 0.7em;
      &.li {
        display: list-item;
        margin: 0.8em 0 0.8em 2em;
        list-style-type: square;
      }
      &.lili {
        display: list-item;
        margin: 0.5em 0  0.5em 4em;
        list-style-type: square;
      }
      &.lilili {
        display: list-item;
        margin: 0.5em 0  0.5em 6em;
        list-style-type: square;
      }
    }
  }
}
</style>
