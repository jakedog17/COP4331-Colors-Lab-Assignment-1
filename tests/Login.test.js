const fs = require('fs');
const path = require('path');
const envFile = path.join(__dirname, '..', '.env');

if (fs.existsSync(envFile)) {
  require('node:process').loadEnvFile(envFile);
}

const loginApiUrl = process.env.LOGIN_API_URL;
const integrationTest = loginApiUrl ? test : test.skip;

integrationTest('Login.php returns the expected JSON for invalid credentials', async () => {
  const response = await fetch(loginApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login: `jest-invalid-${Date.now()}`,
      password: 'invalid-password'
    })
  });

  expect(response.status).toBe(200);
  expect(response.headers.get('content-type')).toMatch(/application\/json/i);
  await expect(response.json()).resolves.toEqual({
    id: 0,
    firstName: '',
    lastName: '',
    error: 'No Records Found'
  });
});