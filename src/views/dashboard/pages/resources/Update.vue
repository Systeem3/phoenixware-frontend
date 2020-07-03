<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <base-material-card icon="mdi-account-multiple" color="primary">
          <template v-slot:after-heading>
            <div class="font-weight-light card-title mt-2">
              Recursos
              <span class="body-1">— Registro de Recursos</span>
            </div>
          </template>
          <ValidationObserver ref="odescbs">
            <v-form>
              <v-container class="py-0">
                <v-row>
                  <v-col cols="6" md="6">
                    <VTextFieldWithValidation
                      label="Nombre del Recurso"
                      color="secondary"
                      prepend-icon="mdi-account"
                      v-model="name"
                      rules="required"
                      class="purple-input"
                    />
                  </v-col>
                  <v-col cols="6" md="6">
                    <v-select
                      color="secondary"
                      item-color="secondary"
                      label="Tipo de Recurso"
                      :items="type"
                      item-text="name"
                      item-value="id"
                      v-model="type"
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
                <v-row>
                  <v-col cols="6" md="6">
                    <v-select
                      color="secondary"
                      item-color="secondary"
                      label="Tipo de Costo"
                      :items="type2"
                      item-text="name"
                      item-value="id"
                      v-model="type2"
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
                  <v-col cols="6" md="6">
                    <VTextFieldWithValidation
                      label="Costo"
                      color="secondary"
                      prepend-icon="mdi-account"
                      v-model="cost"
                      rules="required"
                      class="purple-input"
                      type="number"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-right">
                    <v-btn
                      color="primary"
                      float="right"
                      margin-left="6px"
                      :to="{ name: 'ResourcesCreate' }"
                      >Recursos</v-btn
                    >
                    <v-btn
                      color="primary"
                      float="right"
                      margin-left="6px"
                      @click.stop.prevent="submit"
                      @click="createMeeting(inputs)"
                      >Registrar</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </ValidationObserver>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
//import VTextFieldWithValidation from '@/components/inputs/VTextFieldWithValidation'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      type: [
        { name: 'Recursos Humanos', id: '1' },
        { name: 'Recursos físicos no depreciables', id: '2' },
        { name: 'Recursos físicos depreciables', id: '3' },
        { name: 'Recursos intangibles', id: '4' },
      ],
      type2: [
        { name: 'Costo Directos', id: '1' },
        { name: 'Costos Indirectos', id: '2' },
        { name: 'Costo Extraordinarios', id: '3' },
      ],
      nowDate: new Date().toISOString().slice(0, 10),
      picker: new Date().toISOString().substr(0, 10),
      landscape: true,
      reactive: false,
      time2: '',
      time3: '',
      menu2: false,
      menu3: false,
      menu4: false,
      date2: '',
      date3: '',
    }
  },
  components: {
    ValidationObserver,
  },
  computed: {
    nombre: {
      get() {
        return this.$store.state.resources.resource.nombre
      },
      set(value) {
        const data = {
          key: 'date',
          value,
        }
        this.addResourcesData(data)
      },
    },
    type3: {
      get() {
        return this.$store.state.sources.source.tipo
      },
      set(value) {
        const data = {
          key: 'type3',
          value,
        }
        this.addSourcesData(data)
      },
    },
    getTypeId(tipo) {
      let typeId = null
      this.items.forEach((item) => {
        if (item.name === tipo) typeId = item.id
      })

      if (typeId === null) {
        console.warn('Tipo not found with tipo: ', tipo)
      }
      return typeId
    },
    type4: {
      get() {
        return this.$store.state.resources.resource.tipoCosto
      },
      set(value) {
        const data = {
          key: 'type4',
          value,
        }
        this.addRiskData(data)
      },
    },
    getTypeId2(tipoCosto) {
      let typeId = null
      this.items.forEach((item) => {
        if (item.name === tipoCosto) typeId = item.id
      })

      if (typeId === null) {
        console.warn('TipoCosto not found with tipoCosto: ', tipoCosto)
      }
      return typeId
    },
    costo: {
      get() {
        return this.$store.state.resources.resource.costo
      },
      set(value) {
        const data = {
          key: 'date',
          value,
        }
        this.addResourcesData(data)
      },
    },
  },
  methods: {
    ...mapActions('risks', [
      'fetchResource',
      'addResourceData',
      'saveResource',
    ]),
    async submit() {
      await this.saveRisk({
        nombre: this.name,
        tipo: this.type3,
        tipoCosto: this.type4,
        costo: this.cost,
        id: this.id,
      })
    },
    //  ...mapMutations('users', ['SHOW_LOADING', 'ERROR']),
  },
  props: ['id'],
  async mounted() {
    await this.fetchResource(this.id)
  },
}
</script>
