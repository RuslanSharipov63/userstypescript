import { useEffect } from "react";
import UserItem from "./../UserItem/UserItem";
import Search from "./../../components/search/Search";
import { FetchUsers } from "../../api/Users";
import { useTypedSelector, useAppDispatch } from "../../hook/useTypedSelector";


const UserList: React.FC = (props) => {

    const dispatch = useAppDispatch();
    const { users } = useTypedSelector(state => state.users);

    useEffect(() => {
        dispatch(FetchUsers() as any);
    }, [])

    return (
        <>
            <Search />
            <UserItem users={users} />

        </>

    );
}

export default UserList;