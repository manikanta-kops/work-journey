<template>
  <div class="Center_Page">
    <div class="Content">
      <div class="secondary_text">Hi I'M</div>
      <div class="primary_text">ManiKanta</div>
      <div class="middle_text">
        <frontEndDeveloperImage />
      </div>
      <div class="secondary_text">
        I believe that human potential is more & always spends time in self-development. <br />
      </div>
      <div class="secondary_text ternary_text">
        Rest you can find by navigating
      </div>
      <div class="directions">
        <button
          v-tooltip="{
            content: 'Navigate using arrow keys or (wasd).<br /> H -> home',
          }"
        >
          <keyboardIcon></keyboardIcon>
        </button>
        <button
          v-tooltip="{
            content: 'Navigate by clicking on four sides of the screen',
          }"
        >
          <pointerIcon></pointerIcon>
        </button>
        <button
          v-tooltip="{
            content: 'Navigate by dragging in any direction',
          }"
        >
          <swipeIcon></swipeIcon>
        </button>
      </div>
      <div class="secondary_text">
        You can find me @
      </div>
      <div class="social_media">
        <a href="https://medium.com/@manikanta.koppala7" target="_blank"
          ><MediumIcon></MediumIcon
        ></a>
        <a href="https://www.linkedin.com/in/manikanta-koppala-b5b346105/" target="_blank"
          ><linkdinIcon></linkdinIcon
        ></a>
        <!-- <a href="https://twitter.com/mani_koppala" target="_blank"><TwitterIcon></TwitterIcon></a> -->
        <a href="https://github.com/manikanta-kops" target="_blank"><githubIcon></githubIcon></a>
      </div>
      <div class="download_resume">
        <BubblyButton @onClick="onResumeDownload" title="Download Resume" />
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

import githubIcon from '../assets/SVGs/icons/social/github.svg';
import linkdinIcon from '../assets/SVGs/icons/social/linkdin.svg';
import TwitterIcon from '../assets/SVGs/icons/social/twitter2.svg';
import MediumIcon from '../assets/SVGs/icons/social/Medium.svg';

import keyboardIcon from '../assets/SVGs/icons/keyboard.svg';
import pointerIcon from '../assets/SVGs/icons/pointer.svg';
import swipeIcon from '../assets/SVGs/icons/swipe.svg';

import frontEndDeveloperImage from '../assets/SVGs/frontEndDeveloper.svg';

import BubblyButton from '../components/common/bubbly-button.vue';

export default {
  data() {
    return {
      showIllustration: false,
    };
  },
  components: {
    MainPageIllustration,
    githubIcon,
    linkdinIcon,
    TwitterIcon,
    MediumIcon,
    keyboardIcon,
    pointerIcon,
    swipeIcon,
    BubblyButton,
    frontEndDeveloperImage,
  },
  methods: {
    beforeLeave() {},
    onResumeDownload() {
      let url = 'https://mani-koppala.web.app/Manikanta-koppala.min.pdf';
      window.open(url, '_blank');
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
    padding: 50px;
    .middle_text {
      margin-bottom: 10px;
      svg {
        max-width: 300px;
        path {
          fill: #958fff;
          stroke: #958fff;
        }
      }
    }
    .primary_text {
      margin: 13px 0;
    }
    .directions {
      button {
        background: none;
        border: none;
        outline: 0;
        cursor: pointer;
      }
      margin: 20px 0;
      svg {
        margin-right: 20px;
      }
    }
    .secondary_text {
      max-width: 40%;
    }
    .ternary_text {
      font-family: IBMPlexSans-Light;
      margin-top: 10px;
      font-size: 14px;
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
      /deep/ {
        #Bird {
          animation: fly1 15s linear infinite;
        }
        #Bird_2 {
          animation: fly2 15s linear infinite;
        }
        #Bird_3 {
          animation: fly3 15s linear infinite;
        }
        #tree {
          transform-origin: bottom;
          transform-box: fill-box;
          animation: swing 15s linear infinite;
        }
      }
    }
  }
  @keyframes fly1 {
    0% {
      opacity: 0.3;
      transform: translateX(0px);
    }

    30% {
      transform: translateX(-324px);
    }

    35% {
      opacity: 0;
      transform: translateX(655px);
    }
    40% {
      opacity: 0.3;
    }
    80% {
      opacity: 0.3;
      transform: translateX(255px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  @keyframes fly2 {
    0% {
      opacity: 0.3;
      transform: translateX(0px);
    }

    60% {
      transform: translateX(-806px);
    }

    65% {
      opacity: 0;
      transform: translateX(182px);
    }
    70% {
      opacity: 0.3;
    }

    100% {
      transform: translateX(0px);
    }
  }
  @keyframes fly3 {
    0% {
      opacity: 0.3;
      transform: translateX(0px);
    }

    60% {
      transform: translateX(-506px);
    }

    65% {
      opacity: 0;
      transform: translateX(475px);
    }
    70% {
      opacity: 0.3;
    }

    100% {
      transform: translateX(0px);
    }
  }
  @keyframes swing {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    25% {
      transform: rotate(-4deg);
    }
    35% {
      transform: rotate(-8deg);
    }
    50% {
      transform: rotate(0deg);
    }
    70% {
      transform: rotate(-8deg);
    }
    90% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}
</style>
