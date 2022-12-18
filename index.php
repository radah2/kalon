<?php

$request = new HttpRequest();
$request->setUrl('https://sephora.p.rapidapi.com/auto-complete');
$request->setMethod(HTTP_METH_GET);

$request->setQueryData([
	'q' => 'acne'
]);

$request->setHeaders([
	'X-RapidAPI-Key' => 'cb824c913amshe3b87a430f80bf7p155b80jsn3a6016fb301c',
	'X-RapidAPI-Host' => 'sephora.p.rapidapi.com'
]);

try {
	$response = $request->send();

	echo $response->getBody();
} catch (HttpException $ex) {
	echo $ex;
}
