const {City} = require("../models");
const CrudRepository = require("./crud-repository");

class CityRepository extends CrudRepository{
    constructor(){
        // with super keyword you can call the constructor of your parent class 
        super(City);
    }
}

module.exports = CityRepository;