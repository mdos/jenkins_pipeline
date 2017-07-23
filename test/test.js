const supertest = require("supertest");
const should = require("should");
const PORT = 4000;

var server = supertest.agent("http://localhost:" + PORT);

// UNIT TEST BEGIN
describe("SAMP UT", () => {
    it("Should return homepage", (done) => {
        server.get("/")
        .expect("Content-type", /text/)
        .expect(200)
        .end((err, res) => {
            res.status.should.equal(200);
            done();
        });
    });
});


