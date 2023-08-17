import s from './Projects.module.scss'

// const data = [
    // temporary array of data for layout
// ]

const Projects = () => {
   return (
      <div className={s.projects}>
         <h1>Projects</h1>
            {/* example img */}
            <img src="http://localhost:8080/static/images/getty.png" alt="" />
      </div>
   );
};
export default Projects