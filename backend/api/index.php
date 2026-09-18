<?php
require_once __DIR__ . "/../config/cors.php";

echo json_encode([
    "success" => true,
    "name" => "Realic REST API",
    "status" => "online",
    "version" => "1.0.0",
    "timestamp" => date("Y-m-d H:i:s")
]);
