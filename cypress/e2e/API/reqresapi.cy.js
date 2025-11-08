/// <reference types="cypress" />

describe('API Automation Testing Reqres', () => {

  const baseUrl = 'https://reqres.in/api';
  const apiKey = 'reqres-free-v1'; 
  const defaultHeaders = {
    'accept': 'application/json',
    'content-type': 'application/json',
    'x-api-key': apiKey
  };


  it('GET - List Users (page 2)', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users?page=2`,
      headers: defaultHeaders
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.be.an('array');
      expect(response.body.page).to.eq(2);
    });
  });


  it('GET - Single User', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users/2`,
      headers: defaultHeaders
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.id).to.eq(2);
    });
  });


  it('GET - Single User Not Found', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users/23`,
      headers: defaultHeaders,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });


  it('POST - Create User', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/users`,
      headers: defaultHeaders,
      body: {
        name: 'Alfian',
        job: 'QA Enginer'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
      expect(response.body.name).to.eq('Alfian');
    });
  });


  it('PUT - Update User', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/users/2`,
      headers: defaultHeaders,
      body: {
        name: 'Updated User',
        job: 'QA Lead'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('Updated User');
    });
  });


  it('PATCH - Partially Update User', () => {
    cy.request({
      method: 'PATCH',
      url: `${baseUrl}/users/2`,
      headers: defaultHeaders,
      body: {
        job: 'QA Engineer'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.job).to.eq('QA Engineer');
    });
  });


  it('DELETE - Delete User', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/users/2`,
      headers: defaultHeaders
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });


  it('POST - Register Successful', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/register`,
      headers: defaultHeaders,
      body: {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
    });
  });


  it('POST - Register Unsuccessful', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/register`,
      headers: defaultHeaders,
      body: {
        email: 'alfian@sanber'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq('Missing password');
    });
  });


  it('POST - Login Successful', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      headers: defaultHeaders,
      body: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
    });
  });


  it('POST - Login Unsuccessful', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      headers: defaultHeaders,
      body: {
        email: 'alfi@gmail'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq('Missing password');
    });
  });

});
