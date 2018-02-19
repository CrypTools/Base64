# ==============================================================================
#
#     Use:
#     decrypt(b'SGVsbG8gV29ybGQh')
#     => b'Hello World!'
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

def decrypt(s):

    char = char_array()

    if type(s) is not bytes:
        s = str(s).encode('utf-8')

    p = 0

    while s[-1:] == b'=':
        p += 2
        s = s[:-1]

    b = ''
    for c in s:
        t = char.index(chr(c))
        t = bin(t)[2:]
        t = (6 - len(t)) * '0' + t
        b += t

    b = b[:len(b)-p]

    o = ''

    while len(b) > 0:
        t = b[:8]
        o += chr(int(t, 2))
        b = b[8:]

    return o.encode('utf-8')
