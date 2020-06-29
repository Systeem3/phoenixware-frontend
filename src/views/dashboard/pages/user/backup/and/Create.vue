<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card icon="mdi-account-outline" color="primary">
          <template v-slot:after-heading>
            <div class="font-weight-light card-title mt-2">
              Empleado
              <span class="body-1">— Registro de Empleado</span>
            </div>
          </template>
          <ValidationObserver ref="obs">
            <v-form @submit.prevent="handleSubmit(save)">
              <v-container class="py-0">
                <v-row>
                  <v-col cols="12" md="4">
                    <VTextFieldWithValidation
                      label="Correo Electrónico"
                      color="secondary"
                      prepend-icon="mdi-at"
                      v-model="inputs.email"
                      rules="required|email"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <VTextFieldWithValidation
                      label="Nombre"
                      color="secondary"
                      prepend-icon="mdi-account"
                      v-model="inputs.nombre"
                      rules="required"
                      class="purple-input"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <VTextFieldWithValidation
                      label="Apellido"
                      color="secondary"
                      prepend-icon="mdi-account"
                      v-model="inputs.apellido"
                      rules="required"
                      class="purple-input"
                    />
                  </v-col>
                  <v-col cols="12">
                    <VTextFieldWithValidation
                      label="Direccion"
                      color="secondary"
                      prepend-icon="mdi-home"
                      v-model="inputs.direccion"
                      rules="required"
                      class="purple-input"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <VTextFieldWithValidation
                      label="Telefono"
                      color="secondary"
                      prepend-icon="mdi-phone"
                      v-model="inputs.telefono"
                      rules="required"
                      class="purple-input"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <VSelectWithValidation
                      v-model="inputs.tipo_usuario"
                      :items="items"
                      item-text="name"
                      item-value="id"
                      label="Tipo de Usuario"
                      rules="required"
                      dense
                      prepend-icon="mdi-account-group"
                    />
                  </v-col>
                  <v-col cols="12" class="text-right">
                    <!-- <v-btn
                      color="purple"
                      class="ml-0"
                      :to="{ name: 'UserList' }"
                    >
                      {{ registrationCompleted }}
                    </v-btn>-->
                    <!--  <SubmitButton
                      :buttonText="$t('myProfile.SAVE')"
                      customClass="btnSave"
                    />-->
                    <v-btn
                      color="purple"
                      class="mr-0"
                      @click="createUser(inputs)"
                      :disabled="disabledButton"
                    >
                      Registrar
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </ValidationObserver>
        </base-material-card>
      </v-col>
    </v-row>
    <ErrorMessage />
    <SuccessMessage />
  </v-container>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import VTextFieldWithValidation from '@/components/inputs/VTextFieldWithValidation'
import VSelectWithValidation from '@/components/inputs/VSelectWithValidation'
import { mapActions } from 'vuex'

export default {
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
        email: '',
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
        tipo_usuario: '',
      },
    }
  },
  components: {
    ValidationObserver,
    VTextFieldWithValidation,
    VSelectWithValidation,
  },
  computed: {
    disabledButton() {
      return this.$store.state.loading.showLoading
    },
  },
  methods: {
    async submit() {
      await this.$refs.obs.validate()
    },
    ...mapActions('users', ['createUser']),
  },
}
</script>

<style scoped>
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-image: linear-gradient(69.1deg, #4a148c 3%, #4a148c 100.6%);
}
</style>
<!--t(69.1deg, #651544 3%, #ba0340 100.6%);-->
