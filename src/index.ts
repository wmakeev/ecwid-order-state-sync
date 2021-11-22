export function some() {
  const a = 2 + 3

  console.log(process.env.NODE_OPTIONS)

  throw new Error(`My error, ${a}`)
}

try {
  some()
} catch (err) {
  if (err instanceof Error) {
    console.log(err.stack)
  }
}
