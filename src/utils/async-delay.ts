export async function asyncDelay(
  milliseconds: number = 0,
  verbose: boolean = false
) {
  if (milliseconds <= 0) return;

  if (verbose) console.log(`Delay for ${milliseconds}ms`);

  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
