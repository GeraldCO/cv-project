import React from 'react';



export default class Skills extends React.Component{
    render(){
        const {
            skills, 
            skill,
            handleChange,
            handleSubmit,
            removeSkill,
            switchVisibility,
            showForm
        } = this.props;


        const skilsList = skills.map((skill)=>{
            return <li key={skill.id}>
                        {skill.name} 
                        <button type='button' className='btn btn-danger btn-delete' onClick={()=>removeSkill(skill.id)} > x </button> 
                    </li>
        });

        return(
            <div>
                <ul className='skills-container'>
                    {skilsList}
                </ul>
                { showForm ? 
                <form onSubmit={handleSubmit}>
                    <input type='text' value={ skill.name } onChange = {handleChange} />
                    <button> Save </button>
                    <button type='button' onClick={switchVisibility} > Cancel </button>
                </form> :
                <button onClick={switchVisibility} > +Skill </button>
             }
                
            </div>
        )
    }
}
