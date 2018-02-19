/******************************

 Use: "Hello".encrypt
 => "SGVsbG8="
 "SGVsbG8=".decrypt
 => "Hello"

 ******************************/

import Foundation

extension String {
    /// Encode a String to Base64
    var encrypt: String {
        return Data(self.utf8).base64EncodedString()
    }

    /// Decode a String from Base64. Returns nil if unsuccessful.
    var decrypt: String? {
        guard let data = Data(base64Encoded: self) else { return nil }
        return String(data: data, encoding: .utf8)
    }
}
