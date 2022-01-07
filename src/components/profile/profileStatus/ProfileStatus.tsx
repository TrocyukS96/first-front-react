import React, {ChangeEvent, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void

}

export const ProfileStatus = (props: ProfileStatusType) => {
    const {status, updateStatus} = props
    //hooks
    const [editMode, setEditMode] = useState(false)
    const [statusValue, setStatusValue] = useState(status)

    //handlers
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusValue(e.currentTarget.value)


    }
    const deActivateModeHandler = () => {
        setEditMode(false)
        updateStatus(statusValue)
    }
    const activateModeHandler = () => {
        setEditMode(true)
    }
    return (
        <>
            {editMode
                ? <input onChange={onChangeInputHandler} onBlur={deActivateModeHandler} autoFocus type="text"
                         value={statusValue}/>
                : <div style={{marginBottom: "20px"}}>
                    <span style={{color: "#fff"}} onDoubleClick={activateModeHandler}>{status}</span>
                </div>
            }
        </>
    )

}



