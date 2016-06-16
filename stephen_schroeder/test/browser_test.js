'use strict';

const angular = require('angular');

require('angular-mocks');
require('../app/js/client');

describe('Controller Tests', () => {
  let firstCtrl;

  it('should run a test', () => {
    expect(true).toBe(true);
  });

  beforeEach(() => {
    angular.mock.module('adventureApp');
    angular.mock.inject(function($controller) {
      firstCtrl = new $controller('GameController');
    });
  });

  it('should have the property hasWeapon, initialized as false', () => {
    expect(firstCtrl.hasWeapon).toBe(false);
  });
});





  // describe('Action method tests', () => {
  //
  //   it('should respond to empty or unsupported inputs', () => {
  //     firstctrl.input = 'test';
  //     firstctrl.action();
  //     expect(firstctrl.gameLog[0]).toBe('Sorry, that is not a valid command. Enter ? to see the actions available in this room.');
  //   });
  //
  //   it('should respond to an ? input with possible actions', () => {
  //     firstctrl.input = '?';
  //     firstctrl.action();
  //     expect(firstctrl.gameLog.length).toBe(5);
  //   });
  // });
