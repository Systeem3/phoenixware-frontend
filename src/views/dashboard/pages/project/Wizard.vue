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
            @click:next="next()"
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
                      <VTextFieldWithValidation
                        label="Presupuesto"
                        color="secondary"
                        prepend-icon="mdi-at"
                        v-model="inputs.presupuesto"
                        type="number"
                        validate-on-blur
                        min="0"
                      />
                    </v-col>
                    <v-col cols="12" md="4">
                      <VTextFieldWithValidation
                        label="Costo"
                        color="secondary"
                        prepend-icon="mdi-at"
                        v-model="inputs.costo"
                        type="number"
                        validate-on-blur
                        min="0"
                      />
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
                    <v-col cols="12">
                      <v-textarea
                        name="input-7-1"
                        label="Alcance"
                        hint="Alcance del proyecto"
                        v-model="inputs.alcance"
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

                  <ValidationObserver rules="required" name="type">
                    <input :value="stringAccount" type="hidden" />
                  </ValidationObserver>

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
                        :items="tamano"
                        item-text="name"
                        item-value="id"
                        v-model="inputs2.tamano"
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
              <form>
                <v-responsive class="mx-auto" max-width="500">
                  <div
                    class="text-center display-1 grey--text font-weight-light mb-6"
                  >
                    Resultado y escoger metodologia
                  </div>
                  <div
                    class="text-center display-1 grey--text font-weight-light mb-6"
                  >
                    Resultado:{{ resultado }}
                  </div>

                  <ValidationObserver rules="required" name="type">
                    <input :value="stringAccount" type="hidden" />
                  </ValidationObserver>
                  <v-row
                    class="mx-auto"
                    justify="space-around"
                    style="max-width: 500px;"
                  >
                    <v-col cols="12">
                      <v-select
                        color="secondary"
                        item-color="secondary"
                        label="Metodologia"
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
                  </v-row>
                </v-responsive>
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
import {mapActions} from "vuex";
//import VSelectWithValidation from '@/components/inputs/VSelectWithValidation'

