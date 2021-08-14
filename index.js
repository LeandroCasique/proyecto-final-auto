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

const db = firebase.database();

const getDataTThe1 = () => db.ref('Refrigerador/TThe1').limitToLast(1);
const getDataTThe2 = () => db.ref('Refrigerador/TThe2').limitToLast(1);
const getDataTThe3 = () => db.ref('Refrigerador/TThe3').limitToLast(1);
const getDataTThe4 = () => db.ref('Refrigerador/TThe4').limitToLast(1);

let optionThermistor = {
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
                formatter: function (value) {
                    return `${value.toFixed(2)} °C`;
                },
                color: 'auto'
            },
            data: [{
                value: 0
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
                value: 0,
            }]

        }
    ],
};

let optionLine = {
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
        smooth: true,
        lineStyle: {
            color: "#000"
        } 
    }]
};

let optionThermistor1 = { ...optionThermistor };
let optionThermistor2 = { ...optionThermistor };
let optionThermistor3 = { ...optionThermistor };
let optionThermistor4 = { ...optionThermistor };

if (optionLine && typeof optionLine === 'object') {
    line_chart.setOption(optionLine);
}

if (optionThermistor && typeof optionThermistor === 'object') {
    ter_1_chart.setOption(optionThermistor1);
    ter_2_chart.setOption(optionThermistor2);
    ter_3_chart.setOption(optionThermistor3);
    ter_4_chart.setOption(optionThermistor4);
}

const updateDataTThe1 = async () => {
    const querySnapshot = await getDataTThe1();

    querySnapshot.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        for (const key in data) {
            optionThermistor1.series[0].data[0].value = data[key];
            optionThermistor1.series[1].data[0].value = data[key];
            ter_1_chart.setOption(optionThermistor1, true);
        }
    });

    setInterval(() =>{
        updateDataTThe1();
    }, 60000)
};

const updateDataTThe2 = async () => {
    const querySnapshot = await getDataTThe2();

    querySnapshot.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        for (const key in data) {
            optionThermistor2.series[0].data[0].value = data[key];
            optionThermistor2.series[1].data[0].value = data[key];
            ter_2_chart.setOption(optionThermistor2, true);
        }
    });

    setInterval(() =>{
        updateDataTThe2();
    }, 60000)
};

const updateDataTThe3 = async () => {
    const querySnapshot = await getDataTThe3();

    querySnapshot.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        for (const key in data) {
            optionThermistor3.series[0].data[0].value = data[key];
            optionThermistor3.series[1].data[0].value = data[key];
            ter_3_chart.setOption(optionThermistor3, true);
        }
    });

    setInterval(() =>{
        updateDataTThe3();
    }, 60000)
};

const updateDataTThe4 = async () => {
    const querySnapshot = await getDataTThe4();

    querySnapshot.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        for (const key in data) {
            optionThermistor4.series[0].data[0].value = data[key];
            optionThermistor4.series[1].data[0].value = data[key];
            ter_4_chart.setOption(optionThermistor4, true);
        }
    });

    setInterval(() =>{
        updateDataTThe4();
    }, 60000)
};

window.addEventListener('DOMContentLoaded', (e) => {
    updateDataTThe1();
    updateDataTThe2();
    updateDataTThe3();
    updateDataTThe4();
});