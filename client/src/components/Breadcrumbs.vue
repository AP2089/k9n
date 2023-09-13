<script lang="ts" setup>
export interface Item {
  id: number;
  title: string;
  url: string;
}

export interface Props {
  items: Item[] | undefined;
}

defineProps<Props>();
</script>

<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__center center">
      <div class="breadcrumbs__narrow narrow">
        <nav class="breadcrumbs__nav">
          <ul class="breadcrumbs__list">
            <li
              class="breadcrumbs__item"
              v-for="(item, index) in items"
              :key="item.id"
            >
              <router-link
                :to="item.url"
                v-if="item.url"
                class="breadcrumbs__link"
              >
                <img
                  v-if="index === 0"
                  src="@images/icons/home.svg"
                  alt="Home"
                  loading="lazy"
                  class="breadcrumbs__icon"
                />
                {{ item.title }}
              </router-link>

              <div v-else class="breadcrumbs__title">{{ item.title }}</div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  padding: 2rem 0;

  &__list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 1rem 0 0;
    padding: 0;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: $color-global;
    font-weight: 400;

    &:after {
      content: "/";
      margin-left: 1rem;
    }

    &:last-child {
      margin-right: 0;

      &:after {
        display: none;
      }
    }
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: $color-global;
    text-decoration: none;
    transition: color 0.5s ease 0s;

    &:hover {
      text-decoration: none;
      color: $color-success;
    }
  }

  &__icon {
    width: 2.3rem;
    height: 1.9rem;
    margin-right: 1rem;
  }
}
</style>
