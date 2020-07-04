<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ card.name }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Nombre" required></v-text-field>
              </v-col>
              <v-col cols="12" class="text-right">
                <v-row>
                  <v-textarea
                    outlined
                    autoGrow
                    filled
                    name="Description"
                    label="Descripción de la Actividad"
                  ></v-textarea>
                </v-row>
              </v-col>

              <v-col cols="12" md="6">
                <base-material-card color="secondary" icon="mdi-calendar-today">
                  <template v-slot:after-heading>
                    <div class="display-1 mt-2 font-weight-light">
                      Fecha tope
                    </div>
                  </template>

                  <v-menu
                    ref="menu3"
                    v-model="menu3"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    min-width="290px"
                    offset-y
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="fecha"
                        color="secondary"
                        prepend-icon="mdi-calendar-outline"
                        readonly
                        v-on="on"
                      />
                    </template>

                    <v-date-picker
                      v-model="fecha"
                      color="primary"
                      landscape
                      :min="nowDate"
                      scrollable
                      rules="required"
                      @input="menu3 = false"
                    >
                      <v-spacer />
                    </v-date-picker>
                  </v-menu>
                </base-material-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
//import Description from './Description.vue'
//import Checklist from './Checklist.vue'

export default {
  // components: { Description },

  data() {
    return {
      dialog: false,
      card: {},
      nowDate: new Date().toISOString().slice(0, 10),
      picker: new Date().toISOString().substr(0, 10),
      landscape: true,
      reactive: false,
      time: '',
      time2: '',
      menu2: false,
      menu3: false,
      menu4: false,
      date: '',
      date2: '',
      date3: '',
      fecha: '',
    }
  },
  methods: {
    show(card) {
      this.card = card
      this.dialog = true
    },

    addCheckItem(item) {
      this.$emit('addCheckItem', { card: this.card, item })
    },
  },
}
</script>
