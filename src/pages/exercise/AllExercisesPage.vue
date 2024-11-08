<script setup lang="ts">
import EssentialLink, {
  IEssentialLinkProps,
} from 'components/EssentialLink.vue';
import { useRoute } from 'vue-router';
import { useMainMenuStore } from 'src/stores/main-menu/useMainMenuStore';

const route = useRoute();
const menuStore = useMainMenuStore();

menuStore.initializeSortedUnits(); // Call once to initialize if not done automatically
const menuListU1U9: IEssentialLinkProps[] = menuStore.getItemMenu('u1', 'u9');
</script>

<template>
  <div
    v-if="route.name === 'AllExercisesPage'"
    class="AllExerciseSPage q-py-md full-height"
  >
    <q-scroll-area class="full-height">
      <div class="q-px-md">
        <h4 class="q-mb-md">AllExerciseSPage</h4>

        <ul>
          <li>
            <div class="title">Present</div>
            <div class="row">
              <EssentialLink
                v-for="link in menuListU1U9"
                :key="link.title"
                v-bind="link"
                class="col-6"
              />
            </div>
          </li>
        </ul>
      </div>
    </q-scroll-area>
  </div>
  <router-view v-else />
</template>

<style scoped></style>
