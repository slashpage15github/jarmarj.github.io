
function submitForm(){
    var nombre = document.getElementById('nombres').value;
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('password').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    verify(nombre, email, contraseña, fechaNacimiento)
}
function verify(nombre, email, contraseña, fechaNacimiento){
    if(nombre == null)
        alert("Falta nombre");
    if(email == null)
        alert("Falta email");
    if(contraseña == null)
        alert("Falta contraseña");
    if(fechaNacimiento == null)
        alert("Falta la fecha de nacimiento");
    if(Boolean(nombre) && Boolean(email) && Boolean(contraseña))
        alert("Nombre:\n" + nombre + "\nE-mail:\n" + email + "\nContraseña:\n"
         + contraseña + "\nFecha de nacimiento:\n" + fechaNacimiento);
}