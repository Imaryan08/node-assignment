const text = "I love apples";

console.log(/[a-z]/.test("12345a"));

console.log(/\d/.test("I have 2 apples"));

console.log(/o{2}/.test("helloooo"));

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
