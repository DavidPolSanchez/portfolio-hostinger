import React from 'react'
import ProjectItem from './ProjectItem'
import TrelloImg from  '../assets/Trello-vue.png'
import PatternImg from '../assets/logo-plain.png'
import AngularImg from '../assets/Angular-cypress.png'
import ReactImg from   '../assets/React-router.png'
 const Projects = () => {
  return (
    <div id="projects" className="max-w-[1048px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quibusdam autem placeat
         at laboriosam ducimus voluptate officia eligendi est ipsum? Quos exercitationem laborum illo 
         quibusdam reiciendis saepe nihil cupiditate facere.
         </p>
         <div className="grid sm:grid-cols-2 gap-12 ">
            <ProjectItem img={PatternImg} title="Java-Patterns"techstack={"Java"}/>
            <ProjectItem img={TrelloImg} title="Trello-App" techstack={"Vue & Cypress"}/>
            <ProjectItem img={ReactImg} title="React-Router-Example"techstack={"React"}/>
            <ProjectItem img={AngularImg} title="Angular-RealApp"techstack={"Angular & Cypress"}/>
            
   
            
         </div>
    </div>
  )
}
export default Projects