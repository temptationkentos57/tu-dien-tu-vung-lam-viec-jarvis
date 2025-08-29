import request from 'supertest';
import app from './app';

describe('GET /search/:word', () => {
  it('should return a word and its meaning', async () => {
    const response = await request(app).get('/search/remote');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ word: 'remote', meaning: 'làm việc từ xa' });
  });

  it('should return 404 for a non-existent word', async () => {
    const response = await request(app).get('/search/nonexistent');
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Không tìm thấy từ vựng.');
  });
});