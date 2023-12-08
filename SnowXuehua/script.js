function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    document.querySelector(".snowflakes").appendChild(snowflake);
  
    const startLeft = Math.random() * window.innerWidth;
    const endLeft = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 5; // between 5s and 10s
  
    snowflake.style.left = `${startLeft}px`;
    snowflake.style.animationDuration = `${duration}s`;
  
    // Use transitionend event to remove the snowflake after it completes its animation
    snowflake.addEventListener("animationend", () => {
      snowflake.remove();
    });
  
    // Trigger reflow to ensure the animation starts
    snowflake.offsetWidth;
  
    snowflake.style.transform = `translate(${endLeft - startLeft}px, ${window.innerHeight}px)`;
  }
  
  function startSnowfall() {
    setInterval(createSnowflake, 500);
  }
  
  // Start the snowfall
  startSnowfall();
  