<template>
  <div id="app" class="light_theme">
    <div class="main_bg bg">
      <div class="Indicators_Actions">
        <div class="Indicators">
          <div class="top">{{ $t('indicators.intrest') }}</div>
          <div class="right">{{ $t('indicators.experience') }}</div>
          <div class="down">{{ $t('indicators.skills') }}</div>
          <div class="left">{{ $t('indicators.education') }}</div>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import './assets/fonts/font.css';
@import './assets/scss/theme.scss';
#app {
  font-family: IBMPlexSans;
}
</style>

<style lang="scss" scoped>
#app {
  .main_bg {
    height: 100vh;
    width: 100vw;
    .Indicators_Actions {
      .Indicators {
      }
    }
  }
}
</style>
