/// <reference types="cypress" />

describe("Ongs", () => {
  it("devem poder realizar um cadastro", () => {
    cy.visit("https://bethehero-frontend.netlify.app/register");
    // cy.get - busca um elemento
    // .type - insere um texto
    cy.get('[placeholder="Nome da ONG"]').type("Dogs queridos");
    cy.get('[type="email"]').type("doGs@mail.com");
    cy.get('[placeholder="Whatsapp"]').type("53999999999");
    cy.get('[placeholder="Cidade"]').type("Rio Grande");
    cy.get('[placeholder="UF"]').type("RS");

    // routing
    // start server com cy.server()
    // criar rota com cy.route()
    // atribuir rota com um alias
    // esperar com cy.wait e fazer uma validação

    cy.server();
    cy.route("POST", "**/ongs").as("postOng");

    cy.get(".button").click();

    cy.wait("@postOng").then((xhr) => {
      expect(xhr.status).be.eq(200);
      expect(xhr.response.body).has.property("id");
      expect(xhr.response.body.id).is.not.null;
    });
  });

  // posteriormente realizarei login
  it("devem poder realizar um login no sistema", () => {});
});
