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
          title="Delimitación de Alcance"
          class="py-2 px-5"
        >
          <v-form>
            <span
              class="card-title font-weight-light ml-4 mb-3 mt-6"
              style="font-size: 14px;"
              >Una estimación de acuerdo a los datos registrados:</span
            >
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
              <v-btn color="primary" v-clipboard="resultado"
                >COPIAR AL PORTAPAPELES</v-btn
              >
              <v-btn color="secondary" :to="{ name: 'ProjectUpdate' }"
                >EDITAR PROYECTO</v-btn
              >
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
            >Agregue en el alcance los aspectos siguientes que desee:</span
          >
        </v-row>
        <v-row dense justify="center" align="center" class="ml-3">
          <v-btn color="secondary" @click="dialog_o = true">OBJETIVOS</v-btn>
          <v-btn color="secondary" @click="dialog_r = true">REQUISITOS</v-btn>
          <v-btn color="secondary" @click="dialog_s = true">SEGURIDAD</v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialog_o"
      max-width="800px"
      class="px-5 py-3 mx-10"
      justify="center"
      align="center"
    >
      <base-material-card color="primary">
        <template v-slot:heading>
          <v-tabs
            v-model="tabs"
            background-color="transparent"
            slider-color="secondary"
          >
            <v-tab class="mr-3">
              <v-icon class="mr-2">mdi-chart-pie</v-icon>Agregar Objetivos
            </v-tab>
            <v-tab class="mr-3">
              <v-icon class="mr-2">mdi-comment-plus-outline</v-icon>Objetivos
              Registrados
            </v-tab>
          </v-tabs>
        </template>

        <v-tabs-items v-model="tabs" class="transparent">
          <v-tab-item v-for="n in 2" :key="n">
            <v-card-text>
              <template>
                <template v-if="n == 1">
                  <v-row
                    v-for="objetivo in objetivos"
                    :key="objetivo.id"
                    align="center"
                    justify="center"
                  >
                    <v-col align="center" justify="center">
                      <v-btn
                        color="secondary"
                        class="font-weight-light"
                        @click="agregarobj(objetivo.nombre)"
                        >{{ objetivo.nombre }}</v-btn
                      >
                    </v-col>
                  </v-row>
                </template>

                <template v-if="n == 2">
                  <v-row
                    v-for="objetivo in objetivos"
                    :key="objetivo.id"
                    align="center"
                    justify="center"
                  >
                    <v-col align="center" justify="center">
                      <v-col cols="9">
                        <div
                          class="font-weight-light"
                          v-text="objetivo.nombre"
                        />
                      </v-col>
                      <v-col class="text-right">
                        <v-btn
                          color="primary"
                          class="mx-1"
                          @click="deleteObjetivo(objetivo.id)"
                          >ELIMINAR</v-btn
                        >
                      </v-col>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-text-field
                      label="Nuevo Objetivo"
                      color="secondary"
                      outlined
                      filled
                      dense
                      v-model="caja1"
                      validate-on-blur
                      class="ml-3"
                    />
                  </v-row>
                  <v-row>
                    <v-btn
                      color="primary"
                      class="mx-1"
                      justify="center"
                      align="center"
                      @click="submit_objetivo(caja1)"
                      >AGREGAR OBJETIVO</v-btn
                    >
                  </v-row>
                </template>
              </template>
            </v-card-text>
          </v-tab-item>
        </v-tabs-items>
      </base-material-card>
    </v-dialog>
    <!-- Segunda Fila-->
  </v-container>
</template>

