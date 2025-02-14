export default {
  /**
   * Concatenates multiple strings together.
   * @example {{concat "Hello, " siteName "!"}} → "Hello, Computerbank!"
   */
  concat(...args) {
    return args.slice(0, -1).join("");
  },

  /**
   * Converts a string to uppercase.
   * @example {{uppercase "hello"}} → "HELLO"
   */
  uppercase(str) {
    return str ? String(str).toUpperCase() : "";
  },

  /**
   * Converts a string to lowercase.
   * @example {{lowercase "HELLO"}} → "hello"
   */
  lowercase(str) {
    return str ? String(str).toLowerCase() : "";
  },

  /**
   * Capitalizes the first letter of a string.
   * @example {{capitalize "hello"}} → "Hello"
   */
  capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  /**
   * Trims whitespace from the beginning and end of a string.
   * @example {{trim "  hello  "}} → "hello"
   */
  trim(str) {
    return str ? String(str).trim() : "";
  },

  /**
   * Replaces all occurrences of a string.
   * @example {{replace "hello world" "world" "Handlebars"}} → "hello Handlebars"
   */
  replace(str, search, replacement) {
    return str ? String(str).split(search).join(replacement) : "";
  }
};