<script>
  export default {
    name: 'URow',
    props: {
      tag: {
        type: String,
        default: 'div'
      },
      gutter: {
        type: [Number, String]
      },
      align: {
        type: String,
        validator (value) {
          return ['left', 'right', 'center'].indexOf(value) >= 0
        }
      }
    },
    computed: {
      style() {
        const ret = {};
        if (this.gutter) {
          ret.marginLeft = `-${this.gutter / 2}px`;
          ret.marginRight = ret.marginLeft;
        }
        return ret;
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    },
    render(h) {
      return h(this.tag, {
        class: [
          'u-row',
          this.align ? `align-${this.align}` : ''
        ],
        style: this.style
      }, this.$slots.default);
    }
  }
</script>

<style scoped lang="scss">
  .u-row{
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    &.align-left {
      justify-content: flex-start;
    }
    &.align-right {
      justify-content: flex-end;
    }
    &.align-center {
      justify-content: center;
    }
  }
</style>
