<<<<<<< HEAD
  const timeElement = document.getElementById('user-time');
 
  function updateTime() {
    const timeInMs = Date.now();
    timeElement.textContent = timeInMs;
  }

  // Update immediately and every second
    updateTime();
    setInterval(updateTime, 1000);
 

    
    
=======
  const timeElement = document.getElementById('user-time');

    function updateTime() {
      const timeInMs = Date.now();
      timeElement.textContent = timeInMs;
    }

    // Update immediately and every second
    updateTime();
    setInterval(updateTime, 1000);
>>>>>>> main
