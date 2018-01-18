var ShareFile = require("nativescript-share-file").ShareFile;
var shareFile = new ShareFile();

describe("greet function", function() {
    it("exists", function() {
        expect(shareFile.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(shareFile.greet()).toEqual("Hello, NS");
    });
});