const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (!eqArrays(array1[i],array2[i])) return false;
      } else if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object2).length !== Object.keys(object1).length) {
    return false;
  }
  if (Array.isArray(object1) && (Array.isArray(object2))) return eqArrays(object1,object2);
  else if (Object.keys(object1).length === 1) {
    if (object1 === object2) {
      return true;
    } else {
      return false;
    }
  }
  for (const key of Object.keys(object1)) {

    if (Object.keys(object2).includes(key)) {
      if (!eqObjects(object1[key],object2[key])) return false;
    }
  }
  return true;
};







const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);