import React from 'react'
// ----  ICONS  ----
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const NavBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    // {
    //     title: 'Caracteristicas',
    //     path: '/viewMultimedia',
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Multimedia',
    //     path: '/viewMultimedia',
    //     icon: <FaIcons.FaFileVideo />,
    //     cName: 'nav-text'
    // },
    {
        title: 'Eventos',
        path: '/Eventos',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'nav-text'
    },
    {
        title: 'Crear Evento',
        path: '/CrearEvento',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'nav-text'
    },
    {
        title: 'Areas',
        path: '/Areas',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'nav-text'
    },
    {
        title: 'Crear Area',
        path: '/CrearArea',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'nav-text'
    },
    {
        title: 'Atracciones',
        path: '/Atracciones',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'nav-text'
    },
    {
        title: 'Crear Atraccion',
        path: '/CrearAtraccion',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'nav-text'
    },
    {
        title: 'Envivos',
        path: '/Envivos',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'nav-text'
    },
    {
        title: 'Crear Envivo',
        path: '/CrearEnvivo',
        icon: <IoIcons.IoIosArrowForward />,
        cName: 'nav-text'
    }

]
