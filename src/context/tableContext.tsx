import { createContext, useState } from 'react'
type StateExibition = {
    showDefault: boolean,
    setShowDefault: (newState: boolean) => void,
    data: IClient[],
    setData: (newValue: any) => void,
    user: boolean,
    setUser: (newUser: boolean) => void,
    email: boolean,
    setEmail: (newState: boolean) => void,
    client: boolean,
    setClient: (newState: boolean) => void,
    profile: boolean,
    setProfile: (newState: boolean) => void,
    show: boolean,
    setShow: (newState: boolean) => void,
    edit: any,
    setEdit: (newValue: any) => void,
}
 
interface IClient{
    id: number,
    name: string,
    email: string,
    company: {
        name: string,
    },
    profile: string,
}

const initialValue = {
    showDefault: true,
    setShowDefault: () => {},
    data: [],
    setData:  () => {},
    user: true,
    setUser: () => {},
    email: true,
    setEmail: () => {},
    client: true,
    setClient: () => {},
    profile: true,
    setProfile: () => {},
    show: false,
    setShow: () => {},
    edit: {
        name: '',
        email: '',
        company: {
            name: '',
    },
    },
    setEdit: () => {},
}

export const TableContext = createContext<StateExibition>(initialValue);

export const TableContextProvider: React.FC =  ({children}) => {
    const [showDefault, setShowDefault] = useState(initialValue.showDefault);
    const [data, setData] = useState(initialValue.data);
    const [user, setUser] = useState(initialValue.user);
    const [email, setEmail] = useState(initialValue.email);
    const [client, setClient] = useState(initialValue.client);
    const [profile, setProfile] = useState(initialValue.profile);
    const [show, setShow] = useState(initialValue.show);
    const [edit, setEdit] = useState(initialValue.edit)

    return(
        <TableContext.Provider value={{
            showDefault, 
            setShowDefault,
            data,
            setData,
            user,
            setUser,
            email,
            setEmail,
            client, 
            setClient, 
            profile, 
            setProfile,
            show, 
            setShow,
            edit, 
            setEdit,
        }}>
            {children}
        </TableContext.Provider>
    );
}
