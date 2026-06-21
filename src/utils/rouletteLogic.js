// 軽量なロジックの雛形。feature/roulette で拡張します。
export function pickRandomIndex(items) {
  if (!items || items.length === 0) return -1;
  return Math.floor(Math.random() * items.length);
}

export function spinResult(items) {
  const idx = pickRandomIndex(items);
  return { index: idx, item: idx >= 0 ? items[idx] : null };
}

export default { pickRandomIndex, spinResult };
