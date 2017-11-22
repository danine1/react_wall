<?php

require 'setup.php';

$title = isset($_POST['title']) ? $_POST['title'] : null;
$text = isset($_POST['text']) ? $_POST['text'] : null;

if(!trim($text))
{
    $response = array(
        'status' => 'error',
        'error' => 'The text must not be empty'
    );

    echo json_encode($response);
    exit();
}

$query = "
    INSERT INTO `posts`
    (`title`, `text`, `published_at`)
    VALUES
    (?, ?, ?)
";

$stmt = db::execute($query, [$title, $text, date('Y-m-d H:i:s')]);

$id = db::pdo()->lastInsertId();

$query = "
    SELECT `posts`.*
    FROM `posts`
    WHERE `posts`.`id` = ?
";

$stmt = db::execute($query, [$id]);
$stmt->setFetchMode(PDO::FETCH_ASSOC);

$post = null;
foreach($stmt as $row)
{
    $post = $row;
}

$response = array(
    'status' => 'OK',
    'post' => $post
);

echo json_encode($response);
exit();