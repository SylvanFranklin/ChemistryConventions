export function NewNonDuplicate(generator: Function, previous: Object) {
  let result = generator();

  while (result === previous) {
    console.log("duplicate");
    result = generator();
  }

  return result;
}
