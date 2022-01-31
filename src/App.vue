<template>
  <div id="app" class="light_theme">
    <div class="main_bg bg">
      <div class="mkSign" @click="goHome()">
        <MkSign />
      </div>
      <div class="help_strip">
        <button
          v-if="activeModule !== 'home'"
          @click="goHome()"
          v-tooltip.left="{
            content: 'Home',
          }"
        >
          <HomeIcon />
        </button>
        <button
          v-tooltip.left="{
            content: 'Download Resume',
          }"
          @click="downLoadResume"
        >
          <DownloadIcon />
        </button>
      </div>
      <div class="indicators">
        <div class="left_part">
          <div @click="changePage('LEFT')" class="arrow_indicator">
            <div v-if="activeModule === 'home'" class="indicator left">
              {{ $t('indicators.education') }}
            </div>
            <Arrow
              v-if="
                activeModule === 'home' ||
                  activeModule === 'education' ||
                  activeModule === 'experience'
              "
              direction="left"
            ></Arrow>
          </div>
        </div>
        <div class="center_part">
          <div @click="changePage('TOP')" class="arrow_indicator">
            <Arrow
              v-if="
                activeModule === 'home' || activeModule === 'intrests' || activeModule === 'skills'
              "
              direction="top"
            ></Arrow>
            <div v-if="activeModule === 'home'" class="indicator top">
              {{ $t('indicators.intrest') }}
            </div>
          </div>

          <div @click="changePage('DOWN')" class="arrow_indicator">
            <div v-if="activeModule === 'home'" class="indicator down">
              {{ $t('indicators.skills') }}
            </div>
            <Arrow
              v-if="
                activeModule === 'home' || activeModule === 'intrests' || activeModule === 'skills'
              "
              direction="down"
            ></Arrow>
          </div>
        </div>
        <div class="right_part">
          <div @click="changePage('RIGHT')" class="arrow_indicator">
            <Arrow
              v-if="
                activeModule === 'home' ||
                  activeModule === 'education' ||
                  activeModule === 'experience'
              "
              direction="right"
            ></Arrow>
            <div v-if="activeModule === 'home'" class="indicator right">
              {{ $t('indicators.experience') }}
            </div>
          </div>
        </div>
      </div>

      <div class="pages">
        <transition name="main_svg_container" enter-active-class="animated fadeIn">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// SVG's
import Arrow from './components/helper_components/Arrow';
import HomeIcon from './assets/SVGs/icons/home.svg';
import DownloadIcon from './assets/SVGs/icons/download.svg';
import MkSign from './assets/SVGs/mk.svg';

import { ROUTER_CONFIG, KEYWORDS } from './helpers/Constants';
import { subscribeEvent } from './helpers/Observer';

