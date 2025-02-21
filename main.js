setTimeout(() => {
    const fontFace = new FontFace('Varela Round', 'url(data:font/woff2;base64,d09GMgABAAAAAFUwABEAAAAA37wAAFTNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGlYbvCwckQYGYACFCgiBFAmcDBEICoKsGIKDWAuEOgABNgIkA4hiBCAFhVgHihoMgVYbFcgn0Nv2kMLdqlIE4Ig+OxC7W8klXglQwTjWCGwcAMvct8v+//+c5GQM2TRArbT6+8FMUibbaF2jdycUxugdDV07j7MH2hPNYaLBa6xMcMarApO7wCnHw2zgg28499Yy5Z/NEPLECnMzfRW8WIz7+wXjr0CBkZEMhuncdRzf/Mhc0jLXvp6cKZlfODZy8/9J/GORA0l1BQfC4YGgSqOLK7D8ZmaWukFRDrZxhjm6UmYmrfASyprUak9iV2zuUHj2YtZfBZRjc2pknSRPvkTRGv9Wz94nAEUEQbSJjCbSbAHJxaKQgOrdz/Nz+3Pfe0vGQCRG+ogeqxa2EdHqgBH9Z2QjRgQgRo4KowvrN/5/00/vnXnzpku/dO2uW6tfTmk6pmbIjCQwAPoEgeDaiKI1srr33sbFWSDSyEKiMREeULg4FWFwjnRas1oBWoZYii2TDIRr5BA5OSy/+/Iq7prH/gZom+lEyWtoaQkFRVBUQKUlQ7EC56xeuSjd2pVbvysXX+VHxqq+tq8ezGxypHlhNcZMzO+1mRcqKiAFvjKp7LcboIMNjSnhtUOaoHTec1G7qNVVX3t8uZatkKqywrDwqJ4ACw8AgcNNDmZq39ssu/vR/yPpiDITSloomSJgHUVbilQy6cYhhltjWIexoYBt/tWOh+Sbw0yUf1iT/TTGMSbnTRDTismQm6GUN69bb/Lr4agiFZFJZe2YEI58lbdXDFZuDfKP1oFv5hTAf9e/U3+/bFrR9mywAaklJGIU2ThOrGEuhdfu4/XJERDvpsrSeSgAWkqdB98y9QoEyYP2dhm7TTg1p4nwLdsxWHLTpfNTYrOpTXjj/wAVmP4b//u1Pu07c/v+6T8TeukluguoUhHmgzALLgqN6O2eD3fe9AL3dqUWcLaXJ0TLAyFJ5FaFygOzi1sdYVKebFTiIoxHa2N1/q9Us2tVNylCownkcJwoB9E53EUOxyPnePbh2Pi/GoWu6m6Q1WhEQqRAcgKlsUVQEzIK3aAaIEamaD6bTlmOGzOo0Xo5mdqYTz5c9pbScU97u4X4/8+9yr1kBOA24ZDklLzlJH2/Tdp/evJ/Kb/EKaY44F/+Q5DMr8QZMBxPLCTJCT01OTkrUFg/+D7O5MxLbkw4xLv2MUlb89usU5CCFI8TrdrxOhaqrcirbm58JB8RkSCyyDDsM3e+3/+Zibu5r7pdq2JVVcSIiDFGjIqKqv2/Z3+/pCYhiMdNNbZIbYTom+/j3J3GNB81ye8RPzGCgmxlCqTtXe/3G7W4uJFfGUaBhYpIzCC++zo1bb4eWAXGYentttO8T4HxAGA0BAfGfn25CCh0iCXESiQkWiYkRwWkyiTITLNgXsRZKFg3oN8iGC7BBJQ9++LSQHFjoqkSuHdMxgrg3jUWmIB8aBhTDVwEoB9E2NoTrongd9xkqgaPhVz22ALlkMH3pfHpr+E2Ot84/EcahQK8YAoCxRzjgReYgc9/ng7X5zLCWwN1lXqvX4Qxy+FJIoDVv0EGyHEYCoUQYYSbmyHF/uTosEnuxWApTcTD+s+wK50IBQMWijmsN+pgGSMA1eOdK/PXhz7fixT9Kf8Vu72C7HQQZYlYI0m7W2k2QkeMy8/324ViqWoT4iPopWYcTh6kTpivGef8TAWofUCueooIQgW7iNd6S1JM6sIoYAHcEGKLS5QdrBAHD1nNUXMNFYmoaAtnyBxT02aAb21+Q2dATzHYkiKzyMbutPRi9tpRA1aBEWgDhFZpHDxBO6E9bX5CiHJ6N8pwykG+rbyQYAZaNXzWdFmqIs+cZGEne0a48u+fnc71mkJWi9V7g7sqjd6zvMwbbeSCPbnAzSWzJdvzLXsxvqxN2BqtCCN33/4dXJhLOvnh8DRl/dkeQc5X8loy2kWBtNe5SMXlnmb3JvxMlfIh8gR1qWdmkrOKgntOxuPlmWyJL6yNDDzcCzvd55p2SFC+mvg0N63y2mOcvTz403RLubYlulytc17hm4nepSntfoedmYsy2frTjpOl0KdiULFchpuBJbF91XMHkR4q66oUu+30gtG1M7fe57is6L4Tne8u6+pdgxdlKzvScCyawY3WiTiMW0SaDuLYi8ERLF9G4sijSQc7nZvY1kWzTdTb2Q45afamHDu8yYStzK+k8lfXrKlL8UN+2DEjjUnJrJrX3afL2Is81tzTUt/CEojXh6Bf+0aYvykrZ0uubUX6HW9OmVmlTz90SKv2nS0jOqfgL4kvD4juWLn0NlznKOYbdmSnQppxBraCn6NWVjg4WC2thh39CTx5WQpN+1eJz3epnAAUe0evOVxuv59x3wmMT98ckFjPHfY6uafpYHI/QAIBUblJ//HtQI3CzemfsWM5YptblbRt3605sdWJ+e8K3xhXoddTkbR1y7WPkb34Mg8fjT8lXg3ViNGRQxS03WftocistzbhE6GY19CqedtGtNLQWf8GR67mTvXJFyqsNqoD688uHGsheGrf11iIPBHiEXpiXQKlnemSnaNbtkK9vDetkMMOejF8pyF5eKrO2ufIfol5Grr2mR4LRWk0q0kOnOEr0f3QVhUvXJk2zFBv28l4Ze9oPb2TXbbvnltkZeB5JxgYWQV0bMDtmhpQGJm32zvRw4b5pY4vyWvxebPTwbqM1OFnB6XgrUU/YZGCVdZ6fufz2YQ+vBwBW0/p0X0Urkf2O9GLbsnMYdvPxM6z62lAPB1yfaNIqHbh6l0+gPR3vTVSrt7lwX7L+pM7BdzInjXE7aLHzW73+ZXc4eXw015xchd/cfyvhv/C6ATX6OZyC/4P6+EKxhFiC0zmzJYrLic8SgE0ssjkmCDVJDOYzDLHRIssMcVyK0y3yiozrVFvlmZnzXee2TKtOqzSpUudHj3W6XNPvWee2euFl/Z57Y0DBgw45KffDvvLv44ZRIA3VDEYQJ9yELB98HC71gPRQ3GIuK+Y+ghz7ico5oUB5BaeGB03SVqytA0pkETSl8lE+nvFDBj5AIjBIbvzA2IsoLVgbfQurdnuYU8YYILYccBhbWjcR8NKNS1dTglBmmQ+D4JQoJKilhtAYbboamX3+RAc1agFC0gPziuAF7VGgaKe7xQNEquyhK+HwjS143z7amGA/CTXSdadAWjcnA7NiEOsoUe1y4gsDoU9QEfPaeUzcdbDdN85zBaQgtP2dSA62pAjD+hSRW3DEUlvwNml6z28E4KYQ1mpEQ1n4PO3NOw5kHyaT0ZAMstlEJSKI4wGtmoX3dgDkROvAuCCozsmlTVzhL79ZsCXc5+UTB4mNMcsPv9fP+aNr9vN1slEc3nPKiVZAHasNTwhq6VwIpZ24rQyommLjfYhtLUVKudwAUAyIRj80+CO6Cyx2XPAOTLCuV2oWzXwdN5H4N+xnwCBuPikFJQ0hgsWQktHL0yUJMlSpUmXKUuefCOMNIpBgUJFjEqUqjTaGOOMN8EkU0wz3SzL1TvjrPPMuvR4Tc2f/O5Pf/n/Fh4RBhYCB4VHwDnUFeC6oxuOPiS+S3z/aB3FiBURJypegraPHCVaosRlJUmaLHnZKdvarq73F3/jhRhFFNhKBigQDBwWRFRF6YKjruDBR4AIMRKkyI6Jkebk0isGzTWe6r+/qDAccMIFNzzwwocAGtCIJjSjBa1oQxId5+xO9UR60Yd+DMhgaggjGMXYhjQ2E0sdffYOL/F9UKX6IJRAezoknQUki80CN+keCktlvZEh5pOsPnr+NQaMw3hMkHPzq7YNnUMarddPvfFGby7cqv7T4huTcMXZ4WiK9B5PhkvnIBPb35+MkMZJbR7ARwJcreQEXhAjhmna/K8qMPZZDDFQbDoxL/6sU6rHpYzaUptyyBIQ7WoXcd9DZ8tfy9zHMZBM20J/61q41Fdi3tn3jC6RWKxb59aq6/DSR/aP9bsOPSMagXWMWAuIyzHRPqKyJXqgReDwOwkvCy2y2BIrrLbGWnWanXD601uKYWhraHuk/S7pw19x1TU33HLHPfc98MaAX/7zP4yDhd3SLbEUSy3DaktXZynWOUZhxVqoZuzzXsrUiiW0J9hHPnvFNb2BpbplqW5bmruOVlnxFsoSBizTT2fBQ/HGjrpIlmFxQrDSFSQWoGuwDGtrBMOYG6FDXOUzpWNhBXsjvdMtzb0KEMa4/iKxVMihEQaQuGGGEPQotRu5NvefiSdkxiJLqKiEokpIVEZFL0AGYMTOS+EkfDyoS5v24cGUMd2HwtPHnDipyxmz53Ri3Jg1Z+LCxsy5kBg/xnQxRb+i/BJ1TM6llNinjwD9YDErgBqdYVko2iOa19uM2vDoEuA0JF4NJhcmal/L+a2COpmRLTLazaeTUTIrMjKabriDyMhgku1R8tI0fmfemAyv7B4+BmpvVtdUoQ3/QeFKtGqhRTSLJpGJyqmIRsybdWdZiQElUBgpiEsk2RKzgJXh73kHHtYUVsJHek1P6T7dpMtX6X48tsoErU+/6+HcS5j3BBAxFE2RFEahFEx6CqcQRFRrWItDwCewQXiuxfLhQDdtUNP40Uqq0XKKDVKyrKUSrInbFi9EAewpTH6ePdmNHdkWVq8dUWK3ga2/27PN2HI6ljuzXSjWdnmcWTeL87oUZ+b9BnOWvDgtbK/vb9SHCn/2oZcX0++CY+ohIOgQ6hkm0XCWhNh2D8zNJ9mypR/g9oS5ljEcoUDJ5P0Je1RUZ/+V7HT1Aiw+grixJR0Ldo7MhfaBHYi8a8oQuDxwsi1hkst6F2dBTS7FmZkDztB6oyIuKSiRPb09a0wzYHJNK6CTpySYCm/OpZPL02NYqKbDJJuSDpdF0DNTgE4wHjfs6/6zNE4b1XjAyq2oWlJz4xUS0LTNi5eLogmaouOyQnNUb7Opp8kSkI8Nw67yYnlYA73Ni+R9Pa/3nReCTKn2WsXzZUuPdxbPk2Xd1QU8VzZ1TTf1P0d4Na7CeJYkVXFJeKZoK6NUPEMSKqIS+p0+R56WX37xVMEwTl4nU1IyUDr6yJMF0P+FzpNAVuV+9iUTnBxPb+p5vOzKmWzhcdKYA2nsPBYkLEuSMwhSnCmJ4VGSkcok8UgpSl6KOo6AOfxKcFg8TDjh+ZeHCh25BeMhYh82sm8ebEo+AnbjcbhWCwMabkToeYYb+27sew3P7zm/5xL64eYCGioCZ2VQ8cqtZfGJ7UGQBQ/h0rOmxgsDe1wqN39J5sWVEwEH5JgGrdM7mYuo+KxAAXV/s4DD4eFzNVFE5s33gSWpBETfQuxTgRnM343X/d8AuiC3uYBeB2SgZ6yfgwJh2kQ4ZIkap5t8KhGcgFH4lKYZRAYJk1rn2ln36+FcIjmCnEg6kW6kB+lDikkVGUaOIQ8dCHrYeNgNDgJGIQmobMubP6XOTptAckiXhYhI5R9tOjeAs4Ae/e8OMHD8f9n/509vrXqrBAC/vX+6+mnf6vNp1dPmsuLSvcVw8XuDANYBp9wH5MnUmS9GHswK6U/O1L+7Fi/88MsDHTqZvXVCn2atTjrls48+OecnhMmCJSu27NhzGFjiu4fcQwDuuf118QlIycgpqPRo02vAlViCRphwkaIlSJzyLDlybx6efqQSZcpVqFJ946Bj2/dhoi6D8MFXj5z1zCvPvQ7A/2HBX2a77Zt+f8fGv7444mjY8N1vFzLUYXPc0aTRcedRYQh0FDQMLENZG8KG8w1KzubO5/ZE/RreJ5LBoVEpUCUtql6vphMqQrwYseJk+jzKCIV3J2o0PjyZSY1afxiv9PdHmb/iYAjBTbdcdd0N18wXxFN/RGp7/h9jEeSCksz7rtSHmPYAW0z6VKlGJ9av+R/0drb3sFsUffCXQHBHyjBZBPJI2Xp7z9YcWXVEODBKSCvhMkwM+HACy+UH6vWvwMurjD/GFfLlA42l0yC8vC1l13lPuCWGMu6BZBi1IgIDeVWRgngBNxAD3b6du7yhI06JGLWYuZGWI1XS8NsalCMpjlJHuVj3plJhVB7o3/QRed/Mn9m+CWNfMtF+GmblnISwC3vWL0JlMkTLsNPJQKBHmtVJ1Q4d+LulpF/98TDOyXJC3Q1e6W+2+B1I7vKNcnfxzhJ0YP0rqP5oKMCQOh43Vi1I0Xkuj4R+h8EK+Wd5IZGNBy7QzYlfdBVVxWiWVwwpo8wlcQjEcsf6mHGG3gvvO04nI1n2Ek+cvJp1yUhnK+6RqeCColaRASYgbalrJY5tICkqA+mc9/meuSKraiDkAcV3FCfMRcWOdfM3kS5vUAttf3L8RA58/RW85OtGOs1DbF1aWBDzBpLrQJzTiRUbuVXkQIHDHqg5RnxYIaqA0PaWaDorsivSt2W9AHAqt3B5IvJ6btbp72cDjnFcFySiFyZkONGBNxokTWhEWCagQy6SRLEYBedDBZ2iHcCYDQiw2hNlibSWxGP8KVGGCjx8g8IkG2QxF6aw/TomeLcN3om3gbcKFYWq7PKdxlDRiooB6FW+H2y2QbbeOGpRB8oKINjwtFDIJccJLW/5UOGYEflFaYsqFe348C0U6Y3tHpW+rCs68GEePnw9IjgvVXb0eIYCdn5nJkscsijHbuIEGNPSXlMjBbkgILaWK6oLTzHN73VKw6jt5Yr1D3Z9yJh5i1s/Y8tZCWgmTGSmJmf+SiyAaRyTJLq/KISbwp3YKKB2vwVOomLCZjkw1kgmK+LxaumM2OSiqKr06EwdWcpsyPnLV+9aRQ0FnO4YnWmEzmkKuWiM3DSNDJpBHppFXppDPppHflpwS0F0ny01f/gWBDXRq6dAGdycPlFceB89M8Wj3ufjFsAGW5dxK1kOryJwiGwwEUAQihAUYSgiUEShiEERhyIBRRK6JQs0xkqI5FZGrjJGshej+QQHFGft9TZ5MOfMtYvxAoBZ9ELWJW1KUI/fK5zkpMgu66UZ2LW2nVhoFybMT8IDk9AtqSZ+/0IZeMp1rYINsM4uvRrpfER07QraPwCAxy9ls5TDvJw/KlWgwYz3EjF0VvlzVEN9talYh7PYEtO5t22gUKIZ6qJChDzlhnf5/X6clhPCrou4t43aXw9h/tLArGyCoH3r/YzYjDClUmT/i2YO9/LZCDS5DpO08qhJTZM9ZBCtnXiJJ7cll2Ff9IK6ZTldWDGNssdFIoeQp2Vab6p0VREjHUtIvwjN2AkZps6ldzPJkYhRriV6OQmU/ZJM06YTipwmK2tFCh8zohECHBFFnIkyY8m3hKhQEgOGOXixo2gTnaz1flsPDoSQSaAkzebnoU5AsS87BZgQFtDvdqMgTMvW4WUuQo1GvMtcCfDk0Sdn1KKOd2ULm8FIS7cXSkRz93sPqHn7VsTspqW4mfktEYgGNGj5771kaN3CAhqrSz7MDRMT+2+5cO36g3Gxkb/tIdj0yU4egS3PgQbsa4v5OtwKsqyZV5NxAJptuknrpcRSM7HhLiv5S6hlk/TKCYpYM4U1N+f/FzMLBnkghp3byKbzthJ645FMj0LTNeLMIqsJvWxsSbj4dO46XV718O7sRSlVbU9lcfslCqC5i6yF7CrtNFayvhBou4Ia03yoaEptYMzWSfq1Yoteu9KkiAp+AROUgLAQE1lpiriASUpArpAD89iXYGhRIEyxDJQopny2hFAhTLUMpJRqRg/jQi2qTL0ENAoxTSvN0Cpg2iWgU4jr8oQR9aLa9MvAgOKGIAIYEWZcBiaUfVMUGbPnZq3ldEpvDre6UHhcwRtefkzoNyuG1ozZrJVJEFvPxM4z3R7E9zgM3JsjY06MnvuihYtn4epZuHkW7gPAPBjzZPQFRRtvz8bHs/H1bPwGgPkzBupPRlt+4Vcqal+QutrTlepuEO+8mbaX5/u0W+16pf4dVhEFBPWDWkBmAmoDyAow+xVg0Q5AVwD1A1j9GxRY/9jAwKEPYAJsoHAT0WZIvEPYFn+iKGq0jm6PKcLoHY652IvGWVyqg9ZE0Tt7lyCH7I7tNkD08GAtdr32jwX8sCkaeAsSEU9N/DajDWIU4482OX0kkm9B1t28USFazn+6E8W+bSlBq94y0MaMU9HfDnfOfj9Yeiiy8JKSpLBUiljr+wM6eqAHWO+fndzpSj9U+uvOiEwVmTdMd+NISyQEXbckzyVitdfHHUbm5lf0+qYog66Kw/9Co//AZzziSJRODCRoZNMvgu29onZKUNH2ExpG2j0l2zHWhQjhknMMELdT0DCwftEa8XNUhKBheH/vuqTsCsh1Ooj4nk/7FX4jfPxUe1ekpDSI/S0Tx0lJYRU9MgONz9Crka+gEIMQ+a520LiQJTjsOsY8556RCMjw5fj2t6YL7LYO98w0BHGxBmaqyIiycqMZRhzHLLWwPG95CzxDhGNyngNcHzugpTDPAOP2cpZTa4alafMUfKbPs1B5Ch0y8i7mJICnEUNIkZu9l24yjfheThOytkxEfM0bqOQ2zTh38n4RJSPIjopsz6CUtXOPQfiWm1Zz/Q+uSZyX+hHrOOUtYpalGr2TttAzs4v5gN7ecJg8ZGZtBuOK0xM5mcUeNsuZzesAeSQfQOsWmObl+W1saVKK3NlLAEwDxuY+sdZy4sOKcFdyR7lHbdKG0L9YE13FVK7g6ugOx30XLlsL/lm7VzmGVMGuk9LlmW4I9YrSibyCjUObX6M/vyeP7+dy+WR+3IQyB+UqfqarCBZlpXq37E4GgX6d9MLN2HLh75Fuu9Dyvl2FKCmfvWUVA3K9WkG1NLfcqh44bT9w56YP3h78uoI3qxvaMrd1zNNGWIiDcl1WO2nbrLZuIBxGfzhVlKLxEAmp0ohyY06HTTmtZ4NdNAooucvULXLbBj+rYvV5FT2GYkHJqicjd4OqlNGGVlil92YYqtk8CgMdwNqkFg/NRu62cTDzS94xFhhUvZvv0oNFRw+4wZXbjIrAOSnR7IwmW/ggJ4x1zvGk8uvtYdHQ6/vDQ8gMDFel2bq8no4UAAGcJeA93UiP24Zo3SzUpLgmVtFXapEotQUQDhbsrhctW7Dfp/EQVKLYN8/5QFIXseGDoMQgtA9QQn7iy2X6zwcY3R14JrqZK/5r704xZ2XmLiJycC2CBzSbhjdGBK3bImi+0I/QcMTK+0PHD+Ixhuaptu+ECKUwnPQgJsnAObdxaZuJ3bnnra8DQpwj99lG48EIUJv5R12o8G6EI90K4QGbWKL7OTJ3pEdKBh/mrgSxrFwUqyBGQqQDWzXZMiNHtkLCQ1pkFao7R1qZlyOS7hfsRGfbbMpdqnS4ES3gYTJ9InM3iI4hkbei0BY/UFdjrqwyUQmdBMXo0ngpUE4rBUyS3SYYgrBOOyAwBuH6rktB2p96eI6zr4+LJTnOO5+xWHG0cG8UIvQ+B8HtEVQLpl+UdHbNmebc9E096iG6dWHGHzaIkk3XItrR9y7TUZLMJRDpmu9zDea/PtM3OgynaKW9jEUytRHiqhYYTfLYAlnlwmm16QJNGQNoKu6TKS05LWRhYdYn9IpoVUWe4FdeneOvODTPEeMMipfFZr8XlGY53Z490+g64JzCWwjNVaa1KHiK96eyRAvJaXL5DQ9p4lA495R4OQ1liyu5AxrJU3XHyeNQa6chMhv6QP1lVBsldCNYNd949RAfw6ijRCp/KMEuQytYsbLw8NxmrLhPYgThJc5pIUNFTkL7TL6PB/+uGO08FAe6FEUU5KDNiWQUdc7wZA67RML2XDO6LWk6RSEKbGrtJPXB7Dyn1g1scdZQtpTqhxktrLdkeLaGMw63YjAW9zLDf4J2r9N8ilo9SBGxDRo7UWZK9TCNTt4B9UTzxjWeFM4jQ/clKP4QKagTnGlyskQJjuZeybZsCplJO7wwQHOLfi84Ot+QW90AWYvqEIU3p7bMUQuoQQLby4FdiTB0NxRunKAo50eJoGAtphk8pu80J0vfu2SgW2s8y8XQjb2pmjmfoVfPmqhWqvSLQFwnM5PZu6jM1kBxjXkpGX+LqzdzMmtNGq6mVrILWrHed65ayBHAhrmKrPGsYWogzpTD6X6uzflvHfhvwkXsSPdc3RcJS6XDFNCYDgDSyV2MGQBt1cTB5GiNni1SkVD5Ijt3tQL3QbhxxlepROTh/boJWd2hejmaQcl5a89D5jqF7jeqAUxQ0sgwCWs+J4uMyOHdXJAG5UGQVuEoI6fq2SVBApwy1EhjIrl1adoPv0AYK2sue4rxBz4W6P7AXFRRbkhZZIiUSVGVSMYh57mFmqWXFIQlSrZE5zqe6pCp4lKOObLNTAK7fBW7c8Hz1t2Ak2gjG+fi85hVFIusSj85AdHRaeSXNxnrptct+3rMxTPZx8kOTibeRKlYMUq0G9E5x2gRNBYl2Q+U7hIWFRVGTv9BjQF89saVi43r1yhJBcxkHLNCIzShAhS42LlypY0qhLZq/zkoo5oz2O6ZKlCrrUMsULMW/CLXyh4t9/tSf5FLXFZcSfW4vqeDeRe54usuipxhBp7/+1q4RwtB9I/zYxVP8KDs8JJNdz8ayDmQFa4RsMwOPvn7aUaSrJhHg/+XDCaX+elybH4x7f85v8ftktdzdD3CkTYOaxlJpX7WHlT3lj7wsGgqVj6VbPJjRqfJiwYTuIrT+5lWxfwc4FgCwVXFz3BJ9peK/pwXTS22IjhTHHwQc37sWl8l2G/o9GXaDwN8gNmU5FqAKURdPnETqaAG8jyBROziclRVBu5HTfVyd7EOu5nnCBx3N4JUkuJ/zpMSdL+pmSgOHOog3bEdqMei6ykiWXGvnEDVUuFoaAJT6xHVZ76CzhRZj2xEQ8mUorlZv3Lp/HO9Tm2MnzpLHIas+yhrHeEtcHQar+xeaNq7V0y5SvYvcZYWrdrG4Ri/Homsq2Ns6EK6qMYUlO0ZQ8hGwTacvviJ7kRoi3W8S17BPq2ps5WZ3SjRWEAucNJLYmjl/JeIwg3zQPrdQtOktn0CAtONWsLUcD3sHMhcxyUcDnt1Oj9TLiZnwLtsrAuJ3AYMuMID5q8YWZCS0z2jNbooIwZDqDMj7KruvVszH0QTzxvDxy3YAkozKW+qJxLkdwJZ82Rgd0C4zfLmNqAFyAgv4MPHIOw681asJUKc+LXpUQ+mFNXuRdq92WAvsodegjDc1LkjA23PNI4/RzqumcKTYDhHSrXOktJY72npu7KlrgtZhIiDwGFqpJ2FOZP4x4lsncIanrxfUrynVNQDUN0UTvzh4l4Y3pf0kCosGpm2mJ+ILeVw0ttbLR73zSbYnCTudxWcihfg8e3twpq1fWQUe82j3pmMRX+Sx2Vbkwz1wqE1EsdoYqMMat90boirJbWyx7wsbcSiAZg0zMFeja5b0gAAchC9as+doEGWoTbzD259N7xJmP8A13LBcDmxmO3xMEBL9juSI57RRs3imLvhq8OtwDlekzxZ3tIaeU6CQJ10xeaTnnE1hHV1JBxuB7Vmbm6XZpxZOC61a8S+Z0HcOl/UK03M0KTZjVzHlLwwRWrRQK28lGjLvyDKqRuD1vy2ClRBs55Bx64l78lMjC4jf0RWo4RFSi4VFs5S6uPSjsrzMjCzNKBRnWh5I4KvVkooWWTr5JUk47O3WWAqu7J4VD8dGalWXgeCtTSxhvWZLbkek/VWK/rabAbNOGLadDL8t1suGizceWGRCxvG9try1zlKHHZ8haoaqoDhZM3yT6K3iQU5ZZtAQfLoCpo2CyjaV60TBypC8Mme4YKpTbIhqycug+NGVpcWVJCWfToxVOZHp1dZKLlkmv31zPhMsiZxunquC8leWwLTVCIoOBxEdkDjIUZmBGxJrYcpR6eXizDhQYnTtSWqVU4Fs8s+pBPiLyv/XZz0C/QQ/SK9n36nIpn0A/2JTfv/1nFlB/6djmX4r783//tUjm7/P8X1ONo4RvD8n+h9g05iPNnbEDwEbJzGnzftjzanNN9LAtfZCn7F5jBCbdGWWgL3NroBRdejLReMoInxYkvR27EZbF1h28EO4+Ok/xtYO7bE17YB24d939PfEio3uIP67yTmPL2mqi+/7uWNJ4x27iMClafY9gQ8b/dm/iIyVBfFn9HvJLYcitcc6e2rOcyqW9yd4i93HgGgSow0OBRhGapGHYbFPp8H4KsMhjA0SMIqIeDIzi81dnZahDerV5dWtuYsMRo9MARS9b7otuhii2XE70dA2AnyaZUcLAJFIChepxg+n1vDYAEIasBhPYUUbVeBrnAzzrGt51XWulZeKOy8fmRsLncXseNgTeWRjpB2TX39Mo0rNpT9Q8uLIFxFJe98qo6r94yVV4xV+YyLxx1xbSUTfew4MorMOb5Knadeo5nwhAGejTjVEQk7jZGWkD4hRnOVZ7Rzyl6bo4fKPkmUWpDn17wIwk6ENKj7js1rKzc+dLuDM05R7TEXTYF+KcpjNXYWGd2LoBtu3iD4zkGpMxjjxVRn/8A8Npd9hG1jh6GEIscD3h0x4UhCjBPnCKmMpqvaydCPpwr3bOyTWcq/5KZ+gD4yA8yU7O0ViJEB5PmDKxSZmOBNbRuHAj+3cVUeF5uT7SJ27q+JHU1dmLpwgeeMnS3lomhk0Fm6xOfzwNNHfsrIPcglXyARqpKHy7enVg2LWFTPSo53gEfHat9avjX3OmbbWEfJKd0LD9oQOY4gU07nF23fO2nM7hrSv3B0GRsB8dXWAy4DmGw/4N0HFCmKsWi/1UII171JaamJ7ZPLPTCEwryPf4bNsavOeQLyiwLhhXY+z7nceTHteByaSvZ1+znQ1O/B3u9a+eGHsPqen6Gu+xtklY3zSMrMV1e5q67/JX3TMKotqdbrTS1m+j4m04G30PKwGYy2gcpjZVg55m9179/G5tiLHosmzSYJI8JzP1hUSvSMZD58LANAqjDSal4zy6TxUz9SCD7zsKppCbZHkWvTluhrB4ujhhZk+WwqCrkx3EA+Jwjmedt0JZKvPawENcHy5ORW6ErKqwbUBhUOm8HK3kFHUXQM/VnFpb5dhs1lLSZq2vgRiyZZsVE7ii3lJeGEXK32wNryLYf8xooUpEFTaFYAl+37PS4jUsdpvPe+dU3X8j0ebZxKlP0e92WLuTjst5GXEzkZC/ZiyKDxpOyUxPQKir5iOiU5KQsMwtS9aEbOy4mR3zAqMXzkvy8PcJioiOGQDQi88SbnOmsjjG3AmC9+RP4IeICO7kXBxTczb3ImYXQxjf7Rp5SPgCvZRhw2h9270y8FsSmMdfMD1Qeqmyzq1AJw6V3/vYszkg4mwqQ/dzRtpXC5TaIPc39l0X868P8GWS+Z/AOiwi1WWlSOvurhcYLVXGLLufNkfzoUgzn78qJUratGp0ioOWFAYp9JqOBAVKHcTdHuiqBYIXj/wE9EbZVYOxZV9ofMmyPLvfdqVa7Rs8hU0u+EF9Gq8JZQpDL3g2cHSfAwQrl6fIGXabYllX+1VEh8lHcLc8R3LJkCgSXzzmUm/+5pua67IihQCC7di6PEwohMzMZmqKWITVItAJn6mzgiKyzrLqsYjsUAuFBX1FFbU5WorXaoAznvf/R+SdykJzrGy10jkahrGFQ5DH7eilI6mIDJxw8issrGlmDQHE6lDD1wnAwnQHrpVj/fICSW9hADDF+qjciw36iya6mTYYdnY+9Osij2bx+1o7Y6UVVbs0lG9PSYygZ91qKhdqdHNNHZ0PlFJF89mE66Q4JuWWVKp27NLAldj1B2eYduW+VDePIFMvhE3zeRrsK1fp96RZcvEZC4xOqAxaz2u0QSiUuU7zdb8gMu8QoNcfGGqeU29ViHJ+LrqCjqt2KTtAjeEguG9Ki8pZGJ75q5AoHXXyo/at732gYDnISRNtigNyo9doGY9TRz9UcU0AFThkHJS9riZUgMgePIsg3YzMLSu2XDfHHrAyDUgaSvVN8L2RXMzFovR3JKcqL8CqOiyWIBYAjwBkftZZYbqHx++fj6MUuhI3f+vWccykKVT6L0l5Z6YNfTS3DLVBo2R03/OV5i1QUKs6uKMm2JgOo0JkNRQPepMpZrxttoF2g4r8n4ENIWneNzS8yce7G+rzNB2yR7OXTp6dPxrFN7MqE4jP+IyBbJdWiby6DX++sUd4/jLP4sxTimmR++jt4isjOhjODprSsevXsApO6h0n4+803cvxLs80SxpRoCZrNjOewQsz+eM3NVpV7j7w8/7xQXG1x6YWWuQMidB43v6aS1NZ8p93HjcEvtDHg2IaQi+gYt5SOBgAf29/kGLMYACKjGG5Z6xJqgxaIJeERSqVekDmBEddArzh3lrU9BbzTnLDQNCZaa4efeSFqBT/TntJtH5+bzHP6qQ7X/bVGr4jJIyTBtchEUlcsl0gL0kyen3u32zrLfdjSanIa4fbO3W//5jc7SeYOclTSM0Tj3L/kW24dNY5o1hbGdmivze+ZeyuQTWue2HRoyfU8smHJQw/23dBq7h6WMaj0ds/XOTBvTF7UePsF8/wIUsz5dYTo2iWF7qOnqQP7ufGzO9wuxuIoRJdOgKoS4+owJUeptIvpJG+xBbYJTubamRFO2E/j245tkuB3BBQWjk8LiJ3jsMzbYi9gEc+qyxrhhiCgcj78ihJAYQmj+UomFVqgMTSY3WghDkZ8+mxrzS2ymUsHnE6UPc3lrnnXqmts0FqmPfk/qKiiAsFM3bdJ8p6G8KBSXzf5PRDNu/1YXOTCMtG79GmRdBuEMIdjv8QfSn8dNXKcwFwJgBGZ0MiZb/yUaX/2EtkGBSV9T/8n0mKFnfaVSF0rDYa/2nDvsIR79wB793tWTzt0D7HiiR8i+51VMfBNH/TO4+bCcYO/E7tKhFYOjgVkEecTIEHSly4BPPEGeEoN/UjViU4d7uuFNfyrrcNgYDTqw7/F9z5yDaHsw5oMbz06dfZBB3YtCBw4+tX8+HshAuhj0FzfPrT15LfuFb9FJlCg1nZh/My07nYk+ez0zyw4sqQtApcngrbXqrHa2m834ie/+L82LKvb/e+8PGI7U9DflETKVqsjJUXGwqi394sSC86kz1FOEZkjDaerDRcHux1rE9YwfxzYTC09HTExjZQqne1oFgnGsWK/3pzTF2a38zxSPnUB8ow6p0/SlpDajS6jzdOaVcJ69RKPxl4S9C/JO5HDekIZwgAggvT8986y44M878jxkg+ZDJv50jm7iGhbk23IL2dg7lfeTUzI5JXPeSfUpKfvGZDjS2BqyYmskHAhBIxOfrlSm4ZmA0rzS8evOweHya4JBR6weSxiOdnZ6MP7V1aOJ0gAIyCcie3F6Yjn2kKiqmV4+oc19yFKPbPSfNrV5moCNYpkH1ld8BtKo81TteeGtGmGcZ2h10eqKNmN1uc6Wra2oqCyIUXkpj2TAcZhVs7OHaze1a8qqywrU8aCzzpTQWUvO1448fo2EaF3I9B+7CsIJlDj9dQBWK6PohFKyt4EfgZENyHyRM5o7DWUqX0lQ5UV/yB/IgKIwQy9q4RuHltbFNVmW5Fs22hfv55ls0SGF/8EZOQA1E2YSac/pti0+C1HZPzHXeM82b9kI4t2AzbnSSZUaObFiobCy9T0YSaDknT8GmSpDJevfovKww1ng42xp+YOSWc+hcJRE6Vs0M5v3vIj/8eUwo9ib1GvbzCZd25jB5yW6m/MMfl4dsTHbkLnU0tVrCZdH2ZdcbLgKIw5stMDZpmChMoTEka1NxWFbUqdb6DQakt2lnmi+TSYxSy2uiMfgkd432yvZ9AXuG1UQpQYVdebJD/xe5n8M+i6O7Q2hjuhpE33JsQl9oYSFdsnuLuNOJKuEFkuVMDnBLbO571pooYRPyLF92SZyHy/+aDtDaTe6XHajkrH9qjZm9Sr+pudyAty8vACXk0v/26uw04mM1nSzWpCa95vrmAOttjSWRGp2OObpKfVK2ECfuay4HosrbPBIH9nRKAm7C4xS1DTJ5ozbblUjqV422oo7R7+WXGkQhEa7XgzD9wRGyD//k0nLL34o14V635M4t7+3usbf43YFemqqA73OEoXKa7P5HhQKlcduf5TUXcC9CvwIlBJfzQ+nU2AAkzuydpKoC1G5BkipAAQU+5AqSPSKWWGWv8lkiRT87wlhPOV/APm824xmG1wWjahi02vIA8/BHqj2gXT/Gy0HiRSYnGYS4L7OlDkyy/vIJy5ISk1XfCHkZnEy9/0RxpN4FDh76Qq+6welfNJxkqLMfOTe/HccPwT7AWQDAp079lE7hUJAx5C3svCWl2UH0LOHJ47rz+Jstwko8f+pvHozb6U4uwOENBBJxNjsZT0IpDRASt0JtfepDHaLbiL4Ms4XTDbXJ7oCXPafjx8AyAAFUgs1JeYycaXQZLPriz3e8rc4VXigMSTdyBevDq7GUS+s2CF6AkipYEq9DAkAYOWM4bj0SZw1XK7yxzlWmknh1Ov1Lr3CZKXFOH5VqNz6M7+bwawV8GuZjDrevESYyaNJpTReptp1Hy6TTaDqXeLxWBnjp6EaixlYXrLfQ3wsoYcBWCCC6+Cc4wYB1Hzpin73fpQtXcBIYWR4Denjsdk1u4GfKPDt2teyccefkqG00PoiPC1cOoVqirj5l/Hc07OaIyS2osLClLTa2LvAWGKrPn/TCzBEQVwt9At0+rv0FsRFude+whSx5lpMlmvhyqlvi0PWozG/9IRg+N6QL/5d9fmnsHVwQVbFQIeXW2DReUVWaNsTADwKg1d2zURp6uTitsr8hp4lUSl8An0Wr6sJnro0B1p+EKrG8k4X5DhCrl7zeA34cCMkiawsQitbekUGAv+ZNMkjBonE8IjnZj8u8yz7/QmyCkgldg5McNamHG9PuIqPp0xv/enn5dOpJ4pdifYTqevYfQOdxFRARUbq1JczknqixonUGj//VCvleJfjKcOpiaJkh3BABErN0B9c5wNt4OxWxdjz9YbMg2wBCIuhVLz+wNqJ1qQhnYQgGXMgCUtSJuC1J2qr6tF2BMdMhafxBiP0I+M31UNGA603lYlD2lEQmbn0CiOVlaYLkc1KpWO7PAO82e6I2W4tW2a77Yi2vwnAwwi5uiBmequ31wPLExRkmFk5IwxBSdSoJnPwqIZR2+0GtxyxU2JStsmvWtUfI1sSry1Ih6D0Ba9XbYU/VluvyilyHAKUuTlMvJj7xfPPf5F7kRDZnAl1uQ6WbzvZgrssQmhx+4EHbrclhpdxbSlY28BbFz7R+vGOLYh8YNVqdAYleDyRQRpqP6yF8uV2SGJcDdnvWRxYHNdMIOUi6bqLJBGkHXk2mdnx2/36sOqRDyK6AygAQA3wAygCATEo89QUwz0pfXrrpso7v7dAZEc6VEqfr5aKEj5Pb4DHZ5lXQ5Is/BzDpmYfbT9BoZxoZ+UUhsQQaOrw3MRPwkNKr3TH8ZkwuA2BJ9sBUxDSBqPVGN1dc/doSq9Vs+zD05vlsj6SB16m+I5yh6V9LsNCxp2nUr+nZWZYDtlZd97sQPePmUn7fuH2nu92pRQ9vpjyIxkvETT+G15c9VfOssHtD2VGm6nAFTKOxg6kP3fyH54bMTtceTQE/LUzeyTtF1EyBJ0fCOQTcP8OLbRIEWxNBmE7BJ02mXyMihZ8oT6T6TQE2WHCY1Gz6ZUKxhGAeeW5iuhjBESLMmwtorzYq6jIzq5QKBB4esVPfvGibiClOq61shv+tX/W56OM5ptT/kxTjsSUX6CpbNY50x1AKgCmAnZhHCm9uEF/O8EVd2ZCLItCZivUlkTbC+xpDiDl606B/CnX+T2uYl83N/rHos9fCWiaPiYGV1tq+qkOs+PlYocK8QiBhCNq3fB47OWh3pUViaCZv4gFjyK42fxKpyg4XM2xCRMsmHtsIjohxadBMQguQH7huBbXBkTOSvV9OGQEYXZecWl0i0kSAw8gFqm5rKYr36mAQ/3+lTQIWYjhXoLX6wXlVuFOjhizz57EcSB7+FAey/FnxoN42cePZqGfXod34LqcjK6uOi7/h20/CIQR30kKFAWxr6P7Oa5sVLTPmY7OYX2bYRsM2+HNpk9y80lkKUB7E0NUnWfzJkWnEaY+RQOWCmzziR4uRKAsP1evD5tzPBqis2S2w0n42DE4BiMxrom06ZBjsyUDAzMrecXVfcIoVPUG3yjuDRA0f2Bk5tkpDl9lQCo66lYg0VQtH9Au0J4z48/hyfjTy90u5t7pM3t8+ww+861L+1J+nQ5WS+wz7Ycn/gz7IgEmNm952JhFyDKuMZrLbugIA/vLDBCQJFKSZGneNjgJHxKvyqFqh9Ah7dfbuvGu3wda9sS7cjP9YJLDA9otGOleEij2iOSW5hDZ9W9tlzxJJAECsslm1L15ErbBi0psSUwgGyZVcNQ5fAjWgukl2MLXlkUwKTXSvX0ksJJ0UAsjUynOgcqbbc225HktiZRFOSu+xGaw1X91U1fBMrFzuXdJz2Fzq99u1TpU4qBG44Gn1/4cS2EPoAGJjt1Th1FIBZIXTa8r+pv4gDLPnJ+PGmU1Sy8+MdKYCekfbGZrOLiyuKYxf4ktbpkZGt5rrfRNajqqDct9SiyucFQoCooCrt9jYlW4stXjt3V1FRvyLgsF3CAA2eDUdJzgWY4FZbVzjObuamdJd51rMKvUu1afTOrXeYuk7Z5oj9plq2d/FEonnyfDn+0c4Jf+Jnj8nfVQbWpndo47K8+hLbMWzxmIVZ1l+fXqQpk3rDgsMqtUykBEpZdaWUdbHiABWoiwM+dOZuFCMc/wnPqDV478X+v2AegISnLpH7cYR5aRYScVfdti7G9X2Lxqr+Dxix9w4jvFkjEbPz5wCW6H+7IcQzbbkMNhwIRxNCJJBK475InhdkQHi/uaaxb/J1ncSKtoXUlCknD6I+qzNlDRX8F60Mryca3yZ/JKnqx9RKcoa4w3Rs3s2V9BeD2MHxibFKV7YT5kZfsyWxc/3fXSsXGUf5yUi5Jh7vabp+TC9hDXNENwryxubipe6XZ7YAhG3W1CgalHFY2oeoxGAwYMbzKiJtKmIiR7UhdX59eUledXmwuoM8SK+yR4AAXxfy791y7PGX1eKuGYRnPk9n+X/YEHERAv6YsV984Qp6jaTDVPWFlPiaL9NFEmFD2wgiQoAm3YPmws4rIVSN9/a/RNA+f/G6A67yjS8ImkexzUYJ80ZJtF3FXFdR0flgIiQIuMoQhQrx/kDfLcfgBBxxAtgIJi2Iweyl4ud++SZQaA4gEEyGqlpJQSE24KacsCEMczD0mu+yVS33Wfzyc+qcT/SUSMiKsU6ZLkVEy1WS17GUkiVUg7goyuhhH2ss64ihzJM8Oq5ivN+SobP0/Cj1pPxlDqXox6hkrbROULvnokpnm1nP4cXag4umWIQHyHBDyRM0aln6bR3s3jlMe76Z/9yVTweqda2etFwJQttA9ErDDwd7EmgbgzKHcEAjwkSkZ1anxcjm8BpAAB99lCU9J6LYCSyKNW+ygHlIKK9k1BJqEAORl3TXIOk4rXpbKkbNN3Ud+h/kpXpieeJ1EN9Wwu/Q8ODJTKzpLJZwk0Tx2Lx/iDDSF19NPGsOcMfPvt+z8ie/o8/NdhdUc6YSMpLZRCfx1gprGhAEQq+CxljvGn8OnSVGNbTm7gF1R0XJB38DnOt8LeUrx+VbwlUzgG5ubVX/lK/Pp3+U5FloQApILYquNPc7lv7VqFgakAQZLV3aN6PcO9LvxiwrLXn65RPhAwJPYOg5Zz3MFt3c4dMycsWgtow2pob5k7uG1mlzi8DY791wk81EFtsduR9enF49zeZXQHt3W7zAnB0F6TO7htZrdV8O7uBVgvlrAHS7jEtViTzRsN5YSauCpNcaUoHQbhtUUB0YGarjTFoZASqM1KU1wJKOTXjDJGBmqp0hRXCgyqA7VMaYpDYVygho/L4AZcis4lanOQ7a/tVGjSguoQ9eMNJVez0sNZs61nEVk7awMwyTZy3mJTBMnmWLaFAwRb2QXbDA22Y91uhyElCq0f2MbXBtjVEBOo9VAVgliwuYx+N22twdAnO16IQlSiEZ0YxDQW3+r2dz8I6Yw/M583fOxHnj0zCsCcOQWGAjDmd7Bq/umpNc1zOVe1S07x8hcaQT6ermg7A6hDnwHgqqbkWFhd7ocMbXkcMqWj9mjArXYOVra1VPqrP89K4Kp2ybGwgjxsqCBXLU3G3Hn+aXHJEO214U3M27rOLe12A794skaC8byB0kFgtcwqjluW7nY7E+cfz/F7dVkoDmOxlNBwDN2OgVM7QNlSh2rMgaCC3NJudyw0YmBTQW5Zuhv3OY3dDUKIJA58TyOp9dW9KPJ8cw29KjDC5FeHhMiiqHY6awF1rwiiR20y5KgWKSwztZaiGjTvBB+57QQl4NNfZGPC3F4T6iaikL18Ao8+3NekRkfXkCTWboWVe9HrDq/9Cfrz1FaWpGpRXt/41Au+Vae8Gkkbl9xaIGPEd4U9ifFaNtzvmvkX7IMVtyAoo44wgF3ADM9CYGwJt8fZTqHyWuS9U2veA0IjsLZwYND2AuT7W8oJsNR6wvAdW3A9wAVrjfdO/fvX+NHN/1uC4bZbNOUwH0cUiQ++iGZ+RAMXrY6REvfYToUInDQR/Cw6koa7c+6RudyKhP1jGYiBkJvGQTVlFgW+KzijuSEFp3K8d2qtWRgSP4/AuMI3Iifc8awYdieSqsjS2HN2Cg3mfhQZrJS9TgndHLawO0wIt/DLih7MM+NknPcJ50nkSI47PzWCZGSylLRPdvIG0top7DB2LFr4kCrSxRERtocZe/vCXnJj29RlHHJahnQYsImVKGjKCF2XTWK9jOG5NkdaRwOwTyTRJ8JnYPl2zIBOG/pBJEH5SZJ00n2qjGOzz++ebqsijV3bYvuAMlwOO5HQPYVVwLZGq+r79QSuzWiZtYSfManzMkg5EMcULozEhdktmVzTpXEyznfQJa1Dgw/2LnaK+mOpCxC3htoVWO7sIwmJIByEyvmW5fIXW1VmbWvIOfFwaFgsS7QN25xsJp7DaXRjMTimadW6Zrqyy2Y9CIdVIqm2jQwFeMCxFeByMGHJzkPldXJ/JmcuG7fCD683W+evqDUL2776y/3ohphgtNqCO6bzcoywA8zOt+ztz15HTJbA+Ip08bYfiF5cAIXH42PfZongpCACR+bsfsRMt/eooen6hUDApMcxkn9luLkfKSgTJ580oV9CqKH3+9uCmfaQ3n8OZ1apanlnNVvDKXG720D8hQOgcTu8Lq9d44kX9l1HMhILOThXTJZQREe685nYb7FRDRa5nLuzuGUe+e2qSBEFjlzkqhs2YL7mBBqyfUggfIW7DpDOtixvl8/Z7xgefq+gCztay0cdKqk051TCCNbmKJXnLqg6T4PLaASOPHQdJBjOCVRQl5gR98ys9+mq7NDUSWTaYy245YXpQ7YyeTgpO5j5WwGEz7n+Vi4yDrfLcdSEA9sDEi89NnV10SsEMtsfjUqzao02PPKHoYzQQgJOqMO9b9OluoM/spiZEYJDF98qqJlik9ZtNPc0gqAYAfFYgsogNGiClpbBjzq2tlxQPEWt1whW226PuqbE81KijBOYSvaF5Ae4b7YCDfdyF3pMwy1BxBLVCcY8P5RQgOzysT3mqS7AnCAayMSX4b/MDo1/TN9wz5wBoP5QJdVyt1ZTIhfMxjxm0lWOm7urRVU4xYZJJlSPvYFHMZs1PQKOjytZjE7A9pz/Vc7nmP5Awy2JzWcI2+3sOD+Oh6TXuB2mvm2qNFbLwS7cHdHxn65O6OyNoxsJI2jbdgeU9uy53uhle4ezAVhxClQJupl9S0AuIXydp4ruizz3pKiNW1u4528JD+yEXuqr+2SblzGT0LcFo8MxOMZFIHmEL+0ffKQdrGcBw22DCVbv+wzADFwSKcqOxD+NHPRVzh11ichnTEZrGpOo9GCCSiGrIJNsfb3lmXP5PkmIcGAlpGMPZzBAedhVv/2S5G7tj/okGc9Ti7mxKlyND98CkcltQoDy0JEACtFcHtSjZZZu87SmfBm0SJXw2ZfNZh+OpA5KaWdnhn+rIiChcE2IQEEN7YiQaIosDgOPY7Y0nIbTfLH6H6T39fmN1i3avICDoeAglyw3wirrR/dHuu4ystIgThlzs5AIgvUWuTc0GDlS2bGhchqfpicHabAFkti4hOph1lxAN6C5BbnarkZzmy2Ovgu+0JH6OxiCQ0q7c3SagJQr1wXGP2Vp+o44gU5g4nPX8kAcNsz6FjFiUenvZxY2+ZpPcYSXRVn70TTT957S6UTEIEmZlj0wnaGfJ5gGnmNjw5opjTZmgrUTJF5FSScTdtRjpcd0WLp7pgKJzXUHSjGw7E1rjfIG5R0HIMTVrhpX4foJrsu5ClvoisbR7yrWSOwlVpqZnHLDL+ghcvgN4NcgByxffRrqMvcHqpCiafR+zh7D7Dg6Vi7l1jdep2F9YW2c3WwPetn4atqMbK7Wk788tLnaDSYmnj3GgnVtxKpRV1CR/RambSo/3yz3cHhomwJzLgyHnR7yzPFqb1NktzcwuMOpegqcheX+Ewo4yo6JrSkSqFTlqOjo5xDatYKYQPOZwDCM2etAzNoV0Hu5/l4blwrTqOok8t00oXo5JK0squPqJB+CTBO6WFaM1c16dE9rXODLIiL6eWpitQ7OmUoM0UN7j48p+lJPuFIr0zYngX2ggyZbDzkuqi7RFdai+qPWKrsCx6CuffipdrAW0mwGtMvMQpoNUWu6QKF6dpn0xA2e5ffLA4+UXqjAlYuFHw1a/6TWcACs8ELoLu55QOZZFJo7OV9yUeVGUXAq6hyWAX69NZKEwkISK89fW7jsRCjMzpGS1im9gfD+jvo7esGYroSk7ZXejU3e2OdA+EJmTChJqJH8c4XzLAk8nIvRJJx8tjnZGCoHXgT7zMF3gnh6R+jOtel4nMJcBAGeWQwph63xjwXPXd7fKhENpSl/WEx9PSF4+PpAIB4Nw+EvYdrem0mN05+GJkiBF3avp75eWo88S42+pREQvhats0CsjEnZVbr4+LcQ9zWL4lNi9mw06HUebufjMqs6zz8OLfmqVbV+JEiu/zCuTzXftJufJm5waHWjJX2gKf+KP9kj3H25fzk8r1fz6WhIulTGdvxoetJ7uG5hNjfJ8B2Pm3JDdn8HtiuEi09Wt+tbadSENU66+350IfRZb7MJbjTnhILQqo+YX+Ms57MxMYPmaaMhAdw5FhjJDPYt3XcOCTBvphYX050hgHaQtpQ6rXz8FodbEuk8A8YP28vOolpe5mmoiiTyHMFp8/8QTO+FVteuZLJk/UVk9j4cMAxn1JyXhlxe71nudJcCSPTwnsW2P6hIcujOoPsCDX0cGIGM0eSfapaOgNb98a1EsplOFcMHC3ChUuWa3G8amU/XpDAUQKzuiBff8VGLJA1X7N0tHLPopKyhnl8X/jSP06PmTsuG9d7Fb+Wi/7rGzIxBEBKf0edsvf1wc8PXpr9caqATrGJDuWerOwxVBVE1K5AKR5mrhmCxFPwHU+vRfW37XY9ZiHAWtpGSltHV7to4JM56fEDvQ+oSAxaoAs80wKmELqFMWKu34cUhtg22ZeaKswyWdVc65RNIiIhhwzz1QrwOfZOqmoHTxF0qtXshwyN9cksaHJhuYkMqrFJXftgc71pa+rYqktBFU8f6fBBVLsim2rryflIC8wgJSwvM1C6eI+og7g2LDLKFEXP4idjLflqZsUfE+1U3FOahq4uCkIzW4Nqqacm7cdlfxIkLb9OGHLtct1JhoO+Qn9S1vWbJclVGGmAsxffJfQ3teta8JZz1wTlv9gvynrFWvmaH7+lcNksBtcv0Mr+oOh2zkVHOGasH0vZMj5cDw8poM05HjHRWLynMKg6VVLEXIVnrVkoMHGWcLVp43fqK5mA5a5i6AuoLCwBe3NPnT4WwpVSHisqQeX6EA/2Ly09FY0upTmXzXAUmK3Ca6dLZDNEiRnWghnqMRc8LhK9Bcy7WQ8a9cHM+FTWqU1ifGmAr8ihyUUxETjYkXZfEHoLMpIPRnIPY3X0mDPaUahDCnEgoWYEzgbNmsaM6OMnUw8XPaohTt+8+Mxp7SnWyBW8wE0G9D0wfZ/JdEwV5eIqDGcu6lISxo0l2V7ld+c7xw14+nKOIi0jAcXItlAGOTzXVfOhJDi/UCk24OQXT3JkH8twNGM+OCVf5YO/aiKpEswisdpXFSKlEqbCs407k/CXfS4QAqkb/yg4jEpA7ZF4RVu3zdVA9VonyhtSR+NB42zjFPYNZB0zJG0d1VrEHKQCxKu2zPvBEIhM9FoJRaRZG9M2v00L3PYEqYjyA6TEzD42G230B/c+r31S2KfK+6otpa1jY8Z+yFZwiWnoykKQh8IFsOhV+zPL4vEQEArraBf4cbolEiA02GKNNMetCiOoJxInBYUh836BJbUFqSRfKpObGS8J93FZmhEFC1HbjkpjhQdnt+s8lt83WYGmv7hJMfBc71p0bNZ1hABhbFaSUwZw6EEj3QyTqdM6m8s3uKv3FWZr4frRBtJDV2SZWFo274idR6GWMZm5hYtWBPp8VvmCMG5lLvWivEX7wdF9KfywKyPT10iyBJze4b3N1EywYYMjfwE/Li3L9rJWeJ6mqwnOMC/VCxUYLPCDPMuP1yQh7WtCpAsgmT/BoWJ/wulcYC/nBts4ZMpDkBVKt9ik/VbcZKEZ824UPoK1neFwFlV/v8PryiyZJVtotQPFYRk7wr/L6i8uL3XY2GfY7rcf787Fv6yoOpYBKrVxj7HlGpmmK5olZi9X24PwpFr/f1MKFZZYXUGYwoNOjAzYKYMPT08c3VtTwXEdSzNHYmSewCamoOsB+lO8XAMwzamJmkQNCdJvinMW+o11DIF/4QyVrs70dvEUYHY4oTYQihSRmFkZeLBB59kcXrsEmG28D+5AIr6jpsEhAaSJiB8xewkZSqwg8YMAJ0EHzE5cPKJzbb1/dF/bd498J2pNCy2nOphEVjIlAfMEdA5DpqiK4hJekRnASHd5XKLxPZ67GkRvrcvwsuB7NNS8W7tgq0usqmjGggzsJWiAKosK5gDsH1DKq/UxO1nvquirmdZQx7tTmndiYMaw4fYujvxficLmASOHO3mxm6LDUgt7EPh3Eth92UiWDhhTPuttmJ6oeltGw1xbLMAtXbbTigdHeV00Hs+AUfyQa2UiQnBaQk2Veb6tqdbnzOzppiHpIz1dp6zVKfKAm3Qg2t8blCVhFyXFaThA/gq+o2sNlkGvlXHvf5XNVz9PQNuDGgNaH0Z/q0aNtvN49aqhnfXJ149K2lhTQDgKXqjEywYCNsZ0VCaJ7f0AQ5s/Itr9t1o9LlvguZ9o9uJdK/K0+eZCPL6n1+EnZcWfyCWm+hYdfIUt2xwmykl1GArFLYjjiDHRNEiDo5CKJzvPpOA5VmSWckRIOwvuFNzxClpfe27DgnIs5zKc6FcRfdkzUjFyIY4mwW+83jnZ9/Wo6VhR3uJ4P09BVpbcDXJbV6Tjwk3awKPOLEHYfR+ZC4Aht9onSUDMeJvOwAlsbDoXDcJ76jjQyzKNXa+9Dy5gE2m8gJsL+zWoxHYOO9csydGFv/Ryb1grc821zEoz8h9KOe3qjQjweqYFnStlOX+IRtsHpZXZ3KvPQlxat3H01HbhTCHN8rOKJwDtxo1xUMKYGhA1ao2U4b0POYlm59AEZHXOsWFHc+pjMdV1g7tfuXFSYjgj32Ok3CFBVnnduHeW8ZuJXQSWYsa6rc6P7GY8v+bgg2UUYFhpX53vaNoRmka7dsNaR8sEoNQMmNrlSg8W5P2wkMg6TOAhs4IkgMQJwhECHRADuZTv6ovun1mb3NjSCM0xZlXvf+V/PUvsDAUC8Ssds6HA/Ka+GLAhBu2gC3KoRVkrFqGK2NwE+5PSFg0E46PMYodY/TR0TiPjDLvoMOqK5S7WBKJfX2WEilZ/l90yiwCqua8KItQ3Khe5L+8cbwzcoCtBwz9UBD7DJLf1rVsoY9R8zktdY+x5PDM7tjvPfEE51HWFugGuwfR6IWI33l5bpA8E5PgPjwS/Y+cYDfSULm7v9oerMpHMD65WT2nq2jYzNSMzDTCQlJe2fzkBS3ZdpzDOGgNHDzqw7q5bH5+lZ1dmQD56DKUs1Y+N6P/nU4U323ZJKs46hy++/ClFNvU2VQ2rYIY3qqV/Q5gSP9ys8eT8TrKTWubGZTAIMf0asMbOWZW8DCV1eIDy+vXi9fF2vZpNu+3pWE+Dor9Yjjvy0uX3pIW9cn94uVkl3zfUDsfYeYP5//njZgN/D/R5C7x+yaNaHLg5dB0lA1FD85QygARNfggcma7Rqv9V3/4GfE//+Hdh+pJUvwlTqtKQf8DP8jZ1p09h2Xbf7o4HSOOJBh9IFKaZaBUdQQH35XqxvfLdFodPqrF7Zp7HfQ7sEgYM2IsBl1Nibp7iajxklMrOZFk/EpVA2f4Ve5/62zOpT4mgYeHVpYFWHnqrIt7+kFnmpXFMtC0KLfiyceryrf8HDR6vFZNRtL5P6OzE/qdwfBcN6CZtNuJv1AIuvZcRM7p5+7cx9YDKfHosCGrfTYejq5+Y5jUN+T0TgSNauWUOA1q77NOhBp98AO2vV0Qo9HKZ7zPYmK1QSVLhdKj9F4lAMU4CHjdR/zRagfxkA97Vl6d3FB6MqQmtn8gr0GbR1O9uHLYQKT7levEVRgKOWPNJBZUkmmO6QFoQCZ/hfKQNHaAQtU3zzgIZbK+/x3yGOnsOKtCce8bmpl8/AlF5XgOqE1WCAYkTOvKrj6t7Ac/xkhZYLHrO2b9NhkuX/S9rctOn+J0mAhil/DWXbzInVma/5Q6cbimTirzbSprhA8gkjQFIrikzOgiLqsarIlT7KpYMpOBXODKYHyegBJxp3oIm2NcCo0Unn+GxmKdiDEjgYmv5Bd8Harfn4E/0+gm2AgFbL97wQIddYaf5pVvhbwI8/pQyAX3/l0P/dwPNw7xCAwTCAgP+taWbQsVATkkRp89/iTCoMbPue6LXjZg2rZoaeJP9yvuwf/g9WNY0B6CjnZ06+F+MKlEbpKwNynWVtIatl/+oc9Hy7uORiq0e2AVhOb9r9111KXAPL+iUPf/ETOOs7527F7fSFUJ2Gz/kzEuFBai1/hY6XWDsCOp4mX41sIdMMTa00SPSXSAYS949KYL+Yp3P8P3/5usP0quOyGt6uUQSp9QB5MLi9INMl5qkgy8S6n9ogBn9xG06Lw6WuRHXcGViRAX757RupMHSjQaiXdWp9zJRIk8XZk0fmFX0xiOgYgcIM6KCGY6JdoQE/9MstIS8V4jqCrKHcKVqSa+3tQA82nUay64KYkAMJ8IEXbOCf+AR45sOyQCBl9GG6F9tEm3rqrKfJIny3FZR5Ghent+2UsCa/xCsEhC8JCd2r++UcpQSHyHzjlLf84ledSJHtdC2qp2cJ7PiQKogRQbLg4hK9zKkuqRfu95C/Jm/pOpIaepqdzfTZtXyDvs+bGk2GxGQi2ewx2Ujj8bgQAN2+qVmvUUtwu4neztc8IKB5fLtK96dfUhG/douumDpELg0jG1f17AjBnSbG4TNlQcqbJ09bPIFrFmEfivS5fTsEf4mJG09TZhIJh4jL+v9k4Nis0C1rgJ14CjfgRezA7ViCtREt1fmVma9+1vth+znmR+FH3A208F2qpYzoYfItZ6Y5aGpQYCSKLQWe3sUCAgKGKoZDHQMgm6JYZyCckDMw7NjMwGncnkHwc2QGRZqcGVQ+JMqOOrjVmC61VPgHjlbIpOzUMbY8o7Vyac3l6yvBlyhCnAwGJkaVDFLUGKtakSApjEqM9WoqwBhla032ciQxHgEhATWyYlrMUNQx0tKCrTYm9TMuUh6FVTLmlAsiVXTHAv5Vm0nfB3lonTRBou+NcGrOh26OrpqG/mW1JirlShSsk0QEQ8XWtAeMR8lVk26NNcoZFeY5nQphVGv0imCoKclon5UoS6ZjFeiHLlSjCp9BJaPi0Mqv2xokFVGuIP5M4/H54yKNLzygohvdtmwcI0+NiEpj8gQGVak7knyLhwfIiqyb5iu5wRcPZr6ofhORj5GZwEI9waBLgcMKHbGCN5/cZ37Hj1G3Xn38D9KHOqivcki3WS5UTKS2Ukvc86101DFin0gUnX1dN91S6jYlFTWND4YHhzBlKlQqV63KNuFP3RjpvSi13+SSP0QrJqvdUZR6gxAwVnwoWtC+zQlSTDTZFJNsN1WDVJ+lSZdhoUxZpplhpumyVaP98h+dkf8KSc/AyISmVjILPh2CEaRK1j/nYUw2bDli3BLSdlzPD8IoTtIsL8qqblTb9cM4MXHn/PDTL0NYceXmIMJOHnZoM58lKhsh4bPAMsIowbSsI9CoiV67Dsc1O+Gk/Q644CIKJjzCiCKOxBzn0SI1V11k2L746hSSu2FWM9hFFzk6TwwLzLPYIkvMjiJKI72NKupoMjzBCYk2uugTmjDLhFrqrkfuue9xwhORyEQlOjGJTdxg3fUm4zijdbShcOwY48gYXmVNYWVCXBijbPzMaSmxtLF3lwlEYrl12eau8jpefE0xxa8cWZb5lfjtyi2iD7+NRdl+GATNWywNlcXUmruNAzXmnjlJd8AaMkEzZoHD4LZx264cfdsENKABFTqTAVVQfdvBknEuEE0p6MQREOAyCZQMYonEfYAIJJsg2U5ABCPIngTgCIBgQCKwRCAAWDIgGRAILPHF1gR65XBQZIhPiARyib0bGl6h/RCsZ0N1abuEurDQFewaCpRY1mOhpwjbtDhfEwmlp8xLqS5/uFTjG+yrhvrQyNQ/TixQnC1neBAyrapWFTA+O4zt9Z5o+EPoGGNuqyyqByQ1kZx1JvCJY46ds1k8F4fHOqFWT5CZuhz7OhgJ4i/JPwjE/oDuC1kNCC27fgwJfNrlaQPQdr0FsJ7bDgRED7GDFdZpOu5Qj0GcQRTm4g5RpS3JYN/m2oJfmbXrIxux0o7QDjUP1qKwsGRIAbRtxK7vAgd7PobRgvNZx8iCm3lSZMRnT/GQNMCe684NxzJx5idjttMU3tJWQutRa1kRFVy8wV7NqVHYAe9wcO6HLf3oWeNnpmgwhB0CAA==)');
    fontFace.load().then((loadedFont) => {
      document.fonts.add(loadedFont);
    });
    
    let blobFrame = null;
    let blobFrameContainer = null;
    let isOpening = false;
    let isClosing = false;
    
    document.addEventListener("keydown", function (blob) {
        if (blob.code == "Backquote" && blob.ctrlKey && blob.shiftKey && !blobFrame && !isClosing) {
            isOpening = true;            
            if (blobFrame) {
                closeWithAnimation(blobFrameContainer);
                blobFrame = null;
                return;
            }

            blobFrameContainer = document.createElement("div");
            blobFrameContainer.style.cssText = `
                position: fixed;
                width: 600px;
                height: 400px;
                z-index: 999999999999;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
                background-color: #ffffff;
                opacity: 0;
                transition: opacity 0.3s ease, transform 0.3s ease;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                margin: 0px 0px;
                padding: 0px 0px;
            `;

            blobFrame = document.createElement("iframe");
            blobFrame.setAttribute("tabindex", "0");
            blobFrame.style.cssText = `
                width: 100%;
                height: calc(100% - 40px);
                border: none;
                position: absolute;
                top: 40px;
                display: block;
                user-select: none;
            `;

            fetch("https://raw.githubusercontent.com/Blobby-Boi/uBlobeBM/refs/heads/main/main.html")
                .then(response => response.text())
                .then(html => {
                    const uBlobeHtml = blobFrame.contentDocument || blobFrame.contentWindow.document;
                    uBlobeHtml.open();
                    uBlobeHtml.write(html);
                    uBlobeHtml.close();
                });

            const bar = document.createElement("div");
            bar.style.cssText = `
                width: 100%;
                height: 40px;
                background-color: #4CAF50;
                position: relative;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                user-select: none;
                cursor: move;
                margin: 0px 0px;
                padding: 0px 0px;
                border-radius: 0;
            `;

            const closeButton = document.createElement("button");
            closeButton.innerText = "×";
            closeButton.style.cssText = `
                position: absolute;
                top: 50%;
                right: 15px;
                width: 25px;
                height: 30px;
                margin: 0px 0px;
                padding: 0px 0px;
                transform: translateY(-50%);
                background: none;
                border: none;
                font-size: 20px;
                font-family: 'Varela Round', sans-serif;
                color: #fff;
                cursor: pointer;
                transition: color 0.3s ease;
            `;
            closeButton.addEventListener("mouseenter", function() {
                closeButton.style.color = "#046908";
            });
            closeButton.addEventListener("mouseleave", function() {
                closeButton.style.color = "#fff";
            });
            closeButton.addEventListener("click", closeIframe);

            const titleText = document.createElement("div");
            titleText.innerText = "uBlobeBM";
            titleText.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #fff;
                font-size: 16px;
                font-family: 'Varela Round', sans-serif;
                user-select: none;
                margin: 0px 0px;
                padding: 0px 0px;
                background-color: transparent;
                text-align: center;
            `;

            bar.appendChild(titleText);
            bar.appendChild(closeButton);

            bar.addEventListener("mousedown", startDragging);

            blobFrameContainer.appendChild(blobFrame);
            blobFrameContainer.appendChild(bar);

            document.body.appendChild(blobFrameContainer);

            blobFrameContainer.offsetHeight;

            requestAnimationFrame(() => {
                blobFrameContainer.style.opacity = "1";
                blobFrameContainer.style.transform = "translate(-50%, -47%) translateY(0)";
                blobFrame.focus();
            });
            
            setTimeout(() => {
                isOpening = false;
            }, 300);
            
            window.addEventListener("message", handleMessage);
        }
    });

    let offsetX, offsetY;
    let isDragging = false;
    
    function startDragging(e) {
        const rect = blobFrameContainer.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        isDragging = true;
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", stopDragging);
        blobFrame.style.pointerEvents = "none";
        blobFrameContainer.style.transition = 'none';
    }

    function drag(e) {
        if (!isDragging) return;
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        newX = Math.min(Math.max(newX, 0), window.innerWidth - blobFrameContainer.offsetWidth);
        newY = Math.min(Math.max(newY, 0), window.innerHeight - blobFrameContainer.offsetHeight);

        blobFrameContainer.style.left = newX + "px";
        blobFrameContainer.style.top = newY + "px";
        blobFrameContainer.style.transform = 'none';
    }

    function stopDragging() {
        isDragging = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", stopDragging);
        blobFrame.style.pointerEvents = "auto";
        blobFrameContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }

    function closeIframe() {
    	if (isOpening || isClosing) return;
        closeWithAnimation(blobFrameContainer);
        blobFrame = null;
        window.removeEventListener("message", handleMessage);
    }

    function handleMessage(message) {
        if (message.data.toString().startsWith("run:")) {
            closeWithAnimation(blobFrameContainer);
            blobFrame = null;
    
            setTimeout(() => {
                try {
                    eval(decodeURIComponent(message.data.toString().replace("run:", "")));
                } catch (error) {
                let messageData = message.data.toString().replace("run:", "");
                const replacements = {
                    '%20': ' ',
                    '%21': '!',
                    '%22': '"',
                    '%23': '#',
                    '%24': '$',
                    '%25': '%',
                    '%26': '&',
                    '%27': "'",
                    '%28': '(',
                    '%29': ')',
                    '%2C': ',',
                    '%2E': '.',
                    '%2F': '/',
                    '%3A': ':',
                    '%3B': ';',
                    '%3C': '<',
                    '%3D': '=',
                    '%3E': '>',
                    '%3F': '?',
                    '%40': '@',
                    '%5B': '[',
                    '%5D': ']',
                    '%5E': '^',
                    '%60': '`',
                    '%7B': '{',
                    '%7C': '|',
                    '%7D': '}',
                    '%7E': '~',
                };

                for (const [encoded, decoded] of Object.entries(replacements)) {
                    messageData = messageData.replace(new RegExp(encoded, 'g'), decoded);
                }
    
                try {
                    eval(messageData);
                } catch (error) {
                        console.error('Error executing bookmarklet:', error.message);
                        window.alert('An error occured while executing the bookmarklet. Try double checking the code of the bookmarklet. Error: ' + error.message);
                  }
               }
            }, 200);
        }
    }

    function closeWithAnimation(element) {
        isClosing = true;
        element.style.transition = "opacity 0.2s ease";
        element.style.opacity = "0";

        setTimeout(() => {
            element.remove();
            isClosing = false;
        }, 200);
    }
}, 500);