<script>
//import { ValidationObserver } from 'vee-validate'
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => {
    return {
      dialog_o: false,
      dialog_r: false,
      dialog_s: false,
      alcance: '',
      caja1: '',
      caja2: '',
      caja3: '',
      inputs: {
        titulo: '',
        tipo: '',
        desc: '',
        fechaf: '',
        fechai: '',
        presupuesto: '',
        costo: '',
      },

      tabs: 0,
      objetivos1: {},
      objetivos2: '',
      tasks: {
        0: [
          {
            text:
              'Sign contract for "What are conference organizers afraid of?"',
            value: false,
          },
        ],
        1: [
          {
            text:
              'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
            value: true,
          },
          {
            text:
              'Sign contract for "What are conference organizers afraid of?"',
            value: false,
          },
        ],
      },
    }
  },
  created() {
    this.fetchObjetivos(this.$route.params.id_project)
    this.fetchRequisitos(this.$route.params.id_project)
    this.fetchSeguridad(this.$route.params.id_project)

    this.objetivos1 = this.fetchObjetivos(this.$route.params.id_project)
    console.log(this.objetivos1)
  },
  components: {
    // ValidationObserver,
  },
  computed: {
    ...mapGetters('projects', [
      'objetivo',
      'requisito',
      'seguridad',
      'objetivos',
      'requisitos',
      'seguridades',
    ]),

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
        this.objetivos2 +
        '\nMientras que los Requisitos propuestos del proyecto son: ' +
        '\nEn términos de Seguridad, el proyecto incorporará los siguientes aspectos: ' +
        'El costo estimado para elaborar el proyecto es de: ' +
        this.costo +
        ' USD. ' +
        'El tiempo estimado para elaborar el proyecto es desde la fecha: ' +
        this.dateCreated +
        ' hasta la fecha: ' +
        this.dateFinished +
        ' . Se cuenta con un presupuesto de: ' +
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
      'fetchObjetivos',
      'fetchRequisitos',
      'fetchSeguridad',
      'fetchObjetivo',
      'fetchRequisito',
      'fetchSeguridad',
      'createObjetivo',
      'createRequisito',
      'createSeguridad',
      'deleteObjetivo',
      'deleteSeguridad',
      'deleteRequisito',
    ]),

    async deleteObjetivo(item) {
      const response = await this.$confirm(
        this.$t('common.DO_YOU_REALLY_WANT_TO_DELETE_THIS_ITEM'),

        {
          title: this.$t('common.WARNING'),
          buttonTrueText: this.$t('common.DELETE'),
          buttonFalseText: this.$t('common.CANCEL'),
          buttonTrueColor: 'secondary',
          buttonFalseColor: 'primary',
        }
      )
      if (response) {
        await this.deleteObjetivo(item)
        await this.fetchObjetivos(this.$route.params.id_project)
      }
    },
    async deleteRequisito(item) {
      const response = await this.$confirm(
        this.$t('common.DO_YOU_REALLY_WANT_TO_DELETE_THIS_ITEM'),

        {
          title: this.$t('common.WARNING'),
          buttonTrueText: this.$t('common.DELETE'),
          buttonFalseText: this.$t('common.CANCEL'),
          buttonTrueColor: 'secondary',
          buttonFalseColor: 'primary',
        }
      )
      if (response) {
        await this.deleteRequisito(item)
        await this.fetchRequisitos(this.$route.params.id_project)
      }
    },
    async deleteSeguridad(item) {
      const response = await this.$confirm(
        this.$t('common.DO_YOU_REALLY_WANT_TO_DELETE_THIS_ITEM'),

        {
          title: this.$t('common.WARNING'),
          buttonTrueText: this.$t('common.DELETE'),
          buttonFalseText: this.$t('common.CANCEL'),
          buttonTrueColor: 'secondary',
          buttonFalseColor: 'primary',
        }
      )
      if (response) {
        await this.deleteSeguridad(item)
        await this.fetchSeguridades(this.$route.params.id_project)
      }
    },

    async submit_objetivo() {
      await this.createObjetivo({
        nombre: this.caja1,
        proyecto_id: this.$route.params.id_project,
      })
    },
    async submit_requisito() {
      await this.createRequisito({
        nombre: this.caja2,
        proyecto_id: this.$route.params.id_project,
      })
    },
    async submit_seguridad() {
      await this.createSeguridad({
        nombre: this.caja3,
        proyecto_id: this.$route.params.id_project,
      })
    },
    agregarobj(item) {
      this.objetivos2 = '\n' + this.objetivos2 + '\n' + item
      this.dialog_o = false
    },
  },

  async mounted() {
    await this.fetchProject(this.$route.params.id_project)
  },
}
</script>
