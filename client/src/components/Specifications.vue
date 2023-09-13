<script lang="ts" setup>
import imageSrcset from "@/utils/imageSrcset";

export interface Item {
  id: number;
  title: string;
  image: string;
}

export interface Background {
  any: string[];
  webp: string[];
}

export interface Props {
  background: Background | undefined;
  items: Item[] | undefined;
}

defineProps<Props>();
</script>

<template>
  <div class="specifications">
    <picture class="specifications__bg">
      <source type="image/webp" :srcset="imageSrcset(background?.webp)" />
      <img
        :src="background?.any[0]"
        :srcset="imageSrcset(background?.any)"
        alt="background"
        class="specifications__bg-img"
        loading="lazy"
      />
    </picture>
    <div class="specifications__center center">
      <div class="specifications__list">
        <div class="specifications__item" v-for="item in items" :key="item.id">
          <picture class="specifications__picture">
            <img
              :src="item.image"
              :alt="item.title"
              loading="lazy"
              class="specifications__img"
            />
          </picture>
          <div class="specifications__title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.specifications {
  $rs: &;
  padding: 10rem 0;
  background-color: $color-global;
  position: relative;

  &__bg {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0.1;

    &-img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0 2rem;
    position: relative;
    z-index: 1;
  }

  &__picture {
    display: block;
    margin-bottom: 2.3rem;
  }

  &__img {
    display: block;
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
  }

  &__title {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.8rem;
    text-align: center;
    color: $color-white;
  }
}
</style>
