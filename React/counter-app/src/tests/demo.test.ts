import React from 'react'




describe('Name of the group of test', () => {
    test('should be my first test', () => {
    // 1. Arrange
    const message1: string = 'Hola mundo';
    // 2. Act
    const message2: string = `Hola mundo`;
    // 3. Assert
    expect(message1).toBe(message2);
});
});