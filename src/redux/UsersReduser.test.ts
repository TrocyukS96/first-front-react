import kazak from "../assets/images/dialogs/kazak.jpg";
import {followUserAC, setUsersAC, UsersPageType, usersReducer, UserType} from "./UsersReducer";

test('users follow should be toggled', ()=>{
    const initialState: UsersPageType = {
        users: [
            {
                id: '1',
                name: 'Ivan',
                country: "Belarus",
                city: 'Minsk',
                img: kazak,
                followed: false,
                status: 'Im looking forward to see you'
            }
        ]
    }

    const action = followUserAC("1");
    const endState = usersReducer (initialState, action)

    expect(endState.users[0].followed).toBe(true)
})

test('this reduser should add new users in the current array',()=>{
    const initialState: UsersPageType = {
        users: [
            {
                id: '1',
                name: 'Ivan',
                country: "Belarus",
                city: 'Minsk',
                img: kazak,
                followed: false,
                status: 'Im looking forward to see you'
            }
        ]
    }

    const newUser:Array<UserType> = [
        {
            id: '4',
            name: 'Balvan',
            country: "Russia",
            city: 'MOSCOW',
            img: kazak,
            followed: false,
            status: 'adadadad'
        },
        {
            id: '5',
            name: 'Ban-bam',
            country: "Belarus",
            city: 'Lida',
            img: kazak,
            followed: false,
            status: 'lorem'
        },
        {
            id: '6',
            name: 'Matras',
            country: "Belarus",
            city: 'Jdany',
            img: kazak,
            followed: true,
            status: 'tik-tok'
        }
    ]
    const action = setUsersAC(newUser);
    const endState = usersReducer (initialState, action)

    expect(endState.users.length).toBe(4)
    // expect().toBe()

})
