import React, { Component } from 'react'

export default class Experience extends Component{


    render(){
        const {
            jobTitle,
            companyName,
            location,
            startDate,
            endDate,            
            otherInfo
        } = this.props.experience;

        const { 
            experiencesList,
            addingExperience,
            newJobExperience,
            showJobExperienceForm
        } = this.props;

        const experiencesListDivs = experiencesList.map((experience)=>{
            return  <div key={experience.id} className='job-experience-element'  >
                        <div>
                            <p>{experience.companyName}, {experience.location}</p>
                            <p>{experience.startDate} - {experience.endDate}</p>
                        </div>
                        <div>
                            <p>{experience.jobTitle} </p>
                            <p>{experience.otherInfo}</p>
                        </div>                        
                        <div>
                            <button className='btn btn-danger btn-delete'>x</button>
                        </div>
                    </div>
        });
        

        return(
            <div className='job-experience-container'>
                {experiencesListDivs}
                {addingExperience ? 
                    <form onSubmit={newJobExperience} className='experience-container'>
                    
                        <fieldset >
                            <label htmlFor='job-title'>Job title</label>
                            <input id='job-title' value = {jobTitle} name='jobTitle' type='text' onChange={this.props.handleChangeExperience} /> 
                        </fieldset>    
                        <fieldset>
                            <label htmlFor='company-name'>Company name</label>
                            <input id='company-name' value = {companyName} name='companyName' type='text' onChange={this.props.handleChangeExperience} /> 
                        </fieldset>    
                        <fieldset>
                        <fieldset>
                            <label htmlFor='location'>Location</label>
                            <input id='location' value = {location} name='location' type='text' onChange={this.props.handleChangeExperience} /> 
                        </fieldset>    
                        <fieldset></fieldset>
                            <label htmlFor='start-date'>Start date</label>
                            <input id='start-date' value = {startDate} name='startDate' type='text' onChange={this.props.handleChangeExperience} placeholder='YYYY' /> 
                        </fieldset>    
                        <fieldset>
                            <label htmlFor='end-date'>End date</label>
                            <input id='end-date' value = {endDate} name='endDate' type='text' onChange={this.props.handleChangeExperience} placeholder='YYYY' /> 
                        </fieldset>    
                        <fieldset className='textarea-fieldset'>
                            <label htmlFor='other-info'>Other information</label>
                            <textarea id='other-ifo' value = {otherInfo} name='otherInfo' type='text' onChange={this.props.handleChangeExperience} placeholder='optional details such as job responsabilities or achievements' /> 
                        </fieldset>
                        <fieldset>
                            <button> Submit    </button>
                            <button type='button' onClick={showJobExperienceForm}> Cancel   </button> 
                        </fieldset>
                    </form>        
                      
                    
                    : 
                        <fieldset>
                            <button type= 'button' onClick={showJobExperienceForm}> + Job Experience    </button>                                
                        </fieldset>
                    }
                
            </div>
        )
    }
}