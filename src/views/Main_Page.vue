<template>
  <div class="Center_Page">
    <div class="Content">
      <div class="secondary_text">Hi I'M</div>
      <div class="primary_text">ManiKanta</div>
      <div class="secondary_text">A front end developer who loves to design + code</div>
    </div>

    <div class="svg_container">
      <Main-page-illustration></Main-page-illustration>
    </div>
  </div>
</template>

<script>
import MainPageIllustration from '../assets/SVGs/illustrations/Home_Image.svg';
export default {
  components: {
    MainPageIllustration,
  },
};
</script>

<style lang="scss" scoped>
.Center_Page {
  width: 100%;
  height: 100%;
  display: flex;
  .Content {
    // align-self: center;
    width: 100%;
    .primary_text {
      margin: 13px 0;
    }
  }
  .svg_container {
    width: 50%;
    height: auto;
    margin: 0 auto;
    position: absolute;
    right: 0;
    bottom: 0;
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
