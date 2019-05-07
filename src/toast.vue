<template>
  <transition>
    <span v-if="flag" class="toast">网络已断开</span>
  </transition>
</template>

<script>
    export default {
        data() {
            return {flag: false};
        },
        methods: {
            net() {
                window.addEventListener('offline', () => {
                    this.flag = true;
                    setTimeout(() => { this.flag = false }, 2000)
                    }
                )
            }
        },
        created() {
            this.net();
        }
    }
</script>

<style scoped>
  .toast {
    position: absolute;
    left: 50%;
    margin-left: -46px;
    border: 1px solid red;
    border-radius: 10px;
    padding: 5px;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  .v-enter-active,
  .v-leave-active{
    transition: all 1.8s ease;
  }
</style>