<script>
import NuxtImg from '@nuxt/image/dist/runtime/components/nuxt-img.vue'
import {
  imageInfo,
  imageSource,
  imageVariant,
  imageCandidates,
} from '~/utils/portfolio-images'

// Retain NuxtImg's single <img> root so existing CSS, refs and hover rules apply.
// Real file widths are used in srcset, including when the original beats WebP.
export default {
  name: 'PortfolioImage',
  extends: NuxtImg,
  props: {
    loading: { type: String, default: 'lazy' },
    decoding: { type: String, default: 'async' },
    sizes: {
      type: String,
      default:
        '(min-width: 1200px) 1110px, (min-width: 992px) 930px, (min-width: 768px) 690px, (min-width: 576px) 510px, calc(100vw - 30px)',
    },
  },
  computed: {
    nImgAttrs() {
      const info = imageInfo(this.src) || {}
      return {
        width: this.width || info.width,
        height: this.height || info.height,
        alt: this.alt,
        style: info.width
          ? { aspectRatio: `${info.width} / ${info.height}` }
          : undefined,
        loading: this.loading,
        decoding: this.decoding,
      }
    },
    nSizes() {
      return {
        sizes: this.sizes,
        srcset: imageCandidates(this.src),
        src: imageVariant(imageSource(this.src)).url,
      }
    },
  },
  mounted() {
    // Preserve an original-format fallback if a browser cannot decode WebP.
    this.originalFallback = () => {
      this.$el.removeAttribute('srcset')
      this.$el.src = imageSource(this.src)
    }
    this.$el.addEventListener('error', this.originalFallback, { once: true })
  },
  beforeDestroy() {
    this.$el.removeEventListener('error', this.originalFallback)
  },
}
</script>
