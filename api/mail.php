<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = file_get_contents('php://input');
    $data = json_encode($input);

    if ($data == null) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid JSON Data"]);
    } else {
        if (
            isset($data->name) &&
            isset($data->mail) &&
            isset($data->message)
        ) {
            $to = "inquiry@stsdesigns.co";
            $content = "
                Name: $name
                Email: $email
                Content: $message
            ";
            $headers = "From: $email\r\n";
            $headers .= "Reply-To: $from\r\n";
            $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

            if (mail($to, $subject, $content, $headers)) {
                http_response_code(200);
                echo json_encode(["message" => "Email Sent"]);
            } else {
                http_response_code(500);
                echo json_encode(["message" => "Failed to send Email"]);
            }
        }
    }
}