import { createSlice, isRejected } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

const usersSlice = createSlice({
	name: "users",
	initialState: {
		isLoading: false,
		data: [],
		error: null,
	},
	// reducers: {
	// 	addUser(state, action) {
	// 		const user = {
	// 			id: nanoid(),
	// 			name: action.payload.name,
	// 		};
	// 		state.push(user);
	// 	},
	// 	removeUser(state, action) {
	// 		const index = state.findIndex((user) => user.id === action.payload);
	// 		state.splice(index, 1);
	// 	},
	// },
	extraReducers(builder) {
		builder.addCase(fetchUsers.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});

		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});
	},
});

// export const { addUser, removeUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
