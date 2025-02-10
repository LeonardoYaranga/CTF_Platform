<?php
if (isset($_GET['page'])) {
    $page = $_GET['page'];
    include($page); // 🚨 LFI: Se puede incluir cualquier archivo
} else {
    echo "Bienvenido.";
}
?>
