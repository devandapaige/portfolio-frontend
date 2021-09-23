import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Swiper } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import axios from "axios";

SwiperCore.use([Pagination, Navigation]);

function ProjectsSection() {
  const [projects, setProjects] = useState(null);
  const fetchProjects = () => {
    axios
      .get(`https://amandanelson.herokuapp.com/api/projects/`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err.response));
  };
  useEffect(() => {
    fetchProjects();
  });
  return (
    <div id="projects">
      <h2>Projects</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <ProjectCard projects={projects} />
      </Swiper>
    </div>
  );
}

export default ProjectsSection;
