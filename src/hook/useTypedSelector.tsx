
import { TypedUseSelectorHook, useSelector, useDispatch  } from "react-redux";
import { RootState, AppDispatch  } from "../store/store";
import { } from "../store/store";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

