(() => {

    const fullName = (firstName: string, ...restArgs: string[]) :string =>{
        // let name
        return `${ firstName } ${restArgs.join(' ')}`;
    }

    const superman = fullName( 'Clark', 'Joseph', 'Kent');
    console.log(superman)
})();