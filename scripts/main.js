Highcharts.chart('container1', {

  title: {
    text: 'Student Dropout Rate, 2007-2010'
  },

  subtitle: {
    text: 'from the U.S. Department of Education'
  },

  yAxis: {
    title: {
      text: 'Dropout Rate'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2007
    }
  },

  series: [{
    name: 'Arkansas',
    data: [4.1, 3.6, 3.5, 3.2]
  }, {
    name: 'Oregon',
    data: [3.4, 3.4, 3.2, 3.4]
  }, {
    name: 'South Carolina',
    data: [3.4, 3.0, 2.8, 2.5]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});


Highcharts.chart('container2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Total Arrests per Year'
    },
    subtitle: {
        text: 'from the Federal Bureau of Investigation'
    },
    xAxis: {
        categories: ['2008', '2009', '2010', '2011'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of arrests',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      x: -16,
      y: 15,
      floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Arkansas',
        data: [145897, 151593, 144123, 137593]
    }, {
        name: 'Oregon',
        data: [149363, 135375, 135503, 135651]
    }, {
        name: 'South Carolina',
        data: [178097, 204369, 200643, 182440]
    }],


});
