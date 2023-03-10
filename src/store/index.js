import { usersReducer } from "./slices/usersSlices";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		users: usersReducer,
	},
});
export { store };

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
