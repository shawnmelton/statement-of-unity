<?php
require_once dirname(__FILE__) .'/config/bootstrap.php';

$service = new SubmissionsService();
$submissionList = $service->getApprovedList();
$date = date('Y-m-d');

if (count($submissionList)) {
    $submission = array_pop($submissionList);
    $date = date('Y-m-d', strtotime($submission->getDateUpdated()));
}

echo '<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
    <loc>https://hamptonroadscitycollective.org/</loc>
    <lastmod>'. $date .'</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
</url>
</urlset>';