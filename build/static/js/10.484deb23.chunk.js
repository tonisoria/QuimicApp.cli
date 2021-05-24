(this.webpackJsonpquimicapp=this.webpackJsonpquimicapp||[]).push([[10],{152:function(e,t,n){"use strict";var o,a=n(1),r=n(16),i=n(21),s=n(5),c=n(6).c.div(o||(o=Object(s.a)(["\n  position: relative;\n  margin: 3rem 0rem;\n\n  & input {\n    width: 100%;\n    height: 3.2rem;\n    border-radius: 1.5rem;\n    filter: drop-shadow(0rem 0.19rem 0.2rem #757575);\n    border: none;\n    padding-left: 4rem;\n\n    &:focus {\n      outline: none;\n    }\n  }\n  & .search-icon {\n    font-size: 20px;\n    position: absolute;\n    left: 30px;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: 2;\n    & path {\n      fill: #0a1128;\n    }\n  }\n"]))),l=n(0);t.a=function(){var e=Object(a.useState)(!1),t=e.keyword,n=e.setKeyword;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(c,{className:"search-bar-wrapper",children:[Object(l.jsx)(r.a,{icon:i.f,className:"search-icon"}),Object(l.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}},"searchUser")]})})}},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var o=n(7),a=n(115),r=n(116),i=n(1),s=n(114),c=n.n(s),l=n(136),u=n(327);function d(e){var t=e.className,n=e.direction,r=e.index,s=e.marginDirection,c=e.children,l=e.split,u=e.wrap,d=i.useContext(m),p=d.horizontalSize,b=d.verticalSize,f=d.latestIndex,v={};return"vertical"===n?r<f&&(v={marginBottom:p/(l?2:1)}):v=Object(o.a)(Object(o.a)({},r<f&&Object(a.a)({},s,p/(l?2:1))),u&&{paddingBottom:b}),null===c||void 0===c?null:i.createElement(i.Fragment,null,i.createElement("div",{className:t,style:v},c),r<f&&l&&i.createElement("span",{className:"".concat(t,"-split"),style:v},l))}var p=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},m=i.createContext({latestIndex:0,horizontalSize:0,verticalSize:0}),b={small:8,middle:16,large:24};t.b=function(e){var t,n=i.useContext(u.b),s=n.getPrefixCls,f=n.space,v=n.direction,g=e.size,E=void 0===g?(null===f||void 0===f?void 0:f.size)||"small":g,h=e.align,x=e.className,w=e.children,j=e.direction,O=void 0===j?"horizontal":j,y=e.prefixCls,C=e.split,S=e.style,k=e.wrap,U=void 0!==k&&k,B=p(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),N=i.useMemo((function(){return(Array.isArray(E)?E:[E,E]).map((function(e){return function(e){return"string"===typeof e?b[e]:e||0}(e)}))}),[E]),A=Object(r.a)(N,2),P=A[0],q=A[1],z=Object(l.a)(w,{keepEmpty:!0});if(0===z.length)return null;var _=void 0===h&&"horizontal"===O?"center":h,I=s("space",y),T=c()(I,"".concat(I,"-").concat(O),(t={},Object(a.a)(t,"".concat(I,"-rtl"),"rtl"===v),Object(a.a)(t,"".concat(I,"-align-").concat(_),_),t),x),D="".concat(I,"-item"),J="rtl"===v?"marginLeft":"marginRight",M=0,R=z.map((function(e,t){return null!==e&&void 0!==e&&(M=t),i.createElement(d,{className:D,key:"".concat(D,"-").concat(t),direction:O,index:t,marginDirection:J,split:C,wrap:U},e)}));return i.createElement("div",Object(o.a)({className:T,style:Object(o.a)(Object(o.a)({},U&&{flexWrap:"wrap",marginBottom:-q}),S)},B),i.createElement(m.Provider,{value:{horizontalSize:P,verticalSize:q,latestIndex:M}},R))}},710:function(e,t,n){"use strict";n.r(t);var o,a,r=n(1),i=n(12),s=n(152),c=n(173),l=n(17),u=n(9),d=n.n(u),p=n(18),m=n(208),b=n(703),f=n(27),v=n(15),g=n(4),E=n.n(g),h=n(19),x=n(5),w=n(6),j=w.c.div(o||(o=Object(x.a)(["\n  & .users-table {\n    & table {\n      border-collapse: separate;\n      border-spacing: 0 0.3rem;\n    }\n    & .ant-table-selection,\n    .ant-checkbox-wrapper {\n      display: none;\n    }\n    & tr {\n      height: 5rem;\n      font-size: 17px;\n      &:hover > td {\n        background-color: #6bb1c5;\n      }\n    }\n    & thead tr th {\n      background-color: #0a1128;\n      color: #fefcfb;\n    }\n    & tr td {\n      background-color: #0a1128;\n      color: #fefcfb;\n    }\n    & tr td:first-child,\n    tr th:first-child {\n      border-top-left-radius: 0.3rem;\n      border-bottom-left-radius: 0.3rem;\n    }\n    & tr td:last-child,\n    tr th:last-child {\n      border-top-right-radius: 0.3rem;\n      border-bottom-right-radius: 0.3rem;\n    }\n    & .ant-table-column-has-sorters:hover {\n      background-color: #6bb1c5;\n    }\n    & td div div {\n      &:first-child {\n        a path {\n          fill: #3d6e9c;\n        }\n      }\n      &:last-child {\n        a path {\n          fill: #c56b6b;\n        }\n      }\n      & a {\n        padding: 0rem 0rem;\n        border: none;\n        border-radius: 0.2rem;\n        font-weight: 400;\n        text-decoration: none;\n      }\n    }\n  }\n"]))),O=w.c.a(a||(a=Object(x.a)(["\n  display: block;\n  width: 160px;\n  height: 45px;\n  background: #6bb1c5;\n  padding: 10px;\n  margin-bottom: 2rem;\n  text-align: center;\n  border-radius: 5px;\n  color: white;\n  font-weight: bold;\n  background-color: #6bb1c5;\n  text-decoration: none;\n  box-shadow: 0rem 0.2rem 0.2rem 0rem #bdbdbd;\n  float: right;\n  &:hover {\n    color: white;\n  }\n"]))),y=n(22),C=n.n(y),S=n(16),k=n(21),U=n(0),B=[{title:"Usuario",dataIndex:"nombreUsuario",sorter:function(e,t){return e.nombreUsuario<t.nombreUsuario?1:t.nombreUsuario<e.nombreUsuario?-1:0},sortDirections:["descend","ascend"]},{title:"Nombre",dataIndex:"nombre",responsive:["lg"],sorter:function(e,t){return e.nombre<t.nombre?1:t.nombre<e.nombre?-1:0},sortDirections:["descend","ascend"]},{title:"Apellidos",dataIndex:"apellidos",responsive:["lg"],sorter:function(e,t){return e.apellidos<t.apellidos?1:t.apellidos<e.apellidos?-1:0},sortDirections:["descend","ascend"]},{title:"Grupo",dataIndex:"grupo",responsive:["lg"],sorter:function(e,t){return e.grupo<t.grupo?1:t.grupo<e.grupo?-1:0},sortDirections:["descend","ascend"]},{title:"Email",dataIndex:"email",responsive:["lg"],sorter:function(e,t){return e.email<t.email?1:t.email<e.email?-1:0},sortDirections:["descend","ascend"]},{title:"Rol",dataIndex:"rol",sorter:function(e,t){return e.rol<t.rol?1:t.rol<e.rol?-1:0},sortDirections:["descend","ascend"]},{title:"",key:"accion",dataIndex:"accion",render:function(e,t){return Object(U.jsxs)(m.b,{size:"middle",children:[Object(U.jsx)("a",{title:"Contrase\xf1a",onClick:function(e){P(t.nombre,t.apellidos,t.idUsuario)},children:Object(U.jsx)(S.a,{icon:k.e,className:"view-icon"})}),Object(U.jsx)("a",{title:"Editar",onClick:function(e){D(t.id,t.nombre,String(t.apellidos),t.email,t.nombreUsuario,t.idUsuario,t.rol,t.id_grupo,t.grupo,e)},children:Object(U.jsx)(S.a,{icon:k.c,className:"edit-icon"})}),Object(U.jsx)("a",{title:"Eliminar",onClick:function(e){I(t.idUsuario)},children:Object(U.jsx)(S.a,{icon:k.g,className:"delete-icon"})})]})}}],N=function(){var e=JSON.parse(sessionStorage.getItem("user"));if(e&&e.id_profesor)return Object(U.jsx)(O,{className:"btn",onClick:function(e){q()},children:"+ Crear usuario"})},A=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E()({title:"Se enviar\xe1 un mail al usuario para que se valide ...",icon:h.a,button:!1,allowOutsideClick:!1}),e.next=3,v.a.get("update-pw/".concat(t)).then((function(e){e.status>=200&&e.status<=205&&window.location.reload(!0)})).catch((function(e){401==e.status?E()({title:"Error acceso "+e.response.status,text:"Error, no tienes acceso a esta secci\xf3n.",icon:"error",button:"Aceptar",timer:"3000"}):E()({title:"Error interno "+e.response.status,text:"Error interno, vuelve a intentarlo en unos momentos.",icon:"error",button:"Aceptar",timer:"3000"})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(d.a.mark((function e(t,n,o){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.a.fire({title:"Solicitud de nueva contrase\xf1a",html:"\xbf Seguro que deseas solicitar una nueva contrase\xf1a para <b> ".concat(t," ").concat(n," </b> ?<br>&nbsp;<br>\n    Esta acci\xf3n dejar\xe1 el usuario inhabilitado hasta que actualice su contrase\xf1a."),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Solicitar",cancelButtonText:"Cancelar",focusConfirm:!1}).then((function(e){e.isConfirmed&&A(o)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}(),q=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n,o,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(sessionStorage.getItem("user")),n='<option value="al" selected="">Alumno</option>',t.es_admin&&(n='<option value="al" selected="">Alumno</option>\n    <option value="pr">Profesor</option>'),e.next=5,T("Profesor",0,"");case 5:o=e.sent,a=[],"",C.a.fire({title:"Crear usuario",html:"<label for='EnombreUsuario'>Nombre inicio sesi\xf3n:</label><br>\n    <input class=\"swal2-input\" id='EnombreUsuario' type='text' placeholder=\"Nombre usuario\"><br>\n    <label for='Epassword'>Password:</label><br>\n    <input class=\"swal2-input\" id='Epassword' type='password' placeholder=\"Contrase\xf1a\"><br>\n    <label for='Enombre'>Nombre:</label><br>\n    <input class=\"swal2-input\" id='Enombre' type='text' placeholder=\"Nombre\"><br>\n    <label for='Eapellidos'>Apellidos:</label><br>\n    <input class=\"swal2-input\" id='Eapellidos' type='text' placeholder=\"Apellidos\"><br>\n    <label for='Eemail'>Email:</label><br>\n    <input class=\"swal2-input\" id='Eemail' type='email' placeholder=\"Email\"><br>\n    <label for=\"Etipo\">Tipo usuario:</label><br>\n    <select class=\"swal2-input\" id=\"Etipo\">\n    ".concat(n,"\n    </select>"),showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Crear",cancelButtonText:"Cancelar",focusConfirm:!1,preConfirm:function(){var e=C.a.getPopup().querySelector("#Enombre").value,t=C.a.getPopup().querySelector("#Eapellidos").value,n=C.a.getPopup().querySelector("#Eemail").value,o=C.a.getPopup().querySelector("#EnombreUsuario").value,a=C.a.getPopup().querySelector("#Epassword").value,r=C.a.getPopup().querySelector("#Etipo").value;return e&&t&&n&&o&&a?(o.length<6||a.length<6)&&C.a.showValidationMessage("Nombre de usuario o password inferior a 6 digitos"):C.a.showValidationMessage("Alg\xfan campo obligatorio vac\xedo"),{Enombre:e,Eapellidos:t,Eemail:n,EnombreUsuario:o,Epassword:a,Etipo:r}}}).then((function(e){e.isConfirmed&&("al"==e.value.Etipo?C.a.fire({title:"Quieres asignarle un grupo",html:"".concat(o),icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Asignar",cancelButtonText:"Continuar sin asignar",preConfirm:function(){return{Egrupo:C.a.getPopup().querySelector("#Egrupo").value}}}).then((function(t){a=t.isConfirmed?"-1"==t.value.Egrupo?{nombre:"".concat(e.value.Enombre),apellidos:"".concat(e.value.Eapellidos),email:"".concat(e.value.Eemail),username:"".concat(e.value.EnombreUsuario),password:"".concat(e.value.Epassword),password_confirmation:"".concat(e.value.Epassword),id_grupo:null}:{nombre:"".concat(e.value.Enombre),apellidos:"".concat(e.value.Eapellidos),email:"".concat(e.value.Eemail),username:"".concat(e.value.EnombreUsuario),password:"".concat(e.value.Epassword),password_confirmation:"".concat(e.value.Epassword),id_grupo:"".concat(t.value.Egrupo)}:{nombre:"".concat(e.value.Enombre),apellidos:"".concat(e.value.Eapellidos),email:"".concat(e.value.Eemail),username:"".concat(e.value.EnombreUsuario),password:"".concat(e.value.Epassword),password_confirmation:"".concat(e.value.Epassword),id_grupo:null},_(a,"register-alumno")})):t.es_admin&&C.a.fire({title:"\xbfQuieres que sea administrador?",text:"Cuidado, un usuario administrador tendr\xe1 total dominio de la aplicaci\xf3n, contenido y usuarios, solo otorga estos permisos a usuarios que sean de tu confianza",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Administrador",cancelButtonText:"Profesor"}).then((function(t){a=t.isConfirmed?{nombre:"".concat(e.value.Enombre),apellidos:"".concat(e.value.Eapellidos),email:"".concat(e.value.Eemail),username:"".concat(e.value.EnombreUsuario),password:"".concat(e.value.Epassword),password_confirmation:"".concat(e.value.Epassword),es_admin:!0}:{nombre:"".concat(e.value.Enombre),apellidos:"".concat(e.value.Eapellidos),email:"".concat(e.value.Eemail),username:"".concat(e.value.EnombreUsuario),password:"".concat(e.value.Epassword),password_confirmation:"".concat(e.value.Epassword),es_admin:!1},_(a,"register-profesor")})))}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(p.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E()({title:"Se enviar\xe1 un mail al usuario para que se valide ...",icon:h.a,button:!1,allowOutsideClick:!1}),e.next=3,v.a.post(n,t).then((function(e){e.status>=200&&e.status<=205&&window.location.reload(!0)})).catch((function(e){401==e.status?E()({title:"Error acceso "+e.response.status,text:"Error, no tienes acceso a esta secci\xf3n.",icon:"error",button:"Aceptar",timer:"3000"}):E()({title:"Error interno "+e.response.status,text:"Error interno, vuelve a intentarlo en unos momentos.",icon:"error",button:"Aceptar",timer:"3000"})}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.a.fire({title:"Revisi\xf3n de datos",html:"".concat(t.username,", ").concat(t.nombre,", ").concat(t.apellidos,", ").concat(t.email),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Enviar",cancelButtonText:"Cancelar"}).then((function(e){e.isConfirmed?z(t,n):E()({title:"Cancelado por el usuario"})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(e){E()({title:"\xbfEst\xe1s seguro?",text:"Una vez eliminado no podr\xe1s volver a recuperar el usuario",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){t&&(E()({icon:h.a,button:!1,allowOutsideClick:!1}),v.a.delete("delete-usuario/"+e).then((function(e){e.status>=200&&e.status<=205&&(JSON.parse(sessionStorage.getItem("user")).id_profesor?window.location.reload(!0):(sessionStorage.clear(),window.location.href="/"),E()({title:"Usuario eliminado",text:"  ",icon:"success",button:!1,timer:"1800"}))})).catch((function(e){401==e.status?E()({title:"Error acceso "+e.response.status,text:"Error, no tienes acceso a esta secci\xf3n.",icon:"error",button:"Aceptar",timer:"3000"}):"No es posible borrar usuarios administradores"==e.response.data.Error?E()({title:"Error "+e.response.status,text:"Solo el usuario master puede eliminar cuentas de administradores, pongase en contacto con master para eliminarlo, puede bloquear el usuario cambiando su correo electronico y contrase\xf1a mientras se atiende su solicitud",icon:"error",button:"Aceptar",timer:"5000"}):E()({title:"Error interno "+e.response.status,text:"Error interno, vuelve a intentarlo en unos momentos.",icon:"error",button:"Aceptar",timer:"3000"})})))}))},T=function(){var e=Object(p.a)(d.a.mark((function e(t,n,o){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a='<input type="hidden" class="swal2-input" id=\'Egrupo\' type=\'text\' value="null">',!JSON.parse(sessionStorage.getItem("user")).id_profesor){e.next=11;break}if("Alumno"!=t){e.next=8;break}return e.next=6,v.a.get("grupos").then((function(e){if(e.status>=200&&e.status<=205){a='<label for=\'Egrupo\'>Grupo:</label><br>\n                        <select class="swal2-input" id="Egrupo">',a+=n?'<option value="-1">Sin grupo</option>':'<option value="-1" selected>Sin grupo</option>';for(var t=0;t<e.data.length;t++)o==e.data[t].nombre?a+='<option value="'.concat(e.data[t].id,'" selected>').concat(e.data[t].nombre,"</option>"):a+='<option value="'.concat(e.data[t].id,'">').concat(e.data[t].nombre,"</option>");a+="</select>"}})).catch((function(e){return"NO HAY GRUPOS"}));case 6:e.next=11;break;case 8:if("Profesor"!=t){e.next=11;break}return e.next=11,v.a.get("grupos").then((function(e){if(e.status>=200&&e.status<=205){a='<label for=\'Egrupo\'>Grupo:</label><br>\n                        <select class="swal2-input" id="Egrupo">\n                          <option value="-1" selected>Sin grupo</option>';for(var t=0;t<e.data.length;t++)a+='<option value="'.concat(e.data[t].id,'" >').concat(e.data[t].nombre,"</option>");a+="</select>"}})).catch((function(e){return"NO HAY GRUPOS"}));case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}(),D=function(){var e=Object(p.a)(d.a.mark((function e(t,n,o,a,r,i,s,c,l,u){var p;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(s,c,l);case 2:p=e.sent,C.a.fire({title:"Editar",html:"<label for='EnombreUsuario'>Usuario:</label>\n    <input class=\"swal2-input\" id='EnombreUsuario' type='text' value='".concat(r,"'>\n    <label for='Enombre'>Nombre:</label>\n    <input class=\"swal2-input\" id='Enombre' type='text' value='").concat(n,"'>\n    <label for='Eapellidos'>Apellidos:</label>\n    <input class=\"swal2-input\" id='Eapellidos' type='text' value='").concat(o,"'>\n    <label for='Eemail'>Email:</label>\n    <input class=\"swal2-input\" id='Eemail' type='email' value='").concat(a,"'><br/>\n    ").concat(p,"\n    "),showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Editar",cancelButtonText:"Cancelar",focusConfirm:!1,preConfirm:function(){var e=C.a.getPopup().querySelector("#Enombre").value,t=C.a.getPopup().querySelector("#Eapellidos").value,n=C.a.getPopup().querySelector("#Eemail").value,o=C.a.getPopup().querySelector("#EnombreUsuario").value,a=C.a.getPopup().querySelector("#Egrupo").value;return e&&t&&n&&o||C.a.showValidationMessage("Alg\xfan campo obligatorio vac\xedo"),{Enombre:e,Eapellidos:t,Eemail:n,EnombreUsuario:o,Egrupo:a}}}).then((function(e){if(e.isConfirmed){E()({icon:h.a,button:!1,allowOutsideClick:!1});var t=[];t="-1"==e.value.Egrupo?{nombre:"".concat(e.value.Enombre),apellidos:"".concat(e.value.Eapellidos),email:"".concat(e.value.Eemail),username:"".concat(e.value.EnombreUsuario),id_grupo:null}:"null"!=e.value.Egrupo?{nombre:"".concat(e.value.Enombre),apellidos:"".concat(e.value.Eapellidos),email:"".concat(e.value.Eemail),username:"".concat(e.value.EnombreUsuario),id_grupo:"".concat(e.value.Egrupo)}:{nombre:"".concat(e.value.Enombre),apellidos:"".concat(e.value.Eapellidos),email:"".concat(e.value.Eemail),username:"".concat(e.value.EnombreUsuario)},v.a.put("update-usuario/"+"".concat(i),t).then((function(e){e.status>=200&&e.status<=205&&window.location.reload(!0)})).catch((function(e){401==e.status?E()({title:"Error acceso "+e.response.status,text:"Error, no tienes acceso a esta secci\xf3n.",icon:"error",button:"Aceptar",timer:"3000"}):E()({title:"Error interno "+e.response.status,text:"Error interno, vuelve a intentarlo en unos momentos.",icon:"error",button:"Aceptar",timer:"3000"})}))}}));case 4:case"end":return e.stop()}}),e)})));return function(t,n,o,a,r,i,s,c,l,u){return e.apply(this,arguments)}}(),J={position:"bottom"},M=function(){Object(r.useContext)(f.a).token;var e=Object(r.useState)(),t=Object(l.a)(e,2),n=t[0],o=t[1],a=[];Object(r.useEffect)(Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!sessionStorage.getItem("token")||!sessionStorage.getItem("user")){e.next=4;break}return JSON.parse(sessionStorage.getItem("user")),e.next=4,v.a.get("usuarios").then((function(e){if(e.status>=200&&e.status<=205)for(var t=0;t<e.data.length;t++)a.push({key:t,nombreUsuario:e.data[t].nombreUsuario,nombre:e.data[t].nombre,apellidos:e.data[t].apellidos,email:e.data[t].email,id_grupo:e.data[t].id_grupo,grupo:e.data[t].nombre_grupo,rol:e.data[t].tipo,id:e.data[t].id,idUsuario:e.data[t].idUsuario})})).catch((function(e){401==e.status?E()({title:"Error acceso "+e.response.status,text:"Error, no tienes acceso a esta secci\xf3n.",icon:"error",button:"Aceptar",timer:"3000"}):E()({title:"Error interno "+e.response.status,text:"Error interno, vuelve a intentarlo en unos momentos.",icon:"error",button:"Aceptar",timer:"3000"})}));case 4:o(a);case 5:case"end":return e.stop()}}),e)}))),[]);var i=Object(r.useState)({bordered:!1,loading:!1,pagination:J,size:"Middle",showHeader:true,rowSelection:{},scroll:void 0,hasData:!0,tableLayout:"fixed",top:"none",bottom:"bottomRight",xScroll:!1,yScroll:!1}),s=Object(l.a)(i,2),u=s[0],m=(s[1],{});u.yScroll&&(m.y=250),u.xScroll&&(m.x=1500);var g=B.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{ellipsis:u.ellipsis})}));return"fixed"===u.xScroll&&(g[0].fixed=!0,g[g.length-1].fixed="right"),Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(j,{children:[N(),Object(U.jsx)(b.a,Object(c.a)(Object(c.a)({},u),{},{pagination:{position:[u.top,u.bottom],pageSize:6},columns:g,dataSource:n||null,scroll:m,className:"users-table"}))]})})};t.default=function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(i.a,{}),Object(U.jsxs)("div",{className:"container",children:[Object(U.jsx)(s.a,{}),Object(U.jsx)(M,{})]})]})}}}]);
//# sourceMappingURL=10.484deb23.chunk.js.map