export default {
  data() {
    return {
      activeModule: 'home',
      touchstartX: 0,
      touchstartY: 0,
      touchendX: 0,
      touchendY: 0,
    };
  },
  components: {
    Arrow,
    HomeIcon,
    DownloadIcon,
    MkSign,
  },
  methods: {
    changePage(direction) {
      let directionMap = {
        TOP: 'intrests',
        LEFT: 'education',
        RIGHT: 'experience',
        DOWN: 'skills',
      };
      let frameNumber = 1;
      let activeModule = this.activeModule;
      let moduleToNavigate = directionMap[direction];

      /**
       * If home screeen then go to that direction paticular category routename (education1)
       * Active page is there then check the direction is eligible or not
       */
      if (!activeModule || activeModule === 'home') {
        //then can go any direction and frmae =1;
        frameNumber = 1;
      } else if (activeModule === 'education' || activeModule === 'experience') {
        //should not navigate up/down
        frameNumber = this.$route.params.frame || 0;
        if (direction === 'TOP' || direction === 'DOWN') {
          return false;
        }

        if (direction === 'LEFT') {
          if (activeModule === 'education') {
            frameNumber = parseInt(frameNumber) + 1;
          } else {
            frameNumber = parseInt(frameNumber) - 1;
          }
        } else if (direction === 'RIGHT') {
          if (activeModule === 'experience') {
            frameNumber = parseInt(frameNumber) + 1;
          } else {
            frameNumber = parseInt(frameNumber) - 1;
          }
        }
      } else if (activeModule === 'intrests' || activeModule === 'skills') {
        //should not navigate LEFT/RIGHT
        frameNumber = this.$route.params.frame || 0;
        if (direction === 'LEFT' || direction === 'RIGHT') {
          return false;
        }
        if (direction === 'TOP') {
          if (activeModule === 'skills') {
            frameNumber = parseInt(frameNumber) - 1;
          } else {
            frameNumber = parseInt(frameNumber) + 1;
          }
        } else if (direction === 'DOWN') {
          if (activeModule === 'skills') {
            frameNumber = parseInt(frameNumber) + 1;
          } else {
            frameNumber = parseInt(frameNumber) - 1;
          }
        }
      }
      // if (activeModule !== moduleToNavigate) {
      //   frameNumber = 1;
      // }

      if (activeModule === 'home') {
        this.activeModule = moduleToNavigate;
      }

      let isLastFrame = false;
      let frameCount = (ROUTER_CONFIG[this.activeModule] || {}).frames;

      if (frameNumber === 0 || frameNumber > frameCount) {
        this.goHome();
      } else {
        this.$router.push({
          name: `${this.activeModule}-${frameNumber}`,
          params: { frame: frameNumber },
        });
      }
    },
    downLoadResume() {
      let url = 'https://mani-koppala.web.app/Manikanta-koppala.min.pdf';
      window.open(url, '_blank');
    },
    goHome() {
      this.activeModule = 'home';
      this.$router.push({
        name: 'home',
      });
    },
    handleGesture() {
      let touchstartX = this.touchstartX;
      let touchendX = this.touchendX;

      let touchstartY = this.touchstartY;
      let touchendY = this.touchendY;

      let xDiff = Math.abs(touchendX - touchstartX);
      let yDiff = Math.abs(touchendY - touchstartY);

      if (xDiff > yDiff) {
        if (touchendX < touchstartX) {
          // console.log('Swiped left');
          this.changePage('RIGHT');
        } else if (touchendX > touchstartX) {
          // console.log('Swiped right');
          this.changePage('LEFT');
        }
      } else {
        if (touchendY < touchstartY) {
          // console.log('Swiped up');
          this.changePage('DOWN');
        } else if (touchendY > touchstartY) {
          // console.log('Swiped down');
          this.changePage('TOP');
        }
      }
    },
  },
  mounted() {
    let hash = window.location.hash || '';
    hash = hash.split('/');
    if (hash && hash.length) {
      let module = hash[1];
      if (module) {
        this.activeModule = module;
      }
    }
  },
  created() {
    subscribeEvent(KEYWORDS.GO_HOME, this.goHome);
    let self = this;
    document.addEventListener(
      'touchstart',
      function(event) {
        self.touchstartX = event.changedTouches[0].screenX;
        self.touchstartY = event.changedTouches[0].screenY;
      },
      false,
    );

    document.addEventListener(
      'touchend',
      function(event) {
        self.touchendX = event.changedTouches[0].screenX;
        self.touchendY = event.changedTouches[0].screenY;
        self.handleGesture();
      },
      false,
    );
    window.addEventListener('keyup', (ev) => {
      let { keyCode } = ev;
      if (keyCode === 65 || keyCode === 37) {
        //a or left arrow
        this.changePage('LEFT');
      } else if (keyCode === 87 || keyCode === 38) {
        //w or up arrow
        this.changePage('TOP');
      } else if (keyCode === 68 || keyCode === 39) {
        //d or right arrow
        this.changePage('RIGHT');
      } else if (keyCode === 83 || keyCode === 40) {
        //s or down arrow
        this.changePage('DOWN');
      } else if (keyCode === 72) {
        //h
        this.goHome();
      }
    });
  },
};
</script>

<style lang="scss">
@import './assets/fonts/font.css';
@import './assets/scss/theme.scss';
@import './assets/thirdparty/animate.css';
#app {
  font-family: IBMPlexSans;
}
body {
  overflow: hidden;
}
.tooltip {
  background: #dadada;
  padding: 5px 10px;
  box-shadow: 0px 0px 4px #a7a7a7;
  line-height: 20px;
  border-radius: 10px;
  z-index: 11;
  font-size: 14px;
  font-family: IBMPlexSans-Light;
}
</style>

<style lang="scss" scoped>
#app {
  .main_bg {
    height: 100vh;
    width: 100vw;
    .mkSign {
      position: fixed;
      top: 10px;
      left: 10px;
      width: 80px;
      cursor: pointer;
      z-index: 99999999;
    }
    .help_strip {
      position: absolute;
      right: 10px;
      z-index: 11;
      button {
        background: none;
        border: none;
        outline: 0;
        padding: 0;
        cursor: pointer;
      }
      svg {
        padding: 10px;
        cursor: pointer;
      }
    }
    .indicators {
      display: flex;
      position: absolute;
      width: 100%;
      height: 100%;
      justify-content: space-between;
      z-index: 1;
      .arrow_indicator {
        &:hover {
          cursor: pointer;
          .indicator {
            color: var(--dark-bg);
          }
        }
      }
      .indicator {
        text-transform: uppercase;
        text-align: center;
        color: var(--black-40);
        cursor: pointer;
        z-index: 2;
        position: relative;
      }
      .left_part,
      .right_part {
        align-self: center;
        writing-mode: vertical-rl;
        text-orientation: upright;
      }
      .center_part {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
  .pages {
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    position: relative;
    margin: 0 auto;
    top: 50px;
    z-index: 2;
  }
}
</style>
