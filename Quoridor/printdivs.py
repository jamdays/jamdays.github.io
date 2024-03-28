for i in range(17):
    if i % 2 == 0:
        for j in range(17):
            k = i*17 + j
            if j % 2 == 0:
                print(f'<div id="{k}" class="cell"></div>')
            else:
                print(f'<div id="{k}" class="vwall"></div>')
    else:
        for j in range(17):
            k = i*17 + j
            if j%2 == 0:
                print(f'<div id="{k}" class="hwall"></div>')
            else:
                print(f'<div id="{k}" class="smwall"></div>')
