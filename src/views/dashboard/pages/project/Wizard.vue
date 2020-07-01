<template>
  <v-container id="wizard" tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <ValidationObserver ref="obs">
          <base-material-wizard
            v-model="tab"
            :available-steps="availableSteps"
            :items="tabs"
            color="secondary"
            class="mx-auto"
            @click:next="next(valid)"
            @click:prev="tab--"
          >
            <v-tab-item class="pb-12">
              <form>
                <div class="text-center display-1 font-weight-light mb-6">
                  ¡Empecemos con información básica!
                </div>

                <v-container class="py-0">
                  <v-row>
                    <v-col cols="12" md="4">
                      <VTextFieldWithValidation
                        label="Nombre del Proyecto"
                        color="secondary"
                        prepend-icon="mdi-at"
                        v-model="inputs.nombre"
                        rules="required"
                        validate-on-blur
                      />
                    </v-col>

                    <v-col cols="12" md="4">
                      <v-select
                        color="secondary"
                        item-color="secondary"
                        label="Tipo de Proyecto"
                        :items="type"
                        item-text="name"
                        item-value="id"
                        v-model="inputs.tipo"
                      >
                        <template v-slot:item="{ attrs, item, on }">
                          <v-list-item
                            v-bind="attrs"
                            active-class="secondary elevation-4 white--text"
                            class="mx-3 mb-3 v-sheet"
                            elevation="0"
                            v-on="on"
                          >
                            <v-list-item-content>
                              <v-list-item-title v-text="item.name" />
                            </v-list-item-content>
                          </v-list-item>
                        </template>
                      </v-select>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-select
                        color="secondary"
                        item-color="secondary"
                        label="Metodología"
                        :items="type2"
                        item-text="name"
                        item-value="id"
                        v-model="inputs.metodologia"
                      >
                        <template v-slot:item="{ attrs, item, on }">
                          <v-list-item
                            v-bind="attrs"
                            active-class="secondary elevation-4 white--text"
                            class="mx-3 mb-3 v-sheet"
                            elevation="0"
                            v-on="on"
                          >
                            <v-list-item-content>
                              <v-list-item-title v-text="item.name" />
                            </v-list-item-content>
                          </v-list-item>
                        </template>
                      </v-select>
                    </v-col>

                    <v-row
                      class="mx-auto"
                      justify="space-around"
                      style="max-width: 500px;"
                    >
                      <v-col cols="12" md="4">
                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :return-value.sync="date"
                          transition="scale-transition"
                          min-width="290px"
                          offset-y
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="inputs.fecha_inicio"
                              color="secondary"
                              label="Fecha de Inicio"
                              prepend-icon="mdi-calendar-outline"
                              readonly
                              v-on="on"
                            />
                          </template>

                          <v-date-picker
                            v-model="inputs.fecha_inicio"
                            color="secondary"
                            landscape
                            scrollable
                            @input="menu = false"
                          >
                            <v-spacer />
                            <v-btn color="secondary" large @click="menu = false"
                              >Cancelar</v-btn
                            >
                          </v-date-picker>
                        </v-menu>
                      </v-col>

                      <v-col cols="12" md="4">
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
                              v-model="inputs.fecha_finalizacion"
                              color="secondary"
                              prepend-icon="mdi-calendar-outline"
                              readonly
                              v-on="on"
                              label="Fecha de Finalización"
                            />
                          </template>

                          <v-date-picker
                            v-model="inputs.fecha_finalizacion"
                            color="secondary"
                            landscape
                            scrollable
                            @input="menu3 = false"
                          >
                            <v-spacer />

                            <v-btn
                              color="secondary"
                              large
                              @click="menu3 = false"
                              >Cancelar</v-btn
                            >
                          </v-date-picker>
                        </v-menu>
                      </v-col>
                    </v-row>
                    <v-col cols="12">
                      <v-textarea
                        name="input-7-1"
                        label="Descripción"
                        hint="¿En qué consiste el proyecto?"
                        v-model="inputs.descripcion"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </form>
            </v-tab-item>

            <v-tab-item class="pb-12">
              <form>
                <v-responsive class="mx-auto" max-width="500">
                  <div
                    class="text-center display-1 grey--text font-weight-light mb-6"
                  >
                    Determinar Metodología
                  </div>

                  <validation-provider rules="required" name="type">
                    <input :value="stringAccount" type="hidden" />
                  </validation-provider>

                  <v-row
                    class="mx-auto"
                    justify="space-around"
                    style="max-width: 500px;"
                  >
                    <v-col cols="12">
                      <v-select
                        color="secondary"
                        item-color="secondary"
                        label="Tamaño"
                        :items="tamaño"
                        item-text="name"
                        item-value="id"
                        v-model="inputs2.tamaño"
                      >
                        <template v-slot:item="{ attrs, item, on }">
                          <v-list-item
                            v-bind="attrs"
                            active-class="secondary elevation-4 white--text"
                            class="mx-3 mb-3 v-sheet"
                            elevation="0"
                            v-on="on"
                          >
                            <v-list-item-content>
                              <v-list-item-title v-text="item.name" />
                            </v-list-item-content>
                          </v-list-item>
                        </template>
                      </v-select>
                      <v-select
                        color="secondary"
                        item-color="secondary"
                        label="Criticidad"
                        :items="criticidad"
                        item-text="name"
                        item-value="id"
                        v-model="inputs2.criticidad"
                      >
                        <template v-slot:item="{ attrs, item, on }">
                          <v-list-item
                            v-bind="attrs"
                            active-class="secondary elevation-4 white--text"
                            class="mx-3 mb-3 v-sheet"
                            elevation="0"
                            v-on="on"
                          >
                            <v-list-item-content>
                              <v-list-item-title v-text="item.name" />
                            </v-list-item-content>
                          </v-list-item>
                        </template>
                      </v-select>
                      <v-select
                        color="secondary"
                        item-color="secondary"
                        label="Dinamismo"
                        :items="dinamismo"
                        item-text="name"
                        item-value="id"
                        v-model="inputs2.dinamismo"
                      >
                        <template v-slot:item="{ attrs, item, on }">
                          <v-list-item
                            v-bind="attrs"
                            active-class="secondary elevation-4 white--text"
                            class="mx-3 mb-3 v-sheet"
                            elevation="0"
                            v-on="on"
                          >
                            <v-list-item-content>
                              <v-list-item-title v-text="item.name" />
                            </v-list-item-content>
                          </v-list-item>
                        </template>
                      </v-select>
                      <v-select
                        color="secondary"
                        item-color="secondary"
                        label="Personal"
                        :items="personal"
                        item-text="name"
                        item-value="id"
                        v-model="inputs2.personal"
                      >
                        <template v-slot:item="{ attrs, item, on }">
                          <v-list-item
                            v-bind="attrs"
                            active-class="secondary elevation-4 white--text"
                            class="mx-3 mb-3 v-sheet"
                            elevation="0"
                            v-on="on"
                          >
                            <v-list-item-content>
                              <v-list-item-title v-text="item.name" />
                            </v-list-item-content>
                          </v-list-item>
                        </template>
                      </v-select>
                      <v-select
                        color="secondary"
                        item-color="secondary"
                        label="Cultura"
                        :items="cultura"
                        item-text="name"
                        item-value="id"
                        v-model="inputs2.cultura"
                      >
                        <template v-slot:item="{ attrs, item, on }">
                          <v-list-item
                            v-bind="attrs"
                            active-class="secondary elevation-4 white--text"
                            class="mx-3 mb-3 v-sheet"
                            elevation="0"
                            v-on="on"
                          >
                            <v-list-item-content>
                              <v-list-item-title v-text="item.name" />
                            </v-list-item-content>
                          </v-list-item>
                        </template>
                      </v-select>
                    </v-col>
                  </v-row>
                </v-responsive>
              </form>
            </v-tab-item>

            <v-tab-item class="pb-12">
              <div
                class="text-center display-1 grey--text font-weight-light mb-6"
              >
                Are you living in a nice area?
              </div>

              <form>
                <v-row
                  class="mx-auto"
                  justify="space-around"
                  style="max-width: 500px;"
                >
                  <v-col cols="12" md="8">
                    <ValidationObserver
                      v-slot="{ errors }"
                      rules="required"
                      name="address"
                    >
                      <v-text-field
                        v-model="address"
                        :error-messages="errors"
                        color="secondary"
                        label="Street Name*"
                        validate-on-blur
                      />
                    </ValidationObserver>
                  </v-col>

                  <v-col cols="12" md="4">
                    <ValidationObserver
                      v-slot="{ errors }"
                      rules="required"
                      name="street"
                    >
                      <v-text-field
                        v-model="street"
                        :error-messages="errors"
                        color="secondary"
                        label="Street Number*"
                        validate-on-blur
                      />
                    </ValidationObserver>
                  </v-col>

                  <v-col cols="12" md="6">
                    <ValidationObserver
                      v-slot="{ errors }"
                      rules="required"
                      name="city"
                    >
                      <v-text-field
                        v-model="city"
                        :error-messages="errors"
                        color="secondary"
                        label="City*"
                        validate-on-blur
                      />
                    </ValidationObserver>
                  </v-col>

                  <v-col cols="12" md="6">
                    <ValidationObserver
                      v-slot="{ errors }"
                      rules="required"
                      name="state"
                    >
                      <v-autocomplete
                        v-model="state"
                        :autocomplete="Date.now()"
                        :error-messages="errors"
                        :items="states"
                        color="secondary"
                        label="State*"
                        validate-on-blur
                      />
                    </ValidationObserver>
                  </v-col>
                </v-row>
              </form>
            </v-tab-item>
          </base-material-wizard>
        </ValidationObserver>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import VTextFieldWithValidation from '@/components/inputs/VTextFieldWithValidation'
