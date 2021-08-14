const ter_1 = document.getElementById("ter-1");
const ter_1_chart = echarts.init(ter_1);

const ter_2 = document.getElementById("ter-2");
const ter_2_chart = echarts.init(ter_2);

const ter_3 = document.getElementById("ter-3");
const ter_3_chart = echarts.init(ter_3);

const ter_4 = document.getElementById("ter-4");
const ter_4_chart = echarts.init(ter_4);

const line = document.getElementById("line-chart");
const line_chart = echarts.init(line);

let optionThermistor;

optionThermistor = {
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

var optionLine;

optionLine = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [25, 30, 45, 48, 10, 15, 55],
        type: 'line',
        smooth: true
    }]
};

if (optionLine && typeof optionLine === 'object') {
    line_chart.setOption(optionLine);
}

if (optionThermistor && typeof optionThermistor === 'object') {
    ter_1_chart.setOption(optionThermistor);
    ter_2_chart.setOption(optionThermistor);
    ter_3_chart.setOption(optionThermistor);
    ter_4_chart.setOption(optionThermistor);
}