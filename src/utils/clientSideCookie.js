import jsCookie from "js-cookie";
/**
 * create cookie access object for client-side.
 * please visit https://github.com/js-cookie/js-cookie to learn more.
 * @param {string} domain
 * @param {object} basicOptions
 */
function clientSideCookie(basicOptions) {
  this.set = function (name, value, options) {
    jsCookie.set(name, value, { ...basicOptions, ...options });
  };

  this.get = function (name) {
    return jsCookie.get(name);
  };

  this.delete = function (name, options) {
    jsCookie.remove(name, { ...basicOptions, ...options });
  };
}

export default new clientSideCookie({
  domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
});
