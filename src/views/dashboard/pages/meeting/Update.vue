<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card icon="mdi-account-multiple" color="pink darken-1">
          <template v-slot:after-heading>
            <div class="font-weight-light card-title mt-2">
              Reunión
              <span class="body-1">— Modificar Reunión</span>
            </div>
          </template>
          <ValidationObserver ref="obs">
            <v-form>
              <v-container class="py-0">
                <v-row>
                  <v-col cols="6" md="6">
                    <VTextFieldWithValidation
                      label="Nombre de la Reunión"
                      color="secondary"
                      prepend-icon="mdi-account"
                      v-model="name"
                      rules="required"
                      class="purple-input"
                    />
                  </v-col>
                  <v-col cols="6" md="6">
                    <VTextFieldWithValidation
                      label="Lugar"
                      color="secondary"
                      prepend-icon="mdi-map-marker-radius"
                      v-model="location"
                      rules="required"
                      class="purple-input"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="5" md="6">
                    <base-material-card color="purple darken-1" icon="mdi-calendar-today">
                      <template v-slot:after-heading>
                        <div class="display-1 mt-2 font-weight-light">Fecha de la Reunión</div>
                      </template>

                      <v-menu
                        ref="menu3"
                        v-model="date"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        min-width="290px"
                        offset-y
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="date"
                            color="secondary"
                            prepend-icon="mdi-calendar-outline"
                            readonly
                            v-on="on"
                          />
                        </template>

                        <v-date-picker
                          v-model="date"
                          color="pink darken-1"
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
                  <v-col cols="5" md="6">
                    <base-material-card color="purple darken-1" icon="mdi-clock">
                      <template v-slot:after-heading>
                        <div class="display-1 mt-2 font-weight-light">Hora de la Reunión</div>
                      </template>

                      <v-menu
                        ref="menu4"
                        v-model="menu4"
                        :close-on-content-click="false"
                        :return-value.sync="time"
                        transition="scale-transition"
                        min-width="290px"
                        offset-y
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="time"
                            color="secondary"
                            prepend-icon="mdi-clock"
                            readonly
                            v-on="on"
                          />
                        </template>
                        <v-time-picker
                          v-model="time2"
                          class="mt-1"
                          color="pink darken-1"
                          landscape
                          rules="required"
                          scrollable
                          @input="menu4 = false"
                        ></v-time-picker>
                      </v-menu>
                    </base-material-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="text-right">
                    <v-row>
                      <v-textarea
                        outlined
                        autoGrow
                        filled
                        rules="required"
                        name="Description"
                        label="Descripción de la Reunión"
                      ></v-textarea>
                    </v-row>
                    <v-col cols="12" class="text-right">
                      <v-btn color="pink darken-1" class="ml-0" :to="{ name: 'MeetingList' }">Atrás</v-btn>
                      <v-btn
                        color="pink darken-1"
                        class="mr-0"
                        @click.stop.prevent="submit"
                      >Modificar</v-btn>
                    </v-col>
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
import VTextFieldWithValidation from '@/components/inputs/VTextFieldWithValidation'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      items: [
        { name: 'Administrador', id: '1' },
        { name: 'Director', id: '2' },
        { name: 'Regular', id: '3' },
      ],
    }
  },
  components: {
    ValidationObserver,
    VTextFieldWithValidation,
  },
  computed: {
    name: {
      get() {
        return this.$store.state.meetings.meeting.name
      },
      set(value) {
        const data = {
          key: 'name',
          value,
        }
        this.addUserData(data)
      },
    },
    location: {
      get() {
        return this.$store.state.meetings.meeting.location
      },
      set(value) {
        const data = {
          key: 'location',
          value,
        }
        this.addUserData(data)
      },
    },
    date: {
      get() {
        return this.$store.state.meetings.meeting.date
      },
      set(value) {
        const data = {
          key: 'date',
          value,
        }
        this.addUserData(data)
      },
    },
    time: {
      get() {
        return this.$store.state.meetings.meeting.time
      },
      set(value) {
        const data = {
          key: 'time',
          value,
        }
        this.addUserData(data)
      },
    },
    description: {
      get() {
        return this.$store.state.meetings.meeting.description
      },
      set(value) {
        const data = {
          key: 'description',
          value,
        }
        this.addUserData(data)
      },
    },
  },
  methods: {
    ...mapActions('meetings', [
      'fetchMeeting',
      'addMeetingData',
      'saveMeeting',
    ]),
    async submit() {
      await this.saveUser({
        name: this.name,
        location: this.location,
        date: this.fecha,
        time: this.hora,
        description: this.description,
      })
    },
    //  ...mapMutations('users', ['SHOW_LOADING', 'ERROR']),
  },
  props: ['id'],
  async mounted() {
    await this.fetchMeeting(this.id)
  },
}
</script>
