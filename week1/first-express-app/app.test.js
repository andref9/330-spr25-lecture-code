const request = require('supertest');
const app = require('./app');

describe('Test My First Express App', () => {
    test('It works', () => {
        return request(app)
            .get('/')
            .expect(200)
            .then(res => {
                expect(res.text).toEqual('Hello world!');
            });
    });
});