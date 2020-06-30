<template>
  <v-app-bar id="app-bar" absolute app color="transparent" flat height="75">
    <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="
        $vuetify.breakpoint.smAndDown
          ? setDrawer(!drawer)
          : $emit('input', !value)
      "
    >
      <v-icon v-if="value">mdi-view-quilt</v-icon>

      <v-icon v-else>mdi-dots-vertical</v-icon>
    </v-btn>

    <v-toolbar-title class="hidden-sm-and-down font-weight-light" v-text="$route.name" />

    <v-spacer />

    <div class="mx-3" />

    <v-btn class="ml-2" min-width="0" text>
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <v-menu bottom left offset-y origin="top right" transition="scale-transition">
      <template v-slot:activator="{ attrs, on }">
        <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
          <v-badge color="red" overlap bordered>
            <template v-slot:badge>
              <span>5</span>
            </template>

            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list :tile="false" nav>
        <div>
          <app-bar-item v-for="(n, i) in notifications" :key="`item-${i}`">
            <v-list-item-title v-text="n" />
          </app-bar-item>
        </div>
      </v-list>
    </v-menu>

    <v-menu bottom left min-width="200" offset-y origin="top right" transition="scale-transition">
      <template v-slot:activator="{ attrs, on }">
        <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list :tile="false" flat nav>
        <template v-for="(p, i) in profile">
          <v-divider v-if="p.divider" :key="`divider-${i}`" class="mb-2 mt-2" />

          <app-bar-item v-else :key="`item-${i}`">
            <v-list-item-title v-text="p.title" />
          </app-bar-item>
        </template>
      </v-list>
      <v-icon class="toolbar-items" color @click="logout">mdi-power</v-icon>
    </v-menu>
  </v-app-bar>
</template>

<script>
// Components
import { VHover, VListItem } from 'vuetify/lib'

// Utilities
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'DashboardCoreAppBar',

  components: {
    AppBarItem: {
      render(h) {
        return h(VHover, {
          scopedSlots: {
            default: ({ hover }) => {
              return h(
                VListItem,
                {
                  attrs: this.$attrs,
                  class: {
                    'black--text': !hover,
                    'white--text secondary elevation-12': hover,
                  },
                  props: {
                    activeClass: '',
                    dark: hover,
                    link: true,
                    ...this.$attrs,
                  },
                },
                this.$slots.default
              )
            },
          },
        })
      },
    },
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    notifications: [
      'Tienes una reunión mañana',
      'No has actualizado tu actividad',
      'Karen quiere enviarte un mensaje',
      'Another Notification',
      'Another one',
    ],
    profile: [
      { title: 'Perfil' },
      { title: 'Opciones' },
      { divider: true },
      { title: 'Cerrar Sesión' },
    ],
  }),

  computed: {
    ...mapState(['drawer']),
  },

  methods: {
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
    }),
    logout({ username, password }) {
      this.$store
        .dispatch('auth/logout', { username, password })
        .then(() => this.$router.push('/login/identifier'))
    },
  },
}
</script>
