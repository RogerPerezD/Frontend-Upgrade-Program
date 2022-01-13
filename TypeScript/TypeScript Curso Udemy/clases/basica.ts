(() => {

    /* Forma tradicional
    class Avenger{
        private name: string;
        public team: string;
        public realName?: string;
        static avgAge: number = 35;

        constructor( name: string, team: string, realname?: string){
            this.name = name;
            this.team = team;
            this.realName = realname;
        }
    } */

    // Forma simplificada
    class Avenger{
        static avgAge: number = 35;

        constructor(private name: string,
            public team: string,
            public realName?: string){}

        public bio(): string{
            return `${this.name} (${this.team})`;
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan');
    console.log(antman.bio())
})();