(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    const villano:[string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;

    enum FuerzaHeroes {
      fuerzaAcuaman,
      fuerzaBatman,
      fuerzaFlash = 5,
      fuerzaSuperman = 100
    }

    console.log(FuerzaHeroes.fuerzaAcuaman, FuerzaHeroes.fuerzaSuperman);
  
    // Retorno de funciones
    function activar_batiseñal() :string{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '1000';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  