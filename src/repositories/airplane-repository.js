const {Airplane} = require("../models");
const CrudRepository = require("./crud-repository");

class AirplaneRepository extends CrudRepository{
    constructor(){
        // with super keyword you can call the constructor of your parent class 
        super(Airplane);
    }
}

module.exports = AirplaneRepository;