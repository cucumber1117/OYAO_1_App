const STORAGE_KEY = 'oyao_items_v1';

export function loadItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.warn('storage.loadItems error', e);
    return [];
  }
}

export function saveItems(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.warn('storage.saveItems error', e);
  }
}

export default { loadItems, saveItems };
