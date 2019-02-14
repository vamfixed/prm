<template>
  <v-container grid-list-xs>
    <v-layout row wrap justify-center>
      <v-flex xs10 offset-xs-1>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-card class="ma-1 text-xs-center" color="green" dark>
              <v-card-text>
                <v-sheet color="rgba(0, 0, 0, .12)">
                  <v-sparkline :value="value" color="rgba(255, 255, 255, .7)" height="100" padding="24" stroke-linecap="round"
                    smooth>
                    <template slot="label" slot-scope="item">
                      ${{ item.value }}
                    </template>
                  </v-sparkline>
                </v-sheet>
              </v-card-text>

              <v-card-text>
                <div class="display-1 font-weight-thin">Purchase Last 24h</div>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions class="justify-center">
                <v-btn block flat>Go to Report</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 md6>
            <v-card class="ma-1 text-xs-center" color="green" dark>
              <v-card-text>
                <v-sheet color="rgba(0, 0, 0, .12)">
                  <v-sparkline :value="value" color="rgba(255, 255, 255, .7)" height="100" padding="24" stroke-linecap="round"
                    smooth>
                    <template slot="label" slot-scope="item">
                      ${{ item.value }}
                    </template>
                  </v-sparkline>
                </v-sheet>
              </v-card-text>

              <v-card-text>
                <div class="display-1 font-weight-thin">Sorted Last 24h</div>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions class="justify-center">
                <v-btn block flat>Go to Report</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card class="ma-1 text-xs-center" color="green" dark>
              <v-card-text>
                <v-sheet color="rgba(0, 0, 0, .12)">
                  <v-sparkline :value="value" color="rgba(255, 255, 255, .7)" height="100" padding="24" stroke-linecap="round"
                    smooth>
                    <template slot="label" slot-scope="item">
                      ${{ item.value }}
                    </template>
                  </v-sparkline>
                </v-sheet>
              </v-card-text>

              <v-card-text>
                <div class="display-1 font-weight-thin">Sales Last 24h</div>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions class="justify-center">
                <v-btn block flat>Go to Report</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760
      ]
    })
  }

</script>
