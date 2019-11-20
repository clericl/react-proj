export function fetchFact() {
  const url = 'https://catfact.ninja/fact'
  return fetch(url).then(
    res => (res)
  )
}
