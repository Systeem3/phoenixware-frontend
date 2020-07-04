<template>
  <v-container id="validation-forms" fluid tag="section">
    <section class="mb-12 text-center">
      <h1 class="font-weight-light mb-2 headline">
        Características del Proyecto
      </h1>
      <span class="font-weight-light subtitle-1"
        >Alcances, Objetivos, Requisitos y Aspectos de Seguridad</span
      >
    </section>
    <v-divider />

    <v-row>
      <v-col cols="12" md="6">
        <base-material-card
          color="primary"
          icon="mdi mdi-arrow-up-bold-hexagon-outline"
          title="Delimitación de Alcance:"
          subtitle="Una estimación de acuerdo a los datos del proyecto"
          class="py-2 px-5"
        >
          <v-form>
            <v-textarea
              filled
              auto-grow
              name="input-7-4"
              label="Alcance del Proyecto"
              v-model="resultado"
              disabled
              class="mt-4"
            ></v-textarea>
            <v-spacer />
            <v-row justify="center" align="center">
              <v-btn color="primary" v-clipboard="resultado">
                COPIAR AL PORTAPAPELES
              </v-btn>
              <v-btn
                color="secondary"
                :to="{ name: 'ProjectUpdate', params: { id_project } }"
              >
                EDITAR PROYECTO
              </v-btn>
            </v-row>
          </v-form>
        </base-material-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          label="Título del Proyecto"
          color="secondary"
          outlined
          disabled
          filled
          dense
          v-model="name"
          validate-on-blur
          class="ml-3"
        />
        <v-text-field
          label="Descripción"
          color="secondary"
          outlined
          disabled
          filled
          dense
          v-model="description"
          validate-on-blur
          class="ml-3"
        />
        <v-text-field
          label="Costo del Proyecto Registrado"
          color="secondary"
          outlined
          disabled
          filled
          dense
          v-model="costo"
          validate-on-blur
          class="ml-3"
        />
        <v-text-field
          label="Fecha de Inicio del Proyecto"
          color="secondary"
          outlined
          dense
          disabled
          filled
          v-model="dateCreated"
          validate-on-blur
          class="ml-3"
        />
        <v-text-field
          label="Fecha de Finalización del Proyecto"
          color="secondary"
          outlined
          disabled
          filled
          dense
          v-model="dateFinished"
          validate-on-blur
          class="ml-3"
        />
        <v-text-field
          label="Presupuesto Asignado"
          color="secondary"
          outlined
          disabled
          filled
          dense
          v-model="presupuesto"
          validate-on-blur
          class="ml-3"
        />
        <v-row dense justify="center" align="center" class="ml-3">
          <span class="font-weight-light subtitle-1 text-center mb-6"
            >Agregue al alcance los items en los aspectos de:</span
          >
        </v-row>
        <v-row dense justify="center" align="center" class="ml-3">
          <v-btn color="secondary" @click="dialog_o = true">OBJETIVOS</v-btn>
          <v-btn color="secondary" @click="dialog_r = true">REQUISITOS</v-btn>
          <v-btn color="secondary" @click="dialog_s = true">SEGURIDAD</v-btn>
        </v-row>
      </v-col>
    </v-row>

    <!-- Segunda Fila-->
  </v-container>
</template>

<script>
//import { ValidationObserver } from 'vee-validate'

import { mapActions } from 'vuex'

export default {
  data: () => {
    return {
      dialog_o: false,
      dialog_r: false,
      dialog_s: false,
      alcance: '',

      inputs: {
        titulo: '',
        tipo: '',
        desc: '',
        fechaf: '',
        fechai: '',
        presupuesto: '',
        costo: '',
      },
      id_project: this.$route.params.id_project,
    }
  },
  components: {
    // ValidationObserver,
  },
  computed: {
    resultado() {
      return (
        this.name +
        '\n' +
        'Es un proyecto que pertenece al rubro de: ' +
        (this.type == 'S' ? 'Servicios.' : 'Productos.') +
        '\n' +
        this.description +
        '\n' +
        'Los Objetivos planteados para este proyecto son: ' +
        '\n' +
        'Mientras que los Requisitos propuestos del proyecto son: ' +
        '\n' +
        'En términos de Seguridad, el proyecto incorporará los siguientes aspectos: ' +
        '\n' +
        'El costo estimado para elaborar el proyecto es de: ' +
        this.costo +
        ' USD. ' +
        'El tiempo estimado para elaborar el proyecto es desde la fecha: ' +
        this.dateCreated +
        ' hasta la fecha: ' +
        this.dateFinished +
        ' .Se cuenta con un presupuesto de: ' +
        this.presupuesto +
        ' USD ' +
        'para la elaboración del proyecto. '
      )
    },
    name: {
      get() {
        return this.$store.state.projects.project.nombre
      },
      set(value) {
        const data = {
          key: 'name',
          value,
        }
        this.addProjectData(data)
      },
    },
    type: {
      get() {
        return this.$store.state.projects.project.tipo
      },
      set(value) {
        const data = {
          key: 'type',
          value,
        }
        this.addProjectData(data)
      },
    },
    presupuesto: {
      get() {
        return this.$store.state.projects.project.presupuesto
      },
      set(value) {
        const data = {
          key: 'presupuesto',
          value,
        }
        this.addProjectData(data)
      },
    },
    dateCreated: {
      get() {
        return this.$store.state.projects.project.fecha_inicio
      },
      set(value) {
        const data = {
          key: 'dateCreated',
          value,
        }
        this.addProjectData(data)
      },
    },
    dateFinished: {
      get() {
        return this.$store.state.projects.project.fecha_finalizacion
      },
      set(value) {
        const data = {
          key: 'dateFinished',
          value,
        }
        this.addProjectData(data)
      },
    },
    methodology: {
      get() {
        return this.$store.state.projects.project.metodologia
      },
      set(value) {
        const data = {
          key: 'methodology',
          value,
        }
        this.addProjectData(data)
      },
    },
    description: {
      get() {
        return this.$store.state.projects.project.descripcion
      },
      set(value) {
        const data = {
          key: 'description',
          value,
        }
        this.addProjectData(data)
      },
    },
    alcance: {
      get() {
        return this.$store.state.projects.project.alcance
      },
      set(value) {
        const data = {
          key: 'alcance2',
          value,
        }
        this.addProjectData(data)
      },
    },
    costo: {
      get() {
        return this.$store.state.projects.project.costo
      },
      set(value) {
        const data = {
          key: 'costo',
          value,
        }
        this.addProjectData(data)
      },
    },
    state: {
      get() {
        return this.$store.state.projects.project.estado
      },
      set(value) {
        const data = {
          key: 'state',
          value,
        }
        this.addProjectData(data)
      },
    },
  },
  methods: {
    ...mapActions('projects', [
      'fetchProject',
      'addProjectData',
      'saveProject',
    ]),
  },

  props: ['id_project'],
  async mounted() {
    await this.fetchProject(this.id_project)
  },
}
</script>
