import { writable } from 'svelte/store';

export const issues = writable([]);

export const solutions = writable([]);

export const users = writable([]);

export const solutionList = writable([]);

export const pageID = writable('1');

export const currentIssueID = writable('1');
