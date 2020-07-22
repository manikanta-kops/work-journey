<template>
  <div id="app" class="light_theme">
    <div class="main_bg bg">
      <div class="indicators">
        <div class="left_part">
          <div class="indicator left">{{ $t('indicators.education') }}</div>
          <Arrow direction="left"></Arrow>
        </div>
        <div class="center_part">
          <div>
            <Arrow direction="top"></Arrow>
            <div class="indicator top">{{ $t('indicators.intrest') }}</div>
          </div>

          <div>
            <div class="indicator down">{{ $t('indicators.skills') }}</div>
            <Arrow direction="down"></Arrow>
          </div>
        </div>
        <div class="right_part">
          <Arrow direction="right"></Arrow>
          <div class="indicator right">{{ $t('indicators.experience') }}</div>
        </div>
      </div>

      <div class="pages">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// SVG's
import Arrow from './components/helper_components/Arrow';

export default {
  components: {
    Arrow,
  },
};
</script>

<style lang="scss">
@import './assets/fonts/font.css';
@import './assets/scss/theme.scss';
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
      .indicator {
        text-transform: uppercase;
        text-align: center;
        color: var(--black-40);
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
    width: 100%;
    height: 100%;
    padding: 100px;
  }
}
</style>
