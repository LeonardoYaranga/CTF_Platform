<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['file'])) {
    $file_name = $_FILES['file']['name'];
    $file_tmp = $_FILES['file']['tmp_name'];

    // 🚨 Solo bloquea archivos .php con extensión simple
    if (strpos($file_name, '.php') !== false) {
        die("Archivo no permitido.");
    }

    move_uploaded_file($file_tmp, "uploads/" . $file_name);
    echo "Archivo subido exitosamente.";
}
?>

<form method="POST" enctype="multipart/form-data">
    <input type="file" name="file">
    <button type="submit">Subir</button>
</form>
