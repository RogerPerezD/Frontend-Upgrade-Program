(()=>{

    class Avenger{
        constructor(
            public name:string,
            public realName: string
        ){
            console.log('Constructor Avenger llamado')
        }

        private getFullname():string {
            return ` ${ this.name } ${this.realName}`;
        }
    }

    class Xmen extends Avenger{

        constructor(
            public name: string,
            public realName: string,
            public isMutant: boolean
        ){
            super(name, realName);
        }

        // Declarando un getter
        get fullName():string {
            return ` ${ this.name } ${this.realName}`;
        }

        // Declarando un setter
        set fullName( name: string){
            this.name = name;
        }
    }

    // En caso de que no se tenga un constructor explicitamente
    // declarado dentro de la clase hija, se llama por defecto 
    // al constructor de la clase padre
    const wolverine:Xmen = new Xmen( 'Wolverine', 'Logan',true); 
    
    // Llamando a un setter
    wolverine.fullName = 'Spider';
    // Mandado a llamar a un getter
    console.log(wolverine.fullName)
})();