const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
	it('should return a 200 status and "Hello, world!"', async () => {
		const response = await request(app).get("/");
		expect(response.status).toBe(200);
		expect(response.text).toBe("Hello, world!");
	});
});

describe("GET /sum", () => {
	it("should return the sum of two numbers", async () => {
		const response = await request(app).get("/sum?a=3&b=4");
		expect(response.status).toBe(200);
		expect(response.body.sum).toBe(7);
	});

	it("should return a 400 error if parameters are missing", async () => {
		const response = await request(app).get("/sum?a=3");
		expect(response.status).toBe(400);
		expect(response.body.error).toBe(
			"Please provide both a and b parameters"
		);
	});
});
