export class LoginPage{

    //acoes
    login(usuario, senha){
        cy.login({usuario: usuario, senha: senha})
    }
}