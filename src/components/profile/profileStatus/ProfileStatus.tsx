import React, {ChangeEvent} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus:(status:string)=>void

}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status:this.props.status
    }
    onChangeInputHandler(e:ChangeEvent<HTMLInputElement>){
        this.setState({
            status:e.currentTarget.value
        })
    }

    activateMode() {
        this.setState({
                editMode: true
            }
        )
    }

    deActivateMode() {
        this.setState({
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status)
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        console.log('componentDidUpdate')

        if(prevProps.status !== this.props.status){
            this.setState({status:this.props.status})

        }
    }
    //сначала происходит рендер компоненты, потом происходит уведомление компоненты что она отрендерилась

    render() {
        console.log('render')
        console.log(this.props.status + 'status')
        return (
            <>
                {this.state.editMode
                    ? <input onChange={this.onChangeInputHandler.bind(this)} onBlur={this.deActivateMode.bind(this)} autoFocus={true} type="text"
                             value={this.state.status}/>
                    : <span onDoubleClick={this.activateMode.bind(this)}>{this.props.status || 'default status'}</span>
                }


            </>
        )
    }

}



