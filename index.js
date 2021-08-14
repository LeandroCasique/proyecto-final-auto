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

const getDataTTh = (nameCollection, limt = 1) => db.ref(nameCollection).limitToLast(limt);

const getDataHora = (limt = 1) =>  db.ref('Refrigerador/Hora').limitToLast(limt);
const getDataMinutos = (limt = 1) =>  db.ref('Refrigerador/Minutos').limitToLast(limt);
const getDataDia = (limt = 1) =>  db.ref('Refrigerador/Dia').limitToLast(limt);
const getDataMes = (limt = 1) =>  db.ref('Refrigerador/Mes').limitToLast(limt);
const getDataAño = (limt = 1) =>  db.ref('Refrigerador/Ano').limitToLast(limt);

let valueForChartLine = 'Refrigerador/TThe1';

let refSetIntervalLine = null;

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
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [],
        type: 'line',
        smooth: true,
        lineStyle: {
            color: "#fd7347"
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
    const querySnapshot = await getDataTTh('Refrigerador/TThe1');

    querySnapshot.on('value', (snapshot) => {
        const data = snapshot.val();

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
    const querySnapshot = await getDataTTh('Refrigerador/TThe2');

    querySnapshot.on('value', (snapshot) => {
        const data = snapshot.val();

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
    const querySnapshot = await getDataTTh('Refrigerador/TThe3');

    querySnapshot.on('value', (snapshot) => {
        const data = snapshot.val();

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
    const querySnapshot = await getDataTTh('Refrigerador/TThe4');

    querySnapshot.on('value', (snapshot) => {
        const data = snapshot.val();

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

const updateDataLine = async (nameTTh) => {
    if(refSetIntervalLine) {
        console.log('clear')
        clearInterval(refSetIntervalLine);
    }

    const [
        dataTThe,
        dataMin,
        dataHora,
        dataDia,
        dataMes,
        dataYear
    ] = await Promise.all([
        new Promise(async (resolve, reject) => {
            const querySnapshotTThe = await getDataTTh(nameTTh, 100);
            let dataReturn = [];
            querySnapshotTThe.on('value', (snapshot) => {
                const data = snapshot.val();

                for (const key in data) {
                    dataReturn.push(data[key]);
                }

                resolve(dataReturn);
            });
        }),
        new Promise(async (resolve, reject) => {
            const querySnapshot = await getDataMinutos(100);
            let dataReturn = [];
            querySnapshot.on('value', (snapshot) => {
                const data = snapshot.val();

                for (const key in data) {
                    dataReturn.push(data[key]);
                }

                resolve(dataReturn);
            });
        }),
        new Promise(async (resolve, reject) => {
            const querySnapshot = await getDataHora(100);
            let dataReturn = [];
            querySnapshot.on('value', (snapshot) => {
                const data = snapshot.val();

                for (const key in data) {
                    dataReturn.push(data[key]);
                }

                resolve(dataReturn);
            });
        }),
        new Promise(async (resolve, reject) => {
            const querySnapshot = await getDataDia(100);
            let dataReturn = [];
            querySnapshot.on('value', (snapshot) => {
                const data = snapshot.val();

                for (const key in data) {
                    dataReturn.push(data[key]);
                }

                resolve(dataReturn);
            });
        }),
        new Promise(async (resolve, reject) => {
            const querySnapshot = await getDataMes(100);
            let dataReturn = [];
            querySnapshot.on('value', (snapshot) => {
                const data = snapshot.val();

                for (const key in data) {
                    dataReturn.push(data[key]);
                }

                resolve(dataReturn);
            });
        }),
        new Promise(async (resolve, reject) => {
            const querySnapshot = await getDataAño(100);
            let dataReturn = [];
            querySnapshot.on('value', (snapshot) => {
                const data = snapshot.val();

                for (const key in data) {
                    dataReturn.push(data[key]);
                }

                resolve(dataReturn);
            });
        })
    ]);

    let dataXaxis = [];

    for(let i = 0; i < dataTThe.length; i++) {
        dataXaxis.push(`${dataYear[i]}:${dataMes[i]}:${dataDia[i]}:${dataHora[i]}:${dataMin[i]}`)
    }

    optionLine.xAxis.data = dataXaxis;
    optionLine.series[0].data = dataTThe;
    line_chart.setOption(optionLine, true);

    refSetIntervalLine = setInterval(() =>{
        console.log('running')
        updateDataLine(valueForChartLine);
    }, 60000);
};

const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');

window.addEventListener('DOMContentLoaded', (e) => {
    updateDataTThe1();
    updateDataTThe2();
    updateDataTThe3();
    updateDataTThe4();
    btn1.style.backgroundColor = '#0d6efd';
    btn1.style.borderColor = '#0d6efd';
    btn2.style.backgroundColor = '#fd7347';
    btn2.style.borderColor = '#fd7347';
    btn3.style.backgroundColor = '#fd7347';
    btn3.style.borderColor = '#fd7347';
    btn4.style.backgroundColor = '#fd7347';
    btn4.style.borderColor = '#fd7347';
    updateDataLine(valueForChartLine);
});

btn1.addEventListener('click',  (e) => {
    btn1.style.backgroundColor = '#0d6efd';
    btn1.style.borderColor = '#0d6efd';
    btn2.style.backgroundColor = '#fd7347';
    btn2.style.borderColor = '#fd7347';
    btn3.style.backgroundColor = '#fd7347';
    btn3.style.borderColor = '#fd7347';
    btn4.style.backgroundColor = '#fd7347';
    btn4.style.borderColor = '#fd7347';

    valueForChartLine = 'Refrigerador/TThe1';
    updateDataLine(valueForChartLine);
});

btn2.addEventListener('click',  (e) => {
    btn1.style.backgroundColor = '#fd7347';
    btn1.style.borderColor = '#fd7347';
    btn2.style.backgroundColor = '#0d6efd';
    btn2.style.borderColor = '#0d6efd';
    btn3.style.backgroundColor = '#fd7347';
    btn3.style.borderColor = '#fd7347';
    btn4.style.backgroundColor = '#fd7347';
    btn4.style.borderColor = '#fd7347';

    valueForChartLine = 'Refrigerador/TThe2';
    updateDataLine(valueForChartLine);
});

btn3.addEventListener('click',  (e) => {
    btn1.style.backgroundColor = '#fd7347';
    btn1.style.borderColor = '#fd7347';
    btn2.style.backgroundColor = '#fd7347';
    btn2.style.borderColor = '#fd7347';
    btn3.style.backgroundColor = '#0d6efd';
    btn3.style.borderColor = '#0d6efd';
    btn4.style.backgroundColor = '#fd7347';
    btn4.style.borderColor = '#fd7347';

    valueForChartLine = 'Refrigerador/TThe3';
    updateDataLine(valueForChartLine);
});

btn4.addEventListener('click',  (e) => {
    btn1.style.backgroundColor = '#fd7347';
    btn1.style.borderColor = '#fd7347';
    btn2.style.backgroundColor = '#fd7347';
    btn2.style.borderColor = '#fd7347';
    btn3.style.backgroundColor = '#fd7347';
    btn3.style.borderColor = '#fd7347';
    btn4.style.backgroundColor = '#0d6efd';
    btn4.style.borderColor = '#0d6efd';

    valueForChartLine = 'Refrigerador/TThe4';
    updateDataLine(valueForChartLine);
});
