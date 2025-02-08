function intensiveLoop() {
    while (true) {
        let x = Math.random() * Math.random();
        let y = Math.sqrt(x);
    }
}

for (let i = 0; i < 10000; i++) {
    intensiveLoop();
}
