
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const co = "170", Li = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Pi = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Rh = 0, Go = 1, Ch = 2, Rl = 1, Ph = 2, Dn = 3, bn = 0, Lt = 1, Xt = 2, xt = 0, Ii = 1, fa = 2, Vo = 3, Wo = 4, Cl = 5, tn = 100, Dh = 101, Lh = 102, Ih = 103, Nh = 104, ls = 200, Uh = 201, Fh = 202, Oh = 203, pa = 204, ma = 205, ga = 206, kh = 207, ba = 208, Bh = 209, zh = 210, Hh = 211, Gh = 212, Vh = 213, Wh = 214, _a = 0, va = 1, xa = 2, Oi = 3, ya = 4, Ma = 5, Sa = 6, Ea = 7, Pl = 0, jh = 1, Xh = 2, Zn = 0, Dl = 1, Ll = 2, Il = 3, Nl = 4, qh = 5, Ul = 6, lo = 7, jo = "attached", Yh = "detached", Fl = 300, ki = 301, Bi = 302, Ta = 303, wa = 304, xr = 306, _n = 1e3, pn = 1001, ur = 1002, yt = 1003, Ol = 1004, hs = 1005, _t = 1006, sr = 1007, mn = 1008, vn = 1009, kl = 1010, Bl = 1011, bs = 1012, ho = 1013, ci = 1014, Ut = 1015, Ht = 1016, uo = 1017, fo = 1018, li = 1020, zl = 35902, Hl = 1021, Gl = 1022, Gt = 1023, Vl = 1024, Wl = 1025, Ni = 1026, hi = 1027, po = 1028, mo = 1029, jl = 1030, go = 1031, bo = 1033, rr = 33776, ar = 33777, or = 33778, cr = 33779, Aa = 35840, Ra = 35841, Ca = 35842, Pa = 35843, Da = 36196, La = 37492, Ia = 37496, Na = 37808, Ua = 37809, Fa = 37810, Oa = 37811, ka = 37812, Ba = 37813, za = 37814, Ha = 37815, Ga = 37816, Va = 37817, Wa = 37818, ja = 37819, Xa = 37820, qa = 37821, lr = 36492, Ya = 36494, Ka = 36495, Xl = 36283, $a = 36284, Za = 36285, Qa = 36286, _s = 2300, vs = 2301, Rr = 2302, Xo = 2400, qo = 2401, Yo = 2402, Kh = 2500, $h = 0, ql = 1, Ja = 2, Zh = 3200, Qh = 3201, _o = 0, Jh = 1, Yn = "", dt = "srgb", Rt = "srgb-linear", yr = "linear", Qe = "srgb", fi = 7680, Ko = 519, ed = 512, td = 513, nd = 514, Yl = 515, id = 516, sd = 517, rd = 518, ad = 519, eo = 35044, $o = "300 es", Un = 2e3, fr = 2001;
class kn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++)
        i[r].call(this, e);
      e.target = null;
    }
  }
}
const Et = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Zo = 1234567;
const ps = Math.PI / 180, zi = 180 / Math.PI;
function rn() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Et[s & 255] + Et[s >> 8 & 255] + Et[s >> 16 & 255] + Et[s >> 24 & 255] + "-" + Et[e & 255] + Et[e >> 8 & 255] + "-" + Et[e >> 16 & 15 | 64] + Et[e >> 24 & 255] + "-" + Et[t & 63 | 128] + Et[t >> 8 & 255] + "-" + Et[t >> 16 & 255] + Et[t >> 24 & 255] + Et[n & 255] + Et[n >> 8 & 255] + Et[n >> 16 & 255] + Et[n >> 24 & 255]).toLowerCase();
}
function bt(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function vo(s, e) {
  return (s % e + e) % e;
}
function od(s, e, t, n, i) {
  return n + (s - e) * (i - n) / (t - e);
}
function cd(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function ms(s, e, t) {
  return (1 - t) * s + t * e;
}
function ld(s, e, t, n) {
  return ms(s, e, 1 - Math.exp(-t * n));
}
function hd(s, e = 1) {
  return e - Math.abs(vo(s, e * 2) - e);
}
function dd(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s));
}
function ud(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10));
}
function fd(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function pd(s, e) {
  return s + Math.random() * (e - s);
}
function md(s) {
  return s * (0.5 - Math.random());
}
function gd(s) {
  s !== void 0 && (Zo = s);
  let e = Zo += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function bd(s) {
  return s * ps;
}
function _d(s) {
  return s * zi;
}
function vd(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function xd(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function yd(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function Md(s, e, t, n, i) {
  const r = Math.cos, a = Math.sin, o = r(t / 2), c = a(t / 2), l = r((e + n) / 2), h = a((e + n) / 2), d = r((e - n) / 2), f = a((e - n) / 2), p = r((n - e) / 2), g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(o * h, c * d, c * f, o * l);
      break;
    case "YZY":
      s.set(c * f, o * h, c * d, o * l);
      break;
    case "ZXZ":
      s.set(c * d, c * f, o * h, o * l);
      break;
    case "XZX":
      s.set(o * h, c * g, c * p, o * l);
      break;
    case "YXY":
      s.set(c * p, o * h, c * g, o * l);
      break;
    case "ZYZ":
      s.set(c * g, c * p, o * h, o * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function nn(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Je(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const qt = {
  DEG2RAD: ps,
  RAD2DEG: zi,
  generateUUID: rn,
  clamp: bt,
  euclideanModulo: vo,
  mapLinear: od,
  inverseLerp: cd,
  lerp: ms,
  damp: ld,
  pingpong: hd,
  smoothstep: dd,
  smootherstep: ud,
  randInt: fd,
  randFloat: pd,
  randFloatSpread: md,
  seededRandom: gd,
  degToRad: bd,
  radToDeg: _d,
  isPowerOfTwo: vd,
  ceilPowerOfTwo: xd,
  floorPowerOfTwo: yd,
  setQuaternionFromProperEuler: Md,
  normalize: Je,
  denormalize: nn
};
class Ee {
  constructor(e = 0, t = 0) {
    Ee.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(bt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, a = this.y - e.y;
    return this.x = r * n - a * i + e.x, this.y = r * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Fe {
  constructor(e, t, n, i, r, a, o, c, l) {
    Fe.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, r, a, o, c, l);
  }
  set(e, t, n, i, r, a, o, c, l) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = r, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], d = n[7], f = n[2], p = n[5], g = n[8], b = i[0], m = i[3], u = i[6], M = i[1], S = i[4], v = i[7], P = i[2], R = i[5], A = i[8];
    return r[0] = a * b + o * M + c * P, r[3] = a * m + o * S + c * R, r[6] = a * u + o * v + c * A, r[1] = l * b + h * M + d * P, r[4] = l * m + h * S + d * R, r[7] = l * u + h * v + d * A, r[2] = f * b + p * M + g * P, r[5] = f * m + p * S + g * R, r[8] = f * u + p * v + g * A, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8];
    return t * a * h - t * o * l - n * r * h + n * o * c + i * r * l - i * a * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], d = h * a - o * l, f = o * c - h * r, p = l * r - a * c, g = t * d + n * f + i * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / g;
    return e[0] = d * b, e[1] = (i * l - h * n) * b, e[2] = (o * n - i * a) * b, e[3] = f * b, e[4] = (h * t - i * c) * b, e[5] = (i * r - o * t) * b, e[6] = p * b, e[7] = (n * c - l * t) * b, e[8] = (a * t - n * r) * b, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, r, a, o) {
    const c = Math.cos(r), l = Math.sin(r);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * o) + a + e,
      -i * l,
      i * c,
      -i * (-l * a + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Cr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Cr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Cr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Cr = /* @__PURE__ */ new Fe();
function Kl(s) {
  for (let e = s.length - 1; e >= 0; --e)
    if (s[e] >= 65535) return !0;
  return !1;
}
function xs(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function Sd() {
  const s = xs("canvas");
  return s.style.display = "block", s;
}
const Qo = {};
function ds(s) {
  s in Qo || (Qo[s] = !0, console.warn(s));
}
function Ed(s, e, t) {
  return new Promise(function(n, i) {
    function r() {
      switch (s.clientWaitSync(e, s.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s.WAIT_FAILED:
          i();
          break;
        case s.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
function Td(s) {
  const e = s.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function wd(s) {
  const e = s.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const We = {
  enabled: !0,
  workingColorSpace: Rt,
  /**
   * Implementations of supported color spaces.
   *
   * Required:
   *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
   *	- whitePoint: reference white [ x y ]
   *	- transfer: transfer function (pre-defined)
   *	- toXYZ: Matrix3 RGB to XYZ transform
   *	- fromXYZ: Matrix3 XYZ to RGB transform
   *	- luminanceCoefficients: RGB luminance coefficients
   *
   * Optional:
   *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
   *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
   *
   * Reference:
   * - https://www.russellcottrell.com/photo/matrixCalculator.htm
   */
  spaces: {},
  convert: function(s, e, t) {
    return this.enabled === !1 || e === t || !e || !t || (this.spaces[e].transfer === Qe && (s.r = On(s.r), s.g = On(s.g), s.b = On(s.b)), this.spaces[e].primaries !== this.spaces[t].primaries && (s.applyMatrix3(this.spaces[e].toXYZ), s.applyMatrix3(this.spaces[t].fromXYZ)), this.spaces[t].transfer === Qe && (s.r = Ui(s.r), s.g = Ui(s.g), s.b = Ui(s.b))), s;
  },
  fromWorkingColorSpace: function(s, e) {
    return this.convert(s, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(s, e) {
    return this.convert(s, e, this.workingColorSpace);
  },
  getPrimaries: function(s) {
    return this.spaces[s].primaries;
  },
  getTransfer: function(s) {
    return s === Yn ? yr : this.spaces[s].transfer;
  },
  getLuminanceCoefficients: function(s, e = this.workingColorSpace) {
    return s.fromArray(this.spaces[e].luminanceCoefficients);
  },
  define: function(s) {
    Object.assign(this.spaces, s);
  },
  // Internal APIs
  _getMatrix: function(s, e, t) {
    return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ);
  },
  _getDrawingBufferColorSpace: function(s) {
    return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
  },
  _getUnpackColorSpace: function(s = this.workingColorSpace) {
    return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
  }
};
function On(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Ui(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
const Jo = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], ec = [0.2126, 0.7152, 0.0722], tc = [0.3127, 0.329], nc = /* @__PURE__ */ new Fe().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), ic = /* @__PURE__ */ new Fe().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
We.define({
  [Rt]: {
    primaries: Jo,
    whitePoint: tc,
    transfer: yr,
    toXYZ: nc,
    fromXYZ: ic,
    luminanceCoefficients: ec,
    workingColorSpaceConfig: { unpackColorSpace: dt },
    outputColorSpaceConfig: { drawingBufferColorSpace: dt }
  },
  [dt]: {
    primaries: Jo,
    whitePoint: tc,
    transfer: Qe,
    toXYZ: nc,
    fromXYZ: ic,
    luminanceCoefficients: ec,
    outputColorSpaceConfig: { drawingBufferColorSpace: dt }
  }
});
let pi;
class Ad {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      pi === void 0 && (pi = xs("canvas")), pi.width = e.width, pi.height = e.height;
      const n = pi.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = pi;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = xs("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let a = 0; a < r.length; a++)
        r[a] = On(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(On(t[n] / 255) * 255) : t[n] = On(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Rd = 0;
class $l {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Rd++ }), this.uuid = rn(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? r.push(Pr(i[a].image)) : r.push(Pr(i[a]));
      } else
        r = Pr(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Pr(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? Ad.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Cd = 0;
class ut extends kn {
  constructor(e = ut.DEFAULT_IMAGE, t = ut.DEFAULT_MAPPING, n = pn, i = pn, r = _t, a = mn, o = Gt, c = vn, l = ut.DEFAULT_ANISOTROPY, h = Yn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Cd++ }), this.uuid = rn(), this.name = "", this.source = new $l(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Ee(0, 0), this.repeat = new Ee(1, 1), this.center = new Ee(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Fe(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Fl) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case _n:
          e.x = e.x - Math.floor(e.x);
          break;
        case pn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case ur:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case _n:
          e.y = e.y - Math.floor(e.y);
          break;
        case pn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case ur:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
ut.DEFAULT_IMAGE = null;
ut.DEFAULT_MAPPING = Fl;
ut.DEFAULT_ANISOTROPY = 1;
class qe {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    qe.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const c = e.elements, l = c[0], h = c[4], d = c[8], f = c[1], p = c[5], g = c[9], b = c[2], m = c[6], u = c[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(d - b) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(d + b) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(l + p + u - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const S = (l + 1) / 2, v = (p + 1) / 2, P = (u + 1) / 2, R = (h + f) / 4, A = (d + b) / 4, C = (g + m) / 4;
      return S > v && S > P ? S < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(S), i = R / n, r = A / n) : v > P ? v < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(v), n = R / i, r = C / i) : P < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(P), n = A / r, i = C / r), this.set(n, i, r, t), this;
    }
    let M = Math.sqrt((m - g) * (m - g) + (d - b) * (d - b) + (f - h) * (f - h));
    return Math.abs(M) < 1e-3 && (M = 1), this.x = (m - g) / M, this.y = (d - b) / M, this.z = (f - h) / M, this.w = Math.acos((l + p + u - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Pd extends kn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new qe(0, 0, e, t), this.scissorTest = !1, this.viewport = new qe(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: _t,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const r = new ut(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = !1, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, r = this.textures.length; i < r; i++)
        this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, i = e.textures.length; n < i; n++)
      this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new $l(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class cn extends Pd {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}
class Zl extends ut {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = yt, this.minFilter = yt, this.wrapR = pn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Dd extends ut {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = yt, this.minFilter = yt, this.wrapR = pn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class xn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, a, o) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], d = n[i + 3];
    const f = r[a + 0], p = r[a + 1], g = r[a + 2], b = r[a + 3];
    if (o === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = d;
      return;
    }
    if (o === 1) {
      e[t + 0] = f, e[t + 1] = p, e[t + 2] = g, e[t + 3] = b;
      return;
    }
    if (d !== b || c !== f || l !== p || h !== g) {
      let m = 1 - o;
      const u = c * f + l * p + h * g + d * b, M = u >= 0 ? 1 : -1, S = 1 - u * u;
      if (S > Number.EPSILON) {
        const P = Math.sqrt(S), R = Math.atan2(P, u * M);
        m = Math.sin(m * R) / P, o = Math.sin(o * R) / P;
      }
      const v = o * M;
      if (c = c * m + f * v, l = l * m + p * v, h = h * m + g * v, d = d * m + b * v, m === 1 - o) {
        const P = 1 / Math.sqrt(c * c + l * l + h * h + d * d);
        c *= P, l *= P, h *= P, d *= P;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const o = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], d = r[a], f = r[a + 1], p = r[a + 2], g = r[a + 3];
    return e[t] = o * g + h * d + c * p - l * f, e[t + 1] = c * g + h * f + l * d - o * p, e[t + 2] = l * g + h * p + o * f - c * d, e[t + 3] = h * g - o * d - c * f - l * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, i = e._y, r = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(i / 2), d = o(r / 2), f = c(n / 2), p = c(i / 2), g = c(r / 2);
    switch (a) {
      case "XYZ":
        this._x = f * h * d + l * p * g, this._y = l * p * d - f * h * g, this._z = l * h * g + f * p * d, this._w = l * h * d - f * p * g;
        break;
      case "YXZ":
        this._x = f * h * d + l * p * g, this._y = l * p * d - f * h * g, this._z = l * h * g - f * p * d, this._w = l * h * d + f * p * g;
        break;
      case "ZXY":
        this._x = f * h * d - l * p * g, this._y = l * p * d + f * h * g, this._z = l * h * g + f * p * d, this._w = l * h * d - f * p * g;
        break;
      case "ZYX":
        this._x = f * h * d - l * p * g, this._y = l * p * d + f * h * g, this._z = l * h * g - f * p * d, this._w = l * h * d + f * p * g;
        break;
      case "YZX":
        this._x = f * h * d + l * p * g, this._y = l * p * d + f * h * g, this._z = l * h * g - f * p * d, this._w = l * h * d - f * p * g;
        break;
      case "XZY":
        this._x = f * h * d - l * p * g, this._y = l * p * d - f * h * g, this._z = l * h * g + f * p * d, this._w = l * h * d + f * p * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], a = t[1], o = t[5], c = t[9], l = t[2], h = t[6], d = t[10], f = n + o + d;
    if (f > 0) {
      const p = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / p, this._x = (h - c) * p, this._y = (r - l) * p, this._z = (a - i) * p;
    } else if (n > o && n > d) {
      const p = 2 * Math.sqrt(1 + n - o - d);
      this._w = (h - c) / p, this._x = 0.25 * p, this._y = (i + a) / p, this._z = (r + l) / p;
    } else if (o > d) {
      const p = 2 * Math.sqrt(1 + o - n - d);
      this._w = (r - l) / p, this._x = (i + a) / p, this._y = 0.25 * p, this._z = (c + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + d - n - o);
      this._w = (a - i) / p, this._x = (r + l) / p, this._y = (c + h) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(bt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, r = e._z, a = e._w, o = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + a * o + i * l - r * c, this._y = i * h + a * c + r * o - n * l, this._z = r * h + a * l + n * c - i * o, this._w = a * h - n * o - i * c - r * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, r = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + r * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = r, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * a + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * r + t * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, o), d = Math.sin((1 - t) * h) / l, f = Math.sin(t * h) / l;
    return this._w = a * d + this._w * f, this._x = n * d + this._x * f, this._y = i * d + this._y * f, this._z = r * d + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(
      i * Math.sin(e),
      i * Math.cos(e),
      r * Math.sin(t),
      r * Math.cos(t)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class D {
  constructor(e = 0, t = 0, n = 0) {
    D.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(sc.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(sc.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * i - o * n), h = 2 * (o * t - r * i), d = 2 * (r * n - a * t);
    return this.x = t + c * l + a * d - o * h, this.y = n + c * h + o * l - r * d, this.z = i + c * d + r * h - a * l, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, r = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = i * c - r * o, this.y = r * a - n * c, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Dr.copy(this).projectOnVector(e), this.sub(Dr);
  }
  reflect(e) {
    return this.sub(Dr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(bt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Dr = /* @__PURE__ */ new D(), sc = /* @__PURE__ */ new xn();
class Yt {
  constructor(e = new D(1 / 0, 1 / 0, 1 / 0), t = new D(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Qt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Qt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Qt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, Qt) : Qt.fromBufferAttribute(r, a), Qt.applyMatrix4(e.matrixWorld), this.expandByPoint(Qt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), ws.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ws.copy(n.boundingBox)), ws.applyMatrix4(e.matrixWorld), this.union(ws);
    }
    const i = e.children;
    for (let r = 0, a = i.length; r < a; r++)
      this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Qt), Qt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Ji), As.subVectors(this.max, Ji), mi.subVectors(e.a, Ji), gi.subVectors(e.b, Ji), bi.subVectors(e.c, Ji), Hn.subVectors(gi, mi), Gn.subVectors(bi, gi), Jn.subVectors(mi, bi);
    let t = [
      0,
      -Hn.z,
      Hn.y,
      0,
      -Gn.z,
      Gn.y,
      0,
      -Jn.z,
      Jn.y,
      Hn.z,
      0,
      -Hn.x,
      Gn.z,
      0,
      -Gn.x,
      Jn.z,
      0,
      -Jn.x,
      -Hn.y,
      Hn.x,
      0,
      -Gn.y,
      Gn.x,
      0,
      -Jn.y,
      Jn.x,
      0
    ];
    return !Lr(t, mi, gi, bi, As) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Lr(t, mi, gi, bi, As)) ? !1 : (Rs.crossVectors(Hn, Gn), t = [Rs.x, Rs.y, Rs.z], Lr(t, mi, gi, bi, As));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Qt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Qt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Tn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Tn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Tn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Tn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Tn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Tn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Tn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Tn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Tn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Tn = [
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D()
], Qt = /* @__PURE__ */ new D(), ws = /* @__PURE__ */ new Yt(), mi = /* @__PURE__ */ new D(), gi = /* @__PURE__ */ new D(), bi = /* @__PURE__ */ new D(), Hn = /* @__PURE__ */ new D(), Gn = /* @__PURE__ */ new D(), Jn = /* @__PURE__ */ new D(), Ji = /* @__PURE__ */ new D(), As = /* @__PURE__ */ new D(), Rs = /* @__PURE__ */ new D(), ei = /* @__PURE__ */ new D();
function Lr(s, e, t, n, i) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    ei.fromArray(s, r);
    const o = i.x * Math.abs(ei.x) + i.y * Math.abs(ei.y) + i.z * Math.abs(ei.z), c = e.dot(ei), l = t.dot(ei), h = n.dot(ei);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
      return !1;
  }
  return !0;
}
const Ld = /* @__PURE__ */ new Yt(), es = /* @__PURE__ */ new D(), Ir = /* @__PURE__ */ new D();
class Kt {
  constructor(e = new D(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Ld.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, a = e.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    es.subVectors(e, this.center);
    const t = es.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(es, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Ir.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(es.copy(e.center).add(Ir)), this.expandByPoint(es.copy(e.center).sub(Ir))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const wn = /* @__PURE__ */ new D(), Nr = /* @__PURE__ */ new D(), Cs = /* @__PURE__ */ new D(), Vn = /* @__PURE__ */ new D(), Ur = /* @__PURE__ */ new D(), Ps = /* @__PURE__ */ new D(), Fr = /* @__PURE__ */ new D();
class ji {
  constructor(e = new D(), t = new D(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, wn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = wn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (wn.copy(this.origin).addScaledVector(this.direction, t), wn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Nr.copy(e).add(t).multiplyScalar(0.5), Cs.copy(t).sub(e).normalize(), Vn.copy(this.origin).sub(Nr);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(Cs), o = Vn.dot(this.direction), c = -Vn.dot(Cs), l = Vn.lengthSq(), h = Math.abs(1 - a * a);
    let d, f, p, g;
    if (h > 0)
      if (d = a * c - o, f = a * o - c, g = r * h, d >= 0)
        if (f >= -g)
          if (f <= g) {
            const b = 1 / h;
            d *= b, f *= b, p = d * (d + a * f + 2 * o) + f * (a * d + f + 2 * c) + l;
          } else
            f = r, d = Math.max(0, -(a * f + o)), p = -d * d + f * (f + 2 * c) + l;
        else
          f = -r, d = Math.max(0, -(a * f + o)), p = -d * d + f * (f + 2 * c) + l;
      else
        f <= -g ? (d = Math.max(0, -(-a * r + o)), f = d > 0 ? -r : Math.min(Math.max(-r, -c), r), p = -d * d + f * (f + 2 * c) + l) : f <= g ? (d = 0, f = Math.min(Math.max(-r, -c), r), p = f * (f + 2 * c) + l) : (d = Math.max(0, -(a * r + o)), f = d > 0 ? r : Math.min(Math.max(-r, -c), r), p = -d * d + f * (f + 2 * c) + l);
    else
      f = a > 0 ? -r : r, d = Math.max(0, -(a * f + o)), p = -d * d + f * (f + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), i && i.copy(Nr).addScaledVector(Cs, f), p;
  }
  intersectSphere(e, t) {
    wn.subVectors(e.center, this.origin);
    const n = wn.dot(this.direction), i = wn.dot(wn) - n * n, r = e.radius * e.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, a, o, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (n = (e.min.x - f.x) * l, i = (e.max.x - f.x) * l) : (n = (e.max.x - f.x) * l, i = (e.min.x - f.x) * l), h >= 0 ? (r = (e.min.y - f.y) * h, a = (e.max.y - f.y) * h) : (r = (e.max.y - f.y) * h, a = (e.min.y - f.y) * h), n > a || r > i || ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), d >= 0 ? (o = (e.min.z - f.z) * d, c = (e.max.z - f.z) * d) : (o = (e.max.z - f.z) * d, c = (e.min.z - f.z) * d), n > c || o > i) || ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, wn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Ur.subVectors(t, e), Ps.subVectors(n, e), Fr.crossVectors(Ur, Ps);
    let a = this.direction.dot(Fr), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    Vn.subVectors(this.origin, e);
    const c = o * this.direction.dot(Ps.crossVectors(Vn, Ps));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(Ur.cross(Vn));
    if (l < 0 || c + l > a)
      return null;
    const h = -o * Vn.dot(Fr);
    return h < 0 ? null : this.at(h / a, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Re {
  constructor(e, t, n, i, r, a, o, c, l, h, d, f, p, g, b, m) {
    Re.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, r, a, o, c, l, h, d, f, p, g, b, m);
  }
  set(e, t, n, i, r, a, o, c, l, h, d, f, p, g, b, m) {
    const u = this.elements;
    return u[0] = e, u[4] = t, u[8] = n, u[12] = i, u[1] = r, u[5] = a, u[9] = o, u[13] = c, u[2] = l, u[6] = h, u[10] = d, u[14] = f, u[3] = p, u[7] = g, u[11] = b, u[15] = m, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Re().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / _i.setFromMatrixColumn(e, 0).length(), r = 1 / _i.setFromMatrixColumn(e, 1).length(), a = 1 / _i.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(r), d = Math.sin(r);
    if (e.order === "XYZ") {
      const f = a * h, p = a * d, g = o * h, b = o * d;
      t[0] = c * h, t[4] = -c * d, t[8] = l, t[1] = p + g * l, t[5] = f - b * l, t[9] = -o * c, t[2] = b - f * l, t[6] = g + p * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const f = c * h, p = c * d, g = l * h, b = l * d;
      t[0] = f + b * o, t[4] = g * o - p, t[8] = a * l, t[1] = a * d, t[5] = a * h, t[9] = -o, t[2] = p * o - g, t[6] = b + f * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const f = c * h, p = c * d, g = l * h, b = l * d;
      t[0] = f - b * o, t[4] = -a * d, t[8] = g + p * o, t[1] = p + g * o, t[5] = a * h, t[9] = b - f * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const f = a * h, p = a * d, g = o * h, b = o * d;
      t[0] = c * h, t[4] = g * l - p, t[8] = f * l + b, t[1] = c * d, t[5] = b * l + f, t[9] = p * l - g, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const f = a * c, p = a * l, g = o * c, b = o * l;
      t[0] = c * h, t[4] = b - f * d, t[8] = g * d + p, t[1] = d, t[5] = a * h, t[9] = -o * h, t[2] = -l * h, t[6] = p * d + g, t[10] = f - b * d;
    } else if (e.order === "XZY") {
      const f = a * c, p = a * l, g = o * c, b = o * l;
      t[0] = c * h, t[4] = -d, t[8] = l * h, t[1] = f * d + b, t[5] = a * h, t[9] = p * d - g, t[2] = g * d - p, t[6] = o * h, t[10] = b * d + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Id, e, Nd);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return kt.subVectors(e, t), kt.lengthSq() === 0 && (kt.z = 1), kt.normalize(), Wn.crossVectors(n, kt), Wn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? kt.x += 1e-4 : kt.z += 1e-4, kt.normalize(), Wn.crossVectors(n, kt)), Wn.normalize(), Ds.crossVectors(kt, Wn), i[0] = Wn.x, i[4] = Ds.x, i[8] = kt.x, i[1] = Wn.y, i[5] = Ds.y, i[9] = kt.y, i[2] = Wn.z, i[6] = Ds.z, i[10] = kt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], d = n[5], f = n[9], p = n[13], g = n[2], b = n[6], m = n[10], u = n[14], M = n[3], S = n[7], v = n[11], P = n[15], R = i[0], A = i[4], C = i[8], y = i[12], _ = i[1], w = i[5], O = i[9], F = i[13], k = i[2], j = i[6], z = i[10], Z = i[14], V = i[3], Q = i[7], ne = i[11], fe = i[15];
    return r[0] = a * R + o * _ + c * k + l * V, r[4] = a * A + o * w + c * j + l * Q, r[8] = a * C + o * O + c * z + l * ne, r[12] = a * y + o * F + c * Z + l * fe, r[1] = h * R + d * _ + f * k + p * V, r[5] = h * A + d * w + f * j + p * Q, r[9] = h * C + d * O + f * z + p * ne, r[13] = h * y + d * F + f * Z + p * fe, r[2] = g * R + b * _ + m * k + u * V, r[6] = g * A + b * w + m * j + u * Q, r[10] = g * C + b * O + m * z + u * ne, r[14] = g * y + b * F + m * Z + u * fe, r[3] = M * R + S * _ + v * k + P * V, r[7] = M * A + S * w + v * j + P * Q, r[11] = M * C + S * O + v * z + P * ne, r[15] = M * y + S * F + v * Z + P * fe, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], a = e[1], o = e[5], c = e[9], l = e[13], h = e[2], d = e[6], f = e[10], p = e[14], g = e[3], b = e[7], m = e[11], u = e[15];
    return g * (+r * c * d - i * l * d - r * o * f + n * l * f + i * o * p - n * c * p) + b * (+t * c * p - t * l * f + r * a * f - i * a * p + i * l * h - r * c * h) + m * (+t * l * d - t * o * p - r * a * d + n * a * p + r * o * h - n * l * h) + u * (-i * o * h - t * c * d + t * o * f + i * a * d - n * a * f + n * c * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], c = e[6], l = e[7], h = e[8], d = e[9], f = e[10], p = e[11], g = e[12], b = e[13], m = e[14], u = e[15], M = d * m * l - b * f * l + b * c * p - o * m * p - d * c * u + o * f * u, S = g * f * l - h * m * l - g * c * p + a * m * p + h * c * u - a * f * u, v = h * b * l - g * d * l + g * o * p - a * b * p - h * o * u + a * d * u, P = g * d * c - h * b * c - g * o * f + a * b * f + h * o * m - a * d * m, R = t * M + n * S + i * v + r * P;
    if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / R;
    return e[0] = M * A, e[1] = (b * f * r - d * m * r - b * i * p + n * m * p + d * i * u - n * f * u) * A, e[2] = (o * m * r - b * c * r + b * i * l - n * m * l - o * i * u + n * c * u) * A, e[3] = (d * c * r - o * f * r - d * i * l + n * f * l + o * i * p - n * c * p) * A, e[4] = S * A, e[5] = (h * m * r - g * f * r + g * i * p - t * m * p - h * i * u + t * f * u) * A, e[6] = (g * c * r - a * m * r - g * i * l + t * m * l + a * i * u - t * c * u) * A, e[7] = (a * f * r - h * c * r + h * i * l - t * f * l - a * i * p + t * c * p) * A, e[8] = v * A, e[9] = (g * d * r - h * b * r - g * n * p + t * b * p + h * n * u - t * d * u) * A, e[10] = (a * b * r - g * o * r + g * n * l - t * b * l - a * n * u + t * o * u) * A, e[11] = (h * o * r - a * d * r - h * n * l + t * d * l + a * n * p - t * o * p) * A, e[12] = P * A, e[13] = (h * b * i - g * d * i + g * n * f - t * b * f - h * n * m + t * d * m) * A, e[14] = (g * o * i - a * b * i - g * n * c + t * b * c + a * n * m - t * o * m) * A, e[15] = (a * d * i - h * o * i + h * n * c - t * d * c - a * n * f + t * o * f) * A, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, a = e.x, o = e.y, c = e.z, l = r * a, h = r * o;
    return this.set(
      l * a + n,
      l * o - i * c,
      l * c + i * o,
      0,
      l * o + i * c,
      h * o + n,
      h * c - i * a,
      0,
      l * c - i * o,
      h * c + i * a,
      r * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(
      1,
      n,
      r,
      0,
      e,
      1,
      a,
      0,
      t,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const i = this.elements, r = t._x, a = t._y, o = t._z, c = t._w, l = r + r, h = a + a, d = o + o, f = r * l, p = r * h, g = r * d, b = a * h, m = a * d, u = o * d, M = c * l, S = c * h, v = c * d, P = n.x, R = n.y, A = n.z;
    return i[0] = (1 - (b + u)) * P, i[1] = (p + v) * P, i[2] = (g - S) * P, i[3] = 0, i[4] = (p - v) * R, i[5] = (1 - (f + u)) * R, i[6] = (m + M) * R, i[7] = 0, i[8] = (g + S) * A, i[9] = (m - M) * A, i[10] = (1 - (f + b)) * A, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = _i.set(i[0], i[1], i[2]).length();
    const a = _i.set(i[4], i[5], i[6]).length(), o = _i.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], Jt.copy(this);
    const l = 1 / r, h = 1 / a, d = 1 / o;
    return Jt.elements[0] *= l, Jt.elements[1] *= l, Jt.elements[2] *= l, Jt.elements[4] *= h, Jt.elements[5] *= h, Jt.elements[6] *= h, Jt.elements[8] *= d, Jt.elements[9] *= d, Jt.elements[10] *= d, t.setFromRotationMatrix(Jt), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, r, a, o = Un) {
    const c = this.elements, l = 2 * r / (t - e), h = 2 * r / (n - i), d = (t + e) / (t - e), f = (n + i) / (n - i);
    let p, g;
    if (o === Un)
      p = -(a + r) / (a - r), g = -2 * a * r / (a - r);
    else if (o === fr)
      p = -a / (a - r), g = -a * r / (a - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = h, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = p, c[14] = g, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, a, o = Un) {
    const c = this.elements, l = 1 / (t - e), h = 1 / (n - i), d = 1 / (a - r), f = (t + e) * l, p = (n + i) * h;
    let g, b;
    if (o === Un)
      g = (a + r) * d, b = -2 * d;
    else if (o === fr)
      g = r * d, b = -1 * d;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -f, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -p, c[2] = 0, c[6] = 0, c[10] = b, c[14] = -g, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++)
      if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const _i = /* @__PURE__ */ new D(), Jt = /* @__PURE__ */ new Re(), Id = /* @__PURE__ */ new D(0, 0, 0), Nd = /* @__PURE__ */ new D(1, 1, 1), Wn = /* @__PURE__ */ new D(), Ds = /* @__PURE__ */ new D(), kt = /* @__PURE__ */ new D(), rc = /* @__PURE__ */ new Re(), ac = /* @__PURE__ */ new xn();
class yn {
  constructor(e = 0, t = 0, n = 0, i = yn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements, r = i[0], a = i[4], o = i[8], c = i[1], l = i[5], h = i[9], d = i[2], f = i[6], p = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(bt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-bt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(bt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, p), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, r));
        break;
      case "ZYX":
        this._y = Math.asin(-bt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, p), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(bt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-d, r)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-bt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return rc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(rc, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ac.setFromEuler(this), this.setFromQuaternion(ac, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
yn.DEFAULT_ORDER = "XYZ";
class xo {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Ud = 0;
const oc = /* @__PURE__ */ new D(), vi = /* @__PURE__ */ new xn(), An = /* @__PURE__ */ new Re(), Ls = /* @__PURE__ */ new D(), ts = /* @__PURE__ */ new D(), Fd = /* @__PURE__ */ new D(), Od = /* @__PURE__ */ new xn(), cc = /* @__PURE__ */ new D(1, 0, 0), lc = /* @__PURE__ */ new D(0, 1, 0), hc = /* @__PURE__ */ new D(0, 0, 1), dc = { type: "added" }, kd = { type: "removed" }, xi = { type: "childadded", child: null }, Or = { type: "childremoved", child: null };
class ot extends kn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Ud++ }), this.uuid = rn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ot.DEFAULT_UP.clone();
    const e = new D(), t = new yn(), n = new xn(), i = new D(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Re()
      },
      normalMatrix: {
        value: new Fe()
      }
    }), this.matrix = new Re(), this.matrixWorld = new Re(), this.matrixAutoUpdate = ot.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new xo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return vi.setFromAxisAngle(e, t), this.quaternion.multiply(vi), this;
  }
  rotateOnWorldAxis(e, t) {
    return vi.setFromAxisAngle(e, t), this.quaternion.premultiply(vi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(cc, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(lc, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(hc, e);
  }
  translateOnAxis(e, t) {
    return oc.copy(e).applyQuaternion(this.quaternion), this.position.add(oc.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(cc, e);
  }
  translateY(e) {
    return this.translateOnAxis(lc, e);
  }
  translateZ(e) {
    return this.translateOnAxis(hc, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(An.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ls.copy(e) : Ls.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), ts.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? An.lookAt(ts, Ls, this.up) : An.lookAt(Ls, ts, this.up), this.quaternion.setFromRotationMatrix(An), i && (An.extractRotation(i.matrixWorld), vi.setFromRotationMatrix(An), this.quaternion.premultiply(vi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(dc), xi.child = e, this.dispatchEvent(xi), xi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(kd), Or.child = e, this.dispatchEvent(Or), Or.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), An.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), An.multiply(e.parent.matrixWorld)), e.applyMatrix4(An), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(dc), xi.child = e, this.dispatchEvent(xi), xi.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let r = 0, a = i.length; r < a; r++)
      i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ts, e, Fd), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ts, Od, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++)
      t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++)
        i[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function r(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const d = c[l];
            r(e.shapes, d);
          }
        else
          r(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(r(e.materials, this.material[c]));
        i.material = o;
      } else
        i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        i.animations.push(r(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), h = a(e.images), d = a(e.shapes), f = a(e.skeletons), p = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
ot.DEFAULT_UP = /* @__PURE__ */ new D(0, 1, 0);
ot.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const en = /* @__PURE__ */ new D(), Rn = /* @__PURE__ */ new D(), kr = /* @__PURE__ */ new D(), Cn = /* @__PURE__ */ new D(), yi = /* @__PURE__ */ new D(), Mi = /* @__PURE__ */ new D(), uc = /* @__PURE__ */ new D(), Br = /* @__PURE__ */ new D(), zr = /* @__PURE__ */ new D(), Hr = /* @__PURE__ */ new D(), Gr = /* @__PURE__ */ new qe(), Vr = /* @__PURE__ */ new qe(), Wr = /* @__PURE__ */ new qe();
class sn {
  constructor(e = new D(), t = new D(), n = new D()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), en.subVectors(e, t), i.cross(en);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, i, r) {
    en.subVectors(i, t), Rn.subVectors(n, t), kr.subVectors(e, t);
    const a = en.dot(en), o = en.dot(Rn), c = en.dot(kr), l = Rn.dot(Rn), h = Rn.dot(kr), d = a * l - o * o;
    if (d === 0)
      return r.set(0, 0, 0), null;
    const f = 1 / d, p = (l * c - o * h) * f, g = (a * h - o * c) * f;
    return r.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Cn) === null ? !1 : Cn.x >= 0 && Cn.y >= 0 && Cn.x + Cn.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, a, o, c) {
    return this.getBarycoord(e, t, n, i, Cn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(r, Cn.x), c.addScaledVector(a, Cn.y), c.addScaledVector(o, Cn.z), c);
  }
  static getInterpolatedAttribute(e, t, n, i, r, a) {
    return Gr.setScalar(0), Vr.setScalar(0), Wr.setScalar(0), Gr.fromBufferAttribute(e, t), Vr.fromBufferAttribute(e, n), Wr.fromBufferAttribute(e, i), a.setScalar(0), a.addScaledVector(Gr, r.x), a.addScaledVector(Vr, r.y), a.addScaledVector(Wr, r.z), a;
  }
  static isFrontFacing(e, t, n, i) {
    return en.subVectors(n, t), Rn.subVectors(e, t), en.cross(Rn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return en.subVectors(this.c, this.b), Rn.subVectors(this.a, this.b), en.cross(Rn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return sn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return sn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return sn.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return sn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return sn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let a, o;
    yi.subVectors(i, n), Mi.subVectors(r, n), Br.subVectors(e, n);
    const c = yi.dot(Br), l = Mi.dot(Br);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    zr.subVectors(e, i);
    const h = yi.dot(zr), d = Mi.dot(zr);
    if (h >= 0 && d <= h)
      return t.copy(i);
    const f = c * d - h * l;
    if (f <= 0 && c >= 0 && h <= 0)
      return a = c / (c - h), t.copy(n).addScaledVector(yi, a);
    Hr.subVectors(e, r);
    const p = yi.dot(Hr), g = Mi.dot(Hr);
    if (g >= 0 && p <= g)
      return t.copy(r);
    const b = p * l - c * g;
    if (b <= 0 && l >= 0 && g <= 0)
      return o = l / (l - g), t.copy(n).addScaledVector(Mi, o);
    const m = h * g - p * d;
    if (m <= 0 && d - h >= 0 && p - g >= 0)
      return uc.subVectors(r, i), o = (d - h) / (d - h + (p - g)), t.copy(i).addScaledVector(uc, o);
    const u = 1 / (m + b + f);
    return a = b * u, o = f * u, t.copy(n).addScaledVector(yi, a).addScaledVector(Mi, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Ql = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, jn = { h: 0, s: 0, l: 0 }, Is = { h: 0, s: 0, l: 0 };
function jr(s, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
class Te {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = dt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, We.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = We.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, We.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = We.workingColorSpace) {
    if (e = vo(e, 1), t = bt(t, 0, 1), n = bt(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - r;
      this.r = jr(a, r, e + 1 / 3), this.g = jr(a, r, e), this.b = jr(a, r, e - 1 / 3);
    }
    return We.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = dt) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(255, parseInt(r[1], 10)) / 255,
              Math.min(255, parseInt(r[2], 10)) / 255,
              Math.min(255, parseInt(r[3], 10)) / 255,
              t
            );
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(100, parseInt(r[1], 10)) / 100,
              Math.min(100, parseInt(r[2], 10)) / 100,
              Math.min(100, parseInt(r[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setHSL(
              parseFloat(r[1]) / 360,
              parseFloat(r[2]) / 100,
              parseFloat(r[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = dt) {
    const n = Ql[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = On(e.r), this.g = On(e.g), this.b = On(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ui(e.r), this.g = Ui(e.g), this.b = Ui(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = dt) {
    return We.fromWorkingColorSpace(Tt.copy(this), e), Math.round(bt(Tt.r * 255, 0, 255)) * 65536 + Math.round(bt(Tt.g * 255, 0, 255)) * 256 + Math.round(bt(Tt.b * 255, 0, 255));
  }
  getHexString(e = dt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = We.workingColorSpace) {
    We.fromWorkingColorSpace(Tt.copy(this), t);
    const n = Tt.r, i = Tt.g, r = Tt.b, a = Math.max(n, i, r), o = Math.min(n, i, r);
    let c, l;
    const h = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const d = a - o;
      switch (l = h <= 0.5 ? d / (a + o) : d / (2 - a - o), a) {
        case n:
          c = (i - r) / d + (i < r ? 6 : 0);
          break;
        case i:
          c = (r - n) / d + 2;
          break;
        case r:
          c = (n - i) / d + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = We.workingColorSpace) {
    return We.fromWorkingColorSpace(Tt.copy(this), t), e.r = Tt.r, e.g = Tt.g, e.b = Tt.b, e;
  }
  getStyle(e = dt) {
    We.fromWorkingColorSpace(Tt.copy(this), e);
    const t = Tt.r, n = Tt.g, i = Tt.b;
    return e !== dt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(jn), this.setHSL(jn.h + e, jn.s + t, jn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(jn), e.getHSL(Is);
    const n = ms(jn.h, Is.h, t), i = ms(jn.s, Is.s, t), r = ms(jn.l, Is.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Tt = /* @__PURE__ */ new Te();
Te.NAMES = Ql;
let Bd = 0;
class an extends kn {
  static get type() {
    return "Material";
  }
  get type() {
    return this.constructor.type;
  }
  set type(e) {
  }
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Bd++ }), this.uuid = rn(), this.name = "", this.blending = Ii, this.side = bn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = pa, this.blendDst = ma, this.blendEquation = tn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Te(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Oi, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Ko, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = fi, this.stencilZFail = fi, this.stencilZPass = fi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ii && (n.blending = this.blending), this.side !== bn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== pa && (n.blendSrc = this.blendSrc), this.blendDst !== ma && (n.blendDst = this.blendDst), this.blendEquation !== tn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Oi && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Ko && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== fi && (n.stencilFail = this.stencilFail), this.stencilZFail !== fi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== fi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const o in r) {
        const c = r[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const r = i(e.textures), a = i(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r)
        n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class gn extends an {
  static get type() {
    return "MeshBasicMaterial";
  }
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.color = new Te(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new yn(), this.combine = Pl, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Nn = /* @__PURE__ */ zd();
function zd() {
  const s = new ArrayBuffer(4), e = new Float32Array(s), t = new Uint32Array(s), n = new Uint32Array(512), i = new Uint32Array(512);
  for (let c = 0; c < 256; ++c) {
    const l = c - 127;
    l < -27 ? (n[c] = 0, n[c | 256] = 32768, i[c] = 24, i[c | 256] = 24) : l < -14 ? (n[c] = 1024 >> -l - 14, n[c | 256] = 1024 >> -l - 14 | 32768, i[c] = -l - 1, i[c | 256] = -l - 1) : l <= 15 ? (n[c] = l + 15 << 10, n[c | 256] = l + 15 << 10 | 32768, i[c] = 13, i[c | 256] = 13) : l < 128 ? (n[c] = 31744, n[c | 256] = 64512, i[c] = 24, i[c | 256] = 24) : (n[c] = 31744, n[c | 256] = 64512, i[c] = 13, i[c | 256] = 13);
  }
  const r = new Uint32Array(2048), a = new Uint32Array(64), o = new Uint32Array(64);
  for (let c = 1; c < 1024; ++c) {
    let l = c << 13, h = 0;
    for (; !(l & 8388608); )
      l <<= 1, h -= 8388608;
    l &= -8388609, h += 947912704, r[c] = l | h;
  }
  for (let c = 1024; c < 2048; ++c)
    r[c] = 939524096 + (c - 1024 << 13);
  for (let c = 1; c < 31; ++c)
    a[c] = c << 23;
  a[31] = 1199570944, a[32] = 2147483648;
  for (let c = 33; c < 63; ++c)
    a[c] = 2147483648 + (c - 32 << 23);
  a[63] = 3347054592;
  for (let c = 1; c < 64; ++c)
    c !== 32 && (o[c] = 1024);
  return {
    floatView: e,
    uint32View: t,
    baseTable: n,
    shiftTable: i,
    mantissaTable: r,
    exponentTable: a,
    offsetTable: o
  };
}
function Hd(s) {
  Math.abs(s) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), s = bt(s, -65504, 65504), Nn.floatView[0] = s;
  const e = Nn.uint32View[0], t = e >> 23 & 511;
  return Nn.baseTable[t] + ((e & 8388607) >> Nn.shiftTable[t]);
}
function Gd(s) {
  const e = s >> 10;
  return Nn.uint32View[0] = Nn.mantissaTable[Nn.offsetTable[e] + (s & 1023)] + Nn.exponentTable[e], Nn.floatView[0];
}
const Ns = {
  toHalfFloat: Hd,
  fromHalfFloat: Gd
}, lt = /* @__PURE__ */ new D(), Us = /* @__PURE__ */ new Ee();
class At {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = eo, this.updateRanges = [], this.gpuType = Ut, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Us.fromBufferAttribute(this, t), Us.applyMatrix3(e), this.setXY(t, Us.x, Us.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        lt.fromBufferAttribute(this, t), lt.applyMatrix3(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      lt.fromBufferAttribute(this, t), lt.applyMatrix4(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      lt.fromBufferAttribute(this, t), lt.applyNormalMatrix(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      lt.fromBufferAttribute(this, t), lt.transformDirection(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = nn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Je(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Je(t, this.array), n = Je(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Je(t, this.array), n = Je(n, this.array), i = Je(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = Je(t, this.array), n = Je(n, this.array), i = Je(i, this.array), r = Je(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== eo && (e.usage = this.usage), e;
  }
}
class Jl extends At {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class eh extends At {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class on extends At {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Vd = 0;
const Wt = /* @__PURE__ */ new Re(), Xr = /* @__PURE__ */ new ot(), Si = /* @__PURE__ */ new D(), Bt = /* @__PURE__ */ new Yt(), ns = /* @__PURE__ */ new Yt(), mt = /* @__PURE__ */ new D();
class Ft extends kn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Vd++ }), this.uuid = rn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Kl(e) ? eh : Jl)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Fe().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Wt.makeRotationFromQuaternion(e), this.applyMatrix4(Wt), this;
  }
  rotateX(e) {
    return Wt.makeRotationX(e), this.applyMatrix4(Wt), this;
  }
  rotateY(e) {
    return Wt.makeRotationY(e), this.applyMatrix4(Wt), this;
  }
  rotateZ(e) {
    return Wt.makeRotationZ(e), this.applyMatrix4(Wt), this;
  }
  translate(e, t, n) {
    return Wt.makeTranslation(e, t, n), this.applyMatrix4(Wt), this;
  }
  scale(e, t, n) {
    return Wt.makeScale(e, t, n), this.applyMatrix4(Wt), this;
  }
  lookAt(e) {
    return Xr.lookAt(e), Xr.updateMatrix(), this.applyMatrix4(Xr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Si).negate(), this.translate(Si.x, Si.y, Si.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let i = 0, r = e.length; i < r; i++) {
        const a = e[i];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new on(n, 3));
    } else {
      for (let n = 0, i = t.count; n < i; n++) {
        const r = e[n];
        t.setXYZ(n, r.x, r.y, r.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Yt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new D(-1 / 0, -1 / 0, -1 / 0),
        new D(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          Bt.setFromBufferAttribute(r), this.morphTargetsRelative ? (mt.addVectors(this.boundingBox.min, Bt.min), this.boundingBox.expandByPoint(mt), mt.addVectors(this.boundingBox.max, Bt.max), this.boundingBox.expandByPoint(mt)) : (this.boundingBox.expandByPoint(Bt.min), this.boundingBox.expandByPoint(Bt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Kt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new D(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Bt.setFromBufferAttribute(e), t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r];
          ns.setFromBufferAttribute(o), this.morphTargetsRelative ? (mt.addVectors(Bt.min, ns.min), Bt.expandByPoint(mt), mt.addVectors(Bt.max, ns.max), Bt.expandByPoint(mt)) : (Bt.expandByPoint(ns.min), Bt.expandByPoint(ns.max));
        }
      Bt.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++)
        mt.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(mt));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r], c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            mt.fromBufferAttribute(o, l), c && (Si.fromBufferAttribute(e, l), mt.add(Si)), i = Math.max(i, n.distanceToSquared(mt));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, i = t.normal, r = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new At(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let C = 0; C < n.count; C++)
      o[C] = new D(), c[C] = new D();
    const l = new D(), h = new D(), d = new D(), f = new Ee(), p = new Ee(), g = new Ee(), b = new D(), m = new D();
    function u(C, y, _) {
      l.fromBufferAttribute(n, C), h.fromBufferAttribute(n, y), d.fromBufferAttribute(n, _), f.fromBufferAttribute(r, C), p.fromBufferAttribute(r, y), g.fromBufferAttribute(r, _), h.sub(l), d.sub(l), p.sub(f), g.sub(f);
      const w = 1 / (p.x * g.y - g.x * p.y);
      isFinite(w) && (b.copy(h).multiplyScalar(g.y).addScaledVector(d, -p.y).multiplyScalar(w), m.copy(d).multiplyScalar(p.x).addScaledVector(h, -g.x).multiplyScalar(w), o[C].add(b), o[y].add(b), o[_].add(b), c[C].add(m), c[y].add(m), c[_].add(m));
    }
    let M = this.groups;
    M.length === 0 && (M = [{
      start: 0,
      count: e.count
    }]);
    for (let C = 0, y = M.length; C < y; ++C) {
      const _ = M[C], w = _.start, O = _.count;
      for (let F = w, k = w + O; F < k; F += 3)
        u(
          e.getX(F + 0),
          e.getX(F + 1),
          e.getX(F + 2)
        );
    }
    const S = new D(), v = new D(), P = new D(), R = new D();
    function A(C) {
      P.fromBufferAttribute(i, C), R.copy(P);
      const y = o[C];
      S.copy(y), S.sub(P.multiplyScalar(P.dot(y))).normalize(), v.crossVectors(R, y);
      const w = v.dot(c[C]) < 0 ? -1 : 1;
      a.setXYZW(C, S.x, S.y, S.z, w);
    }
    for (let C = 0, y = M.length; C < y; ++C) {
      const _ = M[C], w = _.start, O = _.count;
      for (let F = w, k = w + O; F < k; F += 3)
        A(e.getX(F + 0)), A(e.getX(F + 1)), A(e.getX(F + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new At(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, p = n.count; f < p; f++)
          n.setXYZ(f, 0, 0, 0);
      const i = new D(), r = new D(), a = new D(), o = new D(), c = new D(), l = new D(), h = new D(), d = new D();
      if (e)
        for (let f = 0, p = e.count; f < p; f += 3) {
          const g = e.getX(f + 0), b = e.getX(f + 1), m = e.getX(f + 2);
          i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, b), a.fromBufferAttribute(t, m), h.subVectors(a, r), d.subVectors(i, r), h.cross(d), o.fromBufferAttribute(n, g), c.fromBufferAttribute(n, b), l.fromBufferAttribute(n, m), o.add(h), c.add(h), l.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(b, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let f = 0, p = t.count; f < p; f += 3)
          i.fromBufferAttribute(t, f + 0), r.fromBufferAttribute(t, f + 1), a.fromBufferAttribute(t, f + 2), h.subVectors(a, r), d.subVectors(i, r), h.cross(d), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      mt.fromBufferAttribute(e, t), mt.normalize(), e.setXYZ(t, mt.x, mt.y, mt.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, h = o.itemSize, d = o.normalized, f = new l.constructor(c.length * h);
      let p = 0, g = 0;
      for (let b = 0, m = c.length; b < m; b++) {
        o.isInterleavedBufferAttribute ? p = c[b] * o.data.stride + o.offset : p = c[b] * h;
        for (let u = 0; u < h; u++)
          f[g++] = l[p++];
      }
      return new At(f, h, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Ft(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const c = i[o], l = e(c, n);
      t.setAttribute(o, l);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const c = [], l = r[o];
      for (let h = 0, d = l.length; h < d; h++) {
        const f = l[h], p = e(f, n);
        c.push(p);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const p = l[d];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && (i[c] = h, r = !0);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const h = [], d = r[l];
      for (let f = 0, p = d.length; f < p; f++)
        h.push(d[f].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const d = a[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const fc = /* @__PURE__ */ new Re(), ti = /* @__PURE__ */ new ji(), Fs = /* @__PURE__ */ new Kt(), pc = /* @__PURE__ */ new D(), Os = /* @__PURE__ */ new D(), ks = /* @__PURE__ */ new D(), Bs = /* @__PURE__ */ new D(), qr = /* @__PURE__ */ new D(), zs = /* @__PURE__ */ new D(), mc = /* @__PURE__ */ new D(), Hs = /* @__PURE__ */ new D();
class vt extends ot {
  constructor(e = new Ft(), t = new gn()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      zs.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const h = o[c], d = r[c];
        h !== 0 && (qr.fromBufferAttribute(d, e), a ? zs.addScaledVector(qr, h) : zs.addScaledVector(qr.sub(t), h));
      }
      t.add(zs);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Fs.copy(n.boundingSphere), Fs.applyMatrix4(r), ti.copy(e.ray).recast(e.near), !(Fs.containsPoint(ti.origin) === !1 && (ti.intersectSphere(Fs, pc) === null || ti.origin.distanceToSquared(pc) > (e.far - e.near) ** 2)) && (fc.copy(r).invert(), ti.copy(e.ray).applyMatrix4(fc), !(n.boundingBox !== null && ti.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, ti)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, a = this.material, o = r.index, c = r.attributes.position, l = r.attributes.uv, h = r.attributes.uv1, d = r.attributes.normal, f = r.groups, p = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, b = f.length; g < b; g++) {
          const m = f[g], u = a[m.materialIndex], M = Math.max(m.start, p.start), S = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
          for (let v = M, P = S; v < P; v += 3) {
            const R = o.getX(v), A = o.getX(v + 1), C = o.getX(v + 2);
            i = Gs(this, u, e, n, l, h, d, R, A, C), i && (i.faceIndex = Math.floor(v / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, p.start), b = Math.min(o.count, p.start + p.count);
        for (let m = g, u = b; m < u; m += 3) {
          const M = o.getX(m), S = o.getX(m + 1), v = o.getX(m + 2);
          i = Gs(this, a, e, n, l, h, d, M, S, v), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, b = f.length; g < b; g++) {
          const m = f[g], u = a[m.materialIndex], M = Math.max(m.start, p.start), S = Math.min(c.count, Math.min(m.start + m.count, p.start + p.count));
          for (let v = M, P = S; v < P; v += 3) {
            const R = v, A = v + 1, C = v + 2;
            i = Gs(this, u, e, n, l, h, d, R, A, C), i && (i.faceIndex = Math.floor(v / 3), i.face.materialIndex = m.materialIndex, t.push(i));
          }
        }
      else {
        const g = Math.max(0, p.start), b = Math.min(c.count, p.start + p.count);
        for (let m = g, u = b; m < u; m += 3) {
          const M = m, S = m + 1, v = m + 2;
          i = Gs(this, a, e, n, l, h, d, M, S, v), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
        }
      }
  }
}
function Wd(s, e, t, n, i, r, a, o) {
  let c;
  if (e.side === Lt ? c = n.intersectTriangle(a, r, i, !0, o) : c = n.intersectTriangle(i, r, a, e.side === bn, o), c === null) return null;
  Hs.copy(o), Hs.applyMatrix4(s.matrixWorld);
  const l = t.ray.origin.distanceTo(Hs);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Hs.clone(),
    object: s
  };
}
function Gs(s, e, t, n, i, r, a, o, c, l) {
  s.getVertexPosition(o, Os), s.getVertexPosition(c, ks), s.getVertexPosition(l, Bs);
  const h = Wd(s, e, t, n, Os, ks, Bs, mc);
  if (h) {
    const d = new D();
    sn.getBarycoord(mc, Os, ks, Bs, d), i && (h.uv = sn.getInterpolatedAttribute(i, o, c, l, d, new Ee())), r && (h.uv1 = sn.getInterpolatedAttribute(r, o, c, l, d, new Ee())), a && (h.normal = sn.getInterpolatedAttribute(a, o, c, l, d, new D()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const f = {
      a: o,
      b: c,
      c: l,
      normal: new D(),
      materialIndex: 0
    };
    sn.getNormal(Os, ks, Bs, f.normal), h.face = f, h.barycoord = d;
  }
  return h;
}
class Xi extends Ft {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: i,
      heightSegments: r,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
    const c = [], l = [], h = [], d = [];
    let f = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, r, 0), g("z", "y", "x", 1, -1, n, t, -e, a, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(c), this.setAttribute("position", new on(l, 3)), this.setAttribute("normal", new on(h, 3)), this.setAttribute("uv", new on(d, 2));
    function g(b, m, u, M, S, v, P, R, A, C, y) {
      const _ = v / A, w = P / C, O = v / 2, F = P / 2, k = R / 2, j = A + 1, z = C + 1;
      let Z = 0, V = 0;
      const Q = new D();
      for (let ne = 0; ne < z; ne++) {
        const fe = ne * w - F;
        for (let ye = 0; ye < j; ye++) {
          const Ie = ye * _ - O;
          Q[b] = Ie * M, Q[m] = fe * S, Q[u] = k, l.push(Q.x, Q.y, Q.z), Q[b] = 0, Q[m] = 0, Q[u] = R > 0 ? 1 : -1, h.push(Q.x, Q.y, Q.z), d.push(ye / A), d.push(1 - ne / C), Z += 1;
        }
      }
      for (let ne = 0; ne < C; ne++)
        for (let fe = 0; fe < A; fe++) {
          const ye = f + fe + j * ne, Ie = f + fe + j * (ne + 1), X = f + (fe + 1) + j * (ne + 1), ee = f + (fe + 1) + j * ne;
          c.push(ye, Ie, ee), c.push(Ie, X, ee), V += 6;
        }
      o.addGroup(p, V, y), p += V, f += Z;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Xi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Hi(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Pt(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = Hi(s[t]);
    for (const i in n)
      e[i] = n[i];
  }
  return e;
}
function jd(s) {
  const e = [];
  for (let t = 0; t < s.length; t++)
    e.push(s[t].clone());
  return e;
}
function th(s) {
  const e = s.getRenderTarget();
  return e === null ? s.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : We.workingColorSpace;
}
const Kn = { clone: Hi, merge: Pt };
var Xd = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, qd = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class wt extends an {
  static get type() {
    return "ShaderMaterial";
  }
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Xd, this.fragmentShader = qd, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Hi(e.uniforms), this.uniformsGroups = jd(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class nh extends ot {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Re(), this.projectionMatrix = new Re(), this.projectionMatrixInverse = new Re(), this.coordinateSystem = Un;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Xn = /* @__PURE__ */ new D(), gc = /* @__PURE__ */ new Ee(), bc = /* @__PURE__ */ new Ee();
class Dt extends nh {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = zi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(ps * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return zi * 2 * Math.atan(
      Math.tan(ps * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, n) {
    Xn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Xn.x, Xn.y).multiplyScalar(-e / Xn.z), Xn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Xn.x, Xn.y).multiplyScalar(-e / Xn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, gc, bc), t.subVectors(bc, gc);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, i, r, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(ps * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      r += a.offsetX * i / c, t -= a.offsetY * n / l, i *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Ei = -90, Ti = 1;
class Yd extends ot {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Dt(Ei, Ti, e, t);
    i.layers = this.layers, this.add(i);
    const r = new Dt(Ei, Ti, e, t);
    r.layers = this.layers, this.add(r);
    const a = new Dt(Ei, Ti, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Dt(Ei, Ti, e, t);
    o.layers = this.layers, this.add(o);
    const c = new Dt(Ei, Ti, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Dt(Ei, Ti, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === Un)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === fr)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, c, l, h] = this.children, d = e.getRenderTarget(), f = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = !1;
    const b = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, c), e.setRenderTarget(n, 4, i), e.render(t, l), n.texture.generateMipmaps = b, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(d, f, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0;
  }
}
class ih extends ut {
  constructor(e, t, n, i, r, a, o, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : ki, super(e, t, n, i, r, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Kd extends cn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new ih(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : _t;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new Xi(5, 5, 5), r = new wt({
      name: "CubemapFromEquirect",
      uniforms: Hi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Lt,
      blending: xt
    });
    r.uniforms.tEquirect.value = t;
    const a = new vt(i, r), o = t.minFilter;
    return t.minFilter === mn && (t.minFilter = _t), new Yd(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const Yr = /* @__PURE__ */ new D(), $d = /* @__PURE__ */ new D(), Zd = /* @__PURE__ */ new Fe();
class In {
  constructor(e = new D(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Yr.subVectors(n, t).cross($d.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Yr), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Zd.getNormalMatrix(e), i = this.coplanarPoint(Yr).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ni = /* @__PURE__ */ new Kt(), Vs = /* @__PURE__ */ new D();
class Mr {
  constructor(e = new In(), t = new In(), n = new In(), i = new In(), r = new In(), a = new In()) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Un) {
    const n = this.planes, i = e.elements, r = i[0], a = i[1], o = i[2], c = i[3], l = i[4], h = i[5], d = i[6], f = i[7], p = i[8], g = i[9], b = i[10], m = i[11], u = i[12], M = i[13], S = i[14], v = i[15];
    if (n[0].setComponents(c - r, f - l, m - p, v - u).normalize(), n[1].setComponents(c + r, f + l, m + p, v + u).normalize(), n[2].setComponents(c + a, f + h, m + g, v + M).normalize(), n[3].setComponents(c - a, f - h, m - g, v - M).normalize(), n[4].setComponents(c - o, f - d, m - b, v - S).normalize(), t === Un)
      n[5].setComponents(c + o, f + d, m + b, v + S).normalize();
    else if (t === fr)
      n[5].setComponents(o, d, b, S).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(ni);
  }
  intersectsSprite(e) {
    return ni.center.set(0, 0, 0), ni.radius = 0.7071067811865476, ni.applyMatrix4(e.matrixWorld), this.intersectsSphere(ni);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++)
      if (t[r].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Vs.x = i.normal.x > 0 ? e.max.x : e.min.x, Vs.y = i.normal.y > 0 ? e.max.y : e.min.y, Vs.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Vs) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function sh() {
  let s = null, e = !1, t = null, n = null;
  function i(r, a) {
    t(r, a), n = s.requestAnimationFrame(i);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = s.requestAnimationFrame(i), e = !0);
    },
    stop: function() {
      s.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(r) {
      t = r;
    },
    setContext: function(r) {
      s = r;
    }
  };
}
function Qd(s) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, c) {
    const l = o.array, h = o.usage, d = l.byteLength, f = s.createBuffer();
    s.bindBuffer(c, f), s.bufferData(c, l, h), o.onUploadCallback();
    let p;
    if (l instanceof Float32Array)
      p = s.FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? p = s.HALF_FLOAT : p = s.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      p = s.SHORT;
    else if (l instanceof Uint32Array)
      p = s.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      p = s.INT;
    else if (l instanceof Int8Array)
      p = s.BYTE;
    else if (l instanceof Uint8Array)
      p = s.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      p = s.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: f,
      type: p,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: d
    };
  }
  function n(o, c, l) {
    const h = c.array, d = c.updateRanges;
    if (s.bindBuffer(l, o), d.length === 0)
      s.bufferSubData(l, 0, h);
    else {
      d.sort((p, g) => p.start - g.start);
      let f = 0;
      for (let p = 1; p < d.length; p++) {
        const g = d[f], b = d[p];
        b.start <= g.start + g.count + 1 ? g.count = Math.max(
          g.count,
          b.start + b.count - g.start
        ) : (++f, d[f] = b);
      }
      d.length = f + 1;
      for (let p = 0, g = d.length; p < g; p++) {
        const b = d[p];
        s.bufferSubData(
          l,
          b.start * h.BYTES_PER_ELEMENT,
          h,
          b.start,
          b.count
        );
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    c && (s.deleteBuffer(c.buffer), e.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const l = e.get(o);
    if (l === void 0)
      e.set(o, t(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, o, c), l.version = o.version;
    }
  }
  return {
    get: i,
    remove: r,
    update: a
  };
}
class ys extends Ft {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: i
    };
    const r = e / 2, a = t / 2, o = Math.floor(n), c = Math.floor(i), l = o + 1, h = c + 1, d = e / o, f = t / c, p = [], g = [], b = [], m = [];
    for (let u = 0; u < h; u++) {
      const M = u * f - a;
      for (let S = 0; S < l; S++) {
        const v = S * d - r;
        g.push(v, -M, 0), b.push(0, 0, 1), m.push(S / o), m.push(1 - u / c);
      }
    }
    for (let u = 0; u < c; u++)
      for (let M = 0; M < o; M++) {
        const S = M + l * u, v = M + l * (u + 1), P = M + 1 + l * (u + 1), R = M + 1 + l * u;
        p.push(S, v, R), p.push(v, P, R);
      }
    this.setIndex(p), this.setAttribute("position", new on(g, 3)), this.setAttribute("normal", new on(b, 3)), this.setAttribute("uv", new on(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ys(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Jd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, eu = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, tu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, nu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, iu = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, su = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, ru = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, au = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, ou = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, cu = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, lu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, hu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, du = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, uu = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, fu = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, pu = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, mu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, gu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, bu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, _u = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, vu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, xu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, yu = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Mu = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Su = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Eu = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Tu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, wu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Au = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Ru = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Cu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Pu = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Du = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Lu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Iu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Nu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Uu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Fu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Ou = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, ku = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Bu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, zu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Hu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Gu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Vu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Wu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, ju = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Xu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, qu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Yu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Ku = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, $u = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Zu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Qu = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Ju = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, ef = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, tf = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, nf = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, sf = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, rf = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, af = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, of = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, cf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, lf = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, hf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, df = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, uf = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, ff = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, pf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, mf = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, gf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, bf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, _f = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, vf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, xf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, yf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Mf = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Sf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Ef = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Tf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, wf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Af = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Rf = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Cf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Pf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Df = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Lf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, If = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Nf = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Uf = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, Ff = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Of = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, kf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Bf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, zf = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Hf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Gf = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Vf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Wf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, jf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Xf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, qf = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Yf = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Kf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, $f = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Zf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Qf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Jf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, ep = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, tp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, np = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, ip = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, sp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, rp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, ap = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, op = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, cp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, lp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, hp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, dp = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, up = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, fp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, pp = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, mp = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, gp = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, bp = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, _p = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, vp = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, xp = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, yp = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Mp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Sp = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Ep = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Tp = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, wp = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ap = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Rp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Cp = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Pp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Dp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Lp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Oe = {
  alphahash_fragment: Jd,
  alphahash_pars_fragment: eu,
  alphamap_fragment: tu,
  alphamap_pars_fragment: nu,
  alphatest_fragment: iu,
  alphatest_pars_fragment: su,
  aomap_fragment: ru,
  aomap_pars_fragment: au,
  batching_pars_vertex: ou,
  batching_vertex: cu,
  begin_vertex: lu,
  beginnormal_vertex: hu,
  bsdfs: du,
  iridescence_fragment: uu,
  bumpmap_pars_fragment: fu,
  clipping_planes_fragment: pu,
  clipping_planes_pars_fragment: mu,
  clipping_planes_pars_vertex: gu,
  clipping_planes_vertex: bu,
  color_fragment: _u,
  color_pars_fragment: vu,
  color_pars_vertex: xu,
  color_vertex: yu,
  common: Mu,
  cube_uv_reflection_fragment: Su,
  defaultnormal_vertex: Eu,
  displacementmap_pars_vertex: Tu,
  displacementmap_vertex: wu,
  emissivemap_fragment: Au,
  emissivemap_pars_fragment: Ru,
  colorspace_fragment: Cu,
  colorspace_pars_fragment: Pu,
  envmap_fragment: Du,
  envmap_common_pars_fragment: Lu,
  envmap_pars_fragment: Iu,
  envmap_pars_vertex: Nu,
  envmap_physical_pars_fragment: ju,
  envmap_vertex: Uu,
  fog_vertex: Fu,
  fog_pars_vertex: Ou,
  fog_fragment: ku,
  fog_pars_fragment: Bu,
  gradientmap_pars_fragment: zu,
  lightmap_pars_fragment: Hu,
  lights_lambert_fragment: Gu,
  lights_lambert_pars_fragment: Vu,
  lights_pars_begin: Wu,
  lights_toon_fragment: Xu,
  lights_toon_pars_fragment: qu,
  lights_phong_fragment: Yu,
  lights_phong_pars_fragment: Ku,
  lights_physical_fragment: $u,
  lights_physical_pars_fragment: Zu,
  lights_fragment_begin: Qu,
  lights_fragment_maps: Ju,
  lights_fragment_end: ef,
  logdepthbuf_fragment: tf,
  logdepthbuf_pars_fragment: nf,
  logdepthbuf_pars_vertex: sf,
  logdepthbuf_vertex: rf,
  map_fragment: af,
  map_pars_fragment: of,
  map_particle_fragment: cf,
  map_particle_pars_fragment: lf,
  metalnessmap_fragment: hf,
  metalnessmap_pars_fragment: df,
  morphinstance_vertex: uf,
  morphcolor_vertex: ff,
  morphnormal_vertex: pf,
  morphtarget_pars_vertex: mf,
  morphtarget_vertex: gf,
  normal_fragment_begin: bf,
  normal_fragment_maps: _f,
  normal_pars_fragment: vf,
  normal_pars_vertex: xf,
  normal_vertex: yf,
  normalmap_pars_fragment: Mf,
  clearcoat_normal_fragment_begin: Sf,
  clearcoat_normal_fragment_maps: Ef,
  clearcoat_pars_fragment: Tf,
  iridescence_pars_fragment: wf,
  opaque_fragment: Af,
  packing: Rf,
  premultiplied_alpha_fragment: Cf,
  project_vertex: Pf,
  dithering_fragment: Df,
  dithering_pars_fragment: Lf,
  roughnessmap_fragment: If,
  roughnessmap_pars_fragment: Nf,
  shadowmap_pars_fragment: Uf,
  shadowmap_pars_vertex: Ff,
  shadowmap_vertex: Of,
  shadowmask_pars_fragment: kf,
  skinbase_vertex: Bf,
  skinning_pars_vertex: zf,
  skinning_vertex: Hf,
  skinnormal_vertex: Gf,
  specularmap_fragment: Vf,
  specularmap_pars_fragment: Wf,
  tonemapping_fragment: jf,
  tonemapping_pars_fragment: Xf,
  transmission_fragment: qf,
  transmission_pars_fragment: Yf,
  uv_pars_fragment: Kf,
  uv_pars_vertex: $f,
  uv_vertex: Zf,
  worldpos_vertex: Qf,
  background_vert: Jf,
  background_frag: ep,
  backgroundCube_vert: tp,
  backgroundCube_frag: np,
  cube_vert: ip,
  cube_frag: sp,
  depth_vert: rp,
  depth_frag: ap,
  distanceRGBA_vert: op,
  distanceRGBA_frag: cp,
  equirect_vert: lp,
  equirect_frag: hp,
  linedashed_vert: dp,
  linedashed_frag: up,
  meshbasic_vert: fp,
  meshbasic_frag: pp,
  meshlambert_vert: mp,
  meshlambert_frag: gp,
  meshmatcap_vert: bp,
  meshmatcap_frag: _p,
  meshnormal_vert: vp,
  meshnormal_frag: xp,
  meshphong_vert: yp,
  meshphong_frag: Mp,
  meshphysical_vert: Sp,
  meshphysical_frag: Ep,
  meshtoon_vert: Tp,
  meshtoon_frag: wp,
  points_vert: Ap,
  points_frag: Rp,
  shadow_vert: Cp,
  shadow_frag: Pp,
  sprite_vert: Dp,
  sprite_frag: Lp
}, ae = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Te(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Fe() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Fe() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Fe() },
    normalScale: { value: /* @__PURE__ */ new Ee(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Fe() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Fe() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Te(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Te(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Fe() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Te(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Ee(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Fe() },
    alphaTest: { value: 0 }
  }
}, fn = {
  basic: {
    uniforms: /* @__PURE__ */ Pt([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.fog
    ]),
    vertexShader: Oe.meshbasic_vert,
    fragmentShader: Oe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Pt([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Te(0) }
      }
    ]),
    vertexShader: Oe.meshlambert_vert,
    fragmentShader: Oe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Pt([
      ae.common,
      ae.specularmap,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Te(0) },
        specular: { value: /* @__PURE__ */ new Te(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Oe.meshphong_vert,
    fragmentShader: Oe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Pt([
      ae.common,
      ae.envmap,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.roughnessmap,
      ae.metalnessmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Te(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Oe.meshphysical_vert,
    fragmentShader: Oe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Pt([
      ae.common,
      ae.aomap,
      ae.lightmap,
      ae.emissivemap,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.gradientmap,
      ae.fog,
      ae.lights,
      {
        emissive: { value: /* @__PURE__ */ new Te(0) }
      }
    ]),
    vertexShader: Oe.meshtoon_vert,
    fragmentShader: Oe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Pt([
      ae.common,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      ae.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Oe.meshmatcap_vert,
    fragmentShader: Oe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Pt([
      ae.points,
      ae.fog
    ]),
    vertexShader: Oe.points_vert,
    fragmentShader: Oe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Pt([
      ae.common,
      ae.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Oe.linedashed_vert,
    fragmentShader: Oe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Pt([
      ae.common,
      ae.displacementmap
    ]),
    vertexShader: Oe.depth_vert,
    fragmentShader: Oe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Pt([
      ae.common,
      ae.bumpmap,
      ae.normalmap,
      ae.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.meshnormal_vert,
    fragmentShader: Oe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Pt([
      ae.sprite,
      ae.fog
    ]),
    vertexShader: Oe.sprite_vert,
    fragmentShader: Oe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Fe() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Oe.background_vert,
    fragmentShader: Oe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Fe() }
    },
    vertexShader: Oe.backgroundCube_vert,
    fragmentShader: Oe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Oe.cube_vert,
    fragmentShader: Oe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Oe.equirect_vert,
    fragmentShader: Oe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Pt([
      ae.common,
      ae.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new D() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Oe.distanceRGBA_vert,
    fragmentShader: Oe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Pt([
      ae.lights,
      ae.fog,
      {
        color: { value: /* @__PURE__ */ new Te(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Oe.shadow_vert,
    fragmentShader: Oe.shadow_frag
  }
};
fn.physical = {
  uniforms: /* @__PURE__ */ Pt([
    fn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Fe() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Fe() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Ee(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Fe() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Fe() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Fe() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Te(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Fe() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Fe() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Fe() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Ee() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Fe() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Te(0) },
      specularColor: { value: /* @__PURE__ */ new Te(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Fe() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Fe() },
      anisotropyVector: { value: /* @__PURE__ */ new Ee() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Fe() }
    }
  ]),
  vertexShader: Oe.meshphysical_vert,
  fragmentShader: Oe.meshphysical_frag
};
const Ws = { r: 0, b: 0, g: 0 }, ii = /* @__PURE__ */ new yn(), Ip = /* @__PURE__ */ new Re();
function Np(s, e, t, n, i, r, a) {
  const o = new Te(0);
  let c = r === !0 ? 0 : 1, l, h, d = null, f = 0, p = null;
  function g(M) {
    let S = M.isScene === !0 ? M.background : null;
    return S && S.isTexture && (S = (M.backgroundBlurriness > 0 ? t : e).get(S)), S;
  }
  function b(M) {
    let S = !1;
    const v = g(M);
    v === null ? u(o, c) : v && v.isColor && (u(v, 1), S = !0);
    const P = s.xr.getEnvironmentBlendMode();
    P === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : P === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (s.autoClear || S) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil));
  }
  function m(M, S) {
    const v = g(S);
    v && (v.isCubeTexture || v.mapping === xr) ? (h === void 0 && (h = new vt(
      new Xi(1, 1, 1),
      new wt({
        name: "BackgroundCubeMaterial",
        uniforms: Hi(fn.backgroundCube.uniforms),
        vertexShader: fn.backgroundCube.vertexShader,
        fragmentShader: fn.backgroundCube.fragmentShader,
        side: Lt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(P, R, A) {
      this.matrixWorld.copyPosition(A.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), ii.copy(S.backgroundRotation), ii.x *= -1, ii.y *= -1, ii.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === !1 && (ii.y *= -1, ii.z *= -1), h.material.uniforms.envMap.value = v, h.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(ii)), h.material.toneMapped = We.getTransfer(v.colorSpace) !== Qe, (d !== v || f !== v.version || p !== s.toneMapping) && (h.material.needsUpdate = !0, d = v, f = v.version, p = s.toneMapping), h.layers.enableAll(), M.unshift(h, h.geometry, h.material, 0, 0, null)) : v && v.isTexture && (l === void 0 && (l = new vt(
      new ys(2, 2),
      new wt({
        name: "BackgroundMaterial",
        uniforms: Hi(fn.background.uniforms),
        vertexShader: fn.background.vertexShader,
        fragmentShader: fn.background.fragmentShader,
        side: bn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = v, l.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, l.material.toneMapped = We.getTransfer(v.colorSpace) !== Qe, v.matrixAutoUpdate === !0 && v.updateMatrix(), l.material.uniforms.uvTransform.value.copy(v.matrix), (d !== v || f !== v.version || p !== s.toneMapping) && (l.material.needsUpdate = !0, d = v, f = v.version, p = s.toneMapping), l.layers.enableAll(), M.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function u(M, S) {
    M.getRGB(Ws, th(s)), n.buffers.color.setClear(Ws.r, Ws.g, Ws.b, S, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(M, S = 1) {
      o.set(M), c = S, u(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(M) {
      c = M, u(o, c);
    },
    render: b,
    addToRenderList: m
  };
}
function Up(s, e) {
  const t = s.getParameter(s.MAX_VERTEX_ATTRIBS), n = {}, i = f(null);
  let r = i, a = !1;
  function o(_, w, O, F, k) {
    let j = !1;
    const z = d(F, O, w);
    r !== z && (r = z, l(r.object)), j = p(_, F, O, k), j && g(_, F, O, k), k !== null && e.update(k, s.ELEMENT_ARRAY_BUFFER), (j || a) && (a = !1, v(_, w, O, F), k !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get(k).buffer));
  }
  function c() {
    return s.createVertexArray();
  }
  function l(_) {
    return s.bindVertexArray(_);
  }
  function h(_) {
    return s.deleteVertexArray(_);
  }
  function d(_, w, O) {
    const F = O.wireframe === !0;
    let k = n[_.id];
    k === void 0 && (k = {}, n[_.id] = k);
    let j = k[w.id];
    j === void 0 && (j = {}, k[w.id] = j);
    let z = j[F];
    return z === void 0 && (z = f(c()), j[F] = z), z;
  }
  function f(_) {
    const w = [], O = [], F = [];
    for (let k = 0; k < t; k++)
      w[k] = 0, O[k] = 0, F[k] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: w,
      enabledAttributes: O,
      attributeDivisors: F,
      object: _,
      attributes: {},
      index: null
    };
  }
  function p(_, w, O, F) {
    const k = r.attributes, j = w.attributes;
    let z = 0;
    const Z = O.getAttributes();
    for (const V in Z)
      if (Z[V].location >= 0) {
        const ne = k[V];
        let fe = j[V];
        if (fe === void 0 && (V === "instanceMatrix" && _.instanceMatrix && (fe = _.instanceMatrix), V === "instanceColor" && _.instanceColor && (fe = _.instanceColor)), ne === void 0 || ne.attribute !== fe || fe && ne.data !== fe.data) return !0;
        z++;
      }
    return r.attributesNum !== z || r.index !== F;
  }
  function g(_, w, O, F) {
    const k = {}, j = w.attributes;
    let z = 0;
    const Z = O.getAttributes();
    for (const V in Z)
      if (Z[V].location >= 0) {
        let ne = j[V];
        ne === void 0 && (V === "instanceMatrix" && _.instanceMatrix && (ne = _.instanceMatrix), V === "instanceColor" && _.instanceColor && (ne = _.instanceColor));
        const fe = {};
        fe.attribute = ne, ne && ne.data && (fe.data = ne.data), k[V] = fe, z++;
      }
    r.attributes = k, r.attributesNum = z, r.index = F;
  }
  function b() {
    const _ = r.newAttributes;
    for (let w = 0, O = _.length; w < O; w++)
      _[w] = 0;
  }
  function m(_) {
    u(_, 0);
  }
  function u(_, w) {
    const O = r.newAttributes, F = r.enabledAttributes, k = r.attributeDivisors;
    O[_] = 1, F[_] === 0 && (s.enableVertexAttribArray(_), F[_] = 1), k[_] !== w && (s.vertexAttribDivisor(_, w), k[_] = w);
  }
  function M() {
    const _ = r.newAttributes, w = r.enabledAttributes;
    for (let O = 0, F = w.length; O < F; O++)
      w[O] !== _[O] && (s.disableVertexAttribArray(O), w[O] = 0);
  }
  function S(_, w, O, F, k, j, z) {
    z === !0 ? s.vertexAttribIPointer(_, w, O, k, j) : s.vertexAttribPointer(_, w, O, F, k, j);
  }
  function v(_, w, O, F) {
    b();
    const k = F.attributes, j = O.getAttributes(), z = w.defaultAttributeValues;
    for (const Z in j) {
      const V = j[Z];
      if (V.location >= 0) {
        let Q = k[Z];
        if (Q === void 0 && (Z === "instanceMatrix" && _.instanceMatrix && (Q = _.instanceMatrix), Z === "instanceColor" && _.instanceColor && (Q = _.instanceColor)), Q !== void 0) {
          const ne = Q.normalized, fe = Q.itemSize, ye = e.get(Q);
          if (ye === void 0) continue;
          const Ie = ye.buffer, X = ye.type, ee = ye.bytesPerElement, pe = X === s.INT || X === s.UNSIGNED_INT || Q.gpuType === ho;
          if (Q.isInterleavedBufferAttribute) {
            const ie = Q.data, ve = ie.stride, we = Q.offset;
            if (ie.isInstancedInterleavedBuffer) {
              for (let Pe = 0; Pe < V.locationSize; Pe++)
                u(V.location + Pe, ie.meshPerAttribute);
              _.isInstancedMesh !== !0 && F._maxInstanceCount === void 0 && (F._maxInstanceCount = ie.meshPerAttribute * ie.count);
            } else
              for (let Pe = 0; Pe < V.locationSize; Pe++)
                m(V.location + Pe);
            s.bindBuffer(s.ARRAY_BUFFER, Ie);
            for (let Pe = 0; Pe < V.locationSize; Pe++)
              S(
                V.location + Pe,
                fe / V.locationSize,
                X,
                ne,
                ve * ee,
                (we + fe / V.locationSize * Pe) * ee,
                pe
              );
          } else {
            if (Q.isInstancedBufferAttribute) {
              for (let ie = 0; ie < V.locationSize; ie++)
                u(V.location + ie, Q.meshPerAttribute);
              _.isInstancedMesh !== !0 && F._maxInstanceCount === void 0 && (F._maxInstanceCount = Q.meshPerAttribute * Q.count);
            } else
              for (let ie = 0; ie < V.locationSize; ie++)
                m(V.location + ie);
            s.bindBuffer(s.ARRAY_BUFFER, Ie);
            for (let ie = 0; ie < V.locationSize; ie++)
              S(
                V.location + ie,
                fe / V.locationSize,
                X,
                ne,
                fe * ee,
                fe / V.locationSize * ie * ee,
                pe
              );
          }
        } else if (z !== void 0) {
          const ne = z[Z];
          if (ne !== void 0)
            switch (ne.length) {
              case 2:
                s.vertexAttrib2fv(V.location, ne);
                break;
              case 3:
                s.vertexAttrib3fv(V.location, ne);
                break;
              case 4:
                s.vertexAttrib4fv(V.location, ne);
                break;
              default:
                s.vertexAttrib1fv(V.location, ne);
            }
        }
      }
    }
    M();
  }
  function P() {
    C();
    for (const _ in n) {
      const w = n[_];
      for (const O in w) {
        const F = w[O];
        for (const k in F)
          h(F[k].object), delete F[k];
        delete w[O];
      }
      delete n[_];
    }
  }
  function R(_) {
    if (n[_.id] === void 0) return;
    const w = n[_.id];
    for (const O in w) {
      const F = w[O];
      for (const k in F)
        h(F[k].object), delete F[k];
      delete w[O];
    }
    delete n[_.id];
  }
  function A(_) {
    for (const w in n) {
      const O = n[w];
      if (O[_.id] === void 0) continue;
      const F = O[_.id];
      for (const k in F)
        h(F[k].object), delete F[k];
      delete O[_.id];
    }
  }
  function C() {
    y(), a = !0, r !== i && (r = i, l(r.object));
  }
  function y() {
    i.geometry = null, i.program = null, i.wireframe = !1;
  }
  return {
    setup: o,
    reset: C,
    resetDefaultState: y,
    dispose: P,
    releaseStatesOfGeometry: R,
    releaseStatesOfProgram: A,
    initAttributes: b,
    enableAttribute: m,
    disableUnusedAttributes: M
  };
}
function Fp(s, e, t) {
  let n;
  function i(l) {
    n = l;
  }
  function r(l, h) {
    s.drawArrays(n, l, h), t.update(h, n, 1);
  }
  function a(l, h, d) {
    d !== 0 && (s.drawArraysInstanced(n, l, h, d), t.update(h, n, d));
  }
  function o(l, h, d) {
    if (d === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, h, 0, d);
    let p = 0;
    for (let g = 0; g < d; g++)
      p += h[g];
    t.update(p, n, 1);
  }
  function c(l, h, d, f) {
    if (d === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let g = 0; g < l.length; g++)
        a(l[g], h[g], f[g]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, f, 0, d);
      let g = 0;
      for (let b = 0; b < d; b++)
        g += h[b] * f[b];
      t.update(g, n, 1);
    }
  }
  this.setMode = i, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function Op(s, e, t, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const A = e.get("EXT_texture_filter_anisotropic");
      i = s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      i = 0;
    return i;
  }
  function a(A) {
    return !(A !== Gt && n.convert(A) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(A) {
    const C = A === Ht && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(A !== vn && n.convert(A) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    A !== Ut && !C);
  }
  function c(A) {
    if (A === "highp") {
      if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0)
        return "highp";
      A = "mediump";
    }
    return A === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const h = c(l);
  h !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", h, "instead."), l = h);
  const d = t.logarithmicDepthBuffer === !0, f = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"), p = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), g = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), b = s.getParameter(s.MAX_TEXTURE_SIZE), m = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), u = s.getParameter(s.MAX_VERTEX_ATTRIBS), M = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), S = s.getParameter(s.MAX_VARYING_VECTORS), v = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), P = g > 0, R = s.getParameter(s.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: r,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: d,
    reverseDepthBuffer: f,
    maxTextures: p,
    maxVertexTextures: g,
    maxTextureSize: b,
    maxCubemapSize: m,
    maxAttributes: u,
    maxVertexUniforms: M,
    maxVaryings: S,
    maxFragmentUniforms: v,
    vertexTextures: P,
    maxSamples: R
  };
}
function kp(s) {
  const e = this;
  let t = null, n = 0, i = !1, r = !1;
  const a = new In(), o = new Fe(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f) {
    const p = d.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = f, n = d.length, p;
  }, this.beginShadows = function() {
    r = !0, h(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(d, f) {
    t = h(d, f, 0);
  }, this.setState = function(d, f, p) {
    const g = d.clippingPlanes, b = d.clipIntersection, m = d.clipShadows, u = s.get(d);
    if (!i || g === null || g.length === 0 || r && !m)
      r ? h(null) : l();
    else {
      const M = r ? 0 : n, S = M * 4;
      let v = u.clippingState || null;
      c.value = v, v = h(g, f, S, p);
      for (let P = 0; P !== S; ++P)
        v[P] = t[P];
      u.clippingState = v, this.numIntersection = b ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(d, f, p, g) {
    const b = d !== null ? d.length : 0;
    let m = null;
    if (b !== 0) {
      if (m = c.value, g !== !0 || m === null) {
        const u = p + b * 4, M = f.matrixWorldInverse;
        o.getNormalMatrix(M), (m === null || m.length < u) && (m = new Float32Array(u));
        for (let S = 0, v = p; S !== b; ++S, v += 4)
          a.copy(d[S]).applyMatrix4(M, o), a.normal.toArray(m, v), m[v + 3] = a.constant;
      }
      c.value = m, c.needsUpdate = !0;
    }
    return e.numPlanes = b, e.numIntersection = 0, m;
  }
}
function Bp(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === Ta ? a.mapping = ki : o === wa && (a.mapping = Bi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Ta || o === wa)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new Kd(c.height);
            return l.fromEquirectangularTexture(s, a), e.set(a, l), a.addEventListener("dispose", i), t(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class Sr extends nh {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, a = n + e, o = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, a = r + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Di = 4, _c = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], oi = 20, Kr = /* @__PURE__ */ new Sr(), vc = /* @__PURE__ */ new Te();
let $r = null, Zr = 0, Qr = 0, Jr = !1;
const ai = (1 + Math.sqrt(5)) / 2, wi = 1 / ai, xc = [
  /* @__PURE__ */ new D(-ai, wi, 0),
  /* @__PURE__ */ new D(ai, wi, 0),
  /* @__PURE__ */ new D(-wi, 0, ai),
  /* @__PURE__ */ new D(wi, 0, ai),
  /* @__PURE__ */ new D(0, ai, -wi),
  /* @__PURE__ */ new D(0, ai, wi),
  /* @__PURE__ */ new D(-1, 1, -1),
  /* @__PURE__ */ new D(1, 1, -1),
  /* @__PURE__ */ new D(-1, 1, 1),
  /* @__PURE__ */ new D(1, 1, 1)
];
class pr {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, i = 100) {
    $r = this._renderer.getRenderTarget(), Zr = this._renderer.getActiveCubeFace(), Qr = this._renderer.getActiveMipmapLevel(), Jr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Sc(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Mc(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget($r, Zr, Qr), this._renderer.xr.enabled = Jr, e.scissorTest = !1, js(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ki || e.mapping === Bi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), $r = this._renderer.getRenderTarget(), Zr = this._renderer.getActiveCubeFace(), Qr = this._renderer.getActiveMipmapLevel(), Jr = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: _t,
      minFilter: _t,
      generateMipmaps: !1,
      type: Ht,
      format: Gt,
      colorSpace: Rt,
      depthBuffer: !1
    }, i = yc(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = yc(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = zp(r)), this._blurMaterial = Hp(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new vt(this._lodPlanes[0], e);
    this._renderer.compile(t, Kr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new Dt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, d = h.autoClear, f = h.toneMapping;
    h.getClearColor(vc), h.toneMapping = Zn, h.autoClear = !1;
    const p = new gn({
      name: "PMREM.Background",
      side: Lt,
      depthWrite: !1,
      depthTest: !1
    }), g = new vt(new Xi(), p);
    let b = !1;
    const m = e.background;
    m ? m.isColor && (p.color.copy(m), e.background = null, b = !0) : (p.color.copy(vc), b = !0);
    for (let u = 0; u < 6; u++) {
      const M = u % 3;
      M === 0 ? (o.up.set(0, c[u], 0), o.lookAt(l[u], 0, 0)) : M === 1 ? (o.up.set(0, 0, c[u]), o.lookAt(0, l[u], 0)) : (o.up.set(0, c[u], 0), o.lookAt(0, 0, l[u]));
      const S = this._cubeSize;
      js(i, M * S, u > 2 ? S : 0, S, S), h.setRenderTarget(i), b && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = f, h.autoClear = d, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === ki || e.mapping === Bi;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Sc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Mc());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, a = new vt(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    js(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, Kr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = xc[(i - r - 1) % xc.length];
      this._blur(e, r - 1, r, a, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      n,
      i,
      "latitudinal",
      r
    ), this._halfBlur(
      a,
      e,
      n,
      n,
      i,
      "longitudinal",
      r
    );
  }
  _halfBlur(e, t, n, i, r, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, d = new vt(this._lodPlanes[i], l), f = l.uniforms, p = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * oi - 1), b = r / g, m = isFinite(r) ? 1 + Math.floor(h * b) : oi;
    m > oi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);
    const u = [];
    let M = 0;
    for (let A = 0; A < oi; ++A) {
      const C = A / b, y = Math.exp(-C * C / 2);
      u.push(y), A === 0 ? M += y : A < m && (M += 2 * y);
    }
    for (let A = 0; A < u.length; A++)
      u[A] = u[A] / M;
    f.envMap.value = e.texture, f.samples.value = m, f.weights.value = u, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: S } = this;
    f.dTheta.value = g, f.mipInt.value = S - n;
    const v = this._sizeLods[i], P = 3 * v * (i > S - Di ? i - S + Di : 0), R = 4 * (this._cubeSize - v);
    js(t, P, R, 3 * v, 2 * v), c.setRenderTarget(t), c.render(d, Kr);
  }
}
function zp(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - Di + 1 + _c.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let c = 1 / o;
    a > s - Di ? c = _c[a - s + Di - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), h = -l, d = 1 + l, f = [h, h, d, h, d, d, h, h, d, d, h, d], p = 6, g = 6, b = 3, m = 2, u = 1, M = new Float32Array(b * g * p), S = new Float32Array(m * g * p), v = new Float32Array(u * g * p);
    for (let R = 0; R < p; R++) {
      const A = R % 3 * 2 / 3 - 1, C = R > 2 ? 0 : -1, y = [
        A,
        C,
        0,
        A + 2 / 3,
        C,
        0,
        A + 2 / 3,
        C + 1,
        0,
        A,
        C,
        0,
        A + 2 / 3,
        C + 1,
        0,
        A,
        C + 1,
        0
      ];
      M.set(y, b * g * R), S.set(f, m * g * R);
      const _ = [R, R, R, R, R, R];
      v.set(_, u * g * R);
    }
    const P = new Ft();
    P.setAttribute("position", new At(M, b)), P.setAttribute("uv", new At(S, m)), P.setAttribute("faceIndex", new At(v, u)), e.push(P), i > Di && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function yc(s, e, t) {
  const n = new cn(s, e, t);
  return n.texture.mapping = xr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function js(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function Hp(s, e, t) {
  const n = new Float32Array(oi), i = new D(0, 1, 0);
  return new wt({
    name: "SphericalGaussianBlur",
    defines: {
      n: oi,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: yo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: xt,
    depthTest: !1,
    depthWrite: !1
  });
}
function Mc() {
  return new wt({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: yo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: xt,
    depthTest: !1,
    depthWrite: !1
  });
}
function Sc() {
  return new wt({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: yo(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: xt,
    depthTest: !1,
    depthWrite: !1
  });
}
function yo() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function Gp(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === Ta || c === wa, h = c === ki || c === Bi;
      if (l || h) {
        let d = e.get(o);
        const f = d !== void 0 ? d.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f)
          return t === null && (t = new pr(s)), d = l ? t.fromEquirectangular(o, d) : t.fromCubemap(o, d), d.texture.pmremVersion = o.pmremVersion, e.set(o, d), d.texture;
        if (d !== void 0)
          return d.texture;
        {
          const p = o.image;
          return l && p && p.height > 0 || h && p && i(p) ? (t === null && (t = new pr(s)), d = l ? t.fromEquirectangular(o) : t.fromCubemap(o), d.texture.pmremVersion = o.pmremVersion, e.set(o, d), o.addEventListener("dispose", r), d.texture) : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      o[h] !== void 0 && c++;
    return c === l;
  }
  function r(o) {
    const c = o.target;
    c.removeEventListener("dispose", r);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function Vp(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return e[n] = i, i;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function() {
      t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const i = t(n);
      return i === null && ds("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function Wp(s, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes)
      e.remove(f.attributes[g]);
    for (const g in f.morphAttributes) {
      const b = f.morphAttributes[g];
      for (let m = 0, u = b.length; m < u; m++)
        e.remove(b[m]);
    }
    f.removeEventListener("dispose", a), delete i[f.id];
    const p = r.get(f);
    p && (e.remove(p), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function o(d, f) {
    return i[f.id] === !0 || (f.addEventListener("dispose", a), i[f.id] = !0, t.memory.geometries++), f;
  }
  function c(d) {
    const f = d.attributes;
    for (const g in f)
      e.update(f[g], s.ARRAY_BUFFER);
    const p = d.morphAttributes;
    for (const g in p) {
      const b = p[g];
      for (let m = 0, u = b.length; m < u; m++)
        e.update(b[m], s.ARRAY_BUFFER);
    }
  }
  function l(d) {
    const f = [], p = d.index, g = d.attributes.position;
    let b = 0;
    if (p !== null) {
      const M = p.array;
      b = p.version;
      for (let S = 0, v = M.length; S < v; S += 3) {
        const P = M[S + 0], R = M[S + 1], A = M[S + 2];
        f.push(P, R, R, A, A, P);
      }
    } else if (g !== void 0) {
      const M = g.array;
      b = g.version;
      for (let S = 0, v = M.length / 3 - 1; S < v; S += 3) {
        const P = S + 0, R = S + 1, A = S + 2;
        f.push(P, R, R, A, A, P);
      }
    } else
      return;
    const m = new (Kl(f) ? eh : Jl)(f, 1);
    m.version = b;
    const u = r.get(d);
    u && e.remove(u), r.set(d, m);
  }
  function h(d) {
    const f = r.get(d);
    if (f) {
      const p = d.index;
      p !== null && f.version < p.version && l(d);
    } else
      l(d);
    return r.get(d);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: h
  };
}
function jp(s, e, t) {
  let n;
  function i(f) {
    n = f;
  }
  let r, a;
  function o(f) {
    r = f.type, a = f.bytesPerElement;
  }
  function c(f, p) {
    s.drawElements(n, p, r, f * a), t.update(p, n, 1);
  }
  function l(f, p, g) {
    g !== 0 && (s.drawElementsInstanced(n, p, r, f * a, g), t.update(p, n, g));
  }
  function h(f, p, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, r, f, 0, g);
    let m = 0;
    for (let u = 0; u < g; u++)
      m += p[u];
    t.update(m, n, 1);
  }
  function d(f, p, g, b) {
    if (g === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null)
      for (let u = 0; u < f.length; u++)
        l(f[u] / a, p[u], b[u]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, r, f, 0, b, 0, g);
      let u = 0;
      for (let M = 0; M < g; M++)
        u += p[M] * b[M];
      t.update(u, n, 1);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = h, this.renderMultiDrawInstances = d;
}
function Xp(s) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, a, o) {
    switch (t.calls++, a) {
      case s.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case s.LINES:
        t.lines += o * (r / 2);
        break;
      case s.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case s.LINE_LOOP:
        t.lines += o * r;
        break;
      case s.POINTS:
        t.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function qp(s, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new qe();
  function r(a, o, c) {
    const l = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, d = h !== void 0 ? h.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== d) {
      let y = function() {
        A.dispose(), n.delete(o), o.removeEventListener("dispose", y);
      };
      f !== void 0 && f.texture.dispose();
      const p = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, b = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], u = o.morphAttributes.normal || [], M = o.morphAttributes.color || [];
      let S = 0;
      p === !0 && (S = 1), g === !0 && (S = 2), b === !0 && (S = 3);
      let v = o.attributes.position.count * S, P = 1;
      v > e.maxTextureSize && (P = Math.ceil(v / e.maxTextureSize), v = e.maxTextureSize);
      const R = new Float32Array(v * P * 4 * d), A = new Zl(R, v, P, d);
      A.type = Ut, A.needsUpdate = !0;
      const C = S * 4;
      for (let _ = 0; _ < d; _++) {
        const w = m[_], O = u[_], F = M[_], k = v * P * 4 * _;
        for (let j = 0; j < w.count; j++) {
          const z = j * C;
          p === !0 && (i.fromBufferAttribute(w, j), R[k + z + 0] = i.x, R[k + z + 1] = i.y, R[k + z + 2] = i.z, R[k + z + 3] = 0), g === !0 && (i.fromBufferAttribute(O, j), R[k + z + 4] = i.x, R[k + z + 5] = i.y, R[k + z + 6] = i.z, R[k + z + 7] = 0), b === !0 && (i.fromBufferAttribute(F, j), R[k + z + 8] = i.x, R[k + z + 9] = i.y, R[k + z + 10] = i.z, R[k + z + 11] = F.itemSize === 4 ? i.w : 1);
        }
      }
      f = {
        count: d,
        texture: A,
        size: new Ee(v, P)
      }, n.set(o, f), o.addEventListener("dispose", y);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(s, "morphTexture", a.morphTexture, t);
    else {
      let p = 0;
      for (let b = 0; b < l.length; b++)
        p += l[b];
      const g = o.morphTargetsRelative ? 1 : 1 - p;
      c.getUniforms().setValue(s, "morphTargetBaseInfluence", g), c.getUniforms().setValue(s, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(s, "morphTargetsTexture", f.texture, t), c.getUniforms().setValue(s, "morphTargetsTextureSize", f.size);
  }
  return {
    update: r
  };
}
function Yp(s, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(c) {
    const l = n.render.frame, h = c.geometry, d = e.get(c, h);
    if (i.get(d) !== l && (e.update(d), i.set(d, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), i.get(c) !== l && (t.update(c.instanceMatrix, s.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, s.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
      const f = c.skeleton;
      i.get(f) !== l && (f.update(), i.set(f, l));
    }
    return d;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: r,
    dispose: a
  };
}
class Mo extends ut {
  constructor(e, t, n, i, r, a, o, c, l, h = Ni) {
    if (h !== Ni && h !== hi)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Ni && (n = ci), n === void 0 && h === hi && (n = li), super(null, i, r, a, o, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : yt, this.minFilter = c !== void 0 ? c : yt, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const rh = /* @__PURE__ */ new ut(), Ec = /* @__PURE__ */ new Mo(1, 1), ah = /* @__PURE__ */ new Zl(), oh = /* @__PURE__ */ new Dd(), ch = /* @__PURE__ */ new ih(), Tc = [], wc = [], Ac = new Float32Array(16), Rc = new Float32Array(9), Cc = new Float32Array(4);
function qi(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = Tc[i];
  if (r === void 0 && (r = new Float32Array(i), Tc[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, s[a].toArray(r, o);
  }
  return r;
}
function ft(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++)
    if (s[t] !== e[t]) return !1;
  return !0;
}
function pt(s, e) {
  for (let t = 0, n = e.length; t < n; t++)
    s[t] = e[t];
}
function Er(s, e) {
  let t = wc[e];
  t === void 0 && (t = new Int32Array(e), wc[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = s.allocateTextureUnit();
  return t;
}
function Kp(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function $p(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    s.uniform2fv(this.addr, e), pt(t, e);
  }
}
function Zp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ft(t, e)) return;
    s.uniform3fv(this.addr, e), pt(t, e);
  }
}
function Qp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    s.uniform4fv(this.addr, e), pt(t, e);
  }
}
function Jp(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    Cc.set(n), s.uniformMatrix2fv(this.addr, !1, Cc), pt(t, n);
  }
}
function em(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    Rc.set(n), s.uniformMatrix3fv(this.addr, !1, Rc), pt(t, n);
  }
}
function tm(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    Ac.set(n), s.uniformMatrix4fv(this.addr, !1, Ac), pt(t, n);
  }
}
function nm(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function im(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    s.uniform2iv(this.addr, e), pt(t, e);
  }
}
function sm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ft(t, e)) return;
    s.uniform3iv(this.addr, e), pt(t, e);
  }
}
function rm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    s.uniform4iv(this.addr, e), pt(t, e);
  }
}
function am(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function om(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    s.uniform2uiv(this.addr, e), pt(t, e);
  }
}
function cm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ft(t, e)) return;
    s.uniform3uiv(this.addr, e), pt(t, e);
  }
}
function lm(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    s.uniform4uiv(this.addr, e), pt(t, e);
  }
}
function hm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i);
  let r;
  this.type === s.SAMPLER_2D_SHADOW ? (Ec.compareFunction = Yl, r = Ec) : r = rh, t.setTexture2D(e || r, i);
}
function dm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || oh, i);
}
function um(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || ch, i);
}
function fm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || ah, i);
}
function pm(s) {
  switch (s) {
    case 5126:
      return Kp;
    case 35664:
      return $p;
    case 35665:
      return Zp;
    case 35666:
      return Qp;
    case 35674:
      return Jp;
    case 35675:
      return em;
    case 35676:
      return tm;
    case 5124:
    case 35670:
      return nm;
    case 35667:
    case 35671:
      return im;
    case 35668:
    case 35672:
      return sm;
    case 35669:
    case 35673:
      return rm;
    case 5125:
      return am;
    case 36294:
      return om;
    case 36295:
      return cm;
    case 36296:
      return lm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return hm;
    case 35679:
    case 36299:
    case 36307:
      return dm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return um;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return fm;
  }
}
function mm(s, e) {
  s.uniform1fv(this.addr, e);
}
function gm(s, e) {
  const t = qi(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function bm(s, e) {
  const t = qi(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function _m(s, e) {
  const t = qi(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function vm(s, e) {
  const t = qi(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function xm(s, e) {
  const t = qi(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function ym(s, e) {
  const t = qi(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function Mm(s, e) {
  s.uniform1iv(this.addr, e);
}
function Sm(s, e) {
  s.uniform2iv(this.addr, e);
}
function Em(s, e) {
  s.uniform3iv(this.addr, e);
}
function Tm(s, e) {
  s.uniform4iv(this.addr, e);
}
function wm(s, e) {
  s.uniform1uiv(this.addr, e);
}
function Am(s, e) {
  s.uniform2uiv(this.addr, e);
}
function Rm(s, e) {
  s.uniform3uiv(this.addr, e);
}
function Cm(s, e) {
  s.uniform4uiv(this.addr, e);
}
function Pm(s, e, t) {
  const n = this.cache, i = e.length, r = Er(t, i);
  ft(n, r) || (s.uniform1iv(this.addr, r), pt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture2D(e[a] || rh, r[a]);
}
function Dm(s, e, t) {
  const n = this.cache, i = e.length, r = Er(t, i);
  ft(n, r) || (s.uniform1iv(this.addr, r), pt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture3D(e[a] || oh, r[a]);
}
function Lm(s, e, t) {
  const n = this.cache, i = e.length, r = Er(t, i);
  ft(n, r) || (s.uniform1iv(this.addr, r), pt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTextureCube(e[a] || ch, r[a]);
}
function Im(s, e, t) {
  const n = this.cache, i = e.length, r = Er(t, i);
  ft(n, r) || (s.uniform1iv(this.addr, r), pt(n, r));
  for (let a = 0; a !== i; ++a)
    t.setTexture2DArray(e[a] || ah, r[a]);
}
function Nm(s) {
  switch (s) {
    case 5126:
      return mm;
    case 35664:
      return gm;
    case 35665:
      return bm;
    case 35666:
      return _m;
    case 35674:
      return vm;
    case 35675:
      return xm;
    case 35676:
      return ym;
    case 5124:
    case 35670:
      return Mm;
    case 35667:
    case 35671:
      return Sm;
    case 35668:
    case 35672:
      return Em;
    case 35669:
    case 35673:
      return Tm;
    case 5125:
      return wm;
    case 36294:
      return Am;
    case 36295:
      return Rm;
    case 36296:
      return Cm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Pm;
    case 35679:
    case 36299:
    case 36307:
      return Dm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Lm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Im;
  }
}
class Um {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = pm(t.type);
  }
}
class Fm {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Nm(t.type);
  }
}
class Om {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const o = i[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ea = /(\w+)(\])?(\[|\.)?/g;
function Pc(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function km(s, e, t) {
  const n = s.name, i = n.length;
  for (ea.lastIndex = 0; ; ) {
    const r = ea.exec(n), a = ea.lastIndex;
    let o = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === i) {
      Pc(t, l === void 0 ? new Um(o, s, e) : new Fm(o, s, e));
      break;
    } else {
      let d = t.map[o];
      d === void 0 && (d = new Om(o), Pc(t, d)), t = d;
    }
  }
}
class hr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), a = e.getUniformLocation(t, r.name);
      km(r, a, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Dc(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const Bm = 37297;
let zm = 0;
function Hm(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const Lc = /* @__PURE__ */ new Fe();
function Gm(s) {
  We._getMatrix(Lc, We.workingColorSpace, s);
  const e = `mat3( ${Lc.elements.map((t) => t.toFixed(4))} )`;
  switch (We.getTransfer(s)) {
    case yr:
      return [e, "LinearTransferOETF"];
    case Qe:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", s), [e, "LinearTransferOETF"];
  }
}
function Ic(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + Hm(s.getShaderSource(e), a);
  } else
    return i;
}
function Vm(s, e) {
  const t = Gm(e);
  return [
    `vec4 ${s}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function Wm(s, e) {
  let t;
  switch (e) {
    case Dl:
      t = "Linear";
      break;
    case Ll:
      t = "Reinhard";
      break;
    case Il:
      t = "Cineon";
      break;
    case Nl:
      t = "ACESFilmic";
      break;
    case Ul:
      t = "AgX";
      break;
    case lo:
      t = "Neutral";
      break;
    case qh:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Xs = /* @__PURE__ */ new D();
function jm() {
  We.getLuminanceCoefficients(Xs);
  const s = Xs.x.toFixed(4), e = Xs.y.toFixed(4), t = Xs.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function Xm(s) {
  return [
    s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(us).join(`
`);
}
function qm(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Ym(s, e) {
  const t = {}, n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i), a = r.name;
    let o = 1;
    r.type === s.FLOAT_MAT2 && (o = 2), r.type === s.FLOAT_MAT3 && (o = 3), r.type === s.FLOAT_MAT4 && (o = 4), t[a] = {
      type: r.type,
      location: s.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function us(s) {
  return s !== "";
}
function Nc(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Uc(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Km = /^[ \t]*#include +<([\w\d./]+)>/gm;
function to(s) {
  return s.replace(Km, Zm);
}
const $m = /* @__PURE__ */ new Map();
function Zm(s, e) {
  let t = Oe[e];
  if (t === void 0) {
    const n = $m.get(e);
    if (n !== void 0)
      t = Oe[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return to(t);
}
const Qm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Fc(s) {
  return s.replace(Qm, Jm);
}
function Jm(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function Oc(s) {
  let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;
  return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function eg(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === Rl ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === Ph ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === Dn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function tg(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case ki:
      case Bi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case xr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function ng(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case Bi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function ig(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case Pl:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case jh:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Xh:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function sg(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function rg(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = eg(t), l = tg(t), h = ng(t), d = ig(t), f = sg(t), p = Xm(t), g = qm(r), b = i.createProgram();
  let m, u, M = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(us).join(`
`), m.length > 0 && (m += `
`), u = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g
  ].filter(us).join(`
`), u.length > 0 && (u += `
`)) : (m = [
    Oc(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(us).join(`
`), u = [
    Oc(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + d : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.dispersion ? "#define USE_DISPERSION" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== Zn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== Zn ? Oe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== Zn ? Wm("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Oe.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Vm("linearToOutputTexel", t.outputColorSpace),
    jm(),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(us).join(`
`)), a = to(a), a = Nc(a, t), a = Uc(a, t), o = to(o), o = Nc(o, t), o = Uc(o, t), a = Fc(a), o = Fc(o), t.isRawShaderMaterial !== !0 && (M = `#version 300 es
`, m = [
    p,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, u = [
    "#define varying in",
    t.glslVersion === $o ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === $o ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + u);
  const S = M + m + a, v = M + u + o, P = Dc(i, i.VERTEX_SHADER, S), R = Dc(i, i.FRAGMENT_SHADER, v);
  i.attachShader(b, P), i.attachShader(b, R), t.index0AttributeName !== void 0 ? i.bindAttribLocation(b, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(b, 0, "position"), i.linkProgram(b);
  function A(w) {
    if (s.debug.checkShaderErrors) {
      const O = i.getProgramInfoLog(b).trim(), F = i.getShaderInfoLog(P).trim(), k = i.getShaderInfoLog(R).trim();
      let j = !0, z = !0;
      if (i.getProgramParameter(b, i.LINK_STATUS) === !1)
        if (j = !1, typeof s.debug.onShaderError == "function")
          s.debug.onShaderError(i, b, P, R);
        else {
          const Z = Ic(i, P, "vertex"), V = Ic(i, R, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(b, i.VALIDATE_STATUS) + `

Material Name: ` + w.name + `
Material Type: ` + w.type + `

Program Info Log: ` + O + `
` + Z + `
` + V
          );
        }
      else O !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", O) : (F === "" || k === "") && (z = !1);
      z && (w.diagnostics = {
        runnable: j,
        programLog: O,
        vertexShader: {
          log: F,
          prefix: m
        },
        fragmentShader: {
          log: k,
          prefix: u
        }
      });
    }
    i.deleteShader(P), i.deleteShader(R), C = new hr(i, b), y = Ym(i, b);
  }
  let C;
  this.getUniforms = function() {
    return C === void 0 && A(this), C;
  };
  let y;
  this.getAttributes = function() {
    return y === void 0 && A(this), y;
  };
  let _ = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return _ === !1 && (_ = i.getProgramParameter(b, Bm)), _;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(b), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = zm++, this.cacheKey = e, this.usedTimes = 1, this.program = b, this.vertexShader = P, this.fragmentShader = R, this;
}
let ag = 0;
class og {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(r) === !1 && (a.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new cg(e), t.set(e, n)), n;
  }
}
class cg {
  constructor(e) {
    this.id = ag++, this.code = e, this.usedTimes = 0;
  }
}
function lg(s, e, t, n, i, r, a) {
  const o = new xo(), c = new og(), l = /* @__PURE__ */ new Set(), h = [], d = i.logarithmicDepthBuffer, f = i.vertexTextures;
  let p = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function b(y) {
    return l.add(y), y === 0 ? "uv" : `uv${y}`;
  }
  function m(y, _, w, O, F) {
    const k = O.fog, j = F.geometry, z = y.isMeshStandardMaterial ? O.environment : null, Z = (y.isMeshStandardMaterial ? t : e).get(y.envMap || z), V = Z && Z.mapping === xr ? Z.image.height : null, Q = g[y.type];
    y.precision !== null && (p = i.getMaxPrecision(y.precision), p !== y.precision && console.warn("THREE.WebGLProgram.getParameters:", y.precision, "not supported, using", p, "instead."));
    const ne = j.morphAttributes.position || j.morphAttributes.normal || j.morphAttributes.color, fe = ne !== void 0 ? ne.length : 0;
    let ye = 0;
    j.morphAttributes.position !== void 0 && (ye = 1), j.morphAttributes.normal !== void 0 && (ye = 2), j.morphAttributes.color !== void 0 && (ye = 3);
    let Ie, X, ee, pe;
    if (Q) {
      const Ze = fn[Q];
      Ie = Ze.vertexShader, X = Ze.fragmentShader;
    } else
      Ie = y.vertexShader, X = y.fragmentShader, c.update(y), ee = c.getVertexShaderID(y), pe = c.getFragmentShaderID(y);
    const ie = s.getRenderTarget(), ve = s.state.buffers.depth.getReversed(), we = F.isInstancedMesh === !0, Pe = F.isBatchedMesh === !0, nt = !!y.map, He = !!y.matcap, st = !!Z, I = !!y.aoMap, Mt = !!y.lightMap, Be = !!y.bumpMap, ze = !!y.normalMap, Se = !!y.displacementMap, $e = !!y.emissiveMap, Me = !!y.metalnessMap, T = !!y.roughnessMap, x = y.anisotropy > 0, B = y.clearcoat > 0, Y = y.dispersion > 0, $ = y.iridescence > 0, q = y.sheen > 0, me = y.transmission > 0, re = x && !!y.anisotropyMap, oe = B && !!y.clearcoatMap, ke = B && !!y.clearcoatNormalMap, J = B && !!y.clearcoatRoughnessMap, de = $ && !!y.iridescenceMap, Ae = $ && !!y.iridescenceThicknessMap, Ce = q && !!y.sheenColorMap, ue = q && !!y.sheenRoughnessMap, Ve = !!y.specularMap, De = !!y.specularColorMap, je = !!y.specularIntensityMap, L = me && !!y.transmissionMap, se = me && !!y.thicknessMap, W = !!y.gradientMap, K = !!y.alphaMap, he = y.alphaTest > 0, ce = !!y.alphaHash, Ne = !!y.extensions;
    let ct = Zn;
    y.toneMapped && (ie === null || ie.isXRRenderTarget === !0) && (ct = s.toneMapping);
    const St = {
      shaderID: Q,
      shaderType: y.type,
      shaderName: y.name,
      vertexShader: Ie,
      fragmentShader: X,
      defines: y.defines,
      customVertexShaderID: ee,
      customFragmentShaderID: pe,
      isRawShaderMaterial: y.isRawShaderMaterial === !0,
      glslVersion: y.glslVersion,
      precision: p,
      batching: Pe,
      batchingColor: Pe && F._colorsTexture !== null,
      instancing: we,
      instancingColor: we && F.instanceColor !== null,
      instancingMorph: we && F.morphTexture !== null,
      supportsVertexTextures: f,
      outputColorSpace: ie === null ? s.outputColorSpace : ie.isXRRenderTarget === !0 ? ie.texture.colorSpace : Rt,
      alphaToCoverage: !!y.alphaToCoverage,
      map: nt,
      matcap: He,
      envMap: st,
      envMapMode: st && Z.mapping,
      envMapCubeUVHeight: V,
      aoMap: I,
      lightMap: Mt,
      bumpMap: Be,
      normalMap: ze,
      displacementMap: f && Se,
      emissiveMap: $e,
      normalMapObjectSpace: ze && y.normalMapType === Jh,
      normalMapTangentSpace: ze && y.normalMapType === _o,
      metalnessMap: Me,
      roughnessMap: T,
      anisotropy: x,
      anisotropyMap: re,
      clearcoat: B,
      clearcoatMap: oe,
      clearcoatNormalMap: ke,
      clearcoatRoughnessMap: J,
      dispersion: Y,
      iridescence: $,
      iridescenceMap: de,
      iridescenceThicknessMap: Ae,
      sheen: q,
      sheenColorMap: Ce,
      sheenRoughnessMap: ue,
      specularMap: Ve,
      specularColorMap: De,
      specularIntensityMap: je,
      transmission: me,
      transmissionMap: L,
      thicknessMap: se,
      gradientMap: W,
      opaque: y.transparent === !1 && y.blending === Ii && y.alphaToCoverage === !1,
      alphaMap: K,
      alphaTest: he,
      alphaHash: ce,
      combine: y.combine,
      //
      mapUv: nt && b(y.map.channel),
      aoMapUv: I && b(y.aoMap.channel),
      lightMapUv: Mt && b(y.lightMap.channel),
      bumpMapUv: Be && b(y.bumpMap.channel),
      normalMapUv: ze && b(y.normalMap.channel),
      displacementMapUv: Se && b(y.displacementMap.channel),
      emissiveMapUv: $e && b(y.emissiveMap.channel),
      metalnessMapUv: Me && b(y.metalnessMap.channel),
      roughnessMapUv: T && b(y.roughnessMap.channel),
      anisotropyMapUv: re && b(y.anisotropyMap.channel),
      clearcoatMapUv: oe && b(y.clearcoatMap.channel),
      clearcoatNormalMapUv: ke && b(y.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: J && b(y.clearcoatRoughnessMap.channel),
      iridescenceMapUv: de && b(y.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ae && b(y.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ce && b(y.sheenColorMap.channel),
      sheenRoughnessMapUv: ue && b(y.sheenRoughnessMap.channel),
      specularMapUv: Ve && b(y.specularMap.channel),
      specularColorMapUv: De && b(y.specularColorMap.channel),
      specularIntensityMapUv: je && b(y.specularIntensityMap.channel),
      transmissionMapUv: L && b(y.transmissionMap.channel),
      thicknessMapUv: se && b(y.thicknessMap.channel),
      alphaMapUv: K && b(y.alphaMap.channel),
      //
      vertexTangents: !!j.attributes.tangent && (ze || x),
      vertexColors: y.vertexColors,
      vertexAlphas: y.vertexColors === !0 && !!j.attributes.color && j.attributes.color.itemSize === 4,
      pointsUvs: F.isPoints === !0 && !!j.attributes.uv && (nt || K),
      fog: !!k,
      useFog: y.fog === !0,
      fogExp2: !!k && k.isFogExp2,
      flatShading: y.flatShading === !0,
      sizeAttenuation: y.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reverseDepthBuffer: ve,
      skinning: F.isSkinnedMesh === !0,
      morphTargets: j.morphAttributes.position !== void 0,
      morphNormals: j.morphAttributes.normal !== void 0,
      morphColors: j.morphAttributes.color !== void 0,
      morphTargetsCount: fe,
      morphTextureStride: ye,
      numDirLights: _.directional.length,
      numPointLights: _.point.length,
      numSpotLights: _.spot.length,
      numSpotLightMaps: _.spotLightMap.length,
      numRectAreaLights: _.rectArea.length,
      numHemiLights: _.hemi.length,
      numDirLightShadows: _.directionalShadowMap.length,
      numPointLightShadows: _.pointShadowMap.length,
      numSpotLightShadows: _.spotShadowMap.length,
      numSpotLightShadowsWithMaps: _.numSpotLightShadowsWithMaps,
      numLightProbes: _.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: y.dithering,
      shadowMapEnabled: s.shadowMap.enabled && w.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: ct,
      decodeVideoTexture: nt && y.map.isVideoTexture === !0 && We.getTransfer(y.map.colorSpace) === Qe,
      decodeVideoTextureEmissive: $e && y.emissiveMap.isVideoTexture === !0 && We.getTransfer(y.emissiveMap.colorSpace) === Qe,
      premultipliedAlpha: y.premultipliedAlpha,
      doubleSided: y.side === Xt,
      flipSided: y.side === Lt,
      useDepthPacking: y.depthPacking >= 0,
      depthPacking: y.depthPacking || 0,
      index0AttributeName: y.index0AttributeName,
      extensionClipCullDistance: Ne && y.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (Ne && y.extensions.multiDraw === !0 || Pe) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: y.customProgramCacheKey()
    };
    return St.vertexUv1s = l.has(1), St.vertexUv2s = l.has(2), St.vertexUv3s = l.has(3), l.clear(), St;
  }
  function u(y) {
    const _ = [];
    if (y.shaderID ? _.push(y.shaderID) : (_.push(y.customVertexShaderID), _.push(y.customFragmentShaderID)), y.defines !== void 0)
      for (const w in y.defines)
        _.push(w), _.push(y.defines[w]);
    return y.isRawShaderMaterial === !1 && (M(_, y), S(_, y), _.push(s.outputColorSpace)), _.push(y.customProgramCacheKey), _.join();
  }
  function M(y, _) {
    y.push(_.precision), y.push(_.outputColorSpace), y.push(_.envMapMode), y.push(_.envMapCubeUVHeight), y.push(_.mapUv), y.push(_.alphaMapUv), y.push(_.lightMapUv), y.push(_.aoMapUv), y.push(_.bumpMapUv), y.push(_.normalMapUv), y.push(_.displacementMapUv), y.push(_.emissiveMapUv), y.push(_.metalnessMapUv), y.push(_.roughnessMapUv), y.push(_.anisotropyMapUv), y.push(_.clearcoatMapUv), y.push(_.clearcoatNormalMapUv), y.push(_.clearcoatRoughnessMapUv), y.push(_.iridescenceMapUv), y.push(_.iridescenceThicknessMapUv), y.push(_.sheenColorMapUv), y.push(_.sheenRoughnessMapUv), y.push(_.specularMapUv), y.push(_.specularColorMapUv), y.push(_.specularIntensityMapUv), y.push(_.transmissionMapUv), y.push(_.thicknessMapUv), y.push(_.combine), y.push(_.fogExp2), y.push(_.sizeAttenuation), y.push(_.morphTargetsCount), y.push(_.morphAttributeCount), y.push(_.numDirLights), y.push(_.numPointLights), y.push(_.numSpotLights), y.push(_.numSpotLightMaps), y.push(_.numHemiLights), y.push(_.numRectAreaLights), y.push(_.numDirLightShadows), y.push(_.numPointLightShadows), y.push(_.numSpotLightShadows), y.push(_.numSpotLightShadowsWithMaps), y.push(_.numLightProbes), y.push(_.shadowMapType), y.push(_.toneMapping), y.push(_.numClippingPlanes), y.push(_.numClipIntersection), y.push(_.depthPacking);
  }
  function S(y, _) {
    o.disableAll(), _.supportsVertexTextures && o.enable(0), _.instancing && o.enable(1), _.instancingColor && o.enable(2), _.instancingMorph && o.enable(3), _.matcap && o.enable(4), _.envMap && o.enable(5), _.normalMapObjectSpace && o.enable(6), _.normalMapTangentSpace && o.enable(7), _.clearcoat && o.enable(8), _.iridescence && o.enable(9), _.alphaTest && o.enable(10), _.vertexColors && o.enable(11), _.vertexAlphas && o.enable(12), _.vertexUv1s && o.enable(13), _.vertexUv2s && o.enable(14), _.vertexUv3s && o.enable(15), _.vertexTangents && o.enable(16), _.anisotropy && o.enable(17), _.alphaHash && o.enable(18), _.batching && o.enable(19), _.dispersion && o.enable(20), _.batchingColor && o.enable(21), y.push(o.mask), o.disableAll(), _.fog && o.enable(0), _.useFog && o.enable(1), _.flatShading && o.enable(2), _.logarithmicDepthBuffer && o.enable(3), _.reverseDepthBuffer && o.enable(4), _.skinning && o.enable(5), _.morphTargets && o.enable(6), _.morphNormals && o.enable(7), _.morphColors && o.enable(8), _.premultipliedAlpha && o.enable(9), _.shadowMapEnabled && o.enable(10), _.doubleSided && o.enable(11), _.flipSided && o.enable(12), _.useDepthPacking && o.enable(13), _.dithering && o.enable(14), _.transmission && o.enable(15), _.sheen && o.enable(16), _.opaque && o.enable(17), _.pointsUvs && o.enable(18), _.decodeVideoTexture && o.enable(19), _.decodeVideoTextureEmissive && o.enable(20), _.alphaToCoverage && o.enable(21), y.push(o.mask);
  }
  function v(y) {
    const _ = g[y.type];
    let w;
    if (_) {
      const O = fn[_];
      w = Kn.clone(O.uniforms);
    } else
      w = y.uniforms;
    return w;
  }
  function P(y, _) {
    let w;
    for (let O = 0, F = h.length; O < F; O++) {
      const k = h[O];
      if (k.cacheKey === _) {
        w = k, ++w.usedTimes;
        break;
      }
    }
    return w === void 0 && (w = new rg(s, _, y, r), h.push(w)), w;
  }
  function R(y) {
    if (--y.usedTimes === 0) {
      const _ = h.indexOf(y);
      h[_] = h[h.length - 1], h.pop(), y.destroy();
    }
  }
  function A(y) {
    c.remove(y);
  }
  function C() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: u,
    getUniforms: v,
    acquireProgram: P,
    releaseProgram: R,
    releaseShaderCache: A,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: C
  };
}
function hg() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return s.has(a);
  }
  function t(a) {
    let o = s.get(a);
    return o === void 0 && (o = {}, s.set(a, o)), o;
  }
  function n(a) {
    s.delete(a);
  }
  function i(a, o, c) {
    s.get(a)[o] = c;
  }
  function r() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: e,
    get: t,
    remove: n,
    update: i,
    dispose: r
  };
}
function dg(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function kc(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function Bc() {
  const s = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(d, f, p, g, b, m) {
    let u = s[e];
    return u === void 0 ? (u = {
      id: d.id,
      object: d,
      geometry: f,
      material: p,
      groupOrder: g,
      renderOrder: d.renderOrder,
      z: b,
      group: m
    }, s[e] = u) : (u.id = d.id, u.object = d, u.geometry = f, u.material = p, u.groupOrder = g, u.renderOrder = d.renderOrder, u.z = b, u.group = m), e++, u;
  }
  function o(d, f, p, g, b, m) {
    const u = a(d, f, p, g, b, m);
    p.transmission > 0 ? n.push(u) : p.transparent === !0 ? i.push(u) : t.push(u);
  }
  function c(d, f, p, g, b, m) {
    const u = a(d, f, p, g, b, m);
    p.transmission > 0 ? n.unshift(u) : p.transparent === !0 ? i.unshift(u) : t.unshift(u);
  }
  function l(d, f) {
    t.length > 1 && t.sort(d || dg), n.length > 1 && n.sort(f || kc), i.length > 1 && i.sort(f || kc);
  }
  function h() {
    for (let d = e, f = s.length; d < f; d++) {
      const p = s[d];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: o,
    unshift: c,
    finish: h,
    sort: l
  };
}
function ug() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let a;
    return r === void 0 ? (a = new Bc(), s.set(n, [a])) : i >= r.length ? (a = new Bc(), r.push(a)) : a = r[i], a;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function fg() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new D(),
            color: new Te()
          };
          break;
        case "SpotLight":
          t = {
            position: new D(),
            direction: new D(),
            color: new Te(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new D(),
            color: new Te(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new D(),
            skyColor: new Te(),
            groundColor: new Te()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Te(),
            position: new D(),
            halfWidth: new D(),
            halfHeight: new D()
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
function pg() {
  const s = {};
  return {
    get: function(e) {
      if (s[e.id] !== void 0)
        return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ee()
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ee()
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ee(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return s[e.id] = t, t;
    }
  };
}
let mg = 0;
function gg(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function bg(s) {
  const e = new fg(), t = pg(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let l = 0; l < 9; l++) n.probe.push(new D());
  const i = new D(), r = new Re(), a = new Re();
  function o(l) {
    let h = 0, d = 0, f = 0;
    for (let y = 0; y < 9; y++) n.probe[y].set(0, 0, 0);
    let p = 0, g = 0, b = 0, m = 0, u = 0, M = 0, S = 0, v = 0, P = 0, R = 0, A = 0;
    l.sort(gg);
    for (let y = 0, _ = l.length; y < _; y++) {
      const w = l[y], O = w.color, F = w.intensity, k = w.distance, j = w.shadow && w.shadow.map ? w.shadow.map.texture : null;
      if (w.isAmbientLight)
        h += O.r * F, d += O.g * F, f += O.b * F;
      else if (w.isLightProbe) {
        for (let z = 0; z < 9; z++)
          n.probe[z].addScaledVector(w.sh.coefficients[z], F);
        A++;
      } else if (w.isDirectionalLight) {
        const z = e.get(w);
        if (z.color.copy(w.color).multiplyScalar(w.intensity), w.castShadow) {
          const Z = w.shadow, V = t.get(w);
          V.shadowIntensity = Z.intensity, V.shadowBias = Z.bias, V.shadowNormalBias = Z.normalBias, V.shadowRadius = Z.radius, V.shadowMapSize = Z.mapSize, n.directionalShadow[p] = V, n.directionalShadowMap[p] = j, n.directionalShadowMatrix[p] = w.shadow.matrix, M++;
        }
        n.directional[p] = z, p++;
      } else if (w.isSpotLight) {
        const z = e.get(w);
        z.position.setFromMatrixPosition(w.matrixWorld), z.color.copy(O).multiplyScalar(F), z.distance = k, z.coneCos = Math.cos(w.angle), z.penumbraCos = Math.cos(w.angle * (1 - w.penumbra)), z.decay = w.decay, n.spot[b] = z;
        const Z = w.shadow;
        if (w.map && (n.spotLightMap[P] = w.map, P++, Z.updateMatrices(w), w.castShadow && R++), n.spotLightMatrix[b] = Z.matrix, w.castShadow) {
          const V = t.get(w);
          V.shadowIntensity = Z.intensity, V.shadowBias = Z.bias, V.shadowNormalBias = Z.normalBias, V.shadowRadius = Z.radius, V.shadowMapSize = Z.mapSize, n.spotShadow[b] = V, n.spotShadowMap[b] = j, v++;
        }
        b++;
      } else if (w.isRectAreaLight) {
        const z = e.get(w);
        z.color.copy(O).multiplyScalar(F), z.halfWidth.set(w.width * 0.5, 0, 0), z.halfHeight.set(0, w.height * 0.5, 0), n.rectArea[m] = z, m++;
      } else if (w.isPointLight) {
        const z = e.get(w);
        if (z.color.copy(w.color).multiplyScalar(w.intensity), z.distance = w.distance, z.decay = w.decay, w.castShadow) {
          const Z = w.shadow, V = t.get(w);
          V.shadowIntensity = Z.intensity, V.shadowBias = Z.bias, V.shadowNormalBias = Z.normalBias, V.shadowRadius = Z.radius, V.shadowMapSize = Z.mapSize, V.shadowCameraNear = Z.camera.near, V.shadowCameraFar = Z.camera.far, n.pointShadow[g] = V, n.pointShadowMap[g] = j, n.pointShadowMatrix[g] = w.shadow.matrix, S++;
        }
        n.point[g] = z, g++;
      } else if (w.isHemisphereLight) {
        const z = e.get(w);
        z.skyColor.copy(w.color).multiplyScalar(F), z.groundColor.copy(w.groundColor).multiplyScalar(F), n.hemi[u] = z, u++;
      }
    }
    m > 0 && (s.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ae.LTC_FLOAT_1, n.rectAreaLTC2 = ae.LTC_FLOAT_2) : (n.rectAreaLTC1 = ae.LTC_HALF_1, n.rectAreaLTC2 = ae.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = d, n.ambient[2] = f;
    const C = n.hash;
    (C.directionalLength !== p || C.pointLength !== g || C.spotLength !== b || C.rectAreaLength !== m || C.hemiLength !== u || C.numDirectionalShadows !== M || C.numPointShadows !== S || C.numSpotShadows !== v || C.numSpotMaps !== P || C.numLightProbes !== A) && (n.directional.length = p, n.spot.length = b, n.rectArea.length = m, n.point.length = g, n.hemi.length = u, n.directionalShadow.length = M, n.directionalShadowMap.length = M, n.pointShadow.length = S, n.pointShadowMap.length = S, n.spotShadow.length = v, n.spotShadowMap.length = v, n.directionalShadowMatrix.length = M, n.pointShadowMatrix.length = S, n.spotLightMatrix.length = v + P - R, n.spotLightMap.length = P, n.numSpotLightShadowsWithMaps = R, n.numLightProbes = A, C.directionalLength = p, C.pointLength = g, C.spotLength = b, C.rectAreaLength = m, C.hemiLength = u, C.numDirectionalShadows = M, C.numPointShadows = S, C.numSpotShadows = v, C.numSpotMaps = P, C.numLightProbes = A, n.version = mg++);
  }
  function c(l, h) {
    let d = 0, f = 0, p = 0, g = 0, b = 0;
    const m = h.matrixWorldInverse;
    for (let u = 0, M = l.length; u < M; u++) {
      const S = l[u];
      if (S.isDirectionalLight) {
        const v = n.directional[d];
        v.direction.setFromMatrixPosition(S.matrixWorld), i.setFromMatrixPosition(S.target.matrixWorld), v.direction.sub(i), v.direction.transformDirection(m), d++;
      } else if (S.isSpotLight) {
        const v = n.spot[p];
        v.position.setFromMatrixPosition(S.matrixWorld), v.position.applyMatrix4(m), v.direction.setFromMatrixPosition(S.matrixWorld), i.setFromMatrixPosition(S.target.matrixWorld), v.direction.sub(i), v.direction.transformDirection(m), p++;
      } else if (S.isRectAreaLight) {
        const v = n.rectArea[g];
        v.position.setFromMatrixPosition(S.matrixWorld), v.position.applyMatrix4(m), a.identity(), r.copy(S.matrixWorld), r.premultiply(m), a.extractRotation(r), v.halfWidth.set(S.width * 0.5, 0, 0), v.halfHeight.set(0, S.height * 0.5, 0), v.halfWidth.applyMatrix4(a), v.halfHeight.applyMatrix4(a), g++;
      } else if (S.isPointLight) {
        const v = n.point[f];
        v.position.setFromMatrixPosition(S.matrixWorld), v.position.applyMatrix4(m), f++;
      } else if (S.isHemisphereLight) {
        const v = n.hemi[b];
        v.direction.setFromMatrixPosition(S.matrixWorld), v.direction.transformDirection(m), b++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: n
  };
}
function zc(s) {
  const e = new bg(s), t = [], n = [];
  function i(h) {
    l.camera = h, t.length = 0, n.length = 0;
  }
  function r(h) {
    t.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    e.setup(t);
  }
  function c(h) {
    e.setupView(t, h);
  }
  const l = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {}
  };
  return {
    init: i,
    state: l,
    setupLights: o,
    setupLightsView: c,
    pushLight: r,
    pushShadow: a
  };
}
function _g(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, r = 0) {
    const a = e.get(i);
    let o;
    return a === void 0 ? (o = new zc(s), e.set(i, [o])) : r >= a.length ? (o = new zc(s), a.push(o)) : o = a[r], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
class vg extends an {
  static get type() {
    return "MeshDepthMaterial";
  }
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.depthPacking = Zh, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class xg extends an {
  static get type() {
    return "MeshDistanceMaterial";
  }
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const yg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Mg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Sg(s, e, t) {
  let n = new Mr();
  const i = new Ee(), r = new Ee(), a = new qe(), o = new vg({ depthPacking: Qh }), c = new xg(), l = {}, h = t.maxTextureSize, d = { [bn]: Lt, [Lt]: bn, [Xt]: Xt }, f = new wt({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Ee() },
      radius: { value: 4 }
    },
    vertexShader: yg,
    fragmentShader: Mg
  }), p = f.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new Ft();
  g.setAttribute(
    "position",
    new At(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const b = new vt(g, f), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Rl;
  let u = this.type;
  this.render = function(R, A, C) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || R.length === 0) return;
    const y = s.getRenderTarget(), _ = s.getActiveCubeFace(), w = s.getActiveMipmapLevel(), O = s.state;
    O.setBlending(xt), O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(!0), O.setScissorTest(!1);
    const F = u !== Dn && this.type === Dn, k = u === Dn && this.type !== Dn;
    for (let j = 0, z = R.length; j < z; j++) {
      const Z = R[j], V = Z.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", Z, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      i.copy(V.mapSize);
      const Q = V.getFrameExtents();
      if (i.multiply(Q), r.copy(V.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / Q.x), i.x = r.x * Q.x, V.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / Q.y), i.y = r.y * Q.y, V.mapSize.y = r.y)), V.map === null || F === !0 || k === !0) {
        const fe = this.type !== Dn ? { minFilter: yt, magFilter: yt } : {};
        V.map !== null && V.map.dispose(), V.map = new cn(i.x, i.y, fe), V.map.texture.name = Z.name + ".shadowMap", V.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(V.map), s.clear();
      const ne = V.getViewportCount();
      for (let fe = 0; fe < ne; fe++) {
        const ye = V.getViewport(fe);
        a.set(
          r.x * ye.x,
          r.y * ye.y,
          r.x * ye.z,
          r.y * ye.w
        ), O.viewport(a), V.updateMatrices(Z, fe), n = V.getFrustum(), v(A, C, V.camera, Z, this.type);
      }
      V.isPointLightShadow !== !0 && this.type === Dn && M(V, C), V.needsUpdate = !1;
    }
    u = this.type, m.needsUpdate = !1, s.setRenderTarget(y, _, w);
  };
  function M(R, A) {
    const C = e.update(b);
    f.defines.VSM_SAMPLES !== R.blurSamples && (f.defines.VSM_SAMPLES = R.blurSamples, p.defines.VSM_SAMPLES = R.blurSamples, f.needsUpdate = !0, p.needsUpdate = !0), R.mapPass === null && (R.mapPass = new cn(i.x, i.y)), f.uniforms.shadow_pass.value = R.map.texture, f.uniforms.resolution.value = R.mapSize, f.uniforms.radius.value = R.radius, s.setRenderTarget(R.mapPass), s.clear(), s.renderBufferDirect(A, null, C, f, b, null), p.uniforms.shadow_pass.value = R.mapPass.texture, p.uniforms.resolution.value = R.mapSize, p.uniforms.radius.value = R.radius, s.setRenderTarget(R.map), s.clear(), s.renderBufferDirect(A, null, C, p, b, null);
  }
  function S(R, A, C, y) {
    let _ = null;
    const w = C.isPointLight === !0 ? R.customDistanceMaterial : R.customDepthMaterial;
    if (w !== void 0)
      _ = w;
    else if (_ = C.isPointLight === !0 ? c : o, s.localClippingEnabled && A.clipShadows === !0 && Array.isArray(A.clippingPlanes) && A.clippingPlanes.length !== 0 || A.displacementMap && A.displacementScale !== 0 || A.alphaMap && A.alphaTest > 0 || A.map && A.alphaTest > 0) {
      const O = _.uuid, F = A.uuid;
      let k = l[O];
      k === void 0 && (k = {}, l[O] = k);
      let j = k[F];
      j === void 0 && (j = _.clone(), k[F] = j, A.addEventListener("dispose", P)), _ = j;
    }
    if (_.visible = A.visible, _.wireframe = A.wireframe, y === Dn ? _.side = A.shadowSide !== null ? A.shadowSide : A.side : _.side = A.shadowSide !== null ? A.shadowSide : d[A.side], _.alphaMap = A.alphaMap, _.alphaTest = A.alphaTest, _.map = A.map, _.clipShadows = A.clipShadows, _.clippingPlanes = A.clippingPlanes, _.clipIntersection = A.clipIntersection, _.displacementMap = A.displacementMap, _.displacementScale = A.displacementScale, _.displacementBias = A.displacementBias, _.wireframeLinewidth = A.wireframeLinewidth, _.linewidth = A.linewidth, C.isPointLight === !0 && _.isMeshDistanceMaterial === !0) {
      const O = s.properties.get(_);
      O.light = C;
    }
    return _;
  }
  function v(R, A, C, y, _) {
    if (R.visible === !1) return;
    if (R.layers.test(A.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && _ === Dn) && (!R.frustumCulled || n.intersectsObject(R))) {
      R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, R.matrixWorld);
      const F = e.update(R), k = R.material;
      if (Array.isArray(k)) {
        const j = F.groups;
        for (let z = 0, Z = j.length; z < Z; z++) {
          const V = j[z], Q = k[V.materialIndex];
          if (Q && Q.visible) {
            const ne = S(R, Q, y, _);
            R.onBeforeShadow(s, R, A, C, F, ne, V), s.renderBufferDirect(C, null, F, ne, R, V), R.onAfterShadow(s, R, A, C, F, ne, V);
          }
        }
      } else if (k.visible) {
        const j = S(R, k, y, _);
        R.onBeforeShadow(s, R, A, C, F, j, null), s.renderBufferDirect(C, null, F, j, R, null), R.onAfterShadow(s, R, A, C, F, j, null);
      }
    }
    const O = R.children;
    for (let F = 0, k = O.length; F < k; F++)
      v(O[F], A, C, y, _);
  }
  function P(R) {
    R.target.removeEventListener("dispose", P);
    for (const C in l) {
      const y = l[C], _ = R.target.uuid;
      _ in y && (y[_].dispose(), delete y[_]);
    }
  }
}
const Eg = {
  [_a]: va,
  [xa]: Sa,
  [ya]: Ea,
  [Oi]: Ma,
  [va]: _a,
  [Sa]: xa,
  [Ea]: ya,
  [Ma]: Oi
};
function Tg(s, e) {
  function t() {
    let L = !1;
    const se = new qe();
    let W = null;
    const K = new qe(0, 0, 0, 0);
    return {
      setMask: function(he) {
        W !== he && !L && (s.colorMask(he, he, he, he), W = he);
      },
      setLocked: function(he) {
        L = he;
      },
      setClear: function(he, ce, Ne, ct, St) {
        St === !0 && (he *= ct, ce *= ct, Ne *= ct), se.set(he, ce, Ne, ct), K.equals(se) === !1 && (s.clearColor(he, ce, Ne, ct), K.copy(se));
      },
      reset: function() {
        L = !1, W = null, K.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let L = !1, se = !1, W = null, K = null, he = null;
    return {
      setReversed: function(ce) {
        if (se !== ce) {
          const Ne = e.get("EXT_clip_control");
          se ? Ne.clipControlEXT(Ne.LOWER_LEFT_EXT, Ne.ZERO_TO_ONE_EXT) : Ne.clipControlEXT(Ne.LOWER_LEFT_EXT, Ne.NEGATIVE_ONE_TO_ONE_EXT);
          const ct = he;
          he = null, this.setClear(ct);
        }
        se = ce;
      },
      getReversed: function() {
        return se;
      },
      setTest: function(ce) {
        ce ? ie(s.DEPTH_TEST) : ve(s.DEPTH_TEST);
      },
      setMask: function(ce) {
        W !== ce && !L && (s.depthMask(ce), W = ce);
      },
      setFunc: function(ce) {
        if (se && (ce = Eg[ce]), K !== ce) {
          switch (ce) {
            case _a:
              s.depthFunc(s.NEVER);
              break;
            case va:
              s.depthFunc(s.ALWAYS);
              break;
            case xa:
              s.depthFunc(s.LESS);
              break;
            case Oi:
              s.depthFunc(s.LEQUAL);
              break;
            case ya:
              s.depthFunc(s.EQUAL);
              break;
            case Ma:
              s.depthFunc(s.GEQUAL);
              break;
            case Sa:
              s.depthFunc(s.GREATER);
              break;
            case Ea:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          K = ce;
        }
      },
      setLocked: function(ce) {
        L = ce;
      },
      setClear: function(ce) {
        he !== ce && (se && (ce = 1 - ce), s.clearDepth(ce), he = ce);
      },
      reset: function() {
        L = !1, W = null, K = null, he = null, se = !1;
      }
    };
  }
  function i() {
    let L = !1, se = null, W = null, K = null, he = null, ce = null, Ne = null, ct = null, St = null;
    return {
      setTest: function(Ze) {
        L || (Ze ? ie(s.STENCIL_TEST) : ve(s.STENCIL_TEST));
      },
      setMask: function(Ze) {
        se !== Ze && !L && (s.stencilMask(Ze), se = Ze);
      },
      setFunc: function(Ze, $t, Sn) {
        (W !== Ze || K !== $t || he !== Sn) && (s.stencilFunc(Ze, $t, Sn), W = Ze, K = $t, he = Sn);
      },
      setOp: function(Ze, $t, Sn) {
        (ce !== Ze || Ne !== $t || ct !== Sn) && (s.stencilOp(Ze, $t, Sn), ce = Ze, Ne = $t, ct = Sn);
      },
      setLocked: function(Ze) {
        L = Ze;
      },
      setClear: function(Ze) {
        St !== Ze && (s.clearStencil(Ze), St = Ze);
      },
      reset: function() {
        L = !1, se = null, W = null, K = null, he = null, ce = null, Ne = null, ct = null, St = null;
      }
    };
  }
  const r = new t(), a = new n(), o = new i(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let h = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), p = [], g = null, b = !1, m = null, u = null, M = null, S = null, v = null, P = null, R = null, A = new Te(0, 0, 0), C = 0, y = !1, _ = null, w = null, O = null, F = null, k = null;
  const j = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let z = !1, Z = 0;
  const V = s.getParameter(s.VERSION);
  V.indexOf("WebGL") !== -1 ? (Z = parseFloat(/^WebGL (\d)/.exec(V)[1]), z = Z >= 1) : V.indexOf("OpenGL ES") !== -1 && (Z = parseFloat(/^OpenGL ES (\d)/.exec(V)[1]), z = Z >= 2);
  let Q = null, ne = {};
  const fe = s.getParameter(s.SCISSOR_BOX), ye = s.getParameter(s.VIEWPORT), Ie = new qe().fromArray(fe), X = new qe().fromArray(ye);
  function ee(L, se, W, K) {
    const he = new Uint8Array(4), ce = s.createTexture();
    s.bindTexture(L, ce), s.texParameteri(L, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(L, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let Ne = 0; Ne < W; Ne++)
      L === s.TEXTURE_3D || L === s.TEXTURE_2D_ARRAY ? s.texImage3D(se, 0, s.RGBA, 1, 1, K, 0, s.RGBA, s.UNSIGNED_BYTE, he) : s.texImage2D(se + Ne, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, he);
    return ce;
  }
  const pe = {};
  pe[s.TEXTURE_2D] = ee(s.TEXTURE_2D, s.TEXTURE_2D, 1), pe[s.TEXTURE_CUBE_MAP] = ee(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), pe[s.TEXTURE_2D_ARRAY] = ee(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), pe[s.TEXTURE_3D] = ee(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), ie(s.DEPTH_TEST), a.setFunc(Oi), Be(!1), ze(Go), ie(s.CULL_FACE), I(xt);
  function ie(L) {
    h[L] !== !0 && (s.enable(L), h[L] = !0);
  }
  function ve(L) {
    h[L] !== !1 && (s.disable(L), h[L] = !1);
  }
  function we(L, se) {
    return d[L] !== se ? (s.bindFramebuffer(L, se), d[L] = se, L === s.DRAW_FRAMEBUFFER && (d[s.FRAMEBUFFER] = se), L === s.FRAMEBUFFER && (d[s.DRAW_FRAMEBUFFER] = se), !0) : !1;
  }
  function Pe(L, se) {
    let W = p, K = !1;
    if (L) {
      W = f.get(se), W === void 0 && (W = [], f.set(se, W));
      const he = L.textures;
      if (W.length !== he.length || W[0] !== s.COLOR_ATTACHMENT0) {
        for (let ce = 0, Ne = he.length; ce < Ne; ce++)
          W[ce] = s.COLOR_ATTACHMENT0 + ce;
        W.length = he.length, K = !0;
      }
    } else
      W[0] !== s.BACK && (W[0] = s.BACK, K = !0);
    K && s.drawBuffers(W);
  }
  function nt(L) {
    return g !== L ? (s.useProgram(L), g = L, !0) : !1;
  }
  const He = {
    [tn]: s.FUNC_ADD,
    [Dh]: s.FUNC_SUBTRACT,
    [Lh]: s.FUNC_REVERSE_SUBTRACT
  };
  He[Ih] = s.MIN, He[Nh] = s.MAX;
  const st = {
    [ls]: s.ZERO,
    [Uh]: s.ONE,
    [Fh]: s.SRC_COLOR,
    [pa]: s.SRC_ALPHA,
    [zh]: s.SRC_ALPHA_SATURATE,
    [ba]: s.DST_COLOR,
    [ga]: s.DST_ALPHA,
    [Oh]: s.ONE_MINUS_SRC_COLOR,
    [ma]: s.ONE_MINUS_SRC_ALPHA,
    [Bh]: s.ONE_MINUS_DST_COLOR,
    [kh]: s.ONE_MINUS_DST_ALPHA,
    [Hh]: s.CONSTANT_COLOR,
    [Gh]: s.ONE_MINUS_CONSTANT_COLOR,
    [Vh]: s.CONSTANT_ALPHA,
    [Wh]: s.ONE_MINUS_CONSTANT_ALPHA
  };
  function I(L, se, W, K, he, ce, Ne, ct, St, Ze) {
    if (L === xt) {
      b === !0 && (ve(s.BLEND), b = !1);
      return;
    }
    if (b === !1 && (ie(s.BLEND), b = !0), L !== Cl) {
      if (L !== m || Ze !== y) {
        if ((u !== tn || v !== tn) && (s.blendEquation(s.FUNC_ADD), u = tn, v = tn), Ze)
          switch (L) {
            case Ii:
              s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case fa:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case Vo:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case Wo:
              s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case Ii:
              s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case fa:
              s.blendFunc(s.SRC_ALPHA, s.ONE);
              break;
            case Vo:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case Wo:
              s.blendFunc(s.ZERO, s.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        M = null, S = null, P = null, R = null, A.set(0, 0, 0), C = 0, m = L, y = Ze;
      }
      return;
    }
    he = he || se, ce = ce || W, Ne = Ne || K, (se !== u || he !== v) && (s.blendEquationSeparate(He[se], He[he]), u = se, v = he), (W !== M || K !== S || ce !== P || Ne !== R) && (s.blendFuncSeparate(st[W], st[K], st[ce], st[Ne]), M = W, S = K, P = ce, R = Ne), (ct.equals(A) === !1 || St !== C) && (s.blendColor(ct.r, ct.g, ct.b, St), A.copy(ct), C = St), m = L, y = !1;
  }
  function Mt(L, se) {
    L.side === Xt ? ve(s.CULL_FACE) : ie(s.CULL_FACE);
    let W = L.side === Lt;
    se && (W = !W), Be(W), L.blending === Ii && L.transparent === !1 ? I(xt) : I(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), a.setFunc(L.depthFunc), a.setTest(L.depthTest), a.setMask(L.depthWrite), r.setMask(L.colorWrite);
    const K = L.stencilWrite;
    o.setTest(K), K && (o.setMask(L.stencilWriteMask), o.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), o.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), $e(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? ie(s.SAMPLE_ALPHA_TO_COVERAGE) : ve(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Be(L) {
    _ !== L && (L ? s.frontFace(s.CW) : s.frontFace(s.CCW), _ = L);
  }
  function ze(L) {
    L !== Rh ? (ie(s.CULL_FACE), L !== w && (L === Go ? s.cullFace(s.BACK) : L === Ch ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : ve(s.CULL_FACE), w = L;
  }
  function Se(L) {
    L !== O && (z && s.lineWidth(L), O = L);
  }
  function $e(L, se, W) {
    L ? (ie(s.POLYGON_OFFSET_FILL), (F !== se || k !== W) && (s.polygonOffset(se, W), F = se, k = W)) : ve(s.POLYGON_OFFSET_FILL);
  }
  function Me(L) {
    L ? ie(s.SCISSOR_TEST) : ve(s.SCISSOR_TEST);
  }
  function T(L) {
    L === void 0 && (L = s.TEXTURE0 + j - 1), Q !== L && (s.activeTexture(L), Q = L);
  }
  function x(L, se, W) {
    W === void 0 && (Q === null ? W = s.TEXTURE0 + j - 1 : W = Q);
    let K = ne[W];
    K === void 0 && (K = { type: void 0, texture: void 0 }, ne[W] = K), (K.type !== L || K.texture !== se) && (Q !== W && (s.activeTexture(W), Q = W), s.bindTexture(L, se || pe[L]), K.type = L, K.texture = se);
  }
  function B() {
    const L = ne[Q];
    L !== void 0 && L.type !== void 0 && (s.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function Y() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function $() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function q() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function me() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function re() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function oe() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ke() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function J() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function de() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ae() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ce(L) {
    Ie.equals(L) === !1 && (s.scissor(L.x, L.y, L.z, L.w), Ie.copy(L));
  }
  function ue(L) {
    X.equals(L) === !1 && (s.viewport(L.x, L.y, L.z, L.w), X.copy(L));
  }
  function Ve(L, se) {
    let W = l.get(se);
    W === void 0 && (W = /* @__PURE__ */ new WeakMap(), l.set(se, W));
    let K = W.get(L);
    K === void 0 && (K = s.getUniformBlockIndex(se, L.name), W.set(L, K));
  }
  function De(L, se) {
    const K = l.get(se).get(L);
    c.get(se) !== K && (s.uniformBlockBinding(se, K, L.__bindingPointIndex), c.set(se, K));
  }
  function je() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), a.setReversed(!1), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), h = {}, Q = null, ne = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), p = [], g = null, b = !1, m = null, u = null, M = null, S = null, v = null, P = null, R = null, A = new Te(0, 0, 0), C = 0, y = !1, _ = null, w = null, O = null, F = null, k = null, Ie.set(0, 0, s.canvas.width, s.canvas.height), X.set(0, 0, s.canvas.width, s.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: r,
      depth: a,
      stencil: o
    },
    enable: ie,
    disable: ve,
    bindFramebuffer: we,
    drawBuffers: Pe,
    useProgram: nt,
    setBlending: I,
    setMaterial: Mt,
    setFlipSided: Be,
    setCullFace: ze,
    setLineWidth: Se,
    setPolygonOffset: $e,
    setScissorTest: Me,
    activeTexture: T,
    bindTexture: x,
    unbindTexture: B,
    compressedTexImage2D: Y,
    compressedTexImage3D: $,
    texImage2D: de,
    texImage3D: Ae,
    updateUBOMapping: Ve,
    uniformBlockBinding: De,
    texStorage2D: ke,
    texStorage3D: J,
    texSubImage2D: q,
    texSubImage3D: me,
    compressedTexSubImage2D: re,
    compressedTexSubImage3D: oe,
    scissor: Ce,
    viewport: ue,
    reset: je
  };
}
function Hc(s, e, t, n) {
  const i = wg(n);
  switch (t) {
    case Hl:
      return s * e;
    case Vl:
      return s * e;
    case Wl:
      return s * e * 2;
    case po:
      return s * e / i.components * i.byteLength;
    case mo:
      return s * e / i.components * i.byteLength;
    case jl:
      return s * e * 2 / i.components * i.byteLength;
    case go:
      return s * e * 2 / i.components * i.byteLength;
    case Gl:
      return s * e * 3 / i.components * i.byteLength;
    case Gt:
      return s * e * 4 / i.components * i.byteLength;
    case bo:
      return s * e * 4 / i.components * i.byteLength;
    case rr:
    case ar:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case or:
    case cr:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ra:
    case Pa:
      return Math.max(s, 16) * Math.max(e, 8) / 4;
    case Aa:
    case Ca:
      return Math.max(s, 8) * Math.max(e, 8) / 2;
    case Da:
    case La:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Ia:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Na:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ua:
      return Math.floor((s + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Fa:
      return Math.floor((s + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Oa:
      return Math.floor((s + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case ka:
      return Math.floor((s + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Ba:
      return Math.floor((s + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case za:
      return Math.floor((s + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Ha:
      return Math.floor((s + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Ga:
      return Math.floor((s + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Va:
      return Math.floor((s + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Wa:
      return Math.floor((s + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case ja:
      return Math.floor((s + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Xa:
      return Math.floor((s + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case qa:
      return Math.floor((s + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case lr:
    case Ya:
    case Ka:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
    case Xl:
    case $a:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 8;
    case Za:
    case Qa:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${t} format.`
  );
}
function wg(s) {
  switch (s) {
    case vn:
    case kl:
      return { byteLength: 1, components: 1 };
    case bs:
    case Bl:
    case Ht:
      return { byteLength: 2, components: 1 };
    case uo:
    case fo:
      return { byteLength: 2, components: 4 };
    case ci:
    case ho:
    case Ut:
      return { byteLength: 4, components: 1 };
    case zl:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s}.`);
}
function Ag(s, e, t, n, i, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new Ee(), h = /* @__PURE__ */ new WeakMap();
  let d;
  const f = /* @__PURE__ */ new WeakMap();
  let p = !1;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(T, x) {
    return p ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(T, x)
    ) : xs("canvas");
  }
  function b(T, x, B) {
    let Y = 1;
    const $ = Me(T);
    if (($.width > B || $.height > B) && (Y = B / Math.max($.width, $.height)), Y < 1)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
        const q = Math.floor(Y * $.width), me = Math.floor(Y * $.height);
        d === void 0 && (d = g(q, me));
        const re = x ? g(q, me) : d;
        return re.width = q, re.height = me, re.getContext("2d").drawImage(T, 0, 0, q, me), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + $.width + "x" + $.height + ") to (" + q + "x" + me + ")."), re;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + $.width + "x" + $.height + ")."), T;
    return T;
  }
  function m(T) {
    return T.generateMipmaps;
  }
  function u(T) {
    s.generateMipmap(T);
  }
  function M(T) {
    return T.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? s.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? s.TEXTURE_2D_ARRAY : s.TEXTURE_2D;
  }
  function S(T, x, B, Y, $ = !1) {
    if (T !== null) {
      if (s[T] !== void 0) return s[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let q = x;
    if (x === s.RED && (B === s.FLOAT && (q = s.R32F), B === s.HALF_FLOAT && (q = s.R16F), B === s.UNSIGNED_BYTE && (q = s.R8)), x === s.RED_INTEGER && (B === s.UNSIGNED_BYTE && (q = s.R8UI), B === s.UNSIGNED_SHORT && (q = s.R16UI), B === s.UNSIGNED_INT && (q = s.R32UI), B === s.BYTE && (q = s.R8I), B === s.SHORT && (q = s.R16I), B === s.INT && (q = s.R32I)), x === s.RG && (B === s.FLOAT && (q = s.RG32F), B === s.HALF_FLOAT && (q = s.RG16F), B === s.UNSIGNED_BYTE && (q = s.RG8)), x === s.RG_INTEGER && (B === s.UNSIGNED_BYTE && (q = s.RG8UI), B === s.UNSIGNED_SHORT && (q = s.RG16UI), B === s.UNSIGNED_INT && (q = s.RG32UI), B === s.BYTE && (q = s.RG8I), B === s.SHORT && (q = s.RG16I), B === s.INT && (q = s.RG32I)), x === s.RGB_INTEGER && (B === s.UNSIGNED_BYTE && (q = s.RGB8UI), B === s.UNSIGNED_SHORT && (q = s.RGB16UI), B === s.UNSIGNED_INT && (q = s.RGB32UI), B === s.BYTE && (q = s.RGB8I), B === s.SHORT && (q = s.RGB16I), B === s.INT && (q = s.RGB32I)), x === s.RGBA_INTEGER && (B === s.UNSIGNED_BYTE && (q = s.RGBA8UI), B === s.UNSIGNED_SHORT && (q = s.RGBA16UI), B === s.UNSIGNED_INT && (q = s.RGBA32UI), B === s.BYTE && (q = s.RGBA8I), B === s.SHORT && (q = s.RGBA16I), B === s.INT && (q = s.RGBA32I)), x === s.RGB && B === s.UNSIGNED_INT_5_9_9_9_REV && (q = s.RGB9_E5), x === s.RGBA) {
      const me = $ ? yr : We.getTransfer(Y);
      B === s.FLOAT && (q = s.RGBA32F), B === s.HALF_FLOAT && (q = s.RGBA16F), B === s.UNSIGNED_BYTE && (q = me === Qe ? s.SRGB8_ALPHA8 : s.RGBA8), B === s.UNSIGNED_SHORT_4_4_4_4 && (q = s.RGBA4), B === s.UNSIGNED_SHORT_5_5_5_1 && (q = s.RGB5_A1);
    }
    return (q === s.R16F || q === s.R32F || q === s.RG16F || q === s.RG32F || q === s.RGBA16F || q === s.RGBA32F) && e.get("EXT_color_buffer_float"), q;
  }
  function v(T, x) {
    let B;
    return T ? x === null || x === ci || x === li ? B = s.DEPTH24_STENCIL8 : x === Ut ? B = s.DEPTH32F_STENCIL8 : x === bs && (B = s.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === ci || x === li ? B = s.DEPTH_COMPONENT24 : x === Ut ? B = s.DEPTH_COMPONENT32F : x === bs && (B = s.DEPTH_COMPONENT16), B;
  }
  function P(T, x) {
    return m(T) === !0 || T.isFramebufferTexture && T.minFilter !== yt && T.minFilter !== _t ? Math.log2(Math.max(x.width, x.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? x.mipmaps.length : 1;
  }
  function R(T) {
    const x = T.target;
    x.removeEventListener("dispose", R), C(x), x.isVideoTexture && h.delete(x);
  }
  function A(T) {
    const x = T.target;
    x.removeEventListener("dispose", A), _(x);
  }
  function C(T) {
    const x = n.get(T);
    if (x.__webglInit === void 0) return;
    const B = T.source, Y = f.get(B);
    if (Y) {
      const $ = Y[x.__cacheKey];
      $.usedTimes--, $.usedTimes === 0 && y(T), Object.keys(Y).length === 0 && f.delete(B);
    }
    n.remove(T);
  }
  function y(T) {
    const x = n.get(T);
    s.deleteTexture(x.__webglTexture);
    const B = T.source, Y = f.get(B);
    delete Y[x.__cacheKey], a.memory.textures--;
  }
  function _(T) {
    const x = n.get(T);
    if (T.depthTexture && (T.depthTexture.dispose(), n.remove(T.depthTexture)), T.isWebGLCubeRenderTarget)
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(x.__webglFramebuffer[Y]))
          for (let $ = 0; $ < x.__webglFramebuffer[Y].length; $++) s.deleteFramebuffer(x.__webglFramebuffer[Y][$]);
        else
          s.deleteFramebuffer(x.__webglFramebuffer[Y]);
        x.__webglDepthbuffer && s.deleteRenderbuffer(x.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(x.__webglFramebuffer))
        for (let Y = 0; Y < x.__webglFramebuffer.length; Y++) s.deleteFramebuffer(x.__webglFramebuffer[Y]);
      else
        s.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && s.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && s.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer)
        for (let Y = 0; Y < x.__webglColorRenderbuffer.length; Y++)
          x.__webglColorRenderbuffer[Y] && s.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);
      x.__webglDepthRenderbuffer && s.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const B = T.textures;
    for (let Y = 0, $ = B.length; Y < $; Y++) {
      const q = n.get(B[Y]);
      q.__webglTexture && (s.deleteTexture(q.__webglTexture), a.memory.textures--), n.remove(B[Y]);
    }
    n.remove(T);
  }
  let w = 0;
  function O() {
    w = 0;
  }
  function F() {
    const T = w;
    return T >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + i.maxTextures), w += 1, T;
  }
  function k(T) {
    const x = [];
    return x.push(T.wrapS), x.push(T.wrapT), x.push(T.wrapR || 0), x.push(T.magFilter), x.push(T.minFilter), x.push(T.anisotropy), x.push(T.internalFormat), x.push(T.format), x.push(T.type), x.push(T.generateMipmaps), x.push(T.premultiplyAlpha), x.push(T.flipY), x.push(T.unpackAlignment), x.push(T.colorSpace), x.join();
  }
  function j(T, x) {
    const B = n.get(T);
    if (T.isVideoTexture && Se(T), T.isRenderTargetTexture === !1 && T.version > 0 && B.__version !== T.version) {
      const Y = T.image;
      if (Y === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        X(B, T, x);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, B.__webglTexture, s.TEXTURE0 + x);
  }
  function z(T, x) {
    const B = n.get(T);
    if (T.version > 0 && B.__version !== T.version) {
      X(B, T, x);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, B.__webglTexture, s.TEXTURE0 + x);
  }
  function Z(T, x) {
    const B = n.get(T);
    if (T.version > 0 && B.__version !== T.version) {
      X(B, T, x);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, B.__webglTexture, s.TEXTURE0 + x);
  }
  function V(T, x) {
    const B = n.get(T);
    if (T.version > 0 && B.__version !== T.version) {
      ee(B, T, x);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, B.__webglTexture, s.TEXTURE0 + x);
  }
  const Q = {
    [_n]: s.REPEAT,
    [pn]: s.CLAMP_TO_EDGE,
    [ur]: s.MIRRORED_REPEAT
  }, ne = {
    [yt]: s.NEAREST,
    [Ol]: s.NEAREST_MIPMAP_NEAREST,
    [hs]: s.NEAREST_MIPMAP_LINEAR,
    [_t]: s.LINEAR,
    [sr]: s.LINEAR_MIPMAP_NEAREST,
    [mn]: s.LINEAR_MIPMAP_LINEAR
  }, fe = {
    [ed]: s.NEVER,
    [ad]: s.ALWAYS,
    [td]: s.LESS,
    [Yl]: s.LEQUAL,
    [nd]: s.EQUAL,
    [rd]: s.GEQUAL,
    [id]: s.GREATER,
    [sd]: s.NOTEQUAL
  };
  function ye(T, x) {
    if (x.type === Ut && e.has("OES_texture_float_linear") === !1 && (x.magFilter === _t || x.magFilter === sr || x.magFilter === hs || x.magFilter === mn || x.minFilter === _t || x.minFilter === sr || x.minFilter === hs || x.minFilter === mn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s.texParameteri(T, s.TEXTURE_WRAP_S, Q[x.wrapS]), s.texParameteri(T, s.TEXTURE_WRAP_T, Q[x.wrapT]), (T === s.TEXTURE_3D || T === s.TEXTURE_2D_ARRAY) && s.texParameteri(T, s.TEXTURE_WRAP_R, Q[x.wrapR]), s.texParameteri(T, s.TEXTURE_MAG_FILTER, ne[x.magFilter]), s.texParameteri(T, s.TEXTURE_MIN_FILTER, ne[x.minFilter]), x.compareFunction && (s.texParameteri(T, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(T, s.TEXTURE_COMPARE_FUNC, fe[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      if (x.magFilter === yt || x.minFilter !== hs && x.minFilter !== mn || x.type === Ut && e.has("OES_texture_float_linear") === !1) return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const B = e.get("EXT_texture_filter_anisotropic");
        s.texParameterf(T, B.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, i.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function Ie(T, x) {
    let B = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, x.addEventListener("dispose", R));
    const Y = x.source;
    let $ = f.get(Y);
    $ === void 0 && ($ = {}, f.set(Y, $));
    const q = k(x);
    if (q !== T.__cacheKey) {
      $[q] === void 0 && ($[q] = {
        texture: s.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, B = !0), $[q].usedTimes++;
      const me = $[T.__cacheKey];
      me !== void 0 && ($[T.__cacheKey].usedTimes--, me.usedTimes === 0 && y(x)), T.__cacheKey = q, T.__webglTexture = $[q].texture;
    }
    return B;
  }
  function X(T, x, B) {
    let Y = s.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (Y = s.TEXTURE_2D_ARRAY), x.isData3DTexture && (Y = s.TEXTURE_3D);
    const $ = Ie(T, x), q = x.source;
    t.bindTexture(Y, T.__webglTexture, s.TEXTURE0 + B);
    const me = n.get(q);
    if (q.version !== me.__version || $ === !0) {
      t.activeTexture(s.TEXTURE0 + B);
      const re = We.getPrimaries(We.workingColorSpace), oe = x.colorSpace === Yn ? null : We.getPrimaries(x.colorSpace), ke = x.colorSpace === Yn || re === oe ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, ke);
      let J = b(x.image, !1, i.maxTextureSize);
      J = $e(x, J);
      const de = r.convert(x.format, x.colorSpace), Ae = r.convert(x.type);
      let Ce = S(x.internalFormat, de, Ae, x.colorSpace, x.isVideoTexture);
      ye(Y, x);
      let ue;
      const Ve = x.mipmaps, De = x.isVideoTexture !== !0, je = me.__version === void 0 || $ === !0, L = q.dataReady, se = P(x, J);
      if (x.isDepthTexture)
        Ce = v(x.format === hi, x.type), je && (De ? t.texStorage2D(s.TEXTURE_2D, 1, Ce, J.width, J.height) : t.texImage2D(s.TEXTURE_2D, 0, Ce, J.width, J.height, 0, de, Ae, null));
      else if (x.isDataTexture)
        if (Ve.length > 0) {
          De && je && t.texStorage2D(s.TEXTURE_2D, se, Ce, Ve[0].width, Ve[0].height);
          for (let W = 0, K = Ve.length; W < K; W++)
            ue = Ve[W], De ? L && t.texSubImage2D(s.TEXTURE_2D, W, 0, 0, ue.width, ue.height, de, Ae, ue.data) : t.texImage2D(s.TEXTURE_2D, W, Ce, ue.width, ue.height, 0, de, Ae, ue.data);
          x.generateMipmaps = !1;
        } else
          De ? (je && t.texStorage2D(s.TEXTURE_2D, se, Ce, J.width, J.height), L && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, J.width, J.height, de, Ae, J.data)) : t.texImage2D(s.TEXTURE_2D, 0, Ce, J.width, J.height, 0, de, Ae, J.data);
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          De && je && t.texStorage3D(s.TEXTURE_2D_ARRAY, se, Ce, Ve[0].width, Ve[0].height, J.depth);
          for (let W = 0, K = Ve.length; W < K; W++)
            if (ue = Ve[W], x.format !== Gt)
              if (de !== null)
                if (De) {
                  if (L)
                    if (x.layerUpdates.size > 0) {
                      const he = Hc(ue.width, ue.height, x.format, x.type);
                      for (const ce of x.layerUpdates) {
                        const Ne = ue.data.subarray(
                          ce * he / ue.data.BYTES_PER_ELEMENT,
                          (ce + 1) * he / ue.data.BYTES_PER_ELEMENT
                        );
                        t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, ce, ue.width, ue.height, 1, de, Ne);
                      }
                      x.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, 0, ue.width, ue.height, J.depth, de, ue.data);
                } else
                  t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, W, Ce, ue.width, ue.height, J.depth, 0, ue.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              De ? L && t.texSubImage3D(s.TEXTURE_2D_ARRAY, W, 0, 0, 0, ue.width, ue.height, J.depth, de, Ae, ue.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, W, Ce, ue.width, ue.height, J.depth, 0, de, Ae, ue.data);
        } else {
          De && je && t.texStorage2D(s.TEXTURE_2D, se, Ce, Ve[0].width, Ve[0].height);
          for (let W = 0, K = Ve.length; W < K; W++)
            ue = Ve[W], x.format !== Gt ? de !== null ? De ? L && t.compressedTexSubImage2D(s.TEXTURE_2D, W, 0, 0, ue.width, ue.height, de, ue.data) : t.compressedTexImage2D(s.TEXTURE_2D, W, Ce, ue.width, ue.height, 0, ue.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : De ? L && t.texSubImage2D(s.TEXTURE_2D, W, 0, 0, ue.width, ue.height, de, Ae, ue.data) : t.texImage2D(s.TEXTURE_2D, W, Ce, ue.width, ue.height, 0, de, Ae, ue.data);
        }
      else if (x.isDataArrayTexture)
        if (De) {
          if (je && t.texStorage3D(s.TEXTURE_2D_ARRAY, se, Ce, J.width, J.height, J.depth), L)
            if (x.layerUpdates.size > 0) {
              const W = Hc(J.width, J.height, x.format, x.type);
              for (const K of x.layerUpdates) {
                const he = J.data.subarray(
                  K * W / J.data.BYTES_PER_ELEMENT,
                  (K + 1) * W / J.data.BYTES_PER_ELEMENT
                );
                t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, K, J.width, J.height, 1, de, Ae, he);
              }
              x.clearLayerUpdates();
            } else
              t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, J.width, J.height, J.depth, de, Ae, J.data);
        } else
          t.texImage3D(s.TEXTURE_2D_ARRAY, 0, Ce, J.width, J.height, J.depth, 0, de, Ae, J.data);
      else if (x.isData3DTexture)
        De ? (je && t.texStorage3D(s.TEXTURE_3D, se, Ce, J.width, J.height, J.depth), L && t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, J.width, J.height, J.depth, de, Ae, J.data)) : t.texImage3D(s.TEXTURE_3D, 0, Ce, J.width, J.height, J.depth, 0, de, Ae, J.data);
      else if (x.isFramebufferTexture) {
        if (je)
          if (De)
            t.texStorage2D(s.TEXTURE_2D, se, Ce, J.width, J.height);
          else {
            let W = J.width, K = J.height;
            for (let he = 0; he < se; he++)
              t.texImage2D(s.TEXTURE_2D, he, Ce, W, K, 0, de, Ae, null), W >>= 1, K >>= 1;
          }
      } else if (Ve.length > 0) {
        if (De && je) {
          const W = Me(Ve[0]);
          t.texStorage2D(s.TEXTURE_2D, se, Ce, W.width, W.height);
        }
        for (let W = 0, K = Ve.length; W < K; W++)
          ue = Ve[W], De ? L && t.texSubImage2D(s.TEXTURE_2D, W, 0, 0, de, Ae, ue) : t.texImage2D(s.TEXTURE_2D, W, Ce, de, Ae, ue);
        x.generateMipmaps = !1;
      } else if (De) {
        if (je) {
          const W = Me(J);
          t.texStorage2D(s.TEXTURE_2D, se, Ce, W.width, W.height);
        }
        L && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, de, Ae, J);
      } else
        t.texImage2D(s.TEXTURE_2D, 0, Ce, de, Ae, J);
      m(x) && u(Y), me.__version = q.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function ee(T, x, B) {
    if (x.image.length !== 6) return;
    const Y = Ie(T, x), $ = x.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, T.__webglTexture, s.TEXTURE0 + B);
    const q = n.get($);
    if ($.version !== q.__version || Y === !0) {
      t.activeTexture(s.TEXTURE0 + B);
      const me = We.getPrimaries(We.workingColorSpace), re = x.colorSpace === Yn ? null : We.getPrimaries(x.colorSpace), oe = x.colorSpace === Yn || me === re ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, oe);
      const ke = x.isCompressedTexture || x.image[0].isCompressedTexture, J = x.image[0] && x.image[0].isDataTexture, de = [];
      for (let K = 0; K < 6; K++)
        !ke && !J ? de[K] = b(x.image[K], !0, i.maxCubemapSize) : de[K] = J ? x.image[K].image : x.image[K], de[K] = $e(x, de[K]);
      const Ae = de[0], Ce = r.convert(x.format, x.colorSpace), ue = r.convert(x.type), Ve = S(x.internalFormat, Ce, ue, x.colorSpace), De = x.isVideoTexture !== !0, je = q.__version === void 0 || Y === !0, L = $.dataReady;
      let se = P(x, Ae);
      ye(s.TEXTURE_CUBE_MAP, x);
      let W;
      if (ke) {
        De && je && t.texStorage2D(s.TEXTURE_CUBE_MAP, se, Ve, Ae.width, Ae.height);
        for (let K = 0; K < 6; K++) {
          W = de[K].mipmaps;
          for (let he = 0; he < W.length; he++) {
            const ce = W[he];
            x.format !== Gt ? Ce !== null ? De ? L && t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, he, 0, 0, ce.width, ce.height, Ce, ce.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, he, Ve, ce.width, ce.height, 0, ce.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : De ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, he, 0, 0, ce.width, ce.height, Ce, ue, ce.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, he, Ve, ce.width, ce.height, 0, Ce, ue, ce.data);
          }
        }
      } else {
        if (W = x.mipmaps, De && je) {
          W.length > 0 && se++;
          const K = Me(de[0]);
          t.texStorage2D(s.TEXTURE_CUBE_MAP, se, Ve, K.width, K.height);
        }
        for (let K = 0; K < 6; K++)
          if (J) {
            De ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, de[K].width, de[K].height, Ce, ue, de[K].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Ve, de[K].width, de[K].height, 0, Ce, ue, de[K].data);
            for (let he = 0; he < W.length; he++) {
              const Ne = W[he].image[K].image;
              De ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, he + 1, 0, 0, Ne.width, Ne.height, Ce, ue, Ne.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, he + 1, Ve, Ne.width, Ne.height, 0, Ce, ue, Ne.data);
            }
          } else {
            De ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, Ce, ue, de[K]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Ve, Ce, ue, de[K]);
            for (let he = 0; he < W.length; he++) {
              const ce = W[he];
              De ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, he + 1, 0, 0, Ce, ue, ce.image[K]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + K, he + 1, Ve, Ce, ue, ce.image[K]);
            }
          }
      }
      m(x) && u(s.TEXTURE_CUBE_MAP), q.__version = $.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function pe(T, x, B, Y, $, q) {
    const me = r.convert(B.format, B.colorSpace), re = r.convert(B.type), oe = S(B.internalFormat, me, re, B.colorSpace), ke = n.get(x), J = n.get(B);
    if (J.__renderTarget = x, !ke.__hasExternalTextures) {
      const de = Math.max(1, x.width >> q), Ae = Math.max(1, x.height >> q);
      $ === s.TEXTURE_3D || $ === s.TEXTURE_2D_ARRAY ? t.texImage3D($, q, oe, de, Ae, x.depth, 0, me, re, null) : t.texImage2D($, q, oe, de, Ae, 0, me, re, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, T), ze(x) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, Y, $, J.__webglTexture, 0, Be(x)) : ($ === s.TEXTURE_2D || $ >= s.TEXTURE_CUBE_MAP_POSITIVE_X && $ <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, Y, $, J.__webglTexture, q), t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function ie(T, x, B) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, T), x.depthBuffer) {
      const Y = x.depthTexture, $ = Y && Y.isDepthTexture ? Y.type : null, q = v(x.stencilBuffer, $), me = x.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, re = Be(x);
      ze(x) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, re, q, x.width, x.height) : B ? s.renderbufferStorageMultisample(s.RENDERBUFFER, re, q, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, q, x.width, x.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, me, s.RENDERBUFFER, T);
    } else {
      const Y = x.textures;
      for (let $ = 0; $ < Y.length; $++) {
        const q = Y[$], me = r.convert(q.format, q.colorSpace), re = r.convert(q.type), oe = S(q.internalFormat, me, re, q.colorSpace), ke = Be(x);
        B && ze(x) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, ke, oe, x.width, x.height) : ze(x) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, ke, oe, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, oe, x.width, x.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function ve(T, x) {
    if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s.FRAMEBUFFER, T), !(x.depthTexture && x.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const Y = n.get(x.depthTexture);
    Y.__renderTarget = x, (!Y.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), j(x.depthTexture, 0);
    const $ = Y.__webglTexture, q = Be(x);
    if (x.depthTexture.format === Ni)
      ze(x) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, $, 0, q) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, $, 0);
    else if (x.depthTexture.format === hi)
      ze(x) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, $, 0, q) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, $, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function we(T) {
    const x = n.get(T), B = T.isWebGLCubeRenderTarget === !0;
    if (x.__boundDepthTexture !== T.depthTexture) {
      const Y = T.depthTexture;
      if (x.__depthDisposeCallback && x.__depthDisposeCallback(), Y) {
        const $ = () => {
          delete x.__boundDepthTexture, delete x.__depthDisposeCallback, Y.removeEventListener("dispose", $);
        };
        Y.addEventListener("dispose", $), x.__depthDisposeCallback = $;
      }
      x.__boundDepthTexture = Y;
    }
    if (T.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (B) throw new Error("target.depthTexture not supported in Cube render targets");
      ve(x.__webglFramebuffer, T);
    } else if (B) {
      x.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer[Y]), x.__webglDepthbuffer[Y] === void 0)
          x.__webglDepthbuffer[Y] = s.createRenderbuffer(), ie(x.__webglDepthbuffer[Y], T, !1);
        else {
          const $ = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, q = x.__webglDepthbuffer[Y];
          s.bindRenderbuffer(s.RENDERBUFFER, q), s.framebufferRenderbuffer(s.FRAMEBUFFER, $, s.RENDERBUFFER, q);
        }
    } else if (t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0)
      x.__webglDepthbuffer = s.createRenderbuffer(), ie(x.__webglDepthbuffer, T, !1);
    else {
      const Y = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, $ = x.__webglDepthbuffer;
      s.bindRenderbuffer(s.RENDERBUFFER, $), s.framebufferRenderbuffer(s.FRAMEBUFFER, Y, s.RENDERBUFFER, $);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Pe(T, x, B) {
    const Y = n.get(T);
    x !== void 0 && pe(Y.__webglFramebuffer, T, T.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), B !== void 0 && we(T);
  }
  function nt(T) {
    const x = T.texture, B = n.get(T), Y = n.get(x);
    T.addEventListener("dispose", A);
    const $ = T.textures, q = T.isWebGLCubeRenderTarget === !0, me = $.length > 1;
    if (me || (Y.__webglTexture === void 0 && (Y.__webglTexture = s.createTexture()), Y.__version = x.version, a.memory.textures++), q) {
      B.__webglFramebuffer = [];
      for (let re = 0; re < 6; re++)
        if (x.mipmaps && x.mipmaps.length > 0) {
          B.__webglFramebuffer[re] = [];
          for (let oe = 0; oe < x.mipmaps.length; oe++)
            B.__webglFramebuffer[re][oe] = s.createFramebuffer();
        } else
          B.__webglFramebuffer[re] = s.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        B.__webglFramebuffer = [];
        for (let re = 0; re < x.mipmaps.length; re++)
          B.__webglFramebuffer[re] = s.createFramebuffer();
      } else
        B.__webglFramebuffer = s.createFramebuffer();
      if (me)
        for (let re = 0, oe = $.length; re < oe; re++) {
          const ke = n.get($[re]);
          ke.__webglTexture === void 0 && (ke.__webglTexture = s.createTexture(), a.memory.textures++);
        }
      if (T.samples > 0 && ze(T) === !1) {
        B.__webglMultisampledFramebuffer = s.createFramebuffer(), B.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, B.__webglMultisampledFramebuffer);
        for (let re = 0; re < $.length; re++) {
          const oe = $[re];
          B.__webglColorRenderbuffer[re] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, B.__webglColorRenderbuffer[re]);
          const ke = r.convert(oe.format, oe.colorSpace), J = r.convert(oe.type), de = S(oe.internalFormat, ke, J, oe.colorSpace, T.isXRRenderTarget === !0), Ae = Be(T);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, Ae, de, T.width, T.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + re, s.RENDERBUFFER, B.__webglColorRenderbuffer[re]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), T.depthBuffer && (B.__webglDepthRenderbuffer = s.createRenderbuffer(), ie(B.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (q) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, Y.__webglTexture), ye(s.TEXTURE_CUBE_MAP, x);
      for (let re = 0; re < 6; re++)
        if (x.mipmaps && x.mipmaps.length > 0)
          for (let oe = 0; oe < x.mipmaps.length; oe++)
            pe(B.__webglFramebuffer[re][oe], T, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + re, oe);
        else
          pe(B.__webglFramebuffer[re], T, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0);
      m(x) && u(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (me) {
      for (let re = 0, oe = $.length; re < oe; re++) {
        const ke = $[re], J = n.get(ke);
        t.bindTexture(s.TEXTURE_2D, J.__webglTexture), ye(s.TEXTURE_2D, ke), pe(B.__webglFramebuffer, T, ke, s.COLOR_ATTACHMENT0 + re, s.TEXTURE_2D, 0), m(ke) && u(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let re = s.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (re = T.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), t.bindTexture(re, Y.__webglTexture), ye(re, x), x.mipmaps && x.mipmaps.length > 0)
        for (let oe = 0; oe < x.mipmaps.length; oe++)
          pe(B.__webglFramebuffer[oe], T, x, s.COLOR_ATTACHMENT0, re, oe);
      else
        pe(B.__webglFramebuffer, T, x, s.COLOR_ATTACHMENT0, re, 0);
      m(x) && u(re), t.unbindTexture();
    }
    T.depthBuffer && we(T);
  }
  function He(T) {
    const x = T.textures;
    for (let B = 0, Y = x.length; B < Y; B++) {
      const $ = x[B];
      if (m($)) {
        const q = M(T), me = n.get($).__webglTexture;
        t.bindTexture(q, me), u(q), t.unbindTexture();
      }
    }
  }
  const st = [], I = [];
  function Mt(T) {
    if (T.samples > 0) {
      if (ze(T) === !1) {
        const x = T.textures, B = T.width, Y = T.height;
        let $ = s.COLOR_BUFFER_BIT;
        const q = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, me = n.get(T), re = x.length > 1;
        if (re)
          for (let oe = 0; oe < x.length; oe++)
            t.bindFramebuffer(s.FRAMEBUFFER, me.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + oe, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, me.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + oe, s.TEXTURE_2D, null, 0);
        t.bindFramebuffer(s.READ_FRAMEBUFFER, me.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, me.__webglFramebuffer);
        for (let oe = 0; oe < x.length; oe++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && ($ |= s.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && ($ |= s.STENCIL_BUFFER_BIT)), re) {
            s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, me.__webglColorRenderbuffer[oe]);
            const ke = n.get(x[oe]).__webglTexture;
            s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, ke, 0);
          }
          s.blitFramebuffer(0, 0, B, Y, 0, 0, B, Y, $, s.NEAREST), c === !0 && (st.length = 0, I.length = 0, st.push(s.COLOR_ATTACHMENT0 + oe), T.depthBuffer && T.resolveDepthBuffer === !1 && (st.push(q), I.push(q), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, I)), s.invalidateFramebuffer(s.READ_FRAMEBUFFER, st));
        }
        if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), re)
          for (let oe = 0; oe < x.length; oe++) {
            t.bindFramebuffer(s.FRAMEBUFFER, me.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + oe, s.RENDERBUFFER, me.__webglColorRenderbuffer[oe]);
            const ke = n.get(x[oe]).__webglTexture;
            t.bindFramebuffer(s.FRAMEBUFFER, me.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + oe, s.TEXTURE_2D, ke, 0);
          }
        t.bindFramebuffer(s.DRAW_FRAMEBUFFER, me.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && c) {
        const x = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function Be(T) {
    return Math.min(i.maxSamples, T.samples);
  }
  function ze(T) {
    const x = n.get(T);
    return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1;
  }
  function Se(T) {
    const x = a.render.frame;
    h.get(T) !== x && (h.set(T, x), T.update());
  }
  function $e(T, x) {
    const B = T.colorSpace, Y = T.format, $ = T.type;
    return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || B !== Rt && B !== Yn && (We.getTransfer(B) === Qe ? (Y !== Gt || $ !== vn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", B)), x;
  }
  function Me(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (l.width = T.naturalWidth || T.width, l.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (l.width = T.displayWidth, l.height = T.displayHeight) : (l.width = T.width, l.height = T.height), l;
  }
  this.allocateTextureUnit = F, this.resetTextureUnits = O, this.setTexture2D = j, this.setTexture2DArray = z, this.setTexture3D = Z, this.setTextureCube = V, this.rebindTextures = Pe, this.setupRenderTarget = nt, this.updateRenderTargetMipmap = He, this.updateMultisampleRenderTarget = Mt, this.setupDepthRenderbuffer = we, this.setupFrameBufferTexture = pe, this.useMultisampledRTT = ze;
}
function Rg(s, e) {
  function t(n, i = Yn) {
    let r;
    const a = We.getTransfer(i);
    if (n === vn) return s.UNSIGNED_BYTE;
    if (n === uo) return s.UNSIGNED_SHORT_4_4_4_4;
    if (n === fo) return s.UNSIGNED_SHORT_5_5_5_1;
    if (n === zl) return s.UNSIGNED_INT_5_9_9_9_REV;
    if (n === kl) return s.BYTE;
    if (n === Bl) return s.SHORT;
    if (n === bs) return s.UNSIGNED_SHORT;
    if (n === ho) return s.INT;
    if (n === ci) return s.UNSIGNED_INT;
    if (n === Ut) return s.FLOAT;
    if (n === Ht) return s.HALF_FLOAT;
    if (n === Hl) return s.ALPHA;
    if (n === Gl) return s.RGB;
    if (n === Gt) return s.RGBA;
    if (n === Vl) return s.LUMINANCE;
    if (n === Wl) return s.LUMINANCE_ALPHA;
    if (n === Ni) return s.DEPTH_COMPONENT;
    if (n === hi) return s.DEPTH_STENCIL;
    if (n === po) return s.RED;
    if (n === mo) return s.RED_INTEGER;
    if (n === jl) return s.RG;
    if (n === go) return s.RG_INTEGER;
    if (n === bo) return s.RGBA_INTEGER;
    if (n === rr || n === ar || n === or || n === cr)
      if (a === Qe)
        if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (n === rr) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === ar) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === or) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === cr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (n === rr) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === ar) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === or) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === cr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === Aa || n === Ra || n === Ca || n === Pa)
      if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (n === Aa) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Ra) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Ca) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Pa) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === Da || n === La || n === Ia)
      if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (n === Da || n === La) return a === Qe ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === Ia) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === Na || n === Ua || n === Fa || n === Oa || n === ka || n === Ba || n === za || n === Ha || n === Ga || n === Va || n === Wa || n === ja || n === Xa || n === qa)
      if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === Na) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Ua) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Fa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Oa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === ka) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Ba) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === za) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Ha) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Ga) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Va) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Wa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === ja) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Xa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === qa) return a === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === lr || n === Ya || n === Ka)
      if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === lr) return a === Qe ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Ya) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Ka) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === Xl || n === $a || n === Za || n === Qa)
      if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
        if (n === lr) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === $a) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Za) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Qa) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === li ? s.UNSIGNED_INT_24_8 : s[n] !== void 0 ? s[n] : null;
  }
  return { convert: t };
}
class Cg extends Dt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Fn extends ot {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Pg = { type: "move" };
class ta {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Fn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Fn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new D(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new D()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Fn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new D(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new D()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, r = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const b of e.hand.values()) {
          const m = t.getJointPose(b, n), u = this._getHandJoint(l, b);
          m !== null && (u.matrix.fromArray(m.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), u.matrixWorldNeedsUpdate = !0, u.jointRadius = m.radius), u.visible = m !== null;
        }
        const h = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], f = h.position.distanceTo(d.position), p = 0.02, g = 5e-3;
        l.inputState.pinching && f > p + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && f <= p - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1, r.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Pg)));
    }
    return o !== null && (o.visible = i !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Fn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Dg = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Lg = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Ig {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new ut(), r = e.properties.get(i);
      r.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new wt({
        vertexShader: Dg,
        fragmentShader: Lg,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new vt(new ys(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Ng extends kn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, a = null, o = "local-floor", c = 1, l = null, h = null, d = null, f = null, p = null, g = null;
    const b = new Ig(), m = t.getContextAttributes();
    let u = null, M = null;
    const S = [], v = [], P = new Ee();
    let R = null;
    const A = new Dt();
    A.viewport = new qe();
    const C = new Dt();
    C.viewport = new qe();
    const y = [A, C], _ = new Cg();
    let w = null, O = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(X) {
      let ee = S[X];
      return ee === void 0 && (ee = new ta(), S[X] = ee), ee.getTargetRaySpace();
    }, this.getControllerGrip = function(X) {
      let ee = S[X];
      return ee === void 0 && (ee = new ta(), S[X] = ee), ee.getGripSpace();
    }, this.getHand = function(X) {
      let ee = S[X];
      return ee === void 0 && (ee = new ta(), S[X] = ee), ee.getHandSpace();
    };
    function F(X) {
      const ee = v.indexOf(X.inputSource);
      if (ee === -1)
        return;
      const pe = S[ee];
      pe !== void 0 && (pe.update(X.inputSource, X.frame, l || a), pe.dispatchEvent({ type: X.type, data: X.inputSource }));
    }
    function k() {
      i.removeEventListener("select", F), i.removeEventListener("selectstart", F), i.removeEventListener("selectend", F), i.removeEventListener("squeeze", F), i.removeEventListener("squeezestart", F), i.removeEventListener("squeezeend", F), i.removeEventListener("end", k), i.removeEventListener("inputsourceschange", j);
      for (let X = 0; X < S.length; X++) {
        const ee = v[X];
        ee !== null && (v[X] = null, S[X].disconnect(ee));
      }
      w = null, O = null, b.reset(), e.setRenderTarget(u), p = null, f = null, d = null, i = null, M = null, Ie.stop(), n.isPresenting = !1, e.setPixelRatio(R), e.setSize(P.width, P.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(X) {
      r = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(X) {
      o = X, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(X) {
      l = X;
    }, this.getBaseLayer = function() {
      return f !== null ? f : p;
    }, this.getBinding = function() {
      return d;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(X) {
      if (i = X, i !== null) {
        if (u = e.getRenderTarget(), i.addEventListener("select", F), i.addEventListener("selectstart", F), i.addEventListener("selectend", F), i.addEventListener("squeeze", F), i.addEventListener("squeezestart", F), i.addEventListener("squeezeend", F), i.addEventListener("end", k), i.addEventListener("inputsourceschange", j), m.xrCompatible !== !0 && await t.makeXRCompatible(), R = e.getPixelRatio(), e.getSize(P), i.renderState.layers === void 0) {
          const ee = {
            antialias: m.antialias,
            alpha: !0,
            depth: m.depth,
            stencil: m.stencil,
            framebufferScaleFactor: r
          };
          p = new XRWebGLLayer(i, t, ee), i.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), M = new cn(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: Gt,
              type: vn,
              colorSpace: e.outputColorSpace,
              stencilBuffer: m.stencil
            }
          );
        } else {
          let ee = null, pe = null, ie = null;
          m.depth && (ie = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ee = m.stencil ? hi : Ni, pe = m.stencil ? li : ci);
          const ve = {
            colorFormat: t.RGBA8,
            depthFormat: ie,
            scaleFactor: r
          };
          d = new XRWebGLBinding(i, t), f = d.createProjectionLayer(ve), i.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), M = new cn(
            f.textureWidth,
            f.textureHeight,
            {
              format: Gt,
              type: vn,
              depthTexture: new Mo(f.textureWidth, f.textureHeight, pe, void 0, void 0, void 0, void 0, void 0, void 0, ee),
              stencilBuffer: m.stencil,
              colorSpace: e.outputColorSpace,
              samples: m.antialias ? 4 : 0,
              resolveDepthBuffer: f.ignoreDepthValues === !1
            }
          );
        }
        M.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(o), Ie.setContext(i), Ie.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return b.getDepthTexture();
    };
    function j(X) {
      for (let ee = 0; ee < X.removed.length; ee++) {
        const pe = X.removed[ee], ie = v.indexOf(pe);
        ie >= 0 && (v[ie] = null, S[ie].disconnect(pe));
      }
      for (let ee = 0; ee < X.added.length; ee++) {
        const pe = X.added[ee];
        let ie = v.indexOf(pe);
        if (ie === -1) {
          for (let we = 0; we < S.length; we++)
            if (we >= v.length) {
              v.push(pe), ie = we;
              break;
            } else if (v[we] === null) {
              v[we] = pe, ie = we;
              break;
            }
          if (ie === -1) break;
        }
        const ve = S[ie];
        ve && ve.connect(pe);
      }
    }
    const z = new D(), Z = new D();
    function V(X, ee, pe) {
      z.setFromMatrixPosition(ee.matrixWorld), Z.setFromMatrixPosition(pe.matrixWorld);
      const ie = z.distanceTo(Z), ve = ee.projectionMatrix.elements, we = pe.projectionMatrix.elements, Pe = ve[14] / (ve[10] - 1), nt = ve[14] / (ve[10] + 1), He = (ve[9] + 1) / ve[5], st = (ve[9] - 1) / ve[5], I = (ve[8] - 1) / ve[0], Mt = (we[8] + 1) / we[0], Be = Pe * I, ze = Pe * Mt, Se = ie / (-I + Mt), $e = Se * -I;
      if (ee.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX($e), X.translateZ(Se), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), ve[10] === -1)
        X.projectionMatrix.copy(ee.projectionMatrix), X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);
      else {
        const Me = Pe + Se, T = nt + Se, x = Be - $e, B = ze + (ie - $e), Y = He * nt / T * Me, $ = st * nt / T * Me;
        X.projectionMatrix.makePerspective(x, B, Y, $, Me, T), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
      }
    }
    function Q(X, ee) {
      ee === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(ee.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
    }
    this.updateCamera = function(X) {
      if (i === null) return;
      let ee = X.near, pe = X.far;
      b.texture !== null && (b.depthNear > 0 && (ee = b.depthNear), b.depthFar > 0 && (pe = b.depthFar)), _.near = C.near = A.near = ee, _.far = C.far = A.far = pe, (w !== _.near || O !== _.far) && (i.updateRenderState({
        depthNear: _.near,
        depthFar: _.far
      }), w = _.near, O = _.far), A.layers.mask = X.layers.mask | 2, C.layers.mask = X.layers.mask | 4, _.layers.mask = A.layers.mask | C.layers.mask;
      const ie = X.parent, ve = _.cameras;
      Q(_, ie);
      for (let we = 0; we < ve.length; we++)
        Q(ve[we], ie);
      ve.length === 2 ? V(_, A, C) : _.projectionMatrix.copy(A.projectionMatrix), ne(X, _, ie);
    };
    function ne(X, ee, pe) {
      pe === null ? X.matrix.copy(ee.matrixWorld) : (X.matrix.copy(pe.matrixWorld), X.matrix.invert(), X.matrix.multiply(ee.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(!0), X.projectionMatrix.copy(ee.projectionMatrix), X.projectionMatrixInverse.copy(ee.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = zi * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
    }
    this.getCamera = function() {
      return _;
    }, this.getFoveation = function() {
      if (!(f === null && p === null))
        return c;
    }, this.setFoveation = function(X) {
      c = X, f !== null && (f.fixedFoveation = X), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = X);
    }, this.hasDepthSensing = function() {
      return b.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return b.getMesh(_);
    };
    let fe = null;
    function ye(X, ee) {
      if (h = ee.getViewerPose(l || a), g = ee, h !== null) {
        const pe = h.views;
        p !== null && (e.setRenderTargetFramebuffer(M, p.framebuffer), e.setRenderTarget(M));
        let ie = !1;
        pe.length !== _.cameras.length && (_.cameras.length = 0, ie = !0);
        for (let we = 0; we < pe.length; we++) {
          const Pe = pe[we];
          let nt = null;
          if (p !== null)
            nt = p.getViewport(Pe);
          else {
            const st = d.getViewSubImage(f, Pe);
            nt = st.viewport, we === 0 && (e.setRenderTargetTextures(
              M,
              st.colorTexture,
              f.ignoreDepthValues ? void 0 : st.depthStencilTexture
            ), e.setRenderTarget(M));
          }
          let He = y[we];
          He === void 0 && (He = new Dt(), He.layers.enable(we), He.viewport = new qe(), y[we] = He), He.matrix.fromArray(Pe.transform.matrix), He.matrix.decompose(He.position, He.quaternion, He.scale), He.projectionMatrix.fromArray(Pe.projectionMatrix), He.projectionMatrixInverse.copy(He.projectionMatrix).invert(), He.viewport.set(nt.x, nt.y, nt.width, nt.height), we === 0 && (_.matrix.copy(He.matrix), _.matrix.decompose(_.position, _.quaternion, _.scale)), ie === !0 && _.cameras.push(He);
        }
        const ve = i.enabledFeatures;
        if (ve && ve.includes("depth-sensing")) {
          const we = d.getDepthInformation(pe[0]);
          we && we.isValid && we.texture && b.init(e, we, i.renderState);
        }
      }
      for (let pe = 0; pe < S.length; pe++) {
        const ie = v[pe], ve = S[pe];
        ie !== null && ve !== void 0 && ve.update(ie, ee, l || a);
      }
      fe && fe(X, ee), ee.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ee }), g = null;
    }
    const Ie = new sh();
    Ie.setAnimationLoop(ye), this.setAnimationLoop = function(X) {
      fe = X;
    }, this.dispose = function() {
    };
  }
}
const si = /* @__PURE__ */ new yn(), Ug = /* @__PURE__ */ new Re();
function Fg(s, e) {
  function t(m, u) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), u.value.copy(m.matrix);
  }
  function n(m, u) {
    u.color.getRGB(m.fogColor.value, th(s)), u.isFog ? (m.fogNear.value = u.near, m.fogFar.value = u.far) : u.isFogExp2 && (m.fogDensity.value = u.density);
  }
  function i(m, u, M, S, v) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial ? r(m, u) : u.isMeshToonMaterial ? (r(m, u), d(m, u)) : u.isMeshPhongMaterial ? (r(m, u), h(m, u)) : u.isMeshStandardMaterial ? (r(m, u), f(m, u), u.isMeshPhysicalMaterial && p(m, u, v)) : u.isMeshMatcapMaterial ? (r(m, u), g(m, u)) : u.isMeshDepthMaterial ? r(m, u) : u.isMeshDistanceMaterial ? (r(m, u), b(m, u)) : u.isMeshNormalMaterial ? r(m, u) : u.isLineBasicMaterial ? (a(m, u), u.isLineDashedMaterial && o(m, u)) : u.isPointsMaterial ? c(m, u, M, S) : u.isSpriteMaterial ? l(m, u) : u.isShadowMaterial ? (m.color.value.copy(u.color), m.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function r(m, u) {
    m.opacity.value = u.opacity, u.color && m.diffuse.value.copy(u.color), u.emissive && m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (m.map.value = u.map, t(u.map, m.mapTransform)), u.alphaMap && (m.alphaMap.value = u.alphaMap, t(u.alphaMap, m.alphaMapTransform)), u.bumpMap && (m.bumpMap.value = u.bumpMap, t(u.bumpMap, m.bumpMapTransform), m.bumpScale.value = u.bumpScale, u.side === Lt && (m.bumpScale.value *= -1)), u.normalMap && (m.normalMap.value = u.normalMap, t(u.normalMap, m.normalMapTransform), m.normalScale.value.copy(u.normalScale), u.side === Lt && m.normalScale.value.negate()), u.displacementMap && (m.displacementMap.value = u.displacementMap, t(u.displacementMap, m.displacementMapTransform), m.displacementScale.value = u.displacementScale, m.displacementBias.value = u.displacementBias), u.emissiveMap && (m.emissiveMap.value = u.emissiveMap, t(u.emissiveMap, m.emissiveMapTransform)), u.specularMap && (m.specularMap.value = u.specularMap, t(u.specularMap, m.specularMapTransform)), u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest);
    const M = e.get(u), S = M.envMap, v = M.envMapRotation;
    S && (m.envMap.value = S, si.copy(v), si.x *= -1, si.y *= -1, si.z *= -1, S.isCubeTexture && S.isRenderTargetTexture === !1 && (si.y *= -1, si.z *= -1), m.envMapRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(si)), m.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = u.reflectivity, m.ior.value = u.ior, m.refractionRatio.value = u.refractionRatio), u.lightMap && (m.lightMap.value = u.lightMap, m.lightMapIntensity.value = u.lightMapIntensity, t(u.lightMap, m.lightMapTransform)), u.aoMap && (m.aoMap.value = u.aoMap, m.aoMapIntensity.value = u.aoMapIntensity, t(u.aoMap, m.aoMapTransform));
  }
  function a(m, u) {
    m.diffuse.value.copy(u.color), m.opacity.value = u.opacity, u.map && (m.map.value = u.map, t(u.map, m.mapTransform));
  }
  function o(m, u) {
    m.dashSize.value = u.dashSize, m.totalSize.value = u.dashSize + u.gapSize, m.scale.value = u.scale;
  }
  function c(m, u, M, S) {
    m.diffuse.value.copy(u.color), m.opacity.value = u.opacity, m.size.value = u.size * M, m.scale.value = S * 0.5, u.map && (m.map.value = u.map, t(u.map, m.uvTransform)), u.alphaMap && (m.alphaMap.value = u.alphaMap, t(u.alphaMap, m.alphaMapTransform)), u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest);
  }
  function l(m, u) {
    m.diffuse.value.copy(u.color), m.opacity.value = u.opacity, m.rotation.value = u.rotation, u.map && (m.map.value = u.map, t(u.map, m.mapTransform)), u.alphaMap && (m.alphaMap.value = u.alphaMap, t(u.alphaMap, m.alphaMapTransform)), u.alphaTest > 0 && (m.alphaTest.value = u.alphaTest);
  }
  function h(m, u) {
    m.specular.value.copy(u.specular), m.shininess.value = Math.max(u.shininess, 1e-4);
  }
  function d(m, u) {
    u.gradientMap && (m.gradientMap.value = u.gradientMap);
  }
  function f(m, u) {
    m.metalness.value = u.metalness, u.metalnessMap && (m.metalnessMap.value = u.metalnessMap, t(u.metalnessMap, m.metalnessMapTransform)), m.roughness.value = u.roughness, u.roughnessMap && (m.roughnessMap.value = u.roughnessMap, t(u.roughnessMap, m.roughnessMapTransform)), u.envMap && (m.envMapIntensity.value = u.envMapIntensity);
  }
  function p(m, u, M) {
    m.ior.value = u.ior, u.sheen > 0 && (m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), m.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (m.sheenColorMap.value = u.sheenColorMap, t(u.sheenColorMap, m.sheenColorMapTransform)), u.sheenRoughnessMap && (m.sheenRoughnessMap.value = u.sheenRoughnessMap, t(u.sheenRoughnessMap, m.sheenRoughnessMapTransform))), u.clearcoat > 0 && (m.clearcoat.value = u.clearcoat, m.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (m.clearcoatMap.value = u.clearcoatMap, t(u.clearcoatMap, m.clearcoatMapTransform)), u.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, t(u.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (m.clearcoatNormalMap.value = u.clearcoatNormalMap, t(u.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), u.side === Lt && m.clearcoatNormalScale.value.negate())), u.dispersion > 0 && (m.dispersion.value = u.dispersion), u.iridescence > 0 && (m.iridescence.value = u.iridescence, m.iridescenceIOR.value = u.iridescenceIOR, m.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (m.iridescenceMap.value = u.iridescenceMap, t(u.iridescenceMap, m.iridescenceMapTransform)), u.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = u.iridescenceThicknessMap, t(u.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), u.transmission > 0 && (m.transmission.value = u.transmission, m.transmissionSamplerMap.value = M.texture, m.transmissionSamplerSize.value.set(M.width, M.height), u.transmissionMap && (m.transmissionMap.value = u.transmissionMap, t(u.transmissionMap, m.transmissionMapTransform)), m.thickness.value = u.thickness, u.thicknessMap && (m.thicknessMap.value = u.thicknessMap, t(u.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = u.attenuationDistance, m.attenuationColor.value.copy(u.attenuationColor)), u.anisotropy > 0 && (m.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u.anisotropyMap && (m.anisotropyMap.value = u.anisotropyMap, t(u.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = u.specularIntensity, m.specularColor.value.copy(u.specularColor), u.specularColorMap && (m.specularColorMap.value = u.specularColorMap, t(u.specularColorMap, m.specularColorMapTransform)), u.specularIntensityMap && (m.specularIntensityMap.value = u.specularIntensityMap, t(u.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, u) {
    u.matcap && (m.matcap.value = u.matcap);
  }
  function b(m, u) {
    const M = e.get(u).light;
    m.referencePosition.value.setFromMatrixPosition(M.matrixWorld), m.nearDistance.value = M.shadow.camera.near, m.farDistance.value = M.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function Og(s, e, t, n) {
  let i = {}, r = {}, a = [];
  const o = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(M, S) {
    const v = S.program;
    n.uniformBlockBinding(M, v);
  }
  function l(M, S) {
    let v = i[M.id];
    v === void 0 && (g(M), v = h(M), i[M.id] = v, M.addEventListener("dispose", m));
    const P = S.program;
    n.updateUBOMapping(M, P);
    const R = e.render.frame;
    r[M.id] !== R && (f(M), r[M.id] = R);
  }
  function h(M) {
    const S = d();
    M.__bindingPointIndex = S;
    const v = s.createBuffer(), P = M.__size, R = M.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, v), s.bufferData(s.UNIFORM_BUFFER, P, R), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, S, v), v;
  }
  function d() {
    for (let M = 0; M < o; M++)
      if (a.indexOf(M) === -1)
        return a.push(M), M;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(M) {
    const S = i[M.id], v = M.uniforms, P = M.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, S);
    for (let R = 0, A = v.length; R < A; R++) {
      const C = Array.isArray(v[R]) ? v[R] : [v[R]];
      for (let y = 0, _ = C.length; y < _; y++) {
        const w = C[y];
        if (p(w, R, y, P) === !0) {
          const O = w.__offset, F = Array.isArray(w.value) ? w.value : [w.value];
          let k = 0;
          for (let j = 0; j < F.length; j++) {
            const z = F[j], Z = b(z);
            typeof z == "number" || typeof z == "boolean" ? (w.__data[0] = z, s.bufferSubData(s.UNIFORM_BUFFER, O + k, w.__data)) : z.isMatrix3 ? (w.__data[0] = z.elements[0], w.__data[1] = z.elements[1], w.__data[2] = z.elements[2], w.__data[3] = 0, w.__data[4] = z.elements[3], w.__data[5] = z.elements[4], w.__data[6] = z.elements[5], w.__data[7] = 0, w.__data[8] = z.elements[6], w.__data[9] = z.elements[7], w.__data[10] = z.elements[8], w.__data[11] = 0) : (z.toArray(w.__data, k), k += Z.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s.bufferSubData(s.UNIFORM_BUFFER, O, w.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function p(M, S, v, P) {
    const R = M.value, A = S + "_" + v;
    if (P[A] === void 0)
      return typeof R == "number" || typeof R == "boolean" ? P[A] = R : P[A] = R.clone(), !0;
    {
      const C = P[A];
      if (typeof R == "number" || typeof R == "boolean") {
        if (C !== R)
          return P[A] = R, !0;
      } else if (C.equals(R) === !1)
        return C.copy(R), !0;
    }
    return !1;
  }
  function g(M) {
    const S = M.uniforms;
    let v = 0;
    const P = 16;
    for (let A = 0, C = S.length; A < C; A++) {
      const y = Array.isArray(S[A]) ? S[A] : [S[A]];
      for (let _ = 0, w = y.length; _ < w; _++) {
        const O = y[_], F = Array.isArray(O.value) ? O.value : [O.value];
        for (let k = 0, j = F.length; k < j; k++) {
          const z = F[k], Z = b(z), V = v % P, Q = V % Z.boundary, ne = V + Q;
          v += Q, ne !== 0 && P - ne < Z.storage && (v += P - ne), O.__data = new Float32Array(Z.storage / Float32Array.BYTES_PER_ELEMENT), O.__offset = v, v += Z.storage;
        }
      }
    }
    const R = v % P;
    return R > 0 && (v += P - R), M.__size = v, M.__cache = {}, this;
  }
  function b(M) {
    const S = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof M == "number" || typeof M == "boolean" ? (S.boundary = 4, S.storage = 4) : M.isVector2 ? (S.boundary = 8, S.storage = 8) : M.isVector3 || M.isColor ? (S.boundary = 16, S.storage = 12) : M.isVector4 ? (S.boundary = 16, S.storage = 16) : M.isMatrix3 ? (S.boundary = 48, S.storage = 48) : M.isMatrix4 ? (S.boundary = 64, S.storage = 64) : M.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", M), S;
  }
  function m(M) {
    const S = M.target;
    S.removeEventListener("dispose", m);
    const v = a.indexOf(S.__bindingPointIndex);
    a.splice(v, 1), s.deleteBuffer(i[S.id]), delete i[S.id], delete r[S.id];
  }
  function u() {
    for (const M in i)
      s.deleteBuffer(i[M]);
    a = [], i = {}, r = {};
  }
  return {
    bind: c,
    update: l,
    dispose: u
  };
}
class kg {
  constructor(e = {}) {
    const {
      canvas: t = Sd(),
      context: n = null,
      depth: i = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: d = !1,
      reverseDepthBuffer: f = !1
    } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else
      p = a;
    const g = new Uint32Array(4), b = new Int32Array(4);
    let m = null, u = null;
    const M = [], S = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = dt, this.toneMapping = Zn, this.toneMappingExposure = 1;
    const v = this;
    let P = !1, R = 0, A = 0, C = null, y = -1, _ = null;
    const w = new qe(), O = new qe();
    let F = null;
    const k = new Te(0);
    let j = 0, z = t.width, Z = t.height, V = 1, Q = null, ne = null;
    const fe = new qe(0, 0, z, Z), ye = new qe(0, 0, z, Z);
    let Ie = !1;
    const X = new Mr();
    let ee = !1, pe = !1;
    const ie = new Re(), ve = new Re(), we = new D(), Pe = new qe(), nt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let He = !1;
    function st() {
      return C === null ? V : 1;
    }
    let I = n;
    function Mt(E, N) {
      return t.getContext(E, N);
    }
    try {
      const E = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${co}`), t.addEventListener("webglcontextlost", K, !1), t.addEventListener("webglcontextrestored", he, !1), t.addEventListener("webglcontextcreationerror", ce, !1), I === null) {
        const N = "webgl2";
        if (I = Mt(N, E), I === null)
          throw Mt(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (E) {
      throw console.error("THREE.WebGLRenderer: " + E.message), E;
    }
    let Be, ze, Se, $e, Me, T, x, B, Y, $, q, me, re, oe, ke, J, de, Ae, Ce, ue, Ve, De, je, L;
    function se() {
      Be = new Vp(I), Be.init(), De = new Rg(I, Be), ze = new Op(I, Be, e, De), Se = new Tg(I, Be), ze.reverseDepthBuffer && f && Se.buffers.depth.setReversed(!0), $e = new Xp(I), Me = new hg(), T = new Ag(I, Be, Se, Me, ze, De, $e), x = new Bp(v), B = new Gp(v), Y = new Qd(I), je = new Up(I, Y), $ = new Wp(I, Y, $e, je), q = new Yp(I, $, Y, $e), Ce = new qp(I, ze, T), J = new kp(Me), me = new lg(v, x, B, Be, ze, je, J), re = new Fg(v, Me), oe = new ug(), ke = new _g(Be), Ae = new Np(v, x, B, Se, q, p, c), de = new Sg(v, q, ze), L = new Og(I, $e, ze, Se), ue = new Fp(I, Be, $e), Ve = new jp(I, Be, $e), $e.programs = me.programs, v.capabilities = ze, v.extensions = Be, v.properties = Me, v.renderLists = oe, v.shadowMap = de, v.state = Se, v.info = $e;
    }
    se();
    const W = new Ng(v, I);
    this.xr = W, this.getContext = function() {
      return I;
    }, this.getContextAttributes = function() {
      return I.getContextAttributes();
    }, this.forceContextLoss = function() {
      const E = Be.get("WEBGL_lose_context");
      E && E.loseContext();
    }, this.forceContextRestore = function() {
      const E = Be.get("WEBGL_lose_context");
      E && E.restoreContext();
    }, this.getPixelRatio = function() {
      return V;
    }, this.setPixelRatio = function(E) {
      E !== void 0 && (V = E, this.setSize(z, Z, !1));
    }, this.getSize = function(E) {
      return E.set(z, Z);
    }, this.setSize = function(E, N, H = !0) {
      if (W.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      z = E, Z = N, t.width = Math.floor(E * V), t.height = Math.floor(N * V), H === !0 && (t.style.width = E + "px", t.style.height = N + "px"), this.setViewport(0, 0, E, N);
    }, this.getDrawingBufferSize = function(E) {
      return E.set(z * V, Z * V).floor();
    }, this.setDrawingBufferSize = function(E, N, H) {
      z = E, Z = N, V = H, t.width = Math.floor(E * H), t.height = Math.floor(N * H), this.setViewport(0, 0, E, N);
    }, this.getCurrentViewport = function(E) {
      return E.copy(w);
    }, this.getViewport = function(E) {
      return E.copy(fe);
    }, this.setViewport = function(E, N, H, G) {
      E.isVector4 ? fe.set(E.x, E.y, E.z, E.w) : fe.set(E, N, H, G), Se.viewport(w.copy(fe).multiplyScalar(V).round());
    }, this.getScissor = function(E) {
      return E.copy(ye);
    }, this.setScissor = function(E, N, H, G) {
      E.isVector4 ? ye.set(E.x, E.y, E.z, E.w) : ye.set(E, N, H, G), Se.scissor(O.copy(ye).multiplyScalar(V).round());
    }, this.getScissorTest = function() {
      return Ie;
    }, this.setScissorTest = function(E) {
      Se.setScissorTest(Ie = E);
    }, this.setOpaqueSort = function(E) {
      Q = E;
    }, this.setTransparentSort = function(E) {
      ne = E;
    }, this.getClearColor = function(E) {
      return E.copy(Ae.getClearColor());
    }, this.setClearColor = function() {
      Ae.setClearColor.apply(Ae, arguments);
    }, this.getClearAlpha = function() {
      return Ae.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ae.setClearAlpha.apply(Ae, arguments);
    }, this.clear = function(E = !0, N = !0, H = !0) {
      let G = 0;
      if (E) {
        let U = !1;
        if (C !== null) {
          const te = C.texture.format;
          U = te === bo || te === go || te === mo;
        }
        if (U) {
          const te = C.texture.type, le = te === vn || te === ci || te === bs || te === li || te === uo || te === fo, ge = Ae.getClearColor(), be = Ae.getClearAlpha(), Le = ge.r, Ue = ge.g, _e = ge.b;
          le ? (g[0] = Le, g[1] = Ue, g[2] = _e, g[3] = be, I.clearBufferuiv(I.COLOR, 0, g)) : (b[0] = Le, b[1] = Ue, b[2] = _e, b[3] = be, I.clearBufferiv(I.COLOR, 0, b));
        } else
          G |= I.COLOR_BUFFER_BIT;
      }
      N && (G |= I.DEPTH_BUFFER_BIT), H && (G |= I.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), I.clear(G);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", K, !1), t.removeEventListener("webglcontextrestored", he, !1), t.removeEventListener("webglcontextcreationerror", ce, !1), oe.dispose(), ke.dispose(), Me.dispose(), x.dispose(), B.dispose(), q.dispose(), je.dispose(), L.dispose(), me.dispose(), W.dispose(), W.removeEventListener("sessionstart", No), W.removeEventListener("sessionend", Uo), Qn.stop();
    };
    function K(E) {
      E.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), P = !0;
    }
    function he() {
      console.log("THREE.WebGLRenderer: Context Restored."), P = !1;
      const E = $e.autoReset, N = de.enabled, H = de.autoUpdate, G = de.needsUpdate, U = de.type;
      se(), $e.autoReset = E, de.enabled = N, de.autoUpdate = H, de.needsUpdate = G, de.type = U;
    }
    function ce(E) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage);
    }
    function Ne(E) {
      const N = E.target;
      N.removeEventListener("dispose", Ne), ct(N);
    }
    function ct(E) {
      St(E), Me.remove(E);
    }
    function St(E) {
      const N = Me.get(E).programs;
      N !== void 0 && (N.forEach(function(H) {
        me.releaseProgram(H);
      }), E.isShaderMaterial && me.releaseShaderCache(E));
    }
    this.renderBufferDirect = function(E, N, H, G, U, te) {
      N === null && (N = nt);
      const le = U.isMesh && U.matrixWorld.determinant() < 0, ge = Th(E, N, H, G, U);
      Se.setMaterial(G, le);
      let be = H.index, Le = 1;
      if (G.wireframe === !0) {
        if (be = $.getWireframeAttribute(H), be === void 0) return;
        Le = 2;
      }
      const Ue = H.drawRange, _e = H.attributes.position;
      let Xe = Ue.start * Le, it = (Ue.start + Ue.count) * Le;
      te !== null && (Xe = Math.max(Xe, te.start * Le), it = Math.min(it, (te.start + te.count) * Le)), be !== null ? (Xe = Math.max(Xe, 0), it = Math.min(it, be.count)) : _e != null && (Xe = Math.max(Xe, 0), it = Math.min(it, _e.count));
      const rt = it - Xe;
      if (rt < 0 || rt === 1 / 0) return;
      je.setup(U, G, ge, H, be);
      let It, Ye = ue;
      if (be !== null && (It = Y.get(be), Ye = Ve, Ye.setIndex(It)), U.isMesh)
        G.wireframe === !0 ? (Se.setLineWidth(G.wireframeLinewidth * st()), Ye.setMode(I.LINES)) : Ye.setMode(I.TRIANGLES);
      else if (U.isLine) {
        let xe = G.linewidth;
        xe === void 0 && (xe = 1), Se.setLineWidth(xe * st()), U.isLineSegments ? Ye.setMode(I.LINES) : U.isLineLoop ? Ye.setMode(I.LINE_LOOP) : Ye.setMode(I.LINE_STRIP);
      } else U.isPoints ? Ye.setMode(I.POINTS) : U.isSprite && Ye.setMode(I.TRIANGLES);
      if (U.isBatchedMesh)
        if (U._multiDrawInstances !== null)
          Ye.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
        else if (Be.get("WEBGL_multi_draw"))
          Ye.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
        else {
          const xe = U._multiDrawStarts, En = U._multiDrawCounts, Ke = U._multiDrawCount, Zt = be ? Y.get(be).bytesPerElement : 1, ui = Me.get(G).currentProgram.getUniforms();
          for (let Ot = 0; Ot < Ke; Ot++)
            ui.setValue(I, "_gl_DrawID", Ot), Ye.render(xe[Ot] / Zt, En[Ot]);
        }
      else if (U.isInstancedMesh)
        Ye.renderInstances(Xe, rt, U.count);
      else if (H.isInstancedBufferGeometry) {
        const xe = H._maxInstanceCount !== void 0 ? H._maxInstanceCount : 1 / 0, En = Math.min(H.instanceCount, xe);
        Ye.renderInstances(Xe, rt, En);
      } else
        Ye.render(Xe, rt);
    };
    function Ze(E, N, H) {
      E.transparent === !0 && E.side === Xt && E.forceSinglePass === !1 ? (E.side = Lt, E.needsUpdate = !0, Ts(E, N, H), E.side = bn, E.needsUpdate = !0, Ts(E, N, H), E.side = Xt) : Ts(E, N, H);
    }
    this.compile = function(E, N, H = null) {
      H === null && (H = E), u = ke.get(H), u.init(N), S.push(u), H.traverseVisible(function(U) {
        U.isLight && U.layers.test(N.layers) && (u.pushLight(U), U.castShadow && u.pushShadow(U));
      }), E !== H && E.traverseVisible(function(U) {
        U.isLight && U.layers.test(N.layers) && (u.pushLight(U), U.castShadow && u.pushShadow(U));
      }), u.setupLights();
      const G = /* @__PURE__ */ new Set();
      return E.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite))
          return;
        const te = U.material;
        if (te)
          if (Array.isArray(te))
            for (let le = 0; le < te.length; le++) {
              const ge = te[le];
              Ze(ge, H, U), G.add(ge);
            }
          else
            Ze(te, H, U), G.add(te);
      }), S.pop(), u = null, G;
    }, this.compileAsync = function(E, N, H = null) {
      const G = this.compile(E, N, H);
      return new Promise((U) => {
        function te() {
          if (G.forEach(function(le) {
            Me.get(le).currentProgram.isReady() && G.delete(le);
          }), G.size === 0) {
            U(E);
            return;
          }
          setTimeout(te, 10);
        }
        Be.get("KHR_parallel_shader_compile") !== null ? te() : setTimeout(te, 10);
      });
    };
    let $t = null;
    function Sn(E) {
      $t && $t(E);
    }
    function No() {
      Qn.stop();
    }
    function Uo() {
      Qn.start();
    }
    const Qn = new sh();
    Qn.setAnimationLoop(Sn), typeof self < "u" && Qn.setContext(self), this.setAnimationLoop = function(E) {
      $t = E, W.setAnimationLoop(E), E === null ? Qn.stop() : Qn.start();
    }, W.addEventListener("sessionstart", No), W.addEventListener("sessionend", Uo), this.render = function(E, N) {
      if (N !== void 0 && N.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (P === !0) return;
      if (E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(), N.parent === null && N.matrixWorldAutoUpdate === !0 && N.updateMatrixWorld(), W.enabled === !0 && W.isPresenting === !0 && (W.cameraAutoUpdate === !0 && W.updateCamera(N), N = W.getCamera()), E.isScene === !0 && E.onBeforeRender(v, E, N, C), u = ke.get(E, S.length), u.init(N), S.push(u), ve.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse), X.setFromProjectionMatrix(ve), pe = this.localClippingEnabled, ee = J.init(this.clippingPlanes, pe), m = oe.get(E, M.length), m.init(), M.push(m), W.enabled === !0 && W.isPresenting === !0) {
        const te = v.xr.getDepthSensingMesh();
        te !== null && Ar(te, N, -1 / 0, v.sortObjects);
      }
      Ar(E, N, 0, v.sortObjects), m.finish(), v.sortObjects === !0 && m.sort(Q, ne), He = W.enabled === !1 || W.isPresenting === !1 || W.hasDepthSensing() === !1, He && Ae.addToRenderList(m, E), this.info.render.frame++, ee === !0 && J.beginShadows();
      const H = u.state.shadowsArray;
      de.render(H, E, N), ee === !0 && J.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const G = m.opaque, U = m.transmissive;
      if (u.setupLights(), N.isArrayCamera) {
        const te = N.cameras;
        if (U.length > 0)
          for (let le = 0, ge = te.length; le < ge; le++) {
            const be = te[le];
            Oo(G, U, E, be);
          }
        He && Ae.render(E);
        for (let le = 0, ge = te.length; le < ge; le++) {
          const be = te[le];
          Fo(m, E, be, be.viewport);
        }
      } else
        U.length > 0 && Oo(G, U, E, N), He && Ae.render(E), Fo(m, E, N);
      C !== null && (T.updateMultisampleRenderTarget(C), T.updateRenderTargetMipmap(C)), E.isScene === !0 && E.onAfterRender(v, E, N), je.resetDefaultState(), y = -1, _ = null, S.pop(), S.length > 0 ? (u = S[S.length - 1], ee === !0 && J.setGlobalState(v.clippingPlanes, u.state.camera)) : u = null, M.pop(), M.length > 0 ? m = M[M.length - 1] : m = null;
    };
    function Ar(E, N, H, G) {
      if (E.visible === !1) return;
      if (E.layers.test(N.layers)) {
        if (E.isGroup)
          H = E.renderOrder;
        else if (E.isLOD)
          E.autoUpdate === !0 && E.update(N);
        else if (E.isLight)
          u.pushLight(E), E.castShadow && u.pushShadow(E);
        else if (E.isSprite) {
          if (!E.frustumCulled || X.intersectsSprite(E)) {
            G && Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ve);
            const le = q.update(E), ge = E.material;
            ge.visible && m.push(E, le, ge, H, Pe.z, null);
          }
        } else if ((E.isMesh || E.isLine || E.isPoints) && (!E.frustumCulled || X.intersectsObject(E))) {
          const le = q.update(E), ge = E.material;
          if (G && (E.boundingSphere !== void 0 ? (E.boundingSphere === null && E.computeBoundingSphere(), Pe.copy(E.boundingSphere.center)) : (le.boundingSphere === null && le.computeBoundingSphere(), Pe.copy(le.boundingSphere.center)), Pe.applyMatrix4(E.matrixWorld).applyMatrix4(ve)), Array.isArray(ge)) {
            const be = le.groups;
            for (let Le = 0, Ue = be.length; Le < Ue; Le++) {
              const _e = be[Le], Xe = ge[_e.materialIndex];
              Xe && Xe.visible && m.push(E, le, Xe, H, Pe.z, _e);
            }
          } else ge.visible && m.push(E, le, ge, H, Pe.z, null);
        }
      }
      const te = E.children;
      for (let le = 0, ge = te.length; le < ge; le++)
        Ar(te[le], N, H, G);
    }
    function Fo(E, N, H, G) {
      const U = E.opaque, te = E.transmissive, le = E.transparent;
      u.setupLightsView(H), ee === !0 && J.setGlobalState(v.clippingPlanes, H), G && Se.viewport(w.copy(G)), U.length > 0 && Es(U, N, H), te.length > 0 && Es(te, N, H), le.length > 0 && Es(le, N, H), Se.buffers.depth.setTest(!0), Se.buffers.depth.setMask(!0), Se.buffers.color.setMask(!0), Se.setPolygonOffset(!1);
    }
    function Oo(E, N, H, G) {
      if ((H.isScene === !0 ? H.overrideMaterial : null) !== null)
        return;
      u.state.transmissionRenderTarget[G.id] === void 0 && (u.state.transmissionRenderTarget[G.id] = new cn(1, 1, {
        generateMipmaps: !0,
        type: Be.has("EXT_color_buffer_half_float") || Be.has("EXT_color_buffer_float") ? Ht : vn,
        minFilter: mn,
        samples: 4,
        stencilBuffer: r,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: We.workingColorSpace
      }));
      const te = u.state.transmissionRenderTarget[G.id], le = G.viewport || w;
      te.setSize(le.z, le.w);
      const ge = v.getRenderTarget();
      v.setRenderTarget(te), v.getClearColor(k), j = v.getClearAlpha(), j < 1 && v.setClearColor(16777215, 0.5), v.clear(), He && Ae.render(H);
      const be = v.toneMapping;
      v.toneMapping = Zn;
      const Le = G.viewport;
      if (G.viewport !== void 0 && (G.viewport = void 0), u.setupLightsView(G), ee === !0 && J.setGlobalState(v.clippingPlanes, G), Es(E, H, G), T.updateMultisampleRenderTarget(te), T.updateRenderTargetMipmap(te), Be.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Ue = !1;
        for (let _e = 0, Xe = N.length; _e < Xe; _e++) {
          const it = N[_e], rt = it.object, It = it.geometry, Ye = it.material, xe = it.group;
          if (Ye.side === Xt && rt.layers.test(G.layers)) {
            const En = Ye.side;
            Ye.side = Lt, Ye.needsUpdate = !0, ko(rt, H, G, It, Ye, xe), Ye.side = En, Ye.needsUpdate = !0, Ue = !0;
          }
        }
        Ue === !0 && (T.updateMultisampleRenderTarget(te), T.updateRenderTargetMipmap(te));
      }
      v.setRenderTarget(ge), v.setClearColor(k, j), Le !== void 0 && (G.viewport = Le), v.toneMapping = be;
    }
    function Es(E, N, H) {
      const G = N.isScene === !0 ? N.overrideMaterial : null;
      for (let U = 0, te = E.length; U < te; U++) {
        const le = E[U], ge = le.object, be = le.geometry, Le = G === null ? le.material : G, Ue = le.group;
        ge.layers.test(H.layers) && ko(ge, N, H, be, Le, Ue);
      }
    }
    function ko(E, N, H, G, U, te) {
      E.onBeforeRender(v, N, H, G, U, te), E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), U.onBeforeRender(v, N, H, G, E, te), U.transparent === !0 && U.side === Xt && U.forceSinglePass === !1 ? (U.side = Lt, U.needsUpdate = !0, v.renderBufferDirect(H, N, G, U, E, te), U.side = bn, U.needsUpdate = !0, v.renderBufferDirect(H, N, G, U, E, te), U.side = Xt) : v.renderBufferDirect(H, N, G, U, E, te), E.onAfterRender(v, N, H, G, U, te);
    }
    function Ts(E, N, H) {
      N.isScene !== !0 && (N = nt);
      const G = Me.get(E), U = u.state.lights, te = u.state.shadowsArray, le = U.state.version, ge = me.getParameters(E, U.state, te, N, H), be = me.getProgramCacheKey(ge);
      let Le = G.programs;
      G.environment = E.isMeshStandardMaterial ? N.environment : null, G.fog = N.fog, G.envMap = (E.isMeshStandardMaterial ? B : x).get(E.envMap || G.environment), G.envMapRotation = G.environment !== null && E.envMap === null ? N.environmentRotation : E.envMapRotation, Le === void 0 && (E.addEventListener("dispose", Ne), Le = /* @__PURE__ */ new Map(), G.programs = Le);
      let Ue = Le.get(be);
      if (Ue !== void 0) {
        if (G.currentProgram === Ue && G.lightsStateVersion === le)
          return zo(E, ge), Ue;
      } else
        ge.uniforms = me.getUniforms(E), E.onBeforeCompile(ge, v), Ue = me.acquireProgram(ge, be), Le.set(be, Ue), G.uniforms = ge.uniforms;
      const _e = G.uniforms;
      return (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (_e.clippingPlanes = J.uniform), zo(E, ge), G.needsLights = Ah(E), G.lightsStateVersion = le, G.needsLights && (_e.ambientLightColor.value = U.state.ambient, _e.lightProbe.value = U.state.probe, _e.directionalLights.value = U.state.directional, _e.directionalLightShadows.value = U.state.directionalShadow, _e.spotLights.value = U.state.spot, _e.spotLightShadows.value = U.state.spotShadow, _e.rectAreaLights.value = U.state.rectArea, _e.ltc_1.value = U.state.rectAreaLTC1, _e.ltc_2.value = U.state.rectAreaLTC2, _e.pointLights.value = U.state.point, _e.pointLightShadows.value = U.state.pointShadow, _e.hemisphereLights.value = U.state.hemi, _e.directionalShadowMap.value = U.state.directionalShadowMap, _e.directionalShadowMatrix.value = U.state.directionalShadowMatrix, _e.spotShadowMap.value = U.state.spotShadowMap, _e.spotLightMatrix.value = U.state.spotLightMatrix, _e.spotLightMap.value = U.state.spotLightMap, _e.pointShadowMap.value = U.state.pointShadowMap, _e.pointShadowMatrix.value = U.state.pointShadowMatrix), G.currentProgram = Ue, G.uniformsList = null, Ue;
    }
    function Bo(E) {
      if (E.uniformsList === null) {
        const N = E.currentProgram.getUniforms();
        E.uniformsList = hr.seqWithValue(N.seq, E.uniforms);
      }
      return E.uniformsList;
    }
    function zo(E, N) {
      const H = Me.get(E);
      H.outputColorSpace = N.outputColorSpace, H.batching = N.batching, H.batchingColor = N.batchingColor, H.instancing = N.instancing, H.instancingColor = N.instancingColor, H.instancingMorph = N.instancingMorph, H.skinning = N.skinning, H.morphTargets = N.morphTargets, H.morphNormals = N.morphNormals, H.morphColors = N.morphColors, H.morphTargetsCount = N.morphTargetsCount, H.numClippingPlanes = N.numClippingPlanes, H.numIntersection = N.numClipIntersection, H.vertexAlphas = N.vertexAlphas, H.vertexTangents = N.vertexTangents, H.toneMapping = N.toneMapping;
    }
    function Th(E, N, H, G, U) {
      N.isScene !== !0 && (N = nt), T.resetTextureUnits();
      const te = N.fog, le = G.isMeshStandardMaterial ? N.environment : null, ge = C === null ? v.outputColorSpace : C.isXRRenderTarget === !0 ? C.texture.colorSpace : Rt, be = (G.isMeshStandardMaterial ? B : x).get(G.envMap || le), Le = G.vertexColors === !0 && !!H.attributes.color && H.attributes.color.itemSize === 4, Ue = !!H.attributes.tangent && (!!G.normalMap || G.anisotropy > 0), _e = !!H.morphAttributes.position, Xe = !!H.morphAttributes.normal, it = !!H.morphAttributes.color;
      let rt = Zn;
      G.toneMapped && (C === null || C.isXRRenderTarget === !0) && (rt = v.toneMapping);
      const It = H.morphAttributes.position || H.morphAttributes.normal || H.morphAttributes.color, Ye = It !== void 0 ? It.length : 0, xe = Me.get(G), En = u.state.lights;
      if (ee === !0 && (pe === !0 || E !== _)) {
        const Vt = E === _ && G.id === y;
        J.setState(G, E, Vt);
      }
      let Ke = !1;
      G.version === xe.__version ? (xe.needsLights && xe.lightsStateVersion !== En.state.version || xe.outputColorSpace !== ge || U.isBatchedMesh && xe.batching === !1 || !U.isBatchedMesh && xe.batching === !0 || U.isBatchedMesh && xe.batchingColor === !0 && U.colorTexture === null || U.isBatchedMesh && xe.batchingColor === !1 && U.colorTexture !== null || U.isInstancedMesh && xe.instancing === !1 || !U.isInstancedMesh && xe.instancing === !0 || U.isSkinnedMesh && xe.skinning === !1 || !U.isSkinnedMesh && xe.skinning === !0 || U.isInstancedMesh && xe.instancingColor === !0 && U.instanceColor === null || U.isInstancedMesh && xe.instancingColor === !1 && U.instanceColor !== null || U.isInstancedMesh && xe.instancingMorph === !0 && U.morphTexture === null || U.isInstancedMesh && xe.instancingMorph === !1 && U.morphTexture !== null || xe.envMap !== be || G.fog === !0 && xe.fog !== te || xe.numClippingPlanes !== void 0 && (xe.numClippingPlanes !== J.numPlanes || xe.numIntersection !== J.numIntersection) || xe.vertexAlphas !== Le || xe.vertexTangents !== Ue || xe.morphTargets !== _e || xe.morphNormals !== Xe || xe.morphColors !== it || xe.toneMapping !== rt || xe.morphTargetsCount !== Ye) && (Ke = !0) : (Ke = !0, xe.__version = G.version);
      let Zt = xe.currentProgram;
      Ke === !0 && (Zt = Ts(G, N, U));
      let ui = !1, Ot = !1, Zi = !1;
      const at = Zt.getUniforms(), hn = xe.uniforms;
      if (Se.useProgram(Zt.program) && (ui = !0, Ot = !0, Zi = !0), G.id !== y && (y = G.id, Ot = !0), ui || _ !== E) {
        Se.buffers.depth.getReversed() ? (ie.copy(E.projectionMatrix), Td(ie), wd(ie), at.setValue(I, "projectionMatrix", ie)) : at.setValue(I, "projectionMatrix", E.projectionMatrix), at.setValue(I, "viewMatrix", E.matrixWorldInverse);
        const Bn = at.map.cameraPosition;
        Bn !== void 0 && Bn.setValue(I, we.setFromMatrixPosition(E.matrixWorld)), ze.logarithmicDepthBuffer && at.setValue(
          I,
          "logDepthBufFC",
          2 / (Math.log(E.far + 1) / Math.LN2)
        ), (G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshLambertMaterial || G.isMeshBasicMaterial || G.isMeshStandardMaterial || G.isShaderMaterial) && at.setValue(I, "isOrthographic", E.isOrthographicCamera === !0), _ !== E && (_ = E, Ot = !0, Zi = !0);
      }
      if (U.isSkinnedMesh) {
        at.setOptional(I, U, "bindMatrix"), at.setOptional(I, U, "bindMatrixInverse");
        const Vt = U.skeleton;
        Vt && (Vt.boneTexture === null && Vt.computeBoneTexture(), at.setValue(I, "boneTexture", Vt.boneTexture, T));
      }
      U.isBatchedMesh && (at.setOptional(I, U, "batchingTexture"), at.setValue(I, "batchingTexture", U._matricesTexture, T), at.setOptional(I, U, "batchingIdTexture"), at.setValue(I, "batchingIdTexture", U._indirectTexture, T), at.setOptional(I, U, "batchingColorTexture"), U._colorsTexture !== null && at.setValue(I, "batchingColorTexture", U._colorsTexture, T));
      const Qi = H.morphAttributes;
      if ((Qi.position !== void 0 || Qi.normal !== void 0 || Qi.color !== void 0) && Ce.update(U, H, Zt), (Ot || xe.receiveShadow !== U.receiveShadow) && (xe.receiveShadow = U.receiveShadow, at.setValue(I, "receiveShadow", U.receiveShadow)), G.isMeshGouraudMaterial && G.envMap !== null && (hn.envMap.value = be, hn.flipEnvMap.value = be.isCubeTexture && be.isRenderTargetTexture === !1 ? -1 : 1), G.isMeshStandardMaterial && G.envMap === null && N.environment !== null && (hn.envMapIntensity.value = N.environmentIntensity), Ot && (at.setValue(I, "toneMappingExposure", v.toneMappingExposure), xe.needsLights && wh(hn, Zi), te && G.fog === !0 && re.refreshFogUniforms(hn, te), re.refreshMaterialUniforms(hn, G, V, Z, u.state.transmissionRenderTarget[E.id]), hr.upload(I, Bo(xe), hn, T)), G.isShaderMaterial && G.uniformsNeedUpdate === !0 && (hr.upload(I, Bo(xe), hn, T), G.uniformsNeedUpdate = !1), G.isSpriteMaterial && at.setValue(I, "center", U.center), at.setValue(I, "modelViewMatrix", U.modelViewMatrix), at.setValue(I, "normalMatrix", U.normalMatrix), at.setValue(I, "modelMatrix", U.matrixWorld), G.isShaderMaterial || G.isRawShaderMaterial) {
        const Vt = G.uniformsGroups;
        for (let Bn = 0, zn = Vt.length; Bn < zn; Bn++) {
          const Ho = Vt[Bn];
          L.update(Ho, Zt), L.bind(Ho, Zt);
        }
      }
      return Zt;
    }
    function wh(E, N) {
      E.ambientLightColor.needsUpdate = N, E.lightProbe.needsUpdate = N, E.directionalLights.needsUpdate = N, E.directionalLightShadows.needsUpdate = N, E.pointLights.needsUpdate = N, E.pointLightShadows.needsUpdate = N, E.spotLights.needsUpdate = N, E.spotLightShadows.needsUpdate = N, E.rectAreaLights.needsUpdate = N, E.hemisphereLights.needsUpdate = N;
    }
    function Ah(E) {
      return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return R;
    }, this.getActiveMipmapLevel = function() {
      return A;
    }, this.getRenderTarget = function() {
      return C;
    }, this.setRenderTargetTextures = function(E, N, H) {
      Me.get(E.texture).__webglTexture = N, Me.get(E.depthTexture).__webglTexture = H;
      const G = Me.get(E);
      G.__hasExternalTextures = !0, G.__autoAllocateDepthBuffer = H === void 0, G.__autoAllocateDepthBuffer || Be.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), G.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(E, N) {
      const H = Me.get(E);
      H.__webglFramebuffer = N, H.__useDefaultFramebuffer = N === void 0;
    }, this.setRenderTarget = function(E, N = 0, H = 0) {
      C = E, R = N, A = H;
      let G = !0, U = null, te = !1, le = !1;
      if (E) {
        const be = Me.get(E);
        if (be.__useDefaultFramebuffer !== void 0)
          Se.bindFramebuffer(I.FRAMEBUFFER, null), G = !1;
        else if (be.__webglFramebuffer === void 0)
          T.setupRenderTarget(E);
        else if (be.__hasExternalTextures)
          T.rebindTextures(E, Me.get(E.texture).__webglTexture, Me.get(E.depthTexture).__webglTexture);
        else if (E.depthBuffer) {
          const _e = E.depthTexture;
          if (be.__boundDepthTexture !== _e) {
            if (_e !== null && Me.has(_e) && (E.width !== _e.image.width || E.height !== _e.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            T.setupDepthRenderbuffer(E);
          }
        }
        const Le = E.texture;
        (Le.isData3DTexture || Le.isDataArrayTexture || Le.isCompressedArrayTexture) && (le = !0);
        const Ue = Me.get(E).__webglFramebuffer;
        E.isWebGLCubeRenderTarget ? (Array.isArray(Ue[N]) ? U = Ue[N][H] : U = Ue[N], te = !0) : E.samples > 0 && T.useMultisampledRTT(E) === !1 ? U = Me.get(E).__webglMultisampledFramebuffer : Array.isArray(Ue) ? U = Ue[H] : U = Ue, w.copy(E.viewport), O.copy(E.scissor), F = E.scissorTest;
      } else
        w.copy(fe).multiplyScalar(V).floor(), O.copy(ye).multiplyScalar(V).floor(), F = Ie;
      if (Se.bindFramebuffer(I.FRAMEBUFFER, U) && G && Se.drawBuffers(E, U), Se.viewport(w), Se.scissor(O), Se.setScissorTest(F), te) {
        const be = Me.get(E.texture);
        I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_CUBE_MAP_POSITIVE_X + N, be.__webglTexture, H);
      } else if (le) {
        const be = Me.get(E.texture), Le = N || 0;
        I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, be.__webglTexture, H || 0, Le);
      }
      y = -1;
    }, this.readRenderTargetPixels = function(E, N, H, G, U, te, le) {
      if (!(E && E.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ge = Me.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && le !== void 0 && (ge = ge[le]), ge) {
        Se.bindFramebuffer(I.FRAMEBUFFER, ge);
        try {
          const be = E.texture, Le = be.format, Ue = be.type;
          if (!ze.textureFormatReadable(Le)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!ze.textureTypeReadable(Ue)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          N >= 0 && N <= E.width - G && H >= 0 && H <= E.height - U && I.readPixels(N, H, G, U, De.convert(Le), De.convert(Ue), te);
        } finally {
          const be = C !== null ? Me.get(C).__webglFramebuffer : null;
          Se.bindFramebuffer(I.FRAMEBUFFER, be);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(E, N, H, G, U, te, le) {
      if (!(E && E.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ge = Me.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && le !== void 0 && (ge = ge[le]), ge) {
        const be = E.texture, Le = be.format, Ue = be.type;
        if (!ze.textureFormatReadable(Le))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!ze.textureTypeReadable(Ue))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (N >= 0 && N <= E.width - G && H >= 0 && H <= E.height - U) {
          Se.bindFramebuffer(I.FRAMEBUFFER, ge);
          const _e = I.createBuffer();
          I.bindBuffer(I.PIXEL_PACK_BUFFER, _e), I.bufferData(I.PIXEL_PACK_BUFFER, te.byteLength, I.STREAM_READ), I.readPixels(N, H, G, U, De.convert(Le), De.convert(Ue), 0);
          const Xe = C !== null ? Me.get(C).__webglFramebuffer : null;
          Se.bindFramebuffer(I.FRAMEBUFFER, Xe);
          const it = I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return I.flush(), await Ed(I, it, 4), I.bindBuffer(I.PIXEL_PACK_BUFFER, _e), I.getBufferSubData(I.PIXEL_PACK_BUFFER, 0, te), I.deleteBuffer(_e), I.deleteSync(it), te;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(E, N = null, H = 0) {
      E.isTexture !== !0 && (ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."), N = arguments[0] || null, E = arguments[1]);
      const G = Math.pow(2, -H), U = Math.floor(E.image.width * G), te = Math.floor(E.image.height * G), le = N !== null ? N.x : 0, ge = N !== null ? N.y : 0;
      T.setTexture2D(E, 0), I.copyTexSubImage2D(I.TEXTURE_2D, H, 0, 0, le, ge, U, te), Se.unbindTexture();
    }, this.copyTextureToTexture = function(E, N, H = null, G = null, U = 0) {
      E.isTexture !== !0 && (ds("WebGLRenderer: copyTextureToTexture function signature has changed."), G = arguments[0] || null, E = arguments[1], N = arguments[2], U = arguments[3] || 0, H = null);
      let te, le, ge, be, Le, Ue, _e, Xe, it;
      const rt = E.isCompressedTexture ? E.mipmaps[U] : E.image;
      H !== null ? (te = H.max.x - H.min.x, le = H.max.y - H.min.y, ge = H.isBox3 ? H.max.z - H.min.z : 1, be = H.min.x, Le = H.min.y, Ue = H.isBox3 ? H.min.z : 0) : (te = rt.width, le = rt.height, ge = rt.depth || 1, be = 0, Le = 0, Ue = 0), G !== null ? (_e = G.x, Xe = G.y, it = G.z) : (_e = 0, Xe = 0, it = 0);
      const It = De.convert(N.format), Ye = De.convert(N.type);
      let xe;
      N.isData3DTexture ? (T.setTexture3D(N, 0), xe = I.TEXTURE_3D) : N.isDataArrayTexture || N.isCompressedArrayTexture ? (T.setTexture2DArray(N, 0), xe = I.TEXTURE_2D_ARRAY) : (T.setTexture2D(N, 0), xe = I.TEXTURE_2D), I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, N.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, N.unpackAlignment);
      const En = I.getParameter(I.UNPACK_ROW_LENGTH), Ke = I.getParameter(I.UNPACK_IMAGE_HEIGHT), Zt = I.getParameter(I.UNPACK_SKIP_PIXELS), ui = I.getParameter(I.UNPACK_SKIP_ROWS), Ot = I.getParameter(I.UNPACK_SKIP_IMAGES);
      I.pixelStorei(I.UNPACK_ROW_LENGTH, rt.width), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, rt.height), I.pixelStorei(I.UNPACK_SKIP_PIXELS, be), I.pixelStorei(I.UNPACK_SKIP_ROWS, Le), I.pixelStorei(I.UNPACK_SKIP_IMAGES, Ue);
      const Zi = E.isDataArrayTexture || E.isData3DTexture, at = N.isDataArrayTexture || N.isData3DTexture;
      if (E.isRenderTargetTexture || E.isDepthTexture) {
        const hn = Me.get(E), Qi = Me.get(N), Vt = Me.get(hn.__renderTarget), Bn = Me.get(Qi.__renderTarget);
        Se.bindFramebuffer(I.READ_FRAMEBUFFER, Vt.__webglFramebuffer), Se.bindFramebuffer(I.DRAW_FRAMEBUFFER, Bn.__webglFramebuffer);
        for (let zn = 0; zn < ge; zn++)
          Zi && I.framebufferTextureLayer(I.READ_FRAMEBUFFER, I.COLOR_ATTACHMENT0, Me.get(E).__webglTexture, U, Ue + zn), E.isDepthTexture ? (at && I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER, I.COLOR_ATTACHMENT0, Me.get(N).__webglTexture, U, it + zn), I.blitFramebuffer(be, Le, te, le, _e, Xe, te, le, I.DEPTH_BUFFER_BIT, I.NEAREST)) : at ? I.copyTexSubImage3D(xe, U, _e, Xe, it + zn, be, Le, te, le) : I.copyTexSubImage2D(xe, U, _e, Xe, it + zn, be, Le, te, le);
        Se.bindFramebuffer(I.READ_FRAMEBUFFER, null), Se.bindFramebuffer(I.DRAW_FRAMEBUFFER, null);
      } else
        at ? E.isDataTexture || E.isData3DTexture ? I.texSubImage3D(xe, U, _e, Xe, it, te, le, ge, It, Ye, rt.data) : N.isCompressedArrayTexture ? I.compressedTexSubImage3D(xe, U, _e, Xe, it, te, le, ge, It, rt.data) : I.texSubImage3D(xe, U, _e, Xe, it, te, le, ge, It, Ye, rt) : E.isDataTexture ? I.texSubImage2D(I.TEXTURE_2D, U, _e, Xe, te, le, It, Ye, rt.data) : E.isCompressedTexture ? I.compressedTexSubImage2D(I.TEXTURE_2D, U, _e, Xe, rt.width, rt.height, It, rt.data) : I.texSubImage2D(I.TEXTURE_2D, U, _e, Xe, te, le, It, Ye, rt);
      I.pixelStorei(I.UNPACK_ROW_LENGTH, En), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, Ke), I.pixelStorei(I.UNPACK_SKIP_PIXELS, Zt), I.pixelStorei(I.UNPACK_SKIP_ROWS, ui), I.pixelStorei(I.UNPACK_SKIP_IMAGES, Ot), U === 0 && N.generateMipmaps && I.generateMipmap(xe), Se.unbindTexture();
    }, this.copyTextureToTexture3D = function(E, N, H = null, G = null, U = 0) {
      return E.isTexture !== !0 && (ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."), H = arguments[0] || null, G = arguments[1] || null, E = arguments[2], N = arguments[3], U = arguments[4] || 0), ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(E, N, H, G, U);
    }, this.initRenderTarget = function(E) {
      Me.get(E).__webglFramebuffer === void 0 && T.setupRenderTarget(E);
    }, this.initTexture = function(E) {
      E.isCubeTexture ? T.setTextureCube(E, 0) : E.isData3DTexture ? T.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? T.setTexture2DArray(E, 0) : T.setTexture2D(E, 0), Se.unbindTexture();
    }, this.resetState = function() {
      R = 0, A = 0, C = null, Se.reset(), je.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Un;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorspace = We._getDrawingBufferColorSpace(e), t.unpackColorSpace = We._getUnpackColorSpace();
  }
}
class lh extends ot {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new yn(), this.environmentIntensity = 1, this.environmentRotation = new yn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class Bg {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = eo, this.updateRanges = [], this.version = 0, this.uuid = rn();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = rn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = rn()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const Ct = /* @__PURE__ */ new D();
class So {
  constructor(e, t, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      Ct.fromBufferAttribute(this, t), Ct.applyMatrix4(e), this.setXYZ(t, Ct.x, Ct.y, Ct.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ct.fromBufferAttribute(this, t), Ct.applyNormalMatrix(e), this.setXYZ(t, Ct.x, Ct.y, Ct.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ct.fromBufferAttribute(this, t), Ct.transformDirection(e), this.setXYZ(t, Ct.x, Ct.y, Ct.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = nn(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Je(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = nn(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Je(t, this.array), n = Je(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Je(t, this.array), n = Je(n, this.array), i = Je(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Je(t, this.array), n = Je(n, this.array), i = Je(i, this.array), r = Je(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return new At(new this.array.constructor(t), this.itemSize, this.normalized);
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new So(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          t.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    } else
      return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
const Gc = /* @__PURE__ */ new D(), Vc = /* @__PURE__ */ new qe(), Wc = /* @__PURE__ */ new qe(), zg = /* @__PURE__ */ new D(), jc = /* @__PURE__ */ new Re(), qs = /* @__PURE__ */ new D(), na = /* @__PURE__ */ new Kt(), Xc = /* @__PURE__ */ new Re(), ia = /* @__PURE__ */ new ji();
class Hg extends vt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = jo, this.bindMatrix = new Re(), this.bindMatrixInverse = new Re(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Yt()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, qs), this.boundingBox.expandByPoint(qs);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Kt()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, qs), this.boundingSphere.expandByPoint(qs);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), na.copy(this.boundingSphere), na.applyMatrix4(i), e.ray.intersectsSphere(na) !== !1 && (Xc.copy(i).invert(), ia.copy(e.ray).applyMatrix4(Xc), !(this.boundingBox !== null && ia.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, ia)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new qe(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === jo ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Yh ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Vc.fromBufferAttribute(i.attributes.skinIndex, e), Wc.fromBufferAttribute(i.attributes.skinWeight, e), Gc.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = Wc.getComponent(r);
      if (a !== 0) {
        const o = Vc.getComponent(r);
        jc.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(zg.copy(Gc).applyMatrix4(jc), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class hh extends ot {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class Ms extends ut {
  constructor(e = null, t = 1, n = 1, i, r, a, o, c, l = yt, h = yt, d, f) {
    super(null, a, o, c, l, h, i, r, d, f), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const qc = /* @__PURE__ */ new Re(), Gg = /* @__PURE__ */ new Re();
class Eo {
  constructor(e = [], t = []) {
    this.uuid = rn(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0)
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Re());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Re();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let r = 0, a = e.length; r < a; r++) {
      const o = e[r] ? e[r].matrixWorld : Gg;
      qc.multiplyMatrices(o, t[r]), qc.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Eo(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Ms(t, e, e, Gt, Ut);
    return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let a = t[r];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), a = new hh()), this.bones.push(a), this.boneInverses.push(new Re().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class no extends At {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}
const Ai = /* @__PURE__ */ new Re(), Yc = /* @__PURE__ */ new Re(), Ys = [], Kc = /* @__PURE__ */ new Yt(), Vg = /* @__PURE__ */ new Re(), is = /* @__PURE__ */ new vt(), ss = /* @__PURE__ */ new Kt();
class Wg extends vt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new no(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, Vg);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Yt()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ai), Kc.copy(e.boundingBox).applyMatrix4(Ai), this.boundingBox.union(Kc);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Kt()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ai), ss.copy(e.boundingSphere).applyMatrix4(Ai), this.boundingSphere.union(ss);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, r = n.length + 1, a = e * r + 1;
    for (let o = 0; o < n.length; o++)
      n[o] = i[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (is.geometry = this.geometry, is.material = this.material, is.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ss.copy(this.boundingSphere), ss.applyMatrix4(n), e.ray.intersectsSphere(ss) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Ai), Yc.multiplyMatrices(n, Ai), is.matrixWorld = Yc, is.raycast(e, Ys);
        for (let a = 0, o = Ys.length; a < o; a++) {
          const c = Ys[a];
          c.instanceId = r, c.object = this, t.push(c);
        }
        Ys.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new no(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Ms(new Float32Array(i * this.count), i, this.count, po, Ut));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let l = 0; l < n.length; l++)
      a += n[l];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, c = i * e;
    r[c] = o, r.set(n, c + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
class dh extends an {
  static get type() {
    return "LineBasicMaterial";
  }
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.color = new Te(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const mr = /* @__PURE__ */ new D(), gr = /* @__PURE__ */ new D(), $c = /* @__PURE__ */ new Re(), rs = /* @__PURE__ */ new ji(), Ks = /* @__PURE__ */ new Kt(), sa = /* @__PURE__ */ new D(), Zc = /* @__PURE__ */ new D();
class To extends ot {
  constructor(e = new Ft(), t = new dh()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        mr.fromBufferAttribute(t, i - 1), gr.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += mr.distanceTo(gr);
      e.setAttribute("lineDistance", new on(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ks.copy(n.boundingSphere), Ks.applyMatrix4(i), Ks.radius += r, e.ray.intersectsSphere(Ks) === !1) return;
    $c.copy(i).invert(), rs.copy(e.ray).applyMatrix4($c);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = this.isLineSegments ? 2 : 1, h = n.index, f = n.attributes.position;
    if (h !== null) {
      const p = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let b = p, m = g - 1; b < m; b += l) {
        const u = h.getX(b), M = h.getX(b + 1), S = $s(this, e, rs, c, u, M);
        S && t.push(S);
      }
      if (this.isLineLoop) {
        const b = h.getX(g - 1), m = h.getX(p), u = $s(this, e, rs, c, b, m);
        u && t.push(u);
      }
    } else {
      const p = Math.max(0, a.start), g = Math.min(f.count, a.start + a.count);
      for (let b = p, m = g - 1; b < m; b += l) {
        const u = $s(this, e, rs, c, b, b + 1);
        u && t.push(u);
      }
      if (this.isLineLoop) {
        const b = $s(this, e, rs, c, g - 1, p);
        b && t.push(b);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function $s(s, e, t, n, i, r) {
  const a = s.geometry.attributes.position;
  if (mr.fromBufferAttribute(a, i), gr.fromBufferAttribute(a, r), t.distanceSqToSegment(mr, gr, sa, Zc) > n) return;
  sa.applyMatrix4(s.matrixWorld);
  const c = e.ray.origin.distanceTo(sa);
  if (!(c < e.near || c > e.far))
    return {
      distance: c,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Zc.clone().applyMatrix4(s.matrixWorld),
      index: i,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: s
    };
}
const Qc = /* @__PURE__ */ new D(), Jc = /* @__PURE__ */ new D();
class jg extends To {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        Qc.fromBufferAttribute(t, i), Jc.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Qc.distanceTo(Jc);
      e.setAttribute("lineDistance", new on(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Xg extends To {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class uh extends an {
  static get type() {
    return "PointsMaterial";
  }
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.color = new Te(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const el = /* @__PURE__ */ new Re(), io = /* @__PURE__ */ new ji(), Zs = /* @__PURE__ */ new Kt(), Qs = /* @__PURE__ */ new D();
class qg extends ot {
  constructor(e = new Ft(), t = new uh()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Zs.copy(n.boundingSphere), Zs.applyMatrix4(i), Zs.radius += r, e.ray.intersectsSphere(Zs) === !1) return;
    el.copy(i).invert(), io.copy(e.ray).applyMatrix4(el);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, d = n.attributes.position;
    if (l !== null) {
      const f = Math.max(0, a.start), p = Math.min(l.count, a.start + a.count);
      for (let g = f, b = p; g < b; g++) {
        const m = l.getX(g);
        Qs.fromBufferAttribute(d, m), tl(Qs, m, c, i, e, t, this);
      }
    } else {
      const f = Math.max(0, a.start), p = Math.min(d.count, a.start + a.count);
      for (let g = f, b = p; g < b; g++)
        Qs.fromBufferAttribute(d, g), tl(Qs, g, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function tl(s, e, t, n, i, r, a) {
  const o = io.distanceSqToPoint(s);
  if (o < t) {
    const c = new D();
    io.closestPointToPoint(s, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    r.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
class Yg extends ut {
  constructor(e, t, n, i, r, a, o, c, l) {
    super(e, t, n, i, r, a, o, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class Kg extends wt {
  static get type() {
    return "RawShaderMaterial";
  }
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0;
  }
}
class Tr extends an {
  static get type() {
    return "MeshStandardMaterial";
  }
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.color = new Te(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Te(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = _o, this.normalScale = new Ee(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new yn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class ln extends Tr {
  static get type() {
    return "MeshPhysicalMaterial";
  }
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Ee(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return bt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Te(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Te(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Te(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class $g extends an {
  static get type() {
    return "MeshNormalMaterial";
  }
  constructor(e) {
    super(), this.isMeshNormalMaterial = !0, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = _o, this.normalScale = new Ee(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
function Js(s, e, t) {
  return !s || // let 'undefined' and 'null' pass
  !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s);
}
function Zg(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function Qg(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function nl(s, e, t) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = t[r] * e;
    for (let c = 0; c !== e; ++c)
      i[a++] = s[o + c];
  }
  return i;
}
function fh(s, e, t, n) {
  let i = 1, r = s[0];
  for (; r !== void 0 && r[n] === void 0; )
    r = s[i++];
  if (r === void 0) return;
  let a = r[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        a = r[n], a !== void 0 && (e.push(r.time), t.push.apply(t, a)), r = s[i++];
      while (r !== void 0);
    else if (a.toArray !== void 0)
      do
        a = r[n], a !== void 0 && (e.push(r.time), a.toArray(t, t.length)), r = s[i++];
      while (r !== void 0);
    else
      do
        a = r[n], a !== void 0 && (e.push(r.time), t.push(a)), r = s[i++];
      while (r !== void 0);
}
class Ss {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (r = i, i = t[++n], e < i)
                break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= r)) {
            const o = t[1];
            e < o && (n = 2, r = o);
            for (let c = n - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c) break;
              if (i = r, r = t[--n - 1], e >= r)
                break e;
            }
            a = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (i = t[n], r = t[n - 1], r === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let a = 0; a !== i; ++a)
      t[a] = n[r + a];
    return t;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Jg extends Ss {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Xo,
      endingEnd: Xo
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, a = e + 1, o = i[r], c = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case qo:
          r = e, o = 2 * t - n;
          break;
        case Yo:
          r = i.length - 2, o = t + i[r] - i[r + 1];
          break;
        default:
          r = e, o = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case qo:
          a = e, c = 2 * n - t;
          break;
        case Yo:
          a = 1, c = n + i[1] - i[0];
          break;
        default:
          a = e - 1, c = t;
      }
    const l = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = l / (t - o), this._weightNext = l / (c - n), this._offsetPrev = r * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, h = this._offsetPrev, d = this._offsetNext, f = this._weightPrev, p = this._weightNext, g = (n - t) / (i - t), b = g * g, m = b * g, u = -f * m + 2 * f * b - f * g, M = (1 + f) * m + (-1.5 - 2 * f) * b + (-0.5 + f) * g + 1, S = (-1 - p) * m + (1.5 + p) * b + 0.5 * g, v = p * m - p * b;
    for (let P = 0; P !== o; ++P)
      r[P] = u * a[h + P] + M * a[l + P] + S * a[c + P] + v * a[d + P];
    return r;
  }
}
class eb extends Ss {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, l = c - o, h = (n - t) / (i - t), d = 1 - h;
    for (let f = 0; f !== o; ++f)
      r[f] = a[l + f] * d + a[c + f] * h;
    return r;
  }
}
class tb extends Ss {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Mn {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Js(t, this.TimeBufferType), this.values = Js(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON)
      n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Js(e.times, Array),
        values: Js(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new tb(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new eb(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Jg(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case _s:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case vs:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Rr:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return _s;
      case this.InterpolantFactoryMethodLinear:
        return vs;
      case this.InterpolantFactoryMethodSmooth:
        return Rr;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] += e;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n)
        t[n] *= e;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(e, t) {
    const n = this.times, i = n.length;
    let r = 0, a = i - 1;
    for (; r !== i && n[r] < e; )
      ++r;
    for (; a !== -1 && n[a] > t; )
      --a;
    if (++a, r !== 0 || a !== i) {
      r >= a && (a = Math.max(a, 1), r = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(r, a), this.values = this.values.slice(r * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
    let a = null;
    for (let o = 0; o !== r; o++) {
      const c = n[o];
      if (typeof c == "number" && isNaN(c)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, c), e = !1;
        break;
      }
      if (a !== null && a > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a), e = !1;
        break;
      }
      a = c;
    }
    if (i !== void 0 && Zg(i))
      for (let o = 0, c = i.length; o !== c; ++o) {
        const l = i[o];
        if (isNaN(l)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l), e = !1;
          break;
        }
      }
    return e;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Rr, r = e.length - 1;
    let a = 1;
    for (let o = 1; o < r; ++o) {
      let c = !1;
      const l = e[o], h = e[o + 1];
      if (l !== h && (o !== 1 || l !== e[0]))
        if (i)
          c = !0;
        else {
          const d = o * n, f = d - n, p = d + n;
          for (let g = 0; g !== n; ++g) {
            const b = t[d + g];
            if (b !== t[f + g] || b !== t[p + g]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (o !== a) {
          e[a] = e[o];
          const d = o * n, f = a * n;
          for (let p = 0; p !== n; ++p)
            t[f + p] = t[d + p];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let o = r * n, c = a * n, l = 0; l !== n; ++l)
        t[c + l] = t[o + l];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Mn.prototype.TimeBufferType = Float32Array;
Mn.prototype.ValueBufferType = Float32Array;
Mn.prototype.DefaultInterpolation = vs;
class Yi extends Mn {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Yi.prototype.ValueTypeName = "bool";
Yi.prototype.ValueBufferType = Array;
Yi.prototype.DefaultInterpolation = _s;
Yi.prototype.InterpolantFactoryMethodLinear = void 0;
Yi.prototype.InterpolantFactoryMethodSmooth = void 0;
class ph extends Mn {
}
ph.prototype.ValueTypeName = "color";
class Gi extends Mn {
}
Gi.prototype.ValueTypeName = "number";
class nb extends Ss {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = (n - t) / (i - t);
    let l = e * o;
    for (let h = l + o; l !== h; l += 4)
      xn.slerpFlat(r, 0, a, l - o, a, l, c);
    return r;
  }
}
class Vi extends Mn {
  InterpolantFactoryMethodLinear(e) {
    return new nb(this.times, this.values, this.getValueSize(), e);
  }
}
Vi.prototype.ValueTypeName = "quaternion";
Vi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ki extends Mn {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Ki.prototype.ValueTypeName = "string";
Ki.prototype.ValueBufferType = Array;
Ki.prototype.DefaultInterpolation = _s;
Ki.prototype.InterpolantFactoryMethodLinear = void 0;
Ki.prototype.InterpolantFactoryMethodSmooth = void 0;
class Wi extends Mn {
}
Wi.prototype.ValueTypeName = "vector";
class ib {
  constructor(e = "", t = -1, n = [], i = Kh) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = rn(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      t.push(rb(n[a]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode
    };
    for (let r = 0, a = n.length; r !== a; ++r)
      t.push(Mn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, a = [];
    for (let o = 0; o < r; o++) {
      let c = [], l = [];
      c.push(
        (o + r - 1) % r,
        o,
        (o + 1) % r
      ), l.push(0, 1, 0);
      const h = Qg(c);
      c = nl(c, 1, h), l = nl(l, 1, h), !i && c[0] === 0 && (c.push(r), l.push(l[0])), a.push(
        new Gi(
          ".morphTargetInfluences[" + t[o].name + "]",
          c,
          l
        ).scale(1 / n)
      );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === t)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], h = l.name.match(r);
      if (h && h.length > 1) {
        const d = h[1];
        let f = i[d];
        f || (i[d] = f = []), f.push(l);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(e, t) {
    if (!e)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(d, f, p, g, b) {
      if (p.length !== 0) {
        const m = [], u = [];
        fh(p, m, u, g), m.length !== 0 && b.push(new d(f, m, u));
      }
    }, i = [], r = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let d = 0; d < l.length; d++) {
      const f = l[d].keys;
      if (!(!f || f.length === 0))
        if (f[0].morphTargets) {
          const p = {};
          let g;
          for (g = 0; g < f.length; g++)
            if (f[g].morphTargets)
              for (let b = 0; b < f[g].morphTargets.length; b++)
                p[f[g].morphTargets[b]] = -1;
          for (const b in p) {
            const m = [], u = [];
            for (let M = 0; M !== f[g].morphTargets.length; ++M) {
              const S = f[g];
              m.push(S.time), u.push(S.morphTarget === b ? 1 : 0);
            }
            i.push(new Gi(".morphTargetInfluence[" + b + "]", m, u));
          }
          c = p.length * a;
        } else {
          const p = ".bones[" + t[d].name + "]";
          n(
            Wi,
            p + ".position",
            f,
            "pos",
            i
          ), n(
            Vi,
            p + ".quaternion",
            f,
            "rot",
            i
          ), n(
            Wi,
            p + ".scale",
            f,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(r, c, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++)
      e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function sb(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Gi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Wi;
    case "color":
      return ph;
    case "quaternion":
      return Vi;
    case "bool":
    case "boolean":
      return Yi;
    case "string":
      return Ki;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function rb(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = sb(s.type);
  if (s.times === void 0) {
    const t = [], n = [];
    fh(s.keys, t, n, "value"), s.times = t, s.values = n;
  }
  return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation);
}
const $n = {
  enabled: !1,
  files: {},
  add: function(s, e) {
    this.enabled !== !1 && (this.files[s] = e);
  },
  get: function(s) {
    if (this.enabled !== !1)
      return this.files[s];
  },
  remove: function(s) {
    delete this.files[s];
  },
  clear: function() {
    this.files = {};
  }
};
class ab {
  constructor(e, t, n) {
    const i = this;
    let r = !1, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, r === !1 && i.onStart !== void 0 && i.onStart(h, a, o), r = !0;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, d) {
      return l.push(h, d), this;
    }, this.removeHandler = function(h) {
      const d = l.indexOf(h);
      return d !== -1 && l.splice(d, 2), this;
    }, this.getHandler = function(h) {
      for (let d = 0, f = l.length; d < f; d += 2) {
        const p = l[d], g = l[d + 1];
        if (p.global && (p.lastIndex = 0), p.test(h))
          return g;
      }
      return null;
    };
  }
}
const ob = /* @__PURE__ */ new ab();
class di {
  constructor(e) {
    this.manager = e !== void 0 ? e : ob, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
di.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Pn = {};
class cb extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class wo extends di {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = $n.get(e);
    if (r !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0), r;
    if (Pn[e] !== void 0) {
      Pn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Pn[e] = [], Pn[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const a = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, c = this.responseType;
    fetch(a).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const h = Pn[e], d = l.body.getReader(), f = l.headers.get("X-File-Size") || l.headers.get("Content-Length"), p = f ? parseInt(f) : 0, g = p !== 0;
        let b = 0;
        const m = new ReadableStream({
          start(u) {
            M();
            function M() {
              d.read().then(({ done: S, value: v }) => {
                if (S)
                  u.close();
                else {
                  b += v.byteLength;
                  const P = new ProgressEvent("progress", { lengthComputable: g, loaded: b, total: p });
                  for (let R = 0, A = h.length; R < A; R++) {
                    const C = h[R];
                    C.onProgress && C.onProgress(P);
                  }
                  u.enqueue(v), M();
                }
              }, (S) => {
                u.error(S);
              });
            }
          }
        });
        return new Response(m);
      } else
        throw new cb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return l.json();
        default:
          if (o === void 0)
            return l.text();
          {
            const d = /charset="?([^;"\s]*)"?/i.exec(o), f = d && d[1] ? d[1].toLowerCase() : void 0, p = new TextDecoder(f);
            return l.arrayBuffer().then((g) => p.decode(g));
          }
      }
    }).then((l) => {
      $n.add(e, l);
      const h = Pn[e];
      delete Pn[e];
      for (let d = 0, f = h.length; d < f; d++) {
        const p = h[d];
        p.onLoad && p.onLoad(l);
      }
    }).catch((l) => {
      const h = Pn[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete Pn[e];
      for (let d = 0, f = h.length; d < f; d++) {
        const p = h[d];
        p.onError && p.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class lb extends di {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = $n.get(e);
    if (a !== void 0)
      return r.manager.itemStart(e), setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    const o = xs("img");
    function c() {
      h(), $n.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function l(d) {
      h(), i && i(d), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o;
  }
}
class hb extends di {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = this, a = new Ms(), o = new wo(this.manager);
    return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(r.withCredentials), o.load(e, function(c) {
      let l;
      try {
        l = r.parse(c);
      } catch (h) {
        if (i !== void 0)
          i(h);
        else {
          console.error(h);
          return;
        }
      }
      l.image !== void 0 ? a.image = l.image : l.data !== void 0 && (a.image.width = l.width, a.image.height = l.height, a.image.data = l.data), a.wrapS = l.wrapS !== void 0 ? l.wrapS : pn, a.wrapT = l.wrapT !== void 0 ? l.wrapT : pn, a.magFilter = l.magFilter !== void 0 ? l.magFilter : _t, a.minFilter = l.minFilter !== void 0 ? l.minFilter : _t, a.anisotropy = l.anisotropy !== void 0 ? l.anisotropy : 1, l.colorSpace !== void 0 && (a.colorSpace = l.colorSpace), l.flipY !== void 0 && (a.flipY = l.flipY), l.format !== void 0 && (a.format = l.format), l.type !== void 0 && (a.type = l.type), l.mipmaps !== void 0 && (a.mipmaps = l.mipmaps, a.minFilter = mn), l.mipmapCount === 1 && (a.minFilter = _t), l.generateMipmaps !== void 0 && (a.generateMipmaps = l.generateMipmaps), a.needsUpdate = !0, t && t(a, l);
    }, n, i), a;
  }
}
class db extends di {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new ut(), a = new lb(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      r.image = o, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class Ao extends ot {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Te(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
const ra = /* @__PURE__ */ new Re(), il = /* @__PURE__ */ new D(), sl = /* @__PURE__ */ new D();
class Ro {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ee(512, 512), this.map = null, this.mapPass = null, this.matrix = new Re(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Mr(), this._frameExtents = new Ee(1, 1), this._viewportCount = 1, this._viewports = [
      new qe(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    il.setFromMatrixPosition(e.matrixWorld), t.position.copy(il), sl.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(sl), t.updateMatrixWorld(), ra.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ra), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(ra);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
class ub extends Ro {
  constructor() {
    super(new Dt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = zi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class fb extends Ao {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(ot.DEFAULT_UP), this.updateMatrix(), this.target = new ot(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = a, this.map = null, this.shadow = new ub();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const rl = /* @__PURE__ */ new Re(), as = /* @__PURE__ */ new D(), aa = /* @__PURE__ */ new D();
class pb extends Ro {
  constructor() {
    super(new Dt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Ee(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new qe(2, 1, 1, 1),
      // negative X
      new qe(0, 1, 1, 1),
      // positive Z
      new qe(3, 1, 1, 1),
      // negative Z
      new qe(1, 1, 1, 1),
      // positive Y
      new qe(3, 0, 1, 1),
      // negative Y
      new qe(1, 0, 1, 1)
    ], this._cubeDirections = [
      new D(1, 0, 0),
      new D(-1, 0, 0),
      new D(0, 0, 1),
      new D(0, 0, -1),
      new D(0, 1, 0),
      new D(0, -1, 0)
    ], this._cubeUps = [
      new D(0, 1, 0),
      new D(0, 1, 0),
      new D(0, 1, 0),
      new D(0, 1, 0),
      new D(0, 0, 1),
      new D(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), as.setFromMatrixPosition(e.matrixWorld), n.position.copy(as), aa.copy(n.position), aa.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(aa), n.updateMatrixWorld(), i.makeTranslation(-as.x, -as.y, -as.z), rl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(rl);
  }
}
class mb extends Ao {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new pb();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class gb extends Ro {
  constructor() {
    super(new Sr(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class so extends Ao {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(ot.DEFAULT_UP), this.updateMatrix(), this.target = new ot(), this.shadow = new gb();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class gs {
  static decodeText(e) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u")
      return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++)
      t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class bb extends di {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = $n.get(e);
    if (a !== void 0) {
      if (r.manager.itemStart(e), a.then) {
        a.then((l) => {
          t && t(l), r.manager.itemEnd(e);
        }).catch((l) => {
          i && i(l);
        });
        return;
      }
      return setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const c = fetch(e, o).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      return $n.add(e, l), t && t(l), r.manager.itemEnd(e), l;
    }).catch(function(l) {
      i && i(l), $n.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    $n.add(e, c), r.manager.itemStart(e);
  }
}
class mh {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = al(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = al();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function al() {
  return performance.now();
}
const Co = "\\[\\]\\.:\\/", _b = new RegExp("[" + Co + "]", "g"), Po = "[^" + Co + "]", vb = "[^" + Co.replace("\\.", "") + "]", xb = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Po), yb = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", vb), Mb = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Po), Sb = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Po), Eb = new RegExp(
  "^" + xb + yb + Mb + Sb + "$"
), Tb = ["material", "materials", "bones", "map"];
class wb {
  constructor(e, t, n) {
    const i = n || et.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class et {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || et.parseTrackName(t), this.node = et.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new et.Composite(e, t, n) : new et(e, t, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(_b, "");
  }
  static parseTrackName(e) {
    const t = Eb.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      // required
      propertyIndex: t[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      Tb.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0)
        return n;
    }
    if (e.children) {
      const n = function(r) {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          if (o.name === t || o.uuid === t)
            return o;
          const c = n(o.children);
          if (c) return c;
        }
        return null;
      }, i = n(e.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  // Direct
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let r = t.propertyIndex;
    if (e || (e = et.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === l) {
              l = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[l];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const l = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (c = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
et.Composite = wb;
et.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
et.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
et.prototype.GetterByBindingType = [
  et.prototype._getValue_direct,
  et.prototype._getValue_array,
  et.prototype._getValue_arrayElement,
  et.prototype._getValue_toArray
];
et.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    et.prototype._setValue_direct,
    et.prototype._setValue_direct_setNeedsUpdate,
    et.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    et.prototype._setValue_array,
    et.prototype._setValue_array_setNeedsUpdate,
    et.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    et.prototype._setValue_arrayElement,
    et.prototype._setValue_arrayElement_setNeedsUpdate,
    et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    et.prototype._setValue_fromArray,
    et.prototype._setValue_fromArray_setNeedsUpdate,
    et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
const ol = /* @__PURE__ */ new Re();
class gh {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new ji(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new xo(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return ol.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(ol), this;
  }
  intersectObject(e, t = !0, n = []) {
    return ro(e, this, n, t), n.sort(cl), n;
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, r = e.length; i < r; i++)
      ro(e[i], this, n, t);
    return n.sort(cl), n;
  }
}
function cl(s, e) {
  return s.distance - e.distance;
}
function ro(s, e, t, n) {
  let i = !0;
  if (s.layers.test(e.layers) && s.raycast(e, t) === !1 && (i = !1), i === !0 && n === !0) {
    const r = s.children;
    for (let a = 0, o = r.length; a < o; a++)
      ro(r[a], e, t, !0);
  }
}
class ll {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(bt(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ab extends kn {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: co
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = co);
class Rb extends ot {
  constructor(e = document.createElement("div")) {
    super(), this.isCSS2DObject = !0, this.element = e, this.element.style.position = "absolute", this.element.style.userSelect = "none", this.element.setAttribute("draggable", !1), this.center = new Ee(0.5, 0.5), this.addEventListener("removed", function() {
      this.traverse(function(t) {
        t.element instanceof t.element.ownerDocument.defaultView.Element && t.element.parentNode !== null && t.element.remove();
      });
    });
  }
  copy(e, t) {
    return super.copy(e, t), this.element = e.element.cloneNode(!0), this.center = e.center, this;
  }
}
const Ri = new D(), hl = new Re(), dl = new Re(), ul = new D(), fl = new D();
class Cb {
  constructor(e = {}) {
    const t = this;
    let n, i, r, a;
    const o = {
      objects: /* @__PURE__ */ new WeakMap()
    }, c = e.element !== void 0 ? e.element : document.createElement("div");
    c.style.overflow = "hidden", this.domElement = c, this.getSize = function() {
      return {
        width: n,
        height: i
      };
    }, this.render = function(g, b) {
      g.matrixWorldAutoUpdate === !0 && g.updateMatrixWorld(), b.parent === null && b.matrixWorldAutoUpdate === !0 && b.updateMatrixWorld(), hl.copy(b.matrixWorldInverse), dl.multiplyMatrices(b.projectionMatrix, hl), h(g, g, b), p(g);
    }, this.setSize = function(g, b) {
      n = g, i = b, r = n / 2, a = i / 2, c.style.width = g + "px", c.style.height = b + "px";
    };
    function l(g) {
      g.isCSS2DObject && (g.element.style.display = "none");
      for (let b = 0, m = g.children.length; b < m; b++)
        l(g.children[b]);
    }
    function h(g, b, m) {
      if (g.visible === !1) {
        l(g);
        return;
      }
      if (g.isCSS2DObject) {
        Ri.setFromMatrixPosition(g.matrixWorld), Ri.applyMatrix4(dl);
        const u = Ri.z >= -1 && Ri.z <= 1 && g.layers.test(m.layers) === !0, M = g.element;
        M.style.display = u === !0 ? "" : "none", u === !0 && (g.onBeforeRender(t, b, m), M.style.transform = "translate(" + -100 * g.center.x + "%," + -100 * g.center.y + "%)translate(" + (Ri.x * r + r) + "px," + (-Ri.y * a + a) + "px)", M.parentNode !== c && c.appendChild(M), g.onAfterRender(t, b, m));
        const S = {
          distanceToCameraSquared: d(m, g)
        };
        o.objects.set(g, S);
      }
      for (let u = 0, M = g.children.length; u < M; u++)
        h(g.children[u], b, m);
    }
    function d(g, b) {
      return ul.setFromMatrixPosition(g.matrixWorld), fl.setFromMatrixPosition(b.matrixWorld), ul.distanceToSquared(fl);
    }
    function f(g) {
      const b = [];
      return g.traverseVisible(function(m) {
        m.isCSS2DObject && b.push(m);
      }), b;
    }
    function p(g) {
      const b = f(g).sort(function(u, M) {
        if (u.renderOrder !== M.renderOrder)
          return M.renderOrder - u.renderOrder;
        const S = o.objects.get(u).distanceToCameraSquared, v = o.objects.get(M).distanceToCameraSquared;
        return S - v;
      }), m = b.length;
      for (let u = 0, M = b.length; u < M; u++)
        b[u].element.style.zIndex = m - u;
    }
  }
}
const Pb = /cerebral_cortex|cerebral_white_matter|cerebellum|^pons$|medulla_oblongata|midbrain|diencephalon|basal_nuclei/, wr = [
  { id: "heart", label: "Heart", includes: (s) => ["heart", "coronary_arteries", "cardiac_veins"].includes(s.id), anchor: ["heart"] },
  {
    id: "lungs",
    label: "Lungs",
    // Lung tissue only exists in the Z-Anatomy pack; without it the bronchial trees stand in for the lungs.
    includes: (s) => /lobe_of_(left|right)_lung|bronchial_tree$/.test(s.id),
    anchor: ["za_superior_lobe_of_left_lung", "za_superior_lobe_of_right_lung", "left_bronchial_tree", "right_bronchial_tree"]
  },
  { id: "brain", label: "Brain", includes: (s) => Pb.test(s.id), anchor: ["left_cerebral_cortex", "right_cerebral_cortex"], hint: [0.05, 1.6, 0.16] },
  { id: "eyes", label: "Eyes", includes: (s) => /eyeball$/.test(s.id), anchor: ["left_eyeball", "right_eyeball"] },
  { id: "kidneys", label: "Kidneys", includes: (s) => /^(left|right)_kidney$/.test(s.id), anchor: ["left_kidney", "right_kidney"] },
  { id: "skeleton", label: "Skeleton", includes: (s) => s.layer === "skeleton", anchor: ["left_femur", "right_femur"], hint: [0.1, 0.62, 0.1] },
  {
    id: "muscles",
    label: "Muscles",
    includes: (s) => s.layer === "muscles_superficial" || s.layer === "muscles_deep",
    anchor: ["right_rectus_femoris", "left_rectus_femoris"],
    hint: [-0.11, 0.6, 0.12]
  },
  {
    id: "vessels",
    label: "Blood vessels",
    includes: (s) => s.layer === "cardiovascular" && !["heart", "coronary_arteries", "cardiac_veins"].includes(s.id),
    anchor: ["aorta"],
    hint: [0, 1, 0.1]
  },
  { id: "skin", label: "Skin", includes: (s) => s.id === "skin", anchor: ["skin"], hint: [-0.2, 1.3, 0.06] }
], Db = new Map(wr.map((s) => [s.id, s])), bh = { ok: "OK", watch: "Watch", alert: "Alert", nodata: "No data" }, Lb = 14, os = (s) => s.replace(/[&<>"]/g, (e) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[e]);
class Ib {
  constructor(e, t) {
    this.viewer = e, this.onPick = t, this.group.name = "labels", e.scene.add(this.group), e.addEventListener("frame", () => this.update());
  }
  enabled = !0;
  entries = /* @__PURE__ */ new Map();
  content = /* @__PURE__ */ new Map();
  group = new Fn();
  occluded = /* @__PURE__ */ new Map();
  occlusionStamp = "";
  occlusionTimer = 0;
  v = new D();
  /** Create the labels of monitored parts. Call once the low LOD is loaded (anchors need geometry). */
  initParts() {
    for (const e of wr) {
      const t = e.anchor.map((i) => this.viewer.store.structures.get(i)).filter((i) => !!i);
      if (!t.length) continue;
      const n = this.create(`part:${e.id}`, "part", e.label, t[0], e.hint);
      n.alts = t.map((i, r) => ({ structure: i, anchor: r === 0 ? n.anchor : this.viewer.anchorOf(i) }));
    }
  }
  setContent(e, t) {
    this.content.set(e, t);
    const n = this.entries.get(`part:${e}`);
    n && this.renderBox(n), this.viewer.invalidate();
  }
  create(e, t, n, i, r) {
    const a = document.createElement("div");
    a.className = "lbl", a.innerHTML = '<i class="dot"></i><i class="leader"></i><button class="box" type="button"></button>';
    const o = new Rb(a), c = this.viewer.anchorOf(i, r);
    o.position.copy(c), o.center.set(0, 0), this.group.add(o), this.viewer.css2d.domElement.appendChild(a), a.style.display = "none";
    const l = a.querySelector(".box"), h = { key: e, kind: t, title: n, structure: i, anchor: c, alts: [], obj: o, box: l, leader: a.querySelector(".leader"), w: 0, h: 0, shown: !1, sx: 0, sy: 0, score: 0, by: 0 };
    return l.addEventListener("click", (d) => {
      d.stopPropagation(), this.onPick(h.structure.meta.id);
    }), this.entries.set(e, h), this.renderBox(h), h;
  }
  renderBox(e) {
    if (e.kind === "structure")
      e.box.innerHTML = `<b>${os(e.title)}</b>`, e.box.dataset.status = "none";
    else {
      const t = this.content.get(e.key.slice(5)) ?? { status: "nodata" };
      e.box.dataset.status = t.status, e.box.innerHTML = `<span class="row"><b>${os(e.title)}</b><em>${bh[t.status]}</em></span>` + (t.value ? `<span class="val">${os(t.value)}${t.time ? ` <small>${os(t.time)}</small>` : ""}</span>` : "") + (t.note ? `<span class="note">${os(t.note)}</span>` : "");
    }
    e.w = 0;
  }
  // ------------------------------------------------------------------ per-frame layout
  update() {
    const { viewer: e } = this, t = e.container.clientWidth, n = e.container.clientHeight, i = t <= 640;
    e.container.classList.toggle("compact-labels", i);
    const r = e.camera, a = n / (2 * Math.tan(qt.degToRad(r.fov) / 2)), o = (u, M) => (this.v.copy(M).project(r), u.sx = (this.v.x * 0.5 + 0.5) * t, u.sy = (-this.v.y * 0.5 + 0.5) * n, this.v.z > -1 && this.v.z < 1 && u.sx > e.uiInsets.left + 6 && u.sx < t - 6 && u.sy > 6 && u.sy < n - 6 && !e.isClipped(M)), c = (u) => {
      if (!u.alts.length) return o(u, u.anchor);
      for (const M of u.alts)
        if (!((e.layerOpacity.get(M.structure.meta.layer) ?? 0) < 0.12 || !o(u, M.anchor)))
          return u.structure = M.structure, u.anchor = M.anchor, u.obj.position.copy(M.anchor), !0;
      return !1;
    }, l = [];
    if (this.enabled) {
      for (const P of this.entries.values())
        P.kind === "part" && c(P) && (P.score = 1e6, l.push(P));
      const u = e.selected;
      if (u && !l.some((P) => P.structure === u)) {
        const P = this.entries.get(`s:${u.meta.id}`) ?? this.create(`s:${u.meta.id}`, "structure", u.meta.name, u);
        c(P) && (P.score = 1e5, l.push(P));
      }
      const M = [], S = new Set(l.map((P) => P.structure));
      for (const P of e.store.structures.values()) {
        if (S.has(P) || P.lod === 3 || (e.layerOpacity.get(P.meta.layer) ?? 0) < 0.5 || P.meta.grouped && /^(Arteries|Veins|Nerves) of/.test(P.meta.name)) continue;
        const R = r.position.distanceTo(P.center), A = P.radius * a / R;
        if (A < Math.max(70, n * 0.18) || A > n * 0.8) continue;
        const C = `s:${P.meta.id}`, y = this.entries.get(C) ?? this.create(C, "structure", P.meta.name, P);
        if (!c(y) || this.occluded.get(C)) continue;
        const _ = 1 - Math.hypot(y.sx - t / 2, y.sy - n / 2) / Math.hypot(t / 2, n / 2);
        y.score = A * (0.4 + _) * (y.shown ? 1.35 : 1), M.push(y);
      }
      M.sort((P, R) => R.score - P.score);
      const v = Math.max(0, (i ? 7 : Lb) - l.length);
      this.scheduleOcclusion(M.slice(0, v + 8)), l.push(...M.slice(0, v));
    }
    for (const u of l)
      u.w || (u.obj.element.style.display = "", u.w = u.box.offsetWidth, u.h = u.box.offsetHeight);
    const h = i ? 8 : e.uiInsets.left + 12, d = t - (i ? 8 : 12), f = e.uiInsets.top, p = n - e.uiInsets.bottom, g = (h + d) / 2, b = [[], []];
    for (const u of l) b[u.sx < g ? 0 : 1].push(u);
    const m = /* @__PURE__ */ new Set();
    b.forEach((u, M) => {
      if (!u.length) return;
      const S = i ? 36 : 70, v = Math.max(...u.map((_) => _.w)), P = M === 0 ? qt.clamp(Math.min(...u.map((_) => _.sx)) - S, h + v, Math.max(h + v, g - 20)) : qt.clamp(Math.max(...u.map((_) => _.sx)) + S, Math.min(d - v, g + 20), d - v);
      u.sort((_, w) => w.score - _.score);
      let R = 0;
      const A = [];
      for (const _ of u) R + _.h + 6 <= p - f && (A.push(_), R += _.h + 6);
      A.sort((_, w) => _.sy - w.sy);
      let C = f;
      for (const _ of A)
        _.by = Math.max(_.sy - _.h / 2, C), C = _.by + _.h + 6;
      let y = p;
      for (let _ = A.length - 1; _ >= 0; _--) {
        const w = A[_];
        w.by = Math.min(w.by, y - w.h), y = w.by - 6;
      }
      for (const _ of A) {
        const w = M === 0 ? P - _.w : P, O = P, F = _.by + _.h / 2;
        _.box.style.transform = `translate(${(w - _.sx).toFixed(1)}px, ${(_.by - _.sy).toFixed(1)}px)`;
        const k = O - _.sx, j = F - _.sy;
        _.leader.style.width = `${Math.hypot(k, j).toFixed(1)}px`, _.leader.style.transform = `rotate(${Math.atan2(j, k).toFixed(4)}rad)`, m.add(_);
      }
    });
    for (const u of this.entries.values())
      u.shown = m.has(u), u.obj.visible = u.shown;
  }
  // ------------------------------------------------------------------ occlusion (anatomy labels only)
  /** Ray tests are too slow for every frame, so they run shortly after the camera stops moving. */
  scheduleOcclusion(e) {
    const t = this.viewer.camera, n = `${t.position.x.toFixed(2)},${t.position.y.toFixed(2)},${t.position.z.toFixed(2)}|${e.length}|${this.viewer.appearanceVersion}`;
    n !== this.occlusionStamp && (this.occlusionStamp = n, window.clearTimeout(this.occlusionTimer), this.occlusionTimer = window.setTimeout(() => {
      const i = [...this.viewer.store.structures.values()].filter((o) => o.mesh.visible && (this.viewer.layerOpacity.get(o.meta.layer) ?? 0) >= 0.6).map((o) => o.mesh), r = new gh();
      let a = !1;
      for (const o of e) {
        const c = this.v.copy(o.anchor).sub(t.position), l = c.length();
        r.set(t.position, c.normalize()), r.far = l - 4e-3;
        const d = !!r.intersectObjects(i, !1).find((f) => f.object !== o.structure.mesh && !this.viewer.isClipped(f.point));
        this.occluded.get(o.key) !== d && (this.occluded.set(o.key, d), a = !0);
      }
      a && this.viewer.invalidate();
    }, 180));
  }
}
const oa = [
  { id: "normal", label: "Normal", about: "Rested adult, all readings in their usual range." },
  { id: "dehydrated", label: "Dehydrated", about: "Concentrated urine, low urine output, faster pulse, lower blood pressure." },
  { id: "fatigued", label: "Fatigued", about: "Long eye closures, lower cognitive score, reduced strength." },
  { id: "hypoxic", label: "Hypoxic", about: "Low blood oxygen with fast breathing and pulse." }
], Nb = [
  ["heart", "heart_rate", "bpm", 68, 3],
  ["heart", "ecg_rhythm", "class", "sinus", 0],
  ["lungs", "spo2", "%", 98, 0.6],
  ["lungs", "breathing_rate", "/min", 15, 1],
  ["brain", "cognitive_score", "% of baseline", 98, 1.5],
  ["brain", "perclos", "%", 4, 1],
  ["eyes", "vision_self_test", "logMAR", 0, 0.02],
  ["kidneys", "urine_output", "mL/kg/h", 1, 0.1],
  ["kidneys", "hydration", "sg", 1.012, 2e-3],
  ["skeleton", "bone_density_t_score", "T-score", -0.4, 0],
  ["skeleton", "calcium", "mmol/L", 2.38, 0.02],
  ["muscles", "strength", "% of baseline", 99, 1.5],
  ["muscles", "muscle_volume", "% of baseline", 100, 0.3],
  ["vessels", "systolic_bp", "mmHg", 114, 2.5],
  ["vessels", "diastolic_bp", "mmHg", 73, 2],
  ["skin", "skin_temperature", "°C", 33.2, 0.2]
], Ub = {
  normal: {},
  dehydrated: {
    "heart|heart_rate": [106, 3],
    "kidneys|urine_output": [0.27, 0.02],
    "kidneys|hydration": [1.032, 1e-3],
    "vessels|systolic_bp": [97, 2],
    "vessels|diastolic_bp": [61, 1],
    "brain|cognitive_score": [88, 1.5],
    "skin|skin_temperature": [34.6, 0.2]
  },
  fatigued: {
    "brain|perclos": [17.5, 1.2],
    "brain|cognitive_score": [72, 2],
    "muscles|strength": [83, 2],
    "heart|heart_rate": [61, 2],
    "lungs|breathing_rate": [13, 0.6]
  },
  hypoxic: {
    "lungs|spo2": [89, 0.8],
    "lungs|breathing_rate": [26.5, 1],
    "heart|heart_rate": [122, 3],
    "heart|ecg_rhythm": ["irregular"],
    "brain|cognitive_score": [81, 2]
  }
};
function pl(s, e = Date.now(), t = Math.random) {
  return Nb.map(([n, i, r, a, o]) => {
    const c = Ub[s][`${n}|${i}`];
    let l = c ? c[0] : a;
    const h = c ? c[1] ?? 0 : o;
    return typeof l == "number" && (l = +(l + (t() * 2 - 1) * h).toFixed(4)), { partId: n, metric: i, value: l, unit: r, timestamp: new Date(e).toISOString(), source: `mock:${s}` };
  });
}
function Fb(s, e, t = 2e3) {
  e(pl(s));
  const n = setInterval(() => e(pl(s)), t);
  return () => clearInterval(n);
}
const Ci = 60, dn = 86400, zt = Number.POSITIVE_INFINITY, _h = [
  // ───────────────────────────── heart ─────────────────────────────
  {
    partId: "heart",
    metric: "heart_rate",
    label: "Heart rate",
    unit: "bpm",
    kind: "range",
    decimals: 0,
    // Resting adult. OK 51-100, Watch 41-50 or 101-130, Alert <=40 or >=131.
    ok: [51, 100],
    watch: [41, 130],
    maxAgeS: 2 * Ci,
    evidence: "established",
    source: "Outer bands: Royal College of Physicians, National Early Warning Score (NEWS) 2, 2017 (pulse <=40 or >=131 scores 3; 41-50 and 111-130 score 1-2). Upper normal limit 100 bpm: American Heart Association, normal resting heart rate 60-100 bpm. Applies at rest only: exercise raises heart rate, and trained people often rest below 60."
  },
  {
    partId: "heart",
    metric: "ecg_rhythm",
    label: "ECG rhythm",
    unit: "class",
    kind: "category",
    categories: {
      sinus: { status: "ok", note: "Regular rhythm detected." },
      irregular: { status: "watch", note: "Irregular beat intervals detected. Repeat the recording at rest." },
      afib_suspected: { status: "alert", note: "The rhythm classifier flagged possible atrial fibrillation. This is not a diagnosis." }
    },
    maxAgeS: 5 * Ci,
    evidence: "placeholder",
    source: 'No standard exists for mapping a wearable rhythm classifier to a status. The class names and their mapping are a product decision, and their accuracy depends entirely on the classifier used. Unknown classes show as "No data".'
  },
  // ───────────────────────────── lungs ─────────────────────────────
  {
    partId: "lungs",
    metric: "spo2",
    label: "Blood oxygen (SpO2)",
    unit: "%",
    kind: "range",
    decimals: 0,
    // OK >=96, Watch 92-95, Alert <=91.
    ok: [96, 100],
    watch: [92, 100],
    maxAgeS: 2 * Ci,
    evidence: "established",
    source: "Royal College of Physicians, NEWS2, 2017, SpO2 scale 1 (>=96 scores 0, 94-95 scores 1, 92-93 scores 2, <=91 scores 3). Scale 1 is not meant for people with hypercapnic respiratory failure (e.g. some COPD), whose target is 88-92 %. Wrist and finger PPG sensors are less accurate with motion, cold skin and darker skin tones."
  },
  {
    partId: "lungs",
    metric: "breathing_rate",
    label: "Breathing rate",
    unit: "/min",
    kind: "range",
    decimals: 0,
    // OK 12-20, Watch 9-11 or 21-24, Alert <=8 or >=25.
    ok: [12, 20],
    watch: [9, 24],
    maxAgeS: 2 * Ci,
    evidence: "established",
    source: "Royal College of Physicians, NEWS2, 2017 (12-20 scores 0, 9-11 scores 1, 21-24 scores 2, <=8 or >=25 scores 3). At rest."
  },
  // ───────────────────────────── brain ─────────────────────────────
  {
    partId: "brain",
    metric: "cognitive_score",
    label: "Cognitive test",
    unit: "% of baseline",
    kind: "range",
    decimals: 0,
    ok: [90, zt],
    watch: [75, zt],
    maxAgeS: 7 * dn,
    evidence: "placeholder",
    source: "No accepted cut-off. The value is the score on whatever test you use, as a percentage of the person's own baseline. 90 % and 75 % are arbitrary starting points."
  },
  {
    partId: "brain",
    metric: "perclos",
    label: "Eye closure (PERCLOS)",
    unit: "%",
    kind: "range",
    decimals: 1,
    // Share of time the eyes are at least 80 % closed. OK < 7.5, Watch 7.5-15, Alert > 15.
    ok: [0, 7.4],
    watch: [0, 15],
    maxAgeS: 5 * Ci,
    evidence: "placeholder",
    source: "No accepted clinical standard. PERCLOS (P80) was proposed as a drowsiness measure by Wierwille et al. (1994) and assessed in Dinges & Grace, FHWA-MCRT-98-006 (1998). Bands of roughly 7.5 % and 15 % are used in parts of the drowsiness-detection literature; the exact cut-offs here are not verified against a single source and depend on camera, window length and algorithm."
  },
  // ───────────────────────────── eyes ──────────────────────────────
  {
    partId: "eyes",
    metric: "vision_self_test",
    label: "Vision self-test",
    unit: "logMAR",
    kind: "range",
    decimals: 2,
    // Better eye, lower is better. OK <= 0.30 (6/12), Watch <= 0.48 (6/18), Alert worse.
    ok: [-zt, 0.3],
    watch: [-zt, 0.48],
    maxAgeS: 90 * dn,
    evidence: "placeholder",
    source: 'Band edges follow the WHO / ICD-11 categories of distance vision impairment (mild: worse than 6/12; moderate: worse than 6/18). Those categories are for clinically measured acuity. A self-administered screen test is not validated against them, hence "placeholder".'
  },
  // ──────────────────────────── kidneys ────────────────────────────
  {
    partId: "kidneys",
    metric: "urine_output",
    label: "Urine output",
    unit: "mL/kg/h",
    kind: "range",
    decimals: 2,
    // OK >= 0.5, Watch 0.3-0.5, Alert < 0.3. No upper band.
    ok: [0.5, zt],
    watch: [0.3, zt],
    maxAgeS: dn,
    evidence: "established",
    source: "KDIGO Clinical Practice Guideline for Acute Kidney Injury, 2012: urine output < 0.5 mL/kg/h for 6-12 h (stage 1), < 0.3 mL/kg/h for >= 24 h (stage 3). The guideline criteria include a duration; a single reading does not meet them. High output (polyuria) is not banded here."
  },
  {
    partId: "kidneys",
    metric: "hydration",
    label: "Hydration (urine specific gravity)",
    unit: "sg",
    kind: "range",
    decimals: 3,
    // OK <= 1.020, Watch 1.021-1.030, Alert > 1.030.
    ok: [1, 1.02],
    watch: [1, 1.03],
    maxAgeS: dn,
    evidence: "placeholder",
    source: `Urine specific gravity <= 1.020 as an index of adequate hydration: American College of Sports Medicine position stand, Exercise and Fluid Replacement, 2007. > 1.030 as marked dehydration: National Athletic Trainers' Association position statement on fluid replacement. Both are for measured urine; no wearable estimate of hydration is validated against them, hence "placeholder".`
  },
  // ──────────────────────────── skeleton ───────────────────────────
  {
    partId: "skeleton",
    metric: "bone_density_t_score",
    label: "Bone density (DXA)",
    unit: "T-score",
    kind: "range",
    decimals: 1,
    // OK >= -1.0, Watch between -1.0 and -2.5, Alert <= -2.5.
    ok: [-1, zt],
    watch: [-2.4, zt],
    maxAgeS: 730 * dn,
    evidence: "established",
    source: "World Health Organization, 1994 (Technical Report Series 843): normal T >= -1.0, low bone mass -1.0 to -2.5, osteoporosis <= -2.5. Defined for postmenopausal women and men aged 50+; younger people are assessed with Z-scores instead."
  },
  {
    partId: "skeleton",
    metric: "calcium",
    label: "Serum calcium",
    unit: "mmol/L",
    kind: "range",
    decimals: 2,
    // OK 2.20-2.60, Watch 1.90-2.19 or 2.61-3.00, Alert outside.
    ok: [2.2, 2.6],
    watch: [1.9, 3],
    maxAgeS: 365 * dn,
    evidence: "established",
    source: "Typical adult reference interval for total (albumin-adjusted) serum calcium, about 2.2-2.6 mmol/L. Reference intervals differ between laboratories; use your laboratory's. The outer limits (1.9 and 3.0) follow common textbook grading of moderate hypo-/hypercalcaemia and are not from a single cited guideline."
  },
  // ──────────────────────────── muscles ────────────────────────────
  {
    partId: "muscles",
    metric: "strength",
    label: "Strength",
    unit: "% of baseline",
    kind: "range",
    decimals: 0,
    ok: [90, zt],
    watch: [75, zt],
    maxAgeS: 30 * dn,
    evidence: "placeholder",
    source: 'No accepted cut-off for change against a personal baseline. (For absolute grip strength, EWGSOP2 2019 uses < 27 kg for men and < 16 kg for women as "low"; that needs sex-specific rules and is not implemented.)'
  },
  {
    partId: "muscles",
    metric: "muscle_volume",
    label: "Muscle volume",
    unit: "% of baseline",
    kind: "range",
    decimals: 0,
    ok: [95, zt],
    watch: [85, zt],
    maxAgeS: 180 * dn,
    evidence: "placeholder",
    source: "No accepted cut-off. Percentage of the person's own baseline; 95 % and 85 % are arbitrary starting points."
  },
  // ───────────────────────────── vessels ───────────────────────────
  {
    partId: "vessels",
    metric: "systolic_bp",
    label: "Systolic blood pressure",
    unit: "mmHg",
    kind: "range",
    decimals: 0,
    // OK 101-119, Watch 91-100 or 120-139, Alert <=90 or >=140.
    ok: [101, 119],
    watch: [91, 139],
    maxAgeS: dn,
    evidence: "established",
    source: "Upper bands: 2017 ACC/AHA hypertension guideline (normal < 120, elevated 120-129, stage 1 130-139, stage 2 >= 140). Lower bands: Royal College of Physicians, NEWS2, 2017 (<= 90 scores 3, 91-100 scores 2). Seated, rested, validated cuff."
  },
  {
    partId: "vessels",
    metric: "diastolic_bp",
    label: "Diastolic blood pressure",
    unit: "mmHg",
    kind: "range",
    decimals: 0,
    // OK 60-79, Watch < 60 or 80-89, Alert >= 90.
    ok: [60, 79],
    watch: [-zt, 89],
    maxAgeS: dn,
    evidence: "established",
    source: "2017 ACC/AHA hypertension guideline (normal < 80, stage 1 80-89, stage 2 >= 90). The lower edge of 60 is the conventional definition of low diastolic pressure, not from that guideline; low values are shown as Watch only."
  },
  // ────────────────────────────── skin ─────────────────────────────
  {
    partId: "skin",
    metric: "skin_temperature",
    label: "Skin temperature",
    unit: "°C",
    kind: "range",
    decimals: 1,
    ok: [30, 36],
    watch: [28, 37.5],
    maxAgeS: 2 * Ci,
    evidence: "placeholder",
    source: "No accepted cut-off. Skin temperature at the wrist is not core temperature and swings with room temperature, clothing and activity; it cannot be read against fever thresholds. The band is a plausible range for a worn sensor indoors. A change from the person's own baseline would be more meaningful."
  }
], ml = { nodata: 0, ok: 1, watch: 2, alert: 3 };
function Do(s, e) {
  return `${s}|${e}`;
}
function vh(s = _h) {
  return new Map(s.map((e) => [Do(e.partId, e.metric), e]));
}
function br(s) {
  return typeof s.timestamp == "number" ? s.timestamp : Date.parse(s.timestamp);
}
function Ob(s) {
  if (typeof s != "object" || s === null) return "not an object";
  const e = s;
  for (const n of ["partId", "metric", "unit", "source"]) if (typeof e[n] != "string" || !e[n]) return `missing or empty "${n}"`;
  if (typeof e.value != "number" && typeof e.value != "string") return '"value" must be a number or a string';
  if (typeof e.value == "number" && !Number.isFinite(e.value)) return '"value" is not a finite number';
  if (typeof e.timestamp != "number" && typeof e.timestamp != "string") return '"timestamp" must be an ISO 8601 string or epoch milliseconds';
  const t = e;
  return Number.isFinite(br(t)) ? t : '"timestamp" could not be parsed';
}
const fs = (s, e) => {
  const t = s.toFixed(e);
  return /^-0(\.0+)?$/.test(t) ? t.slice(1) : t;
};
function kb(s) {
  const [e, t] = s.ok, n = s.decimals, i = s.unit;
  return !Number.isFinite(e) && !Number.isFinite(t) ? "any value" : Number.isFinite(e) ? Number.isFinite(t) ? `${fs(e, n)}–${fs(t, n)} ${i}` : `at least ${fs(e, n)} ${i}` : `at most ${fs(t, n)} ${i}`;
}
function Bb(s, e, t) {
  const n = br(s), i = { rule: e, reading: s, time: n }, r = (d) => ({ ...i, status: "nodata", note: d, display: "" });
  if (!Number.isFinite(n)) return r("The reading has no usable timestamp.");
  if (n - t > 6e4) return r("The reading is dated in the future; check the device clock.");
  if (t - n > e.maxAgeS * 1e3) return r(`Last ${e.label.toLowerCase()} reading is too old to show a status.`);
  if (s.unit !== e.unit) return r(`Expected ${e.label.toLowerCase()} in "${e.unit}" but got "${s.unit}".`);
  if (e.kind === "category") {
    const d = typeof s.value == "string" ? e.categories[s.value] : void 0;
    return d ? { ...i, status: d.status, note: d.note, display: String(s.value).replace(/_/g, " ") } : r(`Unknown ${e.label.toLowerCase()} value "${String(s.value)}".`);
  }
  const a = s.value;
  if (typeof a != "number" || !Number.isFinite(a)) return r(`${e.label} must be a number.`);
  const o = `${fs(a, e.decimals)} ${e.unit}`, c = ([d, f]) => a >= d && a <= f, l = `usual range (${kb(e)})`;
  if (c(e.ok)) return { ...i, status: "ok", display: o, note: `${e.label} is within the ${l}.` };
  const h = a < e.ok[0] ? "below" : "above";
  return c(e.watch) ? { ...i, status: "watch", display: o, note: `${e.label} is slightly ${h} the ${l}.` } : { ...i, status: "alert", display: o, note: `${e.label} is well ${h} the ${l}.` };
}
function zb(s, e, t, n = vh()) {
  const i = [];
  for (const r of e) {
    if (r.partId !== s) continue;
    const a = n.get(Do(r.partId, r.metric));
    if (!a) continue;
    const o = Bb(r, a, t);
    o.status !== "nodata" && i.push(o);
  }
  return i.sort((r, a) => ml[a.status] - ml[r.status] || a.time - r.time), { partId: s, status: i[0]?.status ?? "nodata", primary: i[0], metrics: i };
}
function gl(s, e = Date.now()) {
  const t = new Date(s), n = new Date(e), i = t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate(), r = (a) => String(a).padStart(2, "0");
  return i ? `${r(t.getHours())}:${r(t.getMinutes())}:${r(t.getSeconds())}` : `${t.getDate()} ${t.toLocaleString("en", { month: "short" })}${t.getFullYear() !== n.getFullYear() ? ` ${t.getFullYear()}` : ""} ${r(t.getHours())}:${r(t.getMinutes())}`;
}
const bl = "7b1e0001-5d0a-4c7e-9a3b-2f6c8d4e1a10", Hb = "7b1e0002-5d0a-4c7e-9a3b-2f6c8d4e1a10", Gb = "7b1e0003-5d0a-4c7e-9a3b-2f6c8d4e1a10";
function Vb(s = Date.now()) {
  const e = new Uint8Array(8);
  return new DataView(e.buffer).setBigUint64(0, BigInt(Math.round(s)), !0), e;
}
function xh() {
  return typeof navigator < "u" && "bluetooth" in navigator;
}
function Wb(s, e = 4096) {
  let t = "";
  return (n) => {
    t += n;
    let i;
    for (; (i = t.indexOf(`
`)) >= 0; ) {
      const r = t.slice(0, i).trim();
      t = t.slice(i + 1), r && s(r);
    }
    t.length > e && (t = "");
  };
}
async function jb(s, e) {
  if (!xh()) throw new Error("Web Bluetooth is not available in this browser. Use Chrome or Edge over HTTPS.");
  e("connecting");
  const t = await navigator.bluetooth.requestDevice({ filters: [{ services: [bl] }] }), i = await (await t.gatt.connect()).getPrimaryService(bl), r = await i.getCharacteristic(Hb), a = new TextDecoder(), o = Wb((l) => {
    try {
      s(JSON.parse(l));
    } catch {
    }
  }), c = () => {
    r.value && o(a.decode(r.value, { stream: !0 }));
  };
  r.addEventListener("characteristicvaluechanged", c), t.addEventListener("gattserverdisconnected", () => e("closed", "device disconnected")), await r.startNotifications();
  try {
    await (await i.getCharacteristic(Gb)).writeValue(Vb().buffer);
  } catch {
  }
  return e("open", t.name ?? "device"), { close() {
    r.removeEventListener("characteristicvaluechanged", c), t.gatt?.disconnect(), e("closed");
  } };
}
function Xb(s, e, t) {
  let n = null, i = !1, r = 0, a = 0;
  const o = () => {
    if (!i) {
      t("connecting");
      try {
        n = new WebSocket(s);
      } catch (c) {
        t("error", c.message);
        return;
      }
      n.onopen = () => {
        r = 0, t("open");
      }, n.onmessage = (c) => {
        if (typeof c.data == "string")
          for (const l of c.data.split(`
`)) {
            const h = l.trim();
            if (h)
              try {
                e(JSON.parse(h));
              } catch {
              }
          }
      }, n.onerror = () => t("error", "connection error"), n.onclose = () => {
        i || (t("closed", "reconnecting"), a = window.setTimeout(o, Math.min(15e3, 1e3 * 2 ** r++)));
      };
    }
  };
  return o(), { close() {
    i = !0, window.clearTimeout(a), n?.close(), t("closed");
  } };
}
class qb extends EventTarget {
  constructor(e = _h, t = Date.now) {
    super(), this.now = t, this.rules = vh(e);
  }
  latest = /* @__PURE__ */ new Map();
  rules;
  timer = 0;
  /** Readings rejected since start, with the reason (kept short; useful when wiring a new device). */
  rejected = [];
  lastIngest = 0;
  /** Start periodic re-evaluation (staleness). */
  start(e = 5e3) {
    this.stop(), this.timer = window.setInterval(() => this.emit(), e);
  }
  stop() {
    this.timer && window.clearInterval(this.timer), this.timer = 0;
  }
  /** Accepts one reading, an array, or untrusted JSON-parsed input. Returns how many were accepted. */
  ingest(e) {
    const t = Array.isArray(e) ? e : [e];
    let n = 0;
    for (const i of t) {
      const r = Ob(i);
      if (typeof r == "string") {
        this.reject(r, i);
        continue;
      }
      const a = Do(r.partId, r.metric);
      if (!this.rules.has(a)) {
        this.reject(`no rule for ${r.partId}/${r.metric}`, i);
        continue;
      }
      const o = this.latest.get(a);
      o && br(o) > br(r) || (this.latest.set(a, r), n++);
    }
    return n && (this.lastIngest = this.now(), this.emit()), n;
  }
  reject(e, t) {
    this.rejected.push({ reason: e, raw: t }), this.rejected.length > 50 && this.rejected.shift();
  }
  clear() {
    this.latest.clear(), this.emit();
  }
  get size() {
    return this.latest.size;
  }
  summary(e) {
    return zb(e, this.latest.values(), this.now(), this.rules);
  }
  emit() {
    this.dispatchEvent(new Event("change"));
  }
}
class Yb extends hb {
  constructor(e) {
    super(e), this.type = Ht;
  }
  // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
  parse(e) {
    const a = function(C, y) {
      switch (C) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (y || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (y || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (y || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (y || ""));
      }
    }, h = `
`, d = function(C, y, _) {
      y = y || 1024;
      let O = C.pos, F = -1, k = 0, j = "", z = String.fromCharCode.apply(null, new Uint16Array(C.subarray(O, O + 128)));
      for (; 0 > (F = z.indexOf(h)) && k < y && O < C.byteLength; )
        j += z, k += z.length, O += 128, z += String.fromCharCode.apply(null, new Uint16Array(C.subarray(O, O + 128)));
      return -1 < F ? (C.pos += k + F + 1, j + z.slice(0, F)) : !1;
    }, f = function(C) {
      const y = /^#\?(\S+)/, _ = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, w = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, O = /^\s*FORMAT=(\S+)\s*$/, F = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, k = {
        valid: 0,
        /* indicate which fields are valid */
        string: "",
        /* the actual header string */
        comments: "",
        /* comments found in header */
        programtype: "RGBE",
        /* listed at beginning of file to identify it after "#?". defaults to "RGBE" */
        format: "",
        /* RGBE format, default 32-bit_rle_rgbe */
        gamma: 1,
        /* image has already been gamma corrected with given gamma. defaults to 1.0 (no correction) */
        exposure: 1,
        /* a value of 1.0 in an image corresponds to <exposure> watts/steradian/m^2. defaults to 1.0 */
        width: 0,
        height: 0
        /* image dimensions, width/height */
      };
      let j, z;
      for ((C.pos >= C.byteLength || !(j = d(C))) && a(1, "no header found"), (z = j.match(y)) || a(3, "bad initial token"), k.valid |= 1, k.programtype = z[1], k.string += j + `
`; j = d(C), j !== !1; ) {
        if (k.string += j + `
`, j.charAt(0) === "#") {
          k.comments += j + `
`;
          continue;
        }
        if ((z = j.match(_)) && (k.gamma = parseFloat(z[1])), (z = j.match(w)) && (k.exposure = parseFloat(z[1])), (z = j.match(O)) && (k.valid |= 2, k.format = z[1]), (z = j.match(F)) && (k.valid |= 4, k.height = parseInt(z[1], 10), k.width = parseInt(z[2], 10)), k.valid & 2 && k.valid & 4) break;
      }
      return k.valid & 2 || a(3, "missing format specifier"), k.valid & 4 || a(3, "missing image size specifier"), k;
    }, p = function(C, y, _) {
      const w = y;
      if (
        // run length encoding is not allowed so read flat
        w < 8 || w > 32767 || // this file is not run length encoded
        C[0] !== 2 || C[1] !== 2 || C[2] & 128
      )
        return new Uint8Array(C);
      w !== (C[2] << 8 | C[3]) && a(3, "wrong scanline width");
      const O = new Uint8Array(4 * y * _);
      O.length || a(4, "unable to allocate buffer space");
      let F = 0, k = 0;
      const j = 4 * w, z = new Uint8Array(4), Z = new Uint8Array(j);
      let V = _;
      for (; V > 0 && k < C.byteLength; ) {
        k + 4 > C.byteLength && a(1), z[0] = C[k++], z[1] = C[k++], z[2] = C[k++], z[3] = C[k++], (z[0] != 2 || z[1] != 2 || (z[2] << 8 | z[3]) != w) && a(3, "bad rgbe scanline format");
        let Q = 0, ne;
        for (; Q < j && k < C.byteLength; ) {
          ne = C[k++];
          const ye = ne > 128;
          if (ye && (ne -= 128), (ne === 0 || Q + ne > j) && a(3, "bad scanline data"), ye) {
            const Ie = C[k++];
            for (let X = 0; X < ne; X++)
              Z[Q++] = Ie;
          } else
            Z.set(C.subarray(k, k + ne), Q), Q += ne, k += ne;
        }
        const fe = w;
        for (let ye = 0; ye < fe; ye++) {
          let Ie = 0;
          O[F] = Z[ye + Ie], Ie += w, O[F + 1] = Z[ye + Ie], Ie += w, O[F + 2] = Z[ye + Ie], Ie += w, O[F + 3] = Z[ye + Ie], F += 4;
        }
        V--;
      }
      return O;
    }, g = function(C, y, _, w) {
      const O = C[y + 3], F = Math.pow(2, O - 128) / 255;
      _[w + 0] = C[y + 0] * F, _[w + 1] = C[y + 1] * F, _[w + 2] = C[y + 2] * F, _[w + 3] = 1;
    }, b = function(C, y, _, w) {
      const O = C[y + 3], F = Math.pow(2, O - 128) / 255;
      _[w + 0] = Ns.toHalfFloat(Math.min(C[y + 0] * F, 65504)), _[w + 1] = Ns.toHalfFloat(Math.min(C[y + 1] * F, 65504)), _[w + 2] = Ns.toHalfFloat(Math.min(C[y + 2] * F, 65504)), _[w + 3] = Ns.toHalfFloat(1);
    }, m = new Uint8Array(e);
    m.pos = 0;
    const u = f(m), M = u.width, S = u.height, v = p(m.subarray(m.pos), M, S);
    let P, R, A;
    switch (this.type) {
      case Ut:
        A = v.length / 4;
        const C = new Float32Array(A * 4);
        for (let _ = 0; _ < A; _++)
          g(v, _ * 4, C, _ * 4);
        P = C, R = Ut;
        break;
      case Ht:
        A = v.length / 4;
        const y = new Uint16Array(A * 4);
        for (let _ = 0; _ < A; _++)
          b(v, _ * 4, y, _ * 4);
        P = y, R = Ht;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: M,
      height: S,
      data: P,
      header: u.string,
      gamma: u.gamma,
      exposure: u.exposure,
      type: R
    };
  }
  setDataType(e) {
    return this.type = e, this;
  }
  load(e, t, n, i) {
    function r(a, o) {
      switch (a.type) {
        case Ut:
        case Ht:
          a.colorSpace = Rt, a.minFilter = _t, a.magFilter = _t, a.generateMipmaps = !1, a.flipY = !0;
          break;
      }
      t && t(a, o);
    }
    return super.load(e, r, n, i);
  }
}
const _r = [
  { id: "skin", label: "Skin", color: 14264716, depth: 0, defaultOpacity: 0.18 },
  { id: "muscles_superficial", label: "Superficial muscles", color: 10631987, depth: 1, defaultOpacity: 0 },
  { id: "muscles_deep", label: "Deep muscles", color: 9056043, depth: 2, defaultOpacity: 0 },
  { id: "skeleton", label: "Skeleton", color: 15129795, depth: 3, defaultOpacity: 1 },
  { id: "cardiovascular", label: "Heart and vessels", color: 11872300, depth: 4, defaultOpacity: 1 },
  { id: "respiratory", label: "Lungs and airways", color: 14195354, depth: 4, defaultOpacity: 1 },
  { id: "digestive", label: "Digestive organs", color: 12881763, depth: 4, defaultOpacity: 1 },
  { id: "urinary", label: "Kidneys and urinary", color: 9852218, depth: 4, defaultOpacity: 1 },
  { id: "nervous", label: "Brain and nerves", color: 14929771, depth: 4, defaultOpacity: 1 },
  { id: "eyes", label: "Eyes", color: 15921386, depth: 4, defaultOpacity: 1 },
  { id: "other", label: "Other organs", color: 9139376, depth: 4, defaultOpacity: 1 }
], vr = new Map(_r.map((s) => [s.id, s])), _l = { type: "change" }, Lo = { type: "start" }, yh = { type: "end" }, er = new ji(), vl = new In(), Kb = Math.cos(70 * qt.DEG2RAD), ht = new D(), Nt = 2 * Math.PI, tt = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  TOUCH_ROTATE: 3,
  TOUCH_PAN: 4,
  TOUCH_DOLLY_PAN: 5,
  TOUCH_DOLLY_ROTATE: 6
}, ca = 1e-6;
class $b extends Ab {
  constructor(e, t = null) {
    super(e, t), this.state = tt.NONE, this.enabled = !0, this.target = new D(), this.cursor = new D(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Li.ROTATE, MIDDLE: Li.DOLLY, RIGHT: Li.PAN }, this.touches = { ONE: Pi.ROTATE, TWO: Pi.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new D(), this._lastQuaternion = new xn(), this._lastTargetPosition = new D(), this._quat = new xn().setFromUnitVectors(e.up, new D(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new ll(), this._sphericalDelta = new ll(), this._scale = 1, this._panOffset = new D(), this._rotateStart = new Ee(), this._rotateEnd = new Ee(), this._rotateDelta = new Ee(), this._panStart = new Ee(), this._panEnd = new Ee(), this._panDelta = new Ee(), this._dollyStart = new Ee(), this._dollyEnd = new Ee(), this._dollyDelta = new Ee(), this._dollyDirection = new D(), this._mouse = new Ee(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = Qb.bind(this), this._onPointerDown = Zb.bind(this), this._onPointerUp = Jb.bind(this), this._onContextMenu = a_.bind(this), this._onMouseWheel = n_.bind(this), this._onKeyDown = i_.bind(this), this._onTouchStart = s_.bind(this), this._onTouchMove = r_.bind(this), this._onMouseDown = e_.bind(this), this._onMouseMove = t_.bind(this), this._interceptControlDown = o_.bind(this), this._interceptControlUp = c_.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(_l), this.update(), this.state = tt.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    ht.copy(t).sub(this.target), ht.applyQuaternion(this._quat), this._spherical.setFromVector3(ht), this.autoRotate && this.state === tt.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(n) && isFinite(i) && (n < -Math.PI ? n += Nt : n > Math.PI && (n -= Nt), i < -Math.PI ? i += Nt : i > Math.PI && (i -= Nt), n <= i ? this._spherical.theta = Math.max(n, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + i) / 2 ? Math.max(n, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = !1;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (ht.setFromSpherical(this._spherical), ht.applyQuaternion(this._quatInverse), t.copy(this.target).add(ht), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = ht.length();
        a = this._clampDistance(o * this._scale);
        const c = o - a;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), r = !!c;
      } else if (this.object.isOrthographicCamera) {
        const o = new D(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = c !== this.object.zoom;
        const l = new D(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object), this.object.position.sub(l).add(o), this.object.updateMatrixWorld(), a = ht.length();
      } else
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (er.origin.copy(this.object.position), er.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(er.direction)) < Kb ? this.object.lookAt(this.target) : (vl.setFromNormalAndCoplanarPoint(this.object.up, this.target), er.intersectPlane(vl, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0);
    }
    return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > ca || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > ca || this._lastTargetPosition.distanceToSquared(this.target) > ca ? (this.dispatchEvent(_l), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? Nt / 60 * this.autoRotateSpeed * e : Nt / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    ht.setFromMatrixColumn(t, 0), ht.multiplyScalar(-e), this._panOffset.add(ht);
  }
  _panUp(e, t) {
    this.screenSpacePanning === !0 ? ht.setFromMatrixColumn(t, 1) : (ht.setFromMatrixColumn(t, 0), ht.crossVectors(this.object.up, ht)), ht.multiplyScalar(e), this._panOffset.add(ht);
  }
  // deltaX and deltaY are in pixels; right and down are positive
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      ht.copy(i).sub(this.target);
      let r = ht.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * r / n.clientHeight, this.object.matrix), this._panUp(2 * t * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor)
      return;
    this._performCursorZoom = !0;
    const n = this.domElement.getBoundingClientRect(), i = e - n.left, r = t - n.top, a = n.width, o = n.height;
    this._mouse.x = i / a * 2 - 1, this._mouse.y = -(r / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  //
  // event callbacks - update the object state
  //
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Nt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Nt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = !1;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(Nt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), t = !0;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(-Nt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), t = !0;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(Nt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), t = !0;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(-Nt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), t = !0;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1)
      this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, i);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1)
      this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, i);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(n * n + i * i);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1)
      this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e), i = 0.5 * (e.pageX + n.x), r = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(i, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Nt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Nt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1)
      this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, i);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(n * n + i * i);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (e.pageX + t.x) * 0.5, o = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  // pointers
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) return !0;
    return !1;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new Ee(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  //
  _customWheelEvent(e) {
    const t = e.deltaMode, n = {
      clientX: e.clientX,
      clientY: e.clientY,
      deltaY: e.deltaY
    };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function Zb(s) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(s.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(s) && (this._addPointer(s), s.pointerType === "touch" ? this._onTouchStart(s) : this._onMouseDown(s)));
}
function Qb(s) {
  this.enabled !== !1 && (s.pointerType === "touch" ? this._onTouchMove(s) : this._onMouseMove(s));
}
function Jb(s) {
  switch (this._removePointer(s), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(s.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(yh), this.state = tt.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function e_(s) {
  let e;
  switch (s.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case Li.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseDownDolly(s), this.state = tt.DOLLY;
      break;
    case Li.ROTATE:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(s), this.state = tt.PAN;
      } else {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(s), this.state = tt.ROTATE;
      }
      break;
    case Li.PAN:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enableRotate === !1) return;
        this._handleMouseDownRotate(s), this.state = tt.ROTATE;
      } else {
        if (this.enablePan === !1) return;
        this._handleMouseDownPan(s), this.state = tt.PAN;
      }
      break;
    default:
      this.state = tt.NONE;
  }
  this.state !== tt.NONE && this.dispatchEvent(Lo);
}
function t_(s) {
  switch (this.state) {
    case tt.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(s);
      break;
    case tt.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(s);
      break;
    case tt.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(s);
      break;
  }
}
function n_(s) {
  this.enabled === !1 || this.enableZoom === !1 || this.state !== tt.NONE || (s.preventDefault(), this.dispatchEvent(Lo), this._handleMouseWheel(this._customWheelEvent(s)), this.dispatchEvent(yh));
}
function i_(s) {
  this.enabled === !1 || this.enablePan === !1 || this._handleKeyDown(s);
}
function s_(s) {
  switch (this._trackPointer(s), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Pi.ROTATE:
          if (this.enableRotate === !1) return;
          this._handleTouchStartRotate(s), this.state = tt.TOUCH_ROTATE;
          break;
        case Pi.PAN:
          if (this.enablePan === !1) return;
          this._handleTouchStartPan(s), this.state = tt.TOUCH_PAN;
          break;
        default:
          this.state = tt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Pi.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          this._handleTouchStartDollyPan(s), this.state = tt.TOUCH_DOLLY_PAN;
          break;
        case Pi.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          this._handleTouchStartDollyRotate(s), this.state = tt.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = tt.NONE;
      }
      break;
    default:
      this.state = tt.NONE;
  }
  this.state !== tt.NONE && this.dispatchEvent(Lo);
}
function r_(s) {
  switch (this._trackPointer(s), this.state) {
    case tt.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      this._handleTouchMoveRotate(s), this.update();
      break;
    case tt.TOUCH_PAN:
      if (this.enablePan === !1) return;
      this._handleTouchMovePan(s), this.update();
      break;
    case tt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      this._handleTouchMoveDollyPan(s), this.update();
      break;
    case tt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      this._handleTouchMoveDollyRotate(s), this.update();
      break;
    default:
      this.state = tt.NONE;
  }
}
function a_(s) {
  this.enabled !== !1 && s.preventDefault();
}
function o_(s) {
  s.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
function c_(s) {
  s.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 }));
}
const l_ = (s) => s < 0.5 ? 4 * s * s * s : 1 - Math.pow(-2 * s + 2, 3) / 2;
class h_ {
  constructor(e, t, n) {
    this.camera = e, this.onChange = n, this.controls = new $b(e, t), this.controls.enableDamping = !0, this.controls.dampingFactor = 0.12, this.controls.minDistance = 0.04, this.controls.maxDistance = 8, this.controls.zoomToCursor = !0, this.controls.addEventListener("change", n), this.controls.addEventListener("start", () => {
      this.flight = null;
    });
  }
  controls;
  flight = null;
  /** Distance at which a sphere of `radius` fills `fill` of the smaller view dimension. */
  fitDistance(e, t = 0.7) {
    const n = qt.degToRad(this.camera.fov), i = 2 * Math.atan(Math.tan(n / 2) * this.camera.aspect);
    return e / (Math.sin(Math.min(n, i) / 2) * t);
  }
  /** Fly so that the sphere is framed. Keeps the current viewing direction unless `direction` is given. */
  flyTo(e, t, n = {}) {
    const i = (n.direction ?? this.camera.position.clone().sub(this.controls.target)).clone().normalize(), r = qt.clamp(this.fitDistance(t, n.fill), this.controls.minDistance * 2, this.controls.maxDistance), a = e.clone().addScaledVector(i, r), o = n.duration ?? 0.9;
    if (o <= 0) {
      this.camera.position.copy(a), this.controls.target.copy(e), this.controls.update(), this.onChange();
      return;
    }
    this.flight = { t: 0, dur: o, p0: this.camera.position.clone(), p1: a, t0: this.controls.target.clone(), t1: e.clone() }, this.onChange();
  }
  /** Advance animations. Returns true while the camera is still moving. */
  update(e) {
    if (this.flight) {
      const t = this.flight;
      t.t = Math.min(1, t.t + e / t.dur);
      const n = l_(t.t);
      return this.camera.position.lerpVectors(t.p0, t.p1, n), this.controls.target.lerpVectors(t.t0, t.t1, n), this.camera.lookAt(this.controls.target), t.t >= 1 && (this.flight = null), !0;
    }
    return this.controls.update(e);
  }
  get flying() {
    return this.flight !== null;
  }
  dispose() {
    this.controls.dispose();
  }
}
const d_ = 11740715, u_ = 3822728;
function f_(s) {
  const e = s.id, t = s.layer, n = vr.get(t).color;
  switch (t) {
    case "skin":
      return /hair|eyebrow/.test(e) ? { kind: "soft", color: 3811872, roughness: 0.8, sss: 0, sssStrength: 0 } : { kind: "soft", color: e === "lip" ? 12085354 : n, roughness: 0.55, sss: 16734780, sssStrength: 0.35 };
    case "muscles_superficial":
    case "muscles_deep":
      return /tendon|tract|linea_alba/.test(e) ? { kind: "bone", color: 15327954, roughness: 0.5 } : { kind: "fibre", color: n, roughness: 0.5 };
    case "skeleton":
      return /cartilage|disk/.test(e) ? { kind: "soft", color: 13621460, roughness: 0.45, sss: 10473727, sssStrength: 0.2 } : e === "teeth" ? { kind: "soft", color: 16052710, roughness: 0.2, coat: 0.6, sss: 16777215, sssStrength: 0.1 } : { kind: "bone", color: n, roughness: 0.62 };
    case "cardiovascular": {
      const i = /veins?_of|vena_cava|portal|cardiac_veins|pulmonary_arteries/.test(e) && !/pulmonary_veins/.test(e);
      return e === "heart" ? { kind: "soft", color: 10235692, roughness: 0.38, coat: 0.45, sss: 16730666, sssStrength: 0.45 } : { kind: "soft", color: i ? u_ : d_, roughness: 0.35, coat: 0.3, sss: i ? 6258632 : 16733491, sssStrength: i ? 0.18 : 0.3 };
    }
    case "respiratory":
      return /lobe_of/.test(e) ? { kind: "soft", color: 14129816, roughness: 0.5, coat: 0.25, sss: 16738901, sssStrength: 0.5 } : e === "diaphragm" ? { kind: "fibre", color: 10701376, roughness: 0.5 } : { kind: "soft", color: 14271412, roughness: 0.5, sss: 16746598, sssStrength: 0.25 };
    case "digestive":
      return { kind: "soft", color: { liver: 8205095, gallbladder: 6257978, biliary_tree: 7309885, pancreas: 14267242, stomach: 13602682, tongue: 12872298 }[e] ?? (/gingiva/.test(e) ? 14256778 : /gland/.test(e) ? 14067578 : n), roughness: 0.42, coat: 0.4, sss: 16734778, sssStrength: 0.45 };
    case "urinary":
      return { kind: "soft", color: /kidney/.test(e) ? 9061172 : 13607548, roughness: 0.42, coat: 0.4, sss: 16734778, sssStrength: 0.45 };
    case "nervous":
      return /^za_nerves|nerves_/.test(e) || e === "za_spinal_cord" ? { kind: "soft", color: 15258474, roughness: 0.5, sss: 16773280, sssStrength: 0.25 } : e === "cerebral_white_matter" ? { kind: "soft", color: 15327958, roughness: 0.5, sss: 16765120, sssStrength: 0.3 } : { kind: "soft", color: 14200998, roughness: 0.45, coat: 0.3, sss: 16747120, sssStrength: 0.45 };
    case "eyes":
      return /eyeball/.test(e) ? { kind: "soft", color: 15987180, roughness: 0.12, coat: 1, sss: 16777215, sssStrength: 0.1 } : /muscles/.test(e) ? { kind: "fibre", color: 10631987, roughness: 0.5 } : /nerve|tract|chiasm/.test(e) ? { kind: "soft", color: 15258474, roughness: 0.5, sss: 16773280, sssStrength: 0.25 } : { kind: "soft", color: 14067578, roughness: 0.45, coat: 0.3, sss: 16734778, sssStrength: 0.4 };
    default:
      return { kind: "soft", color: { spleen: 7023679, za_thyroid_gland: 11028286 }[e] ?? (/adrenal/.test(e) ? 14263361 : /thymus/.test(e) ? 14264736 : n), roughness: 0.42, coat: 0.35, sss: 16734778, sssStrength: 0.45 };
  }
}
const p_ = (
  /* glsl */
  `
float btHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float btNoise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(btHash(i), btHash(i + vec3(1,0,0)), f.x), mix(btHash(i + vec3(0,1,0)), btHash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(btHash(i + vec3(0,0,1)), btHash(i + vec3(1,0,1)), f.x), mix(btHash(i + vec3(0,1,1)), btHash(i + vec3(1,1,1)), f.x), f.y), f.z);
}`
);
function m_(s, e, t) {
  s.onBeforeCompile = (n) => {
    Object.assign(n.uniforms, t), n.vertexShader = n.vertexShader.replace("#include <common>", `#include <common>
varying vec3 vBtPos;`).replace("#include <begin_vertex>", `#include <begin_vertex>
vBtPos = position;`);
    let i = n.fragmentShader.replace("#include <common>", `#include <common>
varying vec3 vBtPos;
uniform vec3 uBtAxis; uniform vec3 uBtCenter; uniform float uBtHalfLen;
uniform vec3 uBtSss; uniform float uBtSssStrength; uniform float uBtDetail;
${p_}`);
    e === "fibre" ? i = i.replace("#include <color_fragment>", `#include <color_fragment>
  vec3 btA = normalize(uBtAxis);
  vec3 btT1 = normalize(cross(btA, abs(btA.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
  vec3 btT2 = cross(btA, btT1);
  float btU = dot(vBtPos - uBtCenter, btA);
  vec3 btQ = vec3(btU * 45.0, dot(vBtPos, btT1) * 720.0, dot(vBtPos, btT2) * 720.0);
  // fade the detail out when a noise cell gets smaller than a pixel (prevents shimmer at a distance)
  float btFade = uBtDetail * (1.0 - smoothstep(0.35, 1.1, max(length(fwidth(btQ.yz)), 0.0001)));
  float btH = btNoise(btQ) * 0.65 + btNoise(btQ * vec3(2.1, 2.3, 2.3) + 7.3) * 0.35;
  float btBundle = btNoise(vec3(btU * 12.0, dot(vBtPos, btT1) * 95.0, dot(vBtPos, btT2) * 95.0)); // coarser fascicles, visible from further away
  float btFadeB = uBtDetail * (1.0 - smoothstep(0.35, 1.1, max(length(fwidth(vec2(dot(vBtPos, btT1), dot(vBtPos, btT2)) * 95.0)), 0.0001)));
  diffuseColor.rgb *= mix(1.0, mix(0.80, 1.10, btH), btFade) * mix(1.0, mix(0.88, 1.06, btBundle), btFadeB);
  // pale, tendon-like ends along the axis (stylised)
  float btEnd = smoothstep(0.80, 1.02, abs(btU) / max(uBtHalfLen, 0.001));
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.86, 0.80, 0.72), btEnd * 0.45 * uBtDetail);`).replace("#include <normal_fragment_maps>", `#include <normal_fragment_maps>
  {
    float btHeight = btH * btFade * 0.9 + btBundle * btFadeB * 0.5;
    vec2 btD = vec2(dFdx(btHeight), dFdy(btHeight)) * 0.0011;
    vec3 btSx = dFdx(-vViewPosition), btSy = dFdy(-vViewPosition);
    vec3 btR1 = cross(btSy, normal), btR2 = cross(normal, btSx);
    float btDet = dot(btSx, btR1) * faceDirection;
    normal = normalize(abs(btDet) * normal - sign(btDet) * (btD.x * btR1 + btD.y * btR2));
  }`) : e === "bone" && (i = i.replace("#include <color_fragment>", `#include <color_fragment>
  float btM = btNoise(vBtPos * 140.0) * 0.6 + btNoise(vBtPos * 420.0) * 0.4;
  diffuseColor.rgb *= mix(1.0, mix(0.88, 1.05, btM), uBtDetail);`)), i = i.replace("#include <opaque_fragment>", `
  {
    float btNdv = saturate(dot(normalize(normal), normalize(vViewPosition)));
    float btRim = pow(1.0 - btNdv, 2.2);
    outgoingLight += uBtSss * diffuseColor.rgb * btRim * uBtSssStrength * 1.6;
    outgoingLight = mix(outgoingLight, outgoingLight * (0.92 + 0.08 * btNdv) + uBtSss * 0.03 * uBtSssStrength, 0.6);
  }
#include <opaque_fragment>`), n.fragmentShader = i;
  }, s.customProgramCacheKey = () => `bt-${e}`;
}
function g_(s, e, t) {
  const n = f_(s), i = n.coat ? new ln({ color: n.color, roughness: n.roughness, metalness: 0, clearcoat: n.coat, clearcoatRoughness: 0.28 }) : new Tr({ color: n.color, roughness: n.roughness, metalness: 0 });
  return m_(i, n.kind, {
    uBtAxis: { value: new D(...s.axis) },
    uBtCenter: { value: e.clone() },
    uBtHalfLen: { value: t },
    uBtSss: { value: new Te(n.sss ?? 0) },
    uBtSssStrength: { value: n.sssStrength ?? 0 },
    uBtDetail: { value: 1 }
  }), i.userData.baseColor = new Te(n.color), i.userData.kind = n.kind, i;
}
function b_(s) {
  const e = new lh(), t = new vt(new Xi(10, 10, 10), new gn({ color: 2106410, side: Lt }));
  e.add(t);
  const n = (a, o, c, l, h) => {
    const d = new vt(new ys(a, o), new gn({ color: new Te(c).multiplyScalar(l), side: Xt }));
    d.position.set(...h), d.lookAt(0, 0, 0), e.add(d);
  };
  n(5, 3.5, 16773600, 14, [2.5, 4.2, 3.5]), n(4, 4, 14674431, 5, [-4.5, 1, 2]), n(3, 5, 13623551, 9, [0.5, 2, -4.6]), n(8, 8, 4866104, 1.2, [0, -4.8, 0]);
  const i = new pr(s), r = i.fromScene(e, 0.03).texture;
  return i.dispose(), e.traverse((a) => {
    const o = a;
    o.isMesh && (o.geometry.dispose(), o.material.dispose());
  }), r;
}
function __(s = "#1e2833", e = "#0c1014") {
  const t = document.createElement("canvas");
  t.width = t.height = 256;
  const n = t.getContext("2d"), i = n.createRadialGradient(128, 96, 10, 128, 128, 190);
  i.addColorStop(0, s), i.addColorStop(1, e), n.fillStyle = i, n.fillRect(0, 0, 256, 256);
  const r = new Yg(t);
  return r.colorSpace = dt, r;
}
function xl(s, e) {
  if (e === $h)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s;
  if (e === Ja || e === ql) {
    let t = s.getIndex();
    if (t === null) {
      const a = [], o = s.getAttribute("position");
      if (o !== void 0) {
        for (let c = 0; c < o.count; c++)
          a.push(c);
        s.setIndex(a), t = s.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s;
    }
    const n = t.count - 2, i = [];
    if (e === Ja)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = s.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), s;
}
class v_ extends di {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new E_(t);
    }), this.register(function(t) {
      return new T_(t);
    }), this.register(function(t) {
      return new N_(t);
    }), this.register(function(t) {
      return new U_(t);
    }), this.register(function(t) {
      return new F_(t);
    }), this.register(function(t) {
      return new A_(t);
    }), this.register(function(t) {
      return new R_(t);
    }), this.register(function(t) {
      return new C_(t);
    }), this.register(function(t) {
      return new P_(t);
    }), this.register(function(t) {
      return new S_(t);
    }), this.register(function(t) {
      return new D_(t);
    }), this.register(function(t) {
      return new w_(t);
    }), this.register(function(t) {
      return new I_(t);
    }), this.register(function(t) {
      return new L_(t);
    }), this.register(function(t) {
      return new y_(t);
    }), this.register(function(t) {
      return new O_(t);
    }), this.register(function(t) {
      return new k_(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let a;
    if (this.resourcePath !== "")
      a = this.resourcePath;
    else if (this.path !== "") {
      const l = gs.extractUrlBase(e);
      a = gs.resolveURL(l, this.path);
    } else
      a = gs.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(l) {
      i ? i(l) : console.error(l), r.manager.itemError(e), r.manager.itemEnd(e);
    }, c = new wo(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(l) {
      try {
        r.parse(l, a, function(h) {
          t(h), r.manager.itemEnd(e);
        }, o);
      } catch (h) {
        o(h);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let r;
    const a = {}, o = {}, c = new TextDecoder();
    if (typeof e == "string")
      r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === Mh) {
        try {
          a[Ge.KHR_BINARY_GLTF] = new B_(e);
        } catch (d) {
          i && i(d);
          return;
        }
        r = JSON.parse(a[Ge.KHR_BINARY_GLTF].content);
      } else
        r = JSON.parse(c.decode(e));
    else
      r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new Q_(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const d = this.pluginCallbacks[h](l);
      d.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[d.name] = d, a[d.name] = !0;
    }
    if (r.extensionsUsed)
      for (let h = 0; h < r.extensionsUsed.length; ++h) {
        const d = r.extensionsUsed[h], f = r.extensionsRequired || [];
        switch (d) {
          case Ge.KHR_MATERIALS_UNLIT:
            a[d] = new M_();
            break;
          case Ge.KHR_DRACO_MESH_COMPRESSION:
            a[d] = new z_(r, this.dracoLoader);
            break;
          case Ge.KHR_TEXTURE_TRANSFORM:
            a[d] = new H_();
            break;
          case Ge.KHR_MESH_QUANTIZATION:
            a[d] = new G_();
            break;
          default:
            f.indexOf(d) >= 0 && o[d] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + d + '".');
        }
      }
    l.setExtensions(a), l.setPlugins(o), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function x_() {
  let s = {};
  return {
    get: function(e) {
      return s[e];
    },
    add: function(e, t) {
      s[e] = t;
    },
    remove: function(e) {
      delete s[e];
    },
    removeAll: function() {
      s = {};
    }
  };
}
const Ge = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class y_ {
  constructor(e) {
    this.parser = e, this.name = Ge.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json, c = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let l;
    const h = new Te(16777215);
    c.color !== void 0 && h.setRGB(c.color[0], c.color[1], c.color[2], Rt);
    const d = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new so(h), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new mb(h), l.distance = d;
        break;
      case "spot":
        l = new fb(h), l.distance = d, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), l.decay = 2, Ln(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, r = n.json.nodes[e], o = (r.extensions && r.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(c) {
      return n._getNodeRef(t.cache, o, c);
    });
  }
}
class M_ {
  constructor() {
    this.name = Ge.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return gn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Te(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const a = r.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], Rt), e.opacity = a[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, dt));
    }
    return Promise.all(i);
  }
}
class S_ {
  constructor(e) {
    this.parser = e, this.name = Ge.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class E_ {
  constructor(e) {
    this.parser = e, this.name = Ge.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Ee(o, o);
    }
    return Promise.all(r);
  }
}
class T_ {
  constructor(e) {
    this.parser = e, this.name = Ge.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class w_ {
  constructor(e) {
    this.parser = e, this.name = Ge.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class A_ {
  constructor(e) {
    this.parser = e, this.name = Ge.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [];
    t.sheenColor = new Te(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], Rt);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, dt)), a.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(r);
  }
}
class R_ {
  constructor(e) {
    this.parser = e, this.name = Ge.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(r);
  }
}
class C_ {
  constructor(e) {
    this.parser = e, this.name = Ge.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Te().setRGB(o[0], o[1], o[2], Rt), Promise.all(r);
  }
}
class P_ {
  constructor(e) {
    this.parser = e, this.name = Ge.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class D_ {
  constructor(e) {
    this.parser = e, this.name = Ge.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Te().setRGB(o[0], o[1], o[2], Rt), a.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, dt)), Promise.all(r);
  }
}
class L_ {
  constructor(e) {
    this.parser = e, this.name = Ge.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(r);
  }
}
class I_ {
  constructor(e) {
    this.parser = e, this.name = Ge.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name])
      return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(r);
  }
}
class N_ {
  constructor(e) {
    this.parser = e, this.name = Ge.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name])
      return null;
    const r = i.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, a);
  }
}
class U_ {
  constructor(e) {
    this.parser = e, this.name = Ge.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const a = r.extensions[t], o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class F_ {
  constructor(e) {
    this.parser = e, this.name = Ge.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t])
      return null;
    const a = r.extensions[t], o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function(l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class O_ {
  constructor(e) {
    this.name = Ge.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
          throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(o) {
        const c = i.byteOffset || 0, l = i.byteLength || 0, h = i.count, d = i.byteStride, f = new Uint8Array(o, c, l);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, d, f, i.mode, i.filter).then(function(p) {
          return p.buffer;
        }) : a.ready.then(function() {
          const p = new ArrayBuffer(h * d);
          return a.decodeGltfBuffer(new Uint8Array(p), h, d, f, i.mode, i.filter), p;
        });
      });
    } else
      return null;
  }
}
class k_ {
  constructor(e) {
    this.name = Ge.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (l.mode !== jt.TRIANGLES && l.mode !== jt.TRIANGLE_STRIP && l.mode !== jt.TRIANGLE_FAN && l.mode !== void 0)
        return null;
    const a = n.extensions[this.name].attributes, o = [], c = {};
    for (const l in a)
      o.push(this.parser.getDependency("accessor", a[l]).then((h) => (c[l] = h, c[l])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((l) => {
      const h = l.pop(), d = h.isGroup ? h.children : [h], f = l[0].count, p = [];
      for (const g of d) {
        const b = new Re(), m = new D(), u = new xn(), M = new D(1, 1, 1), S = new Wg(g.geometry, g.material, f);
        for (let v = 0; v < f; v++)
          c.TRANSLATION && m.fromBufferAttribute(c.TRANSLATION, v), c.ROTATION && u.fromBufferAttribute(c.ROTATION, v), c.SCALE && M.fromBufferAttribute(c.SCALE, v), S.setMatrixAt(v, b.compose(m, u, M));
        for (const v in c)
          if (v === "_COLOR_0") {
            const P = c[v];
            S.instanceColor = new no(P.array, P.itemSize, P.normalized);
          } else v !== "TRANSLATION" && v !== "ROTATION" && v !== "SCALE" && g.geometry.setAttribute(v, c[v]);
        ot.prototype.copy.call(S, g), this.parser.assignFinalMaterial(S), p.push(S);
      }
      return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
    }));
  }
}
const Mh = "glTF", cs = 12, yl = { JSON: 1313821514, BIN: 5130562 };
class B_ {
  constructor(e) {
    this.name = Ge.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, cs), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Mh)
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - cs, r = new DataView(e, cs);
    let a = 0;
    for (; a < i; ) {
      const o = r.getUint32(a, !0);
      a += 4;
      const c = r.getUint32(a, !0);
      if (a += 4, c === yl.JSON) {
        const l = new Uint8Array(e, cs + a, o);
        this.content = n.decode(l);
      } else if (c === yl.BIN) {
        const l = cs + a;
        this.body = e.slice(l, l + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class z_ {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Ge.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, c = {}, l = {};
    for (const h in a) {
      const d = ao[h] || h.toLowerCase();
      o[d] = a[h];
    }
    for (const h in e.attributes) {
      const d = ao[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const f = n.accessors[e.attributes[h]], p = Fi[f.componentType];
        l[d] = p.name, c[d] = f.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(h) {
      return new Promise(function(d, f) {
        i.decodeDracoFile(h, function(p) {
          for (const g in p.attributes) {
            const b = p.attributes[g], m = c[g];
            m !== void 0 && (b.normalized = m);
          }
          d(p);
        }, o, l, Rt, f);
      });
    });
  }
}
class H_ {
  constructor() {
    this.name = Ge.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
  }
}
class G_ {
  constructor() {
    this.name = Ge.KHR_MESH_QUANTIZATION;
  }
}
class Sh extends Ss {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let a = 0; a !== i; a++)
      t[a] = n[r + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = o * 2, l = o * 3, h = i - t, d = (n - t) / h, f = d * d, p = f * d, g = e * l, b = g - l, m = -2 * p + 3 * f, u = p - f, M = 1 - m, S = u - f + d;
    for (let v = 0; v !== o; v++) {
      const P = a[b + v + o], R = a[b + v + c] * h, A = a[g + v + o], C = a[g + v] * h;
      r[v] = M * P + S * R + m * A + u * C;
    }
    return r;
  }
}
const V_ = new xn();
class W_ extends Sh {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return V_.fromArray(r).normalize().toArray(r), r;
  }
}
const jt = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
}, Fi = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Ml = {
  9728: yt,
  9729: _t,
  9984: Ol,
  9985: sr,
  9986: hs,
  9987: mn
}, Sl = {
  33071: pn,
  33648: ur,
  10497: _n
}, la = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, ao = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, qn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, j_ = {
  CUBICSPLINE: void 0,
  // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
  // keyframe track will be initialized with a default interpolation type, then modified.
  LINEAR: vs,
  STEP: _s
}, ha = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function X_(s) {
  return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new Tr({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: bn
  })), s.DefaultMaterial;
}
function ri(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function Ln(s, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function q_(s, e, t) {
  let n = !1, i = !1, r = !1;
  for (let l = 0, h = e.length; l < h; l++) {
    const d = e[l];
    if (d.POSITION !== void 0 && (n = !0), d.NORMAL !== void 0 && (i = !0), d.COLOR_0 !== void 0 && (r = !0), n && i && r) break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const a = [], o = [], c = [];
  for (let l = 0, h = e.length; l < h; l++) {
    const d = e[l];
    if (n) {
      const f = d.POSITION !== void 0 ? t.getDependency("accessor", d.POSITION) : s.attributes.position;
      a.push(f);
    }
    if (i) {
      const f = d.NORMAL !== void 0 ? t.getDependency("accessor", d.NORMAL) : s.attributes.normal;
      o.push(f);
    }
    if (r) {
      const f = d.COLOR_0 !== void 0 ? t.getDependency("accessor", d.COLOR_0) : s.attributes.color;
      c.push(f);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(c)
  ]).then(function(l) {
    const h = l[0], d = l[1], f = l[2];
    return n && (s.morphAttributes.position = h), i && (s.morphAttributes.normal = d), r && (s.morphAttributes.color = f), s.morphTargetsRelative = !0, s;
  });
}
function Y_(s, e) {
  if (s.updateMorphTargets(), e.weights !== void 0)
    for (let t = 0, n = e.weights.length; t < n; t++)
      s.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s.morphTargetInfluences.length === t.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        s.morphTargetDictionary[t[n]] = n;
    } else
      console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function K_(s) {
  let e;
  const t = s.extensions && s.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + da(t.attributes) : e = s.indices + ":" + da(s.attributes) + ":" + s.mode, s.targets !== void 0)
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + da(s.targets[n]);
  return e;
}
function da(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++)
    e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function oo(s) {
  switch (s) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function $_(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : s.search(/\.ktx2($|\?)/i) > 0 || s.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const Z_ = new Re();
class Q_ {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new x_(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = -1, r = !1, a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const c = o.match(/Version\/(\d+)/);
      i = n && c ? parseInt(c[1], 10) : -1, r = o.indexOf("Firefox") > -1, a = r ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || r && a < 98 ? this.textureLoader = new db(this.options.manager) : this.textureLoader = new bb(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new wo(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(a) {
      const o = {
        scene: a[0][i.scene || 0],
        scenes: a[0],
        animations: a[1],
        cameras: a[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      return ri(r, o, i), Ln(o, i), Promise.all(n._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(o);
      })).then(function() {
        for (const c of o.scenes)
          c.updateMatrixWorld();
        e(o);
      });
    }).catch(t);
  }
  /**
   * Marks the special nodes/meshes in json for efficient parse.
   */
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i].joints;
      for (let o = 0, c = a.length; o < c; o++)
        e[a[o]].isBone = !0;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  /**
   * Counts references to shared node / Object3D resources. These resources
   * can be reused, or "instantiated", at multiple nodes in the scene
   * hierarchy. Mesh, Camera, and Light instances are instantiated and must
   * be marked. Non-scenegraph resources (like Materials, Geometries, and
   * Textures) can be reused directly and are not marked here.
   *
   * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
   */
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  /** Returns a reference to a shared resource, cloning it if necessary. */
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), r = (a, o) => {
      const c = this.associations.get(a);
      c != null && this.associations.set(o, c);
      for (const [l, h] of a.children.entries())
        r(h, o.children[l]);
    };
    return r(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  /**
   * Requests the specified dependency asynchronously, with caching.
   * @param {string} type
   * @param {number} index
   * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
   */
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !i)
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  /**
   * Requests all dependencies of the specified type asynchronously, with caching.
   * @param {string} type
   * @return {Promise<Array<Object>>}
   */
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(r, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, a) {
      n.load(gs.resolveURL(t.uri, i.path), r, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
   * @param {number} bufferViewIndex
   * @return {Promise<ArrayBuffer>}
   */
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
   * @param {number} accessorIndex
   * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
   */
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = la[i.type], o = Fi[i.componentType], c = i.normalized === !0, l = new o(i.count * a);
      return Promise.resolve(new At(l, a, c));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(a) {
      const o = a[0], c = la[i.type], l = Fi[i.componentType], h = l.BYTES_PER_ELEMENT, d = h * c, f = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0;
      let b, m;
      if (p && p !== d) {
        const u = Math.floor(f / p), M = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + u + ":" + i.count;
        let S = t.cache.get(M);
        S || (b = new l(o, u * p, i.count * p / h), S = new Bg(b, p / h), t.cache.add(M, S)), m = new So(S, c, f % p / h, g);
      } else
        o === null ? b = new l(i.count * c) : b = new l(o, f, i.count * c), m = new At(b, c, g);
      if (i.sparse !== void 0) {
        const u = la.SCALAR, M = Fi[i.sparse.indices.componentType], S = i.sparse.indices.byteOffset || 0, v = i.sparse.values.byteOffset || 0, P = new M(a[1], S, i.sparse.count * u), R = new l(a[2], v, i.sparse.count * c);
        o !== null && (m = new At(m.array.slice(), m.itemSize, m.normalized)), m.normalized = !1;
        for (let A = 0, C = P.length; A < C; A++) {
          const y = P[A];
          if (m.setX(y, R[A * c]), c >= 2 && m.setY(y, R[A * c + 1]), c >= 3 && m.setZ(y, R[A * c + 2]), c >= 4 && m.setW(y, R[A * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = g;
      }
      return m;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
   * @param {number} textureIndex
   * @return {Promise<THREE.Texture|null>}
   */
  loadTexture(e) {
    const t = this.json, n = this.options, r = t.textures[e].source, a = t.images[r];
    let o = this.textureLoader;
    if (a.uri) {
      const c = n.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.loadTextureImage(e, r, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, r = this.json, a = r.textures[e], o = r.images[t], c = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[c])
      return this.textureCache[c];
    const l = this.loadImageSource(t, n).then(function(h) {
      h.flipY = !1, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (h.name = o.uri);
      const f = (r.samplers || {})[a.sampler] || {};
      return h.magFilter = Ml[f.magFilter] || _t, h.minFilter = Ml[f.minFilter] || mn, h.wrapS = Sl[f.wrapS] || _n, h.wrapT = Sl[f.wrapT] || _n, h.generateMipmaps = !h.isCompressedTexture && h.minFilter !== yt && h.minFilter !== _t, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((d) => d.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let c = a.uri || "", l = !1;
    if (a.bufferView !== void 0)
      c = n.getDependency("bufferView", a.bufferView).then(function(d) {
        l = !0;
        const f = new Blob([d], { type: a.mimeType });
        return c = o.createObjectURL(f), c;
      });
    else if (a.uri === void 0)
      throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(c).then(function(d) {
      return new Promise(function(f, p) {
        let g = f;
        t.isImageBitmapLoader === !0 && (g = function(b) {
          const m = new ut(b);
          m.needsUpdate = !0, f(m);
        }), t.load(gs.resolveURL(d, r.path), g, void 0, p);
      });
    }).then(function(d) {
      return l === !0 && o.revokeObjectURL(c), Ln(d, a), d.userData.mimeType = a.mimeType || $_(a.uri), d;
    }).catch(function(d) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), d;
    });
    return this.sourceCache[e] = h, h;
  }
  /**
   * Asynchronously assigns a texture to the given material parameters.
   * @param {Object} materialParams
   * @param {string} mapName
   * @param {Object} mapDef
   * @return {Promise<Texture>}
   */
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), r.extensions[Ge.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[Ge.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const c = r.associations.get(a);
          a = r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), r.associations.set(a, c);
        }
      }
      return i !== void 0 && (a.colorSpace = i), e[t] = a, a;
    });
  }
  /**
   * Assigns final material to a Mesh, Line, or Points instance. The instance
   * already has a material (generated from the glTF material options alone)
   * but reuse of the same glTF material may require multiple threejs materials
   * to accommodate different primitive types, defines, etc. New materials will
   * be created if necessary, and reused from a cache.
   * @param  {Object3D} mesh Mesh, Line, or Points instance.
   */
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new uh(), an.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = !1, this.cache.add(o, c)), n = c;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c || (c = new dh(), an.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(o, c)), n = c;
    }
    if (i || r || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), r && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let c = this.cache.get(o);
      c || (c = n.clone(), r && (c.vertexColors = !0), a && (c.flatShading = !0), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(o, c), this.associations.set(c, this.associations.get(n))), n = c;
    }
    e.material = n;
  }
  getMaterialType() {
    return Tr;
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
   * @param {number} materialIndex
   * @return {Promise<Material>}
   */
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let a;
    const o = {}, c = r.extensions || {}, l = [];
    if (c[Ge.KHR_MATERIALS_UNLIT]) {
      const d = i[Ge.KHR_MATERIALS_UNLIT];
      a = d.getMaterialType(), l.push(d.extendParams(o, r, t));
    } else {
      const d = r.pbrMetallicRoughness || {};
      if (o.color = new Te(1, 1, 1), o.opacity = 1, Array.isArray(d.baseColorFactor)) {
        const f = d.baseColorFactor;
        o.color.setRGB(f[0], f[1], f[2], Rt), o.opacity = f[3];
      }
      d.baseColorTexture !== void 0 && l.push(t.assignTexture(o, "map", d.baseColorTexture, dt)), o.metalness = d.metallicFactor !== void 0 ? d.metallicFactor : 1, o.roughness = d.roughnessFactor !== void 0 ? d.roughnessFactor : 1, d.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(o, "metalnessMap", d.metallicRoughnessTexture)), l.push(t.assignTexture(o, "roughnessMap", d.metallicRoughnessTexture))), a = this._invokeOne(function(f) {
        return f.getMaterialType && f.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(f) {
        return f.extendMaterialParams && f.extendMaterialParams(e, o);
      })));
    }
    r.doubleSided === !0 && (o.side = Xt);
    const h = r.alphaMode || ha.OPAQUE;
    if (h === ha.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, h === ha.MASK && (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && a !== gn && (l.push(t.assignTexture(o, "normalMap", r.normalTexture)), o.normalScale = new Ee(1, 1), r.normalTexture.scale !== void 0)) {
      const d = r.normalTexture.scale;
      o.normalScale.set(d, d);
    }
    if (r.occlusionTexture !== void 0 && a !== gn && (l.push(t.assignTexture(o, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && a !== gn) {
      const d = r.emissiveFactor;
      o.emissive = new Te().setRGB(d[0], d[1], d[2], Rt);
    }
    return r.emissiveTexture !== void 0 && a !== gn && l.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, dt)), Promise.all(l).then(function() {
      const d = new a(o);
      return r.name && (d.name = r.name), Ln(d, r), t.associations.set(d, { materials: e }), r.extensions && ri(i, d, r), d;
    });
  }
  /** When Object3D instances are targeted by animation, they need unique names. */
  createUniqueName(e) {
    const t = et.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
   *
   * Creates BufferGeometries from primitives.
   *
   * @param {Array<GLTF.Primitive>} primitives
   * @return {Promise<Array<BufferGeometry>>}
   */
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(o) {
      return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(c) {
        return El(c, o, t);
      });
    }
    const a = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o], h = K_(l), d = i[h];
      if (d)
        a.push(d.promise);
      else {
        let f;
        l.extensions && l.extensions[Ge.KHR_DRACO_MESH_COMPRESSION] ? f = r(l) : f = El(new Ft(), l, t), i[h] = { primitive: l, promise: f }, a.push(f);
      }
    }
    return Promise.all(a);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
   * @param {number} meshIndex
   * @return {Promise<Group|Mesh|SkinnedMesh>}
   */
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], a = r.primitives, o = [];
    for (let c = 0, l = a.length; c < l; c++) {
      const h = a[c].material === void 0 ? X_(this.cache) : this.getDependency("material", a[c].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(c) {
      const l = c.slice(0, c.length - 1), h = c[c.length - 1], d = [];
      for (let p = 0, g = h.length; p < g; p++) {
        const b = h[p], m = a[p];
        let u;
        const M = l[p];
        if (m.mode === jt.TRIANGLES || m.mode === jt.TRIANGLE_STRIP || m.mode === jt.TRIANGLE_FAN || m.mode === void 0)
          u = r.isSkinnedMesh === !0 ? new Hg(b, M) : new vt(b, M), u.isSkinnedMesh === !0 && u.normalizeSkinWeights(), m.mode === jt.TRIANGLE_STRIP ? u.geometry = xl(u.geometry, ql) : m.mode === jt.TRIANGLE_FAN && (u.geometry = xl(u.geometry, Ja));
        else if (m.mode === jt.LINES)
          u = new jg(b, M);
        else if (m.mode === jt.LINE_STRIP)
          u = new To(b, M);
        else if (m.mode === jt.LINE_LOOP)
          u = new Xg(b, M);
        else if (m.mode === jt.POINTS)
          u = new qg(b, M);
        else
          throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(u.geometry.morphAttributes).length > 0 && Y_(u, r), u.name = t.createUniqueName(r.name || "mesh_" + e), Ln(u, r), m.extensions && ri(i, u, m), t.assignFinalMaterial(u), d.push(u);
      }
      for (let p = 0, g = d.length; p < g; p++)
        t.associations.set(d[p], {
          meshes: e,
          primitives: p
        });
      if (d.length === 1)
        return r.extensions && ri(i, d[0], r), d[0];
      const f = new Fn();
      r.extensions && ri(i, f, r), t.associations.set(f, { meshes: e });
      for (let p = 0, g = d.length; p < g; p++)
        f.add(d[p]);
      return f;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
   * @param {number} cameraIndex
   * @return {Promise<THREE.Camera>}
   */
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Dt(qt.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Sr(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Ln(t, n), Promise.resolve(t);
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
   * @param {number} skinIndex
   * @return {Promise<Skeleton>}
   */
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, r = t.joints.length; i < r; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), a = i, o = [], c = [];
      for (let l = 0, h = a.length; l < h; l++) {
        const d = a[l];
        if (d) {
          o.push(d);
          const f = new Re();
          r !== null && f.fromArray(r.array, l * 16), c.push(f);
        } else
          console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new Eo(o, c);
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
   * @param {number} animationIndex
   * @return {Promise<AnimationClip>}
   */
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, a = [], o = [], c = [], l = [], h = [];
    for (let d = 0, f = i.channels.length; d < f; d++) {
      const p = i.channels[d], g = i.samplers[p.sampler], b = p.target, m = b.node, u = i.parameters !== void 0 ? i.parameters[g.input] : g.input, M = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      b.node !== void 0 && (a.push(this.getDependency("node", m)), o.push(this.getDependency("accessor", u)), c.push(this.getDependency("accessor", M)), l.push(g), h.push(b));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(c),
      Promise.all(l),
      Promise.all(h)
    ]).then(function(d) {
      const f = d[0], p = d[1], g = d[2], b = d[3], m = d[4], u = [];
      for (let M = 0, S = f.length; M < S; M++) {
        const v = f[M], P = p[M], R = g[M], A = b[M], C = m[M];
        if (v === void 0) continue;
        v.updateMatrix && v.updateMatrix();
        const y = n._createAnimationTracks(v, P, R, A, C);
        if (y)
          for (let _ = 0; _ < y.length; _++)
            u.push(y[_]);
      }
      return new ib(r, void 0, u);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const a = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh)
          for (let c = 0, l = i.weights.length; c < l; c++)
            o.morphTargetInfluences[c] = i.weights[c];
      }), a;
    });
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
   * @param {number} nodeIndex
   * @return {Promise<Object3D>}
   */
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), a = [], o = i.children || [];
    for (let l = 0, h = o.length; l < h; l++)
      a.push(n.getDependency("node", o[l]));
    const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      r,
      Promise.all(a),
      c
    ]).then(function(l) {
      const h = l[0], d = l[1], f = l[2];
      f !== null && h.traverse(function(p) {
        p.isSkinnedMesh && p.bind(f, Z_);
      });
      for (let p = 0, g = d.length; p < g; p++)
        h.add(d[p]);
      return h;
    });
  }
  // ._loadNodeShallow() parses a single node.
  // skin and child nodes are created and added in .loadNode() (no '_' prefix).
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0)
      return this.nodeCache[e];
    const r = t.nodes[e], a = r.name ? i.createUniqueName(r.name) : "", o = [], c = i._invokeOne(function(l) {
      return l.createNodeMesh && l.createNodeMesh(e);
    });
    return c && o.push(c), r.camera !== void 0 && o.push(i.getDependency("camera", r.camera).then(function(l) {
      return i._getNodeRef(i.cameraCache, r.camera, l);
    })), i._invokeAll(function(l) {
      return l.createNodeAttachment && l.createNodeAttachment(e);
    }).forEach(function(l) {
      o.push(l);
    }), this.nodeCache[e] = Promise.all(o).then(function(l) {
      let h;
      if (r.isBone === !0 ? h = new hh() : l.length > 1 ? h = new Fn() : l.length === 1 ? h = l[0] : h = new ot(), h !== l[0])
        for (let d = 0, f = l.length; d < f; d++)
          h.add(l[d]);
      if (r.name && (h.userData.name = r.name, h.name = a), Ln(h, r), r.extensions && ri(n, h, r), r.matrix !== void 0) {
        const d = new Re();
        d.fromArray(r.matrix), h.applyMatrix4(d);
      } else
        r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  /**
   * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
   * @param {number} sceneIndex
   * @return {Promise<Group>}
   */
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new Fn();
    n.name && (r.name = i.createUniqueName(n.name)), Ln(r, n), n.extensions && ri(t, r, n);
    const a = n.nodes || [], o = [];
    for (let c = 0, l = a.length; c < l; c++)
      o.push(i.getDependency("node", a[c]));
    return Promise.all(o).then(function(c) {
      for (let h = 0, d = c.length; h < d; h++)
        r.add(c[h]);
      const l = (h) => {
        const d = /* @__PURE__ */ new Map();
        for (const [f, p] of i.associations)
          (f instanceof an || f instanceof ut) && d.set(f, p);
        return h.traverse((f) => {
          const p = i.associations.get(f);
          p != null && d.set(f, p);
        }), d;
      };
      return i.associations = l(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const a = [], o = e.name ? e.name : e.uuid, c = [];
    qn[r.path] === qn.weights ? e.traverse(function(f) {
      f.morphTargetInfluences && c.push(f.name ? f.name : f.uuid);
    }) : c.push(o);
    let l;
    switch (qn[r.path]) {
      case qn.weights:
        l = Gi;
        break;
      case qn.rotation:
        l = Vi;
        break;
      case qn.position:
      case qn.scale:
        l = Wi;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = Gi;
            break;
          case 2:
          case 3:
          default:
            l = Wi;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? j_[i.interpolation] : vs, d = this._getArrayFromAccessor(n);
    for (let f = 0, p = c.length; f < p; f++) {
      const g = new l(
        c[f] + "." + qn[r.path],
        t.array,
        d,
        h
      );
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = oo(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, a = t.length; r < a; r++)
        i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof Vi ? W_ : Sh;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
}
function J_(s, e, t) {
  const n = e.attributes, i = new Yt();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], c = o.min, l = o.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(
        new D(c[0], c[1], c[2]),
        new D(l[0], l[1], l[2])
      ), o.normalized) {
        const h = oo(Fi[o.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else
    return;
  const r = e.targets;
  if (r !== void 0) {
    const o = new D(), c = new D();
    for (let l = 0, h = r.length; l < h; l++) {
      const d = r[l];
      if (d.POSITION !== void 0) {
        const f = t.json.accessors[d.POSITION], p = f.min, g = f.max;
        if (p !== void 0 && g !== void 0) {
          if (c.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))), c.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))), c.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))), f.normalized) {
            const b = oo(Fi[f.componentType]);
            c.multiplyScalar(b);
          }
          o.max(c);
        } else
          console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  s.boundingBox = i;
  const a = new Kt();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = a;
}
function El(s, e, t) {
  const n = e.attributes, i = [];
  function r(a, o) {
    return t.getDependency("accessor", a).then(function(c) {
      s.setAttribute(o, c);
    });
  }
  for (const a in n) {
    const o = ao[a] || a.toLowerCase();
    o in s.attributes || i.push(r(n[a], o));
  }
  if (e.indices !== void 0 && !s.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      s.setIndex(o);
    });
    i.push(a);
  }
  return We.workingColorSpace !== Rt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`), Ln(s, e), J_(s, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? q_(s, e.targets, t) : s;
  });
}
var e0 = function() {
  var s = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb", e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb", t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]), n = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
  if (typeof WebAssembly != "object")
    return {
      supported: !1
    };
  var i = WebAssembly.validate(t) ? e : s, r, a = WebAssembly.instantiate(o(i), {}).then(function(u) {
    r = u.instance, r.exports.__wasm_call_ctors();
  });
  function o(u) {
    for (var M = new Uint8Array(u.length), S = 0; S < u.length; ++S) {
      var v = u.charCodeAt(S);
      M[S] = v > 96 ? v - 97 : v > 64 ? v - 39 : v + 4;
    }
    for (var P = 0, S = 0; S < u.length; ++S)
      M[P++] = M[S] < 60 ? n[M[S]] : (M[S] - 60) * 64 + M[++S];
    return M.buffer.slice(0, P);
  }
  function c(u, M, S, v, P, R) {
    var A = r.exports.sbrk, C = S + 3 & -4, y = A(C * v), _ = A(P.length), w = new Uint8Array(r.exports.memory.buffer);
    w.set(P, _);
    var O = u(y, S, v, _, P.length);
    if (O == 0 && R && R(y, C, v), M.set(w.subarray(y, y + S * v)), A(y - A(0)), O != 0)
      throw new Error("Malformed buffer data: " + O);
  }
  var l = {
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp"
  }, h = {
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  }, d = [], f = 0;
  function p(u) {
    var M = {
      object: new Worker(u),
      pending: 0,
      requests: {}
    };
    return M.object.onmessage = function(S) {
      var v = S.data;
      M.pending -= v.count, M.requests[v.id][v.action](v.value), delete M.requests[v.id];
    }, M;
  }
  function g(u) {
    for (var M = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(o(i)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + c.toString() + m.toString(), S = new Blob([M], { type: "text/javascript" }), v = URL.createObjectURL(S), P = 0; P < u; ++P)
      d[P] = p(v);
    URL.revokeObjectURL(v);
  }
  function b(u, M, S, v, P) {
    for (var R = d[0], A = 1; A < d.length; ++A)
      d[A].pending < R.pending && (R = d[A]);
    return new Promise(function(C, y) {
      var _ = new Uint8Array(S), w = f++;
      R.pending += u, R.requests[w] = { resolve: C, reject: y }, R.object.postMessage({ id: w, count: u, size: M, source: _, mode: v, filter: P }, [_.buffer]);
    });
  }
  function m(u) {
    a.then(function() {
      var M = u.data;
      try {
        var S = new Uint8Array(M.count * M.size);
        c(r.exports[M.mode], S, M.count, M.size, M.source, r.exports[M.filter]), self.postMessage({ id: M.id, count: M.count, action: "resolve", value: S }, [S.buffer]);
      } catch (v) {
        self.postMessage({ id: M.id, count: M.count, action: "reject", value: v });
      }
    });
  }
  return {
    ready: a,
    supported: !0,
    useWorkers: function(u) {
      g(u);
    },
    decodeVertexBuffer: function(u, M, S, v, P) {
      c(r.exports.meshopt_decodeVertexBuffer, u, M, S, v, r.exports[l[P]]);
    },
    decodeIndexBuffer: function(u, M, S, v) {
      c(r.exports.meshopt_decodeIndexBuffer, u, M, S, v);
    },
    decodeIndexSequence: function(u, M, S, v) {
      c(r.exports.meshopt_decodeIndexSequence, u, M, S, v);
    },
    decodeGltfBuffer: function(u, M, S, v, P, R) {
      c(r.exports[h[P]], u, M, S, v, r.exports[l[R]]);
    },
    decodeGltfBufferAsync: function(u, M, S, v, P) {
      return d.length > 0 ? b(u, M, S, h[v], l[P]) : a.then(function() {
        var R = new Uint8Array(u * M);
        return c(r.exports[h[v]], R, u, M, S, r.exports[l[P]]), R;
      });
    }
  };
}();
class t0 extends kn {
  constructor(e, t) {
    super(), this.baseUrl = e, this.makeMaterial = t, this.root.name = "anatomy";
  }
  structures = /* @__PURE__ */ new Map();
  packs = /* @__PURE__ */ new Map();
  root = new Fn();
  loader = new v_().setMeshoptDecoder(e0);
  fileJobs = /* @__PURE__ */ new Map();
  pending = 0;
  done = 0;
  async loadPack(e) {
    const t = await fetch(`${this.baseUrl}/${e}/index.json`);
    if (!t.ok) throw new Error(`Could not load model pack "${e}" (${t.status})`);
    const n = await t.json();
    this.packs.set(e, n);
    for (const i of n.structures) {
      const r = new Yt(new D(...i.bounds.min), new D(...i.bounds.max)), a = new D(...i.centroid), o = r.getSize(new D()).length() / 2, c = new vt(new Ft(), this.makeMaterial(i, a, o));
      c.name = i.id, c.visible = !1, c.userData.structureId = i.id;
      const l = { meta: i, pack: e, mesh: c, lod: 3, target: 2, geoms: {}, center: a, radius: o };
      this.structures.set(i.id, l), this.root.add(c), this.dispatchEvent({ type: "structure", structure: l });
    }
    return n;
  }
  /** Ask for a structure to be shown at `lod` or finer. Downloads the file if needed. */
  ensureLod(e, t) {
    if (t < e.target && (e.target = t), e.geoms[t])
      return this.activate(e), Promise.resolve();
    const n = e.meta.files[String(t)];
    return n ? this.loadFile(e.pack, n) : Promise.resolve();
  }
  /** Set the finest LOD to draw without downloading anything (used to drop detail when zooming out). */
  setTarget(e, t) {
    e.target !== t && (e.target = t, this.activate(e));
  }
  /** Show the finest loaded geometry that is not finer than the target; else the coarsest one available. */
  activate(e) {
    const t = [0, 1, 2].filter((i) => e.geoms[i]);
    if (!t.length) return;
    const n = t.find((i) => i >= e.target) ?? t[t.length - 1];
    n !== e.lod && (e.mesh.geometry = e.geoms[n], e.mesh.visible = !0, e.lod = n, this.dispatchEvent({ type: "lod", structure: e }));
  }
  /** Load every file of one LOD for a set of structures. */
  async ensureLodFor(e, t) {
    const n = /* @__PURE__ */ new Set();
    for (const i of e) n.add(this.ensureLod(i, t));
    await Promise.all(n);
  }
  loadFile(e, t) {
    const n = `${e}/${t}`;
    let i = this.fileJobs.get(n);
    return i || (this.pending++, this.emitProgress(), i = this.loader.loadAsync(`${this.baseUrl}/${n}`).then((r) => {
      r.scene.updateMatrixWorld(!0), r.scene.traverse((a) => {
        const o = a;
        if (!o.isMesh) return;
        const c = this.structures.get(o.userData.id), l = o.userData.lod;
        !c || c.geoms[l] || (c.geoms[l] = n0(o), this.activate(c));
      });
    }).finally(() => {
      this.done++, this.emitProgress();
    }), this.fileJobs.set(n, i), i);
  }
  emitProgress() {
    this.dispatchEvent({ type: "progress", loaded: this.done, total: this.pending });
  }
  dispose() {
    for (const e of this.structures.values()) {
      for (const t of Object.values(e.geoms)) t?.dispose();
      e.mesh.material.dispose();
    }
    this.structures.clear();
  }
}
function n0(s) {
  const e = s.geometry, t = e.getAttribute("position"), n = new Float32Array(t.count * 3), i = new D();
  for (let a = 0; a < t.count; a++)
    i.fromBufferAttribute(t, a).applyMatrix4(s.matrixWorld), n[3 * a] = i.x, n[3 * a + 1] = i.y, n[3 * a + 2] = i.z;
  const r = new Ft();
  return r.setAttribute("position", new At(n, 3)), r.setAttribute("normal", e.getAttribute("normal")), r.setIndex(e.getIndex()), r.computeBoundingSphere(), r.computeBoundingBox(), r;
}
const dr = {
  name: "CopyShader",
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`
  )
};
class $i {
  constructor() {
    this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}
const i0 = new Sr(-1, 1, 1, -1, 0, 1);
class s0 extends Ft {
  constructor() {
    super(), this.setAttribute("position", new on([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new on([0, 2, 0, 0, 2, 0], 2));
  }
}
const r0 = new s0();
class Io {
  constructor(e) {
    this._mesh = new vt(r0, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, i0);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class a0 extends $i {
  constructor(e, t) {
    super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof wt ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = Kn.clone(e.uniforms), this.material = new wt({
      name: e.name !== void 0 ? e.name : "unspecified",
      defines: Object.assign({}, e.defines),
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    })), this.fsQuad = new Io(this.material);
  }
  render(e, t, n) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class Tl extends $i {
  constructor(e, t) {
    super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
  }
  render(e, t, n) {
    const i = e.getContext(), r = e.state;
    r.buffers.color.setMask(!1), r.buffers.depth.setMask(!1), r.buffers.color.setLocked(!0), r.buffers.depth.setLocked(!0);
    let a, o;
    this.inverse ? (a = 0, o = 1) : (a = 1, o = 0), r.buffers.stencil.setTest(!0), r.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE), r.buffers.stencil.setFunc(i.ALWAYS, a, 4294967295), r.buffers.stencil.setClear(o), r.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), r.buffers.color.setLocked(!1), r.buffers.depth.setLocked(!1), r.buffers.color.setMask(!0), r.buffers.depth.setMask(!0), r.buffers.stencil.setLocked(!1), r.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295), r.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP), r.buffers.stencil.setLocked(!0);
  }
}
class o0 extends $i {
  constructor() {
    super(), this.needsSwap = !1;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class c0 {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const n = e.getSize(new Ee());
      this._width = n.width, this._height = n.height, t = new cn(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: Ht }), t.texture.name = "EffectComposer.rt1";
    } else
      this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new a0(dr), this.copyPass.material.blending = xt, this.clock = new mh();
  }
  swapBuffers() {
    const e = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = e;
  }
  addPass(e) {
    this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++)
      if (this.passes[t].enabled)
        return !1;
    return !0;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let n = !1;
    for (let i = 0, r = this.passes.length; i < r; i++) {
      const a = this.passes[i];
      if (a.enabled !== !1) {
        if (a.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), a.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), a.needsSwap) {
          if (n) {
            const o = this.renderer.getContext(), c = this.renderer.state.buffers.stencil;
            c.setFunc(o.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), c.setFunc(o.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        Tl !== void 0 && (a instanceof Tl ? n = !0 : a instanceof o0 && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new Ee());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(e, t) {
    this._width = e, this._height = t;
    const n = this._width * this._pixelRatio, i = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
    for (let r = 0; r < this.passes.length; r++)
      this.passes[r].setSize(n, i);
  }
  setPixelRatio(e) {
    this._pixelRatio = e, this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
  }
}
const tr = {
  defines: {
    PERSPECTIVE_CAMERA: 1,
    SAMPLES: 16,
    NORMAL_VECTOR_TYPE: 1,
    DEPTH_SWIZZLING: "x",
    SCREEN_SPACE_RADIUS: 0,
    SCREEN_SPACE_RADIUS_SCALE: 100,
    SCENE_CLIP_BOX: 0
  },
  uniforms: {
    tNormal: { value: null },
    tDepth: { value: null },
    tNoise: { value: null },
    resolution: { value: new Ee() },
    cameraNear: { value: null },
    cameraFar: { value: null },
    cameraProjectionMatrix: { value: new Re() },
    cameraProjectionMatrixInverse: { value: new Re() },
    cameraWorldMatrix: { value: new Re() },
    radius: { value: 0.25 },
    distanceExponent: { value: 1 },
    thickness: { value: 1 },
    distanceFallOff: { value: 1 },
    scale: { value: 1 },
    sceneBoxMin: { value: new D(-1, -1, -1) },
    sceneBoxMax: { value: new D(1, 1, 1) }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`
  ),
  fragmentShader: (
    /* glsl */
    `
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`
  )
}, nr = {
  defines: {
    PERSPECTIVE_CAMERA: 1
  },
  uniforms: {
    tDepth: { value: null },
    cameraNear: { value: null },
    cameraFar: { value: null }
  },
  vertexShader: (
    /* glsl */
    `
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`
  )
}, ua = {
  uniforms: {
    tDiffuse: { value: null },
    intensity: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`
  )
};
function l0(s = 5) {
  const e = Math.floor(s) % 2 === 0 ? Math.floor(s) + 1 : Math.floor(s), t = h0(e), n = t.length, i = new Uint8Array(n * 4);
  for (let a = 0; a < n; ++a) {
    const o = t[a], c = 2 * Math.PI * o / n, l = new D(
      Math.cos(c),
      Math.sin(c),
      0
    ).normalize();
    i[a * 4] = (l.x * 0.5 + 0.5) * 255, i[a * 4 + 1] = (l.y * 0.5 + 0.5) * 255, i[a * 4 + 2] = 127, i[a * 4 + 3] = 255;
  }
  const r = new Ms(i, e, e);
  return r.wrapS = _n, r.wrapT = _n, r.needsUpdate = !0, r;
}
function h0(s) {
  const e = Math.floor(s) % 2 === 0 ? Math.floor(s) + 1 : Math.floor(s), t = e * e, n = Array(t).fill(0);
  let i = Math.floor(e / 2), r = e - 1;
  for (let a = 1; a <= t; ) {
    if (i === -1 && r === e ? (r = e - 2, i = 0) : (r === e && (r = 0), i < 0 && (i = e - 1)), n[i * e + r] !== 0) {
      r -= 2, i++;
      continue;
    } else
      n[i * e + r] = a++;
    r++, i--;
  }
  return n;
}
const ir = {
  defines: {
    SAMPLES: 16,
    SAMPLE_VECTORS: Eh(16, 2, 1),
    NORMAL_VECTOR_TYPE: 1,
    DEPTH_VALUE_SOURCE: 0
  },
  uniforms: {
    tDiffuse: { value: null },
    tNormal: { value: null },
    tDepth: { value: null },
    tNoise: { value: null },
    resolution: { value: new Ee() },
    cameraProjectionMatrixInverse: { value: new Re() },
    lumaPhi: { value: 5 },
    depthPhi: { value: 5 },
    normalPhi: { value: 5 },
    radius: { value: 4 },
    index: { value: 0 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`
  )
};
function Eh(s, e, t) {
  const n = d0(
    s,
    e,
    t
  );
  let i = "vec3[SAMPLES](";
  for (let r = 0; r < s; r++) {
    const a = n[r];
    i += `vec3(${a.x}, ${a.y}, ${a.z})${r < s - 1 ? "," : ")"}`;
  }
  return i;
}
function d0(s, e, t) {
  const n = [];
  for (let i = 0; i < s; i++) {
    const r = 2 * Math.PI * e * i / s, a = Math.pow(i / (s - 1), t);
    n.push(new D(Math.cos(r), Math.sin(r), a));
  }
  return n;
}
class u0 {
  constructor(e = Math) {
    this.grad3 = [
      [1, 1, 0],
      [-1, 1, 0],
      [1, -1, 0],
      [-1, -1, 0],
      [1, 0, 1],
      [-1, 0, 1],
      [1, 0, -1],
      [-1, 0, -1],
      [0, 1, 1],
      [0, -1, 1],
      [0, 1, -1],
      [0, -1, -1]
    ], this.grad4 = [
      [0, 1, 1, 1],
      [0, 1, 1, -1],
      [0, 1, -1, 1],
      [0, 1, -1, -1],
      [0, -1, 1, 1],
      [0, -1, 1, -1],
      [0, -1, -1, 1],
      [0, -1, -1, -1],
      [1, 0, 1, 1],
      [1, 0, 1, -1],
      [1, 0, -1, 1],
      [1, 0, -1, -1],
      [-1, 0, 1, 1],
      [-1, 0, 1, -1],
      [-1, 0, -1, 1],
      [-1, 0, -1, -1],
      [1, 1, 0, 1],
      [1, 1, 0, -1],
      [1, -1, 0, 1],
      [1, -1, 0, -1],
      [-1, 1, 0, 1],
      [-1, 1, 0, -1],
      [-1, -1, 0, 1],
      [-1, -1, 0, -1],
      [1, 1, 1, 0],
      [1, 1, -1, 0],
      [1, -1, 1, 0],
      [1, -1, -1, 0],
      [-1, 1, 1, 0],
      [-1, 1, -1, 0],
      [-1, -1, 1, 0],
      [-1, -1, -1, 0]
    ], this.p = [];
    for (let t = 0; t < 256; t++)
      this.p[t] = Math.floor(e.random() * 256);
    this.perm = [];
    for (let t = 0; t < 512; t++)
      this.perm[t] = this.p[t & 255];
    this.simplex = [
      [0, 1, 2, 3],
      [0, 1, 3, 2],
      [0, 0, 0, 0],
      [0, 2, 3, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 2, 3, 0],
      [0, 2, 1, 3],
      [0, 0, 0, 0],
      [0, 3, 1, 2],
      [0, 3, 2, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 3, 2, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 2, 0, 3],
      [0, 0, 0, 0],
      [1, 3, 0, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [2, 3, 0, 1],
      [2, 3, 1, 0],
      [1, 0, 2, 3],
      [1, 0, 3, 2],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [2, 0, 3, 1],
      [0, 0, 0, 0],
      [2, 1, 3, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [2, 0, 1, 3],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [3, 0, 1, 2],
      [3, 0, 2, 1],
      [0, 0, 0, 0],
      [3, 1, 2, 0],
      [2, 1, 0, 3],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [3, 1, 0, 2],
      [0, 0, 0, 0],
      [3, 2, 0, 1],
      [3, 2, 1, 0]
    ];
  }
  dot(e, t, n) {
    return e[0] * t + e[1] * n;
  }
  dot3(e, t, n, i) {
    return e[0] * t + e[1] * n + e[2] * i;
  }
  dot4(e, t, n, i, r) {
    return e[0] * t + e[1] * n + e[2] * i + e[3] * r;
  }
  noise(e, t) {
    let n, i, r;
    const a = 0.5 * (Math.sqrt(3) - 1), o = (e + t) * a, c = Math.floor(e + o), l = Math.floor(t + o), h = (3 - Math.sqrt(3)) / 6, d = (c + l) * h, f = c - d, p = l - d, g = e - f, b = t - p;
    let m, u;
    g > b ? (m = 1, u = 0) : (m = 0, u = 1);
    const M = g - m + h, S = b - u + h, v = g - 1 + 2 * h, P = b - 1 + 2 * h, R = c & 255, A = l & 255, C = this.perm[R + this.perm[A]] % 12, y = this.perm[R + m + this.perm[A + u]] % 12, _ = this.perm[R + 1 + this.perm[A + 1]] % 12;
    let w = 0.5 - g * g - b * b;
    w < 0 ? n = 0 : (w *= w, n = w * w * this.dot(this.grad3[C], g, b));
    let O = 0.5 - M * M - S * S;
    O < 0 ? i = 0 : (O *= O, i = O * O * this.dot(this.grad3[y], M, S));
    let F = 0.5 - v * v - P * P;
    return F < 0 ? r = 0 : (F *= F, r = F * F * this.dot(this.grad3[_], v, P)), 70 * (n + i + r);
  }
  // 3D simplex noise
  noise3d(e, t, n) {
    let i, r, a, o;
    const l = (e + t + n) * 0.3333333333333333, h = Math.floor(e + l), d = Math.floor(t + l), f = Math.floor(n + l), p = 1 / 6, g = (h + d + f) * p, b = h - g, m = d - g, u = f - g, M = e - b, S = t - m, v = n - u;
    let P, R, A, C, y, _;
    M >= S ? S >= v ? (P = 1, R = 0, A = 0, C = 1, y = 1, _ = 0) : M >= v ? (P = 1, R = 0, A = 0, C = 1, y = 0, _ = 1) : (P = 0, R = 0, A = 1, C = 1, y = 0, _ = 1) : S < v ? (P = 0, R = 0, A = 1, C = 0, y = 1, _ = 1) : M < v ? (P = 0, R = 1, A = 0, C = 0, y = 1, _ = 1) : (P = 0, R = 1, A = 0, C = 1, y = 1, _ = 0);
    const w = M - P + p, O = S - R + p, F = v - A + p, k = M - C + 2 * p, j = S - y + 2 * p, z = v - _ + 2 * p, Z = M - 1 + 3 * p, V = S - 1 + 3 * p, Q = v - 1 + 3 * p, ne = h & 255, fe = d & 255, ye = f & 255, Ie = this.perm[ne + this.perm[fe + this.perm[ye]]] % 12, X = this.perm[ne + P + this.perm[fe + R + this.perm[ye + A]]] % 12, ee = this.perm[ne + C + this.perm[fe + y + this.perm[ye + _]]] % 12, pe = this.perm[ne + 1 + this.perm[fe + 1 + this.perm[ye + 1]]] % 12;
    let ie = 0.6 - M * M - S * S - v * v;
    ie < 0 ? i = 0 : (ie *= ie, i = ie * ie * this.dot3(this.grad3[Ie], M, S, v));
    let ve = 0.6 - w * w - O * O - F * F;
    ve < 0 ? r = 0 : (ve *= ve, r = ve * ve * this.dot3(this.grad3[X], w, O, F));
    let we = 0.6 - k * k - j * j - z * z;
    we < 0 ? a = 0 : (we *= we, a = we * we * this.dot3(this.grad3[ee], k, j, z));
    let Pe = 0.6 - Z * Z - V * V - Q * Q;
    return Pe < 0 ? o = 0 : (Pe *= Pe, o = Pe * Pe * this.dot3(this.grad3[pe], Z, V, Q)), 32 * (i + r + a + o);
  }
  // 4D simplex noise
  noise4d(e, t, n, i) {
    const r = this.grad4, a = this.simplex, o = this.perm, c = (Math.sqrt(5) - 1) / 4, l = (5 - Math.sqrt(5)) / 20;
    let h, d, f, p, g;
    const b = (e + t + n + i) * c, m = Math.floor(e + b), u = Math.floor(t + b), M = Math.floor(n + b), S = Math.floor(i + b), v = (m + u + M + S) * l, P = m - v, R = u - v, A = M - v, C = S - v, y = e - P, _ = t - R, w = n - A, O = i - C, F = y > _ ? 32 : 0, k = y > w ? 16 : 0, j = _ > w ? 8 : 0, z = y > O ? 4 : 0, Z = _ > O ? 2 : 0, V = w > O ? 1 : 0, Q = F + k + j + z + Z + V, ne = a[Q][0] >= 3 ? 1 : 0, fe = a[Q][1] >= 3 ? 1 : 0, ye = a[Q][2] >= 3 ? 1 : 0, Ie = a[Q][3] >= 3 ? 1 : 0, X = a[Q][0] >= 2 ? 1 : 0, ee = a[Q][1] >= 2 ? 1 : 0, pe = a[Q][2] >= 2 ? 1 : 0, ie = a[Q][3] >= 2 ? 1 : 0, ve = a[Q][0] >= 1 ? 1 : 0, we = a[Q][1] >= 1 ? 1 : 0, Pe = a[Q][2] >= 1 ? 1 : 0, nt = a[Q][3] >= 1 ? 1 : 0, He = y - ne + l, st = _ - fe + l, I = w - ye + l, Mt = O - Ie + l, Be = y - X + 2 * l, ze = _ - ee + 2 * l, Se = w - pe + 2 * l, $e = O - ie + 2 * l, Me = y - ve + 3 * l, T = _ - we + 3 * l, x = w - Pe + 3 * l, B = O - nt + 3 * l, Y = y - 1 + 4 * l, $ = _ - 1 + 4 * l, q = w - 1 + 4 * l, me = O - 1 + 4 * l, re = m & 255, oe = u & 255, ke = M & 255, J = S & 255, de = o[re + o[oe + o[ke + o[J]]]] % 32, Ae = o[re + ne + o[oe + fe + o[ke + ye + o[J + Ie]]]] % 32, Ce = o[re + X + o[oe + ee + o[ke + pe + o[J + ie]]]] % 32, ue = o[re + ve + o[oe + we + o[ke + Pe + o[J + nt]]]] % 32, Ve = o[re + 1 + o[oe + 1 + o[ke + 1 + o[J + 1]]]] % 32;
    let De = 0.6 - y * y - _ * _ - w * w - O * O;
    De < 0 ? h = 0 : (De *= De, h = De * De * this.dot4(r[de], y, _, w, O));
    let je = 0.6 - He * He - st * st - I * I - Mt * Mt;
    je < 0 ? d = 0 : (je *= je, d = je * je * this.dot4(r[Ae], He, st, I, Mt));
    let L = 0.6 - Be * Be - ze * ze - Se * Se - $e * $e;
    L < 0 ? f = 0 : (L *= L, f = L * L * this.dot4(r[Ce], Be, ze, Se, $e));
    let se = 0.6 - Me * Me - T * T - x * x - B * B;
    se < 0 ? p = 0 : (se *= se, p = se * se * this.dot4(r[ue], Me, T, x, B));
    let W = 0.6 - Y * Y - $ * $ - q * q - me * me;
    return W < 0 ? g = 0 : (W *= W, g = W * W * this.dot4(r[Ve], Y, $, q, me)), 27 * (h + d + f + p + g);
  }
}
class un extends $i {
  constructor(e, t, n, i, r, a, o) {
    super(), this.width = n !== void 0 ? n : 512, this.height = i !== void 0 ? i : 512, this.clear = !0, this.camera = t, this.scene = e, this.output = 0, this._renderGBuffer = !0, this._visibilityCache = /* @__PURE__ */ new Map(), this.blendIntensity = 1, this.pdRings = 2, this.pdRadiusExponent = 2, this.pdSamples = 16, this.gtaoNoiseTexture = l0(), this.pdNoiseTexture = this.generateNoise(), this.gtaoRenderTarget = new cn(this.width, this.height, { type: Ht }), this.pdRenderTarget = this.gtaoRenderTarget.clone(), this.gtaoMaterial = new wt({
      defines: Object.assign({}, tr.defines),
      uniforms: Kn.clone(tr.uniforms),
      vertexShader: tr.vertexShader,
      fragmentShader: tr.fragmentShader,
      blending: xt,
      depthTest: !1,
      depthWrite: !1
    }), this.gtaoMaterial.defines.PERSPECTIVE_CAMERA = this.camera.isPerspectiveCamera ? 1 : 0, this.gtaoMaterial.uniforms.tNoise.value = this.gtaoNoiseTexture, this.gtaoMaterial.uniforms.resolution.value.set(this.width, this.height), this.gtaoMaterial.uniforms.cameraNear.value = this.camera.near, this.gtaoMaterial.uniforms.cameraFar.value = this.camera.far, this.normalMaterial = new $g(), this.normalMaterial.blending = xt, this.pdMaterial = new wt({
      defines: Object.assign({}, ir.defines),
      uniforms: Kn.clone(ir.uniforms),
      vertexShader: ir.vertexShader,
      fragmentShader: ir.fragmentShader,
      depthTest: !1,
      depthWrite: !1
    }), this.pdMaterial.uniforms.tDiffuse.value = this.gtaoRenderTarget.texture, this.pdMaterial.uniforms.tNoise.value = this.pdNoiseTexture, this.pdMaterial.uniforms.resolution.value.set(this.width, this.height), this.pdMaterial.uniforms.lumaPhi.value = 10, this.pdMaterial.uniforms.depthPhi.value = 2, this.pdMaterial.uniforms.normalPhi.value = 3, this.pdMaterial.uniforms.radius.value = 8, this.depthRenderMaterial = new wt({
      defines: Object.assign({}, nr.defines),
      uniforms: Kn.clone(nr.uniforms),
      vertexShader: nr.vertexShader,
      fragmentShader: nr.fragmentShader,
      blending: xt
    }), this.depthRenderMaterial.uniforms.cameraNear.value = this.camera.near, this.depthRenderMaterial.uniforms.cameraFar.value = this.camera.far, this.copyMaterial = new wt({
      uniforms: Kn.clone(dr.uniforms),
      vertexShader: dr.vertexShader,
      fragmentShader: dr.fragmentShader,
      transparent: !0,
      depthTest: !1,
      depthWrite: !1,
      blendSrc: ba,
      blendDst: ls,
      blendEquation: tn,
      blendSrcAlpha: ga,
      blendDstAlpha: ls,
      blendEquationAlpha: tn
    }), this.blendMaterial = new wt({
      uniforms: Kn.clone(ua.uniforms),
      vertexShader: ua.vertexShader,
      fragmentShader: ua.fragmentShader,
      transparent: !0,
      depthTest: !1,
      depthWrite: !1,
      blending: Cl,
      blendSrc: ba,
      blendDst: ls,
      blendEquation: tn,
      blendSrcAlpha: ga,
      blendDstAlpha: ls,
      blendEquationAlpha: tn
    }), this.fsQuad = new Io(null), this.originalClearColor = new Te(), this.setGBuffer(r ? r.depthTexture : void 0, r ? r.normalTexture : void 0), a !== void 0 && this.updateGtaoMaterial(a), o !== void 0 && this.updatePdMaterial(o);
  }
  dispose() {
    this.gtaoNoiseTexture.dispose(), this.pdNoiseTexture.dispose(), this.normalRenderTarget.dispose(), this.gtaoRenderTarget.dispose(), this.pdRenderTarget.dispose(), this.normalMaterial.dispose(), this.pdMaterial.dispose(), this.copyMaterial.dispose(), this.depthRenderMaterial.dispose(), this.fsQuad.dispose();
  }
  get gtaoMap() {
    return this.pdRenderTarget.texture;
  }
  setGBuffer(e, t) {
    e !== void 0 ? (this.depthTexture = e, this.normalTexture = t, this._renderGBuffer = !1) : (this.depthTexture = new Mo(), this.depthTexture.format = hi, this.depthTexture.type = li, this.normalRenderTarget = new cn(this.width, this.height, {
      minFilter: yt,
      magFilter: yt,
      type: Ht,
      depthTexture: this.depthTexture
    }), this.normalTexture = this.normalRenderTarget.texture, this._renderGBuffer = !0);
    const n = this.normalTexture ? 1 : 0, i = this.depthTexture === this.normalTexture ? "w" : "x";
    this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE = n, this.gtaoMaterial.defines.DEPTH_SWIZZLING = i, this.gtaoMaterial.uniforms.tNormal.value = this.normalTexture, this.gtaoMaterial.uniforms.tDepth.value = this.depthTexture, this.pdMaterial.defines.NORMAL_VECTOR_TYPE = n, this.pdMaterial.defines.DEPTH_SWIZZLING = i, this.pdMaterial.uniforms.tNormal.value = this.normalTexture, this.pdMaterial.uniforms.tDepth.value = this.depthTexture, this.depthRenderMaterial.uniforms.tDepth.value = this.normalRenderTarget.depthTexture;
  }
  setSceneClipBox(e) {
    e ? (this.gtaoMaterial.needsUpdate = this.gtaoMaterial.defines.SCENE_CLIP_BOX !== 1, this.gtaoMaterial.defines.SCENE_CLIP_BOX = 1, this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min), this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)) : (this.gtaoMaterial.needsUpdate = this.gtaoMaterial.defines.SCENE_CLIP_BOX === 0, this.gtaoMaterial.defines.SCENE_CLIP_BOX = 0);
  }
  updateGtaoMaterial(e) {
    e.radius !== void 0 && (this.gtaoMaterial.uniforms.radius.value = e.radius), e.distanceExponent !== void 0 && (this.gtaoMaterial.uniforms.distanceExponent.value = e.distanceExponent), e.thickness !== void 0 && (this.gtaoMaterial.uniforms.thickness.value = e.thickness), e.distanceFallOff !== void 0 && (this.gtaoMaterial.uniforms.distanceFallOff.value = e.distanceFallOff, this.gtaoMaterial.needsUpdate = !0), e.scale !== void 0 && (this.gtaoMaterial.uniforms.scale.value = e.scale), e.samples !== void 0 && e.samples !== this.gtaoMaterial.defines.SAMPLES && (this.gtaoMaterial.defines.SAMPLES = e.samples, this.gtaoMaterial.needsUpdate = !0), e.screenSpaceRadius !== void 0 && (e.screenSpaceRadius ? 1 : 0) !== this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS && (this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS = e.screenSpaceRadius ? 1 : 0, this.gtaoMaterial.needsUpdate = !0);
  }
  updatePdMaterial(e) {
    let t = !1;
    e.lumaPhi !== void 0 && (this.pdMaterial.uniforms.lumaPhi.value = e.lumaPhi), e.depthPhi !== void 0 && (this.pdMaterial.uniforms.depthPhi.value = e.depthPhi), e.normalPhi !== void 0 && (this.pdMaterial.uniforms.normalPhi.value = e.normalPhi), e.radius !== void 0 && e.radius !== this.radius && (this.pdMaterial.uniforms.radius.value = e.radius), e.radiusExponent !== void 0 && e.radiusExponent !== this.pdRadiusExponent && (this.pdRadiusExponent = e.radiusExponent, t = !0), e.rings !== void 0 && e.rings !== this.pdRings && (this.pdRings = e.rings, t = !0), e.samples !== void 0 && e.samples !== this.pdSamples && (this.pdSamples = e.samples, t = !0), t && (this.pdMaterial.defines.SAMPLES = this.pdSamples, this.pdMaterial.defines.SAMPLE_VECTORS = Eh(this.pdSamples, this.pdRings, this.pdRadiusExponent), this.pdMaterial.needsUpdate = !0);
  }
  render(e, t, n) {
    switch (this._renderGBuffer && (this.overrideVisibility(), this.renderOverride(e, this.normalMaterial, this.normalRenderTarget, 7829503, 1), this.restoreVisibility()), this.gtaoMaterial.uniforms.cameraNear.value = this.camera.near, this.gtaoMaterial.uniforms.cameraFar.value = this.camera.far, this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix), this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse), this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld), this.renderPass(e, this.gtaoMaterial, this.gtaoRenderTarget, 16777215, 1), this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse), this.renderPass(e, this.pdMaterial, this.pdRenderTarget, 16777215, 1), this.output) {
      case un.OUTPUT.Off:
        break;
      case un.OUTPUT.Diffuse:
        this.copyMaterial.uniforms.tDiffuse.value = n.texture, this.copyMaterial.blending = xt, this.renderPass(e, this.copyMaterial, this.renderToScreen ? null : t);
        break;
      case un.OUTPUT.AO:
        this.copyMaterial.uniforms.tDiffuse.value = this.gtaoRenderTarget.texture, this.copyMaterial.blending = xt, this.renderPass(e, this.copyMaterial, this.renderToScreen ? null : t);
        break;
      case un.OUTPUT.Denoise:
        this.copyMaterial.uniforms.tDiffuse.value = this.pdRenderTarget.texture, this.copyMaterial.blending = xt, this.renderPass(e, this.copyMaterial, this.renderToScreen ? null : t);
        break;
      case un.OUTPUT.Depth:
        this.depthRenderMaterial.uniforms.cameraNear.value = this.camera.near, this.depthRenderMaterial.uniforms.cameraFar.value = this.camera.far, this.renderPass(e, this.depthRenderMaterial, this.renderToScreen ? null : t);
        break;
      case un.OUTPUT.Normal:
        this.copyMaterial.uniforms.tDiffuse.value = this.normalRenderTarget.texture, this.copyMaterial.blending = xt, this.renderPass(e, this.copyMaterial, this.renderToScreen ? null : t);
        break;
      case un.OUTPUT.Default:
        this.copyMaterial.uniforms.tDiffuse.value = n.texture, this.copyMaterial.blending = xt, this.renderPass(e, this.copyMaterial, this.renderToScreen ? null : t), this.blendMaterial.uniforms.intensity.value = this.blendIntensity, this.blendMaterial.uniforms.tDiffuse.value = this.pdRenderTarget.texture, this.renderPass(e, this.blendMaterial, this.renderToScreen ? null : t);
        break;
      default:
        console.warn("THREE.GTAOPass: Unknown output type.");
    }
  }
  renderPass(e, t, n, i, r) {
    e.getClearColor(this.originalClearColor);
    const a = e.getClearAlpha(), o = e.autoClear;
    e.setRenderTarget(n), e.autoClear = !1, i != null && (e.setClearColor(i), e.setClearAlpha(r || 0), e.clear()), this.fsQuad.material = t, this.fsQuad.render(e), e.autoClear = o, e.setClearColor(this.originalClearColor), e.setClearAlpha(a);
  }
  renderOverride(e, t, n, i, r) {
    e.getClearColor(this.originalClearColor);
    const a = e.getClearAlpha(), o = e.autoClear;
    e.setRenderTarget(n), e.autoClear = !1, i = t.clearColor || i, r = t.clearAlpha || r, i != null && (e.setClearColor(i), e.setClearAlpha(r || 0), e.clear()), this.scene.overrideMaterial = t, e.render(this.scene, this.camera), this.scene.overrideMaterial = null, e.autoClear = o, e.setClearColor(this.originalClearColor), e.setClearAlpha(a);
  }
  setSize(e, t) {
    this.width = e, this.height = t, this.gtaoRenderTarget.setSize(e, t), this.normalRenderTarget.setSize(e, t), this.pdRenderTarget.setSize(e, t), this.gtaoMaterial.uniforms.resolution.value.set(e, t), this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix), this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse), this.pdMaterial.uniforms.resolution.value.set(e, t), this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse);
  }
  overrideVisibility() {
    const e = this.scene, t = this._visibilityCache;
    e.traverse(function(n) {
      t.set(n, n.visible), (n.isPoints || n.isLine) && (n.visible = !1);
    });
  }
  restoreVisibility() {
    const e = this.scene, t = this._visibilityCache;
    e.traverse(function(n) {
      const i = t.get(n);
      n.visible = i;
    }), t.clear();
  }
  generateNoise(e = 64) {
    const t = new u0(), n = e * e * 4, i = new Uint8Array(n);
    for (let a = 0; a < e; a++)
      for (let o = 0; o < e; o++) {
        const c = a, l = o;
        i[(a * e + o) * 4] = (t.noise(c, l) * 0.5 + 0.5) * 255, i[(a * e + o) * 4 + 1] = (t.noise(c + e, l) * 0.5 + 0.5) * 255, i[(a * e + o) * 4 + 2] = (t.noise(c, l + e) * 0.5 + 0.5) * 255, i[(a * e + o) * 4 + 3] = (t.noise(c + e, l + e) * 0.5 + 0.5) * 255;
      }
    const r = new Ms(i, e, e, Gt, vn);
    return r.wrapS = _n, r.wrapT = _n, r.needsUpdate = !0, r;
  }
}
un.OUTPUT = {
  Off: -1,
  Default: 0,
  Diffuse: 1,
  Depth: 2,
  Normal: 3,
  AO: 4,
  Denoise: 5
};
const f0 = {
  name: "OutputShader",
  uniforms: {
    tDiffuse: { value: null },
    toneMappingExposure: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`
  )
};
class p0 extends $i {
  constructor() {
    super();
    const e = f0;
    this.uniforms = Kn.clone(e.uniforms), this.material = new Kg({
      name: e.name,
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    }), this.fsQuad = new Io(this.material), this._outputColorSpace = null, this._toneMapping = null;
  }
  render(e, t, n) {
    this.uniforms.tDiffuse.value = n.texture, this.uniforms.toneMappingExposure.value = e.toneMappingExposure, (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace, this._toneMapping = e.toneMapping, this.material.defines = {}, We.getTransfer(this._outputColorSpace) === Qe && (this.material.defines.SRGB_TRANSFER = ""), this._toneMapping === Dl ? this.material.defines.LINEAR_TONE_MAPPING = "" : this._toneMapping === Ll ? this.material.defines.REINHARD_TONE_MAPPING = "" : this._toneMapping === Il ? this.material.defines.CINEON_TONE_MAPPING = "" : this._toneMapping === Nl ? this.material.defines.ACES_FILMIC_TONE_MAPPING = "" : this._toneMapping === Ul ? this.material.defines.AGX_TONE_MAPPING = "" : this._toneMapping === lo && (this.material.defines.NEUTRAL_TONE_MAPPING = ""), this.material.needsUpdate = !0), this.renderToScreen === !0 ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class m0 extends $i {
  constructor(e, t, n = null, i = null, r = null) {
    super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = r, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new Te();
  }
  render(e, t, n) {
    const i = e.autoClear;
    e.autoClear = !1;
    let r, a;
    this.overrideMaterial !== null && (a = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (r = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == !0 && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(r), this.overrideMaterial !== null && (this.scene.overrideMaterial = a), e.autoClear = i;
  }
}
class g0 extends un {
  hidden = [];
  background = null;
  overrideVisibility() {
    super.overrideVisibility(), this.background = this.scene.background, this.scene.background = null, this.hidden.length = 0, this.scene.traverse((e) => {
      const t = e.material;
      e.visible && e.isMesh && t && (t.transparent || !t.depthWrite) && (e.visible = !1, this.hidden.push(e));
    });
  }
  restoreVisibility() {
    super.restoreVisibility(), this.scene.background = this.background;
  }
}
class b0 {
  composer;
  ao;
  /** Master switch (the "Quality" toggle). */
  aoEnabled = !0;
  constructor(e, t, n) {
    const i = e.getDrawingBufferSize(new Ee()), r = new cn(i.x, i.y, { type: Ht, samples: 4 });
    this.composer = new c0(e, r), this.composer.addPass(new m0(t, n)), this.ao = new g0(t, n, i.x, i.y), this.ao.updateGtaoMaterial({ radius: 0.05, distanceExponent: 1.4, thickness: 1.2, scale: 1.25, samples: 12, distanceFallOff: 1, screenSpaceRadius: !1 }), this.ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, radiusExponent: 1.5, rings: 2, samples: 12 }), this.ao.blendIntensity = 0.9, this.composer.addPass(this.ao), this.composer.addPass(new p0());
  }
  setSize(e, t, n) {
    this.composer.setPixelRatio(n), this.composer.setSize(e, t);
  }
  /** `withAO` false gives a cheaper frame (used while the camera moves on slow GPUs). */
  render(e) {
    this.ao.enabled = this.aoEnabled && e, this.composer.render();
  }
  dispose() {
    this.composer.dispose();
  }
}
const _0 = new Te(3108784), v0 = { ok: 0.5, watch: 0.85, alert: 0.9, nodata: 0.7 }, wl = {
  ok: new Te(4175211),
  watch: new Te(14721072),
  alert: new Te(15026253),
  nodata: new Te(9082016)
}, Al = 7;
class x0 extends kn {
  constructor(e, t) {
    super(), this.container = e, this.options = t, this.renderer = new kg({ antialias: !1, powerPreference: "high-performance" }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)), this.renderer.outputColorSpace = dt, this.renderer.toneMapping = lo, this.renderer.toneMappingExposure = 1, e.appendChild(this.renderer.domElement), this.renderer.domElement.style.cssText = "display:block;width:100%;height:100%;touch-action:none;outline:none", this.css2d.domElement.style.cssText = "position:absolute;inset:0;pointer-events:none;overflow:hidden", this.css2d.domElement.className = "labels", e.appendChild(this.css2d.domElement), this.scene.background = __(), this.scene.environment = b_(this.renderer), this.scene.environmentIntensity = 0.9, t.environment && new Yb().loadAsync(t.environment).then((a) => {
      const o = new pr(this.renderer);
      this.scene.environment = o.fromEquirectangular(a).texture, a.dispose(), o.dispose(), this.invalidate();
    }).catch(() => console.warn(`[body-twin] could not load environment "${t.environment}", using the built-in studio`));
    const n = new so(16773602, 1.6);
    n.position.set(1.2, 2.4, 2.6);
    const i = new so(12571903, 0.7);
    i.position.set(-1.5, 1.2, -2.2), this.scene.add(n, i), this.fx = new b0(this.renderer, this.scene, this.camera), this.rig = new h_(this.camera, this.renderer.domElement, () => this.invalidate()), this.rig.controls.addEventListener("end", () => this.scheduleLodCheck()), this.store = new t0(t.modelsUrl.replace(/\/$/, ""), g_), this.store.addEventListener("progress", (a) => this.dispatchEvent({ type: "progress", loaded: a.loaded, total: a.total })), this.store.addEventListener("lod", (a) => {
      this.applyAppearance(a.structure), a.structure === this.selected && (this.ghost.geometry = a.structure.mesh.geometry), this.invalidate();
    }), this.ghost.renderOrder = 1e3, this.ghost.visible = !1, this.scene.add(this.store.root, this.ghost);
    const r = this.renderer.domElement;
    r.addEventListener("pointerdown", (a) => {
      this.down = { x: a.clientX, y: a.clientY };
    }), r.addEventListener("pointerup", (a) => {
      this.down && Math.hypot(a.clientX - this.down.x, a.clientY - this.down.y) < 5 && a.button === 0 && this.handleClick(a), this.down = null;
    }), r.addEventListener("wheel", () => this.scheduleLodCheck(), { passive: !0 }), this.resizeObs = new ResizeObserver(() => this.resize()), this.resizeObs.observe(e), this.resize(), this.loop();
  }
  renderer;
  scene = new lh();
  camera = new Dt(32, 1, 0.01, 30);
  rig;
  store;
  layerOpacity = new Map(_r.map((e) => [e.id, e.defaultOpacity]));
  selected = null;
  /** Peel depth (0 = skin intact ... 4 = organs only), or null when layers are set individually. */
  peel = null;
  /** Cross-section state. `position` runs 0..1 across the body along the axis. */
  section = { axis: null, position: 0.5, flip: !1 };
  /** Space taken by host UI (px); labels keep clear of it. */
  uiInsets = { left: 0, top: 56, bottom: 56 };
  /** Bumped whenever visibility/opacity changes (labels use it to refresh occlusion tests). */
  appearanceVersion = 0;
  css2d = new Cb();
  clipPlane = new In(new D(-1, 0, 0), 0);
  manualOpacity = null;
  anchors = /* @__PURE__ */ new Map();
  /** Health status per monitored part (see parts.ts). Missing = no data. */
  partStatus = /* @__PURE__ */ new Map();
  /** When true, monitored structures are tinted by status (grey when there is no data). Off = anatomical colours. */
  statusTint = !1;
  partCache = /* @__PURE__ */ new Map();
  fx;
  /** Average frame interval while the camera moves (ms); drives the automatic quality fallback. */
  movingMs = 16;
  lowPower = !1;
  settleTimer = 0;
  lastFrame = 0;
  dirty = !0;
  raf = 0;
  clock = new mh();
  resizeObs;
  lodTimer = 0;
  down = null;
  disposed = !1;
  bodyBox = new Yt();
  /** X-ray overlay of the selected structure, so it stays visible when other anatomy is in front of it. */
  ghost = new vt(new Ft(), new gn({
    color: 7321855,
    transparent: !0,
    opacity: 0.28,
    depthTest: !1,
    depthWrite: !1,
    blending: fa
  }));
  // ---------------------------------------------------------------- loading
  async load() {
    try {
      const e = [];
      await Promise.all(this.options.packs.map((n) => this.store.loadPack(n).catch((i) => {
        if (n === this.options.packs[0]) throw i;
        e.push(n);
      })));
      const t = [...this.store.structures.values()];
      for (const n of t) this.bodyBox.union(new Yt(new D(...n.meta.bounds.min), new D(...n.meta.bounds.max)));
      this.resetView(0), await this.store.ensureLodFor(t, 2);
      for (const n of t) this.applyAppearance(n);
      this.invalidate(), this.dispatchEvent({ type: "ready" }), e.length && console.warn(`[body-twin] optional model pack(s) not found: ${e.join(", ")}`), this.store.ensureLodFor(t.filter((n) => this.isShown(n)), 1).then(() => this.scheduleLodCheck());
    } catch (e) {
      throw this.dispatchEvent({ type: "error", error: e }), e;
    }
  }
  // ---------------------------------------------------------------- appearance
  /** Single place that decides how a structure looks (opacity, colour, highlight). */
  applyAppearance(e) {
    const t = e.mesh.material, n = this.layerOpacity.get(e.meta.layer) ?? 1;
    e.mesh.visible = n > 0.01 && e.lod < 3;
    const i = n < 0.995;
    t.transparent !== i && (t.transparent = i, t.needsUpdate = !0);
    const r = this.section.axis ? Xt : bn;
    t.side !== r && (t.side = r, t.needsUpdate = !0), t.opacity = n, t.depthWrite = !i, e.mesh.renderOrder = i ? 10 - (vr.get(e.meta.layer)?.depth ?? 0) : 0;
    const a = this.selected === e, o = t.userData.baseColor, c = this.statusTint ? this.partOf(e) : null, l = c ? this.partStatus.get(c) ?? "nodata" : null;
    l ? t.color.copy(o).lerp(wl[l], v0[l]) : t.color.copy(o);
    const h = l === "alert" ? 0.45 : l === "watch" ? 0.25 : 0;
    a ? (t.emissive.copy(_0), t.emissiveIntensity = 0.9) : h ? (t.emissive.copy(wl[l]), t.emissiveIntensity = h) : (t.emissive.setRGB(0, 0, 0), t.emissiveIntensity = 0);
  }
  /** Id of the monitored part a structure belongs to, or null. */
  partOf(e) {
    let t = this.partCache.get(e.meta.id);
    return t === void 0 && (t = wr.find((n) => n.includes(e.meta))?.id ?? null, this.partCache.set(e.meta.id, t)), t;
  }
  /** Set the status shown on a part's structures. Only call this with a status backed by a fresh reading, or 'nodata'. */
  setPartStatus(e, t) {
    this.partStatus.get(e) !== t && (this.partStatus.set(e, t), this.statusTint && this.refreshAppearance());
  }
  setStatusTint(e) {
    this.statusTint !== e && (this.statusTint = e, this.refreshAppearance());
  }
  refreshAppearance() {
    for (const e of this.store.structures.values()) this.applyAppearance(e);
    this.invalidate();
  }
  isShown(e) {
    return (this.layerOpacity.get(e.meta.layer) ?? 1) > 0.01;
  }
  /** Set one layer's opacity. Leaves peel mode if it was on. */
  setLayerOpacity(e, t) {
    this.peel !== null && (this.peel = null, this.manualOpacity = null), this.applyLayerOpacity(e, t), this.dispatchEvent({ type: "layers" });
  }
  /**
   * Peel mode: one control removes layers from the outside in.
   * depth 0 skin, 1 superficial muscles, 2 deep muscles, 3 skeleton, 4 organs/vessels/nerves.
   * A layer is solid while peel <= its depth, fades over the next unit, then disappears. Pass null to leave.
   */
  setPeel(e) {
    if (e === null) {
      if (this.manualOpacity) for (const [t, n] of this.manualOpacity) this.applyLayerOpacity(t, n);
      this.manualOpacity = null, this.peel = null;
    } else {
      this.manualOpacity ??= new Map(this.layerOpacity), this.peel = qt.clamp(e, 0, 4);
      for (const t of _r) this.applyLayerOpacity(t.id, qt.clamp(t.depth - this.peel + 1, 0, 1));
    }
    this.dispatchEvent({ type: "layers" });
  }
  /** Cross-section: hide everything on one side of a plane. axis x = sagittal, y = transverse, z = coronal. */
  setSection(e) {
    Object.assign(this.section, e);
    const { axis: t, position: n, flip: i } = this.section;
    if (t && !this.bodyBox.isEmpty()) {
      const r = { x: 0, y: 1, z: 2 }[t], a = qt.lerp(this.bodyBox.min.getComponent(r), this.bodyBox.max.getComponent(r), n), o = i ? 1 : -1;
      this.clipPlane.normal.set(0, 0, 0).setComponent(r, o), this.clipPlane.constant = -o * a, this.renderer.clippingPlanes = [this.clipPlane];
    } else
      this.renderer.clippingPlanes = [];
    for (const r of this.store.structures.values()) this.applyAppearance(r);
    this.appearanceVersion++, this.dispatchEvent({ type: "layers" }), this.invalidate();
  }
  /** True if a point is on the hidden side of the cross-section. */
  isClipped(e) {
    return this.section.axis !== null && this.clipPlane.distanceToPoint(e) < 0;
  }
  /**
   * A point on the structure's surface for a label to point at: the vertex nearest to `hint`,
   * or by default nearest to a point in front of the structure (the default view is from the front).
   */
  anchorOf(e, t) {
    const n = `${e.meta.id}|${t?.join(",") ?? ""}`, i = this.anchors.get(n);
    if (i) return i;
    const r = t ? new D(...t) : e.center.clone().add(new D(0, 0, e.radius)), a = e.mesh.geometry.getAttribute("position"), o = e.center.clone(), c = new D();
    let l = 1 / 0;
    for (let h = 0; a && h < a.count; h++) {
      const d = c.fromBufferAttribute(a, h).distanceToSquared(r);
      d < l && (l = d, o.copy(c));
    }
    return a && this.anchors.set(n, o), o;
  }
  applyLayerOpacity(e, t) {
    const n = this.layerOpacity.get(e) ?? 0;
    this.layerOpacity.set(e, qt.clamp(t, 0, 1));
    const i = [...this.store.structures.values()].filter((r) => r.meta.layer === e);
    for (const r of i) this.applyAppearance(r);
    n <= 0.01 && t > 0.01 && this.store.ensureLodFor(i, 1).then(() => this.scheduleLodCheck()), this.appearanceVersion++, this.invalidate();
  }
  // ---------------------------------------------------------------- selection / camera
  select(e, t = {}) {
    const n = this.selected, i = e ? this.store.structures.get(e) ?? null : null;
    this.selected = i, n && this.applyAppearance(n), i && (t.reveal && !this.isShown(i) && this.setLayerOpacity(i.meta.layer, 1), this.applyAppearance(i), t.fly !== !1 && this.flyToStructure(i)), this.ghost.visible = !!i, i && (this.ghost.geometry = i.mesh.geometry), this.dispatchEvent({ type: "select", structure: i }), this.invalidate();
  }
  flyToStructure(e) {
    const t = Math.max(e.radius, 0.03) * (e.radius < 0.08 ? 1.8 : 1.15);
    this.rig.flyTo(e.center, t), this.store.ensureLod(e, 1).then(() => this.store.ensureLod(e, 0));
  }
  resetView(e = 0.9) {
    if (this.bodyBox.isEmpty()) return;
    const t = this.bodyBox.getBoundingSphere(new Kt());
    this.rig.flyTo(t.center, t.radius * 0.92, { direction: new D(0.25, 0.08, 1), duration: e, fill: 0.95 });
  }
  /** Simple ranked text search over names, FMA ids and member names. */
  search(e, t = 12) {
    const n = e.toLowerCase().split(/\s+/).filter(Boolean);
    if (!n.length) return [];
    const i = [];
    for (const { meta: r } of this.store.structures.values()) {
      const a = r.name.toLowerCase(), o = `${a} ${r.fmaName ?? ""} ${r.fmaId ?? ""}`.toLowerCase(), c = r.members.map((h) => `${h.name} ${h.fmaId ?? ""}`).join(" ").toLowerCase();
      if (!n.every((h) => o.includes(h) || c.includes(h))) continue;
      let l = 0;
      a === n.join(" ") && (l += 100), a.startsWith(n[0]) && (l += 40), n.every((h) => a.includes(h)) ? l += 30 : n.every((h) => o.includes(h)) && (l += 15), a.split(" ").some((h) => h.startsWith(n[0])) && (l += 10), l -= a.length * 0.05, i.push({ meta: r, score: l });
    }
    return i.sort((r, a) => a.score - r.score).slice(0, t).map((r) => r.meta);
  }
  // ---------------------------------------------------------------- picking
  handleClick(e) {
    const t = this.pick(e.clientX, e.clientY);
    this.select(t ? t.meta.id : null);
  }
  /** Structure under a screen point. Nearly transparent layers are click-through. */
  pick(e, t) {
    const n = this.renderer.domElement.getBoundingClientRect(), i = new Ee((e - n.left) / n.width * 2 - 1, -((t - n.top) / n.height) * 2 + 1), r = new gh();
    r.setFromCamera(i, this.camera);
    const a = [], o = [];
    for (const h of this.store.structures.values())
      h.mesh.visible && ((this.layerOpacity.get(h.meta.layer) ?? 1) >= 0.35 ? a : o).push(h.mesh);
    const c = (h) => r.intersectObjects(h, !1).find((d) => !this.isClipped(d.point)), l = c(a) ?? c(o);
    return l ? this.store.structures.get(l.object.userData.structureId) ?? null : null;
  }
  // ---------------------------------------------------------------- LOD streaming
  scheduleLodCheck() {
    window.clearTimeout(this.lodTimer), this.lodTimer = window.setTimeout(() => this.checkLods(), 200);
  }
  /**
   * Pick a level of detail per structure from how coarse it would look: if the average triangle edge of the
   * medium mesh is more than a few pixels on screen, fetch/show the high one; when it shrinks again
   * (zooming out), fall back to medium. Hidden layers and off-screen structures are never downloaded.
   */
  checkLods() {
    if (this.disposed) return;
    const e = new Mr().setFromProjectionMatrix(
      new Re().multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse)
    ), t = this.renderer.domElement.clientHeight / (2 * Math.tan(qt.degToRad(this.camera.fov) / 2)), n = new Kt(), i = this.lowPower ? Al * 1.6 : Al;
    for (const r of this.store.structures.values()) {
      if (r.lod === 3 || !this.isShown(r)) continue;
      n.set(r.center, r.radius);
      const a = Math.max(0.03, this.camera.position.distanceTo(r.center) - r.radius * 0.7), o = Math.sqrt(2 * r.meta.area / (r.meta.triangles[1] ?? 1)) * t / a;
      e.intersectsSphere(n) && o > i ? this.store.ensureLod(r, 0) : r.target === 0 && o < i * 0.6 && r !== this.selected && this.store.setTarget(r, 1);
    }
    this.invalidate();
  }
  // ---------------------------------------------------------------- render loop
  invalidate() {
    this.dirty = !0;
  }
  /** Cheaper rendering for slow GPUs. Chosen automatically; can also be forced by the host. */
  setLowPower(e) {
    this.lowPower = e, this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, e ? 1.25 : 2)), this.resize();
  }
  get isLowPower() {
    return this.lowPower;
  }
  resize() {
    const e = Math.max(1, this.container.clientWidth), t = Math.max(1, this.container.clientHeight);
    this.renderer.setSize(e, t, !1), this.fx.setSize(e, t, this.renderer.getPixelRatio()), this.css2d.setSize(e, t), this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.invalidate();
  }
  loop = () => {
    if (this.disposed) return;
    this.raf = requestAnimationFrame(this.loop);
    const e = Math.min(this.clock.getDelta(), 0.1), t = this.rig.update(e);
    if (t && (this.dirty = !0), !this.dirty) {
      this.lastFrame = 0;
      return;
    }
    this.dirty = !1;
    const n = performance.now();
    t && (this.lastFrame && (this.movingMs += (Math.min(n - this.lastFrame, 100) - this.movingMs) * 0.08), !this.lowPower && this.movingMs > 25 && this.setLowPower(!0), window.clearTimeout(this.settleTimer), this.settleTimer = window.setTimeout(() => this.invalidate(), 140)), this.lastFrame = n, this.fx.render(!(t && this.lowPower)), this.dispatchEvent({ type: "frame" }), this.css2d.render(this.scene, this.camera);
  };
  dispose() {
    this.disposed = !0, cancelAnimationFrame(this.raf), window.clearTimeout(this.lodTimer), window.clearTimeout(this.settleTimer), this.fx.dispose(), this.resizeObs.disconnect(), this.rig.dispose(), this.store.dispose(), this.renderer.dispose(), this.renderer.domElement.remove(), this.css2d.domElement.remove();
  }
}
const y0 = (
  /* css */
  `
:host {
  --bt-bg: #0c1014;
  --bt-panel: rgba(18, 24, 31, 0.86);
  --bt-border: rgba(255, 255, 255, 0.10);
  --bt-text: #e8edf2;
  --bt-muted: #93a1b0;
  --bt-accent: #5aa9e6;
  --bt-ok: #3fb56b; --bt-watch: #e0a030; --bt-alert: #e5484d; --bt-nodata: #8a94a0;
  display: block; position: relative; width: 100%; height: 100%; min-height: 320px;
  background: var(--bt-bg); color: var(--bt-text); overflow: hidden;
  font: 13px/1.4 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}
* { box-sizing: border-box; }
[hidden] { display: none !important; }
.stage { position: absolute; inset: 0; }
.panel { position: absolute; background: var(--bt-panel); border: 1px solid var(--bt-border); border-radius: 10px;
  backdrop-filter: blur(8px); box-shadow: 0 6px 24px rgba(0,0,0,.35); }
.left { position: absolute; top: 12px; left: 12px; bottom: 12px; width: min(240px, calc(100% - 24px)); display: flex; flex-direction: column; gap: 8px; pointer-events: none; }
.left > * { position: static; pointer-events: auto; }
.head { padding: 8px 12px; }
.head h1 { margin: 0; font-size: 14px; font-weight: 600; letter-spacing: .02em; }
.head p { margin: 2px 0 0; color: var(--bt-muted); font-size: 11px; }
.search { top: 12px; right: 12px; width: min(300px, calc(100% - 24px)); }
.search input { width: 100%; padding: 9px 12px; background: transparent; border: 0; outline: 0; color: var(--bt-text); font: inherit; }
.search input::placeholder { color: var(--bt-muted); }
.search ul { list-style: none; margin: 0; padding: 4px; border-top: 1px solid var(--bt-border); max-height: 320px; overflow: auto; }
.search ul:empty { display: none; }
.search li { padding: 6px 8px; border-radius: 6px; cursor: pointer; display: flex; justify-content: space-between; gap: 8px; }
.search li[aria-selected="true"], .search li:hover { background: rgba(90,169,230,.18); }
.search li small { color: var(--bt-muted); white-space: nowrap; }
.layers { padding: 8px 10px; overflow: auto; min-height: 0; flex: 0 1 auto; }
.layers summary { cursor: pointer; list-style: none; }
.layers summary::-webkit-details-marker { display: none; }
.layers summary::after { content: '▾'; float: right; }
.layers:not([open]) summary::after { content: '▸'; }
.layers[open] summary { margin-bottom: 6px; }
.layers summary, .info h2 { font-size: 11px; font-weight: 600; color: var(--bt-muted); text-transform: uppercase; letter-spacing: .08em; }
.layer { display: grid; grid-template-columns: 12px 1fr; align-items: center; gap: 4px 8px; padding: 3px 0; }
.layer i { width: 10px; height: 10px; border-radius: 50%; }
.layer label { display: flex; justify-content: space-between; cursor: pointer; }
.layer input[type=range] { grid-column: 1 / -1; width: 100%; margin: 0; accent-color: var(--bt-accent); height: 14px; }
.data { padding: 8px 10px; flex: none; display: flex; flex-direction: column; }
.data summary { cursor: pointer; list-style: none; font-size: 11px; font-weight: 600; color: var(--bt-muted); text-transform: uppercase; letter-spacing: .08em; }
.data summary::-webkit-details-marker { display: none; }
.data[open] summary { margin-bottom: 6px; }
.data[open] { gap: 6px; }
.field { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.field-row { display: flex; gap: 6px; }
select, input[type=url] { font: inherit; color: var(--bt-text); background: rgba(255,255,255,.06); border: 1px solid var(--bt-border); border-radius: 7px; padding: 4px 6px; min-width: 0; }
input[type=url] { flex: 1; }
select option { color: #111; }
.src-state { margin: 0; font-size: 11px; color: var(--bt-muted); }
.src-state[data-state="open"] { color: var(--bt-ok); } .src-state[data-state="error"] { color: var(--bt-alert); }
.legend { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 4px 10px; font-size: 11px; color: var(--bt-muted); }
.legend li::before, [data-s]::before { content: ''; display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 5px; background: var(--bt-nodata); }
.legend li[data-s="ok"]::before, em[data-s="ok"]::before { background: var(--bt-ok); } .legend li[data-s="watch"]::before, em[data-s="watch"]::before { background: var(--bt-watch); } .legend li[data-s="alert"]::before, em[data-s="alert"]::before { background: var(--bt-alert); }
.readings { border-top: 1px solid var(--bt-border); margin-top: 8px; padding-top: 8px; font-size: 12px; }
.readings h4 { margin: 0 0 4px; font-size: 12px; display: flex; justify-content: space-between; }
.readings h4 em { font-style: normal; font-weight: 500; color: var(--bt-muted); }
.readings ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 3px; }
.readings li { display: grid; grid-template-columns: 1fr auto; gap: 0 8px; }
.readings li::before { display: none; }
.readings li span::before { content: ''; display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 5px; background: var(--bt-nodata); }
.readings li[data-s="ok"] span::before { background: var(--bt-ok); } .readings li[data-s="watch"] span::before { background: var(--bt-watch); } .readings li[data-s="alert"] span::before { background: var(--bt-alert); }
.readings li b { font-variant-numeric: tabular-nums; } .readings li small { grid-column: 1 / -1; color: var(--bt-muted); padding-left: 13px; }
.readings p { margin: 6px 0 0; color: var(--bt-muted); }
.peel { padding: 2px 0 8px; border-bottom: 1px solid var(--bt-border); margin-bottom: 6px; }
.peel label { display: flex; gap: 6px; align-items: center; cursor: pointer; }
.peel input[type=range], .section input[type=range] { width: 100%; accent-color: var(--bt-accent); height: 14px; margin: 4px 0 0; }
input[type=range]:disabled { opacity: .35; }
.section { border-top: 1px solid var(--bt-border); margin-top: 6px; padding-top: 8px; }
.section h2 { margin: 0 0 6px; font-size: 11px; font-weight: 600; color: var(--bt-muted); text-transform: uppercase; letter-spacing: .08em; }
.seg { display: grid; grid-template-columns: repeat(4, auto); gap: 0; }
.seg button { border-radius: 0; padding: 4px 0; font-size: 11px; border-right-width: 0; }
.seg button:first-child { border-radius: 7px 0 0 7px; } .seg button:last-child { border-radius: 0 7px 7px 0; border-right-width: 1px; }
button[aria-pressed="true"] { background: rgba(90,169,230,.28); border-color: rgba(90,169,230,.6); }
button:disabled { opacity: .4; cursor: default; }
.section-pos { display: flex; gap: 8px; align-items: center; margin-top: 4px; }
.section-pos button { padding: 2px 8px; font-size: 11px; }
/* ---- labels (CSS2DRenderer) ---- */
.lbl { position: absolute; left: 0; top: 0; width: 0; height: 0; pointer-events: none; }
.lbl .dot { position: absolute; left: -3px; top: -3px; width: 6px; height: 6px; border-radius: 50%; background: #fff; box-shadow: 0 0 0 1.5px rgba(0,0,0,.55); }
.lbl .leader { position: absolute; left: 0; top: -0.5px; height: 1px; background: rgba(255,255,255,.75); box-shadow: 0 0 1px rgba(0,0,0,.9); transform-origin: 0 50%; }
.lbl .box { position: absolute; left: 0; top: 0; pointer-events: auto; text-align: left; white-space: nowrap; display: flex; flex-direction: column; gap: 1px;
  padding: 4px 8px; background: var(--bt-panel); border: 1px solid var(--bt-border); border-left: 3px solid var(--bt-muted); border-radius: 6px; font-size: 12px; line-height: 1.3; }
.lbl .box:hover { background: rgba(40,52,66,.95); }
.lbl .box b { font-weight: 600; }
.lbl .box .row { display: flex; gap: 8px; justify-content: space-between; align-items: baseline; }
.lbl .box em { font-style: normal; font-size: 10.5px; font-weight: 600; padding: 0 6px; border-radius: 8px; color: #0d1116; background: var(--bt-nodata); }
.lbl .box .val { font-variant-numeric: tabular-nums; } .lbl .box .val small { color: var(--bt-muted); }
.lbl .box .note { color: var(--bt-muted); font-size: 11px; max-width: 230px; white-space: normal; }
.lbl .box[data-status="none"] { border-left-color: rgba(255,255,255,.35); padding: 2px 7px; font-size: 11.5px; }
.lbl .box[data-status="ok"] { border-left-color: var(--bt-ok); } .lbl .box[data-status="ok"] em { background: var(--bt-ok); }
.lbl .box[data-status="watch"] { border-left-color: var(--bt-watch); } .lbl .box[data-status="watch"] em { background: var(--bt-watch); }
.lbl .box[data-status="alert"] { border-left-color: var(--bt-alert); } .lbl .box[data-status="alert"] em { background: var(--bt-alert); color: #fff; }
.compact-labels .lbl .box .note { display: none; }
.info { position: relative; padding: 10px 12px; margin-top: auto; flex: none; }
.info[hidden] { display: none; }
.info h3 { margin: 0 0 4px; font-size: 15px; }
.info dl { margin: 0; display: grid; grid-template-columns: auto 1fr; gap: 2px 10px; color: var(--bt-muted); font-size: 12px; }
.info dd { margin: 0; color: var(--bt-text); }
.info .x { position: absolute; top: 6px; right: 8px; }
button { font: inherit; color: var(--bt-text); background: rgba(255,255,255,.06); border: 1px solid var(--bt-border); border-radius: 7px; padding: 5px 9px; cursor: pointer; }
button:hover { background: rgba(255,255,255,.12); }
button.x { border: 0; background: none; color: var(--bt-muted); padding: 2px 6px; }
.tools { right: 12px; bottom: 12px; padding: 6px; display: flex; gap: 6px; }
.progress { position: absolute; left: 0; right: 0; top: 0; height: 2px; background: transparent; }
.progress b { display: block; height: 100%; width: 0; background: var(--bt-accent); transition: width .2s; }
.about { inset: 0; margin: auto; width: min(520px, calc(100% - 24px)); height: fit-content; max-height: calc(100% - 24px); overflow: auto; padding: 16px 18px; z-index: 5; }
.about[hidden] { display: none; }
.about h2 { margin: 0 0 8px; font-size: 15px; }
.about p { margin: 0 0 8px; color: var(--bt-muted); }
.about p b { color: var(--bt-text); font-weight: 600; }
.error { inset: 0; margin: auto; width: fit-content; height: fit-content; padding: 14px 18px; color: #ffb4b4; }
@media (max-width: 640px) {
  .left { width: min(210px, 62%); bottom: 60px; }
  .search { top: auto; bottom: 12px; left: 12px; right: 150px; width: auto; }
  .search ul { position: absolute; bottom: 100%; left: 0; right: 0; background: var(--bt-panel); border: 1px solid var(--bt-border); border-radius: 10px; }
}
`
), gt = (s) => s.replace(/[&<>"]/g, (e) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[e]), M0 = (s) => "#" + s.toString(16).padStart(6, "0");
class S0 extends HTMLElement {
  static observedAttributes = ["src", "packs", "environment", "scenario", "ws-url"];
  viewer = null;
  labels = null;
  /** Latest readings and their evaluation. Thresholds live in src/health/thresholds.ts. */
  health = new qb();
  stopSource = null;
  sourceName = "";
  root;
  $ = (e) => this.root.querySelector(e);
  results = [];
  cursor = -1;
  constructor() {
    super(), this.root = this.attachShadow({ mode: "open" }), this.root.innerHTML = `<style>${y0}</style>
      <div class="stage" part="stage"></div>
      <div class="progress"><b></b></div>
      <div class="left">
        <header class="panel head">
          <h1>Body twin</h1>
          <p>Monitoring visualization — not a diagnostic or medical device.</p>
        </header>
        <details class="panel data" open><summary>Health data</summary>
          <label class="field">Demo scenario
            <select class="scn"><option value="">Off</option>${oa.map((e) => `<option value="${e.id}">${e.label}</option>`).join("")}</select>
          </label>
          <div class="field-row"><input class="ws-url" type="url" placeholder="wss://host/readings" aria-label="WebSocket URL"><button class="ws-btn">Connect</button></div>
          <button class="ble-btn">Connect Bluetooth device</button>
          <p class="src-state" aria-live="polite"></p>
          <ul class="legend"><li data-s="ok">OK</li><li data-s="watch">Watch</li><li data-s="alert">Alert</li><li data-s="nodata">No data</li></ul>
        </details>
        <details class="panel layers"><summary>Layers</summary>
          <div class="peel">
            <label><input type="checkbox" class="peel-on"> Peel from outside in</label>
            <input type="range" class="peel-depth" min="0" max="400" step="1" value="0" aria-label="Peel depth" disabled>
          </div>
          <div class="layer-list"></div>
          <div class="section">
            <h2>Cross-section</h2>
            <div class="seg" role="group" aria-label="Section plane">
              <button data-axis="" aria-pressed="true">Off</button><button data-axis="x" title="Left / right cut">Sagittal</button><button data-axis="z" title="Front / back cut">Coronal</button><button data-axis="y" title="Top / bottom cut">Transverse</button>
            </div>
            <div class="section-pos"><input type="range" class="sec-pos" min="0" max="100" step="0.5" value="50" aria-label="Section position" disabled><button class="sec-flip" disabled title="Show the other side">Flip</button></div>
          </div>
        </details>
        <section class="panel info" hidden aria-live="polite"></section>
      </div>
      <div class="panel search" role="search">
        <input type="search" placeholder="Search a body part or FMA id…" aria-label="Search body parts" autocomplete="off" spellcheck="false">
        <ul role="listbox"></ul>
      </div>
      <div class="panel tools">
        <button data-act="labels" aria-pressed="true" title="Show or hide labels">Labels</button>
        <button data-act="quality" aria-pressed="true" title="Ambient occlusion and full resolution. Turn off on slow devices.">High quality</button>
        <button data-act="reset" title="Show the whole body">Reset view</button>
        <button data-act="about" title="Credits and licenses">About</button>
      </div>
      <section class="panel about" hidden role="dialog" aria-label="About"></section>`;
  }
  connectedCallback() {
    this.viewer || this.start();
  }
  disconnectedCallback() {
    this.disconnect(), this.health.stop(), this.viewer?.dispose(), this.viewer = null;
  }
  attributeChangedCallback(e, t, n) {
    if (!(!this.viewer || t === n)) {
      if (e === "scenario") {
        this.setScenario(n || null);
        return;
      }
      if (e === "ws-url") {
        n ? this.connectWebSocket(n) : this.disconnect();
        return;
      }
      this.viewer.dispose(), this.viewer = null, this.$(".stage").innerHTML = "", this.start();
    }
  }
  start() {
    const e = (this.getAttribute("packs") ?? "bp3d").split(",").map((r) => r.trim()).filter(Boolean), t = new x0(this.$(".stage"), { modelsUrl: this.getAttribute("src") ?? "./models", packs: e, environment: this.getAttribute("environment") ?? void 0 });
    this.viewer = t;
    const n = new Ib(t, (r) => t.select(r));
    this.labels = n;
    const i = () => {
      const r = this.$(".left");
      t.uiInsets.left = this.clientWidth > 640 ? r.offsetLeft + r.offsetWidth : 0, t.uiInsets.top = this.clientWidth > 640 ? 60 : 84, t.invalidate();
    };
    new ResizeObserver(i).observe(this), this.buildLayers(), this.$(".layers").open = this.clientWidth > 640, t.addEventListener("progress", (r) => {
      const a = this.$(".progress b"), o = r.loaded >= r.total;
      a.style.width = o ? "0" : `${Math.round(r.loaded / Math.max(1, r.total) * 100)}%`;
    }), t.addEventListener("select", (r) => {
      this.showInfo(r.structure), this.dispatchEvent(new CustomEvent("bt-select", { detail: r.structure?.meta ?? null, bubbles: !0, composed: !0 }));
    }), t.addEventListener("layers", () => this.syncLayers()), t.addEventListener("ready", () => {
      const r = new Set([...t.store.structures.values()].map((c) => c.meta.layer));
      for (const c of this.root.querySelectorAll(".layer")) c.hidden = !r.has(c.dataset.layer);
      n.initParts(), this.refreshHealth();
      const a = this.getAttribute("scenario"), o = this.getAttribute("ws-url");
      o ? this.connectWebSocket(o) : a && this.setScenario(a), this.buildAbout(), this.dispatchEvent(new CustomEvent("bt-ready", { bubbles: !0, composed: !0 }));
    }), t.load().catch((r) => {
      const a = document.createElement("div");
      a.className = "panel error", a.textContent = `Could not load the body model: ${r.message}`, this.root.append(a);
    }), this.wireSearch(), this.wireData(), this.$(".tools").addEventListener("click", (r) => {
      const a = r.target.dataset.act;
      if (a === "reset" && (t.select(null), t.resetView()), a === "about" && (this.$(".about").hidden = !this.$(".about").hidden), a === "quality") {
        const o = r.target.getAttribute("aria-pressed") !== "true";
        t.fx.aoEnabled = o, t.setLowPower(!o), r.target.setAttribute("aria-pressed", String(o));
      }
      a === "labels" && (n.enabled = !n.enabled, r.target.setAttribute("aria-pressed", String(n.enabled)), t.invalidate());
    });
  }
  // ------------------------------------------------------------ health data
  /** Feed one reading or an array of readings (see docs/data-format.md). Invalid ones are ignored and logged in `health.rejected`. */
  pushReading(e) {
    return this.health.ingest(e);
  }
  /** Start a demo scenario, or pass null to stop it and clear the data. */
  setScenario(e) {
    this.disconnect(), !(!e || !oa.some((t) => t.id === e)) && (this.sourceName = `Demo data: ${oa.find((t) => t.id === e).label.toLowerCase()} scenario (invented values)`, this.stopSource = Fb(e, (t) => this.health.ingest(t)), this.$(".scn").value = e, this.setSourceState("open"));
  }
  connectWebSocket(e) {
    this.disconnect(), this.sourceName = `WebSocket ${e}`;
    const t = Xb(e, (n) => this.health.ingest(n), (n, i) => this.setSourceState(n, i));
    this.stopSource = () => t.close();
  }
  /** Must be called from a click. Needs Chrome or Edge over HTTPS. */
  async connectBluetooth() {
    this.disconnect(), this.sourceName = "Bluetooth device";
    try {
      const e = await jb((t) => this.health.ingest(t), (t, n) => this.setSourceState(t, n));
      this.stopSource = () => e.close();
    } catch (e) {
      this.setSourceState("error", e.message);
    }
  }
  /** Stop the current data source and forget its readings (parts go back to "No data"). */
  disconnect() {
    const e = this.stopSource;
    this.stopSource = null, e?.(), this.sourceName = "", this.health.clear(), this.isConnected && (this.$(".scn").value = "", this.setSourceState("closed"));
  }
  setSourceState(e, t) {
    const n = this.$(".src-state");
    if (!n) return;
    const i = { connecting: "connecting…", open: "receiving", closed: "not connected", error: "error" };
    n.dataset.state = this.sourceName ? e : "none", n.textContent = this.sourceName ? `${this.sourceName}: ${i[e]}${t && e !== "open" ? ` (${t})` : ""}` : 'No data source. Every part shows "No data".';
  }
  wireData() {
    this.health.start(), this.health.addEventListener("change", () => this.refreshHealth()), this.$(".scn").addEventListener("change", (t) => this.setScenario(t.target.value || null)), this.$(".ws-btn").addEventListener("click", () => {
      const t = this.$(".ws-url").value.trim();
      /^wss?:\/\//.test(t) ? this.connectWebSocket(t) : (this.sourceName = "WebSocket", this.setSourceState("error", "enter a ws:// or wss:// address"), this.sourceName = "");
    });
    const e = this.$(".ble-btn");
    xh() || (e.disabled = !0, e.title = "Web Bluetooth needs Chrome or Edge over HTTPS"), e.addEventListener("click", () => void this.connectBluetooth()), this.setSourceState("closed");
  }
  /** Push the current evaluation into the 3D view and the label boxes. */
  refreshHealth() {
    const e = this.viewer, t = this.labels;
    if (!e || !t) return;
    const n = Date.now(), i = wr.map((r) => this.health.summary(r.id));
    for (const r of i) {
      e.setPartStatus(r.partId, r.status);
      const a = r.primary;
      t.setContent(r.partId, a ? { status: r.status, value: `${a.rule.label} ${a.display}`, time: gl(a.time, n), note: a.note } : { status: "nodata" });
    }
    e.setStatusTint(this.health.size > 0), e.selected && this.showInfo(e.selected), this.dispatchEvent(new CustomEvent("bt-status", { detail: i, bubbles: !0, composed: !0 }));
  }
  // ------------------------------------------------------------ layers
  buildLayers() {
    const e = this.$(".layer-list");
    e.innerHTML = _r.map((a) => `
      <div class="layer" data-layer="${a.id}">
        <i style="background:${M0(a.color)}"></i>
        <label for="bt-l-${a.id}"><span>${gt(a.label)}</span><output></output></label>
        <input id="bt-l-${a.id}" type="range" min="0" max="100" step="1" aria-label="${gt(a.label)} opacity">
      </div>`).join(""), e.addEventListener("input", (a) => {
      const o = a.target, c = o.closest(".layer").dataset.layer;
      this.viewer?.setLayerOpacity(c, Number(o.value) / 100);
    });
    const t = this.$(".peel-on"), n = this.$(".peel-depth");
    t.addEventListener("change", () => this.viewer?.setPeel(t.checked ? Number(n.value) / 100 : null)), n.addEventListener("input", () => this.viewer?.setPeel(Number(n.value) / 100));
    const i = this.$(".sec-pos"), r = this.$(".sec-flip");
    this.$(".seg").addEventListener("click", (a) => {
      const o = a.target.closest("button");
      o && this.viewer?.setSection({ axis: o.dataset.axis || null });
    }), i.addEventListener("input", () => this.viewer?.setSection({ position: Number(i.value) / 100 })), r.addEventListener("click", () => this.viewer?.setSection({ flip: !this.viewer.section.flip })), this.syncLayers();
  }
  syncLayers() {
    const e = this.viewer;
    if (!e) return;
    const t = this.$(".peel-on"), n = this.$(".peel-depth");
    t.checked = e.peel !== null, n.disabled = e.peel === null, e.peel !== null && (n.value = String(Math.round(e.peel * 100)));
    for (const i of this.root.querySelectorAll(".seg button")) i.setAttribute("aria-pressed", String((i.dataset.axis || null) === e.section.axis));
    this.$(".sec-pos").disabled = this.$(".sec-flip").disabled = e.section.axis === null, this.$(".sec-flip").setAttribute("aria-pressed", String(e.section.flip));
    for (const i of this.root.querySelectorAll(".layer")) {
      const r = Math.round((this.viewer?.layerOpacity.get(i.dataset.layer) ?? 0) * 100), a = i.querySelector("input");
      Number(a.value) !== r && (a.value = String(r)), i.querySelector("output").textContent = r === 0 ? "off" : `${r}%`;
    }
  }
  // ------------------------------------------------------------ search
  wireSearch() {
    const e = this.$(".search input"), t = this.$(".search ul"), n = () => {
      t.innerHTML = this.results.map((r, a) => `<li role="option" data-id="${r.id}" aria-selected="${a === this.cursor}"><span>${gt(r.name)}</span><small>${gt(vr.get(r.layer)?.label ?? "")}</small></li>`).join("");
    }, i = (r) => {
      this.viewer?.select(r, { reveal: !0 }), this.results = [], this.cursor = -1, n(), e.blur();
    };
    e.addEventListener("input", () => {
      this.results = this.viewer?.search(e.value) ?? [], this.cursor = this.results.length ? 0 : -1, n();
    }), e.addEventListener("keydown", (r) => {
      if (r.key === "ArrowDown" || r.key === "ArrowUp") {
        r.preventDefault();
        const a = this.results.length;
        a && (this.cursor = (this.cursor + (r.key === "ArrowDown" ? 1 : a - 1)) % a, n());
      } else r.key === "Enter" && this.results[this.cursor] ? i(this.results[this.cursor].id) : r.key === "Escape" && (e.value = "", this.results = [], n());
    }), t.addEventListener("click", (r) => {
      const a = r.target.closest("li");
      a?.dataset.id && i(a.dataset.id);
    });
  }
  // ------------------------------------------------------------ info card
  showInfo(e) {
    const t = this.$(".info");
    if (t.hidden = !e, !e) return;
    const n = e.meta, i = n.fmaId ? `${gt(n.fmaId)}${n.fmaName && n.fmaName.toLowerCase() !== n.name.toLowerCase() ? ` · ${gt(n.fmaName)}` : ""}` : "no single FMA concept";
    t.innerHTML = `<button class="x" aria-label="Close">✕</button>
      <h3>${gt(n.name)}</h3>
      <dl>
        <dt>FMA</dt><dd>${i}</dd>
        <dt>Layer</dt><dd>${gt(vr.get(n.layer)?.label ?? n.layer)}</dd>
        ${n.members.length > 1 ? `<dt>Contains</dt><dd>${n.members.length} named parts</dd>` : ""}
        <dt>Source</dt><dd>${gt(n.source)} (${gt(n.license)})</dd>
      </dl>${this.partReadings(e)}`, t.querySelector(".x").addEventListener("click", () => this.viewer?.select(null));
  }
  /** Readings of the monitored part a structure belongs to, for the info card. */
  partReadings(e) {
    const t = this.viewer?.partOf(e);
    if (!t) return "";
    const n = this.health.summary(t), i = Date.now(), r = `<h4>${gt(Db.get(t).label)} <em data-s="${n.status}">${bh[n.status]}</em></h4>`;
    return n.metrics.length ? `<div class="readings">${r}<ul>${n.metrics.map((a) => `<li data-s="${a.status}"><span>${gt(a.rule.label)}</span><b>${gt(a.display)}</b><small>${gt(gl(a.time, i))}${a.rule.evidence === "placeholder" ? " · placeholder threshold" : ""}</small></li>`).join("")}</ul>
      <p>${gt(n.primary.note)}</p></div>` : `<div class="readings">${r}<p>No current readings for this part.</p></div>`;
  }
  buildAbout() {
    const e = [...this.viewer?.store.packs.values() ?? []];
    this.$(".about").innerHTML = `<button class="x" style="float:right" aria-label="Close">✕</button>
      <h2>About this view</h2>
      <p><b>Not a medical device.</b> This is a monitoring visualization. It shows sensor readings on a generic adult male body model; it does not diagnose, and the model is not the wearer's own anatomy.</p>
      ${e.map((t) => `<p><b>${gt(t.pack)}</b> — ${gt(t.attribution)} (${gt(t.license)})</p>`).join("")}
      <p><b>Status colours</b> come from configurable thresholds. Some follow published guidelines; others have no accepted clinical cut-off and are placeholders. See the status rules documentation.</p>
      <p>Anatomical names and ids: Foundational Model of Anatomy (FMA), as provided with BodyParts3D.</p>`, this.$(".about .x").addEventListener("click", () => {
      this.$(".about").hidden = !0;
    });
  }
}
function E0(s = "body-twin") {
  customElements.get(s) || customElements.define(s, S0);
}
E0();
export {
  S0 as BodyTwinElement,
  _r as LAYERS,
  x0 as Viewer,
  E0 as defineBodyTwin
};

