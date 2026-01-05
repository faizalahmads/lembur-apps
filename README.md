# lembur-apps 

# Lembur Apps Tech Stack: 
- Next.js (Web & API)
- React Native (Mobile)
- Prisma v6 - MySQL
- DB Name lembur-db

## Run Project
1. buat file .env
  - DATABASE_URL="mysql://root:@localhost:3306/lembur_db"
2. buka terminal dan migrate DB dulu dengan menjalankan "npx prisma migrate deploy"
3. Lalu pada bagian root terminal jalankan npm install, lalu pindah ke bagian api dan jalankan lagih npm install jika sudah selesai lakukan hal berikut berulang untuk bagian mobile dan web
4. untuk Runing code bisa menjalankan "npm run dev"

## Pengerjaan Git
- Buat Branch sesuai dengan Jira dengan cara "git branch -b (nama branch)"
- jika kode sudah selesai di buat maka lakukan tahap berikut ini
  1. git add .
  2. git commit -m "Nama Pekerjaan yang dilakuka"
  3. git push origin (nama branch)
