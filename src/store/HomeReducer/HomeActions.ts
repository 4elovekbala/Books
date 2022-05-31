import { createAction } from "@reduxjs/toolkit";

const addBooks = createAction<any[], 'ADD_BOOKS'>('ADD_BOOKS');
const fetchingBooks = createAction<boolean, 'FETCH_BOOKS'>('FETCH_BOOKS');