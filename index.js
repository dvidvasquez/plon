let val;
let interval = null;

const clearValue = () => {
    const num = document.querySelector('h1');
    num.innerHTML = 0;
}

const countDown = ()=>{
    const num = document.querySelector('h1');
    val = num.innerHTML;
    num.innerHTML = parseInt(val) + 1;
    if(val === "25"){
        confirm("Alto al fuego");
    }
    if(val === "65"){
        confirm("Fumele");
        clearInterval(interval);
        clearValue();
    }
  }
  
  const plon = () => {
      interval = setInterval(countDown, 1000);
  }