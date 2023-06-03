// esperando para tener lo conocimientos para crear una base de datos
const persona = {
    id:0 ,
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    ciudad: '',
    pais: ''
}

let personasArray = [];

function processContactForm(e) {
    persona.nombres = document.forms["fcontact"]["fnames"].value;
    persona.apellidos = document.forms["fcontact"]["fsurname"].value;
    persona.telefono = document.forms["fcontact"]["fphone"].value;
    persona.email = document.forms["fcontact"]["femail"].value;
    persona.ciudad = document.forms["fcontact"]["fcity"].value;
    persona.pais = document.forms["fcontact"]["fcountry"].value;
    persona.id = personasArray.length;// el .length es para que cuente

    let personajson = JSON.stringify(persona);

    personasArray.push(personajson);

    e.preventDefault();
    alert("Datos guardados con éxito" + personasArray.toString());

}

function listarcontactos() {
    let dinmicTable = "";
    //cabecera de la tabla
    dinmicTable += "<table class='table' ";
    dinmicTable += "<tr>";
    dinmicTable += "<th>ID</th>";
    dinmicTable += "<th>Nombres</th>";
    dinmicTable += "<th>Appelidos</th>";
    dinmicTable += "<th>Telefonos</th>";
    dinmicTable += "<th>Email</th>";
    dinmicTable += "</tr>";
//filas con la informacion
for(let i=0; i< personasArray.length;i++){
    dinmicTable += "<tr>";
    let personaobjecto = JSON.parse(personasArray[i]);
  // recuerda pornerle el Id
    dinmicTable += "<td>";
    dinmicTable += personaobjecto.id;
    dinmicTable += "</td>";
    dinmicTable += "<td>";
    dinmicTable += personaobjecto.nombres;
    dinmicTable += "</td>";
    dinmicTable += "<td>";
    dinmicTable += personaobjecto.apellidos;
    dinmicTable += "</td>";
    dinmicTable += "<td>";
    dinmicTable += personaobjecto.telefono;
    dinmicTable += "</td>";
    dinmicTable += "<td>";
    dinmicTable += personaobjecto.email;
    dinmicTable += "</td>";
    dinmicTable += "</tr>";
    dinmicTable += "<tr>";
}

    dinmicTable += "</table>";
    document.getElementById("tablecontact").innerHTML = dinmicTable;
}