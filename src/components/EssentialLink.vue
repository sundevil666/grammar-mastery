<template>
  <q-item clickable tag="router-link" :to="link" exact>
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
defineOptions({
  name: 'EssentialLink',
});

export interface IEssentialLinkProps {
  title: string;
  icon: string;
  link: { name: string; params?: { unitId: string } };
  caption?: string | '';
}

withDefaults(defineProps<IEssentialLinkProps>(), {
  title: '',
  icon: '',
  link: () => ({ name: 'Homepage' }),
  caption: '',
});
</script>
