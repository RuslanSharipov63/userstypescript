
import { useState, FocusEvent } from "react";
import { FetchAddUser } from "../../api/Users";
import { useAppDispatch } from "../../hook/useTypedSelector";

const AddUser = () => {
    let counter = Math.round(Math.random() * 1000) + 10;
    const [name, setName] = useState<string>('Введите имя');
    const [username, setUsername] = useState<string>('Введите логин');
    const dispatch = useAppDispatch();

    const addNewUser = (counter: number, name: string, username: string) => {
        counter++;
        dispatch(FetchAddUser(counter, name, username) as any);
        setName('');
        setUsername('');
    }

    return (
        <div className="row">
            <div className="col s2">
            <p className="col s12">Создать новый контакт</p>
                <div className="input-field col s12">
                    <input value={name}
                        id="first_name2"
                        type="text"
                        className="validate"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        onFocus={(e: FocusEvent<HTMLInputElement>) => setName('')}
                    />
                    <label className="active" htmlFor="first_name2">Имя</label>
                </div>
                <div className="input-field col s12">
                    <input value={username}
                        id="first_name2"
                        type="text"
                        className="validate"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        onFocus={(e: FocusEvent<HTMLInputElement>) => setUsername('')}
                    />
                    <label className="active" htmlFor="first_name2">Фамилиия</label>
                </div>
                <p className="waves-effect waves-light btn col"
                    onClick={() => addNewUser(counter, name, username)}>
                    Добавить
                </p>
            </div>
        </div>
    );
}

export default AddUser;