export class HomePage{
    // Seletores (atributos)
    botaoSair = () => cy.contains('button', 'Sair')
    listaProdutos = () => cy.get('#product-list')
    title = 'MiniShop - Home'

    //acoes (metodos)
    visitar(){
        cy.visit('./html/home.html')
    }

    virificarTitulo(){
        cy.title().should('be.eq', this.title)
    }

}