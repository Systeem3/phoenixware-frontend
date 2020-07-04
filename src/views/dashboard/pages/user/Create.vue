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
              class="card-title font-weight-light ml-4 mb-3"
              style="font-size: 15;"
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
              <v-btn color="primary" v-clipboard="resultado">
                COPIAR AL PORTAPAPELES
              </v-btn>
              <v-btn color="secondary" :to="{ name: 'ProjectUpdate' }">
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
    <v-dialog v-model="dialog_o">
      <v-col cols="12" md="6">
        <base-material-card class="px-5 py-3">
          <template v-slot:heading>
            <v-tabs
              v-model="tabs"
              background-color="transparent"
              slider-color="white"
            >
              <span
                class="subheading font-weight-light mx-3"
                style="align-self: center;"
                >Tasks:</span
              >
              <v-tab class="mr-3">
                <v-icon class="mr-2">
                  mdi-bug
                </v-icon>
                Bugs
              </v-tab>
              <v-tab class="mr-3">
                <v-icon class="mr-2">
                  mdi-code-tags
                </v-icon>
                Website
              </v-tab>
              <v-tab>
                <v-icon class="mr-2">
                  mdi-cloud
                </v-icon>
                Server
              </v-tab>
            </v-tabs>
          </template>

          <v-tabs-items v-model="tabs" class="transparent">
            <v-tab-item v-for="n in 3" :key="n">
              <v-card-text>
                <template v-for="(task, i) in tasks[tabs]">
                  <v-row :key="i" align="center">
                    <v-col cols="1">
                      <v-list-item-action>
                        <v-checkbox v-model="task.value" color="secondary" />
                      </v-list-item-action>
                    </v-col>

                    <v-col cols="9">
                      <div class="font-weight-light" v-text="task.text" />
                    </v-col>

                    <v-col cols="2" class="text-right">
                      <v-icon class="mx-1">
                        mdi-pencil
                      </v-icon>
                      <v-icon color="error" class="mx-1">
                        mdi-close
                      </v-icon>
                    </v-col>
                  </v-row>
                </template>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </base-material-card>
      </v-col>
    </v-dialog>
    <!-- Segunda Fila-->
  </v-container>
</template>

<script>
//import { ValidationObserver } from 'vee-validate'
//import PagesPlanCard from '@/views/pages/components/PlanCard'

import { mapActions } from 'vuex'

export default {
  data: () => {
    return {
      //id_project: this.$route.params.id_project,
      dialog_o: false,
      dialog_r: false,
      dialog_s: false,
      // alcance: '',

      inputs: {
        titulo: '',
        tipo: '',
        desc: '',
        fechaf: '',
        fechai: '',
        presupuesto: '',
        costo: '',
      },

      headers: [
        {
          sortable: false,
          text: 'ID',
          value: 'id',
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name',
        },
        {
          sortable: false,
          text: 'Salary',
          value: 'salary',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Country',
          value: 'country',
          align: 'right',
        },
        {
          sortable: false,
          text: 'City',
          value: 'city',
          align: 'right',
        },
      ],
      items: [
        {
          id: 1,
          name: 'Dakota Rice',
          country: 'Niger',
          city: 'Oud-Tunrhout',
          salary: '$35,738',
        },
        {
          id: 2,
          name: 'Minerva Hooper',
          country: 'Curaçao',
          city: 'Sinaai-Waas',
          salary: '$23,738',
        },
        {
          id: 3,
          name: 'Sage Rodriguez',
          country: 'Netherlands',
          city: 'Overland Park',
          salary: '$56,142',
        },
        {
          id: 4,
          name: 'Philip Chanley',
          country: 'Korea, South',
          city: 'Gloucester',
          salary: '$38,735',
        },
        {
          id: 5,
          name: 'Doris Greene',
          country: 'Malawi',
          city: 'Feldkirchen in Kārnten',
          salary: '$63,542',
        },
      ],
      menu: false,
      plans: [
        {
          best: true,
          heading: 'Small Company',
          icon: 'mdi-home',
          title: '29$',
          text:
            'This is good if your company size is between 2 and 10 Persons.',
        },
        {
          heading: 'Freelancer',
          icon: 'mdi-sofa',
          title: 'Free',
          text:
            'This is good if your company size is between 2 and 10 Persons.',
        },
      ],
      tabs: 0,
      tasks: {
        0: [
          {
            text:
              'Sign contract for "What are conference organizers afraid of?"',
            value: true,
          },
          {
            text:
              'Lines From Great Russian Literature? Or E-mails From My Boss?',
            value: false,
          },
          {
            text:
              'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
            value: false,
          },
          {
            text: 'Create 4 Invisible User Experiences you Never Knew About',
            value: true,
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
        2: [
          {
            text:
              'Lines From Great Russian Literature? Or E-mails From My Boss?',
            value: false,
          },
          {
            text:
              'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
            value: true,
          },
          {
            text:
              'Sign contract for "What are conference organizers afraid of?"',
            value: true,
          },
        ],
      },
      timelines: [
        {
          chip: 'Some title',
          color: 'error',
          icon: 'mdi-briefcase',
          text:
            "Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.",
          subtext: '11 hours ago via twitter',
        },
        {
          chip: 'Another one',
          color: 'success',
          icon: 'mdi-puzzle',

          text:
            'Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....',
        },
        {
          chip: 'Another title',
          color: 'info',
          icon: 'mdi-fingerprint',
          text:
            "Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM. What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye",
          action: 'info',
          actionIcon: 'mdi-wrench',
          actions: ['Action', 'Another Action', 'Something else here'],
        },
      ],
    }
  },
  components: {
    // ValidationObserver,
    // PagesPlanCard,
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

  //props: ['id_project'],
  async mounted() {
    await this.fetchProject(this.$route.params.id_project)
  },
}
</script>
