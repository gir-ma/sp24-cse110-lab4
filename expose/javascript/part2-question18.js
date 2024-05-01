function printTimeEverySecond() {
    setInterval(() => {
      const d = new Date();
      const time = d.toLocaleTimeString();
      console.log(time);
    }, 1000); // Call every 1000 milliseconds (1 second)
  }
  
  printTimeEverySecond();