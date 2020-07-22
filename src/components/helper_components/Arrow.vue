<template>
  <div class="Arrow" :class="direction">
    <LeftArrow></LeftArrow>
  </div>
</template>

<script>
import LeftArrow from '../../assets/SVGs/icons/left_arrow.svg';
export default {
  props: {
    direction: {
      type: String,
      default: 'left',
    },
  },
  components: {
    LeftArrow,
  },
};
</script>

<style lang="scss" scoped>
.Arrow {
  text-align: center;
  &.right {
    transform: rotate(180deg);
  }
  &.top {
    transform: rotate(90deg);
  }
  &.down {
    transform: rotate(-90deg);
  }
}
</style>
