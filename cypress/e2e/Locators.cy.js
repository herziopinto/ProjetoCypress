describe('CSSLocators', () => {
    
    beforeEach( () => {
        // Visitar a página
        cy.visit('https://www.saucedemo.com/v1/index.html')
        // Preencher o campo Username
        cy.get('#user-name').type('standard_user')
        // Preencher o campo Password
        cy.get("[placeholder='Password']").type('secret_sauce')
        // Clicar no botão Login
        cy.get('.btn_action').click()
    })
    
    it('Verificar se estou na página certa', () => {
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[1]/div[3]/div').contains('Products')
    })
    
    it('Funcionalidade Adicionar ao carrinho', () => {
        // addToCart
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').click()
        cy.xpath('/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button').contains('REMOVE')
    })
})