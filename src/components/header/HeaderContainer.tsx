import React from 'react';
import {connect} from 'react-redux';
import {AppRootType} from '../../redux/redux-store';
import Header from "./Header";
import {getAuthData} from "../../redux/AuthReducer";

class HeaderAPI extends React.Component<any, any> {
    componentDidMount() {
        // authAPI.me()
        //     .then(data => {
        //         if (data.resultCode === 0) {
        //             let {id, email, login} = data
        //             this.props.setAuthUsersData(id, email, login)
        //         }
        //     })
        this.props.getAuthData()

    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
    }
}
type MapStateToPropsType = {
    isAuth: boolean
    login: any
}
type MapDispatchToPropsType = {
    getAuthData:()=>void
}

const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    })
}

export const HeaderContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootType>(mapStateToProps, {getAuthData})(HeaderAPI);

