describe('Search Dublin from top search bar', () => {
    it("Api call", () => {
        cy.api({ url: 'https://jsonplaceholder.typicode.com/users' }).then((res) => {
            let response = JSON.stringify(res.body);
            let bodyResponse = JSON.parse(response);
            for(let i=0;i<bodyResponse.length;i++){
                let name  = bodyResponse[i].name.toString();
                let requiredName  = "Chelsey Dietrich";
                if(name === requiredName ){
                    let zipCode = bodyResponse[i].address.zipcode;
                    expect(parseInt(zipCode)).to.eq(33263);
                }
            }
        })
    })
})