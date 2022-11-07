import React, { Component } from 'react';

export default class Personal extends Component{
    
    render(){
        const {
            fullName,
            phone,
            email,
            linkedIn,
            address,
            address2,
            infoCompleted
        } = this.props.personalInfo;

        const { savePersonalInfo } = this.props; 
        const { handleChangePersonalInfo } = this.props;

        return(
            
            <form>
                Basic Information                    
                <div className='personal-container'>
                    <fieldset>
                        <label htmlFor='fullName'> Full Name </label>
                        <input id='fullName' value = {fullName} name='fullName' type='text' onChange={handleChangePersonalInfo} 
                            disabled={infoCompleted} className={infoCompleted ? 'input-disabled' : undefined}    
                        /> 
                    </fieldset>                     

                    <fieldset>
                        <label htmlFor='email'>Email</label>
                        <input id='email' value = {email} name='email' type='text' onChange={handleChangePersonalInfo} 
                            disabled={infoCompleted} className={infoCompleted ? 'input-disabled' : undefined}
                        /> 
                    </fieldset>                    
                    
                    <fieldset>
                        <label htmlFor='linkedIn'>LinkedIn</label>
                        <input id='linkedIn' value = {linkedIn} name='linkedIn' type='text' onChange={handleChangePersonalInfo} 
                            disabled={infoCompleted} className={infoCompleted ? 'input-disabled' : undefined}
                        /> 
                    </fieldset>

                    <fieldset>
                        <label htmlFor='phone'>Phone</label>
                        <input id='phone' value = {phone} name='phone' type='text' onChange={handleChangePersonalInfo} 
                            disabled={infoCompleted} className={infoCompleted ? 'input-disabled' : undefined}
                        /> 
                    </fieldset>

                    <fieldset>
                        <label htmlFor='address'>Address</label>
                        <input id='address' value = {address} name='address' type='text' onChange={handleChangePersonalInfo} 
                            disabled={infoCompleted} className={infoCompleted ? 'input-disabled' : undefined}
                        /> 
                    </fieldset>    

                    <fieldset>
                        <label htmlFor='address'>Address 2</label>
                        <input id='address2' value = {address2} name='address2' type='text' onChange={handleChangePersonalInfo} 
                            disabled={infoCompleted} className={infoCompleted ? 'input-disabled' : undefined}
                        /> 
                    </fieldset>
                    <br />

                    <button className='personal-info-save-button' type='button' onClick={savePersonalInfo} > {!infoCompleted ? 'Save' : 'Edit'} </button>
                </div>
            </form>
            
        )   
    }
}