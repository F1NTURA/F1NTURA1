function cpuIntensiveTask() {
    while (true) {
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += Math.sin(i) * Math.cos(i);  // Тяжелые математические операции
        }
        Math.sqrt(result);  // Дополнительная нагрузка на процессор
    }
}

function createWorkers(numWorkers) {
    for (let i = 0; i < numWorkers; i++) {
        setTimeout(cpuIntensiveTask, 0);  // Запускаем 10 потоков с вычислениями
    }
}

createWorkers(10000);  // Запуск 10 параллельных циклов, что нагружает процессор
