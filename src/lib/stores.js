/**
 * @file Stores, not stores
 */

// @ts-ignore
import { writable } from "svelte/store";

export const screen = writable("home");

export const loggedIn = writable(false);

export const username = writable(null);
export const password = writable(null);
