import React from 'react';
import {connect} from 'react-redux';
import {AppRootType} from '../../redux/redux-store';
import Header from "./Header";
import {logOut} from "../../redux/AuthReducer";

class HeaderAPI extends React.Component<any, any> {


    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
            logOut={this.props.logOut}
        />
    }
}
type MapStateToPropsType = {
    isAuth: boolean
    login: any
}
type MapDispatchToPropsType = {
    logOut:()=>void
}

const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    })
}

export const HeaderContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootType>(mapStateToProps, { logOut})(HeaderAPI);

