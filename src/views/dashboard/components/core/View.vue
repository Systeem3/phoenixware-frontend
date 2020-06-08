<template>
  <v-content>
    <dashboard-core-breadcrumbs />

    <router-view />

    <dashboard-core-footer />
  </v-content>
</template>

<script>
export default {
  name: 'DashboardCoreView',

  components: {
    DashboardCoreFooter: () => import('./Footer'),

    DashboardCoreBreadcrumbs: () => import('./Breadcrumbs'),
  },
}
</script>
