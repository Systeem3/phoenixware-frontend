<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card icon="mdi-account-outline" color="primary">
          <template v-slot:after-heading>
            <div class="font-weight-light card-title mt-2">
              Miembro
              <span class="body-1">— Registro de Miembro</span>
            </div>
          </template>
          <ValidationObserver ref="observer" v-slot="{ invalid }">
            <v-form @submit.prevent="submit()">
              <v-container class="py-0">
                <v-row>
                  <v-col cols="12" md="6">
                    <VSelectWithValidation
                      v-model="tipo_usuario"
                      :items="items"
                      item-text="name"
                      item-value="id"
                      label="Rol"
                      rules="required"
                      dense
                      prepend-icon="mdi-account-group"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <VSelectWithValidation
                      v-model="tipo_usuario"
                      :items="items"
                      item-text="name"
                      item-value="id"
                      label="Rol"
                      rules="required"
                      dense
                      prepend-icon="mdi-account-group"
                    />
                  </v-col>
                  <v-col cols="12" class="text-right">
                    <v-btn
                      color="purple"
                      class="ml-0"
                      float="right"
                      margin-left="6px"
                      :to="{ name: 'MembersList' }"
                    >
                      Atrás
                    </v-btn>
                    <v-btn
                      color="primary"
                      float="right"
                      margin-left="6px"
                      class="mr-0"
                      @click="submit"
                      :disabled="invalid"
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
import VSelectWithValidation from '@/components/inputs/VSelectWithValidation'
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      email: '',
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: '',
      rol: '',
      items: [
        { name: 'Lider', id: 'L' },
        { name: 'Miembro', id: 'M' },
      ],
      usuarios: [],
    }
  },
  components: {
    ValidationObserver,
    VSelectWithValidation,
  },
created() {
    this.fetchUsers()
},
  computed: {
    ...mapGetters('users', ['users']),
  },
  methods: {
    ...mapActions('members', ['createMember']),
    ...mapActions('users', ['fetchUsers']),
    async submit() {
      // this.$refs.obs.validate()
      await this.createMember({
        email: this.email,
        nombre: this.nombre,
        apellido: this.apellido,
        direccion: this.direccion,
        telefono: this.telefono,
        tipo_usuario: this.tipo_usuario,
      })
    },
  },
}
</script>
