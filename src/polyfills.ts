/**
 * Este arquivo inclui polyfills necessários para a aplicação Angular.
 * 
 * Este arquivo é carregado antes do arquivo que contém o módulo raiz da aplicação.
 */

/**
 * BROWSER POLYFILLS
 */

/**
 * Por padrão, zone.js irá fazer patch em todas as macrotasks e microtasks possíveis:
 * EventEmitter, Promise, etc.
 * Se você quiser ter mais controle sobre quais macrotasks e microtasks o zone.js irá fazer patch,
 * você pode adicionar a seguinte flag no início deste arquivo:
 */

// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
// (window as any).__Zone_enable_cross_context_check = true; // prevent Angular from using incorrect global context

/**
 * Zone JS é necessário para o funcionamento do Angular.
 */
import 'zone.js';

/**
 * APPLICATION IMPORTS
 */

// Polyfill para URL API em navegadores antigos
if (typeof window !== 'undefined' && !window.URL) {
  window.URL = window.URL || window.webkitURL || (window as any).mozURL || (window as any).msURL;
}

// Polyfills para Arrays em navegadores antigos
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function (searchElement: any, fromIndex?: number) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      const o = Object(this);
      const len = o.length >>> 0;

      if (len === 0) {
        return false;
      }

      const n = fromIndex || 0;
      let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x: any, y: any) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      while (k < len) {
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        k++;
      }

      return false;
    }
  });
}

// Polyfill para Object.entries em navegadores antigos
if (!Object.entries) {
  Object.entries = function (obj: any): [string, any][] {
    var ownProps = Object.keys(obj);
    var i = ownProps.length;
    var resArray = new Array(i);
    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }
    return resArray;
  };
}

// Polyfill para String.prototype.padStart
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; // truncate if number, or convert non-number to 0;
    padString = String(padString || ' ');
    if (this.length >= targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); // append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}

/**
 * Polyfills específicos para suporte a PWA
 */
// Adicione um polyfill para IntersectionObserver se o navegador não o suportar
if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
  // Carregar um polyfill para IntersectionObserver seria recomendado aqui
  console.warn('IntersectionObserver não é suportado neste navegador. Alguns recursos podem não funcionar corretamente.');
}