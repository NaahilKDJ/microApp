const { addition, soustraction, produit } = require('../base.js');

describe('Tests des fonctions mathématiques', () => {
  // Tests pour la fonction addition
  describe('addition', () => {
    test('additionne correctement deux nombres positifs', () => {
      expect(addition(2, 3)).toBe(5);
    });

    test('gère les nombres négatifs', () => {
      expect(addition(-2, 3)).toBe(1);
      expect(addition(-2, -3)).toBe(-5);
    });

    test('gère le zéro', () => {
      expect(addition(0, 5)).toBe(5);
      expect(addition(0, 0)).toBe(0);
    });
  });

  // Tests pour la fonction soustraction
  describe('soustraction', () => {
    test('soustrait correctement deux nombres positifs', () => {
      expect(soustraction(5, 3)).toBe(2);
    });

    test('gère les nombres négatifs', () => {
      expect(soustraction(-2, 3)).toBe(-5);
      expect(soustraction(-2, -3)).toBe(1);
    });

    test('gère le zéro', () => {
      expect(soustraction(5, 0)).toBe(5);
      expect(soustraction(0, 0)).toBe(0);
    });
  });

  // Tests pour la fonction produit
  describe('produit', () => {
    test('multiplie correctement deux nombres positifs', () => {
      expect(produit(2, 3)).toBe(6);
    });

    test('gère les nombres négatifs', () => {
      expect(produit(-2, 3)).toBe(-6);
      expect(produit(-2, -3)).toBe(6);
    });

    test('gère le zéro', () => {
      expect(produit(5, 0)).toBe(0);
      expect(produit(0, 0)).toBe(0);
    });
  });
});