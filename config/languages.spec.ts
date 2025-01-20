import { isValidLang } from './languages';

describe('isValidLang', () => {
  it('should return true for supported languages', () => {
    expect(isValidLang('en')).toBe(true);
    expect(isValidLang('nl')).toBe(true);
    expect(isValidLang('ru')).toBe(true);
    expect(isValidLang('ua')).toBe(true);
  });

  it('should return false for unsupported languages', () => {
    expect(isValidLang('fr')).toBe(false);
    expect(isValidLang('de')).toBe(false);
    expect(isValidLang('es')).toBe(false);
    expect(isValidLang('')).toBe(false);
    expect(isValidLang('123')).toBe(false);
  });
}); 