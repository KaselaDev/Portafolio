import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Luces from "@/components/Luces";
import Person from "@/components/Person";
import { proyectosData } from "@/data/proyectos";
import { useSelector } from "react-redux";
import ProyectoCard from "@/components/cards/ProyectoCard";
import "@/components/Proyectos/styles/proyectos.css";
import Icon from "@/utils/Icon";

export default function Proyectos() {
  const lenguage = useSelector((state) => state.lenguage);
  const proyectoData = lenguage === "es" ? proyectosData.es : proyectosData.us;
  const [searchTerm, setSearchTerm] = useState("");
  const [tags, setTags] = useState([]);
  const [proyectosFiltrados, setProyectosFiltrados] = useState(proyectoData);
  const [activeTag, setActiveTag] = useState("Todos");

  useEffect(() => {
    setTags(["Todos"]);

    const getTags = () => {
      const allTags = new Set();
      proyectoData.forEach((proyecto) => {
        proyecto.tag.forEach((tag) => {
          allTags.add(tag);
        });
      });
      setTags((prevTags) => [...prevTags, ...Array.from(allTags)]);
    }
    
    getTags();
  }, [])
  
  useEffect(() => {
    const filterTag = () => {
      if (activeTag === "Todos") {
        setProyectosFiltrados(proyectoData);
      } else {
        setProyectosFiltrados(proyectoData.filter((proyecto) =>
          proyecto.tag.includes(activeTag)
        ));
      }
    };
    filterTag();
  }, [activeTag, lenguage])

  useEffect(() => {
    const filterSearch = () => {
      if (searchTerm) {
        setProyectosFiltrados(proyectoData.filter((proyecto) =>
          proyecto.titulo.toLowerCase().includes(searchTerm.toLowerCase())
        ));
      } else {
        setProyectosFiltrados(proyectoData);
      }
    };
    filterSearch();
  }, [searchTerm, lenguage])
  
  return (
    <>
      <div className="Content">
        <Luces cantLuces={2} luzFinal={false} />
        <Header />
        <div className="contentProyectos">
          <h2 className="titulo">
            {lenguage === "es" ? "Proyectos" : "Projects"}
             - {proyectosFiltrados.length > 0 ? `(${proyectosFiltrados.length})` : "Sin resultados"}
          </h2>
          <div className="search-bar">
            <Icon icon="faMagnifyingGlass" />
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={
                lenguage === "es" ? "Buscar proyectos" : "Search projects"
              }
            />
            {searchTerm && (
              <button className="clear-btn" onClick={() => setSearchTerm("")}>
                ✕
              </button>
            )}
          </div>
          <div className="tags">
            {tags.map((tag, index) => (
              <button
                className={`tag${activeTag === tag ? " tag_active" : ""}`}
                key={index}
                onClick={() => setActiveTag(tag)}
              >
                <span>{tag}</span>
              </button>
            ))}
          </div>
          <div className="proyectos">
            {proyectosFiltrados.map((proyecto, index) => (
              <ProyectoCard proyecto={proyecto} key={index} />
            ))}
          </div>
        </div>
        <Footer separator={true}/>
        <Person />
      </div>
    </>
  );
}
