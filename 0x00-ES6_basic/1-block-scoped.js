export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Remove the variable declarations inside the if statement
    return [task, task2];
  }

  return [task, task2];
}
