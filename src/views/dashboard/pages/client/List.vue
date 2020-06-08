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
        <div class="display-2 font-weight-light">
          Lista de Clientes
        </div>
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
        :items="items"
        :search.sync="search"
        :sort-by="['name', 'office']"
        :sort-desc="[false, true]"
        multi-sort
      >
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-account
          </v-icon>
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
            :to="{ name: 'UserUpdate' }"
          >
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </base-material-card>
  </v-container>
</template>

<script>
export default {
  name: 'DashboardDataTables',

  data: () => ({
    actions: [
      {
        color: 'info',
        icon: 'mdi-account',
      },
      {
        color: 'success',
        icon: 'mdi-pencil',
      },
      {
        color: 'error',
        icon: 'mdi-close',
      },
    ],
    headers: [
      {
        text: 'Nombre',
        value: 'nombre',
      },
      {
        text: 'Apellido',
        value: 'apellido',
      },
      {
        text: 'Dirección',
        value: 'dirección',
      },
      {
        text: 'Correo Electrónico',
        value: 'correo',
      },
      {
        text: 'Teléfono',
        value: 'teléfono',
      },
      {
        sortable: false,
        text: 'Actions',
        value: 'actions',
      },
    ],
    items: [
      {
        nombre: 'Airi Satou',
        apellido: 'Accountant',
        dirección: 'Tokyo',
        correo: 33,
        teléfono: '2008/11/28',
      },
      {
        nombre: 'Airi Satou',
        apellido: 'Accountant',
        dirección: 'Tokyo',
        correo: 33,
        teléfono: '2008/11/28',
      },
    ],
    search: undefined,
  }),
}
</script>
