module.exports = () => {
    const faker = require('faker')
    const _ = require('lodash')
    return {
        people: _.times(100, function(n) {
            let gender = faker.name.gender(true)
            let prename = faker.name.prefix(gender.toLowerCase())
            let fname = faker.name.firstName(gender.toLowerCase())
            let lname = faker.name.lastName(gender.toLowerCase())
            let mname = faker.name.middleName(gender.toLowerCase()).toUpperCase() + '.'
            let suffname = faker.name.suffix()
            let jobtitle = faker.name.jobTitle()

            if(['Mr.', 'Mrs.', 'Ms.', 'Miss'].includes(prename)) {
                if(gender === 'Male') {
                    prename = 'Mr.'
                } else if(gender === 'Female' && prename === 'Mr.') {
                    prename = 'Mrs.'
                }
            }

            return {
                id: n,
                prename,
                fname,
                lname,
                mname,
                suffname,
                gender,
                jobtitle
            }
        })
    }
}
