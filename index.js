const lingkaran = {
  setPhi: function (r) {
    if (r % 7 == 0) {
      phi = 22 / 7;
    } else {
      phi = 3.14;
    }
    return phi;
  },
  luas: function (r) {
    if (typeof r != "number") {
      return "Harus Bertipe Number";
    }
    phi = this.setPhi(r);
    return phi * r * r;
  },

  keliling: function (r) {
    if (typeof r != "number") {
      return "Harus Bertipe Number";
    }
    phi = this.setPhi(r);
    return 2 * phi * r;
  },
};

console.log(lingkaran.luas("5"));
console.log(lingkaran.keliling("5"));
console.log(lingkaran.luas(22));
console.log(lingkaran.keliling(22));
