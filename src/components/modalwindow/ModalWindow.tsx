import { useState } from 'react';
import { FetchUpdateUser } from '../../api/Users';
import { useTypedSelector, useAppDispatch } from "../../hook/useTypedSelector";

interface UserItemProps {
    itemUser: number
    powerMwFalse: () => void
}

const ModalWindow: React.FC<UserItemProps> = (props) => {

    const dispatch = useAppDispatch();
    const { itemUser } = props
    const itemId = useTypedSelector(state => state.users.users[itemUser - 1]);
    const [name, setName] = useState(itemId.name);
    const [username, setUserName] = useState(itemId.username);

    const onChangeUserName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setUserName(e.target.value)
    }

    const onChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value)
    }

    const updateUser = () => {
        dispatch(FetchUpdateUser(itemId.id, name, username) as any)
    }

    return (

        <div className="row" style={{ 
            
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            overflow: 'auto',
            }}>
            <div className="col" style={{
                backgroundColor: '#008080', 
                 width: '500px',
                 height: '200px',
                 position: 'absolute',
                 top: '40%',
                 left: '50%',
                 margin: '-125px 0 0 -125px',
                 zIndex: '1'
            }}>
                <div className="input-field col s6">
                    <input value={name}
                        id="first_class2"
                        type="text"
                        className="validate"
                        onChange={onChangeName}
                    />
                    <label className="active" htmlFor="first_class2">Имя</label>
                </div>
                <div className="input-field col s6">
                    <input value={username}
                        id="first_class2"
                        type="text"
                        className="validate"
                        onChange={onChangeUserName} />
                    <label className="active" htmlFor="first_class2">Логин</label>
                </div>
                <p className="waves-effect waves-light btn-small col s3 offset-s2" onClick={updateUser}>Отправить</p>
                <p
                    className="waves-effect waves-light btn-small col s3 offset-s2"
                    onClick={() => props.powerMwFalse()}
                >Закрыть окно</p>
            </div>
        </div>

    );
}

export default ModalWindow;