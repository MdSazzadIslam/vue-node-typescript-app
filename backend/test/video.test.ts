import chai from "chai";
import chaiHttp from "chai-http";
import app from "../src/app";
import { describe } from "mocha";
let should = chai.should();
chai.use(chaiHttp);

describe("GET /random-url", () => {
  it("it should return 404", (done) => {
    chai
      .request(app)
      .get("/api/v1/reset")
      .end((err, res) => {
        res.should.have.status(404);

        done();
      });
  });
});

/**
 *  GET ALL VIDEOS
 */

describe("VIDOES", () => {
  it("it should GET all the videos", (done) => {
    const _page = 1,
      _pageSize = 20;
    chai
      .request(app)
      .get(`/api/videos?${_page}&${_pageSize}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});
