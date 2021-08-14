const ter_1 = document.getElementById("ter-1");
const ter_1_chart = echarts.init(ter_1);

const ter_2 = document.getElementById("ter-2");
const ter_2_chart = echarts.init(ter_2);

const ter_3 = document.getElementById("ter-3");
const ter_3_chart = echarts.init(ter_3);

const ter_4 = document.getElementById("ter-4");
const ter_4_chart = echarts.init(ter_4);

let app = {};

let option;

option = {
    series: [{
            type: 'gauge',
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            height: '100%',
            splitNumber: 12,
            itemStyle: {
                color: '#FFAB91'
            },
            progress: {
                show: true,
                width: 20
            },
            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    width: 20
                }
            },
            axisTick: {
                distance: -30,
                splitNumber: 5,
                lineStyle: {
                    width: 2,
                    color: '#999'
                }
            },
            splitLine: {
                distance: -35,
                length: 14,
                lineStyle: {
                    width: 3,
                    color: '#999'
                }
            },
            axisLabel: {
                distance: -10,
                color: '#999',
                fontSize: 12
            },
            anchor: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                valueAnimation: true,
                width: '60%',
                lineHeight: 40,
                height: '15%',
                borderRadius: 8,
                offsetCenter: [0, '-15%'],
                fontSize: 20,
                fontWeight: 'bolder',
                formatter: '{value} °C',
                color: 'auto'
            },
            data: [{
                value: 20
            }]
        },

        {
            type: 'gauge',
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            itemStyle: {
                color: '#FD7347',
            },
            progress: {
                show: true,
                width: 8
            },

            pointer: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 20,
            }]

        }
    ],
};

/*setInterval(function() {
    let random = (Math.random() * 60).toFixed(2) - 0;
    option.series[0].data[0].value = random;
    option.series[1].data[0].value = random;
    myChart.setOption(option, true);
}, 2000);*/

if (option && typeof option === 'object') {
    ter_1_chart.setOption(option);
    ter_2_chart.setOption(option);
    ter_3_chart.setOption(option);
    ter_4_chart.setOption(option);
}