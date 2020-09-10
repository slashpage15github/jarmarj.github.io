
function submitForm(){
    var nombre = document.getElementById('nombres').value;
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('password').value;
    verify(nombre, email, contraseña)
}
function verify(nombre, email, contraseña){
    if(nombre == null)
        alert("Falta nombre");
    if(email == null)
        alert("Falta email");
    if(contraseña == null)
        alert("Falta contraseña");
    if(Boolean(nombre) && Boolean(email) && Boolean(contraseña))
        alert("Nombre:\n" + nombre + "\nE-mail:\n" + email + "\nContraseña:\n" + contraseña);
}