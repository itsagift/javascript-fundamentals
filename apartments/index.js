let apt1 = {
    bedrooms: 2, 
    sqft: 50, 
    bathrooms: 3, 
    windows: 0, 
    rent: 4500, 
    unit: '1A',
    
    tenants: []
}
let apt2 = {
    bedrooms: 2, 
    sqft: 500, 
    bathrooms: 1, 
    windows: 2, 
    rent: 1500, 
    unit: '1B',
    tenants: []
}
let apt3 = {
    bedrooms: 2, 
    sqft: 51, 
    bathrooms: 3, 
    windows: 2, 
    rent: 3400, 
    unit: '1C',
    tenants: []
}
let tenant1 = {
    name: 'John Doe',
    creditScore: 400,
    salary: 15000,
    age: 30,
    pet: 'dog'
}
let tenant2 = {
    name: 'Jane Doe',
    creditScore: 800,
    salary: 22000,
    age: 33
}
let building = {
    streetAddress: '74 N 7th Street, Brooklyn NY 11240',
    laundry: false,
    allowsPets: false,
    lease: function(apt, tenant){
        if (apt.tenants.length === apt.bedrooms){
            return `${apt.unit} is already full!`
        }
        if (this.allowsPets === false && tenant.pet){
            return  `${apt.unit} is available, but you must give ${tenant.pet} up for adoption!`
        }
        let t = apt.tenants.push(tenant)
        console.log(tenant.name, 'has rented out', apt.unit)
        return t;
    },
    occupiedApts: function() {
        //returns only the apts which have tenants inside them
        return this.apartments.filter((el) => {
            return el.tenants.length > 0
        })
    },
    fullApts: function() {
        //returns only the apts 
        return this.apartments.filter((el) => {
            return el.tenants.length === el.bedrooms
        })
    },
    apartments: [apt1, apt2, apt3]
}
