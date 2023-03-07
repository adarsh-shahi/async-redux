import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";
export default function UsersList() {
	const { data, isLoading, error } = useSelector((state) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		(() => {
			dispatch(fetchUsers());
		})();
	}, []);

	if (isLoading) return <Skeleton className=" w-full h-10 " times={6} />;
	if (error) return <div>Error........</div>;

	const renderedUsers = data.map((user) => {
		return (
			<div key={user.id} className="mb-2 border rounded">
				<div className="flex p-2 justify-between items-center cursor-pointer">
					{user.name}
				</div>
			</div>
		);
	});

	return <div>{renderedUsers}</div>;
}
