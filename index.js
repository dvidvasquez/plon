let val;
let interval = null;

const clearValue = () => {
    const num = document.querySelector('h1');
    num.innerHTML = 0;
}

const setBtn = (type) => {
    const btn =  document.querySelector('button');
    btn.className = ' ';
    btn.setAttribute('disabled',false);
    
    if(type === 'rest'){
        btn.classList.add('rest');
        btn.setAttribute('disabled',true);
        btn.innerHTML = 'Dejelo enfriar'
    }

    if(type === 'fire'){
        btn.classList.add('fire');
        btn.setAttribute('disabled',true);
        btn.innerHTML = 'Calientelo'
    }

    if(type === 'default'){
        btn.classList.add('default');
        btn.innerHTML = 'Iniciar'
    }
  }

const countDown = ()=>{
    const btn =  document.querySelector('button');
    const num = document.querySelector('h1');
    val = num.innerHTML;
    num.innerHTML = parseInt(val) + 1;
    if(val === "25" && btn.classList.contains('fire')){
        setBtn('rest');
        clearValue();
        return false;
    }
    if(val === "45" && btn.classList.contains('rest')){
        setBtn('default');
        clearInterval(interval);
        clearValue();
        return false;
    }
  }
  
  const plon = () => {
    setBtn('fire');
    interval = setInterval(countDown, 1000);
  }