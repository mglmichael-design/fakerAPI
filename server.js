const express = require('express');
const port = 8000;
const app = express();
var faker = require('faker');

class Person{
    constructor(){
        this.name = faker.name.findName();
        this.creditCard = faker.finance.creditCardNumber();
        this.bitcoin = faker.finance.bitcoinAddress();
        this.streetAddress = faker.address.streetAddress();
        this.cityName = faker.address.cityName();
        this.zipcode = faker.address.zipCode();
        this.birthPlace = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}`;
    }
}

class Profile{
    constructor(){
        this.name = faker.internet.userName();
        this.email = faker.internet.email();
        this.pic = faker.internet.avatar();
        this.bio = faker.lorem.sentences();
        this.hacker_bio = `I am the ${faker.hacker.adjective()} ${faker.random.word()} in the whole ${faker.hacker.noun()}. I also like to ${faker.hacker.verb()}`;
        this.password = faker.internet.password();
        
        
    }
}

app.get("/api", (req,res)=>{
    res.json({message: "up and running! LETS GOOOOOOOO!!!"});
})

app.get("/api/person", (req,res)=>{
    const exposeMyPrivateInfo = new Person();
    res.json({person: exposeMyPrivateInfo});
})

app.get("/api/person/1", (req,res)=>{
    const empi = new Person();
    res.json({
        "name": empi.name,
        "credit_card": empi.creditCard,
        "birth_place": empi.birthPlace
    });
})

app.get("/faker/profile", (req,res)=>{
    const newProfile = new Profile();
    res.json({profile: newProfile});
})

app.listen(port, () => console.log(`We are running on port ${port}!!!`))