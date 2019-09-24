<template>
  <div>

    <div class="row">
      <div class="col-12">
        <card type="chart">          
        </card>
      </div>
    </div>
    
    <div class="row" id='Mensal' style="display:block">
      <div class="col-lg-12" :class="{'text-right': isRTL}">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category" id='nomeGrafico'>Mensal</h5>
            <h3 class="card-title"><i class="tim-icons icon-bell-55 text-primary "></i> 763,215</h3>
          </template>
          <div class="chart-area">
            <line-chart style="height: 100%"
                        chart-id="purple-line-chart"
                        :chart-data="purpleLineChart.chartData"
                        :gradient-colors="purpleLineChart.gradientColors"
                        :gradient-stops="purpleLineChart.gradientStops"
                        :extra-options="purpleLineChart.extraOptions">
            </line-chart>
          </div>
        </card>
      </div>
    </div>


    <div class="row" id='Entrega' style="display:none">
      <div class="col-lg-12" :class="{'text-right': isRTL}">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category" id='nomeGrafico'>Entrega</h5>
            <h3 class="card-title"><i class="tim-icons icon-bell-55 text-primary "></i> 703,000</h3>
          </template>
          <div class="chart-area">
            <line-chart style="height: 100%"
                        chart-id="purple-line-chart"
                        :chart-data="purpleLineChart1.chartData"
                        :gradient-colors="purpleLineChart1.gradientColors"
                        :gradient-stops="purpleLineChart1.gradientStops"
                        :extra-options="purpleLineChart1.extraOptions">
            </line-chart>
          </div>
        </card>
      </div>
    </div>


    <div class="row" id='Usuario' style="display:none">
      <div class="col-lg-12" :class="{'text-right': isRTL}">
        <card type="chart">
          <template slot="header">
            <h5 class="card-category" id='nomeGrafico'>usuario</h5>
            <h3 class="card-title"><i class="tim-icons icon-bell-55 text-primary "></i> 703,000</h3>
          </template>
          <div class="chart-area">
            <line-chart style="height: 100%"
                        chart-id="purple-line-chart"
                        :chart-data="purpleLineChart2.chartData"
                        :gradient-colors="purpleLineChart2.gradientColors"
                        :gradient-stops="purpleLineChart2.gradientStops"
                        :extra-options="purpleLineChart2.extraOptions">
            </line-chart>
          </div>
        </card>
      </div>
    </div>


    <div class="row">
        <div class="col-12">
            
            <ul data-v-116d7b87="" role="tablist" class="nav nav-pills nav-pills-primary nav-pills-icons justify-content-center">
                <li data-v-116d7b87="" data-toggle="tab" role="tablist" aria-expanded="true" class="nav-item active" @click="acaoGrafico( 'mensal' )">
                    <a data-v-116d7b87="" data-toggle="tab" role="tablist" aria-expanded="true" class="nav-link active">
                        <div data-v-116d7b87="" style="width:500%; height:50px; line-height:50px">
                            <span>
                                <i class="tim-icons icon-calendar-60"></i> Mensal
                            </span>
                        </div>
                    </a>
                </li>

                <li>&nbsp; &nbsp;</li>

                <li data-v-116d7b87="" data-toggle="tab" role="tablist" aria-expanded="true" class="nav-item active" @click="acaoGrafico( 'entrega' )">
                    <a data-v-116d7b87="" data-toggle="tab" role="tablist" aria-expanded="true" class="nav-link active">
                        <div data-v-116d7b87="" style="width:500%; height:50px; line-height:50px">
                            <span>
                                <i class="tim-icons icon-delivery-fast"></i> Entrega
                            </span>
                        </div>
                    </a>
                </li>

                <li>&nbsp; &nbsp;</li>

                <li data-v-116d7b87="" data-toggle="tab" role="tablist" aria-expanded="true" class="nav-item active" @click="acaoGrafico( 'usuario' )">
                    <a data-v-116d7b87="" data-toggle="tab" role="tablist" aria-expanded="true" class="nav-link active">
                        <div data-v-116d7b87="" style="width:500%; height:50px; line-height:50px">
                            <span>
                                <i class="tim-icons icon-single-02"></i> Usuário
                            </span>
                        </div>
                    </a>
                </li>

            </ul>

        </div>
    </div>


  </div>
</template>
<script>
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';
  import * as chartConfigs from '@/components/Charts/config';
  import TaskList from './Dashboard/TaskList';
  import UserTable from './Dashboard/UserTable';
  import config from '@/config';

  export default {
    components: {
      LineChart,
      BarChart,
      TaskList,
      UserTable
    },
    data() {
      return {
        purpleLineChart: {
          extraOptions: chartConfigs.purpleChartOptions,
          chartData: {
            labels: ['JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
            datasets: [{
              label: "TECOINs",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [160, 100, 70, 80, 120, 80],
            }]
          },
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.2, 0],
        },


        purpleLineChart1: {
          extraOptions: chartConfigs.purpleChartOptions,
          chartData: {
            labels: ['JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
            datasets: [{
              label: "TECOINs",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [10, 50, 80, 90, 100, 150],
            }]
          },
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.2, 0],
        },


        purpleLineChart2: {
          extraOptions: chartConfigs.purpleChartOptions,
          chartData: {
            labels: ['JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
            datasets: [{
              label: "TECOINs",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [10, 20, 10, 5, 60, 80],
            }]
          },
          gradientColors: config.colors.primaryGradient,
          gradientStops: [1, 0.2, 0],
        },


      }
    },
    computed: {
      enableRTL() {
        return this.$route.query.enableRTL;
      },
      isRTL() {
        return this.$rtl.isRTL;
      },
      bigLineChartCategories() {
        return this.$t('dashboard.chartCategories');
      }
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [{
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: config.colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.bigLineChart.allData[index]
          }],
          labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
        }
        this.$refs.bigChart.updateGradients(chartData);
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      },

      acaoGrafico( valor ) {
          document.getElementById( 'nomeGrafico' ).innerHTML = valor;

          if( valor == 'mensal' ) {
              document.getElementById( 'Mensal'  ).style.display = 'block';
              document.getElementById( 'Entrega' ).style.display = 'none';
              document.getElementById( 'Usuario' ).style.display = 'none';
          } else if( valor == 'entrega' ) {
              document.getElementById( 'Entrega' ).style.display = 'block';
              document.getElementById( 'Mensal'  ).style.display = 'none';
              document.getElementById( 'Usuario' ).style.display = 'none';
          } else {
              document.getElementById( 'Usuario' ).style.display = 'block';
              document.getElementById( 'Entrega' ).style.display = 'none';
              document.getElementById( 'Mensal'  ).style.display = 'none';
          }
      }
    },
    mounted() {
      this.i18n = this.$i18n;
      if (this.enableRTL) {
        this.i18n.locale = 'ar';
        this.$rtl.enableRTL();
      }
      this.initBigChart(0);
    },
    beforeDestroy() {
      if (this.$rtl.isRTL) {
        this.i18n.locale = 'en';
        this.$rtl.disableRTL();
      }
    }
  };
</script>
<style>
</style>
