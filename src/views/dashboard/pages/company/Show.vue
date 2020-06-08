<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card icon="mdi-account-outline">
          <template v-slot:after-heading>
            <div class="font-weight-light card-title mt-2">
              Empleado
              <span class="body-1">— Consulta de Empleado</span>
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field label="Nombre" class="purple-input" disabled />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Apellido"
                    class="purple-input"
                    disabled
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    label="Correo Electrónico"
                    class="purple-input"
                    disabled
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    class="purple-input"
                    label="Teléfono"
                    type="number"
                    disabled
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Dirección"
                    class="purple-input"
                    disabled
                  />
                </v-col>

                <v-col cols="12" class="text-right">
                  <v-btn color="success" class="ml-0"> Atrás </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  //
}
</script>
