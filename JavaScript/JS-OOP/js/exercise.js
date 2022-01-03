// duration es 0 al inicio
// No se puede llamar dos veces la funcion start
// tampoco stop

function StopWatch(){
    let duration = 0;
    let starTime, endTime;
    this.start = () =>{
        if (duration !== 0) 
        throw new Error('Watch is already in use')
        duration = 0;
        starTime = new Date();
    }
    this.stop = () =>{
        endTime = new Date();
        const seconds  = (endTime.getTime() - starTime.getTime()) / 1000;
        duration = seconds;
    }
    Object.defineProperty(this, 'duration',{
        get: function(){
            return duration;
        }
    });
}

const sw = new StopWatch();
// sw.start();

