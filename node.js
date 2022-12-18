const http = require("https");

const options = {
	"method": "GET",
	"hostname": "sephora.p.rapidapi.com",
	"port": null,
	"path": "/auto-complete?q=acne",
	"headers": {
		"X-RapidAPI-Key": "cb824c913amshe3b87a430f80bf7p155b80jsn3a6016fb301c",
		"X-RapidAPI-Host": "sephora.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();