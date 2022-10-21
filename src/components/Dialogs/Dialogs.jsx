import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Eliza
                </div>
                <div className={s.dialog}>
                    Timur
                </div>
                <div className={s.dialog}>
                    Venera
                </div>
                <div className={s.dialog}>
                    Alisa
                </div>
                <div className={s.dialog}>
                    Viktor
                </div>
                <div className={s.dialog}>
                    Zoya
                </div>
            </div>
          
         <div className={s.messages}>
        
             <div className={s.message}>
                  Hi
             </div>
             <div className={s.message}>
                 How are you?
             </div>
             <div className={s.message}>
                 dfhdfdfh
             </div>
             <div className={s.message}>
                dfhgdhdf
             </div>
             
         </div>
      </div>
    )
}

export default Dialogs;


