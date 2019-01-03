class Planet{
    constructor(planet_size, init_force, force_type, x, y){
        this.planet_size = planet_size;
        this.init_force = init_force;
        this.force_type = force_type;
        this.x = x;
        this.y = y;
    }

    size(){
        return this.planet_size;
    }

    forces(){
        return this.init_force;
    }

    x_cord(){
        return this.x;
    }

    y_cord(){
        return this.y;
    }

    minus_forces(plenty){
        this.init_force = this.init_force - plenty;
    }

    add_forces(plenty){
        this.init_force = this.init_force + plenty;
    }

}


var MoveForces = (planet1, planet2, plenty)=>{ // moving forces from planet1 -> planet2
    if (planet1.type === planet2.type){
        planet2.add_forces(plenty);
        planet1.minus_forces(plenty);
    }else{
        if (planet2.init_force > plenty) {
            planet1.minus_forces(plenty);
            planet2.minus_forces(plenty);
        }else{
            planet1.minus_forces(plenty);
            planet2.type = planet1.type;
            temp_forces = Math.abs(plenty - planet2.init_force);
            planet2.init_force = temp_forces;
        }
    }
};

var AddForce = ()=>{
    var planet;
    planet.getElementById();
    console.log("Hello farid");
    return "Hello";
};

var ForcesGrowth = (planet1)=>{
    if (planet1.planet_size === "S"){
        planet1.init_force += 1;
    }
    if (planet1.planet_size === "M"){
        planet1.init_force += 3;
    }
    if (planet1.planet_size === "L"){
        planet1.init_force += 5;
    }
};
