const company = {
  employeName: ["Rahul", "Ritu", "Tisha"],
  [Symbol.iterator]: function* employeeGenerator() {
    let currentEmploye = 0;
    while (currentEmploye <= this.employeName.length) {
      yield this.employeName[currentEmploye];
      currentEmploye++;
    }
  }
};

for (let empName of company) {
  console.log(empName);
}
