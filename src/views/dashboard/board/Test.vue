<template>
  <AppLayout>
    <Kanban />
  </AppLayout>
</template>

<script>
import AppLayout from './AppLayout.vue'
import Kanban from './Kanban.vue'

export default {
  name: 'Test',

  components: {
    AppLayout,
    Kanban,
  },
}
</script>
