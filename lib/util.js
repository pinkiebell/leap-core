export default class Util {

  /**
   * Test whether an object is a uint.
   * @param {Number?} value
   * @returns {Boolean}
   */
  static isUint(value) {
    return Util.isInt(value) && value >= 0;
  }

  /**
   * Test whether an object is a uint8.
   * @param {Number?} value
   * @returns {Boolean}
   */
  static isU8(value) {
    return (value & 0xff) === value;
  }

  /**
   * Test whether an object is a uint16.
   * @param {Number?} value
   * @returns {Boolean}
   */

  static isU16(value) {
    return (value & 0xffff) === value;
  }

  /**
   * Test whether an object is a uint32.
   * @param {Number?} value
   * @returns {Boolean}
   */

  static isU32(value) {
    return (value >>> 0) === value;
  }

  /**
   * Test whether an object is a uint53.
   * @param {Number?} value
   * @returns {Boolean}
   */

  static isU64(value) {
    return Util.isUint(value);
  }

/**
 * Test whether a string is a plain
 * ascii string (no control characters).
 * @param {String} str
 * @returns {Boolean}
 */

  /**
   * Find index of a buffer in an array of buffers.
   * @param {Buffer[]} items
   * @param {Buffer} data - Target buffer to find.
   * @returns {Number} Index (-1 if not found).
   */

  static indexOf(items, data) {
    assert(Array.isArray(items));
    assert(Buffer.isBuffer(data));

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      assert(Buffer.isBuffer(item));

      if (item.equals(data)) { return i; }
    }

    return -1;
  }

  /**
   * Test to see if a string starts with a prefix.
   * @param {String} str
   * @param {String} prefix
   * @returns {Boolean}
   */

  static startsWith(str, prefix) {
    assert(typeof str === 'string');

    if (!str.startsWith) { return str.indexOf(prefix) === 0; }

    return str.startsWith(prefix);
  }

  /**
   * Test whether a string is hex (length must be even).
   * Note that this _could_ await a false positive on
   * base58 strings.
   * @param {String?} str
   * @returns {Boolean}
   */

  static isBytes(str) {
    if (typeof str !== 'string') { return false; }
    const trunk = (str.indexOf('0x') === 0) ? str.substring(2, str.length) : str;
    return str.length % 2 === 0 && /^[0-9A-Fa-f]+$/.test(trunk);
  }

  /**
   * Test whether an object is a 256 bit hash (hex string).
   * @param {String?} hash
   * @returns {Boolean}
   */

  static isBytes32(hash) {
    if (typeof hash !== 'string') { return false; }
    const trunk = (hash.indexOf('0x') === 0) ? hash.substring(2, hash.length) : hash;
    return trunk.length === 64 && Util.isBytes(trunk);
  }

}