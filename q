[33mcommit 2a338948ceaae74f3e6a41b1e3cd9b847e2c1c07[m[33m ([m[1;36mHEAD -> [m[1;32myani[m[33m, [m[1;31morigin/yani[m[33m)[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sun Nov 21 16:25:54 2021 -0300

    se corrigio el error de la lista de videos cuando no hay items en el localstorage

[33mcommit 64a441597e36e5a64e5e447a68a10610ec7e567c[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sun Nov 21 16:17:06 2021 -0300

    nuevo comentacion en viewArea

[33mcommit f6a4f3f314fd40ab37c347249b6c1eb40c9546ce[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sun Nov 21 16:06:09 2021 -0300

    vista de videos finalizada, con validacion en el popup cuando alguien no completa los campos del video

[33mcommit ca9564f75d05288db3bf67cc9245e122727fff1a[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sun Nov 21 15:05:55 2021 -0300

    mostrar el arreglo de videos

[33mcommit e7ae407778763cff0537830c59d8dea30b0a2007[m
Merge: 74b6a94 3bdd90e
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Nov 20 21:54:19 2021 -0300

    Merge branch 'yani' of https://github.com/infosergio2020/admin-page into yani

[33mcommit 74b6a9436e81609b787fa46cfb696f0e2a60469e[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Nov 20 21:53:58 2021 -0300

    lol

[33mcommit 3bdd90e1b734df5d9f266c0752573ac6af13ddfd[m
Author: lau-yt <laura.y.lp96@gmail.com>
Date:   Sat Nov 20 19:41:18 2021 -0300

    guardar url en base64
    
    no funciona porque hay que llamar si o si a onload ya sea Blob, Filereader o file y eso se logra cuando lo realizas en el popup

[33mcommit 2cc4e8e1545efb96c14bfd69425ea45570b3b06b[m
Author: lau-yt <laura.y.lp96@gmail.com>
Date:   Sat Nov 20 17:37:00 2021 -0300

    cambios en la url funciona
    
    En el arreglo la url cambia de manera correcta

[33mcommit 2b58444dfb444f1d2e1811637e454e3742641e83[m
Merge: 8905509 5265a14
Author: lau-yt <laura.y.lp96@gmail.com>
Date:   Sat Nov 20 17:34:19 2021 -0300

    Merge branch 'yani' of https://github.com/infosergio2020/admin-page into yani

[33mcommit 8905509634a5f4a13e7c8e5c9e7f4d93a4f98fa8[m
Author: lau-yt <laura.y.lp96@gmail.com>
Date:   Sat Nov 20 17:29:13 2021 -0300

    url de imagen funciona

[33mcommit 5265a14e68030967ae7bfab5e31a14d4fb1cac17[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Nov 20 17:18:19 2021 -0300

    .

[33mcommit 02c190e789758a3712a7f84e7742809aeddef3f7[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Nov 20 16:45:39 2021 -0300

    .

[33mcommit 08270f6e6500f62ed09fb49f464a0e83f163b703[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Nov 20 14:42:47 2021 -0300

    .

[33mcommit 1f26e7f82d79136fe65fb0b2288912c37e1dd003[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Nov 20 14:35:08 2021 -0300

    .

[33mcommit 33349498fcdbf8483201d7b1c535303350db6c1b[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Nov 20 14:19:28 2021 -0300

    continuo organizando

[33mcommit 3785cf8f2ceba89be0c4688f7eb5df4eb6bf464c[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Nov 20 13:32:06 2021 -0300

    estoy tratando de organizar el codigo

[33mcommit 8c3fbcd435e2f09a9d314c6b1a8d7e63867b4dd7[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Thu Nov 18 18:23:46 2021 -0300

    i will have order

[33mcommit 119e58c666ef90bd676a1c9eebb8a8cee3f23c0e[m
Author: ori <ori_larusa@hotmail.com>
Date:   Thu Nov 18 17:10:40 2021 -0300

    almacena una lista de fotos

[33mcommit 07fe750b91fe96282b2b54d55be37bf376afc55c[m
Author: ori <ori_larusa@hotmail.com>
Date:   Thu Nov 18 01:11:59 2021 -0300

    se puede guardar el listado de videos e imagenes pero falta solucionar que nos devuelva una imagen

[33mcommit b3382c325476ebeb60af83e89eaea49d878f1c2b[m
Author: ori <ori_larusa@hotmail.com>
Date:   Mon Nov 15 23:27:20 2021 -0300

    correccion al llamado de New Area

[33mcommit 532a06845e506c4af4d5b328b3f5624f56cf2661[m
Author: ori <ori_larusa@hotmail.com>
Date:   Mon Nov 15 22:57:20 2021 -0300

    Agregue como componente: NewEvento y NewEnvivo

[33mcommit b26c4d789c0561971c9cbe6657adc6abc25a9b4f[m
Author: ori <ori_larusa@hotmail.com>
Date:   Fri Nov 12 01:35:01 2021 -0300

    solucione el guardado desde otro componente solo se crea otra clave para el localStorage. Nota: deberiamos separaen archivos diferentes el area, envivo y evento porque el codigo cada vez ses hace mas largo y feo, y todavia nos falta llamar a la base de datos y blabla

[33mcommit 881b08f7d81b56d631336cfdad8f0d5b08ab82df[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Thu Nov 11 23:31:01 2021 -0300

    se integro el popup con el new area : en desarrollo , falta unir ambos dataset

[33mcommit 84eb658e1962317f706c09934ab31eaad8756508[m
Author: ori <ori_larusa@hotmail.com>
Date:   Thu Nov 11 22:17:24 2021 -0300

    acomode el llamado de rutas del popwindows

[33mcommit f9c5c0ec1e129fc533c781ef50505a6a7fd4c6c9[m
Author: ori <ori_larusa@hotmail.com>
Date:   Thu Nov 11 22:02:33 2021 -0300

    corregir Areas

[33mcommit e3818a03a79339bc5e576ae9f5717e6f80551429[m
Author: ori <ori_larusa@hotmail.com>
Date:   Thu Nov 11 20:50:47 2021 -0300

    localStorage en desarrollo

[33mcommit 698f1bb5707a345ee9a43913c4a18822d9a0c2e3[m
Author: ori <ori_larusa@hotmail.com>
Date:   Tue Nov 9 00:09:28 2021 -0300

    almacene en cache de manera independiente, falta almacenar toda la info e implementar bien cuando se carga videos y demas

[33mcommit efa8ac4d17a3ff4ff65c18fe3625fc4d9c5a3d3d[m
Author: ori <ori_larusa@hotmail.com>
Date:   Mon Nov 8 19:16:21 2021 -0300

    agregue localStorage

[33mcommit 07a45521f5c615a1bbda0d0c0fd0f1db1b1e949f[m
Author: ori <ori_larusa@hotmail.com>
Date:   Mon Nov 8 17:52:09 2021 -0300

    estuvo corrieguiendo el llamado de rutas

[33mcommit 7668863ad366a63c5ec4e3d820b1be2742aa1db5[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sun Nov 7 20:37:23 2021 -0300

    se acomodaron los botones de new area

[33mcommit 6c88f1ce0231c2331a61511e67f73fd671d262f9[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sun Nov 7 20:24:38 2021 -0300

    bu

[33mcommit 9e078e932d74bbbbe80462876aa445612947f4aa[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sun Nov 7 20:16:04 2021 -0300

    arreglando la vista de lps editar

[33mcommit bbecf1f2fe584d94b5b9c9d35cc01e6a31b8386e[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sun Nov 7 20:12:34 2021 -0300

    arreglando la vista de lps editar

[33mcommit 973fdca68b5b47d8753548187cbf328621f51ca0[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sun Nov 7 19:40:41 2021 -0300

    7-11-2021 se cambiaron clases de newarea

[33mcommit 5ff06655f01fcb1ce2691fa99a1974686e9f84b9[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sat Oct 30 18:56:39 2021 -0300

    se reestructuraron las carpetas con el fin de tener todo mas a disposicion

[33mcommit d3e040029f3488d4006133862dffce867b2d5863[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Thu Oct 28 21:30:20 2021 -0300

    rutas para creacion

[33mcommit 1841e0a90b0c515872ef75892b1f4abd05226585[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sun Oct 17 00:30:26 2021 -0300

    el boton borrar ahora borra los estados de la atraccion

[33mcommit 5c171d32b1dcf6923ab9248f6cbf4ce5c5ad875d[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sat Oct 16 23:29:52 2021 -0300

    se corrigio la busqueda de atraccion

[33mcommit 3af59f2c2e0d533ac4f5ea8dd95bea1cc341d70e[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Oct 16 14:48:22 2021 -0300

    cree las tablas de los editar

[33mcommit 6b8ac0a19e2c2a0710cba3686e9498a3aae17cc7[m[33m ([m[1;32mmain[m[33m)[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Oct 16 00:46:05 2021 -0300

    mostrar toda la tabla cuando se escribe cualquier cosa

[33mcommit fe9d54958e827892e125c39ff4f74ff6a8c4c526[m
Merge: e6a5122 1c2c4f9
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Oct 16 00:39:12 2021 -0300

    arreglando conflictos

[33mcommit e6a5122993eeee4bb9ec3ca7c8414569c02333b2[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Oct 16 00:33:03 2021 -0300

    menu con las rutas

[33mcommit 1c2c4f9aa5dddf222c083757ade70fa5eac7509a[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sat Oct 16 00:28:44 2021 -0300

    buscador funcinando

[33mcommit 411470f132053ca30ed010ea496c187617bcc686[m
Author: ori <ori_larusa@hotmail.com>
Date:   Fri Oct 15 18:13:39 2021 -0300

    continuo

[33mcommit efd51eb66f72a12c334e5fa63e5a0d51afd806bf[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Fri Oct 15 16:47:22 2021 -0300

    se agrego el router

[33mcommit 95491181e061997c371e4f668c615586c12bfe79[m[33m ([m[1;31morigin/yaniV1[m[33m, [m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Tue Oct 12 19:54:26 2021 -0300

    se agrego un estado para representar los titulos para el header

[33mcommit f74fcfe9a5d9331e5832480735208e2f2219d267[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Tue Oct 12 11:58:34 2021 -0300

    se agrego header a navbar

[33mcommit a003110b44dd3c61536495aaaed04a810ba8befe[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Mon Oct 11 11:55:52 2021 -0300

    actualizada la lista de dependencias de package.json hacer pull y luego npm install para actualizar ademas se instalo la libreria de react-icons pero aun no se ha usado...

[33mcommit b8396c48fd4583012aae83c048ad97cb6cf48927[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Mon Oct 11 11:32:00 2021 -0300

    navbar component scafolding

[33mcommit 8b6b0b4b92bb58c9cae2eb64b1e72f8d509580a0[m
Author: ori <ori_larusa@hotmail.com>
Date:   Tue Oct 5 18:12:51 2021 -0300

    pude acomodar los botones pero no es responsive

[33mcommit b506025375542c162e9dbd794a42198ceb48bf1b[m
Author: ori <ori_larusa@hotmail.com>
Date:   Tue Oct 5 16:40:00 2021 -0300

    acomodando botones de newarea

[33mcommit 6e8089a4fbd1668eb0d4513935367da6784f520f[m
Author: ori <ori_larusa@hotmail.com>
Date:   Tue Oct 5 15:25:03 2021 -0300

    adaptando cambios

[33mcommit 1608c75984d557abbf9113d08204f15426a4e7ba[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Tue Oct 5 14:55:18 2021 -0300

    5-10-2021

[33mcommit 776e8485bc445f5541c606e4226e288b0445e994[m
Merge: 2d0defd d303d5e
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Tue Oct 5 12:21:23 2021 -0300

    Merge branch 'sergioV1'

[33mcommit d303d5e0f0a84a1b2d2a473761f93c1b5caab16e[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Tue Oct 5 12:20:37 2021 -0300

    vista del HOME (listado de eventos) finalizada (falta agregar comportamiento)

[33mcommit 29a000ca332310f0ca3e1b68014ddc2673721342[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Tue Oct 5 11:19:58 2021 -0300

    creado los hooks y helpers para cada tabla

[33mcommit 2fd3c184a3631a2f353c6c73b25af17efc1a590b[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Mon Oct 4 14:17:06 2021 -0300

    tabla con mock de datos

[33mcommit 2d0defd796c985cf3aa82a1fd3456c2240ff81d4[m
Merge: fd6eec2 671acbb
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sun Oct 3 22:41:05 2021 -0300

    Merge branch 'sergioV1'

[33mcommit 671acbbf4c2ce8179a4bddf94b8efa1aa851651a[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sun Oct 3 22:39:55 2021 -0300

    se corrigienron y probaron la itegracion de componentes

[33mcommit fd6eec2d81d02c77c4819067d85c03d78f17edf3[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sun Oct 3 20:26:55 2021 -0300

    add react-router npm

[33mcommit b68895ba3105d76f42c3e48136c7ca3cdb8d6f76[m
Merge: 299583d 12298d3
Author: SAS <70117746+infosergio2020@users.noreply.github.com>
Date:   Sun Oct 3 19:39:51 2021 -0300

    Merge pull request #1 from infosergio2020/orianaV1
    
    intento1

[33mcommit 12298d301bd169676e36a51e259239bcb0ffa581[m[33m ([m[1;31morigin/orianaV1[m[33m, [m[1;32morianaV1[m[33m)[m
Merge: c17bc31 299583d
Author: SAS <70117746+infosergio2020@users.noreply.github.com>
Date:   Sun Oct 3 19:39:39 2021 -0300

    Merge branch 'main' into orianaV1

[33mcommit c17bc3115097934cedf01200a87451e33049391b[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sun Oct 3 19:31:06 2021 -0300

    intento1

[33mcommit 299583db30c3e7dfaff3ddeb7c5117f2ededb35f[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sat Oct 2 19:55:06 2021 -0300

    se finalizo los arreglos despues de hacer el merge ahora la version mas actual y estable es la main

[33mcommit 48c07a2e2a9c28d973f865dccab7d3fb910e7c50[m
Merge: 28c3e16 7514693
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sat Oct 2 16:59:35 2021 -0300

    se ha realizado el merge de las ramas oriana y sergio-videoPlayer aun falta probar el resultado de la integracion de ambas partes

[33mcommit 28c3e169fcd3b569db3c182c01e3d526c9dec46f[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Fri Oct 1 17:35:52 2021 -0300

    tabla de informacion vista casi finalizada implementar el uso de variables con hooks

[33mcommit 75146939f93d2bc644de72f2d8264d0e2c57608e[m
Author: ori <ori_larusa@hotmail.com>
Date:   Fri Oct 1 17:29:24 2021 -0300

    se hizo la estructura de la vista del area ViewArea

[33mcommit a9d763226f892f1c84306e97f813335eb050f7c8[m
Author: ori <ori_larusa@hotmail.com>
Date:   Thu Sep 30 18:50:43 2021 -0300

    view multimedia falto la pestaña del envivo no se entiende que hacer ahi--> Hay que hacer la vista de viewArea

[33mcommit aa5a425407990c128a6b76a1b9303cd485cd83d4[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Thu Sep 30 14:51:38 2021 -0300

    sergio cambio el import de VideoApp

[33mcommit 1d8bbcc13a9ab9736158e17e8d1e54660b73291d[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Thu Sep 30 14:45:19 2021 -0300

    se borro todo por que hay que reestructurar la tabla

[33mcommit bd98c9f5ed887ac9393e129db099c198fdfd24b8[m
Author: ori <ori_larusa@hotmail.com>
Date:   Thu Sep 30 14:45:00 2021 -0300

    esta el componente multimedia con sus pestañas--> pero me falta agregar el contenido de cada tab eso esta en desarrollo

[33mcommit d930f7f67566a9b8787b3f87acbcdae2b4d8fa43[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Wed Sep 29 23:11:06 2021 -0300

    se implemento el diseño de la tabla falta agregar estados para retener un listado de items en tabla

[33mcommit 69718fb54de2d28bcf67e556d4f92bbaff21add8[m
Author: ori <ori_larusa@hotmail.com>
Date:   Tue Sep 28 23:17:40 2021 -0300

    acomode el codigo

[33mcommit 6d9f35332c29d7aa478452ae2359bc8f0da52826[m
Author: ori <ori_larusa@hotmail.com>
Date:   Tue Sep 28 23:02:50 2021 -0300

    termine de agregar crear enVIVO AREA y EVENTO

[33mcommit 918b71331f4d7eae5bb26dfe5793e7a10ad03e38[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sun Sep 26 15:38:17 2021 -0300

    estuvo haciendo la parte del agregar area: NewArea me queda terminarlo, pienso agregar en una parte el envivo para mas placer

[33mcommit 83db32243e7d10aafee0bbf4782fad0123eb2a05[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sun Sep 26 12:00:12 2021 -0300

    pude agregar el cargar imagen pero no me deja guardame el archivo

[33mcommit 29a1b31fdef3fbde2b4397e1213235f0d7bc6872[m
Author: ori <ori_larusa@hotmail.com>
Date:   Thu Sep 23 22:21:05 2021 -0300

    agregue el cargar imagen

[33mcommit a4a06600c63713d21d4a2dc1d5a6000e41fec595[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Thu Sep 23 19:52:42 2021 -0300

    se corrigio el tema del acceso a los iconos agregando ./ en el from

[33mcommit ff9b789248f0e1e3690a55b1ea5ac0a9a14b5674[m
Author: ori <ori_larusa@hotmail.com>
Date:   Thu Sep 23 17:19:17 2021 -0300

    sergio sigue

[33mcommit 1bfea313005d85fb21c105619f8d3fd35c07d2c8[m
Author: ori <ori_larusa@hotmail.com>
Date:   Thu Sep 23 15:41:51 2021 -0300

    consegui agregar los 2 botones: de guardar y cancelar

[33mcommit 92cfe581bc345392db8650abfba25378e8c18614[m
Author: ori <ori_larusa@hotmail.com>
Date:   Thu Sep 23 15:01:03 2021 -0300

    sigo tratando de ver al boton

[33mcommit 16abf36abaf0a49d9c070652ec179b3310541f8c[m
Author: ori <ori_larusa@hotmail.com>
Date:   Thu Sep 23 14:47:58 2021 -0300

    trato de hacer agregar los botones en el popoup

[33mcommit 135a2f58b602ed6a48daf8b056a735710b6ebbd3[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Thu Sep 23 01:46:14 2021 -0300

    componentes boton de oriana agregado a la rama de sergio para probar en el popwindow

[33mcommit 92070a2973f367b0d7fecd50053289033b77778b[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Thu Sep 23 01:42:46 2021 -0300

    uso de render condicional linea 57 popwindow.jsx

[33mcommit 87cbbe4f11a8d0bf33b8a187dc9d727005f69a14[m
Author: ori <ori_larusa@hotmail.com>
Date:   Thu Sep 23 01:11:56 2021 -0300

    se ven los campos

[33mcommit a622013b60f683e76e91bb5f13a12483a089e900[m
Author: ori <ori_larusa@hotmail.com>
Date:   Wed Sep 22 23:30:50 2021 -0300

    quiero guardar cambios

[33mcommit c1c0db015bb05a7386ab2b7ea5b9aab649819509[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Mon Sep 20 21:27:45 2021 -0300

    se agregaron inputs en la ventana del popup

[33mcommit 163a565cf5f5fadd3862a019952e37e8133ed8ac[m
Merge: a19d69b a77802b
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sat Sep 18 22:58:25 2021 -0300

    again ordered

[33mcommit a77802b3d2fb1faf07b2d590821f2ead78a38d23[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Sep 18 22:56:31 2021 -0300

    agregue mas iconos

[33mcommit a19d69b92f80c5a86101ffb0deba99e67a68fd2b[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sat Sep 18 22:55:21 2021 -0300

    se ordenaron los componentes en carpeta

[33mcommit 7281066a6682ff43b21da812562ea219d250bea6[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Sep 18 22:47:28 2021 -0300

    video logo

[33mcommit 067ce456edc3804f164098574c786a39dbea2f51[m
Merge: f72dce8 82ec8c7
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Sep 18 22:44:01 2021 -0300

    Merge branch 'oriana' of https://github.com/infosergio2020/admin-page into oriana

[33mcommit f72dce889b511cc914d9e3d6a64d4d5569b7bf75[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Sep 18 22:43:37 2021 -0300

    agregue un icono de video

[33mcommit 82ec8c7340f809674c7da393221f4bbf7ee61394[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sat Sep 18 22:43:00 2021 -0300

    se generalizaron los botones

[33mcommit 3d1268baa0b7d34b0efdd57af608edcd92d30dd7[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Sep 18 21:51:52 2021 -0300

    acomode mas o menos los elementos del header

[33mcommit 5cdedcad93353be747777ef9d53b3e194359a360[m
Merge: 53414ed 34f6587
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Sep 18 21:08:13 2021 -0300

    Merge branch 'oriana' of https://github.com/infosergio2020/admin-page into oriana

[33mcommit 53414ed7292406d8cdd95900a3e5d292aa67736c[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Sep 18 21:07:58 2021 -0300

    saludar

[33mcommit 34f65873ff7e84b3b41a5e5913b7ba051725b61b[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sat Sep 18 20:57:17 2021 -0300

    se agrego un .svg

[33mcommit c5af809ae27df4bd22cbe153ee81a6c64932af76[m
Merge: 6a2c882 689ea5d
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sat Sep 18 20:07:54 2021 -0300

    resolved

[33mcommit 6a2c88234b443dc5a48a3bc43ba8b4d1f0ecea49[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sat Sep 18 20:06:26 2021 -0300

    make it better

[33mcommit 689ea5d35363897f3f8b53895bf39ff93f5b313b[m
Merge: 31d385c 422443a
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Sep 18 20:04:56 2021 -0300

    no funciona

[33mcommit 422443a7fee61ee1ff08ad2b0c31b67c14103234[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sat Sep 18 19:54:45 2021 -0300

    sergio puso un salto de linea

[33mcommit 31d385cb4d8f4ab25c6364c16605b5aa56bf6862[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Sep 18 19:52:17 2021 -0300

    quiero ver cambios de sergio

[33mcommit baa908996cd3be92fb613389cd79a4b73293f3d8[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sat Sep 18 19:50:42 2021 -0300

    sergio quito espacios en blanco y agrego cierres a l algunos tags

[33mcommit 999d7e4288461775ac080510ce7d2a2935d53af2[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Sat Sep 18 19:45:49 2021 -0300

    armando la ventana popup parte 1

[33mcommit 0338b738761fb6fc0d47a581b44594cf6bed3733[m
Author: ori <ori_larusa@hotmail.com>
Date:   Sat Sep 18 19:42:36 2021 -0300

    estoy guardando mis componentes

[33mcommit 37a9d6ce1e6b7e491afd358b0058a456e15e00f9[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Thu Sep 16 23:24:42 2021 -0300

    nueva rama creada ademas se agrego un componente video para personalizar falta realizar pruebas y retocar estilos

[33mcommit b952b57edd1bcee1dfe964bbc0a3fef4ff79fd3d[m
Author: infosergio2020 <infosergio2020@gmail.com>
Date:   Wed Sep 15 22:46:22 2021 -0300

    first commit

[33mcommit e088974b7f4438c475df3240570814d6602cfe71[m
Author: SAS <70117746+infosergio2020@users.noreply.github.com>
Date:   Wed Sep 15 22:09:48 2021 -0300

    Initial commit
