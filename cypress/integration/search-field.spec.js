import ActivityPage from '../pageobjects/ActivityPage'
const activityPage = new ActivityPage();

describe('Search Dublin from top search bar', () => {
    it('Search and Verify Dublin text', () => {
        cy.visit('/');
        cy.get(activityPage.searchField).type("Dublin").type("{enter}");
        cy.get(activityPage.searchResultTitle).invoke("text").then((text) => {
            expect(text.toString()).contains("Dublin");
        })
    });
})