import random
import string

# Caracteres ambiguos a evitar si el usuario lo desea
AMBIGUOUS_CHARS = "O0Il1"

def generate_password(length, use_upper, use_lower, use_numbers, use_symbols, exclude_ambiguous):
    chars = ""
    
    if use_upper:
        chars += string.ascii_uppercase
    if use_lower:
        chars += string.ascii_lowercase
    if use_numbers:
        chars += string.digits
    if use_symbols:
        chars += "!@#$%^&*()_-+[]{}<>?"

    if exclude_ambiguous:
        chars = ''.join(c for c in chars if c not in AMBIGUOUS_CHARS)

    if not chars:
        return "Error: No se seleccionaron tipos de caracteres."

    return ''.join(random.choice(chars) for _ in range(length))

# Interfaz de terminal
def main():
    print("🔐 Generador de Contraseñas Personalizadas (CLI)")
    
    length = int(input("Longitud de la contraseña (8–64): "))
    if length < 8 or length > 64:
        print("Longitud inválida.")
        return

    use_upper = input("¿Incluir mayúsculas? (s/n): ").lower() == 's'
    use_lower = input("¿Incluir minúsculas? (s/n): ").lower() == 's'
    use_numbers = input("¿Incluir números? (s/n): ").lower() == 's'
    use_symbols = input("¿Incluir símbolos? (s/n): ").lower() == 's'
    exclude_ambiguous = input("¿Evitar caracteres ambiguos? (s/n): ").lower() == 's'

    quantity = int(input("¿Cuántas contraseñas generar? (ej. 1, 10, 50): "))

    print("\n🔒 Contraseñas generadas:\n")
    passwords = [generate_password(length, use_upper, use_lower, use_numbers, use_symbols, exclude_ambiguous) for _ in range(quantity)]

    for p in passwords:
        print(p)

    # Guardar en archivo
    save = input("\n¿Guardar en archivo passwords.txt? (s/n): ").lower()
    if save == 's':
        with open("passwords.txt", "w") as f:
            for p in passwords:
                f.write(p + "\n")
        print("✅ Contraseñas guardadas en 'passwords.txt'.")

if __name__ == "__main__":
    main()
