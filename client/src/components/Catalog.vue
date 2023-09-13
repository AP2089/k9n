<script lang="ts" setup>
import imageSrcset from "@/utils/imageSrcset";

export interface Item {
  id: number;
  title: string;
  url: string;
  image: {
    any: string[];
    webp: string[];
  };
}

export interface Props {
  heading: string | undefined;
  items: Item[] | undefined;
}

defineProps<Props>();
</script>

<template>
  <div class="catalog">
    <div class="catalog__center center">
      <div class="catalog__heading heading-base">{{ heading }}</div>
      <div class="catalog__list">
        <router-link
          :to="item.url"
          class="catalog__item"
          v-for="item in items"
          :key="item.id"
        >
          <picture class="catalog__picture">
            <source type="image/webp" :srcset="imageSrcset(item.image.webp)" />
            <img
              :src="item.image.any[0]"
              :srcset="imageSrcset(item.image.any)"
              :alt="item.title"
              class="catalog__img"
              loading="lazy"
            />
          </picture>
          <div class="catalog__title">{{ item.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  $rs: &;
  background-color: $color-basic;
  padding: 6rem 0 10rem 0;

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem 3rem;
    width: 111rem;
    margin: 0 auto;
  }

  &__item {
    text-decoration: none;
    position: relative;
    background-color: $color-white;
    box-shadow: 0 0.2rem 0.5rem $color-excess;
    border-radius: 0.6rem;
    overflow: hidden;
    transition: box-shadow 0.5s ease 0s;

    &:hover {
      text-decoration: none;
      box-shadow: 0 0.8rem 1.2rem $color-additional;

      #{$rs}__title {
        color: $color-success;

        &:after {
          background-color: $color-success;
        }
      }
    }
  }

  &__picture {
    display: block;
  }

  &__img {
    display: block;
    width: 25.5rem;
    height: 33rem;
  }

  &__title {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.3rem;
    color: $color-global;
    width: 100%;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: color 0.5s ease 0s;

    &:after {
      display: block;
      content: "";
      width: 4rem;
      height: 0.2rem;
      background-color: transparent;
      margin-top: 0.8rem;
      transition: background-color 0.5s ease 0s;
    }
  }
}
</style>
