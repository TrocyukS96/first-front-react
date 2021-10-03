import React from 'react';
import {connect} from 'react-redux';
import {AppRootType} from '../../redux/redux-store';
import Header from "./Header";
import {setAuthUsersData} from "../../redux/AuthReducer";
import axios from "axios";
class HeaderAPI extends React.Component<any, any> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUsersData(id, email, login)
                }
            })

    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
    }
}

export default HeaderAPI


type mstpType = {
    isAuth: boolean
    login: any
}
type mdtpType = {}

const mapStateToProps = (state: AppRootType): mstpType => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    })
}

export const HeaderContainer = connect<mstpType, mdtpType, {}, AppRootType>(mapStateToProps, {setAuthUsersData})(HeaderAPI);

