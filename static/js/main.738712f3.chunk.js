(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,n,t){e.exports=t(49)},49:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(27),l=t.n(o),i=t(2),c=t(14),u=t(15),s=t(4),h=t(5),d=t(8),m=t(6),p=t(10),f=t(7),g=t(16),v=t(1);function b(){var e=Object(i.a)(["\n  padding: 5px 10px;\n  background: transparent;\n  border: 2px solid ",";\n  box-shadow: 0px 0px 2px ",";\n  border-radius: 10px;\n  display: block;\n  margin: 15px auto;\n  color: ",";\n  transition: box-shadow 0.5s;\n  &:hover {\n    box-shadow: 0px 2px 3px ",";\n  }\n"]);return b=function(){return e},e}var E=v.c.button(b(),function(e){return e.theme.green},function(e){return e.theme.green},function(e){return e.theme.green},function(e){return e.theme.green});function k(){var e=Object(i.a)(["\n  background: transparent;\n  border: 0px;\n  border-bottom: 2px solid ",";\n  color: ",";\n\n  &:focus::placeholder {\n    transform: translateX(40px);\n    opacity: 0;\n  }\n  &::placeholder {\n    transition: all 0.2s;\n    opacity: 1;\n    color: ",";\n  }\n"]);return k=function(){return e},e}var C=v.c.input(k(),function(e){return e.theme.green},function(e){return e.theme.green},function(e){return e.theme.green});function x(){var e=Object(i.a)(["\n  height: 100%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  width: 100%;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return x=function(){return e},e}var O=v.c.div(x(),function(e){return e.theme.green});function w(){var e=Object(i.a)(["\n  color: red;\n"]);return w=function(){return e},e}var j=v.c.p(w()),y=function(e,n){return n.setState({loginError:!0})},S=function(e,n,t){return e.length>1&&e.length<=15&&n.length>=1&&(t.setState({companyError:!0}),!0)},I=function(e,n,t,r,a,o){var l=!1,i=!1,c=!1,u=!1;return e.length>=1&&e.length<=15&&n.length>=1&&n.length<=20&&t.length>=3&&t.length<=6&&r.length>=4&&r.length<=15||((e.length<1||e.length>15)&&(l=!0),(n.length<1||n.length>20)&&(i=!0),(t.length<3||t.length>6)&&(c=!0),(r.length<4||r.length>15)&&(u=!0),o.setState({errors:{nameError:l,surnameError:i,salaryError:c,positionError:u}}))},U=function(e,n,t){console.log(e);var r=!1,a=!1;if(console.log(n),""!==n&&e.length>=5)return!0;""===n&&(a=!0),e.length<5&&(r=!0),t.setState({errors:{dateError_:a,valueError_:r}})};function D(){var e=Object(i.a)(["\n  padding: 10px;\n"]);return D=function(){return e},e}function F(){var e=Object(i.a)(["\n  color: ",";\n"]);return F=function(){return e},e}function N(){var e=Object(i.a)(["\n  background-color: ",";\n  transition: transform 2s;\n  transform: translate(-50%, -50%)\n    translateX(",");\n"]);return N=function(){return e},e}var B=Object(v.c)(O)(N(),function(e){return e.theme.white},function(e){e.activeCreation;return"0px"}),T=v.c.span(F(),function(e){return e.theme.green}),z=v.c.div(D()),W=function(e){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={id:t.props.id,name:"",surname:"",salary:"",position:"",errors:{nameError:!1,surnameError:!1,salaryError:!1,positionError:!1}},t.handleIdChange=function(){t.setState(function(e){return{id:t.state.id+1}})},t.handleChange=function(e){var n=e.target.id,r=e.target.value;t.setState(Object(u.a)({},n,r))},t.handleSubmit=function(){var e=t.state,n=e.id,r=e.name,a=e.surname,o=e.salary,l=e.position,i=e.errors,c=Object(p.a)(t);console.log(t.state.id);var u=r+a+n,s=n+a+r;if(I(r,a,o,l,i,c))return t.props.handleIdChange(),t.handleIdChange(),t.props.create(n,r,a,o,l,u,s),t.setState({name:"",surname:"",salary:"",position:""}),alert("Login:  ".concat(u,", Haslo: ").concat(s));console.log("Wrong data")},t}return Object(f.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.name,r=n.surname,o=n.salary,l=n.position,i=this.state.errors,c=i.nameError,u=i.surnameError,s=i.salaryError,h=i.positionError;return a.a.createElement(B,{activeCreation:this.props.activeCreation},a.a.createElement("form",null,a.a.createElement(z,null),a.a.createElement("label",{htmlFor:"name"},a.a.createElement(T,null,"Name"),a.a.createElement("br",null),a.a.createElement(C,{type:"text",placeholder:"Name",id:"name",value:t,onChange:this.handleChange}),c?a.a.createElement(j,null,"Name valid length is 1-15"):null),a.a.createElement(z,null),a.a.createElement("label",{htmlFor:"surname"},a.a.createElement(T,null,"Surname"),a.a.createElement("br",null),a.a.createElement(C,{type:"text",placeholder:"Surname",id:"surname",value:r,onChange:this.handleChange}),u?a.a.createElement(j,null,"Surname valid length is 1-20"):null),a.a.createElement(z,null),a.a.createElement("label",{htmlFor:"salary"},a.a.createElement(T,null,"Salary"),a.a.createElement("br",null),a.a.createElement(C,{type:"number",placeholder:"Salary",id:"salary",value:o,onChange:this.handleChange}),s?a.a.createElement(j,null,"Salary valid length is 3-6"):null),a.a.createElement(z,null),a.a.createElement("label",{htmlFor:"position"},a.a.createElement(T,null,"Position"),a.a.createElement("br",null),a.a.createElement(C,{type:"text",placeholder:"Position",id:"position",value:l,onChange:this.handleChange}),h?a.a.createElement(j,null,"Position valid length is 4-15 "):null),a.a.createElement(z,null)),a.a.createElement(E,{onClick:function(){e.props.close()}},"Cancel"),a.a.createElement(E,{onClick:this.handleSubmit},"Confirm"))}}]),n}(r.Component),L=t(30);function A(){var e=Object(i.a)(["\n  height: 30px;\n  margin-left: -15px;\n  width: 30px;\n  padding: 8px;\n  color: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"]);return A=function(){return e},e}function V(){var e=Object(i.a)(["\n  width: 25%;\n  overflow: hidden;\n"]);return V=function(){return e},e}function P(){var e=Object(i.a)(["\n  height: 30px;\n  width: 30px;\n  padding: 8px;\n  margin-left: 50px;\n  color: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"]);return P=function(){return e},e}function M(){var e=Object(i.a)(["\n  width: 30px;\n  height: 30px;\n  background-color: orange;\n  line-height: 30px;\n"]);return M=function(){return e},e}function _(){var e=Object(i.a)(["\n  display: flex;\n  color: ",";\n  justify-content: space-between;\n  text-align: left;\n  width: 100%;\n"]);return _=function(){return e},e}var X=v.c.div(_(),function(e){return e.theme.green}),$=(v.c.div(M()),v.c.button(P(),function(e){return e.theme.green})),H=v.c.p(V()),J=Object(v.c)(L.a)(A(),function(e){return e.theme.green}),Y=function(e){var n=e.name,t=e.surname,r=e.salary,o=e.position,l=e.isVisible,i=e.deleteUser,c=e.handleEditUser,u=e.handleUserChange;return a.a.createElement(X,null,a.a.createElement(H,null,n),a.a.createElement(H,null,t),a.a.createElement(H,null,r),a.a.createElement(H,null,o),l?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement($,{onClick:function(e){i(e)}})),a.a.createElement("div",null," ",a.a.createElement(J,{onClick:function(e){c(e),u()}}))):null)};function Z(){var e=Object(i.a)(["\n  color: ",";\n  margin: 0px;\n\n  font-size: ",";\n  width: 25%;\n  text-align: justify;\n"]);return Z=function(){return e},e}function q(){var e=Object(i.a)(["\n  width: 95%;\n  height: auto;\n  display: flex;\n  margin-bottom: -20px;\n"]);return q=function(){return e},e}var R=v.c.div(q()),G=v.c.p(Z(),function(e){return e.theme.white},function(e){return e.theme.font.size.xxs}),K=function(){return a.a.createElement(R,null,a.a.createElement(G,null,"Name"),a.a.createElement(G,null,"Surname"),a.a.createElement(G,null,"Salary"),a.a.createElement(G,null,"Position"))};function Q(){var e=Object(i.a)(["\n  color: ",";\n"]);return Q=function(){return e},e}function ee(){var e=Object(i.a)(["\n  width: 95%;\n  background-color: ",";\n  height: 450px;\n  text-align: center;\n  position: relative;\n  margin-top: 20px;\n  overflow-y: scroll;\n"]);return ee=function(){return e},e}function ne(){var e=Object(i.a)(["\n  padding: 5px;\n"]);return ne=function(){return e},e}function te(){var e=Object(i.a)(["\n  padding: 20px;\n"]);return te=function(){return e},e}function re(){var e=Object(i.a)(["\n  background-color: ",";\n  box-shadow: 0px 0px 2px ",";\n"]);return re=function(){return e},e}function ae(){var e=Object(i.a)(["\n  font-size: ",";\n  color: ",";\n"]);return ae=function(){return e},e}function oe(){var e=Object(i.a)(["\n  border-bottom: 2px solid ",";\n  padding: 3px;\n  color: ",";\n  &::placeholder {\n    color: ",";\n  }\n"]);return oe=function(){return e},e}var le=Object(v.c)(C)(oe(),function(e){return e.theme.white},function(e){return e.theme.white},function(e){return e.theme.white}),ie=v.c.p(ae(),function(e){return e.theme.font.size.m},function(e){return e.theme.white}),ce=Object(v.c)(E)(re(),function(e){return e.theme.white},function(e){return e.theme.white}),ue=v.c.div(te()),se=v.c.div(ne()),he=v.c.div(ee(),function(e){return e.theme.white}),de=v.c.span(Q(),function(e){return e.theme.white}),me=function(e){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={clickedButton:!1,companyName:"",workers:[],isCompanyNameEmpty:!1,companyError:!1},t.handleClick=function(){t.setState({clickedButton:!t.state.clickedButton})},t.createWorker=function(e,n,r,a,o,l,i){t.state.workers.push({id:e,name:n,surname:r,salary:a,position:o,login:l,password:i,dates:[]})},t.showWorkers=function(){console.log(t.state.workers)},t.closeCreateWorker=function(){t.setState({clickedButton:!t.state.clickedButton})},t.handleSubmit=function(){var e=t.state,n=e.companyName,r=e.workers,a=Object(p.a)(t);S(n,r,a)?(t.props.activeMenu(),t.props.setName(n),t.props.setWorkers(r),t.setState({companyError:!1})):t.setState({companyError:!0})},t.handleChange=function(e){var n=e.target.value;t.setState({companyName:n})},t}return Object(f.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){return a.a.createElement(O,null,a.a.createElement(se,null),a.a.createElement(ie,null,"Create Company"),a.a.createElement(se,null),a.a.createElement("form",null,a.a.createElement("label",{htmlFor:"companyName"},a.a.createElement(de,null,"Company Name"),a.a.createElement(se,null),a.a.createElement(le,{type:"text",id:"companyName",placeholder:"Company Name",value:this.state.companyName,onChange:this.handleChange}))),a.a.createElement(ue,null),a.a.createElement(K,null),a.a.createElement(he,null,a.a.createElement(se,null),this.state.workers.map(function(e){return a.a.createElement(Y,{key:e.id,name:e.name,surname:e.surname,salary:e.salary,position:e.position})}),a.a.createElement(E,{onClick:this.handleClick},"Add+")),this.state.clickedButton?a.a.createElement(W,{activeCreation:this.state.clickedButton,workers:this.state.workers,create:this.createWorker,show:this.showWorkers,close:this.closeCreateWorker,handleIdChange:this.props.handleIdChange,id:this.props.id}):null,a.a.createElement(se,null),this.state.companyError?a.a.createElement(j,null,"Company's name must be between 2-15 or workers are missing"):null,a.a.createElement(ce,{onClick:this.handleSubmit},"Create"))}}]),n}(r.Component),pe=t(13),fe=Object(pe.a)();function ge(){var e=Object(i.a)(["\n  height: 50vh;\n  width: 100%;\n  background-color: lawngreen;\n"]);return ge=function(){return e},e}var ve=v.c.div(ge()),be=function(e){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={name:"",surname:"",salary:"",position:"",errors:{nameError:!1,surnameError:!1,salaryError:!1,positionError:!1}},t.handleChange=function(e){var n=e.target.id,r=e.target.value;t.setState(Object(u.a)({},n,r))},t.validateFunction=function(){var e=t.state,n=e.name,r=e.surname,a=e.salary,o=e.position,l=e.errors,i=Object(p.a)(t);I(n,r,a,o,l,i)?t.props.handleUserDataChange(t.props.idEditedElement,n,r,a,o):console.log("XD")},t}return Object(f.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.name,r=n.surname,o=n.salary,l=n.position;return a.a.createElement(ve,null,a.a.createElement("div",null,"XD"),a.a.createElement(C,{id:"name",value:t,onChange:this.handleChange}),a.a.createElement(C,{id:"surname",value:r,onChange:this.handleChange}),a.a.createElement(C,{id:"salary",value:o,onChange:this.handleChange}),a.a.createElement(C,{id:"position",value:l,onChange:this.handleChange}),a.a.createElement("button",{onClick:function(){return e.validateFunction()}},"Submit"))}}]),n}(r.Component);function Ee(){var e=Object(i.a)(["\n  text-align: center;\n"]);return Ee=function(){return e},e}function ke(){var e=Object(i.a)(["\n  border: 2px solid ",";\n  box-shadow: 0px 0px 2px ",";\n  color: ",";\n"]);return ke=function(){return e},e}var Ce=Object(v.c)(E)(ke(),function(e){return e.theme.white},function(e){return e.theme.white},function(e){return e.theme.white}),xe=v.c.div(Ee()),Oe=function(e){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={value:"",date:"",errors:{dateError_:!1,valueError_:!1}},t.handleChange=function(e,n){var r=e.target.value;"date"===(n=e.target.type)?(console.log(r),t.setState({date:r})):t.setState({value:r}),console.log(n)},t.handleCreateEvent_=function(){var e=t.state,n=e.value,r=e.date,a=Object(p.a)(t);t.setState({errors:{dateError_:!1,valueError_:!1}}),U(n,r,a)&&t.props.handleCreateEvent(n,r)},t}return Object(f.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(xe,null,a.a.createElement("p",null,"Create Event"),a.a.createElement("input",{type:"date",onChange:this.handleChange}),a.a.createElement("textarea",{name:"event",id:"event",cols:"35",rows:"5",value:this.state.value,onChange:this.handleChange,placeholder:"Your text goes here"}),a.a.createElement(Ce,{onClick:function(){return e.handleCreateEvent_()}},"Submit"))}}]),n}(r.Component);function we(){var e=Object(i.a)(["\n  height: 30px;\n  width: 120px;\n\n  box-shadow: 0px 0px 3px white;\n  position: relative;\n  box-shadow: 0px 0px 0px 2px ",';\n  &::before {\n    content: "Came";\n    position: absolute;\n    height: 10px;\n    width: 10px;\n    left: 45%;\n    top: -35%;\n    transform: translate(-50%, -50%);\n    color: ',";\n  }\n\n  background-color: ",";\n  color: ",';\n  &::before {\n    content: "Left";\n    left: 47%;\n  }\n']);return we=function(){return e},e}function je(){var e=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 30px 20px;\n"]);return je=function(){return e},e}function ye(){var e=Object(i.a)(["\n  color: ",";\n  font-size: ",";\n"]);return ye=function(){return e},e}function Se(){var e=Object(i.a)(["\n  border: 2px solid ",";\n  box-shadow: 0px 0px 2px ",";\n  color: ",";\n"]);return Se=function(){return e},e}function Ie(){var e=Object(i.a)(["\n  height: 200px;\n  width: 100%;\n  text-align: center;\n"]);return Ie=function(){return e},e}function Ue(){var e=Object(i.a)(["\n  width: 95%;\n  background-color: ",";\n  margin-top: 50px;\n  min-height: 100px;\n  padding: 0px 20px;\n"]);return Ue=function(){return e},e}function De(){var e=Object(i.a)(["\n  height: auto;\n  z-index: 2;\n"]);return De=function(){return e},e}var Fe=Object(v.c)(O)(De()),Ne=v.c.div(Ue(),function(e){return e.theme.white}),Be=v.c.div(Ie()),Te=Object(v.c)(E)(Se(),function(e){return e.theme.white},function(e){return e.theme.white},function(e){return e.theme.white}),ze=v.c.p(ye(),function(e){return e.theme.white},function(e){return e.theme.font.size.s}),We=v.c.div(je()),Le=v.c.div(we(),function(e){return e.theme.green},function(e){return e.theme.green},function(e){return e.theme.white},function(e){return e.theme.green}),Ae=function(e){function n(){var e;return Object(s.a)(this,n),(e=Object(d.a)(this,Object(m.a)(n).call(this))).handleClick=function(){e.setState({isUserBeingCreated:!e.state.isUserBeingCreated}),console.log(e.props.workers)},e.handleLogOut=function(){localStorage.removeItem("bossToken"),e.props.history.push("/")},e.handleForceUpdate=function(){},e.handleUserChange=function(){e.setState({isUserBeingChanged:!e.state.isUserBeingChanged}),console.log(e.state.isUserBeingCreated)},e.updateText=function(e,n){return"in"===e?n:"out"===e?n:void 0},e.FilterWorkers=function(n){var t;return t=e.props.workers.filter(function(e){return 0==e.dates.length}),"absent"===n?t.length:(console.log("other"),e.props.workers.length-t.length)},e.handleSelectChange=function(n){console.log(n.target.value),e.setState({selectValue:n.target.value}),setTimeout(function(){var n=e.props.workers[e.state.selectValue].dates[e.state.date];e.updateText("in",n)},500)},e.state={isUserBeingCreated:!1,clickedButton:!1,isUserBeingChanged:!1,workerIdPreview:null,selectValue:0,date:null,auth:!1,some:""},null===localStorage.getItem("bossToken")?console.log("nullon"):e.setState({auth:!0}),e}return Object(f.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=new Date;this.setState({date:e.toLocaleDateString()})}},{key:"render",value:function(){var e=this;return null==localStorage.getItem("bossToken")?a.a.createElement(g.a,{to:"/"}):a.a.createElement(a.a.Fragment,null,a.a.createElement(Fe,null,a.a.createElement("div",null,"siema"),a.a.createElement(Ne,null,this.props.workers.map(function(n){return a.a.createElement(Y,{key:n.id,name:n.name,surname:n.surname,salary:n.salary,position:n.position,isVisible:!0,deleteUser:e.props.deleteUser,handleEditUser:e.props.handleEditUser,handleUserChange:e.handleUserChange})})),a.a.createElement(E,{onClick:this.handleClick},"Add+"),this.state.isUserBeingCreated?a.a.createElement(W,{create:this.props.create,close:this.handleClick,id:this.props.id,handleIdChange:this.props.handleIdChange}):null,this.state.isUserBeingChanged?a.a.createElement(be,{handleUserDataChange:this.props.handleUserDataChange,idEditedElement:this.props.idEditedElement,handleForceUpdate:this.handleForceUpdate}):null,a.a.createElement(Be,null,a.a.createElement(ze,null,"Employees Preview"),a.a.createElement("select",{onChange:this.handleSelectChange},a.a.createElement("option",{disabled:!0,selected:!0},"Choose Employee"),this.props.workers.map(function(e){return a.a.createElement("option",{value:e.id,key:e.id},e.name," ",e.surname)})),a.a.createElement(We,null,a.a.createElement(Le,null,this.state.selectValue&&this.props.workers[this.state.selectValue].dates.length>0?this.props.workers[this.state.selectValue].dates[0].signIn:null),a.a.createElement(Le,null,this.state.selectValue&&this.props.workers[this.state.selectValue].dates.length>0?this.props.workers[this.state.selectValue].dates[0].signOut:null))),a.a.createElement(Oe,{handleCreateEvent:this.props.handleCreateEvent}),a.a.createElement("div",null,"Amount of Employees: ",this.props.workers.length),a.a.createElement("div",null,"Working:",this.FilterWorkers()),a.a.createElement("div",null,"Absent: ",this.FilterWorkers("absent")),a.a.createElement(Te,{onClick:this.handleLogOut},"Log Out")))}}]),n}(r.Component);Ae.defaultProps={};var Ve=Object(g.e)(Ae),Pe=t(33),Me=t(34);function _e(){var e=Object(i.a)(["\n  width: 100%;\n  padding: 20px 0px;\n  border-bottom: 2px solid ",";\n  font-size: ",";\n"]);return _e=function(){return e},e}function Xe(){var e=Object(i.a)(["\n  height: 100px;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  background-color: ",";\n  color: black;\n  overflow: hidden;\n  overflow-y: scroll;\n"]);return Xe=function(){return e},e}var $e=v.c.div(Xe(),function(e){return e.theme.white}),He=v.c.div(_e(),function(e){return e.theme.green},function(e){return e.theme.font.size.xs}),Je=function(e){var n=e.globalEvents;return a.a.createElement($e,null,n.length>0?n.map(function(e){return a.a.createElement(He,null,a.a.createElement("div",null,e.date.date),a.a.createElement("div",null,e.date.text))}):null)},Ye=function(e){var n=e.user;e.date;return a.a.createElement("div",null,n.dates.map(function(e){return e.signIn}))};Ye.defaultProps={user:{dates:[]}};var Ze=Ye;function qe(){var e=Object(i.a)(["\n  background-color: ",";\n  color: ",";\n  padding: 5px 10px;\n  box-shadow: 0px 0px 2px ",";\n  font-size: ",";\n"]);return qe=function(){return e},e}function Re(){var e=Object(i.a)(["\n  border-bottom: 1px solid ",";\n"]);return Re=function(){return e},e}function Ge(){var e=Object(i.a)(["\n  border-bottom: 1px solid ",";\n"]);return Ge=function(){return e},e}function Ke(){var e=Object(i.a)(["\n  height: 30px;\n  width: 30px;\n  color: ",";\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(i.a)(["\n  height: 36px;\n  width: 126px;\n  background-color: ",";\n  position: absolute;\n  z-index: 1024;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n"]);return Qe=function(){return e},e}function en(){var e=Object(i.a)(["\n  color: ",";\n"]);return en=function(){return e},e}function nn(){var e=Object(i.a)(["\n  background-color: ",";\n"]);return nn=function(){return e},e}function tn(){var e=Object(i.a)(["\n  height: 40px;\n  width: 130px;\n  border: 2px solid ",";\n  background: transparent;\n  color: ",";\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  font-size: ",";\n"]);return tn=function(){return e},e}function rn(){var e=Object(i.a)(["\n  z-index: 3;\n"]);return rn=function(){return e},e}function an(){var e=Object(i.a)(["\n  height: 100px;\n  width: 90%;\n  display: flex;\n  justify-content: space-between;\n  padding-top: 30px;\n"]);return an=function(){return e},e}function on(){var e=Object(i.a)(["\n  width: 95%;\n  background-color: ",";\n  margin-top: 50px;\n  height: 150px;\n"]);return on=function(){return e},e}var ln=v.c.div(on(),function(e){return e.theme.white}),cn=v.c.div(an()),un=v.c.section(rn()),sn=v.c.div(tn(),function(e){return e.theme.white},function(e){return e.theme.white},function(e){return e.theme.font.size.xs}),hn=Object(v.c)(sn)(nn(),function(e){return e.theme.red}),dn=v.c.p(en(),function(e){return e.theme.white}),mn=v.c.div(Qe(),function(e){return e.theme.white}),pn=v.c.div(Ke(),function(e){return e.theme.green}),fn=Object(v.c)(Pe.a)(Ge(),function(e){return e.theme.green}),gn=Object(v.c)(Me.a)(Re(),function(e){return e.theme.green}),vn=Object(v.c)(E)(qe(),function(e){return e.theme.white},function(e){return e.theme.green},function(e){return e.theme.white},function(e){return e.theme.font.size.xs}),bn=function(e){function n(){var e;return Object(s.a)(this,n),(e=Object(d.a)(this,Object(m.a)(n).call(this))).handleData=function(){var n=new Date;return e.setState({date:n.toLocaleDateString()})},e.handleLogOut=function(){localStorage.removeItem("userToken"),e.props.history.push("/")},e.handleCheckClick=function(n){var t=e.state,r=t.checkInClicked,a=t.checkOutClicked,o=t.isCheckedIn,l=t.isCheckedOut;"in"!==n||r||o?"out"!==n||a||l||!o||e.setState({checkOutClicked:!a}):e.setState({checkInClicked:!r})},e.handleButtonClick=function(n,t){if("cross"===n)"in"===t?e.setState({checkInClicked:!e.state.checkInClicked}):"out"===t&&e.setState({checkOutClicked:!e.state.checkOutClicked});else if("tick"===n){if(console.log(e.props.user,e.props.user.dates),"in"===t){var r=new Date;return console.log(e.props.user.id),e.setState({checkInClicked:!e.state.checkInClicked,isCheckedIn:!e.state.isCheckedIn,checkInTime:r.toISOString().substr(11,8)}),console.log(e.state.checkInTime),setTimeout(function(){e.props.handleUserDateChange(e.props.user.id,e.state.date,e.state.checkInTime,e.state.checkOutTime)},300)}if("out"===t){var a=new Date;return e.setState({checkOutClicked:!e.state.checkOutClicked,isCheckedOut:!e.state.isCheckedOut,checkOutTime:a.toISOString().substr(11,8)}),setTimeout(function(){e.props.handleUserDateChange(e.props.user.id,e.state.date,e.state.checkInTime,e.state.checkOutTime)},300)}}},e.state={date:"",checkInTime:"",checkOutTime:"",checkInClicked:!1,checkOutClicked:!1,isCheckedIn:!1,isCheckedOut:!1,auth:!0},null===localStorage.getItem("userToken")?console.log("nullon"):e.setState({auth:!0}),e}return Object(f.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){this.handleData(),console.log(fe.location),console.log(this.props)}},{key:"render",value:function(){var e=this,n=this.props.user,t=n.name,r=n.surname;return null==localStorage.getItem("userToken")?a.a.createElement(g.a,{to:"/"}):a.a.createElement(a.a.Fragment,null,a.a.createElement(un,null,a.a.createElement(O,null,a.a.createElement(dn,null,"You're logged as ",t," ",r),a.a.createElement(ln,null,a.a.createElement(Ze,{user:this.props.user,userDates:this.props.user.dates,date:this.state.date})),a.a.createElement(cn,null,a.a.createElement(sn,{onClick:function(){return e.handleCheckClick("in")}},this.state.checkInClicked?a.a.createElement(mn,null,a.a.createElement("div",null,a.a.createElement(pn,null,a.a.createElement(fn,{onClick:function(){return e.handleButtonClick("tick","in")}}))),a.a.createElement("div",null,a.a.createElement(pn,null,a.a.createElement(gn,{onClick:function(){return e.handleButtonClick("cross","in")}})))):null,this.state.isCheckedIn?this.state.checkInTime:"Sign In"),a.a.createElement(hn,{onClick:function(){return e.handleCheckClick("out")}},this.state.checkOutClicked?a.a.createElement(mn,null,a.a.createElement("div",null,a.a.createElement(pn,null,a.a.createElement(fn,{onClick:function(){return e.handleButtonClick("tick","out")}}))),a.a.createElement("div",null,a.a.createElement(pn,null,a.a.createElement(gn,{onClick:function(){return e.handleButtonClick("cross","out")}})))):null,this.state.isCheckedOut?this.state.checkOutTime:"Sign Out")),a.a.createElement(Je,{globalEvents:this.props.globalEvents}),a.a.createElement(vn,{onClick:this.handleLogOut},"Log Out"," "))))}}]),n}(r.Component);bn.defaultProps={user:{name:"",surname:""}};var En=Object(g.e)(bn),kn=t(36),Cn=t(35);function xn(){var e=Object(i.a)(["\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  background-color: ",";\n  position: relative;\n  &:hover {\n    "," {\n      transform: translate(-50%, -50%) rotateZ(180deg);\n    }\n  }\n"]);return xn=function(){return e},e}function On(){var e=Object(i.a)(["\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transition: transform 1s;\n  transition-timing-function: ease;\n"]);return On=function(){return e},e}function wn(){var e=Object(i.a)(["\n  height: 5px;\n  width: 5px;\n  box-shadow: 0px 0px 7px ",";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n"]);return wn=function(){return e},e}function jn(){var e=Object(i.a)(["\n  display: flex;\n  margin-left: 19px;\n  height: 10vh;\n  padding-top: 1vh;\n"]);return jn=function(){return e},e}function yn(){var e=Object(i.a)(["\nfont-size:","\ncolor: ","\npadding:5px 21px;\nborder-bottom:2px solid;\n\n"]);return yn=function(){return e},e}function Sn(){var e=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  height: 45vh;\n"]);return Sn=function(){return e},e}function In(){var e=Object(i.a)(["\n  height: 50px;\n  width: 50px;\n  margin-left: -19px;\n  // color: ",";\n  color:#ff9069;\n  &.shadow{\n    filter: drop-shadow( 3px 3px 2px #155263);\n  }\n"]);return In=function(){return e},e}function Un(){var e=Object(i.a)(["\n  height: 45vh;\n  width: 100%;\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Un=function(){return e},e}function Dn(){var e=Object(i.a)(["\n  display: flex;\n  text-align: center;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n  justify-content: center;\n  width: 100%;\n  background-image: linear-gradient(0deg, #ff9069 50%, #155263 53%);\n  z-index: 1;\n"]);return Dn=function(){return e},e}var Fn=v.c.div(Dn()),Nn=v.c.div(Un(),function(e){return e.theme.green}),Bn=Object(v.c)(Cn.a)(In(),function(e){return e.theme.green}),Tn=Object(v.c)(Nn)(Sn(),function(e){return e.theme.white}),zn=v.c.p(yn(),function(e){return e.theme.font.size.m},function(e){return e.theme.white}),Wn=v.c.div(jn()),Ln=(v.c.div(wn(),function(e){return e.theme.green}),Object(v.c)(kn.a)(On())),An=Object(v.c)(E)(xn(),function(e){return e.theme.white},Ln),Vn=function(e){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={isCompany:!1,isCreateMenu:!1,companyName:"",loginForm:"",passwordForm:"",userIndex:"",workers:[],id:0,idEditedElement:0,loginError:!1,globalEvents:[]},t.handleCreateCompany=function(){t.setState({isCreateMenu:!t.state.isCreateMenu})},t.handleIdChange=function(){return console.log(t.state.id),t.setState({id:t.state.id+1})},t.handleSetCompanyName=function(e){t.setState({companyName:e})},t.handleSetWorkers=function(e){t.setState({workers:e}),console.log(t.state.workers)},t.handleChange=function(e){var n=e.target.value,r=e.target.name;t.setState(Object(u.a)({},r,n))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,r=n.workers,a=n.loginForm,o=n.passwordForm;console.log(t.props.history),r.forEach(function(e,n){if(a===r[n].login&&o===r[n].password)return console.log("Zalogowano jako user"),localStorage.setItem("userToken","kl245j6()$!#*%#!"),t.setState({userIndex:n,loginError:!1}),t.props.history.push("/user");if("boss"===a&&"boss"===o)return localStorage.setItem("bossToken","kl^&$*!asd0-9758];245j6()$!#*%#!"),t.props.history.push("/boss");var l=Object(p.a)(t);return y(t.state.loginError,l)})},t.createWorker=function(e,n,r,a,o,l,i){t.state.workers.push({id:e,name:n,surname:r,salary:a,position:o,login:l,password:i,dates:[]}),console.log("CREATUJE")},t.handleDeleteUser=function(e){var n=Object(c.a)(t.state.workers),r=e.target.parentNode.parentNode,a=Object(c.a)(r.parentElement.children).indexOf(r);console.log(n),n.splice(a,1),t.setState({workers:n})},t.handleEditUser=function(e){var n=e.target.parentNode.parentNode,r=Object(c.a)(n.parentElement.children).indexOf(n);console.log(r),t.setState({idEditedElement:r})},t.handleUserDateChange=function(e,n,r,a){var o=Object(c.a)(t.state.workers);(new Date).toLocaleString().substr(0,9);var l={date:n,signIn:r,signOut:a};return o[e].dates.pop(),console.log(o[e].dates),o[e].dates.push(l)},t.handleUserDataChange=function(e,n,r,a,o){console.log(e,n,r,a,o,"XDX");var l=Object(c.a)(t.state.workers);l[e].name=n,l[e].surname=r,l[e].salary=a,l[e].position=o,t.forceUpdate()},t.handleCreateEvent=function(e,n){var r=Object(c.a)(t.state.globalEvents),a={date:{date:n,text:e}};r.push(a),t.setState({globalEvents:r}),console.log(t.state.globalEvents)},t}return Object(f.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){console.log(fe.location),console.log(fe),console.log(this.props)}},{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(g.c,{basename:"/CompanyApp",history:fe},a.a.createElement(g.d,null,a.a.createElement(g.b,{exact:!0,path:"/"}),a.a.createElement(g.b,{exact:!0,path:"/user",render:function(){return a.a.createElement(En,{user:e.state.workers[e.state.userIndex],handleUserDateChange:e.handleUserDateChange,globalEvents:e.state.globalEvents})}}),a.a.createElement(g.b,{exact:!0,path:"/boss",render:function(){return a.a.createElement(Ve,{workers:e.state.workers,create:e.createWorker,deleteUser:e.handleDeleteUser,handleIdChange:e.handleIdChange,id:e.state.id,handleUserDataChange:e.handleUserDataChange,handleEditUser:e.handleEditUser,idEditedElement:e.state.idEditedElement,handleCreateEvent:e.handleCreateEvent})}}),a.a.createElement(g.b,{render:function(){return a.a.createElement("div",null,"How did you get there?")}}))),a.a.createElement(Fn,{className:"SS"},a.a.createElement(Nn,null,this.state.companyName?a.a.createElement(zn,null,"Log in to ",this.state.companyName):a.a.createElement(An,{onClick:this.handleCreateCompany},a.a.createElement(Ln,null)),this.state.isCreateMenu?a.a.createElement(me,{setName:this.handleSetCompanyName,activeMenu:this.handleCreateCompany,setWorkers:this.handleSetWorkers,create:this.createWorker,handleIdChange:this.handleIdChange,id:this.state.id}):null),a.a.createElement(Wn,null,a.a.createElement(Bn,null)),a.a.createElement(Tn,null,a.a.createElement("form",null,a.a.createElement("br",null),a.a.createElement(C,{type:"text",placeholder:"Login",onChange:this.handleChange,name:"loginForm"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(C,{type:"password",placeholder:"Password",name:"passwordForm",onChange:this.handleChange}),this.state.loginError?a.a.createElement(j,null,"Incorrect username or password"):null,a.a.createElement(E,{onClick:this.handleSubmit},"Login")))))}}]),n}(r.Component),Pn=Object(g.e)(Vn),Mn={white:"#ff9069",green:"#155263",darkBlue:"#1b57cf",purple:"#f23a3a",font:{size:{xxs:".65rem",xs:".8rem",s:"1.1rem",m:"1.6rem",l:"2.1rem",generateHeading:"1rem",generateDesc:".9rem"},family:{alfa:"Alfa Slab One, cursive",arial:"Arial, serif"}},mq:{tablet:"@media (min-width: 768px)",desktop:"@media (min-width: 1200px)"}};function _n(){var e=Object(i.a)(["\nbody{\n    margin:0px;\n    font-size: 62.5%;\n    background-color:#FFFFF0;\n    position:relative;    \n}\nhtml, \nbody {\n    height: 100%;\n}\n*, *::before, *::after{\n    box-sizing:border-box;\n}\n"]);return _n=function(){return e},e}var Xn=Object(v.b)(_n());function $n(){var e=Object(i.a)(["\n  height: 100%;\n"]);return $n=function(){return e},e}function Hn(){var e=Object(i.a)(["\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n"]);return Hn=function(){return e},e}var Jn=v.c.div(Hn()),Yn=v.c.div($n());var Zn=function(){return a.a.createElement(Yn,null,a.a.createElement(Xn,null),a.a.createElement(v.a,{theme:Mn},a.a.createElement(a.a.Fragment,null,a.a.createElement(Jn,null,a.a.createElement(Pn,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(g.c,{history:fe},a.a.createElement(Zn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.738712f3.chunk.js.map