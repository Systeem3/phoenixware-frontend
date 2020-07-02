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
            <v-row>
              <v-col cols="9">
                <VTextFieldWithValidation
                  label="Cantidad de Actores Simples"
                  color="secondary"
                  v-model="inputs.actores_simple"
                  type="number"
                  validate-on-blur
                  min="0"
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-12"
                    >mdi mdi-memory</v-icon>
                  </template>
                  <span>
                    Otros sistemas que interactúan con el sistema a desarrollar
                    mediante una interfaz de programación (API)
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <VTextFieldWithValidation
                  label="Cantidad de Actores Medios"
                  color="secondary"
                  v-model="inputs.actores_medio"
                  type="number"
                  validate-on-blur
                  min="0"
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-12"
                    >mdi mdi-console</v-icon>
                  </template>
                  <span>
                    Otro sistema interactuando a través de un protocolo (ej.
                    TCP/IP) o una persona interactuando a través de una interfaz
                    en modo texto
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9">
                <VTextFieldWithValidation
                  label="Cantidad de Actores Complejos"
                  color="secondary"
                  v-model="inputs.actores_complejo"
                  type="number"
                  validate-on-blur
                  min="0"
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-12"
                    >mdi-monitor-multiple</v-icon>
                  </template>
                  <span>
                    Una persona que interactúa con el sistema mediante una
                    interfaz gráfica (GUI)
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>
            <v-spacer />
          </v-form>
        </base-material-card>
      </v-col>

      <v-col cols="12" md="6">
        <base-material-card
          color="secondary"
          icon=" mdi-layers"
          title="Casos de Uso"
          class="py-3 px-5"
        >
          <v-form>
            <v-row>
              <v-col cols="9">
                <VTextFieldWithValidation
                  label="Cantidad de CU Simples"
                  color="secondary"
                  v-model="inputs.cu_simple"
                  type="number"
                  validate-on-blur
                  min="0"
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-12"
                    >mdi mdi-numeric-3-box</v-icon>
                  </template>
                  <span>Con 3 transacciones o menos</span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <VTextFieldWithValidation
                  label="Cantidad de CU Medios"
                  color="secondary"
                  v-model="inputs.cu_medio"
                  type="number"
                  validate-on-blur
                  min="0"
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-12"
                    >mdi mdi-numeric-7-box</v-icon>
                  </template>
                  <span>De 4 a 7 transacciones</span>
                </v-tooltip>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9">
                <VTextFieldWithValidation
                  label="Cantidad de CU Complejos"
                  color="secondary"
                  v-model="inputs.cu_complejo"
                  type="number"
                  validate-on-blur
                  min="0"
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-12"
                    >mdi mdi-numeric-7-box-multiple-outline</v-icon>
                  </template>
                  <span>Con más de 7 transacciones</span>
                </v-tooltip>
              </v-col>
            </v-row>
            <v-spacer />
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>

    <!-- Segunda Fila-->

    <v-row>
      <v-col cols="12" md="6">
        <base-material-card
          color="secondary"
          icon="mdi mdi-code-array"
          title="Complejidad Técnica"
          class="py-2 px-5"
        >
          <v-form>
            <v-row>
              <v-col>
                <span class="font-weight-light ml-3">Evalúa en escala del 0 al 5:</span>
              </v-col>
              <v-col>
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-1 mb-1"
                    >mdi mdi-help-circle</v-icon>
                  </template>
                  <span>
                    De 0 a 2 (Irrelevante) / De 3 a 4 (Medio) / Igual a 5
                    (Esencial)
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="¿Qué tan distribuido es el sistema?"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.ct_1"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-5"
                    >mdi mdi-google-circles-extended</v-icon>
                  </template>
                  <span>
                    Un sistema distribuido es un sistema cuyos componentes están
                    ubicados en una red de computadoras, que comunican y
                    coordinan sus acciones al intercambiar mensajes entre sí
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Impacto de Objetivos Performance"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.ct_2"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi mdi-auto-fix</v-icon>
                  </template>
                  <span>
                    Los objetivos performance son específicos, mensurables,
                    alcanzables, relevantes, temporales y miden el tiempo de
                    respuesta, disponibilidad y eficiencia del sistema
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Eficiencia para el Usuario Final"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.ct_3"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-5"
                    >mdi mdi-emoticon-happy</v-icon>
                  </template>
                  <span>
                    La Eficiencia para Usuario Final es el grado de
                    consideración de factores humanos en el uso de la aplicación
                    (Amigabilidad)
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Procesamiento Interno Complejo"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.ct_4"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-format-subscript</v-icon>
                  </template>
                  <span>
                    Evalúe si se involucran cálculos o un nivel de abstracción
                    de conocimiento en los procesos internos del sistema
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Reusabilidad del Código"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.ct_5"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-download</v-icon>
                  </template>
                  <span>
                    La reusabilidad es la medida de la capacidad de los
                    elementos de software de poder utilizarse en el desarrollo
                    de otros sistemas o aplicaciones posteriormente
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Facilidad de Instalación"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.ct_7"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-database</v-icon>
                  </template>
                  <span>
                    Evalúe el grado de complejidad que supone la instalación
                    (Deployment) del sistema
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Facilidad de Uso"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.ct_7"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-book-open</v-icon>
                  </template>
                  <span>
                    Evalúe el grado de complejidad que supone el uso del sistema
                    para el usuario final
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Portabilidad"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.ct_8"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-cellphone-android</v-icon>
                  </template>
                  <span>
                    Evalúe qué tan portable ha de ser el software para
                    ejecutarse en diferentes plataformas
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Facilidad de Cambio"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.ct_9"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-drawing-box</v-icon>
                  </template>
                  <span>
                    Evalúe qué tanta complejidad supondría realizar cambios a
                    las funcionalidades del software
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Concurrencia"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.ct_10"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-equal-box</v-icon>
                  </template>
                  <span>
                    La concurrencia es la capacidad de los elementos del
                    software para ejecutarse fuera de orden o en orden parcial,
                    sin afectar el resultado final
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Objetivos Especiales de Seguridad"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.ct_11"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-security</v-icon>
                  </template>
                  <span>
                    Evalúe qué tanto se involucran aspectos de seguridad
                    informática en su sistema
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Acceso a Terceras Partes"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.ct_12"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-wheelchair-accessibility</v-icon>
                  </template>
                  <span>
                    Evalúe qué tanto se involucran aspectos de Accesibilidad
                    para el usuario en su sistema
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Facilidades de Entrenamiento al Usuario"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.ct_13"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-library</v-icon>
                  </template>
                  <span>
                    Evalúe qué tanto se incorporan funcionalidades en su sistema
                    para adiestrar a los usuarios finales en su uso
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-spacer />
          </v-form>
        </base-material-card>
      </v-col>

      <v-col cols="12" md="6">
        <base-material-card
          color="primary"
          icon="mdi mdi-web"
          title="Factores Ambientales"
          class="py-2 px-5"
        >
          <v-form>
            <v-row>
              <v-col>
                <span class="font-weight-light ml-3">Evalúa en escala del 0 al 5:</span>
              </v-col>
              <v-col>
                <v-tooltip right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-1 mb-1"
                    >mdi mdi-help-circle</v-icon>
                  </template>
                  <span>
                    De 0 a 2 (Irrelevante) / De 3 a 4 (Medio) / Igual a 5
                    (Esencial)
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Familiaridad con el Modelo del Proyecto"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.a_1"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-5"
                    >mdi mdi-history</v-icon>
                  </template>
                  <span>
                    Evalúe qué tan familiarizado está su equipo con el proceso
                    de desarrollo y modelado asociado al proyecto
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Experiencia en la Aplicación"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.a_2"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi mdi-human</v-icon>
                  </template>
                  <span>
                    Evalúe qué tan capacitado o experimentado está su equipo
                    para asumir el desarrollo de su proyecto
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Experiencia en Orientación a Objetos"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.a_3"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-5"
                    >mdi mdi-hexagon</v-icon>
                  </template>
                  <span>
                    Evalúe que tanta experiencia tiene su equipo con el
                    Paradigma Orientado a Objetos (POO)
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Capacidad del Analista Líder"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.a_4"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-android-studio</v-icon>
                  </template>
                  <span>
                    Evalúe que tan capacitado está su Analista Líder de su
                    equipo para afrontar el desarrollo del proyecto
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Motivación"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.a_5"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-emoticon</v-icon>
                  </template>
                  <span>
                    Evalúe qué tan motivado está su equipo de trabajo para
                    asumir el desarrollo del proyecto
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Estabilidad de los Requerimientos"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.a_6"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-rename-box</v-icon>
                  </template>
                  <span>
                    Evalúe que tan sujetos a cambios están los requisitos de su
                    proyecto durante su desarrollo
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Personal a Medio Tiempo"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.a_7"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-calendar-clock</v-icon>
                  </template>
                  <span>
                    Evalúe que tanto se trabajará a media jornada (part-time) en
                    su equipo de desarrollo
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="9">
                <v-select
                  color="secondary"
                  item-color="secondary"
                  label="Dificultad en Lenguajes de Programación"
                  :items="type1"
                  item-text="name"
                  item-value="id"
                  v-model="inputs.a_8"
                  validate-on-blur
                  class="ml-3"
                />
              </v-col>
              <v-col>
                <v-tooltip right cols="2">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="secondary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      class="ml-2 mt-6"
                    >mdi-television-guide</v-icon>
                  </template>
                  <span>
                    Evalúe qué tanta complejidad supone el uso de los Lenguajes
                    de Programación a utilizar en su proyecto
                  </span>
                </v-tooltip>
              </v-col>
            </v-row>

            <v-spacer />
          </v-form>
        </base-material-card>

        <v-spacer class="mt-2" />

        <!--RESULTADOS PESOS Y FACTORES-->

        <base-material-card
          color="grey darken-1"
          icon="mdi mdi-clipboard-check"
          title="Resultados (Pesos y Factores)"
          class="py-2 px-5"
        >
          <v-form>
            <v-text-field
              disabled
              dense
              filled
              outlined
              color="secondary"
              label="UUCW (Factor de Peso de los Casos de Uso)"
              v-model="uucw"
            />
            <v-text-field
              disabled
              dense
              filled
              outlined
              color="secondary"
              label="UAW (Factor de Peso de los Actores)"
              v-model="uaw"
            />
            <v-text-field
              disabled
              dense
              filled
              outlined
              color="secondary"
              label="UUCP (Puntos de Casos de Uso sin Ajustar)"
              v-model="uucp"
            />
            <v-text-field
              disabled
              dense
              filled
              outlined
              color="secondary"
              label="TCF (Factor de Complejidad Técnica)"
              v-model="tcf"
            />
            <v-text-field
              disabled
              dense
              filled
              outlined
              color="secondary"
              label="ECF (Factor de Complejidad Ambiental)"
              v-model="ecf"
            />
            <v-text-field
              disabled
              dense
              filled
              outlined
              color="secondary"
              label="UCP (Puntos de Casos de Uso Ajustados)"
              v-model="ucp"
            />
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>

    <!--Resutados de TIEMPO-->
    <v-row>
      <v-col>
        <base-material-card
          color="grey darken-1"
          icon="mdi mdi-clock"
          title="Resultados (Tiempos)"
          class="py-2 px-5"
        >
          <v-form>
            <v-col>
              <span class="font-weight-light ml-3 mt-4 mb-3">Esfuerzo Total:</span>
              <v-text-field
                disabled
                dense
                regular
                outlined
                filled
                prepend-inner-icon="mdi-clock"
                color="primary"
                label="Esfuerzo Total en Horas Hombre"
                v-model="total"
                class="mt-2"
              />
              <v-text-field
                disabled
                dense
                regular
                outlined
                filled
                prepend-inner-icon="mdi-calendar"
                color="primary"
                label="Total de días"
                v-model="dias"
                class="mt-2"
              />

              <span
                class="font-weight-light ml-3 mt-4 mb-3"
              >División del Tiempo por Actividad de Desarrollo:</span>
              <v-text-field
                disabled
                dense
                filled
                outlined
                color="secondary"
                label="Análisis (15%)"
                v-model="analisis"
              />
              <v-text-field
                disabled
                dense
                filled
                outlined
                color="secondary"
                label="Diseño (12%)"
                v-model="diseno"
              />
              <v-text-field
                disabled
                dense
                filled
                outlined
                color="secondary"
                label="Programación (40%)"
                v-model="programacion"
              />
              <v-text-field
                disabled
                dense
                filled
                outlined
                color="secondary"
                label="Pruebas (20%)"
                v-model="pruebas"
              />
              <v-text-field
                disabled
                dense
                filled
                outlined
                color="secondary"
                label="Sobrecarga (13%)"
                v-model="sobrecarga"
              />
            </v-col>
          </v-form>
        </base-material-card>
      </v-col>
      <v-col>
        <base-material-card
          color="primary"
          icon="mdi mdi-calendar"
          title="Fechas del Proyecto"
          class="py-2 px-5"
        >
          <v-form>
            <v-col>
              <v-row>
                <v-col>
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
                      <v-btn color="secondary" large @click="menu = false">Cancelar</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
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
                        label="Fecha Final"
                        prepend-icon="mdi-calendar-outline"
                        readonly
                        v-on="on"
                      />
                    </template>

                    <v-date-picker
                      v-model="inputs.fecha_final"
                      color="secondary"
                      landscape
                      :min="inputs.fecha_inicio"
                      :max="inputs.fecha_inicio"
                      scrollable
                      @input="menu = false"
                    >
                      <v-spacer />
                      <v-btn color="secondary" large @click="menu = false">Cancelar</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              
                <v-row>
                <v-spacer />
                    <v-btn default color="secondary">Modificar Fechas</v-btn>
                <v-spacer />
                </v-row>

            </v-col>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import { ValidationObserver } from 'vee-validate'
