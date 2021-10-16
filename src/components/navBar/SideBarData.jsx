import React from 'react'
// ----  ICONS  ----
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideBarData = [
    {
        title: 'Home',
        path: '/viewEvento',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Caracteristicas',
        path: '/viewMultimedia',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Multimedia',
        path: '/viewMultimedia',
        icon: <FaIcons.FaFileVideo />,
        cName: 'nav-text'
    },
    {
        title: 'Areas',
        path: '/ViewArea',
        icon: <FaIcons.FaKaaba />,
        cName: 'nav-text'
    },
    {
        title: 'nuevo evento vista',
        path: '/NewEvento',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'nuevo area vista',
        path: '/NewArea',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },

]