//import VSelectWithValidation from '@/components/inputs/VSelectWithValidation'

export default {
  name: 'DashboardFormsWizard',

  data() {
    return {
      show: false,
      show2: false,
      items: [
        { name: 'administrador', id: '1' },
        { name: 'director', id: '2' },
        { name: 'regular', id: '3' },
      ],
      inputs: {
        nombre: '',
        descripcion: '',
        fecha_inicio: '',
        fecha_finalizacion: '',
        tipo: '',
        metodologia: '',
      },
      inputs2: {
        tamaño: '',
        criticidad: '',
        dinamismo: '',
        personal: '',
        cultura: '',
      },
      account: [],
      accounts: [
        {
          icon: 'mdi-pencil',
          type: 'design',
        },
        {
          icon: 'mdi-code-tags',
          type: 'code',
        },
        {
          icon: 'mdi-laptop',
          type: 'develop',
        },
      ],
      address: '',
      city: '',
      email: '',
      first: '',
      image: null,
      last: '',
      state: '',
      tamaño: [
        { name: 'administrador', id: '1' },
        { name: 'director', id: '2' },
        { name: 'regular', id: '3' },
      ],
      criticidad: [
        { name: 'administrador', id: '1' },
        { name: 'director', id: '2' },
        { name: 'regular', id: '3' },
      ],
      dinamismo: [
        { name: 'administrador', id: '1' },
        { name: 'director', id: '2' },
        { name: 'regular', id: '3' },
      ],
      personal: [
        { name: 'administrador', id: '1' },
        { name: 'director', id: '2' },
        { name: 'regular', id: '3' },
      ],
      cultura: [
        { name: 'administrador', id: '1' },
        { name: 'director', id: '2' },
        { name: 'regular', id: '3' },
      ],
      street: '',
      tab: 0,
      tabs: ['Info', 'Metodología', 'Otros'],
      type: [
        { name: 'Producto', id: 'P' },
        { name: 'Servicio', id: 'S' },
      ],
      type2: [
        { name: 'Agil', id: '1' },
        { name: 'Hibrida', id: '2' },
        { name: 'Tradicional', id: '3' },
      ],
      date: '',
      date2: '',
      date3: '',
      dropdown: [
        {
          id: 1,
          text: 'Action',
        },
        {
          id: 2,
          text: 'Another Action',
        },
        {
          id: 3,
          text: 'A Third Action',
        },
      ],
      files: [],
      items2: ['Amsterdam', 'Washington', 'Sydney', 'Beijing'],
      menu: false,
      menu2: false,
      menu3: false,
      min: -50,
      max: 90,
      slider: 40,
      slider2: [30, 70],
      range: [-20, 70],
      movies: [
        'Fight Club',
        'Godfather',
        'Godfather II',
        'Godfather III',
        'Goodfellas',
        'Pulp Fiction',
        'Scarface',
      ],
    }
  },
  components: {
    ValidationObserver,
    VTextFieldWithValidation,
  },
  computed: {
    stringAccount() {
      return this.account.join(',')
    },
    scope() {
      if (this.tab === 0) return 'about'
      else if (this.tab === 2) return 'address'
      return 'account'
    },
    availableSteps() {
      const steps = [0]

      if (
        this.inputs.nombre &&
        this.inputs.tipo &&
        this.inputs.metodologia &&
        this.inputs.fecha_inicio &&
        this.inputs.fecha_finalizacion &&
        this.inputs.descripcion
      )
        steps.push(1)

      if (
        this.inputs2.tamaño &&
        this.inputs2.criticidad &&
        this.inputs2.cultura &&
        this.inputs2.dinamismo &&
        this.inputs2.personal &&
        steps.includes(1)
      )
        steps.push(2)

      if (
        this.address &&
        this.street &&
        this.city &&
        this.state &&
        steps.includes(2)
      )
        steps.push(3)

      return steps
    },
  },

  methods: {
    next(valid) {
      if (!valid) return
      if (this.tab === this.tabs.length - 1) {
        alert('Form finished')
      } else {
        this.tab++
      }
    },
    onChange(val) {
      const value = val.target.files[0]

      if (!value) return (this.image = null)

      this.image = URL.createObjectURL(value)
    },
  },
}
</script>

<style lang="sass">
.v-card.v-card.v-card--account
  border-color: currentColor
  border-width: 4px

  .v-icon
    color: inherit

.v-card--account,
.v-card--account:before
  border-radius: 50%
</style>
