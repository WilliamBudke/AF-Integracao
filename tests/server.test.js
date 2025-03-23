const request = require('supertest');
const app = require('../server');

let token;

describe('Testando API com JWT', () => {
  it('Deve retornar um token ao fazer login', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ username: 'teste' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
    token = res.body.token;
  });

  it('Deve acessar rota GET /data', async () => {
    const res = await request(app).get('/api/data');
    expect(res.statusCode).toEqual(200);
  });

  it('Deve criar um novo dado via POST', async () => {
    const res = await request(app)
      .post('/api/data')
      .send({ dado: 'Novo dado' });
    expect(res.statusCode).toEqual(200);
  });

  it('Deve atualizar um dado via PUT', async () => {
    const res = await request(app)
      .put('/api/data/1')
      .send({ dado: 'Dado atualizado' });
    expect(res.statusCode).toEqual(200);
  });

  it('Deve falhar ao deletar um dado sem token', async () => {
    const res = await request(app).delete('/api/data/1');
    expect(res.statusCode).toEqual(403);
  });

  it('Deve deletar um dado com token válido', async () => {
    const res = await request(app)
      .delete('/api/data/1')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
  });
});