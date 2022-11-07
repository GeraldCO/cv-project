import logo from './logo.svg';
import './App.css';
import Skills from './modules/Skills';
import React from 'react';
import uniqid from 'uniqid'
import Personal from './modules/Personal'
import Experience from './modules/JobExperienceList'


class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            skills : [],
            skill: {
                id : 0,
                name : ''
            },
            personalInfo:{
                fullName : '',
                email : '',
                address :  '',
                address2 : '',
                phone : '',
                linkedIn : '',
                infoCompleted: false
            },
            addSkill: false,
            experience:{
                id : uniqid(),
                jobTitle : '',
                companyName : '',
                startDate : '',
                endDate : '',
                location : '',
                otherInfo : ''
            }, jobExperiences : [],
            addingExperience : true,
            workingMode: true
        }
        this.removeSkill = this.removeSkill.bind(this);
        this.savePersonalInfo = this.savePersonalInfo.bind(this);
        this.handleChangePersonalInfo = this.handleChangePersonalInfo.bind(this);
        this.newSkill = this.newSkill.bind(this);
        this.skillHandleSubmit = this.skillHandleSubmit.bind(this);
        this.switchSkillVisibility = this.switchSkillVisibility.bind(this);
        this.handleChangeExperience = this.handleChangeExperience.bind(this);
        this.newJobExperience = this.newJobExperience.bind(this);
        this.showJobExperienceForm = this.showJobExperienceForm.bind(this);
    }

    
    
    handleChangePersonalInfo(event){
        const {value, name} = event.target;
        
        this.setState({
            personalInfo:{
                ...this.state.personalInfo,
                [name] : value
            }
        });
    }

    handleChangeExperience(event){
        event.preventDefault();
        const {value, name} = event.target;
        this.setState({
            experience : {
                ...this.state.experience,
                [ name ] : value
            }
        });
    }

    newJobExperience(event){
        event.preventDefault();
        this.setState({
            jobExperiences : [
                ...this.state.jobExperiences,
                this.state.experience
            ]
        });
        this.setState({
            experience : {
                id: uniqid(),
                jobTitle : '',
                companyName : '',
                startDate : '',
                endDate : '',
                location : '',
                otherInfo : ''
            }
        });
    }
    
    showJobExperienceForm(){
        this.setState({
            addingExperience : !this.state.addingExperience
        });

    }

    savePersonalInfo(){
        this.setState({
            personalInfo:{
                ...this.state.personalInfo,
                infoCompleted: !this.state.personalInfo.infoCompleted
            }
        })
    }

    newSkill(event){
        this.setState({
            skill : {
                id: uniqid(),
                name : event.target.value
            }
        })
    }

    skillHandleSubmit(event){
        event.preventDefault();
        this.setState({
            skills : [
                ...this.state.skills,
                this.state.skill
            ]
        });
        this.setState({
            skill : {
                id: uniqid(),
                name : ''
            }
        });
    }

    switchSkillVisibility(){
        this.setState( {
            addSkill: !this.state.addSkill
        });
    }

    removeSkill(id){
        const newSkillsArray = this.state.skills.filter((skill) => skill.id !== id );
        this.setState({
            skills : newSkillsArray
        });        
    }

    render(){
        return (
            <div className = 'App, container'>
                <div className = 'switch-mode'>
                    <button>Working Mode</button>
                    <div className='or'>or</div>
                    <button> Preview Mode</button>
                </div>
            
                <Personal 
                    personalInfo = {this.state.personalInfo}
                    handleChangePersonalInfo = {this.handleChangePersonalInfo}
                    savePersonalInfo = {this.savePersonalInfo}
                />

                <Experience 
                    experience = {this.state.experience}
                    addingExperience = {this.state.addingExperience}
                    handleChangeExperience = {this.handleChangeExperience}
                    newJobExperience = {this.newJobExperience}
                    experiencesList = {this.state.jobExperiences}
                    showJobExperienceForm = {this.showJobExperienceForm}
                />

                <Skills
                    skills = {this.state.skills} 
                    skill = {this.state.skill} 
                    handleChange = {this.newSkill} 
                    handleSubmit = {this.skillHandleSubmit}
                    switchVisibility = {this.switchSkillVisibility}
                    showForm = {this.state.addSkill}
                    removeSkill = {this.removeSkill}
                />
            </div>
    );
  }
}

export default App;
