#!/bin/bash

echo "🔐 Generador de Contraseñas en Bash"
read -p "Longitud de la contraseña (8-64): " length

# Validación
if ! [[ "$length" =~ ^[0-9]+$ ]] || [ "$length" -lt 8 ] || [ "$length" -gt 64 ]; then
  echo "❌ Longitud inválida. Debe ser un número entre 8 y 64."
  exit 1
fi

# Caracteres posibles
chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}<>?'

# Generar contraseña
password=""
for i in $(seq 1 $length); do
  rand_index=$(( RANDOM % ${#chars} ))
  password="${password}${chars:$rand_index:1}"
done

echo "✅ Contraseña generada: $password"

# Preguntar si desea guardarla
read -p "¿Deseas guardar la contraseña en un archivo? (s/n): " save
if [[ "$save" == "s" ]]; then
  echo "$password" > password.txt
  echo "📁 Contraseña guardada en password.txt"
fi
