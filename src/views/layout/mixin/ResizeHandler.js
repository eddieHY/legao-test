
import { mapMutations } from 'vuex'
import types from '@/store/types'

const { body } = document
const WIDTH = 1024
const RATIO = 3

export default {
  watch: {
    $route() {
      if (this.device === 'mobile' && this.sidebar.opened) {
        this.closeSideBar(false)
      }
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    const isMobile = this.isMobile()
    if (isMobile) {
      this.toggleDevice('mobile')
      this.closeSideBar(true)
    }
  },
  methods: {
    ...mapMutations({
      toggleDevice: types.SET_TOGGLE_DEVICE,
      closeSideBar: types.SET_CLOSE_SIDEBAR
    }),
    isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - RATIO < WIDTH
    },
    resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.isMobile()
        this.toggleDevice(isMobile ? 'mobile' : 'desktop')
        
        if (isMobile) {
          this.closeSideBar(true)
        }
      }
    }
  }
}
