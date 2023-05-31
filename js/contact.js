const persona = {
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    ciudad: '',
    pais: ''
  }
  


let personasArray = [];


function processContactForm(e) {  
    persona.nombres= document.forms["fcontact"]["fnames"].value;
    persona.nombres= document.forms["fcontact"]["fsurname"].value;
    persona.nombres= document.forms["fcontact"]["fphone"].value;
    persona.nombres= document.forms["fcontact"]["femail"].value;
    persona.nombres= document.forms["fcontact"]["fcity"].value;
    persona.nombres= document.forms["fcontact"]["fcountry"].value;

    // ahora vamos a crear un Json para guardar los datos recogidos del form

    let personajson = JSON.stringify(persona);

    personasArray.push(personajson);

    e.preventDefault();
    alert("Datos guardados con éxito"+personasArray.toString());
 

    
}
function listarcontactos(){
  let dimicTable = "";
  dimicTable += "<table>";
  dimicTable += "<tr>";
  dimicTable += "<th>Nombre</th>";
  dimicTable += "<th>Aperllidos</th>";
  dimicTable += "<th>Telefonos</th>";
  dimicTable += " <th>Email</th>";
  dimicTable += " </tr>";
  // filas con la informacion
  for(let i=0; i< personasArray.length;i++ ){
  dimicTable += "<tr>";
    let personaobjeto =JSON.parse(personasArray[i]);
    dimicTable += "<td>";
    dimicTable += personaobjeto.nombres;
    dimicTable += "</td>";
    dimicTable += "<td>";
    dimicTable += personaobjeto.apellidos;
    dimicTable += "</td>";
    dimicTable += "<td>";
    dimicTable += personaobjeto.telefono;
    dimicTable += "</td>";
    dimicTable += "<td>";
    dimicTable += personaobjeto.email;
    dimicTable += "</td>";
    dimicTable += "<td>";
    dimicTable += personaobjeto.ciudad;
    dimicTable += "</td>";
    dimicTable += "<td>";
    dimicTable += personaobjeto.pais;
    dimicTable += "</td>";
    dimicTable += "</tr>";
  dimicTable += "</table>";
  }


  document.getElementById("tableContact").innerHTML = dimicTable;


}