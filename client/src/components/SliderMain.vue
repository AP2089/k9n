<script lang="ts" setup>
import ButtonExtra from "@/components/ButtonExtra";
import imageSrcset from "@/utils/imageSrcset";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";

export interface Item {
  id: number;
  title: string;
  description: string;
  category: string;
  url: string;
  image: {
    any: string[];
    webp: string[];
  };
}

export interface Props {
  items: Item[] | undefined;
}

defineProps<Props>();

const modules = [Autoplay, Pagination];
</script>

<template>
  <Swiper
    :slides-per-view="1"
    :space-between="0"
    :modules="modules"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    class="slider-main"
  >
    <SwiperSlide v-for="item in items" :key="item.id" class="slider-main__item">
      <svg
        preserveAspectRatio="xMinYMin slice"
        viewBox="0 0 1440 561"
        class="slider-main__bg"
      >
        <use xlink:href="#decor-hill"></use>
      </svg>
      <div class="slider-main__center center">
        <div class="slider-main__wrap">
          <div class="slider-main__content">
            <div class="slider-main__core">
              <div class="slider-main__category">{{ item.category }}</div>
              <div class="slider-main__title">{{ item.title }}</div>
              <div class="slider-main__description">{{ item.description }}</div>
              <div class="slider-main__button">
                <ButtonExtra :to="item.url">{{ $t("more") }}</ButtonExtra>
              </div>
            </div>
          </div>
          <picture class="slider-main__picture">
            <source type="image/webp" :srcset="imageSrcset(item.image.webp)" />
            <img
              :src="item.image.any[0]"
              :srcset="imageSrcset(item.image.any)"
              :alt="item.title"
              class="slider-main__img"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss" scoped>
$pagination: ".swiper-pagination";

.slider-main {
  &__item {
    position: relative;
  }

  &__bg {
    width: 100%;
    height: 100%;
    color: $color-success;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

  &__center {
    position: relative;
    z-index: 1;
  }

  &__wrap {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 0 3rem;
    justify-items: center;
    align-items: center;
    padding: 5rem 0 8rem 0;
  }

  &__core {
    width: 50rem;
    margin: 0 auto;
  }

  &__category {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: $color-success;
    margin-bottom: 1.7rem;
  }

  &__title {
    font-weight: 700;
    font-size: 4rem;
    line-height: 4.7rem;
    color: $color-global;
    margin-bottom: 1rem;
  }

  &__description {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: $color-global;
    margin-bottom: 4rem;
  }

  &__img {
    display: block;
    width: 36.4rem;
    height: 42.5rem;
  }

  :deep(#{$pagination}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 4rem;
    z-index: 3;

    #{$pagination}-bullet {
      width: 1rem;
      height: 1rem;
      margin-right: 1rem;
      cursor: pointer;
      border-radius: 50%;
      background-color: $color-extra;
      transition: background-color 0.5s ease 0s;

      &:hover,
      &#{$pagination}-bullet-active {
        background-color: $color-white;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
