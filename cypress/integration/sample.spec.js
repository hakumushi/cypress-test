describe('My First Test', () => {
    beforeEach(() => {
        cy.visit('http://www.classedetestes.wordpress.com');
    });
    
    it('Assert Home Screen Title', () => {
        cy.title().should('eq', 'Classe de Testes – Testes e Qualidade de Software');
    });

    it('Assert Curso Selenium Header Title', () => {
        cy.get('.sub-menu').invoke('show');
        cy.get('#menu-item-52').click();
    });

    it('Assert Formulário Simples Header Title', () => {
        cy.get('.sub-menu').invoke('show');
        cy.get('#menu-item-51').click();
        cy.get('.entry-title').contains('Formulário Simples');
    });

    it('Assert Search Header Title', () => {
        cy.get('.widget-handle').click();
        cy.get('.search-field').type('teste{enter}');
        cy.get('.page-title').contains('Resultados da pesquisa por: teste');
    });

    it('Search with no results', () => {
        cy.get('.widget-handle').click();
        cy.get('.search-field').type('futebol{enter}');
        cy.get('.entry-title').contains('Nada Encontrado');
    });

});
