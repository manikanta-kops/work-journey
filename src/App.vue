<template>
  <div id="app" class="light_theme">
    <div class="main_bg bg">
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
import { ROUTER_CONFIG, KEYWORDS } from './helpers/Constants';
import { subscribeEvent } from './helpers/Observer';

export default {
  data() {
    return {
      activeModule: 'home',
    };
  },
  components: {
    Arrow,
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
        frameNumber = parseInt(frameNumber) + 1;
        if (direction === 'TOP' || direction === 'DOWN') {
          return false;
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
    goHome() {
      this.activeModule = 'home';
      this.$router.push({
        name: 'home',
      });
    },
  },
  created() {
    subscribeEvent(KEYWORDS.GO_HOME, this.goHome);
    window.addEventListener('keyup', (ev) => {
      let { keyCode } = ev;
      console.log(keyCode);
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
</style>

<style lang="scss" scoped>
#app {
  .main_bg {
    height: 100vh;
    width: 100vw;
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
