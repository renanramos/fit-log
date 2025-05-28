/**
 * Este arquivo contém polyfills específicos para checagem de tipos em Angular
 * Usado durante o processo de build angular-compiler-options.typeCheck
 */

// Polyfills para verificação de tipos durante o desenvolvimento
import 'zone.js/dist/zone';

// Polyfill para APIs Web não suportadas durante o processo de type checking
if (typeof (window as any).__Zone_disable_requestAnimationFrame === 'undefined') {
  (window as any).__Zone_disable_requestAnimationFrame = true;
}

// Desative os patches de eventos para ngtypecheck para evitar falsos positivos
if (typeof (window as any).__Zone_disable_on_property === 'undefined') {
  (window as any).__Zone_disable_on_property = true;
}

// Evite que o Zone.js intercepte os erros durante o process de verificação de tipos
if (typeof (window as any).__Zone_disable_Error === 'undefined') {
  (window as any).__Zone_disable_Error = true;
}