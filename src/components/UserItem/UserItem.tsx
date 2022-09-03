import { useState } from "react";
import { IUser } from './../../types/users';
import AddUser from "./../adduser/AddUser";
import { FetchDeleteUser } from "./../../api/Users";
import ModalWindow from "../modalwindow/ModalWindow";
import { useAppDispatch } from "../../hook/useTypedSelector";


interface UsersItemProps {
    users: IUser[];
}


const UserItem: React.FC<UsersItemProps> = (props) => {


    const [mw, setMw] = useState(false);
    const [itemUser, setItemUser] = useState<number>(0);
    const dispatch = useAppDispatch();

    const deleteUser = (item: number) => {
        dispatch(FetchDeleteUser(item) as any)
    }

    const powerMwFalse = (): void => {
        setMw(!mw);
    }

    const powerMw = (id: number): void => {
        setMw(!mw);
        setItemUser(id);
        console.log(mw)
    }

    const { users } = props;

    return (
        <>
            {mw ? <ModalWindow itemUser={itemUser} powerMwFalse={powerMwFalse} /> : null}
            < AddUser />
            {users.length === 0 ? 'Идет загрузка' : users.map(item =>
                <div className="row" key={item.id}>
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text" >
                                <span className="card-title">{item.name}</span>
                                <p>логин: {item.username}</p>
                            </div>
                            <div className="card-action">
                                <p
                                    style={{
                                        cursor: 'pointer',
                                        color: 'white'
                                    }}
                                    onClick={() => deleteUser(item.id)}>Удалить</p>
                                <p
                                    style={{
                                        cursor: 'pointer',
                                        color: 'white'
                                    }}
                                    onClick={() => powerMw(item.id)}>Редактировать</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </>

    );
}

export default UserItem;