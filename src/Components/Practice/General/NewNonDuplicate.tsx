export function NewNonDuplicate(generator: Function, previous: Object) {
  let result = generator();

  while (result === previous) {
    result = generator();
  }

  return result;
}
