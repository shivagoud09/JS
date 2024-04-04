const person={
    firstname:"ram",
    lastname:"sai",

    get fullname(){
        return `${person.firstname} ${person.lastname}`

    },
    set changeName(value){
        const parts=value.split(' ');
        this.firstname=parts[0];
        this.lastname=parts[1];
    }

}

console.log(person)
console.log(person.fullname);

person.changeName="sai ram"

console.log(person);
console.log(person.fullname);