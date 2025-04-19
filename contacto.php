<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = htmlspecialchars($_POST["nombre"]);
  $email = htmlspecialchars($_POST["email"]);
  $mensaje = htmlspecialchars($_POST["mensaje"]);

  $to = "website.musicallyivan+contacto@gmail.com"; // CAMBIA ESTO
  $subject = "Nuevo mensaje desde tu sitio web";
  $body = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";

  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Mensaje enviado correctamente.";
  } else {
    echo "Error al enviar el mensaje.";
  }
}
?>
