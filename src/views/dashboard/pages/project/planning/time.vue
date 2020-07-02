<template>
  <v-container id="validation-forms" fluid tag="section">
    <section class="mb-12 text-center">
      <h1 class="font-weight-light mb-2 headline">Estimación de Tiempos del Proyecto</h1>
      <span class="font-weight-light subtitle-1">Con uso del Método de Estimación por Casos de Usos</span>
    </section>
    <v-row>
      <v-col cols="12" md="6">
        <base-material-card
          color="primary"
          icon="mdi-account-multiple"
          title="Actores"
          class="py-3 px-5"
        >
          <v-form>
            <v-row cols="12">
              <VTextFieldWithValidation
                label="Cantidad de Actores Simples"
                color="secondary"
                v-model="inputs.actores_simple"
                type="number"
                validate-on-blur
                min="0"
                class="ml-3"
              />
              <v-tooltip right cols="2">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="secondary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    class="ml-2"
                  >mdi mdi-memory</v-icon>
                </template>
                <span>
                  Otros sistemas que interactúan con el sistema a desarrollar
                  mediante una interfaz de programación (API)
                </span>
              </v-tooltip>
            </v-row>
            <v-row cols="12">
              <VTextFieldWithValidation
                label="Cantidad de Actores Medios"
                color="secondary"
                v-model="inputs.actores_medio"
                type="number"
                validate-on-blur
                min="0"
                class="ml-3"
              />
              <v-tooltip right cols="2">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="secondary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    class="ml-2"
                  >mdi mdi-console</v-icon>
                </template>
                <span>
                  Otro sistema interactuando a través de un protocolo (ej.
                  TCP/IP) o una persona interactuando a través de una interfaz
                  en modo texto
                </span>
              </v-tooltip>
            </v-row>
            <v-row cols="12">
              <VTextFieldWithValidation
                label="Cantidad de Actores Complejos"
                color="secondary"
                v-model="inputs.actores_complejo"
                type="number"
                validate-on-blur
                min="0"
                class="ml-3"
              />
              <v-tooltip right cols="2">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="secondary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    class="ml-2"
                  >mdi-monitor-multiple</v-icon>
                </template>
                <span>
                  Una persona que interactúa con el sistema mediante una
                  interfaz gráfica (GUI).
                </span>
              </v-tooltip>
            </v-row>
            <v-spacer />
          </v-form>
        </base-material-card>
      </v-col>

      <v-col cols="12" md="6">
        <base-material-card
          color="success"
          icon="mdi-camera-account"
          title="Login Form"
          class="py-3 px-5"
        >
          <v-form>
            <v-text-field color="secondary" label="Email Address*" />

            <v-text-field
              label="Password*"
              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show3 ? 'text' : 'password'"
              color="secondary"
              @click:append.prevent="show3 = !show3"
            />

            <v-card-actions class="pa-0">
              <v-spacer />

              <v-btn default color="success">Login</v-btn>
            </v-card-actions>
          </v-form>
        </base-material-card>
      </v-col>

      <v-col cols="12">
        <validation-observer v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(validateForm)">
            <base-material-card color="success" inline title="Type Validation" class="px-5 py-3">
              <v-row align="center" dense>
                <v-col class="text-right body-1 grey--text" cols="2">Required Text</v-col>

                <v-col cols="8">
                  <validation-provider v-slot="{ errors }" rules="required" name="email">
                    <v-text-field v-model="required" :error-messages="errors" color="secondary" />
                  </validation-provider>
                </v-col>

                <v-col>
                  <code>required</code>
                </v-col>
              </v-row>

              <v-row align="center" dense>
                <v-col class="text-right body-1 grey--text" cols="2">Email</v-col>

                <v-col cols="8">
                  <validation-provider v-slot="{ errors }" name="email" rules="required|email">
                    <v-text-field
                      v-model="email"
                      :error-messages="errors"
                      color="secondary"
                      type="email"
                    />
                  </validation-provider>
                </v-col>

                <v-col>
                  <code>type="email"</code>
                </v-col>
              </v-row>

              <v-row align="center" dense>
                <v-col class="text-right body-1 grey--text" cols="2">Number</v-col>

                <v-col cols="8">
                  <validation-provider v-slot="{ errors }" name="number" rules="required|numeric">
                    <v-text-field
                      v-model="number"
                      :error-messages="errors"
                      color="secondary"
                      type="number"
                    />
                  </validation-provider>
                </v-col>

                <v-col>
                  <code>type="number"</code>
                </v-col>
              </v-row>

              <v-row align="center" dense>
                <v-col class="text-right body-1 grey--text" cols="2">Url</v-col>

                <v-col cols="8">
                  <validation-provider v-slot="{ errors }" rules="required" name="url">
                    <v-text-field
                      v-model="url"
                      color="secondary"
                      type="url"
                      :error-messages="errors"
                    />
                  </validation-provider>
                </v-col>

                <v-col>
                  <code>type="url"</code>
                </v-col>
              </v-row>

              <div class="pa-3 text-center">
                <v-btn color="success" default type="submit">Validate Inputs</v-btn>
              </div>
            </base-material-card>
          </form>
        </validation-observer>
      </v-col>

      <v-col cols="12">
        <validation-observer v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(validateForm)">
            <base-material-card color="success" inline title="Range Validation">
              <v-row align="center" dense>
                <v-col class="text-right body-1 grey--text" cols="2">Min Length</v-col>

                <v-col cols="8">
                  <validation-provider v-slot="{ errors }" name="min length" rules="required|min:5">
                    <v-text-field v-model="min" :error-messages="errors" color="secondary" />
                  </validation-provider>
                </v-col>

                <v-col>
                  <code>minLength="5"</code>
                </v-col>
              </v-row>

              <v-row align="center" dense>
                <v-col class="text-right body-1 grey--text" cols="2">Max Length</v-col>

                <v-col cols="8">
                  <validation-provider v-slot="{ errors }" rules="required|max:5" name="max length">
                    <v-text-field v-model="max" :error-messages="errors" color="secondary" />
                  </validation-provider>
                </v-col>

                <v-col>
                  <code>maxLength="5"</code>
                </v-col>
              </v-row>

              <div class="pa-3 text-center">
                <v-btn color="success" default type="submit">Validate Inputs</v-btn>
              </div>
            </base-material-card>
          </form>
        </validation-observer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import VTextFieldWithValidation from '@/components/inputs/VTextFieldWithValidation'

export default {
  data: () => {
    return {
      email: '',
      max: '',
      min: '',
      number: null,
      url: '',
      required: '',
      show: false,
      show2: false,
      show3: false,

      inputs: {
        actores_simple: '',
        actores_medio: '',
        actores_complejo: '',
      },
    }
  },
  components: {
    ValidationObserver,
    VTextFieldWithValidation,
  },
}
</script>
