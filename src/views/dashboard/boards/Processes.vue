<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row>
      <v-col cols="12">
        <div class="font-weight-light mt-1" style="font-size: 25px;">
          Procesos del Proyecto - ¿Qué harás hoy?
        </div>
      </v-col>

      <v-col
        v-for="(processes, i) in processes"
        :key="i"
        cols="12"
        sm="8"
        md="4"
      >
        <v-card :color="processes.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="headline"
                v-text="processes.name"
              ></v-card-title>
              <v-card-subtitle v-text="processes.type"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="processes.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Utilities
import { mapGetters } from 'vuex'
export default {
  name: 'DashboardDashboard',

  data() {
    return {
      items: [
        {
          color: '#1F7087',
          //src: require('../assets/foster.jpg'),
          title: 'Estimación de los criterios de éxito del proyecto.',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          //src: require('../assets/halcyon.png'),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],

      dataCompletedTasksChart: {
        data: {
          labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
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
      items2: [
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
      sales: [
        {
          country: 'USA',
          flag:
            'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/US.png',
          salesInM: 2920,
        },
        {
          country: 'Germany',
          flag:
            'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/DE.png',
          salesInM: 1300,
        },
        {
          country: 'Australia',
          flag:
            'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/AU.png',
          salesInM: 760,
        },
        {
          country: 'United Kingdom',
          flag:
            'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/GB.png',
          salesInM: 690,
        },
        {
          country: 'Romania',
          flag:
            'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/RO.png',
          salesInM: 600,
        },
        {
          country: 'Brasil',
          flag:
            'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/BR.png',
          salesInM: 550,
        },
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false,
      },
    }
  },

  computed: {
    totalSales() {
      return this.sales.reduce((acc, val) => acc + val.salesInM, 0)
    },

    ...mapGetters('processes', ['processes']),
  },
  created() {
    this.$store.dispatch('processes/fetchProcesses')
  },
  methods: {
    complete(index) {
      this.list[index] = !this.list[index]
    },
  },
}
</script>