import VTextFieldWithValidation from '@/components/inputs/VTextFieldWithValidation'

export default {
  data: () => {
    return {
      max: '',
      min: '',
      number: null,
      resultado: '',
      dias: '',
      uucw: '',
      uaw: '',
      uucp: '',
      tcf: '',
      ecf: '',
      udp: '',
      analisis: '',
      diseno: '',
      programacion: '',
      sobrecarga: '',

      inputs: {
        actores_simple: '',
        actores_medio: '',
        actores_complejo: '',
        cu_simple: '',
        cu_medio: '',
        cu_complejo: '',
        ct_1: '',
        ct_2: '',
        ct_3: '',
        ct_4: '',
        ct_5: '',
        ct_6: '',
        ct_7: '',
        ct_8: '',
        ct_9: '',
        ct_10: '',
        ct_11: '',
        ct_12: '',
        a_1: '',
        a_2: '',
        a_3: '',
        a_4: '',
        a_5: '',
        a_6: '',
        a_7: '',
        a_8: '',
        fecha_inicio: '',
        fecha_fin: '',
      },

      type1: [
        { name: '0', id: '0' },
        { name: '1', id: '1' },
        { name: '2', id: '2' },
        { name: '3', id: '3' },
        { name: '4', id: '4' },
        { name: '5', id: '5' },
      ],
    }
  },
  components: {
    // ValidationObserver,
    VTextFieldWithValidation,
  },
}
</script>
