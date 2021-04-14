const n = 5;
// buat kotak
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        process.stdout.write("* ")
    }
    process.stdout.write("\n")
}

process.stdout.write("\n")

// segitiga siku bawah kiri
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("* ")
    }
    process.stdout.write("\n")
}
process.stdout.write("\n")
// segitiga siku atas kiri
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        process.stdout.write("* ")
    }
    process.stdout.write("\n")
}

process.stdout.write("\n")

// siku atas kanan
for (let i = 0; i < n; i++) {
    // cetak spasi ke kanan
    for (let j = 0; j < i; j++) {
        process.stdout.write("  ")
    }
    // cetak bintang di kanana
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write("* ")
    }

    process.stdout.write("\n")
}

process.stdout.write("\n")

// segitiga siku bawah kiri
for (let i = 0; i < n; i++) {
    // cetak spasi ke kanan
    for (let j = i; j < n - 1; j++) {
        process.stdout.write("  ")
    }
    // cetak bintang di kanana
    for (let j = 0; j <= i; j++) {
        process.stdout.write("* ")
    }

    process.stdout.write("\n")
}

process.exit(0);