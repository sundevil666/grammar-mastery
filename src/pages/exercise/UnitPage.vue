<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import unitsDataList from 'src/mock/units';

const route = useRoute();
const unitId = computed(() => route?.params?.unitId);

const unit = computed(() => {
  return unitsDataList.find((unit) => unit.id === unitId.value);
});
</script>

<template>
  <div class="q-py-md full-height UnitPage">
    <q-scroll-area class="full-height">
      <div class="q-px-md">
        <h4 class="q-mb-md">{{ unit?.title }}</h4>
        {{ unit }}
      </div>
    </q-scroll-area>
  </div>
</template>

<style scoped></style>
