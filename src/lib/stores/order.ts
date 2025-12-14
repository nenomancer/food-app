import { derived, writable } from "svelte/store";
import menu from "$lib/data/menu.json"

export const selectedMain = writable<string | null>(null);
export const selectedSide = writable<string | null>(null);
export const selectedDrink = writable<string | null>(null);

selectedMain.subscribe(() => {
    selectedSide.set(null);
    selectedDrink.set(null);
})

selectedSide.subscribe(() => {
    selectedDrink.set(null);
})

export const availableSides = derived(selectedMain, ($selectedMain) => {
    if (!$selectedMain) {
        return [];
    }

    const main = menu.mains.find(item => item.id === $selectedMain);
    return menu?.sides.filter(item => main?.sides.includes(item.id))
})