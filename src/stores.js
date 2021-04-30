import {writable} from "svelte/store";

export const items = writable([
    {
        id:1,
        text: "Un item",
        completed: false
    },
    {
        id:2,
        text: "Otro item",
        completed: false
    },
    {
        id:3,
        text: "Un tercer Item",
        completed: false
    },
    {
        id:4,
        text: "y.. un cuarto item",
        completed: false
    },
]);