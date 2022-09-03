import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hook/useTypedSelector";
import { FetchSearchUsers } from './../../api/Users';


const Search = () => {
    const [searchStr, setSearch] = useState('');
    const dispatch = useAppDispatch();

    const newListUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        if(searchStr !== '') dispatch(FetchSearchUsers(searchStr) as any)
    }, [searchStr])

    return (
        <div className="row">
            <div className="col">
                <div className="input-field col s12">
                    <input value={searchStr}
                        id="first_name2"
                        type="text"
                        className="validate"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => newListUsers(e)}
                    />
                    <label className="active" htmlFor="first_name2">Поиск</label>
                </div>
            </div>
        </div>
    );
}

export default Search;