# ==============================================================================
#
#     Use:
#     encrypt('Hello World!')
#     => b'SGVsbG8gV29ybGQh'
#
# ==============================================================================

def char_array():

    char = []
    for i in range(26):
        char.append(chr(65+i)) # All uppercase letters
    for i in range(26):
        char.append(chr(97+i)) # All lowercase letters
    for i in range(10):
        char.append(chr(48+i)) # All 10 digits
    char.append('+')
    char.append('/')

    return char

def encrypt(s):

    char = char_array()

    if type(s) is not bytes:
        s = str(s).encode('utf-8')

    b = ''
    for c in s:
        t = bin(c)[2:]
        t = (8 - len(t)) * '0' + t
        b += t

    c = (6 - len(b) % 6) % 6
    b += c * '0'

    o = ''

    while len(b) > 0:
        t = b[:6]
        o += char[int(t, 2)]
        b = b[6:]

    o += int(c/2) * '='

    return o.encode('ascii')
