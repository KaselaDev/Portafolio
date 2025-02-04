import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setLenguage } from "@/utils/redux/slices/lenguageSlice";
import { setSection } from "@/utils/redux/slices/sectionSlice";
import Landing from '../components/landing/Landing';
import Proyectos from '../components/Proyectos/Proyectos';

export default function LanguageWrapper({ defaultLang }) {
    const dispatch = useDispatch();
    const { lang, section } = useParams();

    const validLanguages = ["es", "us"];

    if (!validLanguages.includes(lang)) {
        return <Navigate to={defaultLang} replace />;
    }

    useEffect(() => {
        dispatch(setLenguage(lang));
        dispatch(setSection(section));
    }, [lang, section, dispatch]);

    switch (section) {
      case "Landing":
        return (<Landing />);
      case "Proyectos":
        return (<Proyectos />);
      case "Projects":
        return (<Proyectos />);
      default:
        return <Navigate to={`/${lang}/Landing`} replace />;
    }
}
