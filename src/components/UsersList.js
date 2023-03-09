import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

export default function UsersList() {
	const [isLoading, setIsLoading] = useState(false);
	const [loadingUsersError, setLoadingUsersError] = useState(null);

	const { data } = useSelector((state) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		setIsLoading(true);
		dispatch(fetchUsers())
			.unwrap()
			.then(() => {})
			.catch((err) => {
				setLoadingUsersError(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	const handleUserAdd = () => {
		console.log(dispatch(addUser()));
	};

	if (isLoading) return <Skeleton className=" w-full h-10 " times={6} />;
	if (loadingUsersError) return <div>Error........</div>;

	const renderedUsers = data.map((user) => {
		return (
			<div key={user.id} className="mb-2 border rounded">
				<div className="flex p-2 justify-between items-center cursor-pointer">
					{user.name}
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="flex justify-bewtween m-3">
				<h1 className="m-2 text-xl">
					<Button onClick={handleUserAdd}>Add User</Button>
				</h1>
			</div>
			{renderedUsers}
		</div>
	);
}
