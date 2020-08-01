<template>
  <div class="Center_Page">
    <div class="Content">
      <div class="secondary_text">Hi I'M</div>
      <div class="primary_text">ManiKanta</div>
      <div class="secondary_text">A front end developer who loves to design + code</div>
      <div class="social_media">
        <!-- <a href=""><MediumIcon></MediumIcon></a> -->
        <a href=""><FaceBookIcon></FaceBookIcon></a>
        <a href=""><TwitterIcon></TwitterIcon></a>
        <a href=""><InstagramIcon></InstagramIcon></a>
      </div>
    </div>
    <!-- <transition
      name="main_svg_container"
      enter-active-class="animated flipInX"
      leave-active-class="animated flipInY"
    > -->
    <div v-if="showIllustration" class="svg_container">
      <Main-page-illustration></Main-page-illustration>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import MainPageIllustration from '../assets/SVGs/illustrations/Home_Image.svg';
import InstagramIcon from '../assets/SVGs/icons/social/Instagram.svg';
import FaceBookIcon from '../assets/SVGs/icons/social/Facebook.svg';
import TwitterIcon from '../assets/SVGs/icons/social/Twitter.svg';
import MediumIcon from '../assets/SVGs/icons/social/Medium.svg';
export default {
  data() {
    return {
      showIllustration: false,
    };
  },
  components: {
    MainPageIllustration,
    FaceBookIcon,
    MediumIcon,
    TwitterIcon,
    InstagramIcon,
  },
  methods: {
    beforeLeave() {
      debugger;
    },
  },
  mounted() {
    this.showIllustration = true;
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
    .social_media {
      a {
        display: inline-block;
        margin: 10px 20px 0 0;
        cursor: pointer;
      }
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
