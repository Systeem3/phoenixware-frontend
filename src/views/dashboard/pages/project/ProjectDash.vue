<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row>
      <v-col cols="12" class="mb-3">
        <div
          class="font-weight-light mt-1"
          style="font-size: 25px;"
        >Vista General del Proyecto -¿Qué harás hoy?</div>
      </v-col>
    </v-row>
    <div
      class="font-weight-light mt-1"
      align="center"
      justify="center"
      style="font-size: 18px;"
    >Selecciona una Etapa:</div>
    <v-row justify="center" align="center" dense cols="12">
      <base-material-card color="pink lighten-1" class="mx-4" image hover-reveal>
        <template v-slot:reveal-actions>
          <v-tooltip bottom>
            <template v-slot:activator="{ attrs, on }">
              <v-btn class="mx-1" v-bind="attrs" icon v-on="on">
                <v-icon>mdi-folder-multiple</v-icon>
              </v-btn>
            </template>

            <span :to="{ name: 'Stages' }">Ver Procesos</span>
          </v-tooltip>
        </template>

        <v-card-title class="justify-center font-weight-light">Inicio</v-card-title>
      </base-material-card>

      <base-material-card color="lime darken-1" class="mx-4" image hover-reveal>
        <template v-slot:reveal-actions>
          <v-tooltip bottom>
            <template v-slot:activator="{ attrs, on }">
              <v-btn class="mx-1" v-bind="attrs" icon v-on="on">
                <v-icon>mdi-folder-multiple</v-icon>
              </v-btn>
            </template>

            <span :to="{ name: 'Stages' }">Ver Procesos</span>
          </v-tooltip>
        </template>

        <v-card-title class="justify-center font-weight-light">Planificación</v-card-title>
      </base-material-card>

      <base-material-card color="indigo accent-2" class="mx-4" image hover-reveal>
        <template v-slot:reveal-actions>
          <v-tooltip bottom>
            <template v-slot:activator="{ attrs, on }">
              <v-btn class="mx-1" v-bind="attrs" icon v-on="on">
                <v-icon>mdi-folder-multiple</v-icon>
              </v-btn>
            </template>

            <span :to="{ name: 'Stages' }">Ver Procesos</span>
          </v-tooltip>
        </template>

        <v-card-title class="justify-center font-weight-light">Desarrollo</v-card-title>
      </base-material-card>

      <base-material-card color="green darken-2" class="mx-4" image hover-reveal>
        <template v-slot:reveal-actions>
          <v-tooltip bottom>
            <template v-slot:activator="{ attrs, on }">
              <v-btn class="mx-1" v-bind="attrs" icon v-on="on">
                <v-icon>mdi-folder-multiple</v-icon>
              </v-btn>
            </template>

            <span :to="{ name: 'Stages' }">Ver Procesos</span>
          </v-tooltip>
        </template>

        <v-card-title class="justify-center font-weight-light">Control</v-card-title>
      </base-material-card>
      <base-material-card color="purple lighten-2" class="mx-4" image hover-reveal>
        <template v-slot:reveal-actions>
          <v-tooltip bottom>
            <template v-slot:activator="{ attrs, on }">
              <v-btn class="mx-1" v-bind="attrs" icon v-on="on">
                <v-icon>mdi-folder-multiple</v-icon>
              </v-btn>
            </template>

            <span :to="{ name: 'Stages' }">Ver Procesos</span>
          </v-tooltip>
        </template>

        <v-card-title class="justify-center font-weight-light">Cierre</v-card-title>
      </base-material-card>
    </v-row>
    <v-divider />
    <v-row class="mx-auto" justify="center" dense align="center">
      <v-btn color="secondary">ARTEFACTOS</v-btn>
      <v-btn color="secondary">REUNIONES</v-btn>
      <v-btn color="secondary">PROCESOS</v-btn>
      <v-btn color="secondary">REQUISITOS</v-btn>
      <v-btn color="secondary">MIEMBROS</v-btn>
      <v-btn color="secondary">RIESGOS</v-btn>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <v-card class="mx-auto mt-12" max-width="500">
            <v-img height="250" src="@/assets/project.jpg"></v-img>
          </v-card>
        </v-row>
        <v-row>
          <v-row class="mx-auto mt-2" justify="center" dense align="center">
            <div class="card-title font-weight-light ml-4 mb-3" style="font-size: 15;">ESTIMACIONES:</div>
          </v-row>
          <v-row class="mx-auto" justify="center" dense align="center">
            <v-btn color="primary">TIEMPOS</v-btn>
            <v-btn color="primary">COSTOS</v-btn>
            <v-btn color="primary">ALCANCE</v-btn>
          </v-row>
        </v-row>
      </v-col>
      <v-col>
        <base-material-card title="Estado del Proyecto:" icon="mdi-clipboard-text" color="primary">
          <v-row>
            <div class="card-title font-weight-bold ml-4" style="font-size: 15px;">Nombre:</div>
          </v-row>

          <v-row>
            <div class="card-title font-weight-bold ml-4" style="font-size: 15px;">Presupuesto:</div>
          </v-row>

          <v-row>
            <div class="card-title font-weight-bold ml-4" style="font-size: 15px;">Costo:</div>
          </v-row>
          <v-row>
            <div class="card-title font-weight-bold ml-4" style="font-size: 15px;">Miembros:</div>
          </v-row>
          <v-row>
            <div class="card-title font-weight-bold ml-4" style="font-size: 15px;">Líder:</div>
          </v-row>
          <v-row>
            <div class="card-title font-weight-bold ml-4" style="font-size: 15px;">Metodología:</div>
          </v-row>
          <v-row>
            <div
              class="card-title font-weight-bold ml-4"
              style="font-size: 15px;"
            >Actividades Asignadas:</div>
          </v-row>
          <v-row>
            <div
              class="card-title font-weight-bold ml-4"
              style="font-size: 15px;"
            >Actividades Asignadas:</div>
          </v-row>
          <v-row>
            <div
              class="card-title font-weight-bold ml-4"
              style="font-size: 15px;"
            >Actividades Completadas:</div>
          </v-row>
          <v-row>
            <div
              class="card-title font-weight-bold ml-4"
              style="font-size: 15px;"
            >Procesos Instanciados:</div>
          </v-row>
          <v-row>
            <div class="card-title font-weight-bold ml-4" style="font-size: 15px;">Fecha de Inicio:</div>
          </v-row>
          <v-row>
            <div
              class="card-title font-weight-bold ml-4"
              style="font-size: 15px;"
            >Fecha de Finalización:</div>
          </v-row>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dataCompletedTasksChart: {
        data: {},
      },
    }
  },

  computed: {},

  methods: {},

  created() {
    // this.fetchProjects()
  },
}
</script>
