<?php
require_once __DIR__ . "/../config/cors.php";
require_once __DIR__ . "/../config/database.php";

header("Content-Type: application/json");

try {
    $db = (new Database())->getConnection();
    $method = $_SERVER["REQUEST_METHOD"];

    if ($method === "GET") {
        $stmt = $db->query("SELECT * FROM products WHERE is_active = 1 ORDER BY id DESC");
        $products = $stmt ? $stmt->fetchAll(PDO::FETCH_ASSOC) : [];
        echo json_encode(["success" => true, "data" => $products]);
    } else {
        echo json_encode(["success" => false, "message" => "Method not allowed"]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
