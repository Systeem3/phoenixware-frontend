<template>
  <v-container id="validation-forms" fluid tag="section">
    <section class="mb-12 text-center">
      <h1 class="font-weight-light mb-2 headline">Características del Proyecto</h1>
      <span class="font-weight-light subtitle-1">Alcances, Objetivos y Aspectos de Seguridad</span>
    </section>
    <v-row>
      <v-col cols="12" md="6">
        <base-material-card
          color="primary"
          icon="mdi mdi-chart"
          title="Delimitación de Alcance:"
          class="py-2 px-5"
        >
          <v-form>
            <span class="font-weight-light ml-3">Descripción:</span>
          </v-form>
        </base-material-card>
      </v-col>
      <v-col cols="12" md="6"></v-col>
    </v-row>

    <!-- Segunda Fila-->
  </v-container>
</template>

<script>
//import { ValidationObserver } from 'vee-validate'
import VTextFieldWithValidation from '@/components/inputs/VTextFieldWithValidation'
import { mapActions } from 'vuex'

export default {
  data: () => {
    return {
      inputs: {},
    }
  },
  components: {
    // ValidationObserver,
  },
  computed: {},
  methods: {
    ...mapActions('projects', ['saveProject']),
  },
}
</script>
