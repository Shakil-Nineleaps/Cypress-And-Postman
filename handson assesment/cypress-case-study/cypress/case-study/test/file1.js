describe('This is a test suit', () => {
    before(function(){
        cy.fixture('example.json').then(function(data){
            globalThis.data=data
        })
    }),
    beforeEach(() => {
        cy.visit('https://demo.guru99.com/test/newtours/index.php')
    });

    it('Register', () => {
        cy.contains('REGISTER').click()
        cy.get('input[name="firstName"]').type(data.firstname)
        cy.get('input[name="lastName"]').type(data.lastname)
        cy.get('input[name="phone"]').type(data.phone)
        cy.get('#userName').type(data.email)
        cy.get('input[name="address1"]').type(data.address)
        cy.get('input[name="city"]').type(data.city)
        cy.get('input[name="state"]').type(data.state)
        cy.get('input[name="postalCode"]').type(data.postal)
        cy.get('select[name="country"]').select("INDIA")
        cy.get('input[name="email"]').type(data.username)
        cy.get('input[name="password"]').type(data.password)
        cy.get('input[name="confirmPassword"]').type(data.password)
        cy.get('input[name="submit"]').click()
        cy.url().should('include','register_sucess')
        cy.contains("SIGN-OFF").click()
        cy.wait(2000)
        cy.url().should('include','index')
    });
    it('Log In', () => {
        cy.contains('SIGN-ON').click()
        cy.get('input[name="userName"]').type(data.username)
        cy.get('input[name="password"]').type(data.password)
        cy.get('input[name="submit"]').click()
        cy.url().should('include','login_sucess')
        cy.contains("SIGN-OFF").click()
    });
    it('Home', () => {
        cy.contains('Home').click()
        if(cy.url().should('include','index')){
        cy.get('input[name="userName"]').type(data.username)
        cy.get('input[name="password"]').type(data.password)
        cy.get('input[name="submit"]').click()
        cy.url().should('include','login_sucess')
        }
        else{
            cy.log("link is broken")
        }
        
    });
    it('for Fligths', () => {
        cy.contains('Flights').click()
        cy.get('input[value="roundtrip"]').check()
        cy.get('select[name="passCount"]').select("2")
        cy.get('select[name="fromPort"]').select("London")
        cy.get('select[name="fromMonth"]').select("8")
        cy.get('select[name="fromDay"]').select("12")
        cy.get('select[name="toPort"]').select("Paris")
        cy.get('select[name="toMonth"]').select("12")
        cy.get('select[name="toDay"]').select("2")
        cy.get('input[value="Business"]').check()
        cy.get('select[name="airline"]').select('Blue Skies Airlines')
        cy.get('input[name="findFlights"]').click()
        cy.url().should('include','reservation2')
    });
    it('Hotels', () => {
        cy.contains('Hotels').click()
        if(cy.url().should('include','support')){
            cy.log('Link is broken')
        }
    });
    it('Car Rentals', () => {
        cy.contains('Car Rentals').click()
        if(cy.url().should('include','support')){
            cy.log('Link is broken')
        }
    });
    it('Destinations', () => {
            cy.contains('Destinations').click()
            if(cy.url().should('include','support')){
                cy.log('Link is broken')
            }
    });
    it('Vacations', () => {
        cy.contains("Vacations").click()
        if(cy.url().should('include','support')){
            cy.log('Link is broken')
        }
        cy.get('img[src="images/home.gif"]').click()
    });
    
});