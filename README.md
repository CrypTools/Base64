# Base64
<p align="center">

<img height="128" src="https://cryptools.github.io/img/base64.svg">
<br>
<img src="https://cryptools.github.io/img/status/implemented.svg" >
<img src="https://img.shields.io/travis/CrypTools/Base64.svg" >
<img src="https://img.shields.io/github/license/CrypTools/Base64.svg" >
<img src="https://img.shields.io/github/contributors/CrypTools/Base64.svg" >
</p>

A way to encode binary data in an ASCII string.

## How it works

# Encoding

Let's try to encrypt a piece text, for example `"Hello World!"`

Now, we'll take it's ASCII representation:
```
72 101 108 108 111 10 119 111 114 108 100 33
```
We'll convert that to binary:
```
01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001
```
After that, we'll split this 8 bit stream to a 6 bit stream:
```
010010 000110 010101 101100 011011 000110 111100 100000 010101 110110 111101 110010 011011 000110 010000 100001
```
> If your string cannot split up in a 6 bit stream, add padding '0' at the end, we'll replace them by '='

Now, we'll convert this 6 bit stream to numbers in base 10:
```
18 6 21 44 27 6 60 32 21 54 61 50 27 6 16 33
```
And using the Base64 table:
```
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```
We have:
```
SGVsbG8gV29ybGQh
```

# Decoding
Using the output from the encryption, we have:
```
SGVsbG8gV29ybGQh
```
We'll start by decompose it to numbers using the Base64 table:
```
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
```
so we have:
```
18 6 21 44 27 6 60 32 21 54 61 50 27 6 16 33
```
We'll convert this into a 6 bit stream:
```
010010 000110 010101 101100 011011 000110 111100 100000 010101 110110 111101 110010 011011 000110 010000 100001
```
Now, we'll take this 6 bit stream, and we'll turn it to a 8 bit stream:
```
01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001
```
Using this 8 bit stream, we'll convert it to decimal numbers:
```
72 101 108 108 111 10 119 111 114 108 100 33
```
And we'll use ASCII to convert these numbers to characters:
```
Hello World!
```

## Implementations

Language   | Encrypt                        | Decrypt
---------- | ------------------------------ | ------------------------------
Javascript | [encrypt.js](js/encrypt.js)    | [decrypt.js](js/decrypt.js)
PHP        | [encrypt.php](php/encrypt.php) | [decrypt.php](php/decrypt.php)
Python     | [encrypt.py](py/encrypt.py)    | [decrypt.py](py/decrypt.py)
Swift      | [lib.swift](swift/lib.swift)   | [lib.swift](swift/lib.swift)

### Package managers
**NPM:**
```bash
npm i @cryptoolsorg/base64
```

## Running the tests

Tests are automatically handled by [Travis CI](https://travis-ci.org/CrypTools/Base64/).

## Contributing

Please read [CONTRIBUTING.md](https://github.com/CrypTools/cryptools.github.io/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/CrypTools/Base64/tags).

## Authors

Made with ❤️ at CrypTools.

See also the list of [contributors](https://github.com/CrypTools/Base64/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the

<license> file for details</license>
