(function () {
        $('#container').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Une hausse vertigineuse de déplacements de populations dans le monde'
            },
            subtitle: {
                text: 'Source : <a href="http://popstats.unhcr.org/en/overview">UNHCR</a> '
            },
            xAxis: {
                categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014','2015'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'En millions de personnes'
                },
                labels: {
                    formatter: function() {
                        return this.value / 1000000;
                    }
                }
            },
            tooltip: {
                shared: false,
             	 followPointer: false,
                valueSuffix: ' individus '
            },
            plotOptions: {
                areaspline: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 2,
                    marker: {
                        lineWidth: 2,
                        lineColor: '#666666'
                    }
                }
            },
            series: [{
                type : 'spline',
                name: 'Réfugiés',
             		marker: {
            		symbol: 'square'
        								},
               	color: '#0d233a',
                data: [12129572, 12116835, 10594055, 9592795, 9573397, 8661994, 9877703, 11390930, 10489812, 10396538, 10549681, 10404804, 10497957, 11699279,14385316,16121427]
            }, { type : 'spline',
                 color: '#f45b5b',
                name: 'Déplacés internes',
                data: [
                  { y: 5998501,
            			name:'2000: '
        }, { y: 5096502,
            			name:'2001: Afghanistan '
        }, 
                   4646641, {y:4181701, 
                                name :'2003: Irak'},5426539, 6616791, {  y: 12794268,
            			name:'2006: Rép. Dem. Congo, Ouganda, Côte d\'Ivoire',
            			marker: {
                		symbol: 'url(https://github.com/Pregoles/migmig/tree/master/images/fire.png)'
            }
        },   13740317, 14442227, 15628057, 14697804, {
            y: 15473378,
             name:'2011, Syrie',
            marker: {
                symbol: 'url(https://github.com/Pregoles/migmig/tree/master/images/fire.png)'
            }
        }, 17670368 , 23925555,32274619,37494172]
            }, { type : 'spline',
                color: '#2b908f',
                name: 'Demandeurs d\'asile',
                data: [947926, 943980, 1093755, 996448, 885249, 802174, 741291, 741110, 825043, 989169, 837445, 897021, 942797, 1164449,1804465,3219941]
            },   ]
        });
    });
