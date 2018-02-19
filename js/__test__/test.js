// Test made using EyeJS - https://eye.js.org

const path = require('path').normalize(__testDir + "/../")

const { encrypt, decrypt } = require(path + "lib.js")

eye.test("Encryption", "node",
	$ => $(encrypt("Hello World!")).Equal("SGVsbG8gV29ybGQh")
)
eye.test("Decryption", "node",
	$ => $(decrypt("SGVsbG8gV29ybGQh")).Equal("Hello World!"),
	$ => $(decrypt(encrypt("CrypTools"))).Equal("CrypTools")
)
