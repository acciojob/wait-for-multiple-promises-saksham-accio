function createPromise(promiseNumber) {
      return new Promise((resolve) => {
        const time = Math.random() * 2 + 1; // random time between 1 and 3 seconds
        setTimeout(() => {
          resolve({ promiseNumber, time });
        }, time * 1000);
      });
    }

    const promise1 = createPromise(1);
    const promise2 = createPromise(2);
    const promise3 = createPromise(3);

    const startTime = Date.now();

    Promise.all([promise1, promise2, promise3]).then(results => {
      const totalTime = (Date.now() - startTime) / 1000;
      const outputElement = document.getElementById('output');

      // Remove loading row
      outputElement.innerHTML = '';

      // Add results to the table
      results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>Promise ${result.promiseNumber}</td><td>${result.time.toFixed(3)}</td>`;
        outputElement.appendChild(row);
      });

      // Add total time row
      const totalRow = document.createElement('tr');
      totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
      outputElement.appendChild(totalRow);
    });