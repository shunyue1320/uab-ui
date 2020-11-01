<template>
  <div>
    <h4>图标集合</h4>
    <div class="icon-gather" @click="copyText">
      <div v-for="icon in icons" class="icon-box">
        <u-icon :name="icon" class="icon" />
        <span>{{ icon }}</span>
      </div>
    </div>
    <textarea id="input"></textarea>
    <transition name="fade">
      <span v-if="text" class="copy">复制成功：{{ text }}</span>
    </transition>
  </div>
</template>
<script>
import UIcon from '../../../src/icon/icon'

export default {
  components: { UIcon },
  data() {
    return {
      text: false,
      timer: null,
      icons: [
        'column-4','add','add-circle','adjust','arrow-up-circle','arrow-right-circle','arrow-down','ashbin','arrow-right','browse','bottom','back','bad','arrow-double-left','arrow-left-circle','arrow-double-right','caps-lock','camera','chart-bar','attachment','code','close','check-item','calendar','comment','column-vertical','column-horizontal','complete','chart-pie','cry','customer-service','delete','direction-down','copy','cut','data-view','direction-down-circle','direction-right','direction-up','discount','direction-left','download','electronics','drag','elipsis','export','explain','edit','eye-close','email','error','favorite','file-common','file-delete','file-add','film','fabulous','file','folder-close','filter','good','hide','home','history','file-open','forward','import','image-text','keyboard-26','keyboard-9','link','layout','fullscreen-shrink','layers','lock','fullscreen-expand','map','meh','menu','loading','help','minus-circle','modular','notification','mic','more','pad','operation','play','print','mobile-phone','minus','navigation','pdf','prompt','move','refresh','run-up','picture','run-in','pin','save','search','share','scanning','security','sign-out','select','stop','success','smile','switch','setting','survey','task','skip','text','time','telephone-out','toggle-left','toggle-right','telephone','top','unlock','user','upload','work','training','warning','zoom-in','zoom-out','add-bold','arrow-left-bold','arrow-up-bold','close-bold','arrow-down-bold','minus-bold','arrow-right-bold','select-bold','arrow-up-filling','arrow-down-filling','arrow-left-filling','arrow-right-filling','caps-unlock-filling','comment-filling','check-item-filling','clock-filling','delete-filling','decline-filling','dynamic-filling','intermediate-filling','favorite-filling','layout-filling','help-filling','history-filling','filter-filling','file-common-filling','news-filling','edit-filling','fullscreen-expand-filling','smile-filling','rise-filling','picture-filling','notification-filling','user-filling','setting-filling','switch-filling','work-filling','task-filling','success-filling','warning-filling','folder-filling','map-filling','prompt-filling','meh-filling','cry-filling','top-filling','home-filling','sorting'
      ]
    }
  },
  methods: {
    copyText(e) {
      if ('span' !== e.target.localName ) return

      let input = document.getElementById("input");
      input.value = e.target.innerText;
      input.select();
      document.execCommand("copy");
      this.text = e.target.innerText

      clearTimeout(this.timer)
      this.timer = null
      this.timer = setTimeout(() => {
        this.text = false
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
#input {position: absolute;top: 0;left: 0;opacity: 0;z-index: -10;}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.copy {
  position: fixed;
  top: 20%;
  left: 50%;
  padding: 10px;
  background-color: white;
  border-radius: 6px;
  color: #3EAF7C;
  box-shadow: 0px 4px 13px 0px rgba(62, 175, 124, 0.3);
}
.icon-gather {
  display:flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;

  .icon-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 7rem;
    padding: 20px 2px;
    margin: 10px;
    border-radius: 10%;
    box-shadow: 0px 4px 13px 0px rgba(40, 45, 74, 0.13);

    .icon {
      margin-bottom: 20px;
      fill: #666;
      font-size: 2rem;
    }

    span {
      width: 100%;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>