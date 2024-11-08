<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> GRAMify </q-item-label>

        <EssentialLink
          v-for="item in listMenu"
          :key="item.title"
          v-bind="item"
        />

        <div>
          <q-list class="rounded-borders">
            <q-expansion-item
              expand-separator
              label="Present"
              icon="fitness_center"
              caption="U1 - U9"
            >
              <EssentialLink
                v-for="link in menuListU1U9"
                :key="link.title"
                v-bind="link"
                class="q-ml-lg"
              />
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              label="Past"
              icon="fitness_center"
              caption="U10 - U14"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem, eius reprehenderit eos corrupti commodi magni quaerat
                  ex numquam, dolorum officiis modi facere maiores architecto
                  suscipit iste eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container style="height: 100vh">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  IEssentialLinkProps,
} from 'components/EssentialLink.vue';
import { mainMenuList } from 'src/mock/contents';
import { useMainMenuStore } from 'src/stores/main-menu/useMainMenuStore';

const menuStore = useMainMenuStore();
menuStore.initializeSortedUnits(); // Call once to initialize if not done automatically
const menuListU1U9: IEssentialLinkProps[] = menuStore.getItemMenu('u1', 'u9');

defineOptions({
  name: 'MainLayout',
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const listMenu: IEssentialLinkProps[] = mainMenuList;
</script>
