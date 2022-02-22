describe('Listing Restaurants', () => {
  it('shows restaurants from the server', () => {
    const pastaPlace = 'Pasta Place';
    const saladPlace = 'Salad Place';

    cy.server({force404: true});

    cy.route({
      method: 'GET',
      url: 'https://outside-in-dev-api.herokuapp.com/KXPQJunQouNkzJwgIfQrAIbF1do7oESx/restaurants',
      response: [
        {id: 1794, name: pastaPlace},
        {id: 1795, name: saladPlace},
      ],
    });

    cy.visit('/');
    cy.contains(pastaPlace);
    cy.contains(saladPlace);
  });
});
