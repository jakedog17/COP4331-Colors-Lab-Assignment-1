/** @jest-environment jsdom */

const fs = require('fs');
const path = require('path');

const appScript = fs.readFileSync(
  path.join(__dirname, '..', 'LAMP Stack', 'public', 'js', 'code.js'),
  'utf8'
);

window.eval(appScript);

describe('addColor', () => {
  let xhr;

  beforeEach(() => {
    document.body.innerHTML = `
      <input id="colorText" value="Cerulean">
      <span id="colorAddResult">Previous result</span>
    `;

    xhr = {
      open: jest.fn(),
      setRequestHeader: jest.fn(),
      send: jest.fn()
    };
    global.XMLHttpRequest = jest.fn(() => xhr);
  });

  test('sends the entered color to the AddColor API', () => {
    addColor();

    expect(xhr.open).toHaveBeenCalledWith(
      'POST',
      'http://cop4331colorslabprojectballing.casa/LAMPAPI/AddColor.php',
      true
    );
    expect(xhr.setRequestHeader).toHaveBeenCalledWith(
      'Content-type',
      'application/json; charset=UTF-8'
    );
    expect(JSON.parse(xhr.send.mock.calls[0][0])).toEqual({
      color: 'Cerulean',
      userId: 0
    });
    expect(document.getElementById('colorAddResult').innerHTML).toBe('');
  });

  test('shows a success message when the API request completes successfully', () => {
    addColor();

    xhr.readyState = 4;
    xhr.status = 200;
    xhr.onreadystatechange.call(xhr);

    expect(document.getElementById('colorAddResult').innerHTML).toBe(
      'Color has been added'
    );
  });
});
