<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row>
      <v-col cols="12">
        <div class="font-weight-light mt-1" style="font-size: 25px;">
          Artefactos del proyecto
        </div>
      </v-col>
      <v-col sm="12" md="4" v-for="artifact in artifacts" :key="artifact.id">
        <v-card color="secondary" dark>
          <v-card-title class=" justify-center font-weight-light headline">{{ artifact.nombre }}</v-card-title>
          <v-card-text
            class="body-1 text-center mb-3 font-weight-light grey--text"
            >{{ artifact.descripcion }}
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="letsGo(artifact.enlace)">Revisar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <ErrorMessage />
    <SuccessMessage />
  </v-container>
</template>

<script>
// Utilities
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'DashboardDashboard',

  data() {
    return {}
  },

  computed: {
    ...mapGetters('artifacts', ['artifacts']),
  },
  created() {
    console.log(this.$route.query.categoria)
    this.fetchAtifacts(this.$route.params.id_project)
    //this.fetchProcesses(this.$route.params.id_project)
  },
  methods: {
    ...mapActions('artifacts', ['fetchAtifacts']),
    complete(index) {
      this.list[index] = !this.list[index]
    },
    letsGo(value) {
      window.open(value, '_blank')
    },
  },
}
</script>