export default {
  name: 'DashboardFormsWizard',

  data() {
    return {
      resultado: '',
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
        alcance:'',
        costo:null,
        presupuesto:null,
        estado:'A',
      },
      inputs2: {
        tamano: '',
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
      tamano: [
        { name: 'Entre 1 y 5', id: '1' },
        { name: 'Entre 6 y 10', id: '2' },
        { name: 'Entre 10 y 25', id: '3' },
        { name: 'Entre 25 y 45', id: '4' },
        { name: 'Más de 45', id: '5' },
      ],
      criticidad: [
        { name: 'Nula', id: '1' },
        { name: 'Baja', id: '2' },
        { name: 'Media', id: '3' },
        { name: 'Alta', id: '4' },
        { name: 'Muy alta', id: '5' },
      ],
      dinamismo: [
        { name: 'Cambios demasiado constantes', id: '1' },
        { name: 'Muchos cambios', id: '2' },
        { name: 'Algunos cambios', id: '3' },
        { name: 'Pocos cambios', id: '4' },
        { name: 'Casi ningún cambio', id: '5' },
      ],
      personal: [
        {
          name: 'Todo el personal tiene altos niveles de experiencia',
          id: '1',
        },
        {
          name:
            'La mayor parte de empleados tiene altos niveles de experiencia',
          id: '2',
        },
        { name: 'Algunos tienen un alto nivel de experiencia', id: '3' },
        { name: 'Pocos tienen un alto nivel de experiencia', id: '4' },
        { name: 'Muy pocos tienen alto nivel de experiencia', id: '5' },
      ],
      cultura: [
        { name: 'Cultura autónoma', id: '1' },
        { name: 'Cultura parcialmente autónoma', id: '2' },
        {
          name:
            'Cultura parcialmente jerarquizada, pero con bastante autonomía en los niveles de jerarquización',
          id: '3',
        },
        { name: 'Cultura parcialmente jerarquizada', id: '4' },
        {
          name:
            'Cultura completamente jerarquizada y roles estrictamente delimitados',
          id: '5',
        },
      ],
      street: '',
      tab: 0,
      tabs: ['Info', 'Metodología', 'Resultado'],
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
      files: [],
      menu: false,
      menu2: false,
      menu3: false,
      min: -50,
      max: 90,
      slider: 40,
      slider2: [30, 70],
      range: [-20, 70],
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
        this.inputs.fecha_inicio &&
        this.inputs.fecha_finalizacion &&
        this.inputs.descripcion
      )
        steps.push(1)

      if (
        this.inputs2.tamano &&
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
    ...mapActions('projects', ['createProject']),
    next() {
      //if (!valid) return
      const step = this.availableSteps
      if (this.tab === this.tabs.length - 1) {
        if(this.inputs.metodologia){
          this.createProject(this.inputs)
        }
        alert('Form finished')
      } else {
        if (this.tab === this.tabs.length - 2) {
          //this.resultado = 'funciona'
          let tamano = this.inputs2.tamano
          let criticidad = this.inputs2.criticidad
          let dinamismo = this.inputs2.dinamismo
          let personal = this.inputs2.personal
          let cultura = this.inputs2.cultura
          let hibrido = 0
          let tradicional = 0
          let agil = 0
          console.log(tamano)
          console.log(criticidad)
          console.log(dinamismo)
          console.log(personal)
          console.log(cultura)
          switch (tamano) {
            case '1':
              agil++
              break
            case '2':
              agil++
              break
            case '3':
              hibrido++
              break
            case '4':
              tradicional++
              break
            case '5':
              tradicional++
              break
          }
          switch (criticidad) {
            case '1':
              agil++
              break
            case '2':
              agil++
              break
            case '3':
              hibrido++
              break
            case '4':
              tradicional++
              break
            case '5':
              tradicional++
              break
          }
          switch (dinamismo) {
            case '1':
              agil++
              break
            case '2':
              agil++
              break
            case '3':
              hibrido++
              break
            case '4':
              tradicional++
              break
            case '5':
              tradicional++
              break
          }
          switch (personal) {
            case '1':
              agil++
              break
            case '2':
              agil++
              break
            case '3':
              hibrido++
              break
            case '4':
              tradicional++
              break
            case '5':
              tradicional++
              break
          }
          switch (cultura) {
            case '1':
              agil++
              break
            case '2':
              agil++
              break
            case '3':
              hibrido++
              break
            case '4':
              tradicional++
              break
            case '5':
              tradicional++
              break
          }
          console.log(hibrido)
          console.log(tradicional)
          console.log(agil)
          if (tradicional >= 3) {
            if (criticidad === '1' && tamano === '1') {
              this.resultado = 'Hibrida'
            } else {
              this.resultado = 'Tradicional'
            }
          }
          if (agil >= 3) {
            if (
              (criticidad === '4' || criticidad === '5') &&
              (tamano === '3' || tamano === '4' || tamano === '5')
            ) {
              this.resultado = 'Hibrida'
            } else {
              this.resultado = 'Agil'
            }
          }
          if (hibrido >= 3) {
            if (criticidad === '5' && tamano === '5') {
              this.resultado = 'Tradicional'
            } else {
              this.resultado = 'Hibrida'
            }
          }
          if (tradicional === 2 && agil === 2) {
            if (
              criticidad === '5' &&
              (tamano === '3' || tamano === '4' || tamano === '5')
            ) {
              this.resultado = 'Tradicional'
            } else {
              if (
                (criticidad === '1' || criticidad === '2') &&
                tamano === '1'
              ) {
                this.resultado = 'Agil'
              } else {
                this.resultado = 'Hibrida'
              }
            }
          }
          if (tradicional === 2 && hibrido === 2) {
            if (
              (criticidad === '4' || criticidad === '5') &&
              (tamano === '3' || tamano === '4' || tamano === '5')
            ) {
              this.resultado = 'Tradicional'
            } else {
              this.resultado = 'Hibrida'
            }
          }
          if (hibrido === 2 && agil === 2) {
            if (
              (criticidad === '4' || criticidad === '5') &&
              (tamano === '3' || tamano === '4' || tamano === '5')
            ) {
              this.resultado = 'Hibrida'
            } else {
              if (
                (criticidad === '1' || criticidad === '2') &&
                (tamano === '1' || tamano === '2')
              ) {
                this.resultado = 'Agil'
              } else {
                this.resultado = 'Hibrida'
              }
            }
          }

          this.tab = step.length - 1
        } else {
          this.tab = step.length - 1
        }
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
