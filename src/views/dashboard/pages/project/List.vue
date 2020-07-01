<template>
  <v-container id="data-tables" tag="section">
    <div class="text-right">
      <v-btn class="mx-2" fab dark color="primary" :to="{ name: 'UserCreate' }">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </div>
    <base-material-card
      color="indigo"
      icon="mdi-vuetify"
      inline
      class="px-5 py-3"
    >
      <template v-slot:after-heading>
        <div class="display-2 font-weight-light">Lista de Proyectos</div>

        <v-btn
          @click="success"
          class="btn btn-outline-primary col s12 m3"
          type="button"
          >success</v-btn
        >
      </template>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        class="ml-auto"
        label="Search"
        hide-details
        single-line
        style="max-width: 250px;"
      />

      <v-divider class="mt-3" />

      <v-data-table
        :headers="headers"
        :items="projects"
        :search.sync="search"
        :sort-by="['name', 'office']"
        :sort-desc="[false, true]"
        multi-sort
      >
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="showItem(item)">mdi-eye</v-icon>
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
            :to="{ name: 'ProjectUpdate' }"
            >mdi-pencil</v-icon
          >
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </base-material-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
//import { Vue } from 'vue-property-decorator'

export default {
  name: 'UsersTable',
  data() {
    return {
      //users: [],
      headers: [
        {
          text: 'Nombre',
          value: 'nombre',
        },
        {
          text: 'Tipo',
          value: 'tipo',
        },
        {
          text: 'Descripción',
          value: 'descripcion',
        },
        {
          text: 'Fecha Inicio',
          value: 'fecha_inicio',
        },
        {
          text: 'Fecha Finalización',
          value: 'fecha_finalizacion',
        },
        {
          text: 'Metodología',
          value: 'metodologia',
        },
        {
          sortable: false,
          text: 'Actions',
          value: 'actions',
        },
      ],
      loader: true,

      search: undefined,
    }
  },

  created() {
    this.$store.dispatch('projects/fetchProjects')
  },
  computed: {
    ...mapGetters('projects', ['projects']),
  },

  methods: {
    async editItem(item) {
      // this.$store.dispatch('UserUpdate')
      this.$router.push(`/projects/edit/${item.id}`)
    },
    ...mapActions('projects', ['deleteProject']),
    success() {
      /* Vue.swal({
        type: 'success',
        title: 'Hello',
        text: 'Hello brave new world!',
      })*/
      this.$swal('Oops...', 'Something went wrong!', 'success')
    },
    props: ['id_project'],
    async deleteItem(item) {
      try {
        const response = await this.$confirm(
          this.$t('common.DO_YOU_REALLY_WANT_TO_DELETE_THIS_ITEM'),

          {
            title: this.$t('common.WARNING'),
            buttonTrueText: this.$t('common.DELETE'),
            buttonFalseText: this.$t('common.CANCEL'),
            buttonTrueColor: 'red lighten3',
            buttonFalseColor: 'yellow',
          }
        )
        if (response) {
          console.log(item.id)
          //  this.dataTableLoading = true
          //await this.deleteUser(item.id, {})
          await this.deleteProject({
            id: item.id,
            estado: 'C',
          })
          /* await this
            .fetchUsers
            // buildPayloadPagination(this.pagination, this.buildSearch())
            ()
          this.dataTableLoading = false*/
        }
      } catch (error) {
        this.dataTableLoading = false
      }
    },
  },
  mounted() {},
}
</script>